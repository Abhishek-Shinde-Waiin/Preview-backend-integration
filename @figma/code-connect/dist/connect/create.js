"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeComponentName = normalizeComponentName;
exports.createCodeConnectFromUrl = createCodeConnectFromUrl;
const helpers_1 = require("./helpers");
const fs_1 = __importDefault(require("fs"));
const figma_rest_api_1 = require("./figma_rest_api");
const logging_1 = require("../common/logging");
const parser_executables_1 = require("./parser_executables");
const create_1 = require("../react/create");
const parser_executable_types_1 = require("./parser_executable_types");
const zod_validation_error_1 = require("zod-validation-error");
const create_2 = require("../html/create");
const fetch_1 = require("../common/fetch");
function normalizeComponentName(name) {
    // Convert the string to PascalCase and ensure first character is not a digit
    return name
        .replace(/[^a-zA-Z0-9]/g, ' ')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')
        .replace(/^[0-9]/, '_$&');
}
async function createCodeConnectFromUrl({ accessToken, figmaNodeUrl, outFile, outDir, projectInfo, }) {
    try {
        const fileKey = (0, helpers_1.parseFileKey)(figmaNodeUrl);
        const nodeIds = (0, helpers_1.parseNodeIds)([figmaNodeUrl]);
        const apiUrl = (0, figma_rest_api_1.getApiUrl)(figmaNodeUrl ?? '') + `/code_connect/${fileKey}/cli_data?ids=${nodeIds.join(',')}`;
        if (nodeIds.length === 0) {
            (0, logging_1.exitWithError)(`Invalid figma node URL: the provided url "${figmaNodeUrl}" does not contain a node-id`);
        }
        else if (nodeIds.length > 1) {
            (0, logging_1.exitWithError)(`Invalid figma node URL: the provided url "${figmaNodeUrl}" contains more than one node-id`);
        }
        logging_1.logger.info('Fetching component information from Figma...');
        const response = process.env.CODE_CONNECT_MOCK_CREATE_API_RESPONSE
            ? {
                response: { status: 200 },
                data: JSON.parse(fs_1.default.readFileSync(process.env.CODE_CONNECT_MOCK_CREATE_API_RESPONSE, 'utf-8')),
            }
            : await fetch_1.request.get(apiUrl, {
                headers: (0, figma_rest_api_1.getHeaders)(accessToken),
            });
        if (response.response.status === 200) {
            logging_1.logger.info('Parsing response');
            const component = (0, helpers_1.findComponentsInDocument)(response.data.document, nodeIds)[0];
            if (component === undefined) {
                (0, logging_1.exitWithError)('Could not find a component in the provided URL');
            }
            const normalizedName = normalizeComponentName(component.name);
            const componentPayload = {
                figmaNodeUrl,
                id: component.id,
                name: component.name,
                normalizedName,
                type: component.type,
                componentPropertyDefinitions: component.componentPropertyDefinitions,
            };
            logging_1.logger.info('Generating Code Connect files...');
            let result;
            if (projectInfo.config.parser === 'react') {
                const payload = {
                    mode: 'CREATE',
                    destinationDir: outDir ?? process.env.INIT_CWD ?? process.cwd(),
                    destinationFile: outFile,
                    normalizedName,
                    figmaConnections: [{ component: componentPayload }],
                    config: projectInfo.config,
                };
                result = await (0, create_1.createReactCodeConnect)(payload);
            }
            else if (projectInfo.config.parser === 'html') {
                const payload = {
                    mode: 'CREATE',
                    destinationDir: outDir ?? process.env.INIT_CWD ?? process.cwd(),
                    destinationFile: outFile,
                    normalizedName,
                    figmaConnections: [{ component: componentPayload }],
                    config: projectInfo.config,
                };
                result = await (0, create_2.createHtmlCodeConnect)(payload);
            }
            else {
                try {
                    const payload = {
                        mode: 'CREATE',
                        destinationDir: outDir ?? process.env.INIT_CWD ?? process.cwd(),
                        destinationFile: outFile,
                        component: componentPayload,
                        config: projectInfo.config,
                    };
                    const stdout = await (0, parser_executables_1.callParser)(
                    // We use `as` because the React parser makes the types difficult
                    // TODO remove once React is an executable parser
                    projectInfo.config, payload, projectInfo.absPath);
                    result = parser_executable_types_1.CreateResponsePayload.parse(stdout);
                }
                catch (e) {
                    throw (0, zod_validation_error_1.fromError)(e);
                }
            }
            const { hasErrors } = (0, parser_executables_1.handleMessages)(result.messages);
            if (hasErrors) {
                (0, logging_1.exitWithError)('Errors encountered calling parser, exiting');
            }
            logging_1.logger.info('Code Connect files generated successfully:');
            result.createdFiles.forEach((file) => {
                logging_1.logger.info(`${file.filePath}`);
            });
        }
        else {
            logging_1.logger.error(`Failed to get node information from Figma with status: ${response.response.status}`);
            logging_1.logger.debug('Failed to get node information from Figma with Body:', response.data);
        }
    }
    catch (err) {
        if ((0, fetch_1.isFetchError)(err)) {
            if (err.response) {
                logging_1.logger.error(`Failed to get node data from Figma (${err.response.status}): ${err.response.status} ${err.data?.err ?? err.data?.message}`);
            }
            else {
                logging_1.logger.error(`Failed to get node data from Figma: ${err.message}`);
            }
            logging_1.logger.debug(JSON.stringify(err.data));
        }
        else {
            logging_1.logger.error(`Failed to create: ${err}`);
        }
        (0, helpers_1.exitWithFeedbackMessage)(1);
    }
}
//# sourceMappingURL=create.js.map