(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"20a2":function(e,t,n){e.exports=n("nOHt")},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,u=p.length;s<u;s++){var l=p[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],d=r[l]||new Set;"name"===l&&i||!d.has(f)?(d.add(f),r[l]=d):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},QmFG:function(e,t,n){},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),c=n("tCBg"),s=n("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),i=n("elyg"),c=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),p=f.href,d=f.as,m=e.children,h=e.replace,g=e.shallow,v=e.scroll,b=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var y=a.Children.only(m),j=y&&"object"===typeof y&&y.ref,O=(0,s.useIntersection)({rootMargin:"200px"}),x=r(O,2),w=x[0],M=x[1],k=a.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);(0,a.useEffect)((function(){var e=M&&t&&(0,i.isLocalURL)(p),r="undefined"!==typeof b?b:n&&n.locale,o=u[p+"%"+d+(r?"%"+r:"")];e&&!o&&l(n,p,d,{locale:r})}),[d,p,M,b,t,n]);var P={ref:k,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:c}))}(e,n,p,d,h,g,v,b)},onMouseEnter:function(e){(0,i.isLocalURL)(p)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(n,p,d,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var _="undefined"!==typeof b?b:n&&n.locale,S=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(d,_,n&&n.locales,n&&n.domainLocales);P.href=S||(0,i.addBasePath)((0,i.addLocale)(d,_,n&&n.defaultLocale))}return a.default.cloneElement(y,P)};t.default=f},cpVT:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},g4pe:function(e,t,n){e.exports=n("8Kt/")},hizP:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("nKUr"),o=n("g4pe"),a=n.n(o),i=n("20a2"),c="Next.js Light Starter",s="This is Light Next.js Starter",u="https://kojiyamauchi.github.io/next-light-starter",l="Next.js Light Starter",f="Next.js Light Starter",p="This is Light Next.js Starter.",d="ogp_image.jpg",m=function(e){var t=Object(i.useRouter)(),n={title:e.title?"".concat(e.title," | ").concat(c):c,description:e.description?"".concat(s," and ").concat(e.description):s,location:e.locationPath?"".concat(u).concat(e.locationPath):u,ogpSiteName:e.ogpSiteName||l,ogpTitle:e.ogpTitle?"".concat(e.ogpTitle," | ").concat(f):f,ogpDescription:e.ogpDescription||p,ogpImage:e.ogpImage||d};return Object(r.jsxs)(a.a,{children:[Object(r.jsx)("meta",{charSet:"UTF-8"},"charset"),Object(r.jsx)("meta",{httpEquiv:"content-language",content:"ja"},"content-language"),Object(r.jsx)("title",{children:n.title},"title"),Object(r.jsx)("meta",{name:"title",content:n.title},"meta-title"),Object(r.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"},"X-UA-Compatible"),Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},"viewport"),Object(r.jsx)("meta",{name:"description",content:n.description},"description"),Object(r.jsx)("meta",{property:"og:type",content:"website"},"ogp-type"),Object(r.jsx)("meta",{property:"og:url",content:n.location},"ogp-url"),Object(r.jsx)("meta",{property:"og:site_name",content:n.ogpSiteName},"ogp-site-name"),Object(r.jsx)("meta",{property:"og:title",content:n.ogpTitle},"ogp-title"),Object(r.jsx)("meta",{property:"og:description",content:n.ogpDescription},"ogp-description"),Object(r.jsx)("meta",{property:"og:image",content:n.ogpImage},"ogp-image"),Object(r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twitter-card"),Object(r.jsx)("meta",{name:"twitter:title",content:n.title},"twitter-title"),Object(r.jsx)("meta",{name:"twitter:description",content:n.description},"twitter-description"),Object(r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(t.basePath,"/favicons/apple-touch-icon.png")},"apple-touch-icon"),Object(r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(t.basePath,"/favicons/favicon-32x32.png")},"l-favicon"),Object(r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(t.basePath,"/favicons/favicon-16x16.png")},"s-favicon"),Object(r.jsx)("link",{rel:"manifest",href:"".concat(t.basePath,"/site.webmanifest")},"manifest"),Object(r.jsx)("link",{rel:"mask-icon",href:"".concat(t.basePath,"/favicons/safari-pinned-tab.svg"),color:"#5bbad5"},"mask-icon"),Object(r.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"},"msapplication-tile-color"),Object(r.jsx)("meta",{name:"theme-color",content:"#ffffff"},"theme-color"),Object(r.jsx)("link",{rel:"canonical",href:n.location},"canonical")]})}},hrqv:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("cpVT"),o=n("nKUr");function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=n("q1tI"),c=n("20a2"),s=n("QmFG"),u=n.n(s);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){var t=e.image,n=e.extension,r=e.altProps,s=a(e,["image","extension","altProps"]),l=window.matchMedia("(min-width: 768px)"),p=Object(i.useState)(!0),d=p[0],m=p[1],h=Object(i.useState)(l&&l.matches),g=h[0],v=h[1],b=Object(c.useRouter)();Object(i.useEffect)((function(){m(!1);var e=function(e){return v(e.matches)};if(l)return l.addEventListener("change",e),function(){return l.removeEventListener("change",e)}}),[l]);var y="webp"===n?"webps":"images";return Object(o.jsx)(o.Fragment,{children:d?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("img",{src:"".concat(b.basePath,"/images/loading.svg")})}):Object(o.jsx)("img",{className:u.a.image,src:"".concat(b.basePath,"/").concat(y,"/").concat(t,".").concat(n),alt:r,loading:"lazy",style:f({},function(e){return d?{display:"none"}:{display:"inline-block",width:e?s.desktopWidth||"100%":s.mobileWidth||"100%",minWidth:e?s.desktopMinWidth||"none":s.mobileMinWidth||"none",maxWidth:e?s.desktopMaxWidth||"none":s.mobileMaxWidth||"none",height:e?s.desktopHeight||"auto":s.mobileHeight||"auto",minHeight:e?s.desktopHeight||"none":s.mobileHeight||"none",maxHeight:e?s.desktopMaxHeight||"none":s.mobileMaxHeight||"none",margin:s.margin?s.margin:e?s.desktopMargin||"0 auto":s.mobileMargin||"0 auto"}}(g))})})}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},vNVm:function(e,t,n){"use strict";var r=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=(0,o.useRef)(),u=(0,o.useState)(!1),l=r(u,2),f=l[0],p=l[1],d=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,a.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[d,f]};var o=n("q1tI"),a=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var c=new Map}}]);