(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[945],{7213:function(e,t,s){"use strict";s.d(t,{p:function(){return l}});var n=s(5893),r=s(455),a=s.n(r),l=function(e){var t=e.title,s=e.date;return(0,n.jsxs)("div",{className:a().wrapper,children:[(0,n.jsx)("h2",{className:a()["title-heading"],children:t}),(0,n.jsx)("p",{className:a().date,children:s})]})}},9670:function(e,t,s){"use strict";s.d(t,{T:function(){return l}});var n=s(5893),r=s(9124),a=s.n(r),l=function(e){var t=e.branches,s=e.allPostIndex,r=e.categorySlug,l=e.categoryListIndex,i=e.storybook;return(0,n.jsx)(n.Fragment,{children:"all"===t?(0,n.jsxs)("h1",{className:"".concat(a()["blog-list-heading"]," ").concat(a()["all-list-heading"]," ").concat(i?a()["is-storybook"]:""),children:["All Post #",s]}):(0,n.jsxs)("h1",{className:"".concat(a()["blog-list-heading"]," ").concat(a()["category-list-heading"]," ").concat(i?a()["is-storybook"]:""),children:[r,"\u2019s Post #",l]})})}},9145:function(e,t,s){"use strict";s.d(t,{O:function(){return i}});var n=s(5893),r=s(1664),a=s(694),l=s.n(a),i=function(e){var t=e.category,s=e.pageIndex,a=e.isFirst,i=e.isLast,o=e.storybook,c=t?"/blog-category/".concat(t,"/"):"/blog-list/";return(0,n.jsxs)("ul",{className:"".concat(l().wrapper," ").concat(o?l()["is-storybook"]:""),children:[!a&&(0,n.jsx)("li",{className:l().prev,children:(0,n.jsx)(r.default,{href:"".concat(c).concat(2===s?"":s-1),children:(0,n.jsx)("a",{rel:"prev",className:l()["prev-link"],children:"New."})})}),!i&&(0,n.jsx)("li",{className:l().next,children:(0,n.jsx)(r.default,{href:"".concat(c).concat(s+1),children:(0,n.jsx)("a",{rel:"prev",className:l()["next-link"],children:"Old."})})})]})}},3604:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return d}});var n=s(5893),r=s(1664),a=s(1163),l=s(2578),i=s(9670),o=s(7213),c=s(9145),u=s(5624),d=!0;t.default=function(e){var t=e.numberPostsDisplayed,s=e.totalPage,d=e.posts,_=(0,a.useRouter)(),h=_.query.slug&&"index"!==_.query.slug[0]?Number(_.query.slug):1,p=(h-1)*t,x=h*t,g=1===h,f=h===s;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.H,{title:"All Post - Page ".concat(h),description:"This is All Post - Page ".concat(h,"."),locationPath:_.asPath}),(0,n.jsx)(i.T,{branches:"all",allPostIndex:h}),d.map((function(e,t){return t>=p&&t<x&&(0,n.jsx)(r.default,{href:"/blog-post/".concat(e.slug),children:(0,n.jsx)("a",{children:(0,n.jsxs)("article",{children:[(0,n.jsx)(u.E,{image:e.image,extension:"webp",altProps:e.image,mobileMaxWidth:"200px",desktopMaxWidth:"300px",margin:"0 0 5px 0"}),(0,n.jsx)(o.p,{title:e.title,date:e.date})]})})},t)})),(0,n.jsx)(c.O,{pageIndex:h,isFirst:g,isLast:f})]})}},7975:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog-list/[[...slug]]",function(){return s(3604)}])},455:function(e){e.exports={wrapper:"style_wrapper__mzHI9","title-heading":"style_title-heading__2GZuX",date:"style_date__35V10"}},9124:function(e){e.exports={"blog-list-heading":"style_blog-list-heading__1dvBX","is-storybook":"style_is-storybook__VJk_F"}},694:function(e){e.exports={wrapper:"style_wrapper__Y3T4b",prev:"style_prev__32IsP","prev-link":"style_prev-link__1HzrJ",next:"style_next__1knWl","next-link":"style_next-link__3_9G1","is-storybook":"style_is-storybook__1frbk"}}},function(e){e.O(0,[539,774,888,179],(function(){return t=7975,e(e.s=t);var t}));var t=e.O();_N_E=t}]);