(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var i=c(6),a=c.n(i),n=(c(13),c(8)),s=c(2),r=c(1),l=(c(14),c(15),c(16),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},j=(c(18),c(7)),m=c.n(j),b="https://www.omdbapi.com/?apikey=".concat("ff4a35a4");var u=function(e){var t=e.addMovie,c=Object(r.useState)(""),i=Object(s.a)(c,2),a=i[0],n=i[1],d=Object(r.useState)(!1),j=Object(s.a)(d,2),u=j[0],h=j[1],v=Object(r.useState)(!1),O=Object(s.a)(v,2),x=O[0],f=O[1],p=Object(r.useState)(null),N=Object(s.a)(p,2),g=N[0],y=N[1],w=function(){f(!0),function(e){return fetch("".concat(b,"&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(a).then((function(e){return"Error"in e?Promise.reject():(y({title:e.Title,description:e.Plot,imgUrl:"N/A"===e.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":e.Poster,imdbUrl:"https://www.imdb.com/title/".concat(e.imdbID),imdbId:e.imdbID}),Promise.resolve())})).catch((function(){return h(!0)})).finally((function(){return f(!1)}))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){return e.preventDefault()},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:a,onChange:function(e){n(e.target.value),h(!1)}})}),u&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:m()("button is-light",{"is-loading":x}),disabled:!a,onClick:function(){return w()},children:g?"Search again":"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:g&&Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){return g&&t(g),n(""),void y(null)},children:"Add to the list"})})]})]}),g&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:g})]})]})},h=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(u,{addMovie:function(e){c.find((function(t){return t.imdbId===e.imdbId}))||i((function(t){return[].concat(Object(n.a)(t),[e])}))}})})]})};a.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.8adfddf7.chunk.js.map