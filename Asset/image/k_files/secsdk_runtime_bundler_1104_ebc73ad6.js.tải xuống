/*!
* @byted/secsdk-strategy v1.0.42
* (c) 2026
*/
!function(e){"function"==typeof define&&define.amd?define("WebRuntimeSecSdk",e):e()}(function(){"use strict";var e,t,n,r,o=function(){return e||{variant:"static",compileStrategyFn:function(){},evalScript:function(){},isDynamicEnabled:function(){return!1}}},i=function(e){try{console.warn("[RuntimeSDK][static] ".concat(e))}catch(e){}};function a(e,t){this.v=e,this.k=t}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){u(i,r,o,a,c,"next",e)}function c(e){u(i,r,o,a,c,"throw",e)}a(void 0)})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function p(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function h(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=w(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function d(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(null,arguments)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function S(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function _(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",o=n.toStringTag||"@@toStringTag";function i(n,r,o,i){var u=r&&r.prototype instanceof c?r:c,s=Object.create(u.prototype);return g(s,"_invoke",function(n,r,o){var i,c,u,s=0,l=o||[],f=!1,p={p:0,n:0,v:e,a:h,f:h.bind(e,4),d:function(t,n){return i=t,c=0,u=e,p.n=n,a}};function h(n,r){for(c=n,u=r,t=0;!f&&s&&!o&&t<l.length;t++){var o,i=l[t],h=p.p,d=i[2];n>3?(o=d===r)&&(u=i[(c=i[4])?5:(c=3,3)],i[4]=i[5]=e):i[0]<=h&&((o=n<2&&h<i[1])?(c=0,p.v=r,p.n=i[1]):h<d&&(o=n<3||i[0]>r||r>d)&&(i[4]=n,i[5]=r,p.n=d,c=0))}if(o||n>1)return a;throw f=!0,r}return function(o,l,d){if(s>1)throw TypeError("Generator is already running");for(f&&1===l&&h(l,d),c=l,u=d;(t=c<2?e:u)||!f;){i||(c?c<3?(c>1&&(p.n=-1),h(c,u)):p.n=u:p.v=u);try{if(s=2,i){if(c||(o="next"),t=i[o]){if(!(t=t.call(i,u)))throw TypeError("iterator result is not an object");if(!t.done)return t;u=t.value,c<2&&(c=0)}else 1===c&&(t=i.return)&&t.call(i),c<2&&(u=TypeError("The iterator does not provide a '"+o+"' method"),c=1);i=e}else if((t=(f=p.n<0)?u:n.call(r,p))!==a)break}catch(t){i=e,c=1,u=t}finally{s=1}}return{value:t,done:f}}}(n,o,i),!0),s}var a={};function c(){}function u(){}function s(){}t=Object.getPrototypeOf;var l=[][r]?t(t([][r]())):(g(t={},r,function(){return this}),t),f=s.prototype=c.prototype=Object.create(l);function p(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,s):(e.__proto__=s,g(e,o,"GeneratorFunction")),e.prototype=Object.create(f),e}return u.prototype=s,g(f,"constructor",s),g(s,"constructor",u),u.displayName="GeneratorFunction",g(s,o,"GeneratorFunction"),g(f),g(f,o,"Generator"),g(f,r,function(){return this}),g(f,"toString",function(){return"[object Generator]"}),(_=function(){return{w:i,m:p}})()}function m(e,t,n,r,o){var i=R(e,t,n,r,o);return i.next().then(function(e){return e.done?e.value:i.next()})}function R(e,t,n,r,o){return new O(_().w(e,t,n,r),o||Promise)}function O(e,t){function n(r,o,i,c){try{var u=e[r](o),s=u.value;return s instanceof a?t.resolve(s.v).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(s).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}catch(e){c(e)}}var r;this.next||(g(O.prototype),g(O.prototype,"function"==typeof Symbol&&Symbol.asyncIterator||"@asyncIterator",function(){return this})),g(this,"_invoke",function(e,o,i){function a(){return new t(function(t,r){n(e,i,t,r)})}return r=r?r.then(a,a):a()},!0)}function g(e,t,n,r){var o=Object.defineProperty;try{o({},"",{})}catch(e){o=0}g=function(e,t,n,r){function i(t,n){g(e,t,function(e){return this._invoke(t,n,e)})}t?o?o(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(i("next",0),i("throw",1),i("return",2))},g(e,t,n,r)}function T(e){var t=Object(e),n=[];for(var r in t)n.unshift(r);return function e(){for(;n.length;)if((r=n.pop())in t)return e.value=r,e.done=!1,e;return e.done=!0,e}}function A(e){if(null!=e){var t=e["function"==typeof Symbol&&Symbol.iterator||"@@iterator"],n=0;if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}throw new TypeError(typeof e+" is not iterable")}function N(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||w(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function w(e,t){if(e){if("string"==typeof e)return c(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function D(){var e=_(),t=e.m(D),n=(Object.getPrototypeOf?Object.getPrototypeOf(t):t.__proto__).constructor;function r(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===n||"GeneratorFunction"===(t.displayName||t.name))}var o={throw:1,return:2,break:3,continue:3};function i(e){var t,n;return function(r){t||(t={stop:function(){return n(r.a,2)},catch:function(){return r.v},abrupt:function(e,t){return n(r.a,o[e],t)},delegateYield:function(e,o,i){return t.resultName=o,n(r.d,A(e),i)},finish:function(e){return n(r.f,e)}},n=function(e,n,o){r.p=t.prev,r.n=t.next;try{return e(n,o)}finally{t.next=r.n}}),t.resultName&&(t[t.resultName]=r.v,t.resultName=void 0),t.sent=r.v,t.next=r.n;try{return e.call(this,t)}finally{r.p=t.prev,r.n=t.next}}}return(D=function(){return{wrap:function(t,n,r,o){return e.w(i(t),n,r,o&&o.reverse())},isGeneratorFunction:r,mark:e.m,awrap:function(e,t){return new a(e,t)},AsyncIterator:O,async:function(e,t,n,o,a){return(r(t)?R:m)(i(e),t,n,o,a)},keys:T,values:A}})()}!function(t){e=t}({variant:"static",compileStrategyFn:function(){i("dynamic strategy compile is disabled")},evalScript:function(){i("dynamic script execution is disabled")},isDynamicEnabled:function(){return!1}}),function(e){e.API_LOCALSTORAGE_SET="API_LOCALSTORAGE_SET",e.API_LOCALSTORAGE_GET="API_LOCALSTORAGE_GET",e.API_SESSIONSTORAGE_SET="API_SESSIONSTORAGE_SET",e.API_SESSIONSTORAGE_GET="API_SESSIONSTORAGE_GET",e.GEOLOCATION_CURRENT_POSITION="GEOLOCATION_CURRENT_POSITION",e.GEOLOCATION_WATCH_POSITION="GEOLOCATION_WATCH_POSITION",e.CLIPBOARD_WRITE="CLIPBOARD_WRITE",e.CLIPBOARD_WRITE_TEXT="CLIPBOARD_WRITE_TEXT",e.MEDIADEVICES_GETUSERMEDIA="MEDIADEVICES_GETUSERMEDIA",e.INDEXDB_ADD="INDEXDB_ADD",e.POST_MESSAGE="POST_MESSAGE",e.OPEN="OPEN",e.MESSAGE="MESSAGE",e.INDEXDB_PUT="INDEXDB_PUT",e.INDEXDB_UPDATE="INDEXDB_UPDATE",e.LOCATION_REPLACE="LOCATION_REPLACE",e.LOCATION_ASSIGN="LOCATION_ASSIGN",e.WINDOW_OPEN="WINDOW_OPEN",e.COOKIE_GET="COOKIE_GET",e.COOKIE_SET="COOKIE_SET",e.CLICK="CLICK",e.COPY="COPY",e.EVENT_LOOP="EVENT_LOOP",e.IMG_SRC_SET="IMG_SRC_SET",e.IMG_SRC_GET="IMG_SRC_GET",e.WINDOW_LOCATION_SET="WINDOW_LOCATION_SET",e.WINDOW_LOCATION_HREF_SET="WINDOW_LOCATION_HREF_SET",e.NAVIGATOR_SEND_BEACON="NAVIGATOR_SEND_BEACON",e.REQUEST_FILE_STSTEM="REQUEST_FILE_STSTEM",e.CLIPBOARD_READ="CLIPBOARD_READ",e.CLIPBOARD_READ_TEXT="CLIPBOARD_READ_TEXT",e.EXCU_COMMAND="EXCUTE_COMMAND",e.XHR_REQUEST_OPEN="XHR_REQUEST_OPEN",e.XHR_REQUEST_SEND="XHR_REQUEST_SEND",e.XHR_REQUEST_SETQEQUESTHEADER="XHR_REQUEST_SETQEQUESTHEADER",e.XHR_RESPONSE_LOADEND="XHR_RESPONSE_LOADEND",e.XHR_RESPONSE_READYSTATECHANGE="XHR_RESPONSE_READYSTATECHANGE",e.FETCH_REQUEST="FETCH_REQUEST",e.FETCH_RESPONSE="FETCH_RESPONSE",e.FETCH_ADDHEADER="FETCH_ADDHEADER",e.DOM_CONTENT_LOADED="DOM_CONTENT_LOADED",e.MUTATION_OBSERVER="MUTATION_OBSERVER",e.PERFORMANCE_OBSERVER="PERFORMANCE_OBSERVER",e.SDK_REPORT_INIT="SDK_REPORT_INIT",e.SDK_INIT="SDK_INIT",e.CONTENT_LOADED="CONTENT_LOADED",e.XHR_RESPONSE_ERROR="XHR_RESPONSE_ERROR"}(t||(t={})),function(e){e.LOCALSTORAGE_SET="localstorage.setItem",e.REPORT_CONFIG_SET="report_config.set"}(n||(n={})),function(e){e.PASS="PASS",e.REPORT_ONLY="REPORT_ONLY",e.REWRITE="REWRITE",e.BLOCK="BLOCK",e.ERROR="ERROR"}(r||(r={}));var C={errorNum:{name:"decision.error_num",type:"delta_counter"},latency:{name:"decision.latency",type:"time"}},P={errorNum:{name:"strategy.error_num",type:"delta_counter"},latency:{name:"strategy.latency",type:"time"}},L={errorNum:{name:"function.error_num",type:"delta_counter"},latency:{name:"function.latency",type:"time"}},M=function(){return p(function e(){l(this,e),this.secEventMap={},this.secEventMap={}},[{key:"addToEventMap",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this.secEventMap[e]||[];r.push({fn:t,once:n}),this.secEventMap[e]=r}},{key:"on",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return this.addToEventMap(e,t,r),function(){n.secEventMap[e]=n.secEventMap[e].filter(function(e){return t!==e.fn})}}},{key:"emit",value:function(e,t){var n=e.name,r=this.secEventMap[n]||[];if(r.length){var o=this,i=[];r.forEach(function(n){!n.once&&i.push(n),n.fn.call(o,{event:e,action:t})}),this.secEventMap[n]=i}}},{key:"off",value:function(e,t){if(t){var n=this.secEventMap[e]||[];this.secEventMap[e]=n.filter(function(e){return e.fn!==t})}else this.secEventMap[e]=[]}},{key:"once",value:function(e,t){this.addToEventMap(e,t,!0)}}])}(),k=new M,H=["module","global","require"],j=Object.keys(window).filter(function(e){return!H.includes(e)}),G={module:{},global:{ActionType:r,EventEmitter:k},require:function(e){return G.module[e]||G.global[e]}};j.forEach(function(e){Object.defineProperty(G,e,{get:function(){console.warn("禁止直接访问宿主环境")}})}),window.SDKRuntime=window.SDKRuntime||G;var x=function(e,t){window.SDKRuntime.global[e]=t};window.registToGlobal=window.registToGlobal||x;window.registToModule=window.registToModule||function(e,t){if(window.SDKRuntime.module[e]=t,"strategy"===e){var n=window.SDKRuntime.require("coreLoader");if(!n)return;n.initReportStrategy()}};var U=function(e){return window.SDKRuntime.require(e)};window.use=window.use||U,window.useWebSecsdkApi=window.useWebSecsdkApi||U;var B,X,q=function(e,t,n){window.SDKNativeWebApi?window.SDKNativeWebApi[e]={context:t,fn:n}:window.SDKNativeWebApi=d({},e,{context:t,fn:n});try{t.SDKNativeWebApi?t.SDKNativeWebApi[e]={context:t,fn:n}:Object.defineProperty(t,"SDKNativeWebApi",{enumerable:!1,value:{}})}catch(e){console.warn("storageWebNativeApi 函数缓存失败")}},Q=function(e){var t;if(e)return null===(t=window.SDKNativeWebApi)||void 0===t?void 0:t[e]},F=function(e){var n=localStorage.getItem.bind(localStorage),r=Q(t.API_LOCALSTORAGE_GET);return r&&(n=r.fn.bind(localStorage)),n(e)},K="web_secsdk_runtime_cache",W=function(e,n){var r=F(K)||"{}";try{var o=JSON.parse(r);o[e]=n,function(e,n){var r=localStorage.setItem.bind(localStorage),o=Q(t.API_LOCALSTORAGE_SET);o&&(r=o.fn.bind(localStorage)),r(e,n)}(K,JSON.stringify(o))}catch(e){return void console.warn("web_secsdk_runtime_cache get json parse error")}},V=(null===(B=document.currentScript)||void 0===B||null===(X=B.getAttribute)||void 0===X?void 0:X.call(B,"custom-report-host"))||void 0,Y=function(){var e=window.__RUNTIME_STATIC_OVERSEA_ENDPOINT_RESOLVER__;if(e&&"object"===I(e))return e};window.__RUNTIME_ENDPOINT_RESOLVER__={resolveReporterBaseUrl:function(e){var t=Y();if(t&&"function"==typeof t.resolveReporterBaseUrl)return t.resolveReporterBaseUrl(e)},resolveMetricsUrl:function(){var e=Y();return e&&"function"==typeof e.resolveMetricsUrl?e.resolveMetricsUrl():""},resolveCustomReportHost:function(){var e=U("coreLoader");if(null!=e&&e.customReportHost)return null==e?void 0:e.customReportHost;var t=Y();return t&&"function"==typeof t.resolveCustomReportHost?t.resolveCustomReportHost():V}};var J=window.fetch,z=[],$=!1;function Z(){var e=function(){for(var e=new Array(16),t=0,n=0;n<16;n++)3&n||(t=4294967296*Math.random()),e[n]=t>>>((3&n)<<3)&255;return e}();return e[6]=15&e[6]|64,e[8]=63&e[8]|128,function(e){for(var t=[],n=0;n<256;++n)t[n]=(n+256).toString(16).substr(1);var r=0,o=t;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}(e)}var ee=localStorage.getItem.bind(localStorage),te="web_runtime_security_uid",ne=Q(t.API_LOCALSTORAGE_GET);ne&&(ee=ne.fn.bind(localStorage));var re=ee(te);if(!re||"undefined"===re){re=Z(),document.cookie.includes("x-web-secsdk-uid")||(document.cookie="x-web-secsdk-uid=".concat(re,"; path=/;"));var oe=localStorage.setItem.bind(localStorage),ie=Q(t.API_LOCALSTORAGE_SET);ie&&(oe=ie.fn.bind(localStorage)),oe(te,re)}var ae,ce=new(function(){return p(function e(){l(this,e),this.uid=void 0},[{key:"loadUid",value:function(){this.uid||(this.uid=re)}},{key:"setUid",value:function(e){localStorage.removeItem(te),this.uid=e}},{key:"getUid",value:function(){return this.uid}}])}());d({},t.API_LOCALSTORAGE_SET,["text"]);var ue=(d(d(d(d(d(d(d(d(d(d(ae={},t.API_LOCALSTORAGE_SET,"localStorage.setItem"),t.API_LOCALSTORAGE_GET,"localStorage.getItem"),t.API_SESSIONSTORAGE_SET,"sessionStorage.setItem"),t.API_SESSIONSTORAGE_GET,"sessionStorage.getItem"),t.GEOLOCATION_CURRENT_POSITION,"Geolocation.prototype.getCurrentPosition"),t.GEOLOCATION_WATCH_POSITION,"Geolocation.prototype.watchPosition"),t.CLIPBOARD_WRITE_TEXT,"Clipboard.prototype.writeText"),t.CLIPBOARD_WRITE,"Clipboard.prototype.write"),t.MEDIADEVICES_GETUSERMEDIA,"MediaDevices.prototype.getUserMedia"),t.INDEXDB_ADD,"IDBObjectStore.prototype.add"),d(d(d(d(d(d(d(d(d(d(ae,t.INDEXDB_PUT,"IDBObjectStore.prototype.put"),t.INDEXDB_UPDATE,"IDBCursor.prototype.update"),t.NAVIGATOR_SEND_BEACON,"Navigator.prototype.sendBeacon"),t.REQUEST_FILE_STSTEM,"requestFileSystem"),t.CLIPBOARD_READ_TEXT,"navigator.clipboard.readText"),t.CLIPBOARD_READ,"navigator.clipboard.read"),t.XHR_REQUEST_OPEN,"XMLHttpRequest.prototype.open"),t.XHR_REQUEST_SEND,"XMLHttpRequest.prototype.send"),t.XHR_RESPONSE_LOADEND,"xhr.onloadend"),t.XHR_RESPONSE_READYSTATECHANGE,"xhr.onreadystatechange"),d(d(d(d(d(d(d(d(d(d(ae,t.XHR_RESPONSE_ERROR,"xhr.onerror"),t.FETCH_REQUEST,"window.Request"),t.FETCH_RESPONSE,"window.Response"),t.COOKIE_GET,"document.cookie"),t.COOKIE_SET,"document.cookie"),t.CLICK,"click event"),t.COPY,"copy event"),t.IMG_SRC_SET,"HTMLImageElement.prototype.src"),t.IMG_SRC_GET,"HTMLImageElement.prototype.src"),t.EXCU_COMMAND,"document.execCommand"),d(d(d(d(d(ae,t.DOM_CONTENT_LOADED,"DOMContentLoaded"),t.MUTATION_OBSERVER,"MutationObserver"),t.PERFORMANCE_OBSERVER,"PerformanceObserver"),t.XHR_REQUEST_SETQEQUESTHEADER,"XMLHttpRequest.prototype.setRequestHeader"),t.FETCH_ADDHEADER,"addHeader"));d(d(d(d(d(d(d(d(d({},t.API_LOCALSTORAGE_SET,"ApiStorageSet"),t.API_LOCALSTORAGE_GET,"ApiStorageGet"),t.API_SESSIONSTORAGE_SET,"ApiStorageSet"),t.API_SESSIONSTORAGE_GET,"ApiStorageGet"),t.COPY,"Copy"),t.XHR_REQUEST_OPEN,"XHRRequestOpen"),t.XHR_REQUEST_SEND,"XHRRequestSend"),t.FETCH_REQUEST,"FetchRequest"),t.FETCH_RESPONSE,"FetchResponse");var se=new(function(){return p(function e(t,n){l(this,e),this.pid=void 0,this.uid=void 0,this.strategy={},this.pid=t,this.uid=n},[{key:"loadStrategyProps",value:function(e){var t=window.use("strategy");return Object.keys((null==t?void 0:t.strategy)||{}).reduce(function(n,r){return n[r]=t.strategy[r][e],n},{})}},{key:"loadStrategyExtensionTools",value:function(){return this.loadStrategyProps("extensionTools")}},{key:"loadStrategyConfig",value:function(e){return this.loadStrategyProps("config")[e]}},{key:"loadStrategyMap",value:function(){return this.loadStrategyProps("body")}},{key:"loadStrategyGroup",value:function(){var e=window.use("strategy");return(null==e?void 0:e.event)||{}}}])}())("64","1111"),le=window.fetch,fe=window.navigator,pe=fe.sendBeacon,he=pe&&"function"==typeof pe,de=1e4,ve={bid:"argus3",region:"cn",timeInterval:2,maxSize:100,sampleRatio:{ratio:100}},Ee=function(){return p(function e(){l(this,e),this.prefix=void 0,this.curIndex=void 0,this.map=void 0,this.valueMap=void 0,this.hashCode=void 0,this.hashCodeMap=void 0,this.resultData=void 0,this.hashMap=void 0,this.prefix="",this.curIndex=-1,this.map={},this.valueMap={};for(var t=[],n=0;n<10;n++)t.push(n+"");for(var r=0;r<26;r++)t.push(String.fromCharCode(65+r));for(var o=0;o<26;o++)t.push(String.fromCharCode(97+o));this.hashCode=t,this.hashCodeMap={};for(var i=0;i<this.hashCode.length;i++)this.hashCodeMap[this.hashCode[i]]=i},[{key:"incrementPrefix",value:function(){if(0!==this.prefix.length){for(var e=this.prefix.split(""),t=e.length-1,n=!0;t>=0;t--){if(e[t]!==this.hashCode[this.hashCode.length-1]){e[t]=this.hashCode[this.hashCodeMap[e[t]]+1],n=!1;break}e[t]=this.hashCode[0]}n&&(e[t]!==this.hashCode[this.hashCode.length-1]?e[t]=this.hashCode[this.hashCodeMap[e[t]]+1]:(e[t]=this.hashCode[0],e.unshift(this.hashCode[0]))),this.prefix=e.join("")}else this.prefix=this.hashCode[0]}},{key:"increment",value:function(){this.curIndex===this.hashCode.length-1?(this.curIndex=0,this.incrementPrefix()):this.curIndex++;var e=this.hashCode[this.curIndex];return this.prefix+e}},{key:"get",value:function(e){return this.map[e]?this.map[e]:this.set(e)}},{key:"getKey",value:function(e){return this.valueMap[e]}},{key:"set",value:function(e){var t=this.increment();return this.map[e]=t,this.valueMap[t]=e,t}}])}(),ye=function(){return p(function e(){l(this,e),this.hashMap=void 0,this.resultData=void 0,this.init()},[{key:"init",value:function(){this.hashMap=new Ee,this.resultData=[]}},{key:"convertNodeSchema",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e||["html","body"].includes(e.name)||0===n)return null;var r=[];return Object.keys(e).forEach(function(o){if("type"!==o)if("children"===o){var i=[];e[o].map(function(e){var r=t.convertNodeSchema(e,n-1);r&&i.push(r)}),r.push("[".concat(i.join(","),"]"))}else if("attrs"===o){var a=[];Object.keys(e[o]).forEach(function(n){a.push(t.hashMap.get(n)),a.push(t.hashMap.get(e[o][n]))}),r.push("[".concat(a.join(","),"]"))}else"type"===o||"name"===o?r.push(t.hashMap.get(e[o])):r.push(e[o])}),"[".concat(r.join(","),"]")}},{key:"convertNodeListSchema",value:function(e){var t=this,n=[];e.map(function(e){var r=t.convertNodeSchema(e);r&&n.push(r)}),this.resultData.push("[".concat(n.join(","),"]"))}},{key:"convertEventSchema",value:function(e){var t=this,n=[];return Object.keys(e).forEach(function(r){if("target"===r){var o=t.convertNodeSchema(e[r]);n.push(o)}else if("axis"===r){var i=[];Object.keys(e[r]).forEach(function(t){i.push(e[r][t])}),n.push("[".concat(i.join(","),"]"))}else n.push(t.hashMap.get(e[r]))}),"[".concat(n.join(","),"]")}},{key:"convertEventListSchema",value:function(e){var t=this,n=[];e.map(function(e){var r=t.convertEventSchema(e);r&&n.push(r)}),this.resultData.push("[".concat(n.join(","),"]"))}},{key:"convertRequestSchema",value:function(e){var t=this,n=[];return Object.keys(e).forEach(function(r){if("query"===r){var o=[];Object.keys(e[r]).forEach(function(e){o.push(t.hashMap.get(e))}),n.push("[".concat(o.join(","),"]"))}else if("header"===r){var i=[];Object.keys(e[r]).forEach(function(n){i.push(t.hashMap.get(n)),i.push(e[r][n])}),n.push("[".concat(i.join(","),"]"))}else n.push(t.hashMap.get(e[r]))}),"[".concat(n.join(","),"]")}},{key:"convertRequestListSchema",value:function(e){var t=this,n=[];e.map(function(e){var r=t.convertRequestSchema(e);r&&n.push(r)}),this.resultData.push("[".concat(n.join(","),"]"))}},{key:"getResult",value:function(){var e=this.resultData.join(","),t="[".concat(Object.values(this.hashMap.valueMap).map(function(e){return"'".concat(e,"'")}).join(","),"]");return this.init(),{hashMap:t,version:"1",payload:e}}}])}(),Se=function(){var e=window.__RUNTIME_ENDPOINT_RESOLVER__;return e&&"function"==typeof e.resolveReporterBaseUrl&&"function"==typeof e.resolveMetricsUrl?e:{resolveReporterBaseUrl:function(){},resolveMetricsUrl:function(){return""},resolveCustomReportHost:function(){}}},_e=["context","__secReqHeaders"],me=["eventOverwrite"],Re=function(){return p(function e(t){var n=this;l(this,e),this.sampleDataQueue=[],this.config=ve,this.isReporting=!1,this.configInited=!1,this.getSlardarBid=function(){return n.config.bid||"argus3"},this.getConfigRegion=function(){var e,t=U("coreLoader");return t?t.customReportHost?"custom":null!==(e=t.host)&&void 0!==e&&e.includes("sf")?"sg":"cn":(n.config.region||"cn").toLowerCase()},this.gerReportUrl=function(){if("custom"===n.getConfigRegion()){var e=Se().resolveCustomReportHost();if(!e)return;return"https://".concat(e,"/monitor_browser/collect/batch/security/?bid=").concat(n.getSlardarBid())}var t,r=(t=n.getConfigRegion(),Se().resolveReporterBaseUrl(t));if(r)return r+n.getSlardarBid()},this.setConfig(t)},[{key:"report",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"runtime_strategy";ce.loadUid();var r=window.use("reportOptions");this.configInited||(this.setConfig(r),this.configInited=!0);var o=e.event,i=e.action,a=e.fromStage,c=Boolean(null==i?void 0:i.bid)||this.shouleAddToSampleQueue(e),u=(null==i?void 0:i.key)||o.pageUrl||window.location.href,s=u+a;if(null!=i&&i.once){var l=function(e){var t=F(K)||"{}";try{return JSON.parse(t)[e]}catch(e){return void console.warn("web_secsdk_runtime_cache set json parse error")}}(i.strategyKey)||[];if(l.includes(s))return;c=!0,l.push(s),W(i.strategyKey,l)}var f=v({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(o),o)),p=f.payload;p.context,p.__secReqHeaders;var h=S(p,_e);f.payload=h,i.eventOverwrite;var d=S(i,me),E=Object.assign(this.constructNewDataWithPrifix(f,"event"),this.constructNewDataWithPrifix(d,"action"),i.eventOverwrite?this.constructNewDataWithPrifix({payload:null==i?void 0:i.eventOverwrite},"event"):{},{fromStage:a,documentURL:window.location.href,uId:ce.getUid(),sdkVersion:"1.0.42"}),y=Object.keys(E).reduce(function(e,t,n){return"string"==typeof E[t]&&(e[t]=E[t]),e},{}),_=Object.keys(E).reduce(function(e,t,n){return"number"==typeof E[t]&&(e[t]=E[t]),e},{}),m={age:Math.floor(Date.now()),type:n,url:u,body:{reportString:y,reportInt:_},"user-agent":(null===(t=window.navigator)||void 0===t?void 0:t.userAgent)||""};(c||o.ignoreGlobalSample||i.ignoreGlobalSample)&&this.pushDataToQueue(m)}},{key:"constructNewDataWithPrifix",value:function(e,t){var n={};for(var r in e){var o=e[r],i=Object.prototype.toString.call(o).slice(8,-1);if("Array"===i||"Object"===i||"Arguments"===i)try{o=JSON.stringify(o)}catch(e){}else"Function"!==i&&"Symbol"!==i||(o=String(o));n["".concat(t,"_").concat(r)]=o}return n}},{key:"pushDataToQueue",value:function(e){this.sampleDataQueue.push(e),this.upload()}},{key:"upload",value:(t=s(D().mark(function e(){var t,n=this;return D().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.gerReportUrl(),!this.isReporting&&t&&0!==this.sampleDataQueue.length){e.next=3;break}return e.abrupt("return");case 3:this.isReporting=!0,setTimeout(s(D().mark(function e(){var r,o,i,a,c,u,l,f,p,h,d,v;return D().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.config.maxSize,o=n.sampleDataQueue.slice(0,r),i=new ye,o.forEach(function(e){e.body.reportString.uId=ce.getUid()}),a=o.filter(function(e){var t;return null===(t=e.body.reportString)||void 0===t?void 0:t.action_bid}),o=o.filter(function(e){var t;return!(null!==(t=e.body.reportString)&&void 0!==t&&t.action_bid)}),c=o.filter(function(e){return!e.body.reportString.action_encode}),u=o.filter(function(e){return e.body.reportString.action_encode}),l=[],f=[],p=null,u.forEach(function(e){void 0!==e.body.reportString.action_payload&&("event"===e.body.reportString.action_encode&&(l.push(JSON.parse(e.body.reportString.action_payload)),p=e),"request"===e.body.reportString.action_encode&&(f.push(JSON.parse(e.body.reportString.action_payload)),p=e))}),i.convertEventListSchema(l),i.convertRequestListSchema(f),p&&(p.body.reportString.action_payload=JSON.stringify(i.getResult()),delete p.body.reportString.event_payload,c.push(p)),n.sampleDataQueue=n.sampleDataQueue.slice(r),h=function(){var e=s(D().mark(function e(t,r){return D().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!he){e.next=8;break}if(pe.call(fe,t,JSON.stringify(r))){e.next=6;break}return console.log("「sendBecon」send send log report error"),e.next=6,n.logReportByFetch(t,r);case 6:e.next=10;break;case 8:return e.next=10,n.logReportByFetch(t,r);case 10:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),!(c.length>0)){e.next=20;break}return e.next=20,h(t,c);case 20:if(!(a.length>0)){e.next=24;break}return v=(null===(d=a[0].body.reportString)||void 0===d?void 0:d.action_bid)||"",e.next=24,h(t.replace(n.config.bid,v),a);case 24:n.isReporting=!1,n.upload();case 26:case"end":return e.stop()}},e)})),1e3*this.config.timeInterval);case 5:case"end":return e.stop()}},e,this)})),function(){return t.apply(this,arguments)})},{key:"logReportByFetch",value:(e=s(D().mark(function e(t,n){return D().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le(t,{method:"post",mode:"cors",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("「fetch」send log report error",e.t0),this.sampleDataQueue=n.concat(this.sampleDataQueue);case 9:case"end":return e.stop()}},e,this,[[0,5]])})),function(t,n){return e.apply(this,arguments)})},{key:"shouleAddToSampleQueue",value:function(e){var t=e.event,n=e.action,r=this.getMatchedRatio(t,n),o="object"===I(r)?r.ratio:r;return o===de||Math.floor(Math.random()*de)<=o}},{key:"setConfig",value:function(e){e&&("Array"===Object.prototype.toString.call(e.sampleRatio).slice(8,-1)&&(e.sampleRatio=this.sortSampleRatio(e.sampleRatio)),this.config=y(y({},this.config),e))}},{key:"sortSampleRatio",value:function(e){var t=function(e){var t=0;return e.actionType&&e.eventType?t=2:(e.actionType||e.eventType)&&(t=1),t};return e.sort(function(e,n){var r=t(e),o=t(n);return r>o?-1:r<o?1:0})}},{key:"getMatchedRatio",value:function(e,t){var n=de,r=this.config.sampleRatio;if(!r)return n;var o=e.name,i=t.type,a=Object.prototype.toString.call(r).slice(8,-1);if("Object"===a)n=this.matchRatioRule(o,i,r).ratio;else if("Array"===a)for(var c=r,u=0,s=c.length;u<s;u++){var l=this.matchRatioRule(o,i,c[u]),f=l.matched,p=l.ratio;if(f){n=p;break}}return r}},{key:"matchRatioRule",value:function(e,t,n){var r={ratio:de,matched:!1},o=n.ratio,i=n.eventType,a=n.actionType;return(i&&a&&e===i&&t===a||i&&e===i||a&&t===a||!i&&!a)&&(r={ratio:o,matched:!0}),r}}]);var e,t}(),Oe=new Re,ge=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e.action,r=e.event;Oe.report(e),t&&k.emit(r,n)},Te=function(e){var t=e.eventName,n=e.payload,o=e.reason,i=e.strategyKey,a=e.errorStack,c=e.fromStage,u={name:t,source:ue[t],timestamp:Date.now(),pageUrl:location.href,payload:n},s={type:r.ERROR,strategyKey:i,reason:o,payload:a};ge({event:u,action:s,fromStage:c})},Ae=function(e){if(e)return"function"==typeof e?e:"string"==typeof e?o().compileStrategyFn(e):void 0},Ne=function(){return p(function e(t,n){l(this,e),this.eventName=void 0,this.payload=void 0,this.eventName=t,this.payload=n},[{key:"registEvent",value:function(){return{name:this.eventName,source:ue[this.eventName],timestamp:Date.now(),log_id:Z(),pageUrl:location.href,payload:this.payload}}},{key:"selection",value:function(){var e=se.loadStrategyMap(),t=se.loadStrategyGroup()||{};return((null==t?void 0:t[this.eventName])||[]).map(function(t){return null==e?void 0:e[t]}).filter(function(e){return Boolean(e)}).map(function(e){return y(y({},e),{},{condition:Ae(e.condition),expression:Ae(e.expression)})})}},{key:"compute",value:function(e,t){var n=e.key,i=e.condition,a=e.expression,c=e.version;if(!i||"function"!=typeof i||i(t)){var u=se.loadStrategyConfig(n);if(a&&"function"==typeof a)try{var s=a(t);return s.strategyKey=n,s.strategyVersion=c,s.type!==r.PASS&&ge({event:t,action:s,fromStage:"compute"},!1),s}catch(e){return console.log(e),Te({eventName:this.eventName,strategyKey:n,reason:"策略计算异常",payload:t.payload,errorStack:{config:u,name:e.name,message:e.message,detail:e.detail},fromStage:"compute"}),{type:r.PASS,reason:"".concat(n,"策略执行异常")}}return o().isDynamicEnabled()?void 0:{type:r.PASS,reason:"".concat(n,"动态策略已被 static 版本禁用")}}}},{key:"execute",value:function(e,t){var n,o,i=[],a=e.filter(function(e){return e.type===r.BLOCK}),c=e.filter(function(e){return e.type===r.REWRITE}),u=e.filter(function(e){return e.type===r.REPORT_ONLY}),s=e.filter(function(e){return e.type===r.PASS});(a.length>0?i=[a[0]]:c.length>0?i=c:s.length>0&&(i=[s[0]]),u.length>0)&&(n=i).push.apply(n,N(u));i=i.filter(function(e){return e});for(var l=!1,f=U("coreLoader"),p=0;p<i.length;p++){var h=U("strategy").execution,d=i[p],v={decisionName:this.eventName,strategyName:d.strategyKey,strategyVersion:d.strategyVersion,actionType:d.type,functionName:h[this.eventName]};try{if(!h[this.eventName])continue;var E=performance.now();if(o=U(h[this.eventName])(t,d,p===i.length-1),d.type!==r.PASS){d.report;var y=performance.now();null==f||f.emitMetrics(L.latency,y-E,v)}}catch(e){null==f||f.emitMetrics(L.errorNum,1,v),l=p===i.length-1}}var S=t.payload,_=S.originFn,m=S.args,R=S.context;return(0===i.length||l)&&_?_.apply(R,m):o}},{key:"run",value:function(){var e,t=this.registEvent(),n=this.selection(),r=[],o=U("coreLoader"),i=h(n);try{for(i.s();!(e=i.n()).done;){var a=e.value,c={decisionName:this.eventName,strategyName:a.key,strategyVersion:a.version,actionType:""};try{var u=performance.now(),s=this.compute(a,t);c.actionType=null==s?void 0:s.type,s&&r.push(s);var l=performance.now();null==o||o.emitMetrics(P.latency,l-u,c)}catch(e){null==o||o.emitMetrics(P.errorNum,1,c)}}}catch(e){i.e(e)}finally{i.f()}return this.execute(r,t)}}])}(),be=function(e,t){if(0===t)return e;var n=null;return function(){var r=arguments,o=this;n||(n=setTimeout(function(){e.apply(o,r),n=null},t))}},Ie=function(e,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(!n||n.fn){if(!n){var i={handle:function(){}};n={object:i,fn:i.handle,fnName:"handle"}}var a=n,c=a.object,u=a.fn,s=a.fnName;return q(e,c,u),s&&(c[s]=be(l,o)),be(l,o)}function l(){var n=this,o=[];for(var i in arguments)o.push(arguments[i]);if((this===sessionStorage&&s&&(e="getItem"===s?t.API_SESSIONSTORAGE_GET:t.API_SESSIONSTORAGE_SET),this===localStorage&&s&&(e="getItem"===s?t.API_LOCALSTORAGE_GET:t.API_LOCALSTORAGE_SET),e===t.PERFORMANCE_OBSERVER&&o[0])&&!o[0].getEntries().filter(function(e){if(e instanceof PerformanceResourceTiming){var t=e.name;if(!t)return!0;var n=Oe.gerReportUrl();try{var r=new URL(t);return!n.startsWith("".concat(r.protocol,"//").concat(r.host).concat(r.pathname))}catch(e){return!1}}return!0}).length)return;var a=r&&r.apply(n,o)||{},c=Object.assign({context:n,args:o,originFn:u},a),l=U("coreLoader");try{var f=performance.now(),p=new Ne(e,c).run(),h=performance.now();return null==l||l.emitMetrics(C.latency,h-f,{decisionName:e}),p}catch(t){return null==l||l.emitMetrics(C.errorNum,1,{decisionName:e}),Te({eventName:e,payload:c,reason:"策略引擎执行异常",errorStack:t,fromStage:"select"}),u.apply(n,o)}}},we=function(e,t,n){for(var r=t.split("."),o=0,i=[window];o<i.length;o++){var a,c=i[o],u=r[r.length-1],s=c,l=h(r);try{for(l.s();!(a=l.n()).done;){var f=a.value;if(s=c,!(c=c[f]))return}}catch(e){l.e(e)}finally{l.f()}try{Ie(e,{object:s,fn:c,fnName:u},n)}catch(e){console.error("createAspectByPath error",e)}}};q(t.FETCH_REQUEST,window,le);var De="Request"in window,Ce="Headers"in window;window.fetch=function(e,n){var r={onRequest:function(e,n){return le.apply(window,[e,n]).then(function(o){if(200===o.status){var i=e instanceof Request?e.url:e,a=e instanceof Request?e.method:null==n?void 0:n.method;Ie(t.FETCH_RESPONSE,{object:r,fn:r.onResponse,fnName:"onResponse"},function(e){return{_headers:function(e){for(var t,n=e.headers.entries(),r={};(t=n.next())&&(t.value&&(r[t.value[0]]=t.value[1]),!t.done););return r}(e),url:i,method:a,response:e}})}return r.onResponse.apply(window,[o])})},onResponse:function(e){return e}};return Ie(t.FETCH_REQUEST,{object:r,fn:r.onRequest,fnName:"onRequest"},function(e,n){var r,o="",i="",a=n&&n.body;De&&e instanceof Request?(o=e.url,i=e.method,r=e.headers.set.bind(e.headers)):(o=e,i=n&&n.method?n.method:"GET",(n=n||{}).headers=n.headers||{},r=Ce&&n.headers instanceof Headers?n.headers.set.bind(n.headers):Array.isArray(n.headers)?function(e,t){var r,o,i=!1;((null===(r=n)||void 0===r?void 0:r.headers).forEach(function(n){n[0]===e&&(n[1]=t,i=!0)}),i)||(null===(o=n)||void 0===o?void 0:o.headers).push([e,t])}:function(e,t){var r,o,i=(null===(r=n)||void 0===r?void 0:r.headers)[e];(null===(o=n)||void 0===o?void 0:o.headers)[e]=i?"".concat(i,", ").concat(t):t});var c={url:o,method:i,body:a,init:n,input:e,__secReqHeaders:{},addHeader:r};return c.addHeader=Ie(t.FETCH_ADDHEADER,{object:{},fn:r,fnName:"addHeader"},function(e,t){return t&&e?(void 0===c.__secReqHeaders[e]?c.__secReqHeaders[e]=t:c.__secReqHeaders[e]="".concat(c.__secReqHeaders[e],", ").concat(t),{}):{}}),c}),r.onRequest(e,n)},we(t.XHR_REQUEST_OPEN,"XMLHttpRequest.prototype.open",function(e,t,n){var r=this;r._xhr_open_args||(r._xhr_open_args={}),Object.assign(r._xhr_open_args,{method:e,url:t,isAsync:n})}),we(t.XHR_REQUEST_SETQEQUESTHEADER,"XMLHttpRequest.prototype.setRequestHeader",function(e,t){if(!t||!e)return{};var n=this;return n._xhr_headers=n.__secReqHeaders=n.__secReqHeaders||{},void 0===n.__secReqHeaders[e]?n.__secReqHeaders[e]=t:n.__secReqHeaders[e]="".concat(n.__secReqHeaders[e],", ").concat(t),{}}),we(t.XHR_REQUEST_SEND,"XMLHttpRequest.prototype.send",function(){var e=this,n=function(n){var r=n.toUpperCase(),o="on".concat(n),i=e[o];i&&(e[o]=function(){if(e.readyState===XMLHttpRequest.DONE&&200===e.status){var n=Ie(t["XHR_RESPONSE_".concat(r)],{object:e,fn:i,fnName:null},function(){});return null==n?void 0:n.apply(e,arguments)}i&&i.apply(e,arguments)})};n("readystatechange"),n("loadend")});var Pe=window,Le=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(e,n,r){if(e!==t.MESSAGE.toLowerCase())return Le.call(this,e,n,r);var o=Ie(t.MESSAGE,{object:Pe,fn:n,fnName:"listener"},function(e){return{}},0);Le.call(this,e,o,r)},new(function(){return p(function e(){l(this,e),this.projectId=void 0,this.version="1.0.42",this.customReportHost="",this.eventQueue=[],this.init()},[{key:"init",value:function(){var e=document.querySelector('script[src*="/obj/security-secsdk/runtime"]')||document.querySelector('script[src*="/secsdk_runtime_bundler"]'),t=e.getAttribute("project-id"),n=e.getAttribute("custom-report-host");this.customReportHost=n,this.projectId=t,this.emitInitReport(),x("coreLoader",this),this.startEventLoop()}},{key:"emitInitReport",value:function(){Oe.report({event:{name:t.SDK_REPORT_INIT,source:n.REPORT_CONFIG_SET,pageUrl:window.location.href,payload:{},timestamp:Date.now()},action:{type:r.REPORT_ONLY,payload:{}}})}},{key:"initReportStrategy",value:function(){var e=U("strategy");if(e.strategy.report){var n=e.strategy.report;Oe.setConfig(n.config),this.emitInitReport();try{new Ne(t.SDK_INIT,{}).run()}catch(e){Te({eventName:t.SDK_INIT,payload:{},reason:"策略引擎执行异常",errorStack:e,fromStage:"select"})}setTimeout(function(){try{new Ne(t.CONTENT_LOADED,{}).run()}catch(e){Te({eventName:t.CONTENT_LOADED,payload:{},reason:"策略引擎执行异常",errorStack:e,fromStage:"select"})}},3e3)}}},{key:"emitMetrics",value:function(e,t,n){var r,o=U("globalConfig");if(o&&null!=o&&null!==(r=o.strategy)&&void 0!==r&&r.monitor){var i=o.strategy.monitor.config.sampleRatio,a=void 0===i?0:i;1e4*Math.random()<a&&function(e,t,n){["projectId","env","name","sdkVersion","decisionName","strategyName","strategyVersion","functionName","actionType"].forEach(function(e){void 0===n[e]&&(n[e]="-")});var r=parseInt(t);r&&(z.push({name:e.name,tags:n,value:r,type:e.type}),$||($=!0,setTimeout(function(){var e=JSON.stringify({values:z});z=[];var t=window.use("coreLoader"),n="";if(n.includes("metricsUrl"))$=!1;else if(!t.customReportHost){try{J(n,{method:"post",body:e,mode:"cors",headers:{"Content-Type":"application/json"}}).catch(function(e){})}catch(e){}$=!1}},2e3)))}(e,t,y(y({},n),{},{projectId:this.projectId,env:"online",sdkVersion:this.version}))}}},{key:"addEvent",value:function(e,t){this.eventQueue.push({eventName:e,eventParams:t})}},{key:"startEventLoop",value:function(){var e=this;setInterval(function(){var n=e.eventQueue.slice(0);new Ne(t.EVENT_LOOP,{events:n}).run(),e.eventQueue=[]},5e3)}}])}())});
;window.registToModule('executePostMessage', function(a,b,c,d,e){"use strict";
function main(event, action, end) {
    var ActionType = window.use("ActionType");
    var payload = event.payload;
    if (end && action.type === ActionType.BLOCK) {
        console.error("origin not available");
        return;
    }
    if (end) {
        return payload.originFn.apply(payload.context, payload.args);
    }
}
; return typeof main !== 'undefined' && main(a,b,c,d,e);});window.registToModule('executeSDKInitSync', function(a,b,c,d,e){"use strict";
function main(event, action) {
  var _a, _b, _c, _d, _e, _f;
  const ActionType = window.use("ActionType");
  const { type } = action;
  if (action.strategyKey === "privacyComponentInit" && action.type === ActionType.REPORT_ONLY) {
    const init = window.use("createPrivacyComponentInit");
    init();
  }
  if (action.strategyKey === "trustTypes") {
    if (!window.use("trustTypesFilter")) {
      const init = window.use("trustTypesInit");
      init();
      const config = {
        reportOnly: action.type === ActionType.REPORT_ONLY,
        bid: action.payload.bid,
        rules: action.payload.rules,
        reportHost: action.payload.reportHost,
        blackConfig: action.payload.blackConfig,
        configMode: action.payload.configMode,
        escapeAttrValue: action.payload.escapeAttrValue,
        removeComment: action.payload.removeComment,
        urlLimit: action.payload.urlLimit,
        htmlLimit: action.payload.htmlLimit,
        srcDocBlackConfig: action.payload.srcDocBlackConfig,
        version: action.payload.version
      };
      window.use("trustTypesFilter")(config);
    }
  }
  if (action.strategyKey === "envVarDetect" && type === ActionType.BLOCK) {
    try {
      setInterval(() => {
        if (window.document.body) {
          window.document.body.innerHTML = "因您违反了抖音用户协议，本次访问被禁止，请联系 Argus Oncall";
        }
      }, 0);
    } catch (e) {
    }
  }
  if (action.strategyKey === "sensitiveDecryptInit" && type !== ActionType.PASS) {
    const bid = (_d = (_c = (_b = (_a = window.use("strategy")) == null ? void 0 : _a.strategy) == null ? void 0 : _b.report) == null ? void 0 : _c.config) == null ? void 0 : _d.bid;
    (_e = window.use("registSensitiveDecryptSDK")) == null ? void 0 : _e();
    (_f = window.use("sensitiveDecryptSDK")) == null ? void 0 : _f.init({ bid });
  }
}
; return typeof main !== 'undefined' && main(a,b,c,d,e);});window.registToModule('exexcuteMessage', function(a,b,c,d,e){"use strict";
function main(event, action, end) {
    var ActionType = window.use("ActionType");
    var payload = event.payload;
    if (end && action.type === ActionType.BLOCK) {
        console.error("origin not available");
        return;
    }
    if (end) {
        return payload.originFn.apply(payload.context, payload.args);
    }
}
; return typeof main !== 'undefined' && main(a,b,c,d,e);});window.registToModule('trustTypesInit', function(a,b,c,d,e){"use strict";
/*!
* @byted/secsdk-strategy v1.0.41
* (c) 2026
*/
!function(e) {
  "function" == typeof define && define.amd ? define(e) : e();
}(function() {
  "use strict";
  function e(e2, t2, r2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" != typeof e4 || !e4)
          return e4;
        var r3 = e4[Symbol.toPrimitive];
        if (void 0 !== r3) {
          var n2 = r3.call(e4, t4 || "default");
          if ("object" != typeof n2)
            return n2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t4 ? String : Number)(e4);
      }(e3, "string");
      return "symbol" == typeof t3 ? t3 : t3 + "";
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[t2] = r2, e2;
  }
  function t(e2, t2) {
    var r2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var n2 = Object.getOwnPropertySymbols(e2);
      t2 && (n2 = n2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), r2.push.apply(r2, n2);
    }
    return r2;
  }
  function r(r2) {
    for (var n2 = 1; n2 < arguments.length; n2++) {
      var o2 = null != arguments[n2] ? arguments[n2] : {};
      n2 % 2 ? t(Object(o2), true).forEach(function(t2) {
        e(r2, t2, o2[t2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r2, Object.getOwnPropertyDescriptors(o2)) : t(Object(o2)).forEach(function(e2) {
        Object.defineProperty(r2, e2, Object.getOwnPropertyDescriptor(o2, e2));
      });
    }
    return r2;
  }
  var n = { blackList: { a: ["folder"], meta: ["content"], iframe: ["srcdoc"], input: ["pattern"], vmlframe: ["xmlns"] }, blackTags: ["script", "xml", "embed", "isindex", "object", "base", "set", "handler", "animate", "payload", "import", "selectedcontent"], blackAttrs: ["charset", "ns", "namespace", "formaction", "xlink:href", "xmlns:xlink", "handler", "repeat", "repeat-start", "repeat-end"], blackAttrRegExps: [/^on/], filterList: { param: ["value"], video: ["poster"], form: ["action"] }, filterAttrs: ["href", "src", "background", "style", "dynsrc", "lowsrc", "content", "name"] }, o = function(e2) {
    return e2 && e2.Math == Math && e2;
  }, c = o("object" == typeof globalThis && globalThis) || o("object" == typeof window && window) || o("object" == typeof self && self) || o("object" == typeof global && global) || Function("return this")();
  /*!{"@ies/argus-builder-strategy":"1.4.1", "@ies/argus-builder-common": "workspace:1.2.17"}*/
  function i(e2, t2) {
    if (!(e2 instanceof t2))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(e2, t2) {
    for (var r2 = 0; r2 < t2.length; r2++) {
      var n2 = t2[r2];
      n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, n2.key, n2);
    }
  }
  function l(e2, t2, r2) {
    return t2 && a(e2.prototype, t2), r2 && a(e2, r2), e2;
  }
  function s(e2, t2, r2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[t2] = r2, e2;
  }
  var u = function() {
    function e2() {
      i(this, e2), s(this, "collect", void 0), this.collect = { blackList: {}, blackTags: [], blackAttrs: [], blackAttrRegExps: [], filterAttrs: [], filterList: {}, filterProtocol: [], forceRemove: [], escapeAttrs: [], escapeText: [], invalidAttrs: [] };
    }
    return l(e2, [{ key: "initCollect", value: function() {
      this.collect = { blackList: {}, blackTags: [], blackAttrs: [], blackAttrRegExps: [], filterAttrs: [], filterList: {}, filterProtocol: [], forceRemove: [], escapeAttrs: [], escapeText: [], invalidAttrs: [] };
    } }, { key: "removeCollect", value: function() {
      var e3 = this.getReportCollect(), t2 = e3.count, r2 = e3.ret;
      return this.collect = { blackList: {}, blackTags: [], blackAttrs: [], blackAttrRegExps: [], filterAttrs: [], filterList: {}, filterProtocol: [], forceRemove: [], escapeAttrs: [], escapeText: [], invalidAttrs: [] }, { collectKey: 0 === t2 ? "" : JSON.stringify(r2), collectMode: "black" };
    } }, { key: "getReportCollect", value: function() {
      var e3 = this.collect, t2 = 0, r2 = true, n2 = false, o2 = void 0;
      try {
        for (var c2, i2 = function() {
          var r3 = c2.value;
          Array.isArray(e3[r3]) ? 0 === e3[r3].length ? delete e3[r3] : (e3[r3] = w.from(w.uniq(e3[r3])), t2 += e3[r3].length) : 0 === w.keys(e3[r3]).length ? delete e3[r3] : w.keys(e3[r3]).forEach(function(n3) {
            e3[r3][n3] = w.from(w.uniq(e3[r3][n3])), t2 += e3[r3][n3].length;
          });
        }, a2 = w.keys(e3)[Symbol.iterator](); !(r2 = (c2 = a2.next()).done); r2 = true)
          i2();
      } catch (e4) {
        n2 = true, o2 = e4;
      } finally {
        try {
          r2 || null == a2.return || a2.return();
        } finally {
          if (n2)
            throw o2;
        }
      }
      return { count: t2, ret: e3 };
    } }]), e2;
  }(), f = new (function() {
    function e2() {
      i(this, e2), s(this, "batchData", []), s(this, "uniqKeys", /* @__PURE__ */ new Set()), s(this, "timeout", 2e3), s(this, "lock", false);
    }
    return l(e2, [{ key: "upload", value: function(e3) {
      var t2 = this;
      if (!e3 || !e3.isCloseSSRReport || (null == c ? void 0 : c.document)) {
        var r2 = e3.reportUrl || "";
        "-" === r2 && c.xssReportUrl && (r2 = c.xssReportUrl), !this.lock && r2 && 0 !== this.batchData.length && "-" !== r2 && (this.lock = true, setTimeout(function() {
          try {
            var n2 = t2.batchData.slice(0, 100);
            t2.batchData = t2.batchData.slice(100), c.fetch(r2, { method: "post", body: JSON.stringify(n2), headers: { "Content-Type": "application/json" } }).catch(function(e4) {
              console.warn("xss defense report error", e4);
            });
          } catch (e4) {
          }
          t2.lock = false, t2.upload(e3);
        }, this.timeout));
      }
    } }, { key: "generateKey", value: function(e3) {
      return e3.collectKey ? [e3.collectMode, e3.collectKey].join("___") : "";
    } }, { key: "push", value: function(e3, t2) {
      this.batchData.push(e3), this.upload(t2);
    } }, { key: "sampling", value: function(e3) {
      var t2 = function(t3) {
        var r3 = i2[t3], c2 = n2[r3], a3 = c2.find(function(t4) {
          return e3[r3] && e3[r3].includes(t4.target);
        }), l2 = c2.find(function(t4) {
          return e3.body && e3.body[r3] && e3.body[r3].includes(t4.target);
        });
        a3 && a3.ratio && "number" == typeof a3.ratio && (o2 = a3.ratio), l2 && l2.ratio && "number" == typeof l2.ratio && (o2 = "number" == typeof o2 && o2 > l2.ratio ? o2 : l2.ratio);
      };
      if (c.argusConfig) {
        var r2 = c.argusConfig.xss;
        if (r2) {
          var n2 = r2.sample;
          if (n2) {
            for (var o2, i2 = w.keys(n2), a2 = 0; a2 < i2.length; ++a2)
              t2(a2);
            return "number" == typeof o2 && Math.floor(1e4 * Math.random()) > o2 || void 0;
          }
        }
      }
    } }, { key: "report", value: function(e3, t2) {
      var r2 = this.generateKey(e3);
      if (c.fetch && e3.collectKey) {
        var n2 = "SSR";
        void 0 !== c && void 0 !== c.location && void 0 !== c.location.href && (n2 = c.location.href), e3.documentUrl = n2;
        var o2 = e3.documentUrl;
        o2 && "function" == typeof o2.split && (o2 = o2.split("?")[0]);
        var i2 = "";
        if (null == c ? void 0 : c.gfdatav1) {
          var a2 = c.gfdatav1;
          i2 = "".concat(a2.env, "_").concat(a2.region, "_").concat(a2.ver);
        }
        var l2 = { age: Math.floor(Date.now()), type: "xss", url: n2, body: e3, "user-agent": "" }, s2 = T();
        l2.url = "".concat(r2, "___").concat(o2), s2 && (l2.body.type = "".concat(l2.body.type, "_remote_close")), l2.body.type = "".concat(l2.body.type, "_").concat(i2), "SSR" === n2 && (l2.url = "SSR___".concat(l2.url), l2.body.ssr = true), l2.url = "".concat(e3.scene, "__").concat(l2.url);
        try {
          if (true === this.sampling(l2))
            return;
        } catch (e4) {
        }
        this.push(l2, t2);
      }
    } }]), e2;
  }())(), p = new u();
  /*!{"@ies/argus-builder-strategy":"1.4.1", "@ies/argus-builder-common": "workspace:1.2.17"}*/
  function m(e2, t2, r2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[t2] = r2, e2;
  }
  function y(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var r2 = null != arguments[t2] ? arguments[t2] : {}, n2 = Object.keys(r2);
      "function" == typeof Object.getOwnPropertySymbols && (n2 = n2.concat(Object.getOwnPropertySymbols(r2).filter(function(e3) {
        return Object.getOwnPropertyDescriptor(r2, e3).enumerable;
      }))), n2.forEach(function(t3) {
        m(e2, t3, r2[t3]);
      });
    }
    return e2;
  }
  function d(e2, t2) {
    return t2 = null != t2 ? t2 : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : function(e3, t3) {
      var r2 = Object.keys(e3);
      if (Object.getOwnPropertySymbols) {
        var n2 = Object.getOwnPropertySymbols(e3);
        t3 && (n2 = n2.filter(function(t4) {
          return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
        })), r2.push.apply(r2, n2);
      }
      return r2;
    }(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e2, r2, Object.getOwnPropertyDescriptor(t2, r2));
    }), e2;
  }
  var g = function(e2) {
    var t2 = Number(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1);
    return -1 !== t2 && "NaN" !== t2.toString() && e2.length >= t2;
  }, v = function(e2) {
    return "string" == typeof e2 ? e2.replace(/'/g, '"').replace('=""', "").replace(/\s+/g, "").toLowerCase() : "";
  }, b = function(e2, t2) {
    var r2 = e2 && e2.logType ? e2.logType : "-";
    return "".concat(r2, "_error_").concat(t2);
  }, h = function(e2) {
    var t2 = e2.e, r2 = e2.sourceText, n2 = e2.config, o2 = e2.type, c2 = e2.disposition, i2 = e2.sceneType;
    try {
      var a2 = function(e3) {
        return e3 && (e3.name || e3.message) ? "".concat(e3.name || "", ":").concat(e3.message || "") : String(e3);
      }(t2);
      f.report({ type: b(n2, i2), disposition: c2, sourceText: C(String(r2 || "").replace(/'/g, '"')), filterText: C(a2.replace(/'/g, '"')), collectKey: "exception", collectData: a2, collectMode: "black", scene: "".concat(i2, "_").concat(o2, "_exception"), filename: n2 && n2.filename }, n2);
    } catch (e3) {
    }
  }, T = function() {
    var e2 = false;
    if ("function" == typeof c.useWebSecsdkApi) {
      var t2 = c.useWebSecsdkApi("compiler");
      t2 && false === t2.enableXssFilter && (e2 = true);
    }
    return c.argusConfig && c.argusConfig.xss && false === c.argusConfig.xss.enableXssFilter && (e2 = true), c.__msite_app_conf && false === c.__msite_app_conf.enable_xss_filter && (e2 = true), c.tccAppConfig && false === c.tccAppConfig.enable_xss_filter && (e2 = true), e2;
  }, x = function(e2) {
    if (T())
      return "report";
    var t2 = e2.reportOnly, r2 = void 0 === t2 || t2;
    return false === r2 || "false" === r2 ? "enforce" : "report";
  }, w = { indexOf: function(e2, t2) {
    var r2, n2;
    for (r2 = 0, n2 = e2.length; r2 < n2; r2++)
      if (e2[r2] === t2)
        return r2;
    return -1;
  }, forEach: function(e2, t2, r2) {
    var n2, o2;
    for (n2 = 0, o2 = e2.length; n2 < o2; n2++)
      t2.call(r2, e2[n2], n2, e2);
  }, some: function(e2, t2, r2) {
    var n2, o2;
    for (n2 = 0, o2 = e2.length; n2 < o2; n2++) {
      if (t2.call(r2, e2[n2], n2, e2))
        return true;
    }
    return false;
  }, trim: function(e2) {
    return e2.replace(/(^\s*)|(\s*$)/g, "");
  }, isArray: function(e2) {
    return t2 = e2, null != (r2 = Array) && "undefined" != typeof Symbol && r2[Symbol.hasInstance] ? !!r2[Symbol.hasInstance](t2) : t2 instanceof r2;
    var t2, r2;
  }, includes: function(e2, t2) {
    if ("string" == typeof e2)
      return -1 !== e2.indexOf(t2);
    for (var r2 = 0; r2 < e2.length; r2++)
      if (e2[r2] === t2)
        return true;
    return false;
  }, spaceIndex: function(e2) {
    var t2 = /\s|\n|\t/.exec(e2);
    return t2 ? t2.index : -1;
  }, uniq: function(e2) {
    for (var t2 = {}, r2 = [], n2 = 0; n2 < e2.length; n2++)
      t2[e2[n2]] || (r2.push(e2[n2]), t2[e2[n2]] = true);
    return r2;
  }, from: function(e2) {
    for (var t2 = [], r2 = 0; r2 < e2.length; r2++)
      t2.push(e2[r2]);
    return t2;
  }, keys: function(e2) {
    var t2 = [];
    for (var r2 in e2)
      t2.push(r2);
    return t2;
  } }, k = function(e2) {
    if (null != e2)
      try {
        return String(e2);
      } catch (e3) {
        return;
      }
  };
  function O() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t2 = arguments.length > 1 ? arguments[1] : void 0;
    if ("string" != typeof e2)
      return true;
    if ("currentscript" === (e2 = function(e3) {
      return -1 === (e3 = (e3 = (e3 = (e3 = e3.replace(/&colon;/gi, ":")).replace(/&tab;/gi, "")).replace(/&newline;/gi, "")).replace(/(\t|\n|\r)/g, "")).indexOf("&#") ? e3.trim().toLowerCase() : e3.trim().replace(/&#(?:(x)([0-9a-f]+)|([0-9]+));?/gi, function(e4, t3, r3, n3) {
        return String.fromCharCode(t3 ? parseInt(r3, 16) : parseInt(n3));
      }).replace(/(\t|\n|\r)/g, "").toLowerCase();
    }(e2)))
      return t2 && t2("currentScript"), false;
    if (w.includes(e2, "base64") && !function(e3) {
      if ("" === e3 || "" === e3.trim())
        return true;
      try {
        return !w.includes(e3, "data:text/html;base64");
      } catch (e4) {
        return true;
      }
    }(e2))
      return t2 && t2("data:text/html;base64"), false;
    var r2 = ["expression(", "view-source:"];
    if (w.some(r2, function(t3) {
      return -1 !== e2.indexOf(t3);
    }))
      return w.forEach(r2, function(r3) {
        -1 !== e2.indexOf(r3) && t2 && t2(r3);
      }), false;
    var n2 = e2.replace(/\/\*[\s\S]*?\*\//g, "");
    if (/(^|[;{}])\s*(-\w+-)?behavior\s*:/i.test(n2))
      return t2 && t2("behavior:"), false;
    var o2 = ["data:application", "data:javascript", "data:text/html", "data:texthtml"];
    if (w.some(o2, function(t3) {
      return -1 !== e2.indexOf(t3);
    }))
      return w.forEach(o2, function(r3) {
        -1 !== e2.indexOf(r3) && t2 && t2(r3);
      }), false;
    if (e2.indexOf("javascript:") > 0)
      return t2 && t2("javascript:"), false;
    if (/^javascript:/i.test(e2)) {
      var c2 = e2.slice(11).replace(/\s/g, "").trim();
      return !!w.some(["void", "void(0)", "void0", "false", "undefined", ";"], function(e3) {
        return e3 === c2;
      }) || (t2 && t2("javascript:"), false);
    }
    return true;
  }
  var A = function(e2) {
    var t2 = e2.sourceText, r2 = e2.config, n2 = e2.callback, o2 = k(t2);
    if ("string" != typeof o2)
      return t2;
    var c2 = Number(r2.urlLimit);
    if (g(o2, c2))
      return t2;
    if (O(o2, n2))
      return t2;
    try {
      if (true === r2.isSaveValidUrl) {
        var i2 = new URL(o2);
        return i2.origin + i2.pathname;
      }
    } catch (e3) {
      return console.log(e3), "#";
    }
    return "#";
  };
  var S = function(e2, t2) {
    var r2 = {}, n2 = w.keys(e2), o2 = true, c2 = false, i2 = void 0;
    try {
      for (var a2, l2 = n2[Symbol.iterator](); !(o2 = (a2 = l2.next()).done); o2 = true) {
        var s2 = a2.value;
        Array.isArray(e2[s2]) ? r2[s2] = w.from(e2[s2]) : r2[s2] = S({}, e2[s2]);
      }
    } catch (e3) {
      c2 = true, i2 = e3;
    } finally {
      try {
        o2 || null == l2.return || l2.return();
      } finally {
        if (c2)
          throw i2;
      }
    }
    var u2 = w.keys(t2), f2 = true, p2 = false, m2 = void 0;
    try {
      for (var y2, d2 = u2[Symbol.iterator](); !(f2 = (y2 = d2.next()).done); f2 = true) {
        var g2 = y2.value;
        g2 in e2 ? Array.isArray(e2[g2]) ? r2[g2] = e2[g2].concat(t2[g2]) : r2[g2] = S(e2[g2], t2[g2]) : Array.isArray(t2[g2]) ? r2[g2] = w.from(t2[g2]) : r2[g2] = S({}, t2[g2]);
      }
    } catch (e3) {
      p2 = true, m2 = e3;
    } finally {
      try {
        f2 || null == d2.return || d2.return();
      } finally {
        if (p2)
          throw m2;
      }
    }
    return r2;
  };
  function C(e2) {
    var t2, r2, n2, o2, c2, i2, a2, l2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s2 = "", u2 = 0;
    for (e2 = function(e3) {
      e3 = e3.replace(/rn/g, "n");
      for (var t3 = "", r3 = 0; r3 < e3.length; r3++) {
        var n3 = e3.charCodeAt(r3);
        n3 < 128 ? t3 += String.fromCharCode(n3) : n3 > 127 && n3 < 2048 ? (t3 += String.fromCharCode(n3 >> 6 | 192), t3 += String.fromCharCode(63 & n3 | 128)) : (t3 += String.fromCharCode(n3 >> 12 | 224), t3 += String.fromCharCode(n3 >> 6 & 63 | 128), t3 += String.fromCharCode(63 & n3 | 128));
      }
      return t3;
    }(e2); u2 < e2.length; )
      o2 = (t2 = e2.charCodeAt(u2++)) >> 2, c2 = (3 & t2) << 4 | (r2 = e2.charCodeAt(u2++)) >> 4, i2 = (15 & r2) << 2 | (n2 = e2.charCodeAt(u2++)) >> 6, a2 = 63 & n2, isNaN(r2) ? i2 = a2 = 64 : isNaN(n2) && (a2 = 64), s2 = s2 + l2.charAt(o2) + l2.charAt(c2) + l2.charAt(i2) + l2.charAt(a2);
    return s2;
  }
  function L(e2) {
    for (var t2 = ["scmVersion", "scmName", "scmBranch", "webpackPluginVersion", "filename"], r2 = 0; r2 < t2.length; ++r2)
      e2[t2[r2]] || (e2[t2[r2]] = "-");
  }
  var _ = function(e2) {
    var t2 = e2.scmVersion, r2 = e2.scmName, n2 = e2.webpackPluginVersion, o2 = e2.reportOnly, i2 = "".concat(r2, "___").concat(t2), a2 = { webpackPluginVersion: n2, reportOnly: o2 };
    c.xssV3 && c.xssV3[i2] || (c.xssV3 ? c.xssV3[i2] || (c.xssV3[i2] = a2) : c.xssV3 = m({}, i2, a2));
  }, E = 7, j = 8, N = 9;
  /*!{"@ies/argus-builder-strategy":"1.4.1", "@ies/argus-builder-common": "workspace:1.2.17"}*/
  function R(e2, t2) {
    return null != t2 && "undefined" != typeof Symbol && t2[Symbol.hasInstance] ? !!t2[Symbol.hasInstance](e2) : e2 instanceof t2;
  }
  var P = function(e2) {
    if (R(e2, RegExp))
      return e2;
    var t2 = String(e2 || ""), r2 = t2.match(/^\/(.*)\/([a-z]*)$/i);
    return r2 ? new RegExp(r2[1], r2[2]) : new RegExp(t2);
  }, D = Object.getPrototypeOf, M = Object.getOwnPropertyDescriptor, F = ("undefined" != typeof Reflect && Reflect).apply;
  F || (F = function(e2, t2, r2) {
    return e2.apply(t2, r2);
  });
  var H = I(String.prototype.toLowerCase), V = I(RegExp.prototype.test), U = ["script", "style", "title", "textarea"];
  function I(e2) {
    return function(t2) {
      for (var r2 = arguments.length, n2 = new Array(r2 > 1 ? r2 - 1 : 0), o2 = 1; o2 < r2; o2++)
        n2[o2 - 1] = arguments[o2];
      return F(e2, t2, n2);
    };
  }
  function K(e2, t2) {
    for (; null !== e2; ) {
      var r2 = M(e2, t2);
      if (r2) {
        if (r2.get)
          return I(r2.get);
        if ("function" == typeof r2.value)
          return I(r2.value);
      }
      e2 = D(e2);
    }
    return function() {
      return null;
    };
  }
  var B, W, q = function(e2) {
    return R(e2, HTMLFormElement) && ("string" != typeof e2.nodeName || "string" != typeof e2.textContent || "function" != typeof e2.removeChild || !R(e2.attributes, NamedNodeMap) || "function" != typeof e2.removeAttribute || "function" != typeof e2.setAttribute || "string" != typeof e2.namespaceURI || "function" != typeof e2.insertBefore || "function" != typeof e2.hasChildNodes);
  }, X = (B = function(e2) {
    var t2 = e2.sourceText, r2 = e2.config, o2 = e2.collecter;
    if (!t2 || "string" != typeof t2)
      return t2;
    if ("undefined" == typeof window || void 0 === window.document || window.document.nodeType !== N || void 0 === window.Element)
      return t2;
    var c2 = n, i2 = "string" == typeof r2.blackConfig ? JSON.parse(r2.blackConfig || "{}") : r2.blackConfig || {};
    i2.blackAttrRegExps && (i2.blackAttrRegExps = i2.blackAttrRegExps.map(P)), w.includes(r2.configMode, "override") && (c2 = i2), w.includes(r2.configMode, "merge") && (c2 = S(c2, i2)), c2 = function() {
      var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return { blackList: e3.blackList || {}, blackTags: e3.blackTags || [], blackAttrs: e3.blackAttrs || [], blackAttrRegExps: e3.blackAttrRegExps || [], filterList: e3.filterList || {}, filterAttrs: e3.filterAttrs || [] };
    }(c2);
    var a2 = !(false === r2.escapeAttrValue || "false" === r2.escapeAttrValue), l2 = !(false === r2.removeComment || "false" === r2.removeComment), s2 = window.document;
    if ("function" == typeof HTMLTemplateElement) {
      var u2 = s2.createElement("template");
      u2.content && u2.content.ownerDocument && (s2 = u2.content.ownerDocument);
    }
    var f2 = window.DocumentFragment, p2 = window.Node, m2 = window.Element, y2 = window.NodeFilter, d2 = window.DOMParser, g2 = m2.prototype, v2 = K(g2, "remove"), b2 = K(g2, "parentNode"), h2 = function(e3) {
      return s2.createNodeIterator.call(e3.ownerDocument || e3, e3, y2.SHOW_ELEMENT | y2.SHOW_COMMENT | y2.SHOW_TEXT | y2.SHOW_PROCESSING_INSTRUCTION | y2.SHOW_CDATA_SECTION, null);
    }, T2 = function(e3) {
      try {
        b2(e3).removeChild(e3);
      } catch (t3) {
        v2(e3);
      }
    }, x2 = function(e3, t3) {
      o2.collect.forceRemove = o2.collect.forceRemove || [], o2.collect.forceRemove.push(t3 ? e3 + ":" + t3 : e3);
    }, k2 = function(e3) {
      var t3, r3 = H(e3.nodeName);
      return q(e3) ? (T2(e3), x2("clobbered", r3), true) : !U.includes(r3) && e3.hasChildNodes() && (t3 = e3.firstElementChild, "function" != typeof p2 || !R(t3, p2)) && V(/<[/\w!]/g, e3.innerHTML) && V(/<[/\w!]/g, e3.textContent) ? (T2(e3), x2("mxss", r3), true) : e3.nodeType === E ? (T2(e3), x2("processing-instruction", r3), true) : l2 && e3.nodeType === j && V(/<[/\w]/g, e3.data) ? (T2(e3), x2("comment", r3), true) : !!c2.blackTags.includes(r3) && (T2(e3), o2.collect.blackTags.push(r3), true);
    }, O2 = function(e3, t3) {
      t3.removeAttribute(e3);
    }, C2 = function(e3, t3, r3) {
      try {
        e3.setAttribute(t3, r3);
      } catch (r4) {
        try {
          O2(t3, e3);
        } catch (e4) {
        }
        o2.collect.invalidAttrs = o2.collect.invalidAttrs || [], o2.collect.invalidAttrs.push(t3);
      }
    }, L2 = function(e3) {
      var t3 = function(t4) {
        var l4 = n2[t4], s3 = l4.name, u3 = l4.value, f3 = false;
        if (c2.blackList[i3] && w.includes(c2.blackList[i3], s3))
          return O2(s3, e3), o2.collect.blackList[i3] = o2.collect.blackList[i3] || [], o2.collect.blackList[i3].push(s3), "continue";
        if (c2.blackAttrs.length && w.includes(c2.blackAttrs, s3))
          return O2(s3, e3), o2.collect.blackAttrs.push(s3), "continue";
        if (c2.blackAttrRegExps.length && c2.blackAttrRegExps.some(function(e4) {
          return e4.test(s3);
        }))
          return O2(s3, e3), o2.collect.blackAttrRegExps.push(s3), "continue";
        if (c2.filterList && c2.filterList[i3] && w.includes(c2.filterList[i3], s3)) {
          var p3 = A({ sourceText: u3, config: r2, callback: function(e4) {
            return o2.collect.filterProtocol.push(e4);
          } });
          p3 !== u3 && (C2(e3, s3, p3), f3 = true, o2.collect.filterList[i3] = o2.collect.filterList[i3] || [], o2.collect.filterList[i3].push(s3));
        }
        if (c2.filterAttrs && w.includes(c2.filterAttrs, s3)) {
          var m3 = A({ sourceText: u3, config: r2, callback: function(e4) {
            return o2.collect.filterProtocol.push(e4);
          } });
          m3 !== u3 && (C2(e3, s3, m3), f3 = true, o2.collect.filterAttrs.push(s3));
        }
        if (!f3 && a2) {
          var y3 = function(e4) {
            var t5 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r3 = e4.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            return t5 ? r3.replace(/"/g, "&quot;") : r3;
          }(u3);
          y3 !== u3 && (C2(e3, s3, y3), o2.collect.escapeAttrs = o2.collect.escapeAttrs || [], o2.collect.escapeAttrs.push(s3));
        }
      }, n2 = e3.attributes, i3 = H(e3.nodeName);
      if (n2 && !q(e3))
        for (var l3 = n2.length - 1; l3 >= 0; --l3)
          t3(l3);
    }, _2 = function(e3) {
      for (var t3 = null, r3 = h2(e3); t3 = r3.nextNode(); )
        k2(t3), L2(t3), R(t3.content, f2) && _2(t3.content);
    }, D2 = null, M2 = true === r2.wholeDocument || "true" === r2.wholeDocument, F2 = /<meta\b[^>]*>/gi, I2 = /([\s/]name\s*=\s*['"]?)referrer(['"]?(?=[\s/>]))/gi, B2 = /([\s/]name\s*=\s*['"]?)argus-custom-referrer(['"]?(?=[\s/>]))/gi, W2 = t2.replace(F2, function(e3) {
      return e3.replace(I2, "$1argus-custom-referrer$2");
    }), X2 = new d2().parseFromString(W2, "text/html"), $2 = X2.documentElement || s2.getElementsByTagName.call(X2, "html")[0] || null;
    if (!$2)
      return "";
    for (var J = h2($2); D2 = J.nextNode(); )
      k2(D2), L2(D2), R(D2.content, f2) && _2(D2.content);
    var G = function(e3, t3) {
      if (t3)
        return e3.documentElement || s2.getElementsByTagName.call(e3, "html")[0] || null;
      var r3 = s2.getElementsByTagName.call(e3, "body")[0];
      if (r3)
        return r3;
      var n2 = s2.getElementsByTagName.call(e3, "frameset")[0];
      return n2 || null;
    }(X2, M2);
    if (!G)
      return "";
    var z, Y = M2 ? ((z = X2).doctype && z.doctype.name ? "<!DOCTYPE " + z.doctype.name + ">\n" : "") + G.outerHTML : G.innerHTML;
    return Y.replace(F2, function(e3) {
      return e3.replace(B2, "$1referrer$2");
    });
  }, W = "dom", function(e2, t2, r2) {
    try {
      L(r2);
      var n2 = x(r2);
      try {
        _(d(y({}, r2), { disposition: n2 }));
      } catch (e3) {
      }
      var o2 = v(e2), c2 = e2;
      if ("function" == typeof r2.beforeFilterHTML) {
        var i2 = r2.beforeFilterHTML(e2, r2), a2 = i2.filterText;
        if (i2.isUse && v(a2) !== o2)
          return f.report({ type: r2.logType, disposition: n2, sourceText: C(c2.replace(/'/g, '"')), filterText: C(a2.replace(/'/g, '"')), collectKey: "-", collectData: "-", collectMode: "black", scene: "before_".concat(W), filename: r2.filename }, r2), "enforce" === n2 ? a2 : c2;
        e2 = a2;
      }
      if (!e2 || "string" != typeof e2 || function(e3) {
        var t3 = Number(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1);
        return -1 !== t3 && "NaN" !== t3.toString() && e3.length >= t3;
      }(e2, Number(r2.htmlLimit)))
        return e2;
      p.initCollect();
      var l2 = B({ sourceText: e2, config: r2, collecter: p }), s2 = v(l2);
      if ("function" == typeof r2.afterFilterHTML) {
        var u2 = r2.afterFilterHTML(l2, r2).filterText;
        if ((s2 = v(u2)) !== o2)
          return f.report({ type: r2.logType, disposition: n2, sourceText: C(c2.replace(/'/g, '"')), filterText: C(u2.replace(/'/g, '"')), collectKey: "-", collectData: "-", collectMode: "black", scene: "".concat(W, "_after"), filename: r2.filename }, r2), "enforce" === n2 ? u2 : c2;
      }
      var m2 = p.removeCollect();
      if (!m2 || !m2.collectKey) {
        if (-1 === c2.toLowerCase().indexOf("frameset"))
          return c2;
        m2 = { collectKey: "default", collectMode: "black" };
      }
      return o2 !== s2 && (r2.isRuntimeLog && "enforce" === n2 && console.warn("当前页面部分数据被「Argus XSS」过滤"), f.report(d(y({ type: r2.logType, disposition: n2 }, m2), { sourceText: C(c2.replace(/'/g, '"')), filterText: C(l2.replace(/'/g, '"')), scene: W, filename: r2.filename }), r2)), "enforce" === n2 ? l2 : c2;
    } catch (t3) {
      var g2 = "report";
      try {
        g2 = x(r2 || {});
      } catch (e3) {
      }
      return h({ e: t3, sourceText: e2, config: r2, type: W, disposition: g2, sceneType: "html" }), e2;
    }
  }), $ = function(e2, t2) {
    return function(r2, n2, o2) {
      try {
        L(o2);
        var c2 = r2, i2 = x(o2);
        try {
          _(d(y({}, o2), { disposition: i2 }));
        } catch (e3) {
        }
        if ("function" == typeof o2.beforeFilterUrl) {
          var a2 = o2.beforeFilterUrl(r2, o2), l2 = a2.filterText;
          if (a2.isUse && l2 !== c2)
            return f.report({ type: o2.logType, disposition: i2, sourceText: C((k(c2) || "").replace(/'/g, '"')), filterText: C((k(l2) || "").replace(/'/g, '"')), collectKey: "-", collectData: "-", collectMode: "black", scene: "before_".concat(t2), filename: o2.filename }, o2), "enforce" === i2 ? l2 : c2;
          r2 = l2;
        }
        var s2 = k(r2);
        if (!s2 || g(s2, Number(o2.htmlLimit)))
          return r2;
        var u2 = [], p2 = e2({ sourceText: r2, config: o2, callback: function(e3) {
          u2.push(e3);
        } });
        if (u2 = w.from(w.uniq(u2)), "function" == typeof o2.afterFilterUrl) {
          var m2 = o2.afterFilterUrl(p2, o2).filterText;
          if (p2 !== c2)
            return f.report({ type: o2.logType, disposition: i2, sourceText: C((k(c2) || "").replace(/'/g, '"')), filterText: C((k(m2) || "").replace(/'/g, '"')), collectKey: "-", collectData: "-", collectMode: "black", scene: "".concat(t2, "_after"), filename: o2.filename }, o2), "enforce" === i2 ? m2 : c2;
        }
        return c2 !== p2 && (o2.isRuntimeLog && "enforce" === i2 && console.warn("当前页面部分数据被「Argus XSS」过滤"), f.report({ type: o2.logType, disposition: i2, collectKey: u2.join("___"), collectData: "-", collectMode: "black", sourceText: C((k(c2) || "").replace(/'/g, '"')), filterText: C((k(p2) || "").replace(/'/g, '"')), scene: t2, filename: o2.filename }, o2)), "enforce" === i2 ? p2 : c2;
      } catch (e3) {
        var v2 = "report";
        try {
          v2 = x(o2 || {});
        } catch (e4) {
        }
        return h({ e: e3, sourceText: r2, config: o2, type: t2, disposition: v2, sceneType: "url" }), r2;
      }
    };
  }(A, "dom");
  window.registToGlobal("trustTypesFilter", function(e2) {
    var t2 = e2.reportOnly, n2 = e2.bid, o2 = e2.rules, c2 = e2.reportHost, i2 = e2.blackConfig, a2 = void 0 === i2 ? "{}" : i2, l2 = e2.srcDocBlackConfig, s2 = void 0 === l2 ? "{}" : l2, u2 = e2.configMode, f2 = void 0 === u2 ? "merge" : u2, p2 = e2.urlLimit, m2 = void 0 === p2 ? -1 : p2, y2 = e2.htmlLimit, d2 = void 0 === y2 ? -1 : y2, g2 = e2.version, v2 = e2.escapeAttrValue, b2 = void 0 === v2 || v2, h2 = e2.removeComment, T2 = void 0 === h2 || h2, x2 = window.use("coreLoader"), w2 = { reportOnly: t2, logType: "-", reportUrl: "https://".concat(x2.customReportHost || c2, "/monitor_browser/collect/batch/security/?bid=").concat(n2), blackConfig: a2, configMode: f2, filename: "-", isCloseSSRReport: true, escapeAttrValue: b2, removeComment: T2, urlLimit: Number(m2), isSaveValidUrl: false, htmlLimit: Number(d2), isRuntimeLog: false, isDOMParser: false, escapeRule: "escape-report", htmlparserOptions: "{}", scmVersion: "-", scmName: "-", scmBranch: "-", webpackPluginVersion: "-" }, k2 = { createHTML: function(e3, t3, n3) {
      if ("DOMParser parseFromString" === n3)
        return e3;
      var c3 = false === w2.reportOnly && o2.includes(n3), i3 = r(r({}, w2), {}, { reportOnly: !c3, logType: "".concat(n3, "__TrustTypes_").concat(g2), filename: t3, wholeDocument: ["Document writeln", "Document write", "HTMLIFrameElement srcdoc", "Element setAttribute"].includes(n3) });
      return "{}" !== s2 && ["HTMLIFrameElement srcdoc", "Element setAttribute"].includes(n3) && (i3.blackConfig = s2, i3.configMode = "override"), X(e3, null, i3);
    }, createScript: function(e3, t3, n3) {
      if ("Location href" === n3) {
        var c3 = false === w2.reportOnly && o2.includes(n3);
        if ($("javascript:".concat(e3), null, r(r({}, w2), {}, { reportOnly: !c3, logType: "".concat(n3, "__TrustTypes_").concat(g2), filename: t3 })), c3)
          return "";
      }
      return e3;
    }, createScriptURL: function(e3, t3, r2) {
      return e3;
    } }, O2 = window;
    if (O2.trustedTypes && O2.trustedTypes.createPolicy && "function" == typeof O2.trustedTypes.createPolicy)
      try {
        O2.trustedTypes.createPolicy("default", k2);
      } catch (e3) {
        console.error("❌ Trusted Types 创建失败:", e3);
      }
  });
});
; return typeof main !== 'undefined' && main(a,b,c,d,e);});;window.registToModule('strategy',{
  "event": {
    "MESSAGE": [
      "postMessageOriginCheck"
    ],
    "POST_MESSAGE": [
      "postMessageOriginCheck"
    ],
    "SDK_INIT": [
      "trustTypes"
    ]
  },
  "strategy": {
    "monitor": {
      "body": {
        "singleKey": "monitor",
        "version": "1",
        "createdAt": "2025-08-21T03:11:00.000Z",
        "latest": 0,
        "strategyKey": "monitor",
        "key": "monitor",
        "disabled": false,
        "condition": function monitorCondition(event) {
  return true;
},
        "expression": function monitorExpression(event) {
  "use strict";
return main(event);
}
      },
      "config": {
        "sampleRatio": 100
      }
    },
    "postMessageOriginCheck": {
      "body": {
        "singleKey": "postMessageOriginCheck",
        "version": "19",
        "createdAt": "2026-09-15T02:34:04.000Z",
        "latest": 0,
        "strategyKey": "postMessageOriginCheck",
        "key": "postMessageOriginCheck",
        "disabled": false,
        "condition": function postMessageOriginCheckCondition(event) {
  return true;
},
        "expression": function postMessageOriginCheckExpression(event) {
  "use strict";
  function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return !!right[Symbol.hasInstance](left);
      } else {
          return left instanceof right;
      }
  }
  function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
  }
  function main(event) {
      var config = window.use("strategy").strategy.postMessageOriginCheck.config;
      var allowedHost = config.allowedHost, block = config.block;
      var ActionType = window.use("ActionType");
      var payload = event.payload;
      var context = payload.context, args = payload.args;
      var option = event.name === "POST_MESSAGE" ? payload.args[1] : payload.args[0].origin;
      var e = payload.args[0];
      var targetOrigin = null;
      if (option && typeof option === "object") {
          targetOrigin = option.targetOrigin;
      } else if (option) {
          targetOrigin = option;
      }
      var match = function() {
          try {
              if (!targetOrigin) {
                  return false;
              }
              var url = new URL(targetOrigin, window.location.href);
              if (url.origin === new URL(window.location.href).origin) {
                  return true;
              }
              var host = url.host;
              var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
              try {
                  for(var _iterator = allowedHost[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                      var h = _step.value;
                      var groups = h.split(".");
                      var i = groups.length - 1;
                      var hostGroups = host.split(".");
                      var j = hostGroups.length - 1;
                      if (i != j) {
                          continue;
                      }
                      while(i >= 0){
                          if (groups[j] !== "*" && groups[j] !== "" && hostGroups[j] != groups[i]) {
                              break;
                          }
                          i--;
                          j--;
                      }
                      if (i === -1) {
                          return true;
                      }
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally{
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return != null) {
                          _iterator.return();
                      }
                  } finally{
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }
              return false;
          } catch (e2) {
              return false;
          }
      };
      var matchResult = match();
      if (matchResult) {
          return {
              type: ActionType.PASS,
              payload: {}
          };
      }
      function safeDataPreview(data) {
          var maxLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 200;
          try {
              if (typeof data === "string") {
                  return data.slice(0, maxLength);
              }
              if (data === null) {
                  return "null";
              }
              if (data === void 0) {
                  return "undefined";
              }
              if (typeof ArrayBuffer !== "undefined" && _instanceof(data, ArrayBuffer)) {
                  return "[ArrayBuffer byteLength=".concat(data.byteLength, "]");
              }
              if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView(data)) {
                  var _data_constructor;
                  return "[".concat(((_data_constructor = data.constructor) === null || _data_constructor === void 0 ? void 0 : _data_constructor.name) || "TypedArray", " byteLength=").concat(data.byteLength, "]");
              }
              if (typeof Blob !== "undefined" && _instanceof(data, Blob)) {
                  return "[Blob type=".concat(data.type || "unknown", " size=").concat(data.size, "]");
              }
              if (typeof data === "object") {
                  var seen = /* @__PURE__ */ new WeakSet();
                  var serialized = JSON.stringify(data, function(_key, value) {
                      if ((typeof value === "undefined" ? "undefined" : _type_of(value)) === "bigint") {
                          return "".concat(value, "n");
                      }
                      if (typeof value === "object" && value !== null) {
                          if (seen.has(value)) {
                              return "[Circular]";
                          }
                          seen.add(value);
                      }
                      return value;
                  });
                  if (typeof serialized === "string") {
                      return serialized.slice(0, maxLength);
                  }
              }
              return String(data).slice(0, maxLength);
          } catch (e) {
              try {
                  return String(data).slice(0, maxLength);
              } catch (e) {
                  return "[Unserializable message data]";
              }
          }
      }
      return {
          type: block ? ActionType.BLOCK : ActionType.REPORT_ONLY,
          key: event.name === "POST_MESSAGE" ? "postMessage: ".concat(window.location.href, " -> ").concat((targetOrigin || "").toString()) : "onMessage: ".concat((targetOrigin || "").toString(), " -> ").concat(window.location.href, ";data:").concat(safeDataPreview(e === null || e === void 0 ? void 0 : e.data), ";isWindowMessage:").concat((e === null || e === void 0 ? void 0 : e.currentTarget) === window),
          payload: {}
      };
  }
return main(event);
}
      },
      "config": {
        "block": false,
        "allowedHost": [
          "*.tiktok.com",
          "accounts.google.com",
          "toolytics.pa.clients6.google.com",
          "translate.google.com",
          "www.google.com",
          "m.youtube.com",
          "www.youtube.com",
          "newassets.hcaptcha.com",
          "www.facebook.com",
          "web.facebook.com",
          "m.facebook.com",
          "appleid.apple.com",
          "apps.apple.com",
          "authorize.music.apple.com",
          "www.paypal.com",
          "www.linkedin.com",
          "zapier.com",
          "localstorage.goguardian.com",
          "tikfinity.zerody.one",
          "*.capcut.com",
          "*.sgsnssdk.com",
          "*.pipopay.com",
          "*.anssdk.com",
          "*.aweme.com",
          "*.byteoversea.net",
          "*.bytedance.com",
          "*.byteintl.net",
          "*.feishu.com",
          "*.gogokid.com",
          "*.isnssdk.com",
          "*.larksuite.com"
        ]
      }
    },
    "report": {
      "body": {
        "singleKey": "report",
        "version": "1.0.2",
        "createdAt": "2025-05-29T12:26:32.000Z",
        "latest": 0,
        "strategyKey": "report",
        "key": "report",
        "disabled": false,
        "condition": function reportCondition(event) {
  return (true);
},
        "expression": function reportExpression(event) {
  "use strict";
  function main() {
    return true;
  }
return main(event);
}
      },
      "config": {
        "bid": "tiktok_webapp",
        "sampleRatio": 10
      }
    },
    "trustTypes": {
      "body": {
        "singleKey": "trustTypes",
        "version": "10",
        "createdAt": "2026-08-27T11:20:57.000Z",
        "latest": 0,
        "strategyKey": "trustTypes",
        "key": "trustTypes",
        "disabled": false,
        "condition": function trustTypesCondition(event) {
  return true;
},
        "expression": function trustTypesExpression(event) {
  "use strict";
  function main(event) {
    const { config } = window.use("strategy").strategy.trustTypes;
    const { version } = window.use("strategy").strategy.trustTypes.body;
    const ActionType = window.SDKRuntime.require("ActionType");
    return {
      type: config.block ? ActionType.BLOCK : ActionType.REPORT_ONLY,
      payload: {
        bid: config.bid,
        rules: config.rules,
        reportHost: config.reportHost,
        blackConfig: config.blackConfig,
        configMode: config.configMode,
        urlLimit: config.urlLimit,
        htmlLimit: config.htmlLimit,
        srcDocBlackConfig: config.srcDocBlackConfig,
        escapeAttrValue: config.escapeAttrValue,
        removeComment: config.removeComment,
        version
      }
    };
  }
return main(event);
}
      },
      "config": {
        "block": true,
        "rules": [
          "Location href"
        ],
        "bid": "tiktok_webapp",
        "reportHost": "",
        "urlLimit": -1,
        "htmlLimit": -1,
        "escapeAttrValue": true,
        "removeComment": true,
        "blackConfig": "{}",
        "srcDocBlackConfig": "{}",
        "configMode": "merge"
      }
    }
  },
  "execution": {
    "MESSAGE": "exexcuteMessage",
    "POST_MESSAGE": "executePostMessage",
    "SDK_INIT": "executeSDKInitSync"
  }
});window.registToModule('globalConfig',{"strategy":{"hitGray":{"body":{"singleKey":"hitGray","version":"1.0.4","createdAt":"2025-07-30T06:47:00.000Z","latest":0,"strategyKey":"hitGray","key":"hitGray","disabled":false,"condition":"true","expression":"\"use strict\";\nfunction main(n) {\n  const { config } = window.use(\"globalConfig\").strategy.hitGray;\n  const ActionType = window.use(\"ActionType\");\n  const { selectors, sampleRatio } = config;\n  const result = [];\n  const matchResult = (selector) => {\n    const { path, value, op } = selector;\n    let cur = window;\n    const paths = path.split(\".\");\n    let count = 0;\n    for (const key of paths) {\n      if (cur) {\n        count++;\n        cur = cur[key];\n      }\n    }\n    if (window !== cur && count === paths.length) {\n      if (op === \"===\") {\n        return cur === value;\n      } else if (op === \"!==\") {\n        return cur !== value;\n      }\n    }\n    return false;\n  };\n  for (const selector of selectors) {\n    if (Array.isArray(selector)) {\n      result.push(selector.every(matchResult));\n    } else {\n      result.push(matchResult(selector));\n    }\n  }\n  if (Math.floor(Math.random() * 1e4) < sampleRatio) {\n    result.push(true);\n  }\n  return { type: result.length > 0 && result.some((v) => v) ? ActionType.REWRITE : ActionType.PASS };\n}\n;return main(event);"},"config":{"selectors":[[{"path":"gfdatav1.env","value":"prod","op":"==="},{"path":"gfdatav1.envName","value":"canary","op":"!=="},{"path":"gfdatav1.envName","value":"prod","op":"!=="}],{"path":"gfdatav1.env","value":"boe","op":"==="},{"path":"gfdatav1.extra.canaryType","value":1,"op":"==="}],"sampleRatio":0,"bid":"tiktok_webapp","currentVersion":"6aaa06349342bd01fb4c9d7b","grayVersion":"6aaa06349342bd01fb4c9d7b"}},"monitor":{"config":{"sampleRatio":100}}}})