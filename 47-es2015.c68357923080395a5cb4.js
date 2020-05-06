(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{SkoR:function(t,e,i){"use strict";i.r(e);var s=i("ofXK"),r=i("fXoL"),o=(i("FKr1"),i("8LU1"));class n{constructor(t,e){this._element=t,this._gridList=e,this._rowspan=1,this._colspan=1}get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round(Object(o.f)(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round(Object(o.f)(t))}_setStyle(t,e){this._element.nativeElement.style[t]=e}}class l{constructor(){this.columnIndex=0,this.rowIndex=0}get rowCount(){return this.rowIndex+1}get rowspan(){const t=Math.max(...this.tracker);return t>1?this.rowCount+t-1:this.rowCount}update(t,e){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(t),this.tracker.fill(0,0,this.tracker.length),this.positions=e.map(t=>this._trackTile(t))}_trackTile(t){const e=this._findMatchingGap(t.colspan);return this._markTilePosition(e,t),this.columnIndex=e+t.colspan,new h(this.rowIndex,e)}_findMatchingGap(t){if(t>this.tracker.length)throw Error(`mat-grid-list: tile with colspan ${t} is wider than `+`grid with cols="${this.tracker.length}".`);let e=-1,i=-1;do{this.columnIndex+t>this.tracker.length?(this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(e)):(e=this.tracker.indexOf(0,this.columnIndex),-1!=e?(i=this._findGapEndIndex(e),this.columnIndex=e+1):(this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(e)))}while(i-e<t||0==i);return Math.max(e,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let t=0;t<this.tracker.length;t++)this.tracker[t]=Math.max(0,this.tracker[t]-1)}_findGapEndIndex(t){for(let e=t+1;e<this.tracker.length;e++)if(0!=this.tracker[e])return e;return this.tracker.length}_markTilePosition(t,e){for(let i=0;i<e.colspan;i++)this.tracker[t+i]=e.rowspan}}class h{constructor(t,e){this.row=t,this.col=e}}const c=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;class a{constructor(){this._rows=0,this._rowspan=0}init(t,e,i,s){this._gutterSize=p(t),this._rows=e.rowCount,this._rowspan=e.rowspan,this._cols=i,this._direction=s}getBaseTileSize(t,e){return`(${t}% - (${this._gutterSize} * ${e}))`}getTilePosition(t,e){return 0===e?"0":_(`(${t} + ${this._gutterSize}) * ${e}`)}getTileSize(t,e){return`(${t} * ${e}) + (${e-1} * ${this._gutterSize})`}setStyle(t,e,i){let s=100/this._cols,r=(this._cols-1)/this._cols;this.setColStyles(t,i,s,r),this.setRowStyles(t,e,s,r)}setColStyles(t,e,i,s){let r=this.getBaseTileSize(i,s);t._setStyle("rtl"===this._direction?"right":"left",this.getTilePosition(r,e)),t._setStyle("width",_(this.getTileSize(r,t.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(t){return`${this._rowspan} * ${this.getTileSize(t,1)}`}getComputedHeight(){return null}}class g extends a{constructor(t){super(),this.fixedRowHeight=t}init(t,e,i,s){if(super.init(t,e,i,s),this.fixedRowHeight=p(this.fixedRowHeight),!c.test(this.fixedRowHeight))throw Error(`Invalid value "${this.fixedRowHeight}" set as rowHeight.`)}setRowStyles(t,e){t._setStyle("top",this.getTilePosition(this.fixedRowHeight,e)),t._setStyle("height",_(this.getTileSize(this.fixedRowHeight,t.rowspan)))}getComputedHeight(){return["height",_(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(t){t._setListStyle(["height",null]),t._tiles&&t._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}class u extends a{constructor(t){super(),this._parseRatio(t)}setRowStyles(t,e,i,s){this.baseTileHeight=this.getBaseTileSize(i/this.rowHeightRatio,s),t._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,e)),t._setStyle("paddingTop",_(this.getTileSize(this.baseTileHeight,t.rowspan)))}getComputedHeight(){return["paddingBottom",_(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(t){t._setListStyle(["paddingBottom",null]),t._tiles.forEach(t=>{t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})}_parseRatio(t){const e=t.split(":");if(2!==e.length)throw Error(`mat-grid-list: invalid ratio given for row-height: "${t}"`);this.rowHeightRatio=parseFloat(e[0])/parseFloat(e[1])}}class d extends a{setRowStyles(t,e){let i=this.getBaseTileSize(100/this._rowspan,(this._rows-1)/this._rows);t._setStyle("top",this.getTilePosition(i,e)),t._setStyle("height",_(this.getTileSize(i,t.rowspan)))}reset(t){t._tiles&&t._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}function _(t){return`calc(${t})`}function p(t){return t.match(/([A-Za-z%]+)$/)?t:`${t}px`}class w{constructor(t,e){this._element=t,this._dir=e,this._gutter="1px"}get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round(Object(o.f)(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${null==t?"":t}`}get rowHeight(){return this._rowHeight}set rowHeight(t){const e=`${null==t?"":t}`;e!==this._rowHeight&&(this._rowHeight=e,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){if(!this.cols)throw Error('mat-grid-list: must pass in number of columns. Example: <mat-grid-list cols="3">')}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),this._tileStyler="fit"===t?new d:t&&t.indexOf(":")>-1?new u(t):new g(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new l);const t=this._tileCoordinator,e=this._tiles.filter(t=>!t._gridList||t._gridList===this),i=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,e),this._tileStyler.init(this.gutterSize,t,this.cols,i),e.forEach((e,i)=>{const s=t.positions[i];this._tileStyler.setStyle(e,s.row,s.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}}class f{}function m(t,e){if(1&t&&(Object(r.gc)(0,"mat-grid-tile",2),Object(r.Qc)(1),Object(r.fc)()),2&t){const t=e.$implicit;Object(r.Nc)("background",t.color,r.Tb),Object(r.yc)("colspan",t.cols)("rowspan",t.rows),Object(r.Mb)(1),Object(r.Sc)(" ",t.text," ")}}i.d(e,"GridListDynamicExample",(function(){return S})),i.d(e,"GridListExamplesModule",(function(){return b})),i.d(e,"GridListOverviewExample",(function(){return x}));let S=(()=>{class t{constructor(){this.tiles=[{text:"One",cols:3,rows:1,color:"lightblue"},{text:"Two",cols:1,rows:2,color:"lightgreen"},{text:"Three",cols:1,rows:1,color:"lightpink"},{text:"Four",cols:2,rows:1,color:"#DDBDF1"}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Object(r.Ub)({type:t,selectors:[["grid-list-dynamic-example"]],decls:2,vars:1,consts:[["cols","4","rowHeight","100px"],[3,"colspan","rowspan","background",4,"ngFor","ngForOf"],[3,"colspan","rowspan"]],template:function(t,e){1&t&&(Object(r.gc)(0,"mat-grid-list",0),Object(r.Oc)(1,m,2,5,"mat-grid-tile",1),Object(r.fc)()),2&t&&(Object(r.Mb)(1),Object(r.yc)("ngForOf",e.tiles))},directives:[w,s.s,n],styles:[""]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Object(r.Ub)({type:t,selectors:[["grid-list-overview-example"]],decls:9,vars:0,consts:[["cols","2","rowHeight","2:1"]],template:function(t,e){1&t&&(Object(r.gc)(0,"mat-grid-list",0),Object(r.gc)(1,"mat-grid-tile"),Object(r.Qc)(2,"1"),Object(r.fc)(),Object(r.gc)(3,"mat-grid-tile"),Object(r.Qc)(4,"2"),Object(r.fc)(),Object(r.gc)(5,"mat-grid-tile"),Object(r.Qc)(6,"3"),Object(r.fc)(),Object(r.gc)(7,"mat-grid-tile"),Object(r.Qc)(8,"4"),Object(r.fc)(),Object(r.fc)())},directives:[w,n],styles:["mat-grid-tile[_ngcontent-%COMP%] {\n  background: lightblue;\n}"]}),t})(),b=(()=>{class t{}return t.\u0275mod=Object(r.Yb)({type:t}),t.\u0275inj=Object(r.Xb)({factory:function(e){return new(e||t)},imports:[[s.c,f]]}),t})()}}]);