import { Page } from 'puppeteer';
import LoggerInterface from './LoggerInterface';
export default interface PreAuditScriptInterface {
    execute(logger: LoggerInterface, page: Page): Promise<void>;
}
