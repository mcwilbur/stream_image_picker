(function(t){function e(e){for(var n,l,i=e[0],u=e[1],s=e[2],f=0,p=[];f<i.length;f++)l=i[f],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&p.push(a[l][0]),a[l]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=r[0]))}return t}var n={},a={app:0},o=[];function l(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=n,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/stream_image_picker/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var c=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"0ba2":function(t,e,r){"use strict";var n=r("6d3e"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),r("router-view")],1)},o=[],l=(r("034f"),r("2877")),i={},u=Object(l["a"])(i,a,o,!1,null,null,null),s=u.exports,c=r("8c4f"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home container"},[r("CardList"),r("div",{staticClass:"row"},[r("PlayerDetails",{attrs:{title:t.leftPlayer}}),r("PlayerDetails",{attrs:{title:t.rightPlayer}})],1),r("div",{staticClass:"row"})],1)},p=[],d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div")},v=[],m={name:"CardList",props:{msg:String}},b=m,y=Object(l["a"])(b,d,v,!1,null,null,null),h=y.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"player border rounded"},[r("h3",[t._v(t._s(t.title))]),r("div",{staticClass:"form-group"},[r("label",[t._v("Player name :")]),r("input",t._b({staticClass:"form-control"},"input",t.name,!1)),r("label",[t._v("Deck :")]),r("input",t._b({staticClass:"form-control"},"input",t.deck,!1)),r("label",[t._v("Score :")]),r("input",t._b({staticClass:"form-control"},"input",t.score,!1))])])},g=[],P={name:"PlayerDetails",data:function(){return{name:"",deck:"",score:""}},props:{title:String}},w=P,O=(r("0ba2"),Object(l["a"])(w,_,g,!1,null,null,null)),j=O.exports,C={name:"Home",components:{CardList:h,PlayerDetails:j},data:function(){return{rightPlayer:"Right Player",leftPlayer:"Left Player"}}},x=C,S=Object(l["a"])(x,f,p,!1,null,null,null),k=S.exports;n["a"].use(c["a"]);var D=[{path:"/",name:"Home",component:k}],$=new c["a"]({routes:D}),E=$,L=r("2f62");n["a"].use(L["a"]);var M=new L["a"].Store({state:{},mutations:{},actions:{},modules:{}});r("4989"),r("f9e3");n["a"].config.productionTip=!1,new n["a"]({router:E,store:M,render:function(t){return t(s)}}).$mount("#app")},"6d3e":function(t,e,r){},"85ec":function(t,e,r){}});
//# sourceMappingURL=app.cff8828a.js.map