/*! For license information please see 78.292bb08a1bce5a0341aa.js.LICENSE.txt */
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[78],{2453:(t,e,n)=>{n.d(e,{b:()=>g});var r=n(7629),o=n(453),i=n(5742);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===a(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,l=[],u=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(l.push(r.value),l.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(t,e)||d(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var g=o.Z.withBindRender((function(t){var e=t.source,n=(e.id,e.duration,e.use),a=e.codeInclued,l=e.codeMain,g=e.codeExclude,y=r.useRef(),p=r.useRef(),h=r.useRef(),v=s(r.useState(!1),2),m=v[0],b=v[1],w=s(r.useState([]),2),S=w[0],Z=w[1],x=function(){(0,i.Rg)(t.source),b(!0),clearTimeout(y.current),y.current=setTimeout((function(){return b(!1)}),500);var e=["id","use","volume","rate","when","offset","duration"].reduce((function(e,n){return u(u({},e),{},c({},n,t.source[n]))}),{});o.Z.setState((function(t){return t.canvasAnimation=[e],t.consoleRecord=[e],t}))},E=function(t){if(!1!==n&&null===o.Z.state.dialogGlobalSetting&&null===o.Z.state.dialogExample&&null===o.Z.state.dialogLocalStorage&&null===o.Z.state.dialogConsoleTimeAlignment&&null===o.Z.state.dialogPlaygroundAudio&&null===o.Z.state.dialogConsoleAudio&&null===o.Z.state.dialogConsoleGroup&&!S.includes(t.code)){var e=[].concat(function(t){if(Array.isArray(t))return f(t)}(r=S)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||d(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[t.code]);Z(e),l.includes(e[e.length-1])&&a.every((function(t){return e.includes(t)}))&&g.every((function(t){return!e.includes(t)}))&&x()}var r},O=function(t){if(!1!==n&&null===o.Z.state.dialogGlobalSetting&&null===o.Z.state.dialogExample&&null===o.Z.state.dialogLocalStorage&&null===o.Z.state.dialogConsoleTimeAlignment&&null===o.Z.state.dialogPlaygroundAudio&&null===o.Z.state.dialogConsoleAudio&&null===o.Z.state.dialogConsoleGroup){var e=S.filter((function(e){return!e.includes(t.code)}));Z(e)}},A=function(e){null===o.Z.state.dialogGlobalSetting&&null===o.Z.state.dialogExample&&null===o.Z.state.dialogLocalStorage&&null===o.Z.state.dialogConsoleTimeAlignment&&null===o.Z.state.dialogPlaygroundAudio&&null===o.Z.state.dialogConsoleAudio&&null===o.Z.state.dialogConsoleGroup&&(!0===p.current&&null===o.Z.state.audioDragTarget&&o.Z.assignState({audioDragTarget:t.source}),clearInterval(h.current))},L=function(t){null===o.Z.state.dialogGlobalSetting&&null===o.Z.state.dialogExample&&null===o.Z.state.dialogLocalStorage&&null===o.Z.state.dialogConsoleTimeAlignment&&null===o.Z.state.dialogPlaygroundAudio&&null===o.Z.state.dialogConsoleAudio&&null===o.Z.state.dialogConsoleGroup&&(!1!==o.Z.state.consoleExpand&&null!==o.Z.state.consoleCurrent||o.Z.assignState({audioDragTarget:null}),p.current=void 0,clearInterval(h.current))},j=function(e){null===o.Z.state.dialogGlobalSetting&&null===o.Z.state.dialogExample&&null===o.Z.state.dialogLocalStorage&&null===o.Z.state.dialogConsoleTimeAlignment&&null===o.Z.state.dialogPlaygroundAudio&&null===o.Z.state.dialogConsoleAudio&&null===o.Z.state.dialogConsoleGroup&&(!0===p.current&&null===o.Z.state.audioDragTarget&&o.Z.assignState({audioDragTarget:t.source}),clearInterval(h.current))},C=function(t){null===o.Z.state.dialogGlobalSetting&&null===o.Z.state.dialogExample&&null===o.Z.state.dialogLocalStorage&&null===o.Z.state.dialogConsoleTimeAlignment&&null===o.Z.state.dialogPlaygroundAudio&&null===o.Z.state.dialogConsoleAudio&&null===o.Z.state.dialogConsoleGroup&&(!1!==o.Z.state.consoleExpand&&null!==o.Z.state.consoleCurrent||o.Z.assignState({audioDragTarget:null}),p.current=void 0,clearInterval(h.current))},P={onMouseDown:void 0===window.ontouchstart?function(e){0===e.button&&(!0===n&&x(),p.current=!0,h.current=setTimeout((function(){return o.Z.setState((function(e){return e.dialogPlaygroundAudio=t.source,e}))}),500))}:void 0,onTouchStart:void 0!==window.ontouchstart?function(e){null===o.Z.state.dialogGlobalSetting&&null===o.Z.state.dialogExample&&null===o.Z.state.dialogLocalStorage&&null===o.Z.state.dialogConsoleTimeAlignment&&null===o.Z.state.dialogPlaygroundAudio&&null===o.Z.state.dialogConsoleAudio&&null===o.Z.state.dialogConsoleGroup&&(!0===n&&x(),p.current=!0,h.current=setTimeout((function(){return o.Z.setState((function(e){return e.dialogPlaygroundAudio=t.source,e}))}),500))}:void 0,onContextMenu:function(e){null===o.Z.state.dialogGlobalSetting&&null===o.Z.state.dialogExample&&null===o.Z.state.dialogLocalStorage&&null===o.Z.state.dialogConsoleTimeAlignment&&null===o.Z.state.dialogPlaygroundAudio&&null===o.Z.state.dialogConsoleAudio&&null===o.Z.state.dialogConsoleGroup&&(e.preventDefault(),o.Z.setState((function(e){return e.dialogPlaygroundAudio=t.source,e})))}};return r.useEffect((function(){return void 0===window.ontouchstart?(window.addEventListener("mousemove",A),window.addEventListener("mouseup",L),function(){window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",L)}):void 0!==window.ontouchstart?(window.addEventListener("touchmove",j),window.addEventListener("touchend",C),function(){window.removeEventListener("touchmove",j),window.removeEventListener("touchend",C)}):void 0}),[t.source]),r.useEffect((function(){return window.addEventListener("keydown",E),window.addEventListener("keyup",O),function(){window.removeEventListener("keydown",E),window.removeEventListener("keyup",O)}}),[t.source,S]),t.children(P,m)}),(function(t){return[t.dialogGlobalSetting,t.dialogExample,t.dialogLocalStorage,t.dialogConsoleTimeAlignment,t.dialogPlaygroundAudio,t.dialogConsoleAudio,t.dialogConsoleGroup,t.consoleExpand,JSON.stringify(t.audioDragTarget),JSON.stringify(t.consoleCurrent)]}))},9078:(t,e,n)=>{n.r(e),n.d(e,{default:()=>m});var r=n(7629),o=n(5609),i=n(4233),a=n(1575),l=n(2453),u=n(453),c=n(6887),s=n(5742);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},f.apply(this,arguments)}function g(){g=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),l=new G(r||[]);return o(a,"_invoke",{value:j(t,n,l)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var y="suspendedStart",p="suspendedYield",h="executing",v="completed",m={};function b(){}function w(){}function S(){}var Z={};c(Z,a,(function(){return this}));var x=Object.getPrototypeOf,E=x&&x(x(k([])));E&&E!==n&&r.call(E,a)&&(Z=E);var O=S.prototype=b.prototype=Object.create(Z);function A(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(o,i,a,l){var u=f(t[o],t,i);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==d(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,l)}),(function(t){n("throw",t,a,l)})):e.resolve(s).then((function(t){c.value=t,a(c)}),(function(t){return n("throw",t,a,l)}))}l(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function j(e,n,r){var o=y;return function(i,a){if(o===h)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var l=r.delegate;if(l){var u=C(l,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===y)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var c=f(e,n,r);if("normal"===c.type){if(o=r.done?v:p,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=v,r.method="throw",r.arg=c.arg)}}}function C(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,C(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var i=f(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function k(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(d(e)+" is not iterable")}return w.prototype=S,o(O,"constructor",{value:S,configurable:!0}),o(S,"constructor",{value:w,configurable:!0}),w.displayName=c(S,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,c(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},A(L.prototype),c(L.prototype,l,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new L(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},A(O),c(O,u,"Generator"),c(O,a,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=k,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return l.type="throw",l.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:k(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}function y(t,e,n,r,o,i,a){try{var l=t[i](a),u=l.value}catch(t){return void n(t)}l.done?e(u):Promise.resolve(u).then(r,o)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){y(i,r,o,a,l,"next",t)}function l(t){y(i,r,o,a,l,"throw",t)}a(void 0)}))}}function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,l=[],u=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(l.push(r.value),l.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const m=u.Z.withBindRender((function(){var t=r.useRef(JSON.parse(JSON.stringify(u.Z.state.audio.filter((function(t){return"PianoV1"===t._id}))))),e=r.useRef(),n=r.useRef(),d=r.useRef(),y=h(r.useState(1),2),v=y[0],m=y[1],b=h(r.useState([27,38,51,62]),2),w=b[0],S=b[1],Z=h(r.useState(t.current),2),x=Z[0],E=Z[1];return r.useEffect((function(){if(!0===u.Z.state.consoleFullScreen&&!0===u.Z.state.consoleExpand)return null;var t=new ResizeObserver((function(){clearTimeout(d.current),d.current=setTimeout((function(){var t=(e.current.offsetWidth-32)/n.current.offsetWidth,r=(e.current.offsetHeight-136)/n.current.offsetHeight,o=Math.min(t,r,1);m(o)}),500)}));return t.observe(e.current),t.observe(n.current),function(){clearTimeout(d.current),t.disconnect()}}),[u.Z.state.consoleFullScreen,u.Z.state.consoleExpand,e.current,n.current]),r.useEffect(p(g().mark((function e(){var n,r,o,i,a;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x!==t.current){e.next=11;break}return n=t.current,u.Z.setState((function(t){return t.loading=t.loading+1,t})),r={index:0,done:!1,next:function(){var t=n[r.index];void 0!==t&&Object.assign(t,u.Z.state.audioSetting.find((function(e){return t.id===e.id}))),void 0===t&&(r.done=!0),r.index=r.index+1}},e.next=6,(0,c.KE)(r);case 6:return e.next=8,(0,s.fA)(n);case 8:o=e.sent,E(o),u.Z.setState((function(t){return t.loading=t.loading-1,t}));case 11:if(x===t.current){e.next=19;break}return i=x,u.Z.setState((function(t){return t.loading=t.loading+1,t})),a={index:0,done:!1,next:function(){var t=i[a.index];void 0!==t&&Object.assign(t,u.Z.state.audioSetting.find((function(e){return t.id===e.id}))),void 0===t&&(a.done=!0),a.index=a.index+1}},e.next=17,(0,c.KE)(a);case 17:E(i),u.Z.setState((function(t){return t.loading=t.loading-1,t}));case 19:case"end":return e.stop()}}),e)}))),[u.Z.state.audioSetting]),r.createElement(a.Z,{tag:"div",restore:!0,animation:[{opacity:0},{opacity:!0===u.Z.state.consoleFullScreen&&!0===u.Z.state.consoleExpand?0:1}],style:{width:"100%",height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",transition:"0.5s all"},ref:function(t){return e.current=t}},r.createElement("div",{style:{position:"absolute",zIndex:1,height:"fit-content",flexShrink:0,display:"flex",transition:"0.5s all",transform:"scale(".concat(v*u.Z.state.globalSetting.scale,")")},ref:function(t){return n.current=t}},r.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},x.filter((function(t,e){return e>=w[0]&&e<=w[1]})).map((function(t,e){return r.createElement(l.b,{key:e,source:t},(function(e,n){var o="";!0===t.id.includes("M")&&!0===n&&(o="outlined"),!0===t.id.includes("M")&&!1===n&&(o="contained"),!1===t.id.includes("M")&&!0===n&&(o="contained"),!1===t.id.includes("M")&&!1===n&&(o="outlined");var a={width:72,height:240,margin:8,borderRadius:12,fontSize:12,boxShadow:"0 4px 8px gray",border:"none",transform:n?"translateY(20%)":"translateY(0px)",background:"outlined"===o?"#ffffff":void 0,opacity:t.use?1:.35,cursor:t.use?"pointer":"default",transition:"0.5s all"};return r.createElement(i.Z,f({variant:o,style:a},e),t.name)}))}))),r.createElement("div",{style:{width:32}}),r.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},x.filter((function(t,e){return e>=w[2]&&e<=w[3]})).map((function(t,e){return r.createElement(l.b,{key:e,source:t},(function(e,n){var o="";!0===t.id.includes("M")&&!0===n&&(o="outlined"),!0===t.id.includes("M")&&!1===n&&(o="contained"),!1===t.id.includes("M")&&!0===n&&(o="contained"),!1===t.id.includes("M")&&!1===n&&(o="outlined");var a={width:72,height:240,margin:8,borderRadius:12,fontSize:12,boxShadow:"0 4px 8px gray",border:"none",transform:n?"translateY(20%)":"translateY(0px)",background:"outlined"===o?"#ffffff":void 0,opacity:t.use?1:.35,cursor:t.use?"pointer":"default",transition:"0.5s all"};return r.createElement(i.Z,f({variant:o,style:a},e),t.name)}))})))),r.createElement(o.ZP,{style:{position:"absolute",zIndex:2,width:"100%",maxWidth:720,bottom:16},value:w,onChange:function(t,e){S(e)},min:0,max:x.length,step:1}))}),(function(t){return[t.consoleExpand,t.consoleFullScreen,JSON.stringify(t.audio),JSON.stringify(t.audioSetting),JSON.stringify(t.globalSetting)]}))}}]);