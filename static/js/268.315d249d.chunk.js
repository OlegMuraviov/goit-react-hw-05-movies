"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[268],{8268:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,{default:function(){return b}});var c=n(8152),s="MovieDetails_title__RBndM",o="MovieDetails_score__67zDg",u=n(6871),l=n(184),f=function(){var e=(0,u.TH)(),t=(0,u.s0)();return(0,l.jsx)("button",{type:"button",onClick:function(){t(e.state)},style:{margin:"5px auto",padding:"5px",cursor:"pointer"},children:"Go back"})},d=n(3504),h="AdditionalInformation_title__xnYXR",p="AdditionalInformation_item__tIM3m",m=function(){var e=(0,u.TH)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{className:h,children:"Additional Information"}),(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)(d.rU,{to:"cast",state:e.state,className:p,children:"Cast"}),(0,l.jsx)(d.rU,{to:"reviews",state:e.state,className:p,children:"Reviews"})]})]})},j=function(e){var t=e.movie;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f,{}),(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.backdrop_path?t.backdrop_path:t.poster_path),alt:"title"}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("h1",{className:s,children:[t.title,"(",t.release_date.slice(0,t.release_date.indexOf("-")),")"]}),(0,l.jsxs)("span",{className:o,children:["User score: ",10*t.vote_average,"%"]}),(0,l.jsx)("h2",{className:s,children:"Overview"}),(0,l.jsx)("p",{className:o,children:t.overview}),(0,l.jsx)("h2",{className:s,children:"Genres"}),(0,l.jsx)("span",{className:o,children:t.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,l.jsx)(m,{id:t.id}),(0,l.jsx)(u.j3,{})]})},g=n(7142),v=n(2791),b=function(){var e=(0,v.useState)({content:null,loading:!1,error:null}),t=(0,c.Z)(e,2),n=t[0],r=t[1],a=(0,u.UO)().movieId;(0,v.useEffect)((function(){(0,g.Pg)(a).then((function(e){r((function(t){return i(i({},t),{},{content:e})}))})).catch((function(e){r((function(t){return i(i({},t),{},{error:e.message})}))})).finally((function(){}))}),[a]);return(0,l.jsx)(l.Fragment,{children:n.error?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f,{}),(0,l.jsx)("h2",{children:"Server didn't find info about this movie"})]}):n.content&&(0,l.jsx)(j,{movie:n.content})})}},7142:function(e,t,n){n.d(t,{Jh:function(){return u},Pg:function(){return s},UN:function(){return o},_L:function(){return c},_r:function(){return l}});var r=n(4569),a=n.n(r),i="c2c2179bae59e0599504e4f54aeda7db";a().defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){return a().defaults.params={api_key:i},a().get("trending/all/day").then((function(e){return e.data})).catch((function(e){return e}))},s=function(e){return a().defaults.params={api_key:i},a().get("movie/".concat(e)).then((function(e){return e.data}))},o=function(e){return a().defaults.params={query:e,api_key:i},a().get("search/movie").then((function(e){return e.data})).catch((function(e){return console.log(e.message)}))},u=function(e){return a().defaults.params={api_key:i},a().get("movie/".concat(e,"/credits")).then((function(e){return e.data})).catch((function(e){return console.log(e.message)}))},l=function(e){return a().defaults.params={api_key:i},a().get("movie/".concat(e,"/reviews")).then((function(e){return e.data})).catch((function(e){return console.log(e.message)}))}}}]);
//# sourceMappingURL=268.315d249d.chunk.js.map