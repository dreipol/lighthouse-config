import {DreihouseConfigInterface} from './DreihouseConfigInterface';
import * as joi from 'joi';
import Schema from './schema/ConfigSchema';

export class ConfigValidator {
    public static validate(config: DreihouseConfigInterface): DreihouseConfigInterface {
        const result = joi.validate(config, Schema);
        if (result.error) {
            throw new Error(result.error.message);
        }
        return result.value;
    }
}
