'use strict'

class BaseObj {
    name
    data
    dataType

    constructor(name, data) {
        this.name = name
        this.data = data        
        this.dataType = this.parseDataType()
    }

    parseDataType() {
        switch (typeof(this.data)) {
            case 'number': 
            case 'bigint': return 1 
            case 'string':  
            case 'symbol': return 2 
            default: return 0
        }
    }
}
exports.BaseObj = BaseObj