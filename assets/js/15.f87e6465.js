(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{599:function(t,s,a){"use strict";a.r(s);var e=a(17),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("最近公司组织技术分享会，正好借助这个机会巩固一下自己学习TS的知识，TS这个模块 可能不回去写很多的知识点，大部分应该都是实践类型的，可能在工作过程中遇到一个 比较难分析的类型也会去记录一下。接下来就开始吧。")]),t._v(" "),a("h2",{attrs:{id:"request请求是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request请求是什么"}},[t._v("#")]),t._v(" request请求是什么")]),t._v(" "),a("p",[t._v("Taro提供的发起 HTTPS 网络请求的方法。具体可以看"),a("a",{attrs:{href:"https://taro-docs.jd.com/taro/docs/apis/network/request/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("在Taro的源码中对request是这样定义的：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generic-function"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Option"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" RequestTask"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("这里对具体的使用方法不做过多的解释，主要关注该方法的类型。")]),t._v(" "),a("h2",{attrs:{id:"类型分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型分析"}},[t._v("#")]),t._v(" 类型分析")]),t._v(" "),a("p",[t._v("可以看到该方法的类型为"),a("code",[t._v("<T = any, U = any>(option: Option<U>) => RequestTask<T>")]),t._v("， 泛型可以传入两个参数，第一个为函数返回的数据中的类型，第二个为函数入参的类型，两者都为"),a("code",[t._v("any")]),t._v("。\n接下来对两个数值分别进行分析。")]),t._v(" "),a("h3",{attrs:{id:"入参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入参"}},[t._v("#")]),t._v(" 入参")]),t._v(" "),a("p",[t._v("我们先来看入参")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Option"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" General"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IAnyObject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" ArrayBuffer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 开发者服务器接口地址 */")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 接口调用结束的回调函数（调用成功、失败都会执行） */")]),t._v("\n    complete"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" General"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CallbackResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 请求的参数 */")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 返回的数据格式 */")]),t._v("\n    dataType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keyof")]),t._v(" dataType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 接口调用失败的回调函数 */")]),t._v("\n    fail"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" General"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CallbackResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 设置请求的 header，header 中不能设置 Referer。\n     *\n     * `content-type` 默认为 `application/json` */")]),t._v("\n    header"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" General"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IAnyObject\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** HTTP 请求方法 */")]),t._v("\n    method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keyof")]),t._v(" method\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 响应的数据类型 */")]),t._v("\n    responseType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keyof")]),t._v(" responseType\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 接口调用成功的回调函数 */")]),t._v("\n    success"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SuccessCallbackResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 设置 H5 端是否使用jsonp方式获取数据\n     * @default false\n     */")]),t._v("\n    jsonp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 设置 H5 端 jsonp 请求 url 是否需要被缓存\n     * @default false\n     */")]),t._v("\n    jsonpCache"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 设置 H5 端是否允许跨域请求\n     * @default same-origin\n     */")]),t._v("\n    mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keyof")]),t._v(" cors_mode\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 设置 H5 端是否携带 Cookie\n     * @default omit\n     */")]),t._v("\n    credentials"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keyof")]),t._v(" credentials\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 设置 H5 端缓存模式\n     * @default default\n     */")]),t._v("\n    cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keyof")]),t._v(" cache\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 设置 H5 端请求响应超时时间\n     * @default 2000\n     */")]),t._v("\n    timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 设置 H5 端请求重试次数\n     * @default 2\n     */")]),t._v("\n    retryTimes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 设置 H5 端请求的兜底接口 */")]),t._v("\n    backup"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 设置 H5 端请求响应的数据校验函数，若返回 false，则请求兜底接口，若无兜底接口，则报请求失败 */")]),t._v("\n    dataCheck"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 设置 H5 端请求是否使用缓存\n     * @default false\n     */")]),t._v("\n    useStore"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 设置 H5 端请求缓存校验的 key */")]),t._v("\n    storeCheckKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 设置 H5 端请求缓存签名 */")]),t._v("\n    storeSign"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 设置 H5 端请求校验函数，一般不需要设置 */")]),t._v("\n    storeCheck"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("可以看到入参的类型还是很多的，说明在进行请求时的可定制化程度还是很高的，这里的泛型"),a("code",[t._v("U")]),t._v("设置给了data，也就是请求时的\n携带的参数，可以看到对其进行了一定的约束，但最终其实都为"),a("code",[t._v("any")]),t._v("，因此该参数可以为任意类型。")]),t._v(" "),a("h3",{attrs:{id:"返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[t._v("#")]),t._v(" 返回值")]),t._v(" "),a("p",[t._v("我们再来看看返回值RequestTask是什么组成的")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestTask"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SuccessCallbackResult"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 中断请求任务\n     * @supported weapp\n     * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.abort.html\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 取消监听 HTTP Response Header 事件\n     * @supported weapp\n     * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.offHeadersReceived.html\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("offHeadersReceived")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** HTTP Response Header 事件的回调函数 */")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" General"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CallbackResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 监听 HTTP Response Header 事件。会比请求完成事件更早\n     * @supported weapp\n     * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.onHeadersReceived.html\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onHeadersReceived")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** HTTP Response Header 事件的回调函数 */")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" RequestTask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OnHeadersReceivedCallbackResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们可以看到其中有一些方法，但这些东西在实际使用中用的不多，实际开发中需要关注的是"),a("code",[t._v("<T> extends Promise<request.SuccessCallbackResult<T>>")]),t._v("\n这里返回一个Promise，Promise又接受一个泛型"),a("code",[t._v("request.SuccessCallbackResult<T>")]),t._v(",我们看下"),a("code",[t._v("SuccessCallbackResult")]),t._v("是什么？")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SuccessCallbackResult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" General"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IAnyObject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" ArrayBuffer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("General")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CallbackResult "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 开发者服务器返回的数据 */")]),t._v("\n      data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 开发者服务器返回的 HTTP Response Header */")]),t._v("\n      header"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" General"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IAnyObject\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 开发者服务器返回的 HTTP 状态码 */")]),t._v("\n      statusCode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 调用结果 */")]),t._v("\n      errMsg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这里其实就是我们要用到的东西啦，data就是后端返回的数据，这里的泛型"),a("code",[t._v("T")]),t._v("一路向上查找，最终定位到了两个入参的"),a("code",[t._v("T")]),t._v("上，因此当我们想要使用TS\n约束返回数据类型时就可以这样写：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generic-function"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("dataType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx/xxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    header"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    loading"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("同时一个小细节，我们像"),a("code",[t._v("const data = getData()")]),t._v("这样直接使用"),a("code",[t._v("getData()")]),t._v("函数是不行的，这样只会得到一个Promise函数，\n那应该怎样使用呢？ "),a("code",[t._v("const data = await getData()")]),t._v("就可以啦")])])}),[],!1,null,null,null);s.default=n.exports}}]);