'use strict'

const { log } = require('./log')
const config = require('../../../config/config')
const { BaseObj } = require('../../../src/main/models/baseObj')
const { FileService } = require('./fileService')

class Mind {
    fileService = new FileService()
    constructor() {

    }

    /**
     * Read files by path from config variable 'resourcesDir'
     * Creates objects of type 'baseObj' 
     * ```js
     * lerning()
     * ```
     *  @see [example](https://github.com/lebtag/eduTest.git)
     */
    lerning() {
        log.debug('mind.lerning: start')
        let dir = config.resourcesDir
        let fileList = this.fileService.readDirFiles(dir)
        let dataList = this.fileService.readFilesData(dir, fileList)
        if (!dataList) return
        let i = 0
        dataList.forEach((data) => {
            let obj = new BaseObj(fileList[i] , data)
            log.debug('mind.lerning: obj.name = ' + obj.name)
            log.debug('mind.lerning: obj.dataType = ' + obj.dataType)
            i++
        })
        log.debug('mind.lerning: finish')
    }

    // listener
}

exports.Mind = Mind