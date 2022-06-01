"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[268],{8268:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,{default:function(){return x}});var c=n(8152),s="MovieDetails_title__RBndM",o="MovieDetails_score__67zDg",u="MovieDetails_image__tPD8f",l=n(6871),f=n(184),d=function(){var e=(0,l.TH)(),t=(0,l.s0)();return(0,f.jsx)("button",{type:"button",onClick:function(){t(e.state)},style:{margin:"5px auto",padding:"5px",cursor:"pointer"},children:"Go back"})},p=n(3504),h="AdditionalInformation_title__xnYXR",m="AdditionalInformation_item__tIM3m",g=function(){var e=(0,l.TH)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h3",{className:h,children:"Additional Information"}),(0,f.jsxs)("div",{style:{display:"flex"},children:[(0,f.jsx)(p.rU,{to:"cast",state:e.state,className:m,children:"Cast"}),(0,f.jsx)(p.rU,{to:"reviews",state:e.state,className:m,children:"Reviews"})]})]})},j=n(4899),v=function(e){var t=e.movie;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d,{}),(0,f.jsxs)("div",{style:{display:"flex"},children:[(0,f.jsx)("img",{className:u,src:t.backdrop_path||t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.backdrop_path?t.backdrop_path:t.poster_path):j,alt:"title"}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h1",{className:s,children:[t.title,"(",t.release_date.slice(0,t.release_date.indexOf("-")),")"]}),(0,f.jsxs)("span",{className:o,children:["User score: ",10*t.vote_average,"%"]}),(0,f.jsx)("h2",{className:s,children:"Overview"}),(0,f.jsx)("p",{className:o,children:t.overview}),(0,f.jsx)("h2",{className:s,children:"Genres"}),(0,f.jsx)("span",{className:o,children:t.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,f.jsx)(g,{id:t.id}),(0,f.jsx)(l.j3,{})]})},b=n(7142),_=n(2791),x=function(){var e=(0,_.useState)({content:null,loading:!1,error:null}),t=(0,c.Z)(e,2),n=t[0],r=t[1],a=(0,l.UO)().movieId;(0,_.useEffect)((function(){(0,b.Pg)(a).then((function(e){r((function(t){return i(i({},t),{},{content:e})}))})).catch((function(e){r((function(t){return i(i({},t),{},{error:e.message})}))})).finally((function(){}))}),[a]);return(0,f.jsx)(f.Fragment,{children:n.error?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d,{}),(0,f.jsx)("h2",{children:"Server didn't find info about this movie"})]}):n.content&&(0,f.jsx)(v,{movie:n.content})})}},7142:function(e,t,n){n.d(t,{Jh:function(){return u},Pg:function(){return s},UN:function(){return o},_L:function(){return c},_r:function(){return l}});var r=n(4569),a=n.n(r),i="c2c2179bae59e0599504e4f54aeda7db";a().defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){return a().defaults.params={api_key:i},a().get("trending/all/day").then((function(e){return e.data})).catch((function(e){return e}))},s=function(e){return a().defaults.params={api_key:i},a().get("movie/".concat(e)).then((function(e){return e.data}))},o=function(e){return a().defaults.params={query:e,api_key:i},a().get("search/movie").then((function(e){return e.data})).catch((function(e){return console.log(e.message)}))},u=function(e){return a().defaults.params={api_key:i},a().get("movie/".concat(e,"/credits")).then((function(e){return e.data})).catch((function(e){return console.log(e.message)}))},l=function(e){return a().defaults.params={api_key:i},a().get("movie/".concat(e,"/reviews")).then((function(e){return e.data})).catch((function(e){return console.log(e.message)}))}},4899:function(e,t,n){e.exports=n.p+"static/media/No-Image-Placeholder.baba1a7394e8054d69cf.png"}}]);
//# sourceMappingURL=268.461a755e.chunk.js.map