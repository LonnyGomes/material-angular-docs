(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"SF/R":function(t,e,i){"use strict";i.r(e),i.d(e,"ProgressSpinnerConfigurableExample",(function(){return d})),i.d(e,"ProgressSpinnerExamplesModule",(function(){return m})),i.d(e,"ProgressSpinnerOverviewExample",(function(){return u}));var s=i("ofXK"),r=i("fXoL"),n=i("3Pt+"),a=i("Wp6s"),o=i("pu8Q"),c=i("zQhy"),h=i("mPVK");function l(t,e){if(1&t){const t=Object(r.hc)();Object(r.gc)(0,"section",1),Object(r.gc)(1,"label",2),Object(r.Qc)(2,"Progress:"),Object(r.fc)(),Object(r.gc)(3,"mat-slider",11),Object(r.oc)("ngModelChange",(function(e){return Object(r.Hc)(t),Object(r.sc)().value=e})),Object(r.fc)(),Object(r.fc)()}if(2&t){const t=Object(r.sc)();Object(r.Mb)(3),Object(r.yc)("ngModel",t.value)}}let d=(()=>{class t{constructor(){this.color="primary",this.mode="determinate",this.value=50}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Object(r.Ub)({type:t,selectors:[["progress-spinner-configurable-example"]],decls:28,vars:6,consts:[[1,"example-h2"],[1,"example-section"],[1,"example-margin"],[3,"ngModel","ngModelChange"],["value","primary",1,"example-margin"],["value","accent",1,"example-margin"],["value","warn",1,"example-margin"],["value","determinate",1,"example-margin"],["value","indeterminate",1,"example-margin"],["class","example-section",4,"ngIf"],[1,"example-margin",3,"color","mode","value"],[1,"example-margin",3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&(Object(r.gc)(0,"mat-card"),Object(r.gc)(1,"mat-card-content"),Object(r.gc)(2,"h2",0),Object(r.Qc)(3,"Progress spinner configuration"),Object(r.fc)(),Object(r.gc)(4,"section",1),Object(r.gc)(5,"label",2),Object(r.Qc)(6,"Color:"),Object(r.fc)(),Object(r.gc)(7,"mat-radio-group",3),Object(r.oc)("ngModelChange",(function(t){return e.color=t})),Object(r.gc)(8,"mat-radio-button",4),Object(r.Qc)(9," Primary "),Object(r.fc)(),Object(r.gc)(10,"mat-radio-button",5),Object(r.Qc)(11," Accent "),Object(r.fc)(),Object(r.gc)(12,"mat-radio-button",6),Object(r.Qc)(13," Warn "),Object(r.fc)(),Object(r.fc)(),Object(r.fc)(),Object(r.gc)(14,"section",1),Object(r.gc)(15,"label",2),Object(r.Qc)(16,"Mode:"),Object(r.fc)(),Object(r.gc)(17,"mat-radio-group",3),Object(r.oc)("ngModelChange",(function(t){return e.mode=t})),Object(r.gc)(18,"mat-radio-button",7),Object(r.Qc)(19," Determinate "),Object(r.fc)(),Object(r.gc)(20,"mat-radio-button",8),Object(r.Qc)(21," Indeterminate "),Object(r.fc)(),Object(r.fc)(),Object(r.fc)(),Object(r.Oc)(22,l,4,1,"section",9),Object(r.fc)(),Object(r.fc)(),Object(r.gc)(23,"mat-card"),Object(r.gc)(24,"mat-card-content"),Object(r.gc)(25,"h2",0),Object(r.Qc)(26,"Result"),Object(r.fc)(),Object(r.bc)(27,"mat-progress-spinner",10),Object(r.fc)(),Object(r.fc)()),2&t&&(Object(r.Mb)(7),Object(r.yc)("ngModel",e.color),Object(r.Mb)(10),Object(r.yc)("ngModel",e.mode),Object(r.Mb)(5),Object(r.yc)("ngIf","determinate"===e.mode),Object(r.Mb)(5),Object(r.yc)("color",e.color)("mode",e.mode)("value",e.value))},directives:[a.a,a.d,c.b,n.m,n.p,c.a,s.t,o.a,h.a],styles:[".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Object(r.Ub)({type:t,selectors:[["progress-spinner-overview-example"]],decls:1,vars:0,template:function(t,e){1&t&&Object(r.bc)(0,"mat-spinner")},directives:[o.c],styles:[""]}),t})(),m=(()=>{class t{}return t.\u0275mod=Object(r.Yb)({type:t}),t.\u0275inj=Object(r.Xb)({factory:function(e){return new(e||t)},imports:[[s.c,a.g,o.b,c.c,h.b,n.i]]}),t})()},Wp6s:function(t,e,i){"use strict";i.d(e,"a",(function(){return g})),i.d(e,"b",(function(){return m})),i.d(e,"c",(function(){return p})),i.d(e,"d",(function(){return l})),i.d(e,"e",(function(){return b})),i.d(e,"f",(function(){return _})),i.d(e,"g",(function(){return v})),i.d(e,"h",(function(){return u})),i.d(e,"i",(function(){return d}));var s=i("R1ws"),r=i("FKr1"),n=i("fXoL");const a=["*",[["mat-card-footer"]]],o=["*","mat-card-footer"],c=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],h=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"];let l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.Vb({type:t,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.Vb({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.Vb({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),t})(),m=(()=>{class t{constructor(){this.align="start"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.Vb({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(t,e){2&t&&n.Qb("mat-card-actions-align-end","end"===e.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),t})(),_=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.Vb({type:t,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-card-image"]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.Vb({type:t,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-card-avatar"]}),t})(),g=(()=>{class t{constructor(t){this._animationMode=t}}return t.\u0275fac=function(e){return new(e||t)(n.ac(s.a,8))},t.\u0275cmp=n.Ub({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,e){2&t&&n.Qb("_mat-animation-noopable","NoopAnimations"===e._animationMode)},exportAs:["matCard"],ngContentSelectors:o,decls:2,vars:0,template:function(t,e){1&t&&(n.xc(a),n.wc(0),n.wc(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t})(),b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Ub({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:h,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(t,e){1&t&&(n.xc(c),n.wc(0),n.gc(1,"div",0),n.wc(2,1),n.fc(),n.wc(3,2))},encapsulation:2,changeDetection:0}),t})(),v=(()=>{class t{}return t.\u0275mod=n.Yb({type:t}),t.\u0275inj=n.Xb({factory:function(e){return new(e||t)},imports:[[r.g],r.g]}),t})()},mPVK:function(t,e,i){"use strict";i.d(e,"a",(function(){return m})),i.d(e,"b",(function(){return g}));var s=i("fXoL"),r=i("FKr1"),n=i("8LU1"),a=i("FtGj"),o=(i("3Pt+"),i("nLfN")),c=i("quSY");const h=Object(o.f)({passive:!1});class l{}class d{constructor(t){this._elementRef=t}}const u=Object(r.A)(Object(r.v)(Object(r.x)(d),"accent"));class m extends u{constructor(t,e,i,r,n,a,o,l){super(t),this._focusMonitor=e,this._changeDetectorRef=i,this._dir=r,this._animationMode=a,this._ngZone=o,this._invert=!1,this._max=100,this._min=0,this._step=1,this._thumbLabel=!1,this._tickInterval=0,this._value=null,this._vertical=!1,this.change=new s.r,this.input=new s.r,this.valueChange=new s.r,this.onTouched=()=>{},this._percent=0,this._isSliding=!1,this._isActive=!1,this._tickIntervalPercent=0,this._sliderDimensions=null,this._controlValueAccessorChangeFn=()=>{},this._dirChangeSubscription=c.a.EMPTY,this._pointerDown=t=>{this.disabled||this._isSliding||!_(t)&&0!==t.button||this._runInsideZone(()=>{const e=this.value,i=p(t);this._isSliding=!0,this._lastPointerEvent=t,t.preventDefault(),this._focusHostElement(),this._onMouseenter(),this._bindGlobalEvents(t),this._focusHostElement(),this._updateValueFromPosition(i),this._valueOnSlideStart=this.value,this._pointerPositionOnStart=i,e!=this.value&&(this._emitInputEvent(),this._emitChangeEvent())})},this._pointerMove=t=>{if(this._isSliding){t.preventDefault();const e=this.value;this._lastPointerEvent=t,this._updateValueFromPosition(p(t)),e!=this.value&&this._emitInputEvent()}},this._pointerUp=t=>{if(this._isSliding){const e=this._pointerPositionOnStart,i=p(t);t.preventDefault(),this._removeGlobalEvents(),this._valueOnSlideStart=this._pointerPositionOnStart=this._lastPointerEvent=null,this._isSliding=!1,this._valueOnSlideStart==this.value||this.disabled||!e||e.x===i.x&&e.y===i.y||this._emitChangeEvent()}},this._windowBlur=()=>{this._lastPointerEvent&&this._pointerUp(this._lastPointerEvent)},this._document=l,this.tabIndex=parseInt(n)||0,this._runOutsizeZone(()=>{const e=t.nativeElement;e.addEventListener("mousedown",this._pointerDown,h),e.addEventListener("touchstart",this._pointerDown,h)})}get invert(){return this._invert}set invert(t){this._invert=Object(n.c)(t)}get max(){return this._max}set max(t){this._max=Object(n.f)(t,this._max),this._percent=this._calculatePercentage(this._value),this._changeDetectorRef.markForCheck()}get min(){return this._min}set min(t){this._min=Object(n.f)(t,this._min),null===this._value&&(this.value=this._min),this._percent=this._calculatePercentage(this._value),this._changeDetectorRef.markForCheck()}get step(){return this._step}set step(t){this._step=Object(n.f)(t,this._step),this._step%1!=0&&(this._roundToDecimal=this._step.toString().split(".").pop().length),this._changeDetectorRef.markForCheck()}get thumbLabel(){return this._thumbLabel}set thumbLabel(t){this._thumbLabel=Object(n.c)(t)}get tickInterval(){return this._tickInterval}set tickInterval(t){this._tickInterval="auto"===t?"auto":"number"==typeof t||"string"==typeof t?Object(n.f)(t,this._tickInterval):0}get value(){return null===this._value&&(this.value=this._min),this._value}set value(t){if(t!==this._value){let e=Object(n.f)(t);this._roundToDecimal&&(e=parseFloat(e.toFixed(this._roundToDecimal))),this._value=e,this._percent=this._calculatePercentage(this._value),this._changeDetectorRef.markForCheck()}}get vertical(){return this._vertical}set vertical(t){this._vertical=Object(n.c)(t)}get displayValue(){return this.displayWith?this.displayWith(this.value):this._roundToDecimal&&this.value&&this.value%1!=0?this.value.toFixed(this._roundToDecimal):this.value||0}focus(t){this._focusHostElement(t)}blur(){this._blurHostElement()}get percent(){return this._clamp(this._percent)}get _invertAxis(){return this.vertical?!this.invert:this.invert}get _isMinValue(){return 0===this.percent}get _thumbGap(){return this.disabled?7:this._isMinValue&&!this.thumbLabel?this._isActive?10:7:0}get _trackBackgroundStyles(){const t=this.vertical?`1, ${1-this.percent}, 1`:`${1-this.percent}, 1, 1`;return{transform:`translate${this.vertical?"Y":"X"}(${this._shouldInvertMouseCoords()?"-":""}${this._thumbGap}px) scale3d(${t})`}}get _trackFillStyles(){const t=this.percent,e=this.vertical?`1, ${t}, 1`:`${t}, 1, 1`;return{transform:`translate${this.vertical?"Y":"X"}(${this._shouldInvertMouseCoords()?"":"-"}${this._thumbGap}px) scale3d(${e})`,display:0===t?"none":""}}get _ticksContainerStyles(){return{transform:`translate${this.vertical?"Y":"X"}(${this.vertical||"rtl"!=this._getDirection()?"-":""}${this._tickIntervalPercent/2*100}%)`}}get _ticksStyles(){let t=100*this._tickIntervalPercent,e={backgroundSize:this.vertical?`2px ${t}%`:`${t}% 2px`,transform:`translateZ(0) translate${this.vertical?"Y":"X"}(${this.vertical||"rtl"!=this._getDirection()?"":"-"}${t/2}%)${this.vertical||"rtl"!=this._getDirection()?"":" rotate(180deg)"}`};if(this._isMinValue&&this._thumbGap){let t;t=this.vertical?this._invertAxis?"Bottom":"Top":this._invertAxis?"Right":"Left",e[`padding${t}`]=`${this._thumbGap}px`}return e}get _thumbContainerStyles(){return{transform:`translate${this.vertical?"Y":"X"}(-${100*(("rtl"!=this._getDirection()||this.vertical?this._invertAxis:!this._invertAxis)?this.percent:1-this.percent)}%)`}}_shouldInvertMouseCoords(){return"rtl"!=this._getDirection()||this.vertical?this._invertAxis:!this._invertAxis}_getDirection(){return this._dir&&"rtl"==this._dir.value?"rtl":"ltr"}ngOnInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{this._isActive=!!t&&"keyboard"!==t,this._changeDetectorRef.detectChanges()}),this._dir&&(this._dirChangeSubscription=this._dir.change.subscribe(()=>{this._changeDetectorRef.markForCheck()}))}ngOnDestroy(){const t=this._elementRef.nativeElement;t.removeEventListener("mousedown",this._pointerDown,h),t.removeEventListener("touchstart",this._pointerDown,h),this._lastPointerEvent=null,this._removeGlobalEvents(),this._focusMonitor.stopMonitoring(this._elementRef),this._dirChangeSubscription.unsubscribe()}_onMouseenter(){this.disabled||(this._sliderDimensions=this._getSliderDimensions(),this._updateTickIntervalPercent())}_onFocus(){this._sliderDimensions=this._getSliderDimensions(),this._updateTickIntervalPercent()}_onBlur(){this.onTouched()}_onKeydown(t){if(this.disabled||Object(a.t)(t))return;const e=this.value;switch(t.keyCode){case a.m:this._increment(10);break;case a.l:this._increment(-10);break;case a.f:this.value=this.max;break;case a.i:this.value=this.min;break;case a.j:this._increment("rtl"==this._getDirection()?1:-1);break;case a.q:this._increment(1);break;case a.n:this._increment("rtl"==this._getDirection()?-1:1);break;case a.e:this._increment(-1);break;default:return}e!=this.value&&(this._emitInputEvent(),this._emitChangeEvent()),this._isSliding=!0,t.preventDefault()}_onKeyup(){this._isSliding=!1}_getWindow(){var t;return(null===(t=this._document)||void 0===t?void 0:t.defaultView)||window}_bindGlobalEvents(t){const e=this._document;if(void 0!==e&&e){const i=_(t),s=i?"touchend":"mouseup";e.addEventListener(i?"touchmove":"mousemove",this._pointerMove,h),e.addEventListener(s,this._pointerUp,h),i&&e.addEventListener("touchcancel",this._pointerUp,h)}const i=this._getWindow();void 0!==i&&i&&i.addEventListener("blur",this._windowBlur)}_removeGlobalEvents(){const t=this._document;void 0!==t&&t&&(t.removeEventListener("mousemove",this._pointerMove,h),t.removeEventListener("mouseup",this._pointerUp,h),t.removeEventListener("touchmove",this._pointerMove,h),t.removeEventListener("touchend",this._pointerUp,h),t.removeEventListener("touchcancel",this._pointerUp,h));const e=this._getWindow();void 0!==e&&e&&e.removeEventListener("blur",this._windowBlur)}_increment(t){this.value=this._clamp((this.value||0)+this.step*t,this.min,this.max)}_updateValueFromPosition(t){if(!this._sliderDimensions)return;let e=this._clamp(((this.vertical?t.y:t.x)-(this.vertical?this._sliderDimensions.top:this._sliderDimensions.left))/(this.vertical?this._sliderDimensions.height:this._sliderDimensions.width));if(this._shouldInvertMouseCoords()&&(e=1-e),0===e)this.value=this.min;else if(1===e)this.value=this.max;else{const t=this._calculateValue(e),i=Math.round((t-this.min)/this.step)*this.step+this.min;this.value=this._clamp(i,this.min,this.max)}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.value),this.valueChange.emit(this.value),this.change.emit(this._createChangeEvent())}_emitInputEvent(){this.input.emit(this._createChangeEvent())}_updateTickIntervalPercent(){if(this.tickInterval&&this._sliderDimensions)if("auto"==this.tickInterval){let t=this.vertical?this._sliderDimensions.height:this._sliderDimensions.width,e=Math.ceil(30/(t*this.step/(this.max-this.min)));this._tickIntervalPercent=e*this.step/t}else this._tickIntervalPercent=this.tickInterval*this.step/(this.max-this.min)}_createChangeEvent(t=this.value){let e=new l;return e.source=this,e.value=t,e}_calculatePercentage(t){return((t||0)-this.min)/(this.max-this.min)}_calculateValue(t){return this.min+t*(this.max-this.min)}_clamp(t,e=0,i=1){return Math.max(e,Math.min(t,i))}_getSliderDimensions(){return this._sliderWrapper?this._sliderWrapper.nativeElement.getBoundingClientRect():null}_focusHostElement(t){this._elementRef.nativeElement.focus(t)}_blurHostElement(){this._elementRef.nativeElement.blur()}_runInsideZone(t){this._ngZone?this._ngZone.run(t):t()}_runOutsizeZone(t){this._ngZone?this._ngZone.runOutsideAngular(t):t()}writeValue(t){this.value=t}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t}}function _(t){return"t"===t.type[0]}function p(t){const e=_(t)?t.touches[0]||t.changedTouches[0]:t;return{x:e.clientX,y:e.clientY}}class g{}},pu8Q:function(t,e,i){"use strict";i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return l})),i.d(e,"c",(function(){return h})),i("fXoL");var s=i("FKr1"),r=i("8LU1"),n=i("nLfN");class a{constructor(t){this._elementRef=t}}const o=Object(s.v)(a,"primary");let c=(()=>{class t extends o{constructor(e,i,s,r,n){super(e),this._elementRef=e,this._document=s,this._diameter=100,this._value=0,this._fallbackAnimation=!1,this.mode="determinate";const a=t._diameters;a.has(s.head)||a.set(s.head,new Set([100])),this._fallbackAnimation=i.EDGE||i.TRIDENT,this._noopAnimations="NoopAnimations"===r&&!!n&&!n._forceAnimations,n&&(n.diameter&&(this.diameter=n.diameter),n.strokeWidth&&(this.strokeWidth=n.strokeWidth))}get diameter(){return this._diameter}set diameter(t){this._diameter=Object(r.f)(t),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(t){this._strokeWidth=Object(r.f)(t)}get value(){return"determinate"===this.mode?this._value:0}set value(t){this._value=Math.max(0,Math.min(100,Object(r.f)(t)))}ngOnInit(){const t=this._elementRef.nativeElement;this._styleRoot=Object(n.c)(t)||this._document.head,this._attachStyleNode(),t.classList.add(`mat-progress-spinner-indeterminate${this._fallbackAnimation?"-fallback":""}-animation`)}get _circleRadius(){return(this.diameter-10)/2}get _viewBox(){const t=2*this._circleRadius+this.strokeWidth;return`0 0 ${t} ${t}`}get _strokeCircumference(){return 2*Math.PI*this._circleRadius}get _strokeDashOffset(){return"determinate"===this.mode?this._strokeCircumference*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._strokeCircumference:null}get _circleStrokeWidth(){return this.strokeWidth/this.diameter*100}_attachStyleNode(){const e=this._styleRoot,i=this._diameter,s=t._diameters;let r=s.get(e);if(!r||!r.has(i)){const t=this._document.createElement("style");t.setAttribute("mat-spinner-animation",i+""),t.textContent=this._getAnimationText(),e.appendChild(t),r||(r=new Set,s.set(e,r)),r.add(i)}}_getAnimationText(){return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,`${.95*this._strokeCircumference}`).replace(/END_VALUE/g,`${.2*this._strokeCircumference}`).replace(/DIAMETER/g,`${this.diameter}`)}}return t._diameters=new WeakMap,t})();class h extends c{constructor(t,e,i,s,r){super(t,e,i,s,r),this.mode="indeterminate"}}class l{}},zQhy:function(t,e,i){"use strict";i.d(e,"a",(function(){return d})),i.d(e,"b",(function(){return c})),i.d(e,"c",(function(){return u}));var s=i("fXoL"),r=i("FKr1"),n=i("8LU1");i("3Pt+");let a=0;class o{constructor(t,e){this.source=t,this.value=e}}class c{constructor(t){this._changeDetector=t,this._value=null,this._name=`mat-radio-group-${a++}`,this._selected=null,this._isInitialized=!1,this._labelPosition="after",this._disabled=!1,this._required=!1,this._controlValueAccessorChangeFn=()=>{},this.onTouched=()=>{},this.change=new s.r}get name(){return this._name}set name(t){this._name=t,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(t){this._labelPosition="before"===t?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(t){this._selected=t,this.value=t?t.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(t){this._disabled=Object(n.c)(t),this._markRadiosForCheck()}get required(){return this._required}set required(t){this._required=Object(n.c)(t),this._markRadiosForCheck()}ngAfterContentInit(){this._isInitialized=!0}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(t=>{t.name=this.name,t._markForCheck()})}_updateSelectedRadioFromValue(){this._radios&&(null===this._selected||this._selected.value!==this._value)&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new o(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(t=>t._markForCheck())}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetector.markForCheck()}}class h{constructor(t){this._elementRef=t}}const l=Object(r.w)(Object(r.A)(h));class d extends l{constructor(t,e,i,r,n,o,c){super(e),this._changeDetector=i,this._focusMonitor=r,this._radioDispatcher=n,this._animationMode=o,this._providerOverride=c,this._uniqueId=`mat-radio-${++a}`,this.id=this._uniqueId,this.change=new s.r,this._checked=!1,this._value=null,this._removeUniqueSelectionListener=()=>{},this.radioGroup=t,this._removeUniqueSelectionListener=n.listen((t,e)=>{t!==this.id&&e===this.name&&(this.checked=!1)})}get checked(){return this._checked}set checked(t){const e=Object(n.c)(t);this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,null!==this.radioGroup&&(this.checked||(this.checked=this.radioGroup.value===t),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(t){this._labelPosition=t}get disabled(){return this._disabled||null!==this.radioGroup&&this.radioGroup.disabled}set disabled(t){this._setDisabled(Object(n.c)(t))}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(t){this._required=Object(n.c)(t)}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._providerOverride&&this._providerOverride.color||"accent"}set color(t){this._color=t}get inputId(){return`${this.id||this._uniqueId}-input`}focus(t){this._focusMonitor.focusVia(this._inputElement,"keyboard",t)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.name=this.radioGroup.name)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{!t&&this.radioGroup&&this.radioGroup._touch()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new o(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputClick(t){t.stopPropagation()}_onInputChange(t){t.stopPropagation();const e=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),e&&this.radioGroup._emitChangeEvent())}_setDisabled(t){this._disabled!==t&&(this._disabled=t,this._changeDetector.markForCheck())}}class u{}}}]);