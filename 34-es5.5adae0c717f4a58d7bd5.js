function _get(e,t,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_superPropBase(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{tmcM:function(e,t,n){"use strict";n.r(t),n.d(t,"CdkTreeExamplesModule",(function(){return b})),n.d(t,"CdkTreeFlatExample",(function(){return u})),n.d(t,"CdkTreeNestedExample",(function(){return p}));var r=n("y7ui"),i=n("fXoL"),o=n("bTqV"),a=n("NFeN"),s=n("0EQZ");function c(e,t){if(1&e&&(Object(i.gc)(0,"cdk-tree-node",3),Object(i.bc)(1,"button",4),Object(i.Qc)(2),Object(i.fc)()),2&e){var n=t.$implicit,r=Object(i.sc)();Object(i.Nc)("display",r.shouldRender(n)?"flex":"none"),Object(i.Mb)(2),Object(i.Sc)(" ",n.name," ")}}function l(e,t){if(1&e&&(Object(i.gc)(0,"cdk-tree-node",3),Object(i.gc)(1,"button",5),Object(i.oc)("click",(function(){var e=t.$implicit;return e.isExpanded=!e.isExpanded})),Object(i.gc)(2,"mat-icon",6),Object(i.Qc)(3),Object(i.fc)(),Object(i.fc)(),Object(i.Qc)(4),Object(i.fc)()),2&e){var n=t.$implicit,r=Object(i.sc)();Object(i.Nc)("display",r.shouldRender(n)?"flex":"none"),Object(i.Mb)(1),Object(i.Nc)("visibility",n.expandable?"visible":"hidden"),Object(i.Nb)("aria-label","toggle "+n.filename),Object(i.Mb)(2),Object(i.Sc)(" ",r.treeControl.isExpanded(n)?"expand_more":"chevron_right"," "),Object(i.Mb)(1),Object(i.Sc)(" ",n.name," ")}}var d=[{name:"Fruit",expandable:!0,level:0},{name:"Apple",expandable:!1,level:1},{name:"Banana",expandable:!1,level:1},{name:"Fruit loops",expandable:!1,level:1},{name:"Vegetables",expandable:!0,level:0},{name:"Green",expandable:!0,level:1},{name:"Broccoli",expandable:!1,level:2},{name:"Brussels sprouts",expandable:!1,level:2},{name:"Orange",expandable:!0,level:1},{name:"Pumpkins",expandable:!1,level:2},{name:"Carrots",expandable:!1,level:2}],u=function(){var e=function(){function e(){_classCallCheck(this,e),this.treeControl=new r.i((function(e){return e.level}),(function(e){return e.expandable})),this.dataSource=new s.a(d),this.hasChild=function(e,t){return t.expandable}}return _createClass(e,[{key:"getParentNode",value:function(e){for(var t=d.indexOf(e)-1;t>=0;t--)if(d[t].level===e.level-1)return d[t];return null}},{key:"shouldRender",value:function(e){var t=this.getParentNode(e);return!t||t.isExpanded}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(i.Ub)({type:e,selectors:[["cdk-tree-flat-example"]],decls:3,vars:3,consts:[[3,"dataSource","treeControl"],["cdkTreeNodePadding","","class","example-tree-node",3,"display",4,"cdkTreeNodeDef"],["cdkTreeNodePadding","","class","example-tree-node",3,"display",4,"cdkTreeNodeDef","cdkTreeNodeDefWhen"],["cdkTreeNodePadding","",1,"example-tree-node"],["mat-icon-button","","disabled",""],["mat-icon-button","","cdkTreeNodeToggle","",3,"click"],[1,"mat-icon-rtl-mirror"]],template:function(e,t){1&e&&(Object(i.gc)(0,"cdk-tree",0),Object(i.Oc)(1,c,3,3,"cdk-tree-node",1),Object(i.Oc)(2,l,5,7,"cdk-tree-node",2),Object(i.fc)()),2&e&&(Object(i.yc)("dataSource",t.dataSource)("treeControl",t.treeControl),Object(i.Mb)(2),Object(i.yc)("cdkTreeNodeDefWhen",t.hasChild))},directives:[r.b,r.e,r.d,r.g,o.b,r.h,a.a],styles:[".example-tree-node[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}"]}),e}();function h(e,t){if(1&e&&(Object(i.gc)(0,"cdk-nested-tree-node",3),Object(i.bc)(1,"button",4),Object(i.Qc)(2),Object(i.fc)()),2&e){var n=t.$implicit;Object(i.Mb)(2),Object(i.Sc)(" ",n.name," ")}}function f(e,t){if(1&e&&(Object(i.gc)(0,"cdk-nested-tree-node",3),Object(i.gc)(1,"button",5),Object(i.gc)(2,"mat-icon",6),Object(i.Qc)(3),Object(i.fc)(),Object(i.fc)(),Object(i.Qc)(4),Object(i.gc)(5,"div"),Object(i.cc)(6,7),Object(i.fc)(),Object(i.fc)()),2&e){var n=t.$implicit,r=Object(i.sc)();Object(i.Mb)(1),Object(i.Nb)("aria-label","toggle "+n.name),Object(i.Mb)(2),Object(i.Sc)(" ",r.treeControl.isExpanded(n)?"expand_more":"chevron_right"," "),Object(i.Mb)(1),Object(i.Sc)(" ",n.name," "),Object(i.Mb)(1),Object(i.Qb)("example-tree-invisible",!r.treeControl.isExpanded(n))}}var _=[{name:"Fruit",children:[{name:"Apple"},{name:"Banana"},{name:"Fruit loops"}]},{name:"Vegetables",children:[{name:"Green",children:[{name:"Broccoli"},{name:"Brussels sprouts"}]},{name:"Orange",children:[{name:"Pumpkins"},{name:"Carrots"}]}]}],p=function(){var e=function e(){_classCallCheck(this,e),this.treeControl=new r.j((function(e){return e.children})),this.dataSource=new s.a(_),this.hasChild=function(e,t){return!!t.children&&t.children.length>0}};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(i.Ub)({type:e,selectors:[["cdk-tree-nested-example"]],decls:3,vars:3,consts:[[3,"dataSource","treeControl"],["class","example-tree-node",4,"cdkTreeNodeDef"],["class","example-tree-node",4,"cdkTreeNodeDef","cdkTreeNodeDefWhen"],[1,"example-tree-node"],["mat-icon-button","","disabled",""],["mat-icon-button","","cdkTreeNodeToggle",""],[1,"mat-icon-rtl-mirror"],["cdkTreeNodeOutlet",""]],template:function(e,t){1&e&&(Object(i.gc)(0,"cdk-tree",0),Object(i.Oc)(1,h,3,1,"cdk-nested-tree-node",1),Object(i.Oc)(2,f,7,5,"cdk-nested-tree-node",2),Object(i.fc)()),2&e&&(Object(i.yc)("dataSource",t.dataSource)("treeControl",t.treeControl),Object(i.Mb)(2),Object(i.yc)("cdkTreeNodeDefWhen",t.hasChild))},directives:[r.b,r.e,r.a,o.b,r.h,a.a,r.f],styles:[".example-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.example-tree-node[_ngcontent-%COMP%]   .example-tree-node[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}"]}),e}(),b=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=Object(i.Yb)({type:e}),e.\u0275inj=Object(i.Xb)({factory:function(t){return new(t||e)},imports:[[r.c,o.c,a.b]]}),e}()},y7ui:function(e,t,n){"use strict";n.d(t,"a",(function(){return C})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return p})),n.d(t,"g",(function(){return j})),n.d(t,"h",(function(){return k})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return _}));var r=n("0EQZ"),i=n("7+OI"),o=n("XNiG"),a=n("2Vo4"),s=n("LRne"),c=n("IzEk"),l=n("pLZG"),d=n("1G5W"),u=(n("fXoL"),n("8LU1")),h=function(){function e(){_classCallCheck(this,e),this.expansionModel=new r.c(!0)}return _createClass(e,[{key:"toggle",value:function(e){this.expansionModel.toggle(e)}},{key:"expand",value:function(e){this.expansionModel.select(e)}},{key:"collapse",value:function(e){this.expansionModel.deselect(e)}},{key:"isExpanded",value:function(e){return this.expansionModel.isSelected(e)}},{key:"toggleDescendants",value:function(e){this.expansionModel.isSelected(e)?this.collapseDescendants(e):this.expandDescendants(e)}},{key:"collapseAll",value:function(){this.expansionModel.clear()}},{key:"expandDescendants",value:function(e){var t,n=[e];n.push.apply(n,_toConsumableArray(this.getDescendants(e))),(t=this.expansionModel).select.apply(t,n)}},{key:"collapseDescendants",value:function(e){var t,n=[e];n.push.apply(n,_toConsumableArray(this.getDescendants(e))),(t=this.expansionModel).deselect.apply(t,n)}}]),e}(),f=function(e){function t(e,n){var r;return _classCallCheck(this,t),(r=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this))).getLevel=e,r.isExpandable=n,r}return _inherits(t,e),_createClass(t,[{key:"getDescendants",value:function(e){for(var t=[],n=this.dataNodes.indexOf(e)+1;n<this.dataNodes.length&&this.getLevel(e)<this.getLevel(this.dataNodes[n]);n++)t.push(this.dataNodes[n]);return t}},{key:"expandAll",value:function(){var e;(e=this.expansionModel).select.apply(e,_toConsumableArray(this.dataNodes))}}]),t}(h),_=function(e){function t(e){var n;return _classCallCheck(this,t),(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this))).getChildren=e,n}return _inherits(t,e),_createClass(t,[{key:"expandAll",value:function(){var e,t=this;this.expansionModel.clear();var n=this.dataNodes.reduce((function(e,n){return[].concat(_toConsumableArray(e),_toConsumableArray(t.getDescendants(n)),[n])}),[]);(e=this.expansionModel).select.apply(e,_toConsumableArray(n))}},{key:"getDescendants",value:function(e){var t=[];return this._getDescendants(t,e),t.splice(1)}},{key:"_getDescendants",value:function(e,t){var n=this;e.push(t);var r=this.getChildren(t);Array.isArray(r)?r.forEach((function(t){return n._getDescendants(e,t)})):Object(i.a)(r)&&r.pipe(Object(c.a)(1),Object(l.a)(Boolean)).subscribe((function(t){var r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var c=a.value;n._getDescendants(e,c)}}catch(l){i=!0,o=l}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}))}}]),t}(h),p=function e(t,n){_classCallCheck(this,e),this.viewContainer=t,this._node=n},b=function e(t){_classCallCheck(this,e),this.$implicit=t},v=function e(t){_classCallCheck(this,e),this.template=t};function g(){return Error("Could not find functions for nested/flat tree in tree control.")}var y=function(){function e(t,n){_classCallCheck(this,e),this._differs=t,this._changeDetectorRef=n,this._onDestroy=new o.a,this._levels=new Map,this.viewChange=new a.a({start:0,end:Number.MAX_VALUE})}return _createClass(e,[{key:"ngOnInit",value:function(){if(this._dataDiffer=this._differs.find([]).create(this.trackBy),!this.treeControl)throw Error("Could not find a tree control for the tree.")}},{key:"ngOnDestroy",value:function(){this._nodeOutlet.viewContainer.clear(),this._onDestroy.next(),this._onDestroy.complete(),this._dataSource&&"function"==typeof this._dataSource.disconnect&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null)}},{key:"ngAfterContentChecked",value:function(){var e=this._nodeDefs.filter((function(e){return!e.when}));if(e.length>1)throw Error("There can only be one default row without a when predicate function.");this._defaultNodeDef=e[0],this.dataSource&&this._nodeDefs&&!this._dataSubscription&&this._observeRenderChanges()}},{key:"_switchDataSource",value:function(e){this._dataSource&&"function"==typeof this._dataSource.disconnect&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null),e||this._nodeOutlet.viewContainer.clear(),this._dataSource=e,this._nodeDefs&&this._observeRenderChanges()}},{key:"_observeRenderChanges",value:function(){var e,t=this;if(Object(r.e)(this._dataSource)?e=this._dataSource.connect(this):Object(i.a)(this._dataSource)?e=this._dataSource:Array.isArray(this._dataSource)&&(e=Object(s.a)(this._dataSource)),!e)throw Error("A valid data source must be provided.");this._dataSubscription=e.pipe(Object(d.a)(this._onDestroy)).subscribe((function(e){return t.renderNodeChanges(e)}))}},{key:"renderNodeChanges",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._dataDiffer,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._nodeOutlet.viewContainer,i=arguments.length>3?arguments[3]:void 0,o=n.diff(e);o&&(o.forEachOperation((function(n,o,a){if(null==n.previousIndex)t.insertNode(e[a],a,r,i);else if(null==a)r.remove(o),t._levels.delete(n.item);else{var s=r.get(o);r.move(s,a)}})),this._changeDetectorRef.detectChanges())}},{key:"_getNodeDef",value:function(e,t){if(1===this._nodeDefs.length)return this._nodeDefs.first;var n=this._nodeDefs.find((function(n){return n.when&&n.when(t,e)}))||this._defaultNodeDef;if(!n)throw Error("Could not find a matching node definition for the provided node data.");return n}},{key:"insertNode",value:function(e,t,n,r){var i=this._getNodeDef(e,t),o=new b(e);o.level=this.treeControl.getLevel?this.treeControl.getLevel(e):void 0!==r&&this._levels.has(r)?this._levels.get(r)+1:0,this._levels.set(e,o.level),(n||this._nodeOutlet.viewContainer).createEmbeddedView(i.template,o,t),O.mostRecentTreeNode&&(O.mostRecentTreeNode.data=e)}},{key:"dataSource",get:function(){return this._dataSource},set:function(e){this._dataSource!==e&&this._switchDataSource(e)}}]),e}(),O=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this._elementRef=t,this._tree=n,this._destroyed=new o.a,this._dataChanges=new o.a,this.role="treeitem",e.mostRecentTreeNode=this}return _createClass(e,[{key:"ngOnDestroy",value:function(){e.mostRecentTreeNode===this&&(e.mostRecentTreeNode=null),this._dataChanges.complete(),this._destroyed.next(),this._destroyed.complete()}},{key:"focus",value:function(){this._elementRef.nativeElement.focus()}},{key:"_setRoleFromData",value:function(){var e=this;if(this._tree.treeControl.isExpandable)this.role=this._tree.treeControl.isExpandable(this._data)?"group":"treeitem";else{if(!this._tree.treeControl.getChildren)throw g();var t=this._tree.treeControl.getChildren(this._data);Array.isArray(t)?this._setRoleFromChildren(t):Object(i.a)(t)&&t.pipe(Object(d.a)(this._destroyed)).subscribe((function(t){return e._setRoleFromChildren(t)}))}}},{key:"_setRoleFromChildren",value:function(e){this.role=e&&e.length?"group":"treeitem"}},{key:"data",get:function(){return this._data},set:function(e){e!==this._data&&(this._data=e,this._setRoleFromData(),this._dataChanges.next())}},{key:"isExpanded",get:function(){return this._tree.treeControl.isExpanded(this._data)}},{key:"level",get:function(){return this._tree.treeControl.getLevel?this._tree.treeControl.getLevel(this._data):0}}]),e}();return e.mostRecentTreeNode=null,e}(),C=function(e){function t(e,n,r){var i;return _classCallCheck(this,t),(i=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e,n)))._elementRef=e,i._tree=n,i._differs=r,i}return _inherits(t,e),_createClass(t,[{key:"ngAfterContentInit",value:function(){var e=this;if(this._dataDiffer=this._differs.find([]).create(this._tree.trackBy),!this._tree.treeControl.getChildren)throw g();var t=this._tree.treeControl.getChildren(this.data);Array.isArray(t)?this.updateChildrenNodes(t):Object(i.a)(t)&&t.pipe(Object(d.a)(this._destroyed)).subscribe((function(t){return e.updateChildrenNodes(t)})),this.nodeOutlet.changes.pipe(Object(d.a)(this._destroyed)).subscribe((function(){return e.updateChildrenNodes()}))}},{key:"ngOnDestroy",value:function(){this._clear(),_get(_getPrototypeOf(t.prototype),"ngOnDestroy",this).call(this)}},{key:"updateChildrenNodes",value:function(e){var t=this._getNodeOutlet();e&&(this._children=e),t&&this._children?this._tree.renderNodeChanges(this._children,this._dataDiffer,t.viewContainer,this._data):this._dataDiffer.diff([])}},{key:"_clear",value:function(){var e=this._getNodeOutlet();e&&(e.viewContainer.clear(),this._dataDiffer.diff([]))}},{key:"_getNodeOutlet",value:function(){var e=this,t=this.nodeOutlet;return t&&t.find((function(t){return!t._node||t._node===e}))}}]),t}(O),m=/([A-Za-z%]+)$/,j=function(){function e(t,n,r,i,a){var s=this;_classCallCheck(this,e),this._treeNode=t,this._tree=n,this._element=i,this._dir=a,this._destroyed=new o.a,this.indentUnits="px",this._indent=40,this._setPadding(),a&&a.change.pipe(Object(d.a)(this._destroyed)).subscribe((function(){return s._setPadding(!0)})),t._dataChanges.subscribe((function(){return s._setPadding()}))}return _createClass(e,[{key:"ngOnDestroy",value:function(){this._destroyed.next(),this._destroyed.complete()}},{key:"_paddingIndent",value:function(){var e=this._treeNode.data&&this._tree.treeControl.getLevel?this._tree.treeControl.getLevel(this._treeNode.data):null,t=null==this._level?e:this._level;return"number"==typeof t?"".concat(t*this._indent).concat(this.indentUnits):null}},{key:"_setPadding",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this._paddingIndent();if(t!==this._currentPadding||e){var n=this._element.nativeElement,r=this._dir&&"rtl"===this._dir.value?"paddingRight":"paddingLeft",i="paddingLeft"===r?"paddingRight":"paddingLeft";n.style[r]=t||"",n.style[i]="",this._currentPadding=t}}},{key:"level",get:function(){return this._level},set:function(e){this._level=Object(u.f)(e,null),this._setPadding()}},{key:"indent",get:function(){return this._indent},set:function(e){var t=e,n="px";if("string"==typeof e){var r=e.split(m);t=r[0],n=r[1]||n}this.indentUnits=n,this._indent=Object(u.f)(t),this._setPadding()}}]),e}(),k=function(){function e(t,n){_classCallCheck(this,e),this._tree=t,this._treeNode=n,this._recursive=!1}return _createClass(e,[{key:"_toggle",value:function(e){this.recursive?this._tree.treeControl.toggleDescendants(this._treeNode.data):this._tree.treeControl.toggle(this._treeNode.data),e.stopPropagation()}},{key:"recursive",get:function(){return this._recursive},set:function(e){this._recursive=Object(u.c)(e)}}]),e}(),x=function e(){_classCallCheck(this,e)}}}]);