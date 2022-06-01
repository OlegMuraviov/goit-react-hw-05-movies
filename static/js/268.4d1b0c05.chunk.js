"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[268],{8268:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t),r.d(t,{default:function(){return _}});var s=r(8152),i="MovieDetails_title__RBndM",o="MovieDetails_score__67zDg",u="MovieDetails_image__tPD8f",l=r(6871),p=r(184),f=function(){var e=(0,l.TH)(),t=(0,l.s0)();return(0,p.jsx)("button",{type:"button",onClick:function(){t(e.state)},style:{margin:"5px auto",padding:"5px",cursor:"pointer"},children:"Go back"})},d=r(3504),h="AdditionalInformation_title__xnYXR",m="AdditionalInformation_item__tIM3m",v=function(){var e=(0,l.TH)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h3",{className:h,children:"Additional Information"}),(0,p.jsxs)("div",{style:{display:"flex"},children:[(0,p.jsx)(d.rU,{to:"cast",state:e.state,className:m,children:"Cast"}),(0,p.jsx)(d.rU,{to:"reviews",state:e.state,className:m,children:"Reviews"})]})]})},x=r(4899),b=function(e){var t=e.movie;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f,{}),(0,p.jsxs)("div",{style:{display:"flex"},children:[(0,p.jsx)("img",{className:u,src:t.backdrop_path||t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.backdrop_path?t.backdrop_path:t.poster_path):x,alt:"title"}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("h1",{className:i,children:[t.title,"(",t.release_date.slice(0,t.release_date.indexOf("-")),")"]}),(0,p.jsxs)("span",{className:o,children:["User score: ",10*t.vote_average,"%"]}),(0,p.jsx)("h2",{className:i,children:"Overview"}),(0,p.jsx)("p",{className:o,children:t.overview}),(0,p.jsx)("h2",{className:i,children:"Genres"}),(0,p.jsx)("span",{className:o,children:t.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,p.jsx)(v,{id:t.id}),(0,p.jsx)(l.j3,{})]})},j=r(7142),g=r(2791),_=function(){var e=(0,g.useState)({content:null,loading:!1,error:null}),t=(0,s.Z)(e,2),r=t[0],n=t[1],a=(0,l.UO)().movieId;(0,g.useEffect)((function(){(0,j.Pg)(a).then((function(e){n((function(t){return c(c({},t),{},{content:e})}))})).catch((function(e){n((function(t){return c(c({},t),{},{error:e.message})}))})).finally((function(){}))}),[a]);return(0,p.jsx)(p.Fragment,{children:r.error?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f,{}),(0,p.jsx)("h2",{children:"Server didn't find info about this movie"})]}):r.content&&(0,p.jsx)(b,{movie:r.content})})}},7142:function(e,t,r){r.d(t,{Jh:function(){return p},Pg:function(){return u},UN:function(){return l},_L:function(){return o},_r:function(){return f}});var n=r(5861),a=r(7757),c=r.n(a),s=r(4569),i=r.n(s)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"c2c2179bae59e0599504e4f54aeda7db"}}),o=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("trending/all/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("search/movie?query=".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},4899:function(e,t,r){e.exports=r.p+"static/media/No-Image-Placeholder.baba1a7394e8054d69cf.png"}}]);
//# sourceMappingURL=268.4d1b0c05.chunk.js.map