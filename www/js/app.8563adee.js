(function(e){function t(t){for(var n,c,i=t[0],u=t[1],l=t[2],s=0,f=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,c=1;c<o.length;c++){var u=o[c];0!==r[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={app:0},a=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b0e6c382"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=n);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var l=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(s);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,o[1](l)}r[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var d=l;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"479d":function(e,t,o){},4942:function(e,t){var o=100;function n(){var e=document.documentElement.clientWidth/1125;document.documentElement.style.fontSize=o*Math.min(e,2)+"px",console.log("  document.documentElement.style.fontSize ",document.documentElement.style.fontSize)}n(),window.onresize=function(){n()}},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[e._v("Single")]),e._v(" | "),o("router-link",{attrs:{to:"/about"}},[e._v("Multiple")])],1),o("router-view")],1)},a=[],c=(o("5c0b"),o("2877")),i={},u=Object(c["a"])(i,r,a,!1,null,null,null),l=u.exports,s=(o("d3b7"),o("3ca3"),o("ddb0"),o("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{staticClass:"img-title",attrs:{alt:"solo",src:o("5ac2")}}),n("p",{staticClass:"p-title"},[e._v("hi!")]),n("HelloWorld",{attrs:{msg:"欢迎来到单人solo"}})],1)},f=[],p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hello"},[o("p",[e._v(e._s(e.msg))])])},m=[],v={name:"HelloWorld",props:{msg:String},mounted:function(){console.log(this.$cordova)}},b=v,h=(o("5b3c"),Object(c["a"])(b,p,m,!1,null,"d951ba06",null)),g=h.exports,y={name:"Home",components:{HelloWorld:g},mounted:function(){console.log(window.cordova,window),console.log(this.$cordova)}},w=y,_=(o("a6cd"),Object(c["a"])(w,d,f,!1,null,"294e044f",null)),j=_.exports;n["a"].use(s["a"]);var O=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],x=new s["a"]({mode:"history",base:"",routes:O}),E=x,S=o("2f62");n["a"].use(S["a"]);var P=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}}),C=o("41c6"),k=o.n(C);o("aede"),o("4942");if(n["a"].use(k.a),"file:"===window.location.protocol||"3000"===window.location.port){var $=document.createElement("script");$.setAttribute("type","text/javascript"),$.setAttribute("src","cordova.js"),document.body.appendChild($)}n["a"].cordova.on("deviceready",(function(){console.log("Cordova : device is ready !"),console.log("Vue.cordova :",n["a"].cordova)})),n["a"].prototype.$cordova=n["a"].cordova,console.log("Vue.cordova :",n["a"].cordova),n["a"].config.productionTip=!1,new n["a"]({router:E,store:P,render:function(e){return e(l)}}).$mount("#app")},"5ac2":function(e,t,o){e.exports=o.p+"img/solo.40cba06d.jpg"},"5b3c":function(e,t,o){"use strict";o("479d")},"5c0b":function(e,t,o){"use strict";o("9c0c")},"9c0c":function(e,t,o){},a6cd:function(e,t,o){"use strict";o("dabe")},aede:function(e,t,o){},dabe:function(e,t,o){}});