'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  create: async ctx => {
    const { body } = ctx.request;

    try {
      for (let i = 0; i < body.length; i++) {
        await strapi.services.events.create({ ...body[i] });
      }

      ctx.send({ status: 200, msg: 'Success' });
    } catch (error) {
      ctx.throw(400, error);
    }
  }
};
