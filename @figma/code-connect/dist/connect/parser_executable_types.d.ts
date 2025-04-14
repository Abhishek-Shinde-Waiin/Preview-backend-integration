import { z } from 'zod';
import { ComponentTypeSignature } from '../react/parser';
import { Intrinsic } from './intrinsics';
export type ParseRequestPayload = {
    mode: 'PARSE';
    paths: string[];
    config: Record<string, any>;
};
export declare const ParserExecutableMessages: z.ZodArray<z.ZodObject<{
    level: z.ZodUnion<[z.ZodLiteral<"DEBUG">, z.ZodLiteral<"INFO">, z.ZodLiteral<"WARN">, z.ZodLiteral<"ERROR">]>;
    type: z.ZodOptional<z.ZodString>;
    message: z.ZodString;
    sourceLocation: z.ZodOptional<z.ZodObject<{
        file: z.ZodString;
        line: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        file: string;
        line?: number | undefined;
    }, {
        file: string;
        line?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    message: string;
    level: "ERROR" | "DEBUG" | "INFO" | "WARN";
    sourceLocation?: {
        file: string;
        line?: number | undefined;
    } | undefined;
    type?: string | undefined;
}, {
    message: string;
    level: "ERROR" | "DEBUG" | "INFO" | "WARN";
    sourceLocation?: {
        file: string;
        line?: number | undefined;
    } | undefined;
    type?: string | undefined;
}>, "many">;
export declare const ParseResponsePayload: z.ZodObject<{
    docs: z.ZodArray<z.ZodObject<{
        figmaNode: z.ZodString;
        component: z.ZodOptional<z.ZodString>;
        variant: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        source: z.ZodOptional<z.ZodString>;
        sourceLocation: z.ZodOptional<z.ZodObject<{
            line: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            line: number;
        }, {
            line: number;
        }>>;
        template: z.ZodString;
        templateData: z.ZodObject<{
            props: z.ZodRecord<z.ZodString, any>;
            imports: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            nestable: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            props: Record<string, any>;
            imports?: string[] | undefined;
            nestable?: boolean | undefined;
        }, {
            props: Record<string, any>;
            imports?: string[] | undefined;
            nestable?: boolean | undefined;
        }>;
        language: z.ZodString;
        label: z.ZodString;
        links: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
            name: string;
        }, {
            url: string;
            name: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        template: string;
        figmaNode: string;
        language: string;
        templateData: {
            props: Record<string, any>;
            imports?: string[] | undefined;
            nestable?: boolean | undefined;
        };
        variant?: Record<string, any> | undefined;
        links?: {
            url: string;
            name: string;
        }[] | undefined;
        source?: string | undefined;
        component?: string | undefined;
        sourceLocation?: {
            line: number;
        } | undefined;
    }, {
        label: string;
        template: string;
        figmaNode: string;
        language: string;
        templateData: {
            props: Record<string, any>;
            imports?: string[] | undefined;
            nestable?: boolean | undefined;
        };
        variant?: Record<string, any> | undefined;
        links?: {
            url: string;
            name: string;
        }[] | undefined;
        source?: string | undefined;
        component?: string | undefined;
        sourceLocation?: {
            line: number;
        } | undefined;
    }>, "many">;
    messages: z.ZodArray<z.ZodObject<{
        level: z.ZodUnion<[z.ZodLiteral<"DEBUG">, z.ZodLiteral<"INFO">, z.ZodLiteral<"WARN">, z.ZodLiteral<"ERROR">]>;
        type: z.ZodOptional<z.ZodString>;
        message: z.ZodString;
        sourceLocation: z.ZodOptional<z.ZodObject<{
            file: z.ZodString;
            line: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            file: string;
            line?: number | undefined;
        }, {
            file: string;
            line?: number | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        level: "ERROR" | "DEBUG" | "INFO" | "WARN";
        sourceLocation?: {
            file: string;
            line?: number | undefined;
        } | undefined;
        type?: string | undefined;
    }, {
        message: string;
        level: "ERROR" | "DEBUG" | "INFO" | "WARN";
        sourceLocation?: {
            file: string;
            line?: number | undefined;
        } | undefined;
        type?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    docs: {
        label: string;
        template: string;
        figmaNode: string;
        language: string;
        templateData: {
            props: Record<string, any>;
            imports?: string[] | undefined;
            nestable?: boolean | undefined;
        };
        variant?: Record<string, any> | undefined;
        links?: {
            url: string;
            name: string;
        }[] | undefined;
        source?: string | undefined;
        component?: string | undefined;
        sourceLocation?: {
            line: number;
        } | undefined;
    }[];
    messages: {
        message: string;
        level: "ERROR" | "DEBUG" | "INFO" | "WARN";
        sourceLocation?: {
            file: string;
            line?: number | undefined;
        } | undefined;
        type?: string | undefined;
    }[];
}, {
    docs: {
        label: string;
        template: string;
        figmaNode: string;
        language: string;
        templateData: {
            props: Record<string, any>;
            imports?: string[] | undefined;
            nestable?: boolean | undefined;
        };
        variant?: Record<string, any> | undefined;
        links?: {
            url: string;
            name: string;
        }[] | undefined;
        source?: string | undefined;
        component?: string | undefined;
        sourceLocation?: {
            line: number;
        } | undefined;
    }[];
    messages: {
        message: string;
        level: "ERROR" | "DEBUG" | "INFO" | "WARN";
        sourceLocation?: {
            file: string;
            line?: number | undefined;
        } | undefined;
        type?: string | undefined;
    }[];
}>;
export type PropMapping = Record<string, Intrinsic>;
export type ComponentPropertyDefinition = {
    type: 'BOOLEAN' | 'INSTANCE_SWAP' | 'TEXT' | 'VARIANT';
    defaultValue: boolean | string;
    variantOptions?: string[];
};
export interface FigmaConnectionComponent {
    figmaNodeUrl: string;
    id: string;
    name: string;
    type: 'COMPONENT' | 'COMPONENT_SET';
    componentPropertyDefinitions: Record<string, ComponentPropertyDefinition>;
}
export interface FigmaConnection {
    sourceExport?: string;
    propMapping?: PropMapping;
    reactTypeSignature?: ComponentTypeSignature;
    component: FigmaConnectionComponent;
}
export type CreateRequestPayload = {
    mode: 'CREATE';
    destinationDir: string;
    destinationFile?: string;
    sourceFilepath?: string;
    sourceExport?: string;
    propMapping?: PropMapping;
    reactTypeSignature?: ComponentTypeSignature;
    component: {
        figmaNodeUrl: string;
        id: string;
        name: string;
        normalizedName: string;
        type: 'COMPONENT' | 'COMPONENT_SET';
        componentPropertyDefinitions: Record<string, ComponentPropertyDefinition>;
    };
    config: Record<string, any>;
};
export type CreateRequestPayloadMulti = {
    mode: 'CREATE';
    destinationDir: string;
    destinationFile?: string;
    sourceFilepath?: string;
    normalizedName: string;
    figmaConnections: FigmaConnection[];
    config: Record<string, any>;
};
export declare const CreateResponsePayload: z.ZodObject<{
    createdFiles: z.ZodArray<z.ZodObject<{
        filePath: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        filePath: string;
    }, {
        filePath: string;
    }>, "many">;
    messages: z.ZodArray<z.ZodObject<{
        level: z.ZodUnion<[z.ZodLiteral<"DEBUG">, z.ZodLiteral<"INFO">, z.ZodLiteral<"WARN">, z.ZodLiteral<"ERROR">]>;
        type: z.ZodOptional<z.ZodString>;
        message: z.ZodString;
        sourceLocation: z.ZodOptional<z.ZodObject<{
            file: z.ZodString;
            line: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            file: string;
            line?: number | undefined;
        }, {
            file: string;
            line?: number | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        level: "ERROR" | "DEBUG" | "INFO" | "WARN";
        sourceLocation?: {
            file: string;
            line?: number | undefined;
        } | undefined;
        type?: string | undefined;
    }, {
        message: string;
        level: "ERROR" | "DEBUG" | "INFO" | "WARN";
        sourceLocation?: {
            file: string;
            line?: number | undefined;
        } | undefined;
        type?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    messages: {
        message: string;
        level: "ERROR" | "DEBUG" | "INFO" | "WARN";
        sourceLocation?: {
            file: string;
            line?: number | undefined;
        } | undefined;
        type?: string | undefined;
    }[];
    createdFiles: {
        filePath: string;
    }[];
}, {
    messages: {
        message: string;
        level: "ERROR" | "DEBUG" | "INFO" | "WARN";
        sourceLocation?: {
            file: string;
            line?: number | undefined;
        } | undefined;
        type?: string | undefined;
    }[];
    createdFiles: {
        filePath: string;
    }[];
}>;
export type ParserRequestPayload = ParseRequestPayload | CreateRequestPayload;
//# sourceMappingURL=parser_executable_types.d.ts.map