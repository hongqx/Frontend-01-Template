# week01
本周刚听了浏览器的env的说明，虽然老师说比较垃圾，但是刚好有用到了，直接抽出来一个小module,代码如下
```javascript
const RegMap = [
  {
    key: 'QQBrowser',
    reg: /(qqbrowser)\/([\d.]+)/
  },
  {
    key: '2345Explorer',
    reg: /(2345explorer)\/([\d.]+)/
  },
  {
    key: 'Sogou',
    reg: /(metasr)/
  },
  {
    key: 'Wexin',
    reg: /(micromessenger)\/([\d.]+)/
  },
  {
    key: 'Chrome',
    reg: /(chrome)\/([\d.]+)/
  },
  {
    key: 'Safari',
    reg: /(version)\/([\d.]+)\s*(safari)/
  }
]
const IERegMap = [{
  key: 'Trident',
  reg: /(rv:)([\d.]+)/
},
{
  key: 'Trident',
  reg: /(msie)\s*([\d.]+)/
}]

function isSupportMP4 () {
  const H264_MIMETYPES = [
    'avc1.42E01E, mp4a.40.2',
    'avc1.58A01E, mp4a.40.2',
    'avc1.4D401E, mp4a.40.2',
    'avc1.64001E, mp4a.40.2',
    'avc1.42E01E',
    'mp4v.20.8',
    'avc1.42E01E, mp4a.40.2',
    'avc1.58A01E, mp4a.40.2',
    'avc1.4D401E, mp4a.40.2',
    'avc1.64001E, mp4a.40.2',
    'mp4v.20.8, mp4a.40.2',
    'mp4v.20.240, mp4a.40.2'
  ]
  let a = document.createElement('video')
  let result = {
    isSupport: false,
    mime: ''
  }
  if (typeof a.canPlayType === 'function') {
    H264_MIMETYPES.map(key => {
      if (a.canPlayType(`video/mp4; codecs="${key}"`) === 'probably') {
        result.isSupport = true
        result.mime += `||${key}`
      }
    })
    return result
  }
  a = null
  return result
}

function detect (ua = '') {
  const isIOS = (/(iphone)/.test(ua) || /(ipad)/.test(ua))
  const isAndroid = /(android)/.test(ua)
  const isWP = /(windows phone)/.test(ua)
  const isMobile = (isIOS || isAndroid || isWP)
  const browser = {
    isIOS: isIOS,
    isAndroid: isAndroid,
    isMobile: isMobile,
    isPC: !isMobile,
    isPad: /(ipad)/.test(ua)
  }

  const result = isSupportMP4()
  browser.isSupportMP4 = result.isSupport
  browser.mime = result.mime

  ua = ua.toLocaleLowerCase()
  let appNameKey = ''
  let appVersion = 0
  let match = []
  let _regMap = RegMap
  if (/trident/.test(ua)) {
    _regMap = IERegMap
  }

  for (const key in _regMap) {
    match = _regMap[key].reg.exec(ua)
    if (match) {
      appNameKey = _regMap[key].key
      appVersion = match.length > 2 ? match[2] : ''
      break;
    }
  }

  if (appNameKey) {
    browser[`is${appNameKey}`] = true
    browser.name = appNameKey
    browser.appVersion = appVersion
  } else {
    const is360 = checkIs360('type', 'application/vnd.chromium.remoting-viewer')
    is360 && (browser.name = '360EE')
  }
  // 非IE检测是否为兼容模式
  if (browser.name && browser.name !== 'Trident') {
    // 浏览器兼容模式判断
    const isTrident = /(trident)/.exec(ua);
    if (isTrident) {
      browser.name = browser.name ? `${browser.name}_Trident` : 'Trident'
    }
  }
  return browser
}

function checkIs360 (option, value) {
  const mimeTypes = navigator.mimeTypes
  if (mimeTypes) {
    for (const key in mimeTypes) {
      if (mimeTypes[key][option] === value) {
        return true;
      }
    }
    return false;
  }
}
const Browser = detect(navigator.userAgent)
export default Browser

```

## 总结
[思维模型脑图](https://github.com/hongqx/Frontend-01-Template/blob/master/week01/frontEnd.xmind)
### 前端技能模型
>* 领域知识
>* 前端知识
>* 编程能力 
>* 架构能力
>* 工程能力
### 关于学习
之前都是用到哪个点就直接搜索哪个点，导致整体只是很零碎，很散落，特别是html和css,通过思维脑图，感觉整体统一的分块儿学习，很有用，不会花了很长时间，看了某一点然后发现遇到相似类容还是不会的问题各种标准的文档很重要，看文档才能知其所以然

### 一些常用标准查看网站
>* [HTML](https://html.spec.whatwg.org/multipage/)
>* [javascript-262](ttps://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf)
>*[DTD](https://www.w3school.com.cn/html/html_entities.asp)

