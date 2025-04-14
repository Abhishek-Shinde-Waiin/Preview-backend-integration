import { ProjectInfo } from './project';
interface GenerateDocsArgs {
    accessToken: string;
    figmaNodeUrl: string;
    outFile: string;
    outDir: string;
    projectInfo: ProjectInfo;
}
export declare function normalizeComponentName(name: string): string;
export declare function createCodeConnectFromUrl({ accessToken, figmaNodeUrl, outFile, outDir, projectInfo, }: GenerateDocsArgs): Promise<void>;
export {};
//# sourceMappingURL=create.d.ts.map