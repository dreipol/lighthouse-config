import * as Joi from 'joi';

export default Joi.object().keys({
    paths: Joi.array().items(Joi.string()).required(),
    folder: Joi.string().allow(null).required(),
    tag: Joi.string().default('report').required(),
    chromeFlags: Joi.array().items(Joi.string()).required(),
    disableEmulation: Joi.boolean().required(),
    disableThrottling: Joi.boolean().required(),
    budget: Joi.object().required(),
    preAuditScripts: Joi.array(),
    report: Joi.object().keys({
        settings: Joi.object(),
        passes: Joi.array(),
        audits: Joi.array(),
        groups: Joi.object(),
        categories: Joi.object(),
    }).required(),
});
