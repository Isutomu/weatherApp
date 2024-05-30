(()=>{"use strict";var n={534:(n,e,t)=>{t.d(e,{A:()=>f});var r=t(354),i=t.n(r),o=t(314),a=t.n(o),A=t(417),s=t.n(A),c=new URL(t(44),t.b),d=new URL(t(208),t.b),p=a()(i()),l=s()(c),u=s()(d);p.push([n.id,`:root {\n    font-size: 32px;\n}\n\nbody {\n    position: relative;\n\n    width: 100vw;\n    height: 100vh;\n    padding: 15px;\n    background-image: url(${l});\n    background-position: center;\n\n    text-align: center;\n\n    display: grid;\n    grid-template-rows: 200px 1fr;\n    grid-template-columns: 1fr;\n    place-items: center;\n}\n\nbutton.temperature {\n    position: absolute;\n\n    width: 30px;\n    height: auto;\n\n    font-size: 0.5rem;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nbutton.temperature.c {\n    top: 5px;\n    left: 5px;\n}\n\nbutton.temperature.f {\n    top: 5px;\n    left: 35px;\n}\n\nimg {\n    width: auto;\n    height: 80px;\n}\n\n.loading {\n    font-size: 2rem;\n    visibility: hidden;\n    position: absolute;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n#site-logo {\n    width: 850px;\n    height: 200px;\n    background-image: url(${u});\n    background-position: center;\n}\n\nmain {\n    padding: 15px;\n\n    align-self: start;\n    \n    display: grid;\n    grid-template-rows: 50px 30px 1fr;\n    grid-template-columns: 1fr;\n    place-items: center;\n    gap: 10px;\n}\n\n#city-input {\n    width: 450px;\n    height: 40px;\n    text-align: center;\n\n    font-size: 0.8rem;\n    \n    border-radius: 5px;\n}\n\n#search-btn {\n    width: 70px;\n    height: 30px;\n\n    font-size: 0.5rem;\n    font-weight: bold;\n\n    border-radius: 5px;\n}`,"",{version:3,sources:["webpack://./src/style/common.css"],names:[],mappings:"AAAA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;;IAElB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,yDAAuD;IACvD,2BAA2B;;IAE3B,kBAAkB;;IAElB,aAAa;IACb,6BAA6B;IAC7B,0BAA0B;IAC1B,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;;IAElB,WAAW;IACX,YAAY;;IAEZ,iBAAiB;;IAEjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,kBAAkB;;IAElB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,yDAA4C;IAC5C,2BAA2B;AAC/B;;AAEA;IACI,aAAa;;IAEb,iBAAiB;;IAEjB,aAAa;IACb,iCAAiC;IACjC,0BAA0B;IAC1B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;;IAElB,iBAAiB;;IAEjB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,iBAAiB;IACjB,iBAAiB;;IAEjB,kBAAkB;AACtB",sourcesContent:[':root {\n    font-size: 32px;\n}\n\nbody {\n    position: relative;\n\n    width: 100vw;\n    height: 100vh;\n    padding: 15px;\n    background-image: url("/src/img/backYellowWeather.png");\n    background-position: center;\n\n    text-align: center;\n\n    display: grid;\n    grid-template-rows: 200px 1fr;\n    grid-template-columns: 1fr;\n    place-items: center;\n}\n\nbutton.temperature {\n    position: absolute;\n\n    width: 30px;\n    height: auto;\n\n    font-size: 0.5rem;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nbutton.temperature.c {\n    top: 5px;\n    left: 5px;\n}\n\nbutton.temperature.f {\n    top: 5px;\n    left: 35px;\n}\n\nimg {\n    width: auto;\n    height: 80px;\n}\n\n.loading {\n    font-size: 2rem;\n    visibility: hidden;\n    position: absolute;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n#site-logo {\n    width: 850px;\n    height: 200px;\n    background-image: url("/src/img/header.png");\n    background-position: center;\n}\n\nmain {\n    padding: 15px;\n\n    align-self: start;\n    \n    display: grid;\n    grid-template-rows: 50px 30px 1fr;\n    grid-template-columns: 1fr;\n    place-items: center;\n    gap: 10px;\n}\n\n#city-input {\n    width: 450px;\n    height: 40px;\n    text-align: center;\n\n    font-size: 0.8rem;\n    \n    border-radius: 5px;\n}\n\n#search-btn {\n    width: 70px;\n    height: 30px;\n\n    font-size: 0.5rem;\n    font-weight: bold;\n\n    border-radius: 5px;\n}'],sourceRoot:""}]);const f=p},332:(n,e,t)=>{t.d(e,{A:()=>A});var r=t(354),i=t.n(r),o=t(314),a=t.n(o)()(i());a.push([n.id,"/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n  padding: 0; /* self-added */\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\ninput, button, textarea, select {\n  font: inherit;\n}\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n#root, #__next {\n  isolation: isolate;\n}\n/* End Reset */","",{version:3,sources:["webpack://./src/style/reset.css"],names:[],mappings:"AAAA;;;CAGC;AACD;EACE,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,UAAU,EAAE,eAAe;AAC7B;AACA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;EACE,cAAc;EACd,eAAe;AACjB;AACA;EACE,aAAa;AACf;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,kBAAkB;AACpB;AACA,cAAc",sourcesContent:["/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n  padding: 0; /* self-added */\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\ninput, button, textarea, select {\n  font: inherit;\n}\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n#root, #__next {\n  isolation: isolate;\n}\n/* End Reset */"],sourceRoot:""}]);const A=a},137:(n,e,t)=>{t.d(e,{A:()=>A});var r=t(354),i=t.n(r),o=t(314),a=t.n(o)()(i());a.push([n.id,"#weather-container {\n    visibility: hidden;\n\n    background-color: rgba(37, 37, 222, 0.653);\n    border: 2px solid white;\n    border-radius: 5px;\n\n    display: grid;\n    grid: auto 1fr 1fr / 600px;\n    place-items: center;\n    gap: 5px;\n}\n\n.weather-focused {\n    display: grid;\n    grid: 1fr / 200px 400px;\n}\n\n.focused-daily-weather {\n    width: 200px;\n\n    background-color: rgba(37, 37, 222, 0.1);\n\n    font-size: 0.9rem;\n\n    display:flex;\n    flex-direction: column;\n    gap: 5px;\n    align-items: center;\n    justify-content: center;\n}\n\n.hourly-weather{\n    width: 400px;\n\n    background-color: rgba(37, 37, 222, 0.1);\n\n    font-size: 0.6rem;\n\n    display: flex;\n    gap: 15px;\n    align-items: center;\n    justify-content: start;\n}\n\n.daily-weather{\n    width: 600px;\n    padding: 5px;\n\n    background-color: rgba(37, 37, 222, 0.1);\n\n    font-size: 0.7rem;\n\n    display: flex;\n    gap: 25px;\n    align-items: center;\n    justify-content: center;\n}","",{version:3,sources:["webpack://./src/style/weather-widgets.css"],names:[],mappings:"AAAA;IACI,kBAAkB;;IAElB,0CAA0C;IAC1C,uBAAuB;IACvB,kBAAkB;;IAElB,aAAa;IACb,0BAA0B;IAC1B,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,YAAY;;IAEZ,wCAAwC;;IAExC,iBAAiB;;IAEjB,YAAY;IACZ,sBAAsB;IACtB,QAAQ;IACR,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;;IAEZ,wCAAwC;;IAExC,iBAAiB;;IAEjB,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,YAAY;;IAEZ,wCAAwC;;IAExC,iBAAiB;;IAEjB,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,uBAAuB;AAC3B",sourcesContent:["#weather-container {\n    visibility: hidden;\n\n    background-color: rgba(37, 37, 222, 0.653);\n    border: 2px solid white;\n    border-radius: 5px;\n\n    display: grid;\n    grid: auto 1fr 1fr / 600px;\n    place-items: center;\n    gap: 5px;\n}\n\n.weather-focused {\n    display: grid;\n    grid: 1fr / 200px 400px;\n}\n\n.focused-daily-weather {\n    width: 200px;\n\n    background-color: rgba(37, 37, 222, 0.1);\n\n    font-size: 0.9rem;\n\n    display:flex;\n    flex-direction: column;\n    gap: 5px;\n    align-items: center;\n    justify-content: center;\n}\n\n.hourly-weather{\n    width: 400px;\n\n    background-color: rgba(37, 37, 222, 0.1);\n\n    font-size: 0.6rem;\n\n    display: flex;\n    gap: 15px;\n    align-items: center;\n    justify-content: start;\n}\n\n.daily-weather{\n    width: 600px;\n    padding: 5px;\n\n    background-color: rgba(37, 37, 222, 0.1);\n\n    font-size: 0.7rem;\n\n    display: flex;\n    gap: 25px;\n    align-items: center;\n    justify-content: center;\n}"],sourceRoot:""}]);const A=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(i," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],A=0;A<n.length;A++){var s=n[A],c=r.base?s[0]+r.base:s[0],d=o[c]||0,p="".concat(c," ").concat(d);o[c]=d+1;var l=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(u);else{var f=i(u,r);r.byIndex=A,e.splice(A,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var A=t(o[a]);e[A].references--}for(var s=r(n,i),c=0;c<o.length;c++){var d=t(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},44:(n,e,t)=>{n.exports=t.p+"881783c5dc03b45eaf63.png"},208:(n,e,t)=>{n.exports=t.p+"a9c78cc0dffdb5ad4eab.png"}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=r[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),i=t.n(r),o=t(659),a=t.n(o),A=t(56),s=t.n(A),c=t(540),d=t.n(c),p=t(113),l=t.n(p),u=t(332),f={};f.styleTagTransform=l(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=d(),e()(u.A,f),u.A&&u.A.locals&&u.A.locals;var m=t(534),h={};h.styleTagTransform=l(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),e()(m.A,h),m.A&&m.A.locals&&m.A.locals;var g=t(137),C={};C.styleTagTransform=l(),C.setAttributes=s(),C.insert=a().bind(null,"head"),C.domAPI=i(),C.insertStyleElement=d(),e()(g.A,C),g.A&&g.A.locals&&g.A.locals;const b="http://api.weatherapi.com/v1/forecast.json?key=9b93bbe006044026a03160236242305";function B(n,e,t,r){return{c:n[e],f:n[t],hr:n[r],condition:n.condition}}function y(n,e,t,r="c"){const i=document.createElement("article");i.classList.add(e,"weather-widget");const o=document.createElement("span");o.textContent=t,i.appendChild(o);const a=document.createElement("img");a.src=n.condition.icon,i.appendChild(a);const A=document.createElement("span");A.textContent=`${n[r]} ${r.toUpperCase()}`,i.appendChild(A);const s=document.createElement("span");s.textContent=`${n.hr}%`,i.appendChild(s);const c=document.createElement("span");return c.textContent=n.condition.text,i.appendChild(c),i}async function x({city:n,days:e,hours:t,unit:r}){const i=await async function(n,e=3){const t=await fetch(`${b}&q=${n}&days=${e}`);return await t.json()}(n,e),o=document.createElement("div");o.classList.add("weather-focused"),o.appendChild(function(n,e){const t=function(n){return B(n.current,"temp_c","temp_f","humidity")}(n);return y(t,"focused-daily-weather","Today",e)}(i,r));const a=document.createElement("div");a.classList.add("weather-hourly-container"),a.append(...function(n,e,t){return function(n,e=6,t=0){const r=function(n){return n.forecast.forecastday.map((n=>n.hour.map((n=>B(n,"temp_c","temp_f","humidity")))))}(n).flat();let i,o;t?(i=23*t+1,o=24):(i=(new Date).getHours()+1,o=e);const a=[];for(let n=i;n<i+o;n+=1){const e=r[n];e.hour=n%24,a.push(e)}return a}(n,e).slice(1).map((n=>y(n,"hourly-weather",`${String(n.hour).padStart(2,"0")}:00`,t)))}(i,t,r)),o.appendChild(a),document.querySelector("#weather-container").appendChild(o)}async function I(n){const e=document.querySelector("#city-input").value;if(e){const t=document.querySelector("#weather-container");t.innerHTML="",t.style.visibility="hidden",document.querySelector(".loading").style.visibility="visible",await x({city:e,days:3,hours:6,unit:n}),t.style.visibility="visible",document.querySelector(".loading").style.visibility="hidden"}}function v(n){I(n)}document.querySelector("#search-btn").addEventListener("click",(()=>I("f"))),document.querySelector("button.temperature.c").addEventListener("click",(()=>v("c"))),document.querySelector("button.temperature.f").addEventListener("click",(()=>v("f")))})()})();
//# sourceMappingURL=app.bundle.js.map