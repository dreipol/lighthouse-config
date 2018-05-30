import { Budget, PreAuditScriptInterface } from './index';
import { LighthouseConfigInterface } from './LighthouseConfigInterface';
export interface DreihouseConfigInterface {
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
