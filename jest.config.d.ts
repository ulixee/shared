export let verbose: boolean;
export let testMatch: string[];
export let testEnvironment: string;
export let collectCoverage: boolean;
export let transform: {};
export let testTimeout: number;
export let reporters: (string | (string | {
    silent: boolean;
})[])[];
