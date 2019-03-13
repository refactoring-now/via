/**
 * Node.js web framework using koa.
 *
 * @module Via
 * @public
 */

/**
 * NODE_ENV默认值
 */
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development'

/**
 * 监听未捕获异常
 */
process.on('uncaughtException', console.error)

/**
 * 监听未捕获reject
 */
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason)
})

const Koa = require('koa')

class Via extends Koa {
  /**
   * 
   * @param {*} opt 
   */
  constructor(opt = {}) {
    super()
    this.config = opt
  }
}

module.exports = Via
