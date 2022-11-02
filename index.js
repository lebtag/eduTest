'use strict'

const { log } = require('./src/main/services/log')
const config = require('./config/config')
const { Mind } = require('./src/main/services/mind')

log.debug('index: start')
log.info('index: env = ' + config.env)

let mind = new Mind()
mind.lerning()
//console.log(`someObj1 type = ${someObj1.dataType}`)