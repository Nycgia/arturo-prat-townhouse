(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[100],{5871:function(e,t,n){"use strict";function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var c=o?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(n,a,c):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294));function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function c(e,t){return o.createElement("svg",a({width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",ref:t},e),o.createElement("path",{d:"M2 1h12a1 1 0 010 2H2a1 1 0 010-2zM2 7h12a1 1 0 010 2H2a1 1 0 010-2zM2 13h12a1 1 0 010 2H2a1 1 0 010-2z"}))}var l=o.forwardRef(c);t.default=l},5806:function(e,t,n){"use strict";Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return o.default}});var r,o=(r=n(4613))&&r.__esModule?r:{default:r}},4613:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.default=void 0;var o=r(n(8496)),i=r(n(5871)),a=(0,o.default)({as:i.default,ariaLabel:"menu",category:"application",displayName:"Menu"});t.default=a,e.exports=t.default},3100:function(e,t,n){"use strict";n.r(t),n.d(t,{ItemsMenu:function(){return d},default:function(){return p}});var r=n(7294),o=n(5806),i=n(5927),a=n.n(i),c=n(2834),l=n(3361),u=n.n(l),s=n(5893),f=function(){var e=(0,c.y)().closeDrawer,t=function(){e()};return(0,s.jsxs)("div",{className:u().content,children:[(0,s.jsx)("div",{className:u().contentImg,children:(0,s.jsx)("img",{src:"/dummies/logo2.png"})}),(0,s.jsxs)("div",{className:u().title,children:[(0,s.jsx)("h2",{children:"TOWNHOUSE"}),(0,s.jsx)("h1",{children:"Arturo Prat"})]}),(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:d.map((function(e,n){return(0,s.jsx)("li",{children:(0,s.jsx)("a",{onClick:t,href:e.link,children:e.text})},n)}))})})]})},d=[{text:"Proyecto",link:"#proyecto"},{text:"Caracter\xedsticas",link:"#caracteristicas"},{text:"Tower House",link:"#tower"},{text:"Galer\xeda",link:"#galeria"},{text:"Entorno",link:"#entorno"},{text:"Contacto",link:"#contacto"}],p=function(e){var t=e.bodyRef,n=(0,c.y)().openDrawer,i=(0,r.useRef)(null),l=(0,r.useState)(!1),u=l[0],p=l[1],v=(0,r.useState)(a().desktopNavbar),b=v[0],x=v[1];(0,r.useEffect)((function(){t&&t.current&&t.current.addEventListener("click",(function(){p(!1)}))}),[t]),(0,r.useEffect)((function(){if(window){var e=function(){var e=i.current.offsetTop-35,t=window.innerWidth<=900;console.log("\ud83d\ude80 ~ isMobile",t),window.pageYOffset>=e?x(t?a().mobileNavbarFixed:a().desktopNavbarFixed):x(t?a().mobileNavbarFixed:a().desktopNavbar)};e(),window.onresize=e,window.onscroll=e}}),[window]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:b,children:[(0,s.jsx)("div",{children:(0,s.jsx)(o.Z,{onClick:function(){n({drawerComponent:(0,s.jsx)(f,{})})}})}),(0,s.jsx)("ul",{className:u?a().displayed:"",children:d.map((function(e,t){return(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:e.link,onClick:function(){return p(!1)},children:e.text})},t)}))}),(0,s.jsx)("span",{children:(0,s.jsx)("img",{src:"/dummies/logo2.png"})})]}),(0,s.jsx)("div",{ref:i})]})}},3361:function(e){e.exports={content:"Menu_content__Ti_nS",contentImg:"Menu_contentImg__Yux9u",title:"Menu_title__ITcK_"}},5927:function(e){e.exports={desktopNavbar:"Navbar_desktopNavbar__pJHKX",desktopNavbarFixed:"Navbar_desktopNavbarFixed__5fIdw",mobileNavbar:"Navbar_mobileNavbar__bYtKv",displayed:"Navbar_displayed__Jl9Pf",mobileNavbarFixed:"Navbar_mobileNavbarFixed__3A2UG"}}}]);