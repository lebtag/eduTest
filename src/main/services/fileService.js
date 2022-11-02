'use strict'

const { log } = require('./log')
const fs = require('fs')

class FileService {
    constructor() {

    }

    readDirFiles(dir) {
        log.debug('fileService.readDirFiles: start')
        let fileList = fs.readdirSync(dir)
        log.debug('fileService.readDirFiles: fileList.length = ' + fileList.length)
        if (fileList.length === 0) {
            return
        }
        log.debug('fileService.readDirFiles: finish')
        return fileList
    }

    readFilesData(dir, fileList) {
        log.debug('fileService.readFilesData: start')
        if (!fileList) return
        let dataList = []
        fileList.forEach((file) => {
            log.debug('fileService.readFilesData: file = ' + file)
            let data = fs.readFileSync(dir + '/' + file)            
            log.debug('fileService.readFilesData: data = ' + data)
            dataList.push(data.toString('utf8'))
        })
        log.debug('fileService.readFilesData dataList:')
        log.debug(dataList)
        log.debug('fileService.readFilesData: finish')
        return dataList
    }

}

exports.FileService = FileService