"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[674],{9155:function(t,e,r){r.d(e,{Z:function(){return f}});var n="MoviesList_list__0Owr9",a="MoviesList_item__link__4hXTR",c="MoviesList_item__title__oqm0o",u="MoviesList_image__oyOXu",s=r(3504),i=r(6871),o=r(4899),p=r(184),f=function(t){var e=t.movies,r=(0,i.TH)();return(0,p.jsx)(p.Fragment,{children:e&&(0,p.jsx)("ul",{className:n,children:e.map((function(t){var e;return(0,p.jsx)("li",{children:(0,p.jsxs)(s.rU,{className:a,to:"/movies/".concat(t.id),state:r,children:[(0,p.jsx)("h1",{className:c,children:null!==(e=t.title)&&void 0!==e?e:t.name}),(0,p.jsx)("img",{className:u,src:t.backdrop_path||t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.backdrop_path?t.backdrop_path:t.poster_path):o,alt:"title"})]})},t.id)}))})})}},9674:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(8152),a=r(2791),c=r(6871),u="SearchForm_form__o80os",s="SearchForm_input__HOxJo",i="SearchForm_button__UXY06",o=r(184),p=function(){var t=(0,a.useState)(""),e=(0,n.Z)(t,2),r=e[0],p=e[1],f=(0,c.s0)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),f({search:"query=".concat(r)})},className:u,children:[(0,o.jsx)("input",{onChange:function(t){p(t.target.value)},type:"text",placeholder:"Let's find some movies",value:r,className:s}),(0,o.jsx)("button",{type:"submit",className:i,children:"Search"})]})})},f=r(9155),m=r(7142),h=function(){var t=(0,a.useState)([]),e=(0,n.Z)(t,2),r=e[0],u=e[1],s=(0,c.TH)();return(0,a.useEffect)((function(){var t=new URLSearchParams(s.search).get("query");t&&(0,m.UN)(t).then((function(t){return u(t.results)}))}),[s]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p,{}),(0,o.jsx)(f.Z,{movies:r})]})}},7142:function(t,e,r){r.d(e,{Jh:function(){return f},Pg:function(){return o},UN:function(){return p},_L:function(){return i},_r:function(){return m}});var n=r(5861),a=r(7757),c=r.n(a),u=r(4569),s=r.n(u)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"c2c2179bae59e0599504e4f54aeda7db"}}),i=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("trending/all/day");case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("search/movie?query=".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},4899:function(t,e,r){t.exports=r.p+"static/media/No-Image-Placeholder.baba1a7394e8054d69cf.png"}}]);
//# sourceMappingURL=674.6513f8b3.chunk.js.map