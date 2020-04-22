// 正则检测Number直接量
function testIsNumber(arg){
    var reg = /(^(-?\d+)(\.\d+)?$)|((^0b|^0B)[0-1]+$)|((^0o|^0O)[0-9]+$)|((^0x|^0X)[0-9a-fA-F]+$)/
    if (reg.test(arg)) {
        return Number(arg)
    } else {
        return undefined
    }
}

// 正则检测字符串直接量
function testIsString (arg) {
    var reg = /^[a-zA-Z0-9\s\u4e00-\u9fa5\'\"“‘\{\}\[\]\(\)@#$%*_`-]+$/
    if (reg.test(arg)) {
        return true
    } else {
        return false
    }
}

// unicode转换为utf-8
function encodeUtf8(text) {
    const code = encodeURIComponent(text);
    const bytes = [];
    for (var i = 0; i < code.length; i++) {
        const c = code.charAt(i);
        if (c === '%') {
            const hex = code.charAt(i + 1) + code.charAt(i + 2);
            const hexVal = parseInt(hex, 16).toString(2);
            bytes.push(hexVal);
            i += 2;
        } else bytes.push(c.charCodeAt(0));
    }
    return bytes;
}