"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[607],{1616:function(n,t,e){e.d(t,{o:function(){return o}});var r,a=e(8379),c=e(168),u=e(6444).ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n"]))),i=e(184),o=function(){return(0,i.jsx)(u,{role:"alert",children:(0,i.jsx)("img",{src:a,width:"600",alt:"error"})})}},6607:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,a,c=e(885),u=e(2791),i=e(7689),o=e(5351),s=e(168),p=e(6444),f=p.ZP.ul(r||(r=(0,s.Z)(["\n  list-style-type: disclosure-open;\n  margin-left: 20px;\n  & li {\n    margin-bottom: 20px;\n  }\n  & li span {\n    font-weight: 500;\n  }\n"]))),l=p.ZP.p(a||(a=(0,s.Z)(["\n   font-size: 20px;\n   font-weight: 600;\n   margin-top: 10px;\n"]))),d=e(7793),h=e(1616),v=e(184),x=function(){var n=(0,i.UO)().movieId,t=(0,u.useState)(null),e=(0,c.Z)(t,2),r=e[0],a=e[1],s=(0,u.useState)(null),p=(0,c.Z)(s,2),x=p[0],m=p[1],w=(0,u.useState)(!1),Z=(0,c.Z)(w,2),g=Z[0],y=Z[1];return(0,u.useEffect)((function(){y(!0),(0,o.Hx)(n).then((function(n){0!==n.length&&a(n)})).catch((function(n){m({error:n})})).finally((function(){return y(!1)}))}),[n]),(0,v.jsxs)(f,{children:[g&&(0,v.jsx)(d.a,{}),x&&(0,v.jsx)(h.o,{}),r?r.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,v.jsxs)("li",{children:[(0,v.jsxs)("span",{children:[" Author: ",e]}),(0,v.jsx)("p",{children:r})]},t)})):(0,v.jsx)(l,{children:"We don't have any reviews for this movie."})]})}},5351:function(n,t,e){e.d(t,{AR:function(){return s},Hx:function(){return l},L2:function(){return o},WK:function(){return p},Y5:function(){return f},xc:function(){return d}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1044),i="67411ce4d5e0b6db7c1c44c04cce0d92";u.ZP.defaults.baseURL="https://api.themoviedb.org/3";var o="https://image.tmdb.org/t/p/w300",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},8379:function(n,t,e){n.exports=e.p+"static/media/error.c5ffe80c8c7486107209.webp"}}]);
//# sourceMappingURL=607.e1163b44.chunk.js.map