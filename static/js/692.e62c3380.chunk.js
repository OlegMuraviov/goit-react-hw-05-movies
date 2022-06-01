"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[692],{9155:function(e,t,r){r.d(t,{Z:function(){return l}});var n="MoviesList_list__0Owr9",a="MoviesList_item__eePYv",c="MoviesList_item__link__4hXTR",i="MoviesList_item__title__oqm0o",u="MoviesList_image__oyOXu",o=r(3504),s=r(6871),p=r(4899),f=r(184),l=function(e){var t=e.movies,r=(0,s.TH)();return(0,f.jsx)(f.Fragment,{children:t&&(0,f.jsx)("ul",{className:n,children:t.map((function(e){var t;return(0,f.jsx)("li",{className:a,children:(0,f.jsxs)(o.rU,{className:c,to:"/movies/".concat(e.id),state:r,children:[(0,f.jsx)("h1",{className:i,children:null!==(t=e.title)&&void 0!==t?t:e.name}),(0,f.jsx)("img",{className:u,src:e.backdrop_path||e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.backdrop_path?e.backdrop_path:e.poster_path):p,alt:"title"})]})},e.id)}))})})}},1692:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(8683),a=r(5861),c=r(8152),i=r(7757),u=r.n(i),o="HomePage_title__G4sQi",s=r(9155),p=r(7142),f=r(2791),l=r(184),d=function(){var e=(0,f.useState)({data:[],loading:!1,error:null}),t=(0,c.Z)(e,2),r=t[0],i=t[1];(0,f.useEffect)((function(){var e=function(){var e=(0,a.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loading:!0})})),e.next=4,(0,p._L)();case 4:t=e.sent,i((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loading:!1,data:t.results})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),i((function(t){return(0,n.Z)((0,n.Z)({},t),{},{loading:!1,error:e.t0.message})}));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var d=r.data,v=r.loading;return(0,l.jsxs)(l.Fragment,{children:[v&&(0,l.jsx)("p",{children:"...loading"}),(0,l.jsx)("h1",{className:o,children:"Trending today"}),(0,l.jsx)(s.Z,{movies:d})]})}},7142:function(e,t,r){r.d(t,{Jh:function(){return f},Pg:function(){return s},UN:function(){return p},_L:function(){return o},_r:function(){return l}});var n=r(5861),a=r(7757),c=r.n(a),i=r(4569),u=r.n(i)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"c2c2179bae59e0599504e4f54aeda7db"}}),o=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("trending/all/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("search/movie?query=".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},4899:function(e,t,r){e.exports=r.p+"static/media/No-Image-Placeholder.baba1a7394e8054d69cf.png"},8683:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=692.e62c3380.chunk.js.map