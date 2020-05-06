function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"3QMo":function(e,t,o){"use strict";o.r(t);var i=o("fXoL"),n=o("3Pt+");o("ofXK");var a=function(){function e(t,o,n){_classCallCheck(this,e),this._clipboard=t,this._ngZone=o,this.text="",this.attempts=1,this.copied=new i.r,this._deprecatedCopied=this.copied,this._pending=new Set,n&&null!=n.attempts&&(this.attempts=n.attempts)}return _createClass(e,[{key:"copy",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.attempts;if(t>1){var o=t,i=this._clipboard.beginCopy(this.text);this._pending.add(i);var n=function t(){var n=i.copy();n||!--o||e._destroyed?(e._currentTimeout=null,e._pending.delete(i),i.destroy(),e.copied.emit(n)):e._currentTimeout=e._ngZone?e._ngZone.runOutsideAngular((function(){return setTimeout(t,1)})):setTimeout(t,1)};n()}else this.copied.emit(this._clipboard.copy(this.text))}},{key:"ngOnDestroy",value:function(){this._currentTimeout&&clearTimeout(this._currentTimeout),this._pending.forEach((function(e){return e.destroy()})),this._pending.clear(),this._destroyed=!0}}]),e}(),r=function e(){_classCallCheck(this,e)};o.d(t,"CdkClipboardExamplesModule",(function(){return d})),o.d(t,"CdkClipboardOverviewExample",(function(){return l}));var c,s,l=((s=function e(){_classCallCheck(this,e),this.value="Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself."}).\u0275fac=function(e){return new(e||s)},s.\u0275cmp=Object(i.Ub)({type:s,selectors:[["cdk-clipboard-overview-example"]],decls:5,vars:2,consts:[["for","clipboard-example-textarea"],["id","clipboard-example-textarea","cols","30","rows","10",3,"ngModel","ngModelChange"],[3,"cdkCopyToClipboard"]],template:function(e,t){1&e&&(Object(i.gc)(0,"label",0),Object(i.Qc)(1,"Text to be copied"),Object(i.fc)(),Object(i.gc)(2,"textarea",1),Object(i.oc)("ngModelChange",(function(e){return t.value=e})),Object(i.fc)(),Object(i.gc)(3,"button",2),Object(i.Qc)(4,"Copy to clipboard"),Object(i.fc)()),2&e&&(Object(i.Mb)(2),Object(i.yc)("ngModel",t.value),Object(i.Mb)(1),Object(i.yc)("cdkCopyToClipboard",t.value))},directives:[n.b,n.m,n.p,a],styles:["textarea[_ngcontent-%COMP%] {\n  display: block;\n  margin: 4px 0 8px;\n}"]}),s),d=((c=function e(){_classCallCheck(this,e)}).\u0275mod=Object(i.Yb)({type:c}),c.\u0275inj=Object(i.Xb)({factory:function(e){return new(e||c)},imports:[[r,n.i]]}),c)}}]);