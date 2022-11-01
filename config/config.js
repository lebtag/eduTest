'use strict'

const { parse } = require ('dotenv')

const config = {
    env: process.env.NODE_ENV || 'production'
}

module.exports = config

