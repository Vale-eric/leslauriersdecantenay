'use strict';

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Only returns orders that belongs to the logged in user
   * @param {any} ctx 
   * @returns 
   */
  async find(ctx) {
    const { user } = ctx.state // this is the magic user
    let entities
    if (ctx.query._q) {
      entities = await strapi.services.order.search({...ctx.query, user: user.id})
    } else {
      entities = await strapi.services.order.find({...ctx.query, user: user.id})
    }

    return entities.map(entity =>  sanitizeEntity(entity, { model: strapi.models.order }))
  },
  /**
   * Return one order, as long as it belongs to the user
   * @param {any} ctx 
   * @returns 
   */
  async findOne(ctx) {
    const { id } = ctx.params
    const { user } = ctx.state

    const entity = await strapi.services.order.findOne({ id, user:user.id })
    return sanitizeEntity(entity, { model: strapi.models.order })
  }

};
