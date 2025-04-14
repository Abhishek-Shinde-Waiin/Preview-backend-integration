import type { Describe } from "./Describes";
import type { Spec } from "./Specs";
import type { SuiteResults, TestResults } from "./Summary";
import type { Test } from "./Tests";
export declare const getFailingTests: (block: Describe | Spec) => Test[];
export declare const getAllTestResults: (specs: Spec[]) => TestResults;
export declare const getSpecTestResults: (spec: Spec) => TestResults;
export declare const getAllSuiteResults: (specs: Spec[]) => SuiteResults;
export declare const getDuration: (specs: Spec[]) => number;
export declare const isEmpty: (block: Spec | Describe) => boolean;
export declare const splitTail: <A>(as: A[]) => [A[], A | undefined];
export declare const flatMap: <A, B>(as: A[], f: (a: A) => B[]) => B[];
export declare const set: (path: string[], value: unknown) => <A extends Record<string, any>>(object: A) => A;
