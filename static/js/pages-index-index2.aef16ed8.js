(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index2"],{"3b8d":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return a});var r=n("795b"),i=n.n(r);function o(t,e,n,r,o,a,c){try{var s=t[a](c),u=s.value}catch(l){return void n(l)}s.done?e(u):i.a.resolve(u).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new i.a(function(r,i){var a=t.apply(e,n);function c(t){o(a,r,i,c,s,"next",t)}function s(t){o(a,r,i,c,s,"throw",t)}c(void 0)})}}},"4bdc":function(t,e,n){"use strict";var r=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("4917"),n("a481"),n("96cf");var i=r(n("3b8d")),o=n("b98f"),a={data:function(){return{bannerId:"",detailsData1:"",filesData:[],show_weixin_mask:!1,picBase:"https://flycoinex.s3.ap-northeast-2.amazonaws.com"}},onLoad:function(){this.is_weixin()?this.show_weixin_mask=!0:this.show_weixin_mask=!1,this.bannerId=uni.getStorageSync("bannerId"),this.bannerDetails_1()},methods:{bannerDetails_1:function(){var t=(0,i.default)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading(),e="/static/banner/ad/articleDesc/",t.next=4,(0,o.getStaticArticle)(e+this.bannerId);case 4:n=t.sent,uni.hideLoading(),console.log(n),this.detailsData=n.data,this.detailsData1=n.data.content.replace(/width:/g,"").replace(/<img/g,'<img style="width:100%;height:100% !important;"').replace(/<p/g,'<p style="line-height:1.6em;width:96% ;margin:0 auto;font-size:28upx;"').replace(/<span/g,'<span style="line-height:1.6em;width:96% ;margin:0 auto;font-size:28upx;"'),this.filesData=n.data.files;case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),checkApp:function(){uni.showLoading({mask:!0}),window.location.href="yxb://banner?scheme=123&bannerId="+this.bannerId,setTimeout(function(){uni.hideLoading(),uni.showModal({title:"提示",content:"您还没有安装易讯宝APP，是否前往下载?",success:function(t){t.confirm?window.location.href="https://www.expay.vip/webapp/app.html":t.cancel&&console.log("用户点击取消")}}),setTimeout(function(){window.location.reload()},5e3)},3e3)},is_weixin:function(){var t=navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)}}};e.default=a},"768b":function(t,e,n){"use strict";n.r(e);var r=n("4bdc"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=i.a},8052:function(t,e,n){var r=n("ec88");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("460563d5",r,!0,{sourceMap:!1,shadowMode:!1})},"933a":function(t,e,n){"use strict";n.r(e);var r=n("c80b"),i=n("768b");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("f8c6");var a=n("2877"),c=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,"30908a3e",null);e["default"]=c.exports},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=b;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={},g={};g[a]=function(){return this};var w=Object.getPrototypeOf,y=w&&w(w(I([])));y&&y!==r&&i.call(y,a)&&(g=y);var m=L.prototype=_.prototype=Object.create(g);k.prototype=m.constructor=L,L.constructor=k,L[s]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(m),t},l.awrap=function(t){return{__await:t}},E(j.prototype),j.prototype[c]=function(){return this},l.AsyncIterator=j,l.async=function(t,e,n,r){var i=new j(b(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(m),m[s]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=I,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return c.type="throw",c.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var i=e&&e.prototype instanceof _?e:_,o=Object.create(i.prototype),a=new D(r||[]);return o._invoke=O(t,n,a),o}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function _(){}function k(){}function L(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){function e(n,r,o,a){var c=x(t[n],t,r);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(u).then(function(t){s.value=t,o(s)},function(t){return e("throw",t,o,a)})}a(c.arg)}var n;function r(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=r}function O(t,e,n){var r=f;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return C()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=P(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=x(t,e,n);if("normal"===s.type){if(r=n.done?d:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}function P(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,P(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=x(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function I(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},b98f:function(t,e,n){"use strict";var r=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.getStaticArticle=c;var i=r(n("0a0d")),o=r(n("795b"));n("a481");var a=r(n("e143"));function c(t){var e=a.default.prototype.$base.replace("/gateway","");return new o.default(function(n,r){uni.request({url:e+t+".json?t="+(0,i.default)(),success:function(t){console.log(t),200===t.statusCode&&n(t)},complete:function(t){},fail:function(t){}})})}},c80b:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"padding-auto"},[n("v-uni-rich-text",{attrs:{nodes:t.detailsData1}})],1),n("v-uni-view",{staticClass:"banner-img"},t._l(t.filesData,function(e,r){return n("v-uni-image",{key:r,staticClass:"'img-item'",staticStyle:{"min-height":"400upx"},attrs:{mode:"widthFix",src:t.picBase+e.filePath}})}),1),n("v-uni-view",{staticClass:"btn",on:{click:function(e){e=t.$handleEvent(e),t.checkApp(e)}}},[t._v("点击下载易讯宝,查看更多详情")]),t.show_weixin_mask?n("v-uni-view",{staticClass:"mask"},[n("v-uni-image",{attrs:{src:"../../static/arrow_r.png",alt:""}}),n("v-uni-text",[t._v('请点击右上角"..."按钮,选择"在浏览器中打开"')])],1):t._e()],1)},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},ec88:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page[data-v-30908a3e]{background:#fff;padding:0 %?30?%;-ms-touch-action:pan-y;touch-action:pan-y;min-height:%?1200?%}.padding-auto[data-v-30908a3e]{font-size:%?28?%;color:#999;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:96%;margin:12px auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;width:96%;padding:0 2%}.banner-img[data-v-30908a3e]{text-align:center;padding-top:%?40?%}.img-item[data-v-30908a3e]{width:100%}.btn[data-v-30908a3e]{width:%?520?%;height:%?68?%;line-height:%?68?%;text-align:center;margin:%?36?% auto;background-color:#5299f7;color:#fff;border:%?2?% solid #5299f7;border-radius:%?8?%;font-size:%?32?%}.mask[data-v-30908a3e]{position:fixed;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:9999}.mask uni-image[data-v-30908a3e]{width:50%;height:26%;display:block;position:absolute;right:6px;top:6px}.mask uni-text[data-v-30908a3e]{color:#fff;position:absolute;left:50%;top:30%;font-size:18px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:100%;text-align:center}',""])},f8c6:function(t,e,n){"use strict";var r=n("8052"),i=n.n(r);i.a}}]);