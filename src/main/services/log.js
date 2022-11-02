'use strict'

const config = require('../../../config/config')

class Log {
  constructor() {
  }
  // [info, debug, warn, error]
  info(msg, session) {
    this.#log('INFO', msg, session)
  }
  debug(msg, session) {
    if (config.log.level === 'info' || config.log.level === 'debug')    
      this.#log('DEBUG', msg, session)
  }
  warning(msg, session) {
    if (config.log.level !== 'error')
      this.#log('WARNING', msg, session)
  }
  error(msg, session) {    
      this.#log('ERROR', msg, session)
  }

  #log(type, msg, session) {
    let date = new Date()
    if (!session) {
      console.log(`[${date.toISOString()}] [${type}]: `, msg)  
    } else {
      console.log(`[${date.toISOString()}] [${type}] [${session}]: `, msg)      
    }    
  }  
}

const log = new Log()
log.debug('log: start')

module.exports.log = log