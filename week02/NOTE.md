# 每周总结
## unicode
[unicode主站](https://home.unicode.org/)
[Unicode Characters](http://www.fileformat.info/info/unicode/category/index.htm)

Unicode CJK
即中文 日文 韩文取值范围

用查出ascii范围内的字符，会导致编码出现问题

\u转义
String.codeUnicode

语义组成：
InputElement 
   WhiteSpace
   LineTerminator
   Comment
   Token(javascript 中一些有效的东西都叫token)
     Punctuator
     IndetifierName
       Keywords
       Indetifier
       Future reserved Keywords（将来要用的关键）:enum
    Literal
       Number
       String
       Boolean

## Number
IEEE 754 Double Float 
>* Sign(1) 符号位
>* Exponent(11)
>* Fraction (52)
### Grammar
>* DecimalLiteral
>* BinaryLiteral
>* OctalIntegerLiteral
>* HexIntegerLiteral

### Practice
>* Safe Intger 最安全的整数范围
   Number.MAX_SAFE_INTERGER.toString（）
>* Float Compare
   Math.abs(0.1+0.2-0.3) <= EPSILON)

作业:
写一个正则表达式，表达所有Number的直接量

## String
>* character
>* Code Point
>* Encoding
#
写一个正则表达式 匹配所有 Number 直接量
写一个 UTF-8 Encoding 的函数
写一个正则表达式，匹配所有的字符串直接量，单引号和双引号

homeWork
function UTF8_Encoding() {

}

写一个正则表达式 表示除了template的字符串

## 作业
### 正则表达式匹配所有Number直接量
Number直接量有:
十进制 1234

二进制 0b111
```javascript
/(^0b|^0B)[0-1]+$/
```

八进制 0o777
```javascript
/(^0o|^0O)[0-9]+$/
```

十六进制 0xfff
```javascript
/(^0x|^0X)[0-9a-fA-F]+$/
```

浮点数
```javascript
/^(-?\d+)(\.\d+)?$/
```

最终结合：
```javascript
/(^(-?\d+)(\.\d+)?$)|((^0b|^0B)[0-1]+$)|((^0o|^0O)[0-9]+$)|((^0x|^0X)[0-9a-fA-F]+$)/
```

### 匹配所有的字符串直接量 单引号和双引号
字母+数字+空格
```javascript
/^[a-zA-Z0-9\s]+$/
```

中文
```javascript
/^[\u4e00-\u9fa5]+$/
```

单双引号
```javascript
/^[\'\"“‘]+$/
```

特殊符号
```javascript
/^[\{\}\[\]\(\)@#$%\^_-·`]+$/
```

标点符号
```javascript
/^[;:,.!?；：？，。！]+$/
```

最终:
```javascript
/^[a-zA-Z0-9\s\u4e00-\u9fa5\'\"“‘\{\}\[\]\(\)@#$%*_`-]+$/
```



