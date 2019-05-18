(function(t){function e(e){for(var o,i,c=e[0],a=e[1],l=e[2],p=0,f=[];p<c.length;p++)i=c[p],s[i]&&f.push(s[i][0]),s[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],o=!0,c=1;c<r.length;c++){var a=r[c];0!==s[a]&&(o=!1)}o&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},s={app:0},n=[];function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-progress-icon/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=a;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var o=r("64a9"),s=r.n(o);s.a},"2c4f":function(t,e,r){"use strict";var o=r("71c1"),s=r.n(o);s.a},"3d1c":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var o=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("demo")],1)},n=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"demo"},[r("progress-icon",{staticClass:"demo-medium",attrs:{progress:t.progress4,direction:"horizontal"}},[r("i",{staticClass:"fas fa-battery-full"})]),r("progress-icon",{staticClass:"demo-big",attrs:{progress:t.progress3}},[r("i",{staticClass:"fas fa-signature"})]),r("progress-icon",{staticClass:"demo-small",attrs:{direction:"horizontal",steps:5,progress:t.progress1}},[r("i",{staticClass:"fas fa-signal"})]),r("br"),t._l([1,2,3,4,5],function(e){return[r("progress-icon",{key:e,staticClass:"demo-small",attrs:{progress:t.progress2,color:"red"}},[r("i",{staticClass:"fas fa-biohazard"})])]}),r("br"),r("progress-icon",{staticClass:"demo-big",attrs:{color:"rgb("+t.colorVal(t.colorR)+", "+t.colorVal(t.colorG)+", "+t.colorVal(t.colorB)+")",progress:t.progress3}},[r("i",{staticClass:"fas fa-bomb"})])],2)},c=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"root",staticClass:"progress-icon"},[r("div",{ref:"measureContainer",staticClass:"bg"},[t._t("default")],2),r("div",{staticClass:"fg",style:{clip:t.clipRect,color:t.color}},[t._t("default")],2)])},l=[],u=(r("c5f6"),{name:"progress-icon",props:{progress:{type:Number,default:0},steps:{type:Number,default:0},color:{type:String,default:"lightgreen"},vscale:{type:Number,default:1.15},direction:{type:String,default:"vertical"}},computed:{clipRect:function(){var t=this.measureSlotContent(this.progress);if(!t)return"inherit";this.adjustRoot(t);var e=t.height,r=t.width,o=e*this.vscale,s=(o-e)/2,n=this.direction,i=this.progress;if(this.steps){var c=100/this.steps;i=Math.ceil(i/c)*c}var a="vertical"===n?o-o*i/100:0,l="horizontal"===n?r*i/100:r;return"rect(".concat(a-s,"px,").concat(l,"px,").concat(o,"px,0px)")}},methods:{measureSlotContent:function(){var t=this.$refs.measureContainer,e=t&&t.firstChild;if(e)return{height:e.clientHeight,width:e.clientWidth}},adjustRoot:function(t){var e=this.$refs.root;if(e&&t){var r=t.height,o=t.width;e.clientHeight!==r&&(e.style.height=r+"px"),e.clientWidth!==o&&(e.style.width=o+"px")}}}}),p=u,f=(r("2c4f"),r("2877")),d=Object(f["a"])(p,a,l,!1,null,"443aa81b",null),g=d.exports,h=r("5118"),v={name:"demo",components:{ProgressIcon:g},data:function(){return{progress1:0,progress2:0,progress3:0,progress4:0,colorR:0,colorG:0,colorB:0}},mounted:function(){var t=this;Object(h["setInterval"])(function(){t.progress1=(t.progress1+1)%100},10),Object(h["setInterval"])(function(){t.progress2=(t.progress2+1)%100},4),Object(h["setInterval"])(function(){t.progress3=(t.progress3+1)%100},42),Object(h["setInterval"])(function(){t.progress4=(t.progress4+1)%100},100),Object(h["setInterval"])(function(){t.colorR=(t.colorR+1)%512},10),Object(h["setInterval"])(function(){t.colorG=(t.colorG+1)%512},20),Object(h["setInterval"])(function(){t.colorB=(t.colorB+1)%512},30)},methods:{colorVal:function(t){return t<256?t:512-t}}},b=v,m=(r("d0ce"),Object(f["a"])(b,i,c,!1,null,"d8230a32",null)),y=m.exports,j={name:"app",components:{Demo:y}},C=j,O=(r("034f"),Object(f["a"])(C,s,n,!1,null,null,null)),x=O.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(x)}}).$mount("#app")},"64a9":function(t,e,r){},"71c1":function(t,e,r){},d0ce:function(t,e,r){"use strict";var o=r("3d1c"),s=r.n(o);s.a}});
//# sourceMappingURL=app.0bf6af6f.js.map