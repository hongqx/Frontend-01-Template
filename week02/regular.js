function testIsNumber(arg){
    var reg = /(^(-?\d+)(\.\d+)?$)|((^0b|^0B)[0-1]+$)|((^0o|^0O)[0-9]+$)|((^0x|^0X)[0-9a-fA-F]+$)/
    if (reg.test(arg)) {
        return Number(arg)
    } else {
        return undefined
    }
}


function testIsString (arg) {
    var reg = /^[a-zA-Z0-9\s\u4e00-\u9fa5\'\"“‘\{\}\[\]\(\)@#$%*_`-]+$/
    if (reg.test(arg)) {
        return true
    } else {
        return false
    }
}