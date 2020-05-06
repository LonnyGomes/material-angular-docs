function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,c=new Array(e.length);t<e.length;t++)c[t]=e[t];return c}}function _defineProperties(e,t){for(var c=0;c<t.length;c++){var a=t[c];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,c){return t&&_defineProperties(e.prototype,t),c&&_defineProperties(e,c),e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{Uef7:function(e,t,c){"use strict";c.r(t),c.d(t,"CdkScrollingExamplesModule",(function(){return w})),c.d(t,"CdkVirtualScrollContextExample",(function(){return s})),c.d(t,"CdkVirtualScrollCustomStrategyExample",(function(){return m})),c.d(t,"CdkVirtualScrollDataSourceExample",(function(){return d})),c.d(t,"CdkVirtualScrollDlExample",(function(){return h})),c.d(t,"CdkVirtualScrollFixedBufferExample",(function(){return v})),c.d(t,"CdkVirtualScrollHorizontalExample",(function(){return x})),c.d(t,"CdkVirtualScrollOverviewExample",(function(){return y})),c.d(t,"CdkVirtualScrollTemplateCacheExample",(function(){return C}));var a=c("vxfF"),n=c("fXoL"),i=c("0EQZ"),r=c("2Vo4"),o=c("quSY");function l(e,t){if(1&e&&(Object(n.gc)(0,"div"),Object(n.gc)(1,"div",2),Object(n.Qc)(2),Object(n.fc)(),Object(n.gc)(3,"div",2),Object(n.Qc)(4),Object(n.fc)(),Object(n.gc)(5,"div",2),Object(n.Qc)(6),Object(n.fc)(),Object(n.gc)(7,"div",2),Object(n.Qc)(8),Object(n.fc)(),Object(n.gc)(9,"div",2),Object(n.Qc)(10),Object(n.fc)(),Object(n.gc)(11,"div",2),Object(n.Qc)(12),Object(n.fc)(),Object(n.gc)(13,"div",2),Object(n.Qc)(14),Object(n.fc)(),Object(n.fc)()),2&e){var c=t.$implicit,a=t.index,i=t.count,r=t.first,o=t.last,l=t.even,s=t.odd;Object(n.Qb)("example-alternate",s),Object(n.Mb)(2),Object(n.Sc)("Item: ",c,""),Object(n.Mb)(2),Object(n.Sc)("Index: ",a,""),Object(n.Mb)(2),Object(n.Sc)("Count: ",i,""),Object(n.Mb)(2),Object(n.Sc)("First: ",r?"Yes":"No",""),Object(n.Mb)(2),Object(n.Sc)("Last: ",o?"Yes":"No",""),Object(n.Mb)(2),Object(n.Sc)("Even: ",l?"Yes":"No",""),Object(n.Mb)(2),Object(n.Sc)("Odd: ",s?"Yes":"No","")}}var s=function(){var e=function e(){_classCallCheck(this,e),this.items=Array.from({length:1e5}).map((function(e,t){return"Item #".concat(t)}))};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(n.Ub)({type:e,selectors:[["cdk-virtual-scroll-context-example"]],decls:2,vars:2,consts:[[1,"example-viewport",3,"itemSize"],[3,"example-alternate",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"example-item-detail"]],template:function(e,t){1&e&&(Object(n.gc)(0,"cdk-virtual-scroll-viewport",0),Object(n.Oc)(1,l,15,9,"div",1),Object(n.fc)()),2&e&&(Object(n.yc)("itemSize",126),Object(n.Mb)(1),Object(n.yc)("cdkVirtualForOf",t.items))},directives:[a.d,a.a,a.c],styles:[".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item-detail[_ngcontent-%COMP%] {\n  height: 18px;\n}\n\n.example-alternate[_ngcontent-%COMP%] {\n  background: rgba(127, 127, 127, 0.3);\n}"],changeDetection:0}),e}();function p(e,t){if(1&e&&(Object(n.gc)(0,"div",2),Object(n.Qc)(1),Object(n.fc)()),2&e){var c=t.$implicit;Object(n.Mb)(1),Object(n.Rc)(c)}}var u=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,50,250,500))}return _inherits(t,e),t}(a.e),m=function(){var e=function e(){_classCallCheck(this,e),this.items=Array.from({length:1e5}).map((function(e,t){return"Item #".concat(t)}))};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(n.Ub)({type:e,selectors:[["cdk-virtual-scroll-custom-strategy-example"]],features:[Object(n.Lb)([{provide:a.h,useClass:u}])],decls:2,vars:1,consts:[[1,"example-viewport"],["class","example-item",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"example-item"]],template:function(e,t){1&e&&(Object(n.gc)(0,"cdk-virtual-scroll-viewport",0),Object(n.Oc)(1,p,2,1,"div",1),Object(n.fc)()),2&e&&(Object(n.Mb)(1),Object(n.yc)("cdkVirtualForOf",t.items))},directives:[a.d,a.c],styles:[".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"],changeDetection:0}),e}();function b(e,t){if(1&e&&(Object(n.gc)(0,"div",2),Object(n.Qc)(1),Object(n.fc)()),2&e){var c=t.$implicit;Object(n.Mb)(1),Object(n.Rc)(c||"Loading...")}}var d=function(){var e=function e(){_classCallCheck(this,e),this.ds=new f};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(n.Ub)({type:e,selectors:[["cdk-virtual-scroll-data-source-example"]],decls:2,vars:1,consts:[["itemSize","50",1,"example-viewport"],["class","example-item",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"example-item"]],template:function(e,t){1&e&&(Object(n.gc)(0,"cdk-virtual-scroll-viewport",0),Object(n.Oc)(1,b,2,1,"div",1),Object(n.fc)()),2&e&&(Object(n.Mb)(1),Object(n.yc)("cdkVirtualForOf",t.ds))},directives:[a.d,a.a,a.c],styles:[".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"],changeDetection:0}),e}(),f=function(e){function t(){var e;return _classCallCheck(this,t),(e=_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments)))._length=1e5,e._pageSize=100,e._cachedData=Array.from({length:e._length}),e._fetchedPages=new Set,e._dataStream=new r.a(e._cachedData),e._subscription=new o.a,e}return _inherits(t,e),_createClass(t,[{key:"connect",value:function(e){var t=this;return this._subscription.add(e.viewChange.subscribe((function(e){for(var c=t._getPageForIndex(e.start),a=t._getPageForIndex(e.end-1),n=c;n<=a;n++)t._fetchPage(n)}))),this._dataStream}},{key:"disconnect",value:function(){this._subscription.unsubscribe()}},{key:"_getPageForIndex",value:function(e){return Math.floor(e/this._pageSize)}},{key:"_fetchPage",value:function(e){var t=this;this._fetchedPages.has(e)||(this._fetchedPages.add(e),setTimeout((function(){var c;(c=t._cachedData).splice.apply(c,[e*t._pageSize,t._pageSize].concat(_toConsumableArray(Array.from({length:t._pageSize}).map((function(c,a){return"Item #".concat(e*t._pageSize+a)}))))),t._dataStream.next(t._cachedData)}),1e3*Math.random()+200))}}]),t}(i.b);function O(e,t){if(1&e&&(Object(n.ec)(0),Object(n.gc)(1,"dt",3),Object(n.Qc)(2),Object(n.fc)(),Object(n.gc)(3,"dd",4),Object(n.Qc)(4),Object(n.fc)(),Object(n.dc)()),2&e){var c=t.$implicit;Object(n.Mb)(2),Object(n.Rc)(c.name),Object(n.Mb)(2),Object(n.Rc)(c.capital)}}var h=function(){var e=function e(){_classCallCheck(this,e),this.states=[{name:"Alabama",capital:"Montgomery"},{name:"Alaska",capital:"Juneau"},{name:"Arizona",capital:"Phoenix"},{name:"Arkansas",capital:"Little Rock"},{name:"California",capital:"Sacramento"},{name:"Colorado",capital:"Denver"},{name:"Connecticut",capital:"Hartford"},{name:"Delaware",capital:"Dover"},{name:"Florida",capital:"Tallahassee"},{name:"Georgia",capital:"Atlanta"},{name:"Hawaii",capital:"Honolulu"},{name:"Idaho",capital:"Boise"},{name:"Illinois",capital:"Springfield"},{name:"Indiana",capital:"Indianapolis"},{name:"Iowa",capital:"Des Moines"},{name:"Kansas",capital:"Topeka"},{name:"Kentucky",capital:"Frankfort"},{name:"Louisiana",capital:"Baton Rouge"},{name:"Maine",capital:"Augusta"},{name:"Maryland",capital:"Annapolis"},{name:"Massachusetts",capital:"Boston"},{name:"Michigan",capital:"Lansing"},{name:"Minnesota",capital:"St. Paul"},{name:"Mississippi",capital:"Jackson"},{name:"Missouri",capital:"Jefferson City"},{name:"Montana",capital:"Helena"},{name:"Nebraska",capital:"Lincoln"},{name:"Nevada",capital:"Carson City"},{name:"New Hampshire",capital:"Concord"},{name:"New Jersey",capital:"Trenton"},{name:"New Mexico",capital:"Santa Fe"},{name:"New York",capital:"Albany"},{name:"North Carolina",capital:"Raleigh"},{name:"North Dakota",capital:"Bismarck"},{name:"Ohio",capital:"Columbus"},{name:"Oklahoma",capital:"Oklahoma City"},{name:"Oregon",capital:"Salem"},{name:"Pennsylvania",capital:"Harrisburg"},{name:"Rhode Island",capital:"Providence"},{name:"South Carolina",capital:"Columbia"},{name:"South Dakota",capital:"Pierre"},{name:"Tennessee",capital:"Nashville"},{name:"Texas",capital:"Austin"},{name:"Utah",capital:"Salt Lake City"},{name:"Vermont",capital:"Montpelier"},{name:"Virginia",capital:"Richmond"},{name:"Washington",capital:"Olympia"},{name:"West Virginia",capital:"Charleston"},{name:"Wisconsin",capital:"Madison"},{name:"Wyoming",capital:"Cheyenne"}]};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(n.Ub)({type:e,selectors:[["cdk-virtual-scroll-dl-example"]],decls:3,vars:1,consts:[["itemSize","60",1,"example-viewport"],[1,"example-dl"],[4,"cdkVirtualFor","cdkVirtualForOf"],[1,"example-dt"],[1,"example-dd"]],template:function(e,t){1&e&&(Object(n.gc)(0,"cdk-virtual-scroll-viewport",0),Object(n.gc)(1,"dl",1),Object(n.Oc)(2,O,5,2,"ng-container",2),Object(n.fc)(),Object(n.fc)()),2&e&&(Object(n.Mb)(2),Object(n.yc)("cdkVirtualForOf",t.states))},directives:[a.d,a.a,a.c],styles:[".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-dt[_ngcontent-%COMP%] {\n  height: 30px;\n  font-weight: bold;\n}\n\n.example-dd[_ngcontent-%COMP%] {\n  height: 30px;\n}"],changeDetection:0}),e}();function j(e,t){if(1&e&&(Object(n.gc)(0,"div",2),Object(n.Qc)(1),Object(n.fc)()),2&e){var c=t.$implicit;Object(n.Mb)(1),Object(n.Rc)(c)}}var v=function(){var e=function e(){_classCallCheck(this,e),this.items=Array.from({length:1e5}).map((function(e,t){return"Item #".concat(t)}))};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(n.Ub)({type:e,selectors:[["cdk-virtual-scroll-fixed-buffer-example"]],decls:2,vars:1,consts:[["itemSize","50","minBufferPx","200","maxBufferPx","400",1,"example-viewport"],["class","example-item",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"example-item"]],template:function(e,t){1&e&&(Object(n.gc)(0,"cdk-virtual-scroll-viewport",0),Object(n.Oc)(1,j,2,1,"div",1),Object(n.fc)()),2&e&&(Object(n.Mb)(1),Object(n.yc)("cdkVirtualForOf",t.items))},directives:[a.d,a.a,a.c],styles:[".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"],changeDetection:0}),e}();function g(e,t){if(1&e&&(Object(n.gc)(0,"div",3),Object(n.Qc)(1),Object(n.fc)()),2&e){var c=t.$implicit;Object(n.Mb)(1),Object(n.Rc)(c)}}var x=function(){var e=function e(){_classCallCheck(this,e),this.items=Array.from({length:1e5}).map((function(e,t){return"Item #".concat(t)}))};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(n.Ub)({type:e,selectors:[["cdk-virtual-scroll-horizontal-example"]],decls:3,vars:1,consts:[[1,"cdk-virtual-scroll-data-source-example"],["orientation","horizontal","itemSize","50",1,"example-viewport"],["class","example-item",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"example-item"]],template:function(e,t){1&e&&(Object(n.gc)(0,"div",0),Object(n.gc)(1,"cdk-virtual-scroll-viewport",1),Object(n.Oc)(2,g,2,1,"div",2),Object(n.fc)(),Object(n.fc)()),2&e&&(Object(n.Mb)(2),Object(n.yc)("cdkVirtualForOf",t.items))},directives:[a.d,a.a,a.c],styles:[".cdk-virtual-scroll-data-source-example .example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.cdk-virtual-scroll-data-source-example .example-viewport .cdk-virtual-scroll-content-wrapper {\n  display: flex;\n  flex-direction: row;\n}\n\n.cdk-virtual-scroll-data-source-example .example-item {\n  width: 50px;\n  height: 100%;\n  writing-mode: vertical-lr;\n}\n"],encapsulation:2,changeDetection:0}),e}();function k(e,t){if(1&e&&(Object(n.gc)(0,"div",2),Object(n.Qc)(1),Object(n.fc)()),2&e){var c=t.$implicit;Object(n.Mb)(1),Object(n.Rc)(c)}}var y=function(){var e=function e(){_classCallCheck(this,e),this.items=Array.from({length:1e5}).map((function(e,t){return"Item #".concat(t)}))};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(n.Ub)({type:e,selectors:[["cdk-virtual-scroll-overview-example"]],decls:2,vars:1,consts:[["itemSize","50",1,"example-viewport"],["class","example-item",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"example-item"]],template:function(e,t){1&e&&(Object(n.gc)(0,"cdk-virtual-scroll-viewport",0),Object(n.Oc)(1,k,2,1,"div",1),Object(n.fc)()),2&e&&(Object(n.Mb)(1),Object(n.yc)("cdkVirtualForOf",t.items))},directives:[a.d,a.a,a.c],styles:[".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"],changeDetection:0}),e}();function _(e,t){if(1&e&&(Object(n.gc)(0,"div",2),Object(n.Qc)(1),Object(n.fc)()),2&e){var c=t.$implicit;Object(n.Mb)(1),Object(n.Rc)(c)}}var C=function(){var e=function e(){_classCallCheck(this,e),this.items=Array.from({length:1e5}).map((function(e,t){return"Item #".concat(t)}))};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(n.Ub)({type:e,selectors:[["cdk-virtual-scroll-template-cache-example"]],decls:2,vars:2,consts:[["itemSize","50",1,"example-viewport"],["class","example-item",4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTemplateCacheSize"],[1,"example-item"]],template:function(e,t){1&e&&(Object(n.gc)(0,"cdk-virtual-scroll-viewport",0),Object(n.Oc)(1,_,2,1,"div",1),Object(n.fc)()),2&e&&(Object(n.Mb)(1),Object(n.yc)("cdkVirtualForOf",t.items)("cdkVirtualForTemplateCacheSize",0))},directives:[a.d,a.a,a.c],styles:[".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"],changeDetection:0}),e}(),w=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=Object(n.Yb)({type:e}),e.\u0275inj=Object(n.Xb)({factory:function(t){return new(t||e)},imports:[[a.g]]}),e}()}}]);