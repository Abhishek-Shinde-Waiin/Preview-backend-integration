"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addConnectCommandToProgram = addConnectCommandToProgram;
exports.getAccessToken = getAccessToken;
exports.getDir = getDir;
exports.parseRawFile = parseRawFile;
exports.getCodeConnectObjects = getCodeConnectObjects;
const fs_1 = __importDefault(require("fs"));
const upload_1 = require("../connect/upload");
const validation_1 = require("../connect/validation");
const create_1 = require("../connect/create");
const project_1 = require("../connect/project");
const logging_1 = require("../common/logging");
const convert_1 = require("../storybook/convert");
const delete_docs_1 = require("../connect/delete_docs");
const run_wizard_1 = require("../connect/wizard/run_wizard");
const parser_executables_1 = require("../connect/parser_executables");
const zod_validation_error_1 = require("zod-validation-error");
const parser_executable_types_1 = require("../connect/parser_executable_types");
const updates_1 = require("../common/updates");
const helpers_1 = require("../connect/helpers");
const parser_1 = require("../html/parser");
const parser_common_1 = require("../connect/parser_common");
const parser_2 = require("../react/parser");
function addBaseCommand(command, name, description) {
    return command
        .command(name)
        .description(description)
        .usage('[options]')
        .option('-r --dir <dir>', 'directory to parse')
        .option('-t --token <token>', 'figma access token')
        .option('-v --verbose', 'enable verbose logging for debugging')
        .option('-o --outFile <file>', 'specify a file to output generated Code Connect')
        .option('-o --outDir <dir>', 'specify a directory to output generated Code Connect')
        .option('-c --config <path>', 'path to a figma config file')
        .option('--skip-update-check', 'skips checking for an updated version of the Figma CLI')
        .option('--exit-on-unreadable-files', 'exit if any Code Connect files cannot be parsed. We recommend using this option for CI/CD.')
        .option('--dry-run', 'tests publishing without actually publishing')
        .addHelpText('before', 'For feedback or bugs, please raise an issue: https://github.com/figma/code-connect/issues');
}
function addConnectCommandToProgram(program) {
    // Main command, invoked with `figma connect`
    const connectCommand = addBaseCommand(program, 'connect', 'Figma Code Connect').action((0, updates_1.withUpdateCheck)(run_wizard_1.runWizard));
    // Sub-commands, invoked with e.g. `figma connect publish`
    addBaseCommand(connectCommand, 'publish', 'Run Code Connect locally to find any files that have figma connections and publish them to Figma. ' +
        'By default this looks for a config file named "figma.config.json", and uses the `include` and `exclude` fields to determine which files to parse. ' +
        'If no config file is found, this parses the current directory. An optional `--dir` flag can be used to specify a directory to parse.')
        .option('--skip-validation', 'skip validation of Code Connect docs')
        .option('-l --label <label>', 'label to apply to the published files')
        .option('--include-template-files', 'flag to include any figma.template.js files')
        .option('-b --batch-size <batch_size>', 'optional batch size (in number of documents) to use when uploading. Use this if you hit "request too large" errors. See README for more information.')
        .action((0, updates_1.withUpdateCheck)(handlePublish));
    addBaseCommand(connectCommand, 'unpublish', 'Run to find any files that have figma connections and unpublish them from Figma. ' +
        'By default this looks for a config file named "figma.config.json", and uses the `include` and `exclude` fields to determine which files to parse. ' +
        'If no config file is found, this parses the current directory. An optional `--dir` flag can be used to specify a directory to parse.')
        .option('--node <link_to_node>', 'specify the node to unpublish. This will unpublish for both React and Storybook.')
        .option('-l --label <label>', 'label to unpublish for')
        .option('--include-template-files', 'flag to include any figma.template.js files')
        .action((0, updates_1.withUpdateCheck)(handleUnpublish));
    addBaseCommand(connectCommand, 'parse', 'Run Code Connect locally to find any files that have figma connections, then converts them to JSON and outputs to stdout.')
        .option('-l --label <label>', 'label to apply to the parsed files')
        .option('--include-template-files', 'flag to include any figma.template.js files')
        .action((0, updates_1.withUpdateCheck)(handleParse));
    addBaseCommand(connectCommand, 'create', 'Generate a Code Connect file with boilerplate in the current directory for a Figma node URL')
        .argument('<figma-node-url>', 'Figma node URL to create the Code Connect file from')
        .action((0, updates_1.withUpdateCheck)(handleCreate));
}
function getAccessToken(cmd) {
    return cmd.token ?? process.env.FIGMA_ACCESS_TOKEN;
}
function getAccessTokenOrExit(cmd) {
    const token = getAccessToken(cmd);
    if (!token) {
        (0, logging_1.exitWithError)(`Couldn't find a Figma access token. Please provide one with \`--token <access_token>\` or set the FIGMA_ACCESS_TOKEN environment variable`);
    }
    return token;
}
function getDir(cmd) {
    return cmd.dir ?? process.cwd();
}
function setupHandler(cmd) {
    if (cmd.verbose) {
        logging_1.logger.setLogLevel(logging_1.LogLevel.Debug);
    }
}
function transformDocFromParser(doc, remoteUrl, config) {
    let source = doc.source;
    if (source) {
        try {
            const url = new URL(source);
            if (url.protocol !== 'http:' && url.protocol !== 'https:') {
                throw new Error('Invalid URL scheme');
            }
        }
        catch (e) {
            source = (0, project_1.getRemoteFileUrl)(source, remoteUrl);
        }
    }
    // TODO This logic is duplicated in parser.ts parseDoc due to some type issues
    let figmaNode = doc.figmaNode;
    if (config.documentUrlSubstitutions) {
        Object.entries(config.documentUrlSubstitutions).forEach(([from, to]) => {
            figmaNode = figmaNode.replace(from, to);
        });
    }
    return {
        ...doc,
        source,
        figmaNode,
    };
}
function parseRawFile(filePath, label) {
    const fileContent = fs_1.default.readFileSync(filePath, 'utf-8');
    const [firstLine, ...templateLines] = fileContent.split('\n');
    const figmaNodeUrl = firstLine.replace(/\/\/\s*url=/, '').trim();
    const template = templateLines.join('\n');
    return {
        figmaNode: figmaNodeUrl,
        template,
        // nestable by default unless user specifies otherwise
        templateData: { nestable: true },
        language: 'raw',
        label: label || 'Code',
        source: '',
        sourceLocation: { line: -1 },
        metadata: {
            cliVersion: require('../../package.json').version,
        },
    };
}
async function getCodeConnectObjects(cmd, projectInfo, silent = false) {
    if (cmd.jsonFile) {
        try {
            return JSON.parse(fs_1.default.readFileSync(cmd.jsonFile, 'utf8'));
        }
        catch (e) {
            logging_1.logger.error('Failed to parse JSON file:', e);
        }
    }
    let codeConnectObjects = [];
    if (projectInfo.config.parser === 'react') {
        codeConnectObjects = await getReactCodeConnectObjects(projectInfo, cmd, silent);
    }
    else if (projectInfo.config.parser === 'html') {
        codeConnectObjects = await getCodeConnectObjectsFromParseFn({
            parseFn: parser_1.parseHtmlDoc,
            fileExtension: 'ts',
            projectInfo,
            cmd,
            silent,
        });
    }
    else {
        const payload = {
            mode: 'PARSE',
            paths: projectInfo.files,
            config: projectInfo.config,
        };
        try {
            const stdout = await (0, parser_executables_1.callParser)(
            // We use `as` because the React parser makes the types difficult
            // TODO remove once React is an executable parser
            projectInfo.config, payload, projectInfo.absPath);
            const parsed = parser_executable_types_1.ParseResponsePayload.parse(stdout);
            const { hasErrors } = (0, parser_executables_1.handleMessages)(parsed.messages);
            if (hasErrors) {
                (0, logging_1.exitWithError)('Errors encountered calling parser, exiting');
            }
            codeConnectObjects = parsed.docs.map((doc) => ({
                ...transformDocFromParser(doc, projectInfo.remoteUrl, projectInfo.config),
                metadata: {
                    cliVersion: require('../../package.json').version,
                },
            }));
        }
        catch (e) {
            // zod-validation-error formats the error message into a readable format
            (0, logging_1.exitWithError)(`Error returned from parser: ${(0, zod_validation_error_1.fromError)(e)}. Try re-running the command with --verbose for more information.`);
        }
    }
    if (cmd.includeTemplateFiles) {
        const rawTemplateFiles = projectInfo.files.filter((f) => f.endsWith('.figma.template.js'));
        const rawTemplateDocs = rawTemplateFiles.map((file) => parseRawFile(file, cmd.label));
        codeConnectObjects = codeConnectObjects.concat(rawTemplateDocs);
    }
    if (cmd.label || projectInfo.config.label) {
        logging_1.logger.info(`Using label "${cmd.label || projectInfo.config.label}"`);
        codeConnectObjects.forEach((doc) => {
            doc.label = cmd.label || projectInfo.config.label || doc.label;
        });
    }
    return codeConnectObjects;
}
// React/Storybook and HTML parsers are handled as special cases for now, they
// do not use the parser executable model but instead directly call a function
// in the code base. We may want to transition them to that model in future.
async function getCodeConnectObjectsFromParseFn({ 
/** The function used to parse a source file into a Code Connect object */
parseFn, 
/** Optional function used to resolve imports in a source file */
resolveImportsFn, 
/** The file extension to filter for when checking if files should be parsed */
fileExtension, 
/** Project info */
projectInfo, 
/** The commander command object */
cmd, 
/** Silences console output */
silent = false, }) {
    const codeConnectObjects = [];
    const tsProgram = (0, project_1.getTsProgram)(projectInfo);
    const { files, remoteUrl, config, absPath } = projectInfo;
    for (const file of files.filter((f) => (0, parser_common_1.isFigmaConnectFile)(tsProgram, f, fileExtension))) {
        try {
            const docs = await (0, parser_common_1.parseCodeConnect)({
                program: tsProgram,
                file,
                config,
                parseFn,
                resolveImportsFn,
                absPath,
                parseOptions: {
                    repoUrl: remoteUrl,
                    debug: cmd.verbose,
                    silent,
                },
            });
            codeConnectObjects.push(...docs);
            if (!silent || cmd.verbose) {
                logging_1.logger.info((0, logging_1.success)(file));
            }
        }
        catch (e) {
            if (!silent || cmd.verbose) {
                logging_1.logger.error(`❌ ${file}`);
                if (e instanceof parser_common_1.ParserError) {
                    if (cmd.verbose) {
                        console.trace(e);
                    }
                    else {
                        logging_1.logger.error(e.toString());
                    }
                    if (cmd.exitOnUnreadableFiles) {
                        logging_1.logger.info('Exiting due to unreadable files');
                        process.exit(1);
                    }
                }
                else {
                    if (cmd.verbose) {
                        console.trace(e);
                    }
                    else {
                        logging_1.logger.error(new parser_common_1.InternalError(String(e)).toString());
                    }
                }
            }
        }
    }
    return codeConnectObjects;
}
async function getReactCodeConnectObjects(projectInfo, cmd, silent = false) {
    const codeConnectObjects = await getCodeConnectObjectsFromParseFn({
        parseFn: parser_2.parseReactDoc,
        resolveImportsFn: parser_2.findAndResolveImports,
        fileExtension: ['tsx', 'jsx'],
        projectInfo,
        cmd,
        silent,
    });
    const storybookCodeConnectObjects = await (0, convert_1.convertStorybookFiles)({
        projectInfo: (0, project_1.getReactProjectInfo)(projectInfo),
    });
    const allCodeConnectObjects = codeConnectObjects.concat(storybookCodeConnectObjects);
    return allCodeConnectObjects;
}
async function handlePublish(cmd) {
    setupHandler(cmd);
    let dir = getDir(cmd);
    const projectInfo = await (0, project_1.getProjectInfo)(dir, cmd.config);
    const codeConnectObjects = await getCodeConnectObjects(cmd, projectInfo);
    if (codeConnectObjects.length === 0) {
        logging_1.logger.warn(`No Code Connect files found in ${dir} - Make sure you have configured \`include\` and \`exclude\` in your figma.config.json file correctly, or that you are running in a directory that contains Code Connect files.`);
        process.exit(0);
    }
    if (cmd.dryRun) {
        logging_1.logger.info(`Files that would be published:`);
        logging_1.logger.info(codeConnectObjects.map((o) => `- ${o.component} (${o.figmaNode})`).join('\n'));
    }
    const accessToken = getAccessTokenOrExit(cmd);
    if (cmd.skipValidation) {
        logging_1.logger.info('Validation skipped');
    }
    else {
        logging_1.logger.info('Validating Code Connect files...');
        var start = new Date().getTime();
        const valid = await (0, validation_1.validateDocs)(cmd, accessToken, codeConnectObjects);
        if (!valid) {
            (0, helpers_1.exitWithFeedbackMessage)(1);
        }
        else {
            var end = new Date().getTime();
            var time = end - start;
            logging_1.logger.info(`All Code Connect files are valid (${time}ms)`);
        }
    }
    if (cmd.dryRun) {
        logging_1.logger.info(`Dry run complete`);
        process.exit(0);
    }
    let batchSize;
    if (cmd.batchSize) {
        batchSize = parseInt(cmd.batchSize, 10);
        if (isNaN(batchSize)) {
            logging_1.logger.error('Error: failed to parse batch-size. batch-size passed must be a number');
            (0, helpers_1.exitWithFeedbackMessage)(1);
        }
    }
    (0, upload_1.upload)({ accessToken, docs: codeConnectObjects, batchSize: batchSize, verbose: cmd.verbose });
}
async function handleUnpublish(cmd) {
    setupHandler(cmd);
    let dir = getDir(cmd);
    if (cmd.dryRun) {
        logging_1.logger.info(`Files that would be unpublished:`);
    }
    let nodesToDeleteRelevantInfo;
    if (cmd.node) {
        nodesToDeleteRelevantInfo = [
            { figmaNode: cmd.node, label: 'React' },
            { figmaNode: cmd.node, label: 'Storybook' },
        ];
    }
    else {
        const projectInfo = await (0, project_1.getProjectInfo)(dir, cmd.config);
        const codeConnectObjects = await getCodeConnectObjects(cmd, projectInfo);
        nodesToDeleteRelevantInfo = codeConnectObjects.map((doc) => ({
            figmaNode: doc.figmaNode,
            label: cmd.label || projectInfo.config.label || doc.label,
        }));
        if (cmd.label || projectInfo.config.label) {
            logging_1.logger.info(`Using label ${cmd.label || projectInfo.config.label}`);
        }
        if (cmd.dryRun) {
            logging_1.logger.info(`Dry run complete`);
            process.exit(0);
        }
    }
    const accessToken = getAccessTokenOrExit(cmd);
    (0, delete_docs_1.delete_docs)({
        accessToken,
        docs: nodesToDeleteRelevantInfo,
    });
}
async function handleParse(cmd) {
    setupHandler(cmd);
    const dir = cmd.dir ?? process.cwd();
    const projectInfo = await (0, project_1.getProjectInfo)(dir, cmd.config);
    const codeConnectObjects = await getCodeConnectObjects(cmd, projectInfo);
    if (cmd.dryRun) {
        logging_1.logger.info(`Dry run complete`);
        process.exit(0);
    }
    if (cmd.outFile) {
        fs_1.default.writeFileSync(cmd.outFile, JSON.stringify(codeConnectObjects, null, 2));
        logging_1.logger.info(`Wrote Code Connect JSON to ${(0, logging_1.highlight)(cmd.outFile)}`);
    }
    else {
        // don't format the output, so it can be piped to other commands
        console.log(JSON.stringify(codeConnectObjects, undefined, 2));
    }
}
async function handleCreate(nodeUrl, cmd) {
    setupHandler(cmd);
    const dir = cmd.dir ?? process.cwd();
    const projectInfo = await (0, project_1.getProjectInfo)(dir, cmd.config);
    if (cmd.dryRun) {
        process.exit(0);
    }
    const accessToken = getAccessTokenOrExit(cmd);
    return (0, create_1.createCodeConnectFromUrl)({
        accessToken,
        // We remove \s to allow users to paste URLs inside quotes - the terminal
        // paste will add backslashes, which the quotes preserve, but expected user
        // behaviour would be to strip the quotes
        figmaNodeUrl: nodeUrl.replace(/\\/g, ''),
        outFile: cmd.outFile,
        outDir: cmd.outDir,
        projectInfo,
    });
}
//# sourceMappingURL=connect.js.map