"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[674],{9155:function(e,t,n){n.d(t,{Z:function(){return l}});var a="MoviesList_list__0Owr9",r="MoviesList_item__link__4hXTR",c="MoviesList_item__title__oqm0o",s="MoviesList_image__oyOXu",o=n(3504),i=n(6871),u=n(184),l=function(e){var t=e.movies,n=(0,i.TH)();return(0,u.jsx)(u.Fragment,{children:t&&(0,u.jsx)("ul",{className:a,children:t.map((function(e){var t;return(0,u.jsx)("li",{children:(0,u.jsxs)(o.rU,{className:r,to:"/movies/".concat(e.id),state:n,children:[(0,u.jsx)("h1",{className:c,children:null!==(t=e.title)&&void 0!==t?t:e.name}),(0,u.jsx)("img",{className:s,src:e.backdrop_path&&e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.backdrop_path?e.backdrop_path:e.poster_path):"../../images/No_Image_Available.jpg",alt:"title"})]})},e.id)}))})})}},9674:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(8152),r=n(2791),c=n(6871),s="SearchForm_form__o80os",o="SearchForm_input__HOxJo",i="SearchForm_button__UXY06",u=n(184),l=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],l=t[1],m=(0,c.s0)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m({search:"query=".concat(n)})},className:s,children:[(0,u.jsx)("input",{onChange:function(e){l(e.target.value)},type:"text",placeholder:"Let's find some movies",value:n,className:o}),(0,u.jsx)("button",{type:"submit",className:i,children:"Search"})]})})},m=n(9155),f=n(7142),h=function(){var e=(0,r.useState)([]),t=(0,a.Z)(e,2),n=t[0],s=t[1],o=(0,c.TH)();return(0,r.useEffect)((function(){var e=new URLSearchParams(o.search).get("query");e&&(0,f.UN)(e).then((function(e){return s(e.results)}))}),[o]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{}),(0,u.jsx)(m.Z,{movies:n})]})}},7142:function(e,t,n){n.d(t,{Jh:function(){return u},Pg:function(){return o},UN:function(){return i},_L:function(){return s},_r:function(){return l}});var a=n(4569),r=n.n(a),c="c2c2179bae59e0599504e4f54aeda7db";r().defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){return r().defaults.params={api_key:c},r().get("trending/all/day").then((function(e){return e.data})).catch((function(e){return e}))},o=function(e){return r().defaults.params={api_key:c},r().get("movie/".concat(e)).then((function(e){return e.data}))},i=function(e){return r().defaults.params={query:e,api_key:c},r().get("search/movie").then((function(e){return e.data})).catch((function(e){return console.log(e.message)}))},u=function(e){return r().defaults.params={api_key:c},r().get("movie/".concat(e,"/credits")).then((function(e){return e.data})).catch((function(e){return console.log(e.message)}))},l=function(e){return r().defaults.params={api_key:c},r().get("movie/".concat(e,"/reviews")).then((function(e){return e.data})).catch((function(e){return console.log(e.message)}))}}}]);
//# sourceMappingURL=674.8a845841.chunk.js.map