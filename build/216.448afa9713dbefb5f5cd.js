(self.webpackChunkapp=self.webpackChunkapp||[]).push([[216],{5216:e=>{function t(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var r=function e(t){var n=0;return void 0!==t.w&&(n+=t.w),Object.keys(t).filter((function(e){return"w"!==e})).forEach((function(r){return n+=e(t[r])})),n};e.exports.generator=function(e,n,u){var c={token:e,setting:n,library:u,step:0,result:[],next:function(){return i()}},i=function(){var e=[function(){!1===Array.isArray(c.library)&&(c.step=-1),!0===Array.isArray(c.library)&&(c.step=c.step+1)},function(){c.index=0,c.step=c.step+1,c.cacheRepeat={result:"",index:0}},function(){!function(e){if(!(0===e.setting.repeatLength||e.result.length<e.setting.repeatLength)){var n=[].concat(t(e.token),t(e.result)),r=e.result.slice(e.result.length-e.setting.repeatLength,e.result.length),u=n.slice(Math.max(n.length-e.setting.repeatLength-e.setting.createTokenLength,0),n.length-e.setting.repeatLength),c=r.join("");u.join("").includes(c)&&(e.result=e.result.slice(0,e.result.length-e.setting.repeatLength),e.cacheRepeat.result=e.result,e.cacheRepeat.index=e.cacheRepeat.result===e.result?e.cacheRepeat.index+1:0)}}(c),function(e){e.searchResult=[];var n=e.setting.memoryContextLength,u=[].concat(t(e.token),t(e.result)),c=[].concat(t(e.token),t(e.result)).reverse(),i=Math.max(u.length-n,0),a=u.length,s=u.slice(i,a).map((function(t){return e.library[0].indexOf(t)}));e.searchResult=s.reduce((function(t,n,u){if(t.length>0)return t;var c=e.library[2][0];return s.slice(u,s.length).forEach((function(e){return c=c&&c[e]&&void 0===c[e].w?c[e]:null})),c?Object.entries(c).map((function(t){return{tokenIndex:t[0],token:e.library[0][t[0]],weight:r(t[1])}})):t}),e.searchResult),e.searchResult=e.searchResult.map((function(t){if(t.token.match(/[！？。，]/)){var n=c.findIndex((function(e){return e.match(/[！？。，]/)}));n>-1&&n<e.setting.punctuationSpace&&(t.weight=t.weight/4)}return[[/^‘$/,/^’$/],[/^“$/,/^”$/],[/^<$/,/^>$/],[/^（$/,/^）$/],[/^《$/,/^》$/]].forEach((function(e){var n=c.findIndex((function(t){return t.match(e[0])})),r=c.findIndex((function(t){return t.match(e[1])}));null!==t.token.match(e[0])&&(-1!==n&&-1===r&&(t.weight=t.weight/4),-1!==n&&-1!==r&&n<r&&(t.weight=t.weight/4)),null!==t.token.match(e[1])&&(-1===n&&-1===r&&(t.weight=t.weight/4),-1===n&&-1!==r&&(t.weight=t.weight/4),-1!==n&&-1!==r&&n>r&&(t.weight=t.weight/4),-1!==n&&-1!==r&&n<r&&(t.weight=4*t.weight),-1!==n&&-1===r&&(t.weight=4*t.weight))})),t}))}(c),function(e){e.matchResult=null;var t=e.setting.topP+(1-e.setting.topP)*(e.cacheRepeat.index/4),n=e.setting.temperature+(0-e.setting.temperature)*(e.cacheRepeat.index/4),r=e.searchResult.reduce((function(e,t){return e+t.weight}),0)/e.searchResult.length;e.searchResult=e.searchResult.map((function(e){return e.weight=r+(e.weight-r)*n,e}));var u=e.searchResult.reduce((function(e,t){return e+t.weight}),0);e.searchResult=e.searchResult.sort((function(e,t){return t.weight-e.weight})),e.searchResult=e.searchResult.map((function(t,n){return t.percent=t.weight/u,t.percentAccumulation=0===n?t.percent:t.percent+e.searchResult[n-1].percentAccumulation,t})),e.searchResult=e.searchResult.filter((function(e){return e.percentAccumulation-e.percent<=t})),u=e.searchResult.reduce((function(e,t){return e+t.weight}),0),e.searchResult=e.searchResult.sort((function(e,t){return t.weight-e.weight})),e.searchResult=e.searchResult.map((function(t,n){return t.percent=t.weight/u,t.percentAccumulation=0===n?t.percent:t.percent+e.searchResult[n-1].percentAccumulation,t}));var c=Math.random();e.matchResult=e.searchResult.reduce((function(e,t){return null===e&&c<t.percentAccumulation?t.token:e}),e.matchResult),null===e.matchResult&&0===e.token.length&&(e.matchResult=e.library[0][Math.floor(Math.random()*e.library[0].length)])}(c),c.index=c.index+1,null!==c.matchResult&&c.result.push(c.matchResult),null===c.matchResult&&(c.step=-1),c.cacheRepeat.index>c.setting.repeatMaxTime&&(c.step=-1),c.setting.stopToken&&c.setting.stopToken.includes(c.matchResult)&&(c.step=-1),c.result.length===c.setting.createTokenLength&&(c.step=-1)}];return void 0!==e[c.step]&&e[c.step](),void 0===e[c.step]&&(c.next=null),c};return c}}}]);