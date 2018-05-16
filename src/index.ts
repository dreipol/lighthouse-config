import {Page} from 'puppeteer';
import Schema from "./schema/ConfigSchema";
import * as joi from "joi";

export interface Budget {
    [index: string]: string | number | boolean | undefined;

    dreipol?: string | number | boolean;
    performance?: string | number | boolean;
    pwa?: string | number | boolean;
    accessibility?: string | number | boolean;
    'best-practices'?: string | number | boolean;
}

export interface DreihouseConfig {
    paths: string[];
    folder: string;
    report: any;
    chromeFlags: string[];
    disableEmulation: boolean;
    disableThrottling: boolean;
    budget: Budget;
    preAuditScripts?: PreAuditScriptInterface[];
    tag: string;
}

export interface LoggerInterface {
    print(...args: string[]): void;
    error(...args: string[]): void;
}

export interface PreAuditScriptInterface {
    execute(logger: LoggerInterface, page: Page): Promise<void>;
}

export class ConfigValidator {
    public static validate(config: DreihouseConfig): DreihouseConfig {
        const result = joi.validate(config, Schema);
        if (result.error) {
            throw new Error(result.error.message);
        }
        return result.value;
    }
}
