(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[0],{25:function(e,n,t){},26:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var c=t(0),o=t.n(c),a=t(19),r=t.n(a),i=(t(25),t(6)),s=t(1),l=(t(26),t(5)),h=t(20),u=t.n(h),d=function(){var e=localStorage.getItem("cat");return null!==e?JSON.parse(e):[]},j=t(2),f=function(e){var n=e.catToDisplay;return Object(j.jsx)("img",{src:n.url,alt:n.id})},g=function(e){var n=e.howMuch,t=Object(c.useState)([]),o=Object(l.a)(t,2),a=o[0],r=o[1];return Object(c.useEffect)((function(){u.a.get("https://api.thecatapi.com/v1/images/search",{params:{limit:n}}).then((function(e){return console.log(e),function(e){var n=d().concat(e);n.length>50&&n.slice(Math.max(n.length-50,0)),localStorage.setItem("cat",JSON.stringify(n))}(e.data),e.data})).catch((function(){return d()})).then((function(e){r(e)}))}),[n]),Object(j.jsx)(j.Fragment,{children:a.map((function(e){return Object(j.jsx)(f,{catToDisplay:e},e.id)}))})},b=function(){var e=Object(c.useState)(0),n=Object(l.a)(e,2),t=n[0],o=n[1];return console.log(t),Object(j.jsxs)("div",{onClick:function(){return o(t+1)},children:[Object(j.jsx)("h1",{children:"Hello You"}),t>0&&Object(j.jsx)("h1",{children:"Want some cats?"}),t>30&&Object(j.jsx)("h1",{children:"/!\\ Warning only the last 50 cat are available offline"}),t>1&&Object(j.jsx)(g,{howMuch:t})]})},p=function(){return Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:"".concat("/PresPwa","/logo.svg"),className:"App-logo",alt:"logo"}),Object(j.jsx)("p",{children:"Wanna Learn PWA ?"}),Object(j.jsx)("a",{className:"App-link",href:"https://github.com/batleforc/PresPwa",target:"_blank",rel:"noopener noreferrer",children:"Learn PWA"})]})},v=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsxs)("nav",{children:[Object(j.jsx)(i.b,{to:"/",children:"Home"}),Object(j.jsx)(i.b,{to:"/test",children:"Test"})]}),Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{path:"/",element:Object(j.jsx)(p,{})}),Object(j.jsx)(s.a,{path:"/test",element:Object(j.jsx)(b,{})})]})]})})},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),c(e),o(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(i.a,{basename:"/PresPwa",children:Object(j.jsx)(v,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/PresPwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/PresPwa","/service-worker.js");w?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):O(n,e)}))}}(),m()}},[[46,1,2]]]);
//# sourceMappingURL=main.bcf2d8e6.chunk.js.map