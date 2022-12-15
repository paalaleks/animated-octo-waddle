'use strict';

/**
 * shoe-hero service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shoe-hero.shoe-hero');
