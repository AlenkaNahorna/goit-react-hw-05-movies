"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[273],{8286:function(e,n,t){t.d(n,{Y:function(){return a}});var r=t(4569),a=t.n(r)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e98b0e0d9b862c3ddb556a3bb2ced479"}})},5273:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r,a,c,i,o=t(5861),s=t(885),u=t(4687),p=t.n(u),l=t(6871),m=t(2791),f=t(6066),d=t(168),h=t(6088),x=h.Z.ul(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  justify-content: center;\n  margin: -5px;\n"]))),g=h.Z.li(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: baseline;\n  max-width: 80px;\n  margin: ",";\n  flex-grow: 1;\n"])),(function(e){return e.theme.space.m})),w=h.Z.img(c||(c=(0,d.Z)(["\n  display: block;\n  max-width: 100%;\n  height: auto;\n  margin-bottom: ",";\n"])),(function(e){return e.theme.space.m})),v=h.Z.p(i||(i=(0,d.Z)(["\n  display: block;\n  text-align: center;\n  font-size: 10px;\n  color: ",";\n"])),(function(e){return e.theme.colors.primaryColor})),b=t(184),k=function(e){var n=e.credits;return(0,b.jsx)("div",{children:(0,b.jsx)(x,{children:n.map((function(e){return(0,b.jsxs)(g,{children:[(0,b.jsx)(w,{src:e.profile_path?"https://image.tmdb.org/t/p/w500"+e.profile_path:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",alt:""}),(0,b.jsx)(v,{children:e.name})]},e.credit_id)}))})})},y=t(8286),Z=function(){var e=(0,o.Z)(p().mark((function e(n){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.Y.get("/movie/".concat(n,"/credits"));case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),f.Am.error("Sorry, something went wrong ".concat(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),j=function(){var e=(0,m.useState)([]),n=(0,s.Z)(e,2),t=n[0],r=n[1],a=(0,l.UO)().movieId;return(0,m.useEffect)((function(){function e(){return(e=(0,o.Z)(p().mark((function e(){var n,t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z(a);case 3:n=e.sent,t=n.data.cast,r(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f.Am.info("Something went wrong ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),(0,b.jsx)(b.Fragment,{children:t&&(0,b.jsx)(k,{credits:t})})}}}]);
//# sourceMappingURL=273.e575c100.chunk.js.map