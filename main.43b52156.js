!function(e){function n(n){for(var r,c,i=n[0],s=n[1],u=n[2],f=0,d=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(l&&l(n);d.length;)d.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,i=1;i<t.length;i++){var s=t[i];0!==o[s]&&(r=!1)}r&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={3:0},a=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(e){return c.p+"templates/"+({0:"vendors~src/containers/Case~src/containers/Cases~src/containers/Home",1:"src/containers/Cases~src/containers/Home",2:"vendors~src/containers/Cases~src/containers/Home",4:"src/containers/404",5:"src/containers/Case",6:"src/containers/Cases",7:"src/containers/Home"}[e]||e)+"."+{0:"0aef8f68",1:"e0c79a5d",2:"5997c613",4:"930afd80",5:"9a2f7060",6:"4d238f4a",7:"ed8066fc"}[e]+".js"}(e);var s=new Error;a=function(n){i.onerror=i.onload=null,clearTimeout(u);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,t[1](s)}o[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var l=s;a.push([59,8,9]),t()}({117:function(e,n,t){var r={".":14,"./":14,"./index":14,"./index.js":14};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=117},126:function(e,n,t){"use strict";t.r(n),function(e){var r=t(0),o=t.n(r),a=t(26),c=t.n(a),i=t(54),s=t(19);if(n.default=s.a,"undefined"!=typeof document){var u=document.getElementById("root"),l=u.hasChildNodes()?c.a.hydrate:c.a.render,f=function(e){l(o.a.createElement(i.AppContainer,null,o.a.createElement(e,null)),u)};f(s.a),e&&e.hot&&e.hot.accept("./App",(function(){f(s.a)}))}}.call(this,t(127)(e))},19:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(17),c=t(27),i=t(24),s=t.n(i),u=t(9);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=function(e){var n=Object(u.useNavigate)(),t=Object(u.useLocation)(),a=t.href,c=t.state,i=Object(r.useCallback)((function(){n(a,{state:f(f({},c),{},{scrolled:!0}),replace:!0}).then((function(){return window.scrollTo({top:0,behavior:"smooth"})}))}),[a,c,n]);return Object(r.useEffect)(i,[]),Object(r.useEffect)((function(){c&&!c.scrolled&&i()}),[c,i]),o.a.createElement("div",{id:"app-page"},o.a.createElement("div",{id:"app-content"},e.children))},p=(t(131),t(132),t(16)),m=t.n(p),h=(t(133),[new m.a("Gilroy",{style:"normal",weight:500}),new m.a("Gilroy",{style:"italic",weight:500}),new m.a("Gilroy",{style:"normal",weight:600}),new m.a("Gilroy",{style:"normal",weight:800})]);Promise.all(h).then((function(){"undefined"!=typeof document&&(document.documentElement.className=document.documentElement.className.replace(/\bno-fonts\b/,"fonts-loaded"),sessionStorage.fontsLoaded=!0)}));n.a=function(e){return o.a.createElement(a.Root,null,o.a.createElement(d,null,o.a.createElement(o.a.Suspense,{fallback:o.a.createElement("em",null,"Loading...")},o.a.createElement(c.b,null,o.a.createElement(a.Routes,{path:"*"})))))}},27:function(e,n,t){"use strict";var r=t(9);t.d(n,"a",(function(){return r.Link})),t.d(n,"b",(function(){return r.Router}))},29:function(e,n,t){"use strict";t.r(n);var r=t(52),o=[{location:"../node_modules/react-static-plugin-favicons",plugins:[],hooks:{}},{location:"../node_modules/react-static-plugin-reach-router",plugins:[],hooks:t.n(r)()({})},{location:"../node_modules/react-static-plugin-sass",plugins:[],hooks:{}},{location:"../node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"..",plugins:[],hooks:{}}];n.default=o},50:function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"notFoundTemplate",(function(){return v}));var r=t(5),o=t.n(r),a=t(6),c=t.n(a),i=t(0),s=t.n(i),u=t(7),l=t.n(u);Object(u.setHasBabelPlugin)();var f={loading:function(){return null},error:function(e){return console.error(e.error),s.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},d=l()(c()({id:"../src/containers/404",load:function(){return Promise.all([t.e(4).then(t.bind(null,55))]).then((function(e){return e[0]}))},path:function(){return o.a.join(e,"../src/containers/404")},resolve:function(){return 55},chunkName:function(){return"src/containers/404"}}),f);d.template="../src/containers/404";var p=l()(c()({id:"../src/containers/Home",load:function(){return Promise.all([Promise.all([t.e(0),t.e(2),t.e(1),t.e(7)]).then(t.bind(null,57))]).then((function(e){return e[0]}))},path:function(){return o.a.join(e,"../src/containers/Home")},resolve:function(){return 57},chunkName:function(){return"src/containers/Home"}}),f);p.template="../src/containers/Home";var m=l()(c()({id:"../src/containers/Case",load:function(){return Promise.all([Promise.all([t.e(0),t.e(5)]).then(t.bind(null,58))]).then((function(e){return e[0]}))},path:function(){return o.a.join(e,"../src/containers/Case")},resolve:function(){return 58},chunkName:function(){return"src/containers/Case"}}),f);m.template="../src/containers/Case";var h=l()(c()({id:"../src/containers/Cases",load:function(){return Promise.all([Promise.all([t.e(0),t.e(2),t.e(1),t.e(6)]).then(t.bind(null,56))]).then((function(e){return e[0]}))},path:function(){return o.a.join(e,"../src/containers/Cases")},resolve:function(){return 56},chunkName:function(){return"src/containers/Cases"}}),f);h.template="../src/containers/Cases",n.default={"../src/containers/404":d,"../src/containers/Home":p,"../src/containers/Case":m,"../src/containers/Cases":h};var v="../src/containers/404"}.call(this,"/")},59:function(e,n,t){t(60),t(115),e.exports=t(123)}});