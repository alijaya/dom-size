(function(t){function e(e){for(var o,n,r=e[0],l=e[1],a=e[2],c=0,u=[];c<r.length;c++)n=r[c],i[n]&&u.push(i[n][0]),i[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);p&&p(e);while(u.length)u.shift()();return s.push.apply(s,a||[]),f()}function f(){for(var t,e=0;e<s.length;e++){for(var f=s[e],o=!0,r=1;r<f.length;r++){var l=f[r];0!==i[l]&&(o=!1)}o&&(s.splice(e--,1),t=n(n.s=f[0]))}return t}var o={},i={0:0},s=[];function n(e){if(o[e])return o[e].exports;var f=o[e]={i:e,l:!1,exports:{}};return t[e].call(f.exports,f,f.exports,n),f.l=!0,f.exports}n.m=t,n.c=o,n.d=function(t,e,f){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:f})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var f=Object.create(null);if(n.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(f,o,function(e){return t[e]}.bind(null,o));return f},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dom-size/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var a=0;a<r.length;a++)e(r[a]);var p=l;s.push([0,1]),f()})({0:function(t,e,f){t.exports=f("Vtdi")},"A0++":function(t,e,f){"use strict";var o=f("BPUQ"),i=f.n(o);i.a},BPUQ:function(t,e,f){},Vtdi:function(t,e,f){"use strict";f.r(e);f("yt8O"),f("VRzm");var o=f("Kw5r"),i=function(){var t=this,e=t.$createElement,f=t._self._c||e;return f("div",{attrs:{id:"app"}},[f("Box",{ref:"outer",staticClass:"box outer",attrs:{x:200,y:200,w:600,h:600},on:{dragging:t.update,resizing:t.update}},[f("Box",{ref:"inner",staticClass:"box inner",attrs:{x:100,y:100,w:300,h:300},on:{dragging:t.update,resizing:t.update}},[f("div",{ref:"inner2",staticClass:"inner2",on:{scroll:t.update}},[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis purus quam, id finibus metus imperdiet a. Vivamus nec neque ante. Morbi sem dolor, pharetra at aliquam vitae, mollis et risus. Integer sit amet ligula ut urna aliquet lobortis. Donec eget ipsum quis diam luctus tristique id eu est. Sed ut ipsum ac lorem dictum egestas vitae quis erat. Donec elit nisi, tempus id placerat non, volutpat a metus. Nullam et libero iaculis, dapibus velit et, scelerisque odio. Nunc rutrum metus lacus, eget volutpat est tristique eu. Donec mollis tincidunt dictum. In luctus, arcu eu viverra dignissim, magna nisi pellentesque erat, non gravida ipsum nibh vel arcu. Mauris tellus leo, imperdiet at ex sed, condimentum commodo velit. Etiam viverra ante nec mi consequat elementum. Integer tincidunt felis congue pulvinar ultrices.\n      ")])])],1),f("div",{staticClass:"info"},[f("div",{staticClass:"guide scroll",style:t.calculateScrollStyle()}),f("div",{staticClass:"guide padding",style:t.calculatePaddingStyle()}),f("div",{staticClass:"guide margin",style:t.calculateMarginStyle()}),t._l(t.rulers,function(e,o){return f("div",{key:o,staticClass:"ruler",class:t.calculateClass(e),style:t.calculateStyle(e)},[f("div",{staticClass:"ruler--graphic"}),f("div",{staticClass:"ruler--measure"},[t._v("\n        "+t._s(o)+": "+t._s(e.value)+" px\n      ")])])})],2)],1)},s=[],n=(f("f3/d"),f("RW0V"),f("rGqo"),f("hRwt")),r=f.n(n),l={name:"app",components:{Box:r.a},data:function(){return{width:100,height:0,x:0,y:0,rulers:{},scroll:{left:0,top:0,width:0,height:0},padding:{left:0,top:0,width:0,height:0},margin:{left:0,top:0,width:0,height:0}}},created:function(){var t=this,e=[["BCR.left",!0,!1],["BCR.right",!0,!1],["BCR.width",!0,!1],["offsetLeft",!0,!1],["offsetWidth",!0,!1],["clientLeft",!0,!1],["clientWidth",!0,!1],["scrollLeft",!0,!1],["scrollWidth",!0,!1],["CS.marginLeft",!0,!0],["CS.marginRight",!0,!0],["CS.borderLeft",!0,!0],["CS.borderRight",!0,!0],["CS.paddingLeft",!0,!0],["CS.paddingRight",!0,!0],["BCR.top",!1,!1],["BCR.bottom",!1,!1],["BCR.height",!1,!1],["offsetTop",!1,!1],["offsetHeight",!1,!1],["clientTop",!1,!1],["clientHeight",!1,!1],["scrollTop",!1,!1],["scrollHeight",!1,!1],["CS.marginTop",!1,!0],["CS.marginBottom",!1,!0],["CS.borderTop",!1,!0],["CS.borderBottom",!1,!0],["CS.paddingTop",!1,!0],["CS.paddingBottom",!1,!0]];e.forEach(function(e){t.$set(t.rulers,e[0],{horizontal:e[1],rotate:e[2],value:0,offset:0,offsetOther:0})})},methods:{calculateScrollStyle:function(){return{left:this.scroll.left+"px",top:this.scroll.top+"px",width:this.scroll.width+"px",height:this.scroll.height+"px"}},calculatePaddingStyle:function(){return{left:this.padding.left+"px",top:this.padding.top+"px",width:this.padding.width+"px",height:this.padding.height+"px"}},calculateMarginStyle:function(){return{left:this.margin.left+"px",top:this.margin.top+"px",width:this.margin.width+"px",height:this.margin.height+"px"}},calculateClass:function(t){return{ruler__horizontal:t.horizontal,ruler__vertical:!t.horizontal,ruler__rotate:t.rotate}},calculateStyle:function(t){var e={};return t.horizontal?(e.left=t.offset+"px",e.top=t.offsetOther+"px"):(e.left=t.offsetOther+"px",e.top=t.offset+"px"),t.rotate?e.height=t.value+"px":e.width=t.value+"px",e},update:function(){var t=this,e=this.$refs.outer.$el,f=this.$refs.inner.$el,o=f.getBoundingClientRect(),i=window.getComputedStyle(f,null),s=this.$refs.inner2;this.scroll.left=e.offsetLeft+e.clientLeft+f.offsetLeft+f.clientLeft-s.scrollLeft,this.scroll.width=s.scrollWidth,this.scroll.top=e.offsetTop+e.clientTop+f.offsetTop+f.clientTop-s.scrollTop,this.scroll.height=s.scrollHeight,this.padding.left=e.offsetLeft+e.clientLeft+f.offsetLeft+f.clientLeft+parseInt(i.paddingLeft),this.padding.width=s.clientWidth-parseInt(i.paddingLeft)-parseInt(i.paddingRight),this.padding.top=e.offsetTop+e.clientTop+f.offsetTop+f.clientTop+parseInt(i.paddingTop),this.padding.height=s.clientHeight-parseInt(i.paddingTop)-parseInt(i.paddingBottom),this.margin.left=e.offsetLeft+e.clientLeft+f.offsetLeft-parseInt(i.marginLeft),this.margin.width=parseInt(i.marginLeft)+f.offsetWidth+parseInt(i.marginRight),this.margin.top=e.offsetTop+e.clientTop+f.offsetTop-parseInt(i.marginTop),this.margin.height=parseInt(i.marginTop)+f.offsetHeight+parseInt(i.marginBottom);var n={"BCR.left":{value:o.left,offset:0,offsetOther:o.bottom+100},"BCR.right":{value:o.right,offset:0,offsetOther:o.bottom+150},"BCR.width":{value:o.width,offset:o.left,offsetOther:o.bottom+100},offsetLeft:{value:f.offsetLeft,offset:e.offsetLeft+e.clientLeft,offsetOther:e.offsetTop+e.clientTop+f.offsetTop+f.offsetHeight+50},offsetWidth:{value:f.offsetWidth,offset:e.offsetLeft+e.clientLeft+f.offsetLeft,offsetOther:e.offsetTop+e.clientTop+f.offsetTop+f.offsetHeight+50},clientLeft:{value:f.clientLeft,offset:e.offsetLeft+e.clientLeft+f.offsetLeft,offsetOther:e.offsetTop+e.clientTop+f.offsetTop+f.clientTop+s.clientHeight},clientWidth:{value:s.clientWidth,offset:e.offsetLeft+e.clientLeft+f.offsetLeft+f.clientLeft,offsetOther:e.offsetTop+e.clientTop+f.offsetTop+f.clientTop+s.clientHeight},scrollLeft:{value:s.scrollLeft,offset:e.offsetLeft+e.clientLeft+f.offsetLeft+f.clientLeft-s.scrollLeft,offsetOther:e.offsetTop+e.clientTop+f.offsetTop+f.offsetHeight+200},scrollWidth:{value:s.scrollWidth,offset:e.offsetLeft+e.clientLeft+f.offsetLeft+f.clientLeft-s.scrollLeft,offsetOther:e.offsetTop+e.clientTop+f.offsetTop+f.offsetHeight+250},"CS.marginLeft":{value:parseInt(i.marginLeft),offset:e.offsetLeft+e.clientLeft+f.offsetLeft-parseInt(i.marginLeft),offsetOther:e.offsetTop+e.clientTop+f.offsetTop-parseInt(i.marginTop)},"CS.marginRight":{value:parseInt(i.marginRight),offset:e.offsetLeft+e.clientLeft+f.offsetLeft+f.offsetWidth,offsetOther:e.offsetTop+e.clientTop+f.offsetTop-parseInt(i.marginTop)},"CS.borderLeft":{value:parseInt(i.borderLeft),offset:e.offsetLeft+e.clientLeft+f.offsetLeft,offsetOther:e.offsetTop+e.clientTop+f.offsetTop-parseInt(i.marginTop)},"CS.borderRight":{value:parseInt(i.borderRight),offset:e.offsetLeft+e.clientLeft+f.offsetLeft+f.offsetWidth-parseInt(i.borderRight),offsetOther:e.offsetTop+e.clientTop+f.offsetTop-parseInt(i.marginTop)},"CS.paddingLeft":{value:parseInt(i.paddingLeft),offset:e.offsetLeft+e.clientLeft+f.offsetLeft+f.clientLeft,offsetOther:e.offsetTop+e.clientTop+f.offsetTop-parseInt(i.marginTop)},"CS.paddingRight":{value:parseInt(i.paddingRight),offset:e.offsetLeft+e.clientLeft+f.offsetLeft+f.clientLeft+s.clientWidth-parseInt(i.paddingRight),offsetOther:e.offsetTop+e.clientTop+f.offsetTop-parseInt(i.marginTop)},"BCR.top":{value:o.top,offset:0,offsetOther:o.right+100},"BCR.bottom":{value:o.bottom,offset:0,offsetOther:o.right+150},"BCR.height":{value:o.height,offset:o.top,offsetOther:o.right+100},offsetTop:{value:f.offsetTop,offset:e.offsetTop+e.clientTop,offsetOther:e.offsetLeft+e.clientLeft+f.offsetLeft+f.offsetWidth+50},offsetHeight:{value:f.offsetHeight,offset:e.offsetTop+e.clientTop+f.offsetTop,offsetOther:e.offsetLeft+e.clientLeft+f.offsetLeft+f.offsetWidth+50},clientTop:{value:f.clientTop,offset:e.offsetTop+e.clientTop+f.offsetTop,offsetOther:e.offsetLeft+e.clientLeft+f.offsetLeft+f.clientLeft+s.clientWidth},clientHeight:{value:s.clientHeight,offset:e.offsetTop+e.clientTop+f.offsetTop+f.clientTop,offsetOther:e.offsetLeft+e.clientLeft+f.offsetLeft+f.clientLeft+s.clientWidth},scrollTop:{value:s.scrollTop,offset:e.offsetTop+e.clientTop+f.offsetTop+f.clientTop-s.scrollTop,offsetOther:e.offsetLeft+e.clientLeft+f.offsetLeft+f.offsetWidth+200},scrollHeight:{value:s.scrollHeight,offset:e.offsetTop+e.clientTop+f.offsetTop+f.clientTop-s.scrollTop,offsetOther:e.offsetLeft+e.clientLeft+f.offsetLeft+f.offsetWidth+250},"CS.marginTop":{value:parseInt(i.marginTop),offset:e.offsetTop+e.clientTop+f.offsetTop-parseInt(i.marginTop),offsetOther:e.offsetLeft+e.clientLeft+f.offsetLeft-parseInt(i.marginLeft)},"CS.marginBottom":{value:parseInt(i.marginBottom),offset:e.offsetTop+e.clientTop+f.offsetTop+f.offsetHeight,offsetOther:e.offsetLeft+e.clientLeft+f.offsetLeft-parseInt(i.marginLeft)},"CS.borderTop":{value:parseInt(i.borderTop),offset:e.offsetTop+e.clientTop+f.offsetTop,offsetOther:e.offsetLeft+e.clientLeft+f.offsetLeft-parseInt(i.marginLeft)},"CS.borderBottom":{value:parseInt(i.borderBottom),offset:e.offsetTop+e.clientTop+f.offsetTop+f.offsetHeight-parseInt(i.borderBottom),offsetOther:e.offsetLeft+e.clientLeft+f.offsetLeft-parseInt(i.marginLeft)},"CS.paddingTop":{value:parseInt(i.paddingTop),offset:e.offsetTop+e.clientTop+f.offsetTop+f.clientTop,offsetOther:e.offsetLeft+e.clientLeft+f.offsetLeft-parseInt(i.marginLeft)},"CS.paddingBottom":{value:parseInt(i.paddingBottom),offset:e.offsetTop+e.clientTop+f.offsetTop+f.clientTop+s.clientHeight-parseInt(i.paddingBottom),offsetOther:e.offsetLeft+e.clientLeft+f.offsetLeft-parseInt(i.marginLeft)}};Object.keys(n).forEach(function(e){var f=t.rulers[e],o=n[e];f.value=o.value,f.offset=o.offset,f.offsetOther=o.offsetOther})}}},a=l,p=(f("A0++"),f("KHd+")),c=Object(p["a"])(a,i,s,!1,null,null,null),u=c.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(u)}}).$mount("#app")}});
//# sourceMappingURL=app.bc325dd5.js.map