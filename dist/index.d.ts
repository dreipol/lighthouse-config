import { Page } from 'puppeteer';
import { LighthouseConfigInterface } from "./LighthouseConfigInterface";
export * from "./LighthouseConfigInterface";
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
    report: LighthouseConfigInterface;
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
export declare class ConfigValidator {
    static validate(config: DreihouseConfig): DreihouseConfig;
}
