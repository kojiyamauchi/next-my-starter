(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2769)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},u=n(6273),l=n(2725),i=n(3462),c=n(1018),s=n(7190),f=n(1210),p=n(8684);var d="undefined"!==typeof a.default.useTransition,h={};function v(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;h[t+"%"+n+(o?"%"+o:"")]=!0}}var _=a.default.forwardRef((function(e,t){var n,o=e.href,_=e.as,g=e.children,y=e.prefetch,m=e.passHref,b=e.replace,x=e.shallow,j=e.scroll,w=e.locale,C=e.onClick,O=e.onMouseEnter,P=e.legacyBehavior,k=void 0===P?!0!==Boolean(!1):P,M=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=g,!k||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var E=!1!==y,N=r(d?a.default.useTransition():[],2)[1],L=a.default.useContext(i.RouterContext),R=a.default.useContext(c.AppRouterContext);R&&(L=R);var T,$=a.default.useMemo((function(){var e=r(u.resolveHref(L,o,!0),2),t=e[0],n=e[1];return{href:t,as:_?u.resolveHref(L,_):n||t}}),[L,o,_]),A=$.href,I=$.as,S=a.default.useRef(A),H=a.default.useRef(I);k&&(T=a.default.Children.only(n));var K=k?T&&"object"===typeof T&&T.ref:t,q=r(s.useIntersection({rootMargin:"200px"}),3),B=q[0],D=q[1],U=q[2],V=a.default.useCallback((function(e){H.current===I&&S.current===A||(U(),H.current=I,S.current=A),B(e),K&&("function"===typeof K?K(e):"object"===typeof K&&(K.current=e))}),[I,K,A,U,B]);a.default.useEffect((function(){var e=D&&E&&u.isLocalURL(A),t="undefined"!==typeof w?w:L&&L.locale,n=h[A+"%"+I+(t?"%"+t:"")];e&&!n&&v(L,A,I,{locale:t})}),[I,A,D,w,E,L]);var Z={ref:V,onClick:function(e){k||"function"!==typeof C||C(e),k&&T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l,i,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n)){e.preventDefault();var s=function(){t[o?"replace":"push"](n,r,{shallow:a,locale:i,scroll:l})};c?c(s):s()}}(e,L,A,I,b,x,j,w,R?N:void 0)},onMouseEnter:function(e){k||"function"!==typeof O||O(e),k&&T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),u.isLocalURL(A)&&v(L,A,I,{priority:!0})}};if(!k||m||"a"===T.type&&!("href"in T.props)){var F="undefined"!==typeof w?w:L&&L.locale,X=L&&L.isLocaleDomain&&f.getDomainLocale(I,F,L.locales,L.domainLocales);Z.href=X||p.addBasePath(l.addLocale(I,F,L&&L.defaultLocale))}return k?a.default.cloneElement(T,Z):a.default.createElement("a",Object.assign({},M,Z),n)}));t.default=_,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!u,s=o.useRef(),f=r(o.useState(!1),2),p=f[0],d=f[1],h=r(o.useState(null),2),v=h[0],_=h[1];o.useEffect((function(){if(u){if(s.current&&(s.current(),s.current=void 0),c||p)return;return v&&v.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=i.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},i.push(n),l.set(n,t),t}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),l.delete(o);var t=i.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&i.splice(t,1)}}}(v,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==s.current||s.current(),s.current=void 0}}if(!p){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[v,c,n,t,p]);var g=o.useCallback((function(){d(!1)}),[]);return[_,p,g]};var o=n(7294),a=n(9311),u="function"===typeof IntersectionObserver;var l=new Map,i=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullAppTreeContext=t.AppTreeContext=t.AppRouterContext=void 0;var r,o=(r=n(7294))&&r.__esModule?r:{default:r};var a=o.default.createContext(null);t.AppRouterContext=a;var u=o.default.createContext(null);t.AppTreeContext=u;var l=o.default.createContext(null);t.FullAppTreeContext=l},2769:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var r=n(1799),o=n(5893),a=(n(6997),n(8975)),u=n.n(a),l=function(){return(0,o.jsx)("h1",{className:u()["primary-heading"],children:"Next.js light Starter"})},i=n(1664),c=n.n(i),s=n(2142),f=n(6650),p=n.n(f),d=function(){var e=[{path:s.V.$url().pathname,letter:"Primary Page",id:1},{path:s.V.secondary.$url().pathname,letter:"Secondary Page",id:2},{path:s.V.third.$url().pathname,letter:"Third Page",id:3},{path:s.V.blog_list._slug().$url().pathname,letter:"Blog Page",id:4}];return(0,o.jsx)("ul",{className:p().wrapper,children:e.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(c(),{href:"".concat(e.path),children:(0,o.jsx)("a",{className:p().link,children:e.letter})})},e.id)}))})},h=n(4748),v=n.n(h),_=function(){return(0,o.jsxs)("header",{className:v().wrapper,children:[(0,o.jsx)(l,{}),(0,o.jsx)(d,{})]})},g=n(7294),y=n(6092),m=n.n(y),b=function(){var e=(0,g.useState)(null),t=e[0],n=e[1];return(0,g.useEffect)((function(){n((new Date).getFullYear())}),[]),(0,o.jsx)("footer",{className:m().wrapper,children:(0,o.jsxs)("a",{href:"http://kojiyamauchi.com",target:"_blank",rel:"noreferrer",className:m().link,children:["\xa9 ",t," All The Small Things, All Rights Reserved."]})})},x=n(8258),j=n.n(x),w=function(e){var t=e.pages,n=e.children;return(0,o.jsxs)("div",{className:"".concat(t," ").concat(j().wrapper),children:[(0,o.jsx)(_,{}),(0,o.jsx)("main",{className:j()["main-content"],children:n}),(0,o.jsx)(b,{})]})},C=n(1272),O=n.n(C),P=function(e){var t=e.pages,n=e.children;return(0,o.jsxs)("div",{className:"".concat(t," ").concat(O().wrapper),children:[(0,o.jsx)(_,{}),(0,o.jsx)("main",{className:O()["main-content"],children:n}),(0,o.jsx)(b,{})]})},k=n(1163),M=n(5809),E=n.n(M),N=function(e){var t=e.pages,n=e.children,r=(0,k.useRouter)();return(0,o.jsxs)("div",{className:"".concat(t," ").concat(E().wrapper),children:[(0,o.jsx)(_,{}),(0,o.jsx)("main",{className:E()["main-content"],style:{backgroundImage:"".concat(r?'url("'.concat(r.basePath,'/webps/logo_cream.webp")'):'url("webps/logo_cream.webp")')},children:n}),(0,o.jsx)(b,{})]})},L=function(e){var t=e.pageProps,n=e.children;return function(e,t,n){switch(e){case"fixedLayout":return(0,o.jsx)(N,{pages:t,children:n});case"blogListLayout":return(0,o.jsx)(w,{pages:t,children:n});case"blogPostLayout":return(0,o.jsx)(P,{pages:t,children:n})}}(t.chooseLayout,t.pages,n)},R=function(e){var t=e.Component,n=e.pageProps,a=e.router;return console.info("\ud83d\udd0d Router Info from app.tsx:\n",a),(0,o.jsx)(L,{pageProps:n,children:(0,o.jsx)(t,(0,r.Z)({},n))})}},2142:function(e,t,n){"use strict";n.d(t,{V:function(){return r}});var r={$404:{$url:function(e){return{pathname:"/404",hash:null===e||void 0===e?void 0:e.hash}}},$500:{$url:function(e){return{pathname:"/500",hash:null===e||void 0===e?void 0:e.hash}}},blog_category:{_slug:function(e){return{$url:function(t){return{pathname:"/blog-category/[[...slug]]",query:{slug:e},hash:null===t||void 0===t?void 0:t.hash}}}}},blog_list:{_slug:function(e){return{$url:function(t){return{pathname:"/blog-list/[[...slug]]",query:{slug:e},hash:null===t||void 0===t?void 0:t.hash}}}}},blog_post:{_slug:function(e){return{$url:function(t){return{pathname:"/blog-post/[slug]",query:{slug:e},hash:null===t||void 0===t?void 0:t.hash}}}}},fourth:{$url:function(e){return{pathname:"/fourth",hash:null===e||void 0===e?void 0:e.hash}}},secondary:{$url:function(e){return{pathname:"/secondary",hash:null===e||void 0===e?void 0:e.hash}}},third:{$url:function(e){return{pathname:"/third",hash:null===e||void 0===e?void 0:e.hash}}},$url:function(e){return{pathname:"/",hash:null===e||void 0===e?void 0:e.hash}}}},8258:function(e){e.exports={wrapper:"style_wrapper__K2Y5Z","main-content":"style_main-content__8OCJv"}},1272:function(e){e.exports={wrapper:"style_wrapper__4igKC","main-content":"style_main-content__IkTcX"}},5809:function(e){e.exports={wrapper:"style_wrapper__cjfHY","main-content":"style_main-content__jIQP_"}},4748:function(e){e.exports={wrapper:"style_wrapper__Aq5Sm"}},6092:function(e){e.exports={wrapper:"style_wrapper__1AXK_",link:"style_link__6oHJW"}},8975:function(e){e.exports={"primary-heading":"style_primary-heading__TO0YH"}},6650:function(e){e.exports={wrapper:"style_wrapper__tqzli",link:"style_link__TFaOB"}},6997:function(){},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},1799:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}n.d(t,{Z:function(){return o}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(387)}));var n=e.O();_N_E=n}]);