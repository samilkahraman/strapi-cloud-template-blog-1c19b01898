'use strict';

/**
 * kapi router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::kapi.kapi');
