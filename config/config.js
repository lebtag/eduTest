'use strict'

const { parse } = require ('dotenv')

const config = {
    env: process.env.NODE_ENV || 'production',
    // [info, debug, warn, error]
    log: {
        level: process.env.LOG_LEVEL || 'debug'
    },
    resourcesDir: process.env.RESOURCES_DIR || 'src/main/resources' 
}

module.exports = config

