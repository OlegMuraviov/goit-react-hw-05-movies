"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(n,e,t){t.r(e);var r=t(8152),a=t(7142),u=t(2791),c=t(6871),i=t(184);e.default=function(){var n=(0,c.UO)().movieId,e=(0,u.useState)([]),t=(0,r.Z)(e,2),o=t[0],s=t[1];return(0,u.useEffect)((function(){(0,a._r)(n).then((function(n){s(n.results)})).catch((function(n){return console.log(n)})).finally((function(){}))}),[n]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:"Reviews"}),(0,i.jsx)("ul",{children:o.length?o.map((function(n){return(0,i.jsx)("li",{children:n.content},n.id)})):(0,i.jsx)("li",{children:(0,i.jsx)("p",{children:"No reviews"})})})]})}},7142:function(n,e,t){t.d(e,{Jh:function(){return s},Pg:function(){return i},UN:function(){return o},_L:function(){return c},_r:function(){return f}});var r=t(4569),a=t.n(r),u="c2c2179bae59e0599504e4f54aeda7db";a().defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){return a().defaults.params={api_key:u},a().get("trending/all/day").then((function(n){return n.data})).catch((function(n){return n}))},i=function(n){return a().defaults.params={api_key:u},a().get("movie/".concat(n)).then((function(n){return n.data}))},o=function(n){return a().defaults.params={query:n,api_key:u},a().get("search/movie").then((function(n){return n.data})).catch((function(n){return console.log(n.message)}))},s=function(n){return a().defaults.params={api_key:u},a().get("movie/".concat(n,"/credits")).then((function(n){return n.data})).catch((function(n){return console.log(n.message)}))},f=function(n){return a().defaults.params={api_key:u},a().get("movie/".concat(n,"/reviews")).then((function(n){return n.data})).catch((function(n){return console.log(n.message)}))}}}]);
//# sourceMappingURL=186.2d0d5a5d.chunk.js.map