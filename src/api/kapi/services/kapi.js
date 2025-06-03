'use strict';

/**
 * kapi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kapi.kapi');
