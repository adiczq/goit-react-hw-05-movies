"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{7692:function(e,t,r){r.d(t,{Z:function(){return i}});r(2791);var n=r(7689),a=r(1087),u="MovieItem_movie__FIDz9",c=r(184),i=function(e){var t=e.item,r=(0,n.TH)();return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{className:u,to:"/movies/".concat(t.id),state:{from:r},children:t.original_name||t.original_title})})}},5881:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(3433),a=r(9439),u=r(2791),c=r(7692),i=r(1686),s=r(1087),o=r(4390),l="Movies_list__hqYjd",f="Movies_form__4ow+Z",m="Movies_input__KrUqs",h="Movies_button__GcIka",p=r(184),v=function(){var e=(0,u.useState)(""),t=(0,a.Z)(e,2),r=t[0],v=t[1],_=(0,u.useState)([]),d=(0,a.Z)(_,2),x=d[0],g=d[1],j=(0,s.lr)(""),k=(0,a.Z)(j,2),w=k[0],y=k[1],b=(0,u.useState)(!1),q=(0,a.Z)(b,2),Z=q[0],M=q[1];return(0,u.useEffect)((function(){var e=w.get("query");e&&o.C("3/search/movie?query=".concat(e,"&")).then((function(e){0===e.results.length?M(!0):M(!1),g((0,n.Z)(e.results))})).catch((function(e){return console.log(e)}))}),[w]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("form",{className:f,onSubmit:function(e){if(e.preventDefault(),""===r.trim())return i.Notify.warning("Write a request!");y({query:r}),v("")},children:[(0,p.jsx)("input",{className:m,type:"text",name:"searchMovie",value:r,onChange:function(e){return v(e.currentTarget.value)}}),(0,p.jsx)("button",{className:h,children:"Search"})]}),(0,p.jsx)("ul",{className:l,children:x.map((function(e){return(0,p.jsx)(c.Z,{item:e},e.id)}))}),Z?(0,p.jsxs)("p",{children:['There are no movies with the name "',w.get("query"),'".']}):null]})}},4390:function(e,t,r){r.d(t,{C:function(){return s}});var n=r(5861),a=r(7757),u=r.n(a),c=r(2007),i=r.n(c),s=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/").concat(t,"api_key=").concat("432d0a09cce951285c1f7d7c54617eee"));case 2:if(!(r=e.sent).ok){e.next=5;break}return e.abrupt("return",r.json());case 5:return e.next=7,Promise.reject(new Error("error"));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();s.propTypes={query:i().string.isRequired}}}]);
//# sourceMappingURL=881.3dd1d012.chunk.js.map