"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[273],{8286:function(n,e,t){t.d(e,{Y:function(){return a}});var r=t(4569),a=t.n(r)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e98b0e0d9b862c3ddb556a3bb2ced479"}})},5273:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,a,c,i,o=t(5861),s=t(885),p=t(4687),u=t.n(p),l=t(6871),d=t(2791),m=t(6066),f=t(168),h=t(6088),x=h.Z.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  justify-content: center;\n  margin: -5px;\n"]))),g=h.Z.li(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: baseline;\n  max-width: 80px;\n  margin: 5px;\n  flex-grow: 1;\n"]))),w=h.Z.img(c||(c=(0,f.Z)(["\n  display: block;\n  max-width: 100%;\n  height: auto;\n  margin-bottom: 3px;\n"]))),v=h.Z.p(i||(i=(0,f.Z)(["\n  display: block;\n  text-align: center;\n  font-size: 10px;\n  color: ",";\n"])),(function(n){return n.theme.colors.primaryColor})),b=t(184),k=function(n){var e=n.credits;return(0,b.jsx)("div",{children:(0,b.jsx)(x,{children:e.map((function(n){return(0,b.jsxs)(g,{children:[(0,b.jsx)(w,{src:n.profile_path?"https://image.tmdb.org/t/p/w500"+n.profile_path:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",alt:""}),(0,b.jsx)(v,{children:n.name})]},n.credit_id)}))})})},y=t(8286),Z=function(){var n=(0,o.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.Y.get("/movie/".concat(e,"/credits"));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),m.Am.error("Sorry, something went wrong ".concat(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),j=function(){var n=(0,d.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,l.UO)().movieId;return(0,d.useEffect)((function(){function n(){return(n=(0,o.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z(a);case 3:e=n.sent,t=e.data.cast,r(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),m.Am.info("Something went wrong ".concat(n.t0));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[a]),(0,b.jsx)(b.Fragment,{children:t&&(0,b.jsx)(k,{credits:t})})}}}]);
//# sourceMappingURL=273.029daaf5.chunk.js.map