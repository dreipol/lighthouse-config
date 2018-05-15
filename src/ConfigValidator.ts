import * as joi from 'joi';

import Schema from './schema/ConfigSchema';
import DreihouseConfig from "@dreipol/lighthouse-runner/dist/Interfaces/Config/DreihouseConfig";

export default class ConfigValidator {
    public static validate(config: DreihouseConfig): DreihouseConfig {
        const result = joi.validate(config, Schema);
        if (result.error) {
            throw new Error(result.error.message);
        }
        return result.value;
    }
}
