"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callParser = callParser;
exports.handleMessages = handleMessages;
const logging_1 = require("../common/logging");
const cross_spawn_1 = require("cross-spawn");
const get_swift_parser_dir_1 = require("../parser_scripts/get_swift_parser_dir");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const get_gradlew_path_1 = require("../parser_scripts/get_gradlew_path");
const compose_errors_1 = require("../parser_scripts/compose_errors");
const temporaryIOFilePath = 'tmp/figma-code-connect-parser-io.json.tmp';
const FIRST_PARTY_PARSERS = {
    swift: {
        command: async (cwd, config) => {
            return `swift run --package-path ${await (0, get_swift_parser_dir_1.getSwiftParserDir)(cwd, config.xcodeprojPath, config.swiftPackagePath)} figma-swift`;
        },
    },
    compose: {
        command: async (cwd, config, mode) => {
            const gradlewPath = await (0, get_gradlew_path_1.getGradleWrapperPath)(cwd, config.gradleWrapperPath);
            const gradleExecutableInvocation = (0, get_gradlew_path_1.getGradleWrapperExecutablePath)(gradlewPath);
            if (mode === 'CREATE') {
                return `${gradleExecutableInvocation} -p ${gradlewPath} createCodeConnect -PfilePath=${temporaryIOFilePath} -q`;
            }
            else {
                return `${gradleExecutableInvocation} -p ${gradlewPath} parseCodeConnect -PfilePath=${temporaryIOFilePath} -q`;
            }
        },
        temporaryIOFilePath: temporaryIOFilePath,
    },
    custom: {
        command: async (cwd, config) => {
            if (!('parserCommand' in config)) {
                (0, logging_1.exitWithError)('No `parserCommand` specified in config. A command is required when using the `custom` parser.');
            }
            logging_1.logger.info('Using custom parser command: ' + config.parserCommand);
            return config.parserCommand;
        },
    },
    __unit_test__: {
        command: async () => 'node parser/unit_test_parser.js',
    },
};
function getParser(config) {
    const parser = FIRST_PARTY_PARSERS[config.parser];
    if (!parser) {
        (0, logging_1.exitWithError)(`Invalid parser specified: "${config.parser}". Valid parsers are: ${Object.keys(FIRST_PARTY_PARSERS).join(', ')}.`);
    }
    return parser;
}
async function callParser(config, payload, cwd) {
    return new Promise(async (resolve, reject) => {
        try {
            const parser = getParser(config);
            const command = await parser.command(cwd, config, payload.mode);
            if (parser.temporaryIOFilePath) {
                fs_1.default.mkdirSync(path_1.default.dirname(parser.temporaryIOFilePath), { recursive: true });
                fs_1.default.writeFileSync(temporaryIOFilePath, JSON.stringify(payload));
            }
            logging_1.logger.debug(`Running parser: ${command}`);
            const commandSplit = command.split(' ');
            const child = (0, cross_spawn_1.spawn)(commandSplit[0], commandSplit.slice(1), {
                cwd,
            });
            let stdout = '';
            let stderr = '';
            child.stdout.on('data', (data) => {
                stdout += data.toString();
            });
            // This handles any stderr output from the parser.
            //
            // Parsers should not generally write to stderr, and should instead return
            // an array of messages at the end of execution, but there are cases where
            // you might want to log output immediately rather than at the end of the
            // run - e.g. if the parser can take a while to compile first time, you
            // might want to inform the user immediately that it is compiling.
            //
            // To log output, the parser should write a JSON object to stderr with the
            // same structure as the `messages` response object, e.g. `{ "level":
            // "INFO", "message": "Compiling parser..." }`.
            //
            // Non-JSON output will be logged as debug messages, as this is likely to
            // be e.g. compiler output which the user doesn't need to see ordinarily.
            child.stderr.on('data', (data) => {
                const message = data.toString();
                const trimmedMessage = message.trim();
                try {
                    const parsed = JSON.parse(trimmedMessage);
                    handleMessages([parsed]);
                }
                catch (e) {
                    stderr += message;
                    logging_1.logger.debug(trimmedMessage);
                }
            });
            child.on('close', (code) => {
                if (code !== 0) {
                    const errorSuggestion = determineErrorSuggestionFromStderr(stderr, config.parser);
                    if (errorSuggestion) {
                        reject(new Error(`Parser exited with code ${code}: ${errorSuggestion}`));
                    }
                    else {
                        reject(new Error(`Parser exited with code ${code}`));
                    }
                }
                else {
                    resolve(JSON.parse(parser.temporaryIOFilePath
                        ? fs_1.default.readFileSync(parser.temporaryIOFilePath, 'utf8')
                        : stdout));
                }
                if (parser.temporaryIOFilePath) {
                    fs_1.default.unlinkSync(parser.temporaryIOFilePath);
                    // Delete parent directory if empty after removing temp file
                    const parentDir = path_1.default.dirname(parser.temporaryIOFilePath);
                    if (fs_1.default.readdirSync(parentDir).length === 0) {
                        fs_1.default.rmdirSync(parentDir);
                    }
                }
            });
            child.on('error', (e) => {
                reject(e);
            });
            if (!parser.temporaryIOFilePath) {
                child.stdin.write(JSON.stringify(payload));
                child.stdin.end();
            }
        }
        catch (e) {
            (0, logging_1.exitWithError)(`Error calling parser: ${e}. Try re-running the command with --verbose for more information.`);
        }
    });
}
function handleMessages(messages) {
    let hasErrors = false;
    messages.forEach((message) => {
        switch (message.level) {
            case 'DEBUG':
                logging_1.logger.debug(message.message);
                break;
            case 'INFO':
                logging_1.logger.info(message.message);
                break;
            case 'WARN':
                logging_1.logger.warn(message.message);
                break;
            case 'ERROR':
                logging_1.logger.error(message.message);
                hasErrors = true;
                break;
        }
    });
    return { hasErrors };
}
// This function is used to determine if there is a suggestion for the error based on the output
// to stderr. Certain parsers return the same error code for different types of errors such as
// errors from invoking the gradle wrapper for Compose.
// In the future we should consider exposing a different API for having the parser return a suggestion directly.
function determineErrorSuggestionFromStderr(stderr, parser) {
    if (parser === 'compose') {
        return (0, compose_errors_1.getComposeErrorSuggestion)(stderr);
    }
    return null;
}
//# sourceMappingURL=parser_executables.js.map