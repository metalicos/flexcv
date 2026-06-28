import{c as Mn,d as Rn,e as An,g as Pn,h as Ln,i as fe,j as Fn,l as On,m as Nn,o as Vn,p as Hn,q as Qn,r as Gn,s as Un}from"./chunk-IPDPT2MA.js";import{a as sn}from"./chunk-JGT7JFWM.js";import{$ as re,B as Sn,C as En,E as Y,H as X,J as ee,L as te,O as ne,P as jn,Q as Wn,R as ie,U as zn,X as ae,Y as oe,aa as se,b as Xe,c as dn,e as vt,f as et,g as cn,h as mn,i as J,j as je,k as tt,m as pn,n as un,o as hn,q as nt,s as bn,v as it,w as Dn,x as Tn,y as In,z as wn}from"./chunk-MY33IDG4.js";import{$ as G,A as fn,E as _n,G as gn,H as vn,J as yn,N as be,P as Cn,W as Ct,X as xn,Y as kn,_ as Q,aa as K,ba as Z,g as rn,ga as xt,j as Ne,ja as Bn,k as Ze,ka as H,n as ln,q as gt,s as Ie,w as Ye,x as he,y as we,z as yt}from"./chunk-T6KVZ6ED.js";import{$b as Fe,A as Gt,B as ye,Cb as I,Db as _t,Eb as u,Gb as p,Hb as Ge,Ib as Ue,J as Ut,Jb as $e,K as $,Kb as ue,L as $t,Lb as D,M as Re,Mb as T,Oa as d,Ob as en,Pb as tn,Qb as Be,Rb as nn,S as N,Sb as w,T as Ce,Ta as xe,Tb as qe,Ua as ke,Ub as m,V as P,Vb as b,Wa as Ae,Wb as S,X as s,Za as Kt,a as de,aa as _,ba as g,bb as y,c as Vt,cb as De,d as O,da as j,db as F,ea as qt,eb as Zt,f as bt,fb as W,fc as an,g as Ht,gb as pe,ha as R,hb as Yt,hc as Oe,i as Wt,ia as me,ic as Je,jc as on,lc as Te,m as zt,ma as E,nb as Xt,nc as V,ob as M,oc as Ke,pb as x,qa as Qe,qb as k,ra as q,s as ze,sb as ft,ta as L,tb as Pe,u as Qt,ua as Jt,ub as Le,v as ve,vb as f,w as ce,wb as r,xb as l,yb as B}from"./chunk-6J47JQUV.js";import{a as v,b as A}from"./chunk-JJCA6Z7Z.js";function Ci(i,a){}var le=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Dt=(()=>{class i extends cn{_elementRef=s(L);_focusTrapFactory=s(vn);_config;_interactivityChecker=s(gn);_ngZone=s(me);_focusMonitor=s(yt);_renderer=s(Ae);_changeDetectorRef=s(Te);_injector=s(j);_platform=s(Ne);_document=s(qt);_portalOutlet;_focusTrapped=new O;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=s(le,{optional:!0})||new le,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{o(),c(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",n),c=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||xe(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let n=Ze(),o=this._elementRef.nativeElement;(!n||n===this._document.body||n===o||o.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=Ze();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Ze()))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,n){if(t&1&&ue(J,7),t&2){let o;D(o=T())&&(n._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,n){t&2&&M("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[W],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,n){t&1&&pe(0,Ci,0,0,"ng-template",0)},dependencies:[J],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),Ve=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new O;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,e){this.overlayRef=a,this.config=e,this.disableClose=e.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!we(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(a,e){if(this._canClose(a)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(a),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",e=""){return this.overlayRef.updateSize({width:a,height:e}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(a,e,this.componentInstance))}},xi=new P("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=s(j);return()=>tt(i)}}),ki=new P("DialogData"),Di=new P("DefaultDialogConfig");function Ti(i){let a=E(i),e=new R;return{valueSignal:a,get value(){return a()},change:e,ngOnDestroy(){e.complete()}}}var Tt=(()=>{class i{_injector=s(j);_defaultOptions=s(Di,{optional:!0});_parentDialog=s(i,{optional:!0,skipSelf:!0});_overlayContainer=s(un);_idGenerator=s(he);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new O;_afterOpenedAtThisLevel=new O;_ariaHiddenElements=new Map;_scrollStrategy=s(xi);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=ze(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe($(void 0)));constructor(){}open(e,t){let n=this._defaultOptions||new le;t=v(v({},n),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),c=bn(this._injector,o),h=new Ve(c,t),C=this._attachContainer(c,h,t);if(h.containerInstance=C,!this.openDialogs.length){let U=this._overlayContainer.getContainerElement();C._focusTrapped?C._focusTrapped.pipe(ye(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(U)}):this._hideNonDialogContentFromAssistiveTechnology(U)}return this._attachDialogContent(e,h,C,t),this.openDialogs.push(h),h.closed.subscribe(()=>this._removeOpenDialog(h,!0)),this.afterOpened.next(h),h}closeAll(){kt(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){kt(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),kt(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new pn({positionStrategy:e.positionStrategy||nt().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let o=n.injector||n.viewContainerRef?.injector,c=[{provide:le,useValue:n},{provide:Ve,useValue:t},{provide:hn,useValue:e}],h;n.container?typeof n.container=="function"?h=n.container:(h=n.container.type,c.push(...n.container.providers(n))):h=Dt;let C=new vt(h,n.viewContainerRef,j.create({parent:o||this._injector,providers:c}));return e.attach(C).instance}_attachDialogContent(e,t,n,o){if(e instanceof ke){let c=this._createInjector(o,t,n,void 0),h={$implicit:o.data,dialogRef:t};o.templateContext&&(h=v(v({},h),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),n.attachTemplatePortal(new et(e,null,h,c))}else{let c=this._createInjector(o,t,n,this._injector),h=n.attachComponentPortal(new vt(e,o.viewContainerRef,c));t.componentRef=h,t.componentInstance=h.instance}}_createInjector(e,t,n,o){let c=e.injector||e.viewContainerRef?.injector,h=[{provide:ki,useValue:e.data},{provide:Ve,useValue:t}];return e.providers&&(typeof e.providers=="function"?h.push(...e.providers(t,e,n)):h.push(...e.providers)),e.direction&&(!c||!c.get(Ie,null,{optional:!0}))&&h.push({provide:Ie,useValue:Ti(e.direction)}),j.create({parent:c||o,providers:h})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,c)=>{o?c.setAttribute("aria-hidden",o):c.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let o=t[n];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||i)};static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function kt(i,a){let e=i.length;for(;e--;)a(i[e])}var qn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=De({type:i});static \u0275inj=Ce({providers:[Tt],imports:[it,je,yn,je]})}return i})();function Ii(i,a){}var ot=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},It="mdc-dialog--open",Jn="mdc-dialog--opening",Kn="mdc-dialog--closing",wi=150,Si=75,Ei=(()=>{class i extends Dt{_animationStateChanged=new R;_animationsEnabled=!be();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Yn(this._config.enterAnimationDuration)??wi:0;_exitAnimationDuration=this._animationsEnabled?Yn(this._config.exitAnimationDuration)??Si:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Zn,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Jn,It)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(It),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(It),this._animationsEnabled?(this._hostElement.style.setProperty(Zn,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Kn)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Jn,Kn)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(n){return(e||(e=q(i)))(n||i)}})();static \u0275cmp=y({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,n){t&2&&(_t("id",n._config.id),M("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),w("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[W],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(r(0,"div",0)(1,"div",1),pe(2,Ii,0,0,"ng-template",2),l()())},dependencies:[J],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return i})(),Zn="--mat-dialog-transition-duration";function Yn(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?gt(i.substring(0,i.length-2)):i.endsWith("s")?gt(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var at=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(at||{}),_e=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new bt(1);_beforeClosed=new bt(1);_result;_closeFallbackTimeout;_state=at.OPEN;_closeInteractionType;constructor(a,e,t){this._ref=a,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(ce(n=>n.state==="opened"),ye(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(ce(n=>n.state==="closed"),ye(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),ve(this.backdropClick(),this.keydownEvents().pipe(ce(n=>n.keyCode===27&&!this.disableClose&&!we(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),Xn(this,n.type==="keydown"?"keyboard":"mouse"))})}close(a){let e=this._config.closePredicate;e&&!e(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(ce(t=>t.state==="closing"),ye(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=at.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let e=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?e.left(a.left):e.right(a.right):e.centerHorizontally(),a&&(a.top||a.bottom)?a.top?e.top(a.top):e.bottom(a.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",e=""){return this._ref.updateSize(a,e),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=at.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Xn(i,a,e){return i._closeInteractionType=a,i.close(e)}var wt=new P("MatMdcDialogData"),Mi=new P("mat-mdc-dialog-default-options"),Ri=new P("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(j);return()=>tt(i)}}),He=(()=>{class i{_defaultOptions=s(Mi,{optional:!0});_scrollStrategy=s(Ri);_parentDialog=s(i,{optional:!0,skipSelf:!0});_idGenerator=s(he);_injector=s(j);_dialog=s(Tt);_animationsDisabled=be();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new O;_afterOpenedAtThisLevel=new O;dialogConfigClass=ot;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=ze(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe($(void 0)));constructor(){this._dialogRefConstructor=_e,this._dialogContainerType=Ei,this._dialogDataToken=wt}open(e,t){let n;t=v(v({},this._defaultOptions||new ot),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,A(v({},t),{positionStrategy:nt(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:le,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(c,h,C)=>(n=new this._dialogRefConstructor(c,t,C),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:C},{provide:this._dialogDataToken,useValue:h.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=o.componentRef,n.componentInstance=o.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let c=this.openDialogs.indexOf(n);c>-1&&(this.openDialogs.splice(c,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ei=(()=>{class i{dialogRef=s(_e,{optional:!0});_elementRef=s(L);_dialog=s(He);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=oi(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){Xn(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,n){t&1&&u("click",function(c){return n._onButtonClick(c)}),t&2&&M("aria-label",n.ariaLabel||null)("type",n.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[Qe]})}return i})(),ti=(()=>{class i{_dialogRef=s(_e,{optional:!0});_elementRef=s(L);_dialog=s(He);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=oi(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i})}return i})(),ni=(()=>{class i extends ti{id=s(he).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=q(i)))(n||i)}})();static \u0275dir=F({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,n){t&2&&_t("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[W]})}return i})(),ii=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Zt([Xe])]})}return i})(),ai=(()=>{class i extends ti{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=q(i)))(n||i)}})();static \u0275dir=F({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,n){t&2&&w("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end")},inputs:{align:"align"},features:[W]})}return i})();function oi(i,a){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?a.find(t=>t.id===e.id):null}var ri=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=De({type:i});static \u0275inj=Ce({providers:[He],imports:[qn,it,je,Ye]})}return i})();function si(i){let a=new TextEncoder().encode(i),e="";for(let t of a)e+=String.fromCharCode(t);return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function li(i){let a=i.replace(/-/g,"+").replace(/_/g,"/"),e=atob(a),t=Uint8Array.from(e,n=>n.charCodeAt(0));return new TextDecoder().decode(t)}var St="cvData",Et="cv",Se=class i{buildLink(a){let e=si(JSON.stringify(a));return`${this.baseUrl()}cv?${St}=${e}`}buildUrlLink(a){return`${this.baseUrl()}cv?${Et}=${encodeURIComponent(a.trim())}`}decodeEmbedded(a){return fe(JSON.parse(li(a)))}baseUrl(){return document.baseURI.endsWith("/")?document.baseURI:`${document.baseURI}/`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})};var rt={basics:{fullName:"Alex Carter",title:"Senior Java Backend Engineer",summary:"Senior Java Backend Engineer with 5+ years of experience in building and modernizing scalable enterprise solutions. Expert in Java 21, Spring Boot 3.5, and the AWS ecosystem (ECS, Lambda, Bedrock). Proven track record in architecting AI-native platforms that reduced operational costs by $16,000+ monthly and automated manual efforts by 58%. Specialist in high-load migrations, event-driven architectures, and technical leadership within the Retail, Healthcare, Real Estate and IoT domains.",containsImage:!0,imageURL:"https://ui-avatars.com/api/?name=Alex+Carter&size=256&background=00366d&color=ffffff",contact:{location:"Ukraine, Lviv",github:"@alexcarter",email:"alex.carter@example.com",linkedin:"alex-carter"}},languages:[{name:"Ukrainian",level:"Native"},{name:"English",level:"B2"}],skills:[{category:"Languages",skills:["Java","TypeScript","Angular","Python"]},{category:"Databases",skills:["MySQL","PostgreSQL","Oracle","MongoDB","DynamoDB","Redis"]},{category:"Spring",skills:["Spring Boot","Spring Data JPA","Spring MVC","Spring Security","Spring Cloud","Spring Batch","Spring AOP"]},{category:"AWS",skills:["ECS","Lambda","S3","SQS","SNS","API Gateway","Bedrock","CloudWatch","ECR","Fargate","ELB/ALB"]},{category:"DevOps",skills:["Docker","Kubernetes","Helm","Terraform","Jenkins","GitHub Actions"]},{category:"Messaging",skills:["Apache Kafka","MQTT","RabbitMQ"]},{category:"Architecture",skills:["Microservices","Serverless","Event-driven","REST API","GraphQL"]}],education:[{degree:"Master of Science, Computer Engineering",institution:"Lviv Polytechnic National University",specialty:"Specialized Computer Systems",startDate:"Sep 2021",endDate:"Sep 2022"},{degree:"Bachelor of Science, Computer Engineering",institution:"Lviv Polytechnic National University",specialty:"Specialized Computer Systems",startDate:"Sep 2017",endDate:"Sep 2021"}],employment:[{role:"Senior Software Engineer",company:"EPAM",project:"Enterprise Platform Modernisation and Optimisation",description:"Full-cycle software development, including architecture planning, API design, performance tuning, and legacy system optimization.",startDate:"Sep 2022",endDate:"Present",responsibilities:["Led migration from Java 8/Spring Boot 2.2 to Java 21/Spring Boot 3.4, resolving critical dependency issues","Coordinated integration across 8 teams, ensuring smooth large-scale system transition","Mentored engineers and improved code quality, test coverage, and maintainability","Built LLM-based optimization solution (GPT-4o) saving $16,000+/month","Designed scalable data processing solutions and contributed to Spark jobs processing 4M records"]},{role:"Senior Software Engineer",company:"GazdAI (self project)",project:"Real estate platform with AI-core and automated processes",description:"Architected and deployed a cost-optimized, AI-native platform on AWS, leveraging event-driven systems and automated pipelines.",startDate:"Dec 2025",endDate:"Mar 2026",responsibilities:["Led AWS cloud architecture (Docker, Terraform, Fargate), delivering a cost-efficient MVP","Built AI-native platform core with event-driven architecture","Reduced AI processing costs by 35% via image deduplication (perceptual hashing)","Cut LLM usage costs through search optimization and caching"]},{role:"Team Lead",company:"EPAM Systems",project:"AWS Bedrock AI Scheduling and Management Agent",description:"Led a cross-functional team during an internal EPAM AI Marathon to build an AWS Bedrock\u2013powered AI Scheduling and Management Agent.",startDate:"Jul 2025",endDate:"Aug 2025",responsibilities:["Led a technical team (1 DevOps, 4 Software Engineers)","Delivered a solution that reduced manual scheduling efforts by 58%","Coordinated team workflows and ensured timely delivery of a functional MVP"]}]};function di(i,a){return`You are a resume parser. Convert the resume text below into a single JSON object.

Use EXACTLY this schema (omit unknown optional fields, never invent data):
{
  "basics": {
    "fullName": string,
    "title": string,
    "summary": string,
    "containsImage": boolean,
    "imageURL"?: string,
    "contact": {
      "location"?: string, "github"?: string, "email"?: string,
      "linkedin"?: string, "phone"?: string, "website"?: string, "birthDate"?: string
    }
  },
  "languages": [{ "name": string, "level": string }],
  "skills": [{ "category": string, "skills": string[] }],
  "education": [{ "degree": string, "institution": string, "specialty"?: string,
                 "location"?: string, "startDate"?: string, "endDate"?: string }],
  "employment": [{ "role": string, "company": string, "project"?: string,
                   "description"?: string, "startDate"?: string, "endDate"?: string,
                   "responsibilities": string[] }]
}

Rules:
- Output ONLY valid JSON, no markdown, no commentary.
- Write every human-readable string value in ${a}. Keep proper nouns, brand names,
  technologies and emails unchanged.
- Group skills into reasonable categories.
- Plain text has no photo: set "containsImage" to false and omit "imageURL".

RESUME TEXT:
"""
${i}
"""`}var st=class i{async pdfToText(a){let e=await import("./chunk-VJQ23XIJ.js");e.GlobalWorkerOptions.workerSrc=new URL("pdf.worker.min.mjs",document.baseURI).toString();let t=await a.arrayBuffer(),n=await e.getDocument({data:t}).promise,o=[];for(let c=1;c<=n.numPages;c++){let U=(await(await n.getPage(c)).getTextContent()).items.map(Me=>"str"in Me?Me.str:"").join(" ");o.push(U)}return o.join(`
`)}async docxToText(a){let e=await import("./chunk-NYLLO4PB.js"),t=await a.arrayBuffer();return(await e.extractRawText({arrayBuffer:t})).value}static \u0275fac=function(e){return new(e||i)};static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})};var ge=class extends Error{constructor(a){super(a),this.name="ResumeImportError"}},Ee=class i{http=s(rn);gemini=s(Vn);extractor=s(st);settings=s(jn);fromJson(a){let e;try{e=JSON.parse(a)}catch{throw new ge("The file does not contain valid JSON.")}return fe(e)}async fromUrl(a){let e;try{e=await zt(this.http.get(a.trim(),{responseType:"text"}))}catch{throw new ge("Could not fetch the URL. Make sure it is public and CORS-accessible (e.g. a GitHub raw link).")}return this.fromJson(e)}async fromText(a){if(!a.trim())throw new ge("No text to import.");let e=Bn[this.settings.cvLanguage()],t=await this.gemini.generateText(di(a,e),{jsonOutput:!0,temperature:.1}),n=Hn(t);if(n===null)throw new ge("Gemini did not return parseable resume JSON.");return fe(n)}async fromFile(a){let e=this.extensionOf(a.name);if(e==="json")return this.fromJson(await a.text());if(e==="txt")return this.fromText(await a.text());if(e==="pdf")return this.fromText(await this.extractor.pdfToText(a));if(e==="docx")return this.fromText(await this.extractor.docxToText(a));throw new ge(`Unsupported file type: .${e}. Use JSON, TXT, PDF, or DOCX.`)}extensionOf(a){return a.split(".").pop()?.toLowerCase()??""}static \u0275fac=function(e){return new(e||i)};static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})};var Lt=["*"];function Bi(i,a){i&1&&Ue(0)}var Fi=["tabListContainer"],Oi=["tabList"],Ni=["tabListInner"],ji=["nextPaginator"],Vi=["previousPaginator"],Hi=["content"];function Wi(i,a){}var zi=["tabBodyWrapper"],Qi=["tabHeader"];function Gi(i,a){}function Ui(i,a){if(i&1&&pe(0,Gi,0,0,"ng-template",12),i&2){let e=p().$implicit;f("cdkPortalOutlet",e.templateLabel)}}function $i(i,a){if(i&1&&m(0),i&2){let e=p().$implicit;b(e.textLabel)}}function qi(i,a){if(i&1){let e=I();r(0,"div",7,2),u("click",function(){let n=_(e),o=n.$implicit,c=n.$index,h=p(),C=Be(1);return g(h._handleClick(o,C,c))})("cdkFocusChange",function(n){let o=_(e).$index,c=p();return g(c._tabFocusChanged(n,o))}),B(2,"span",8)(3,"div",9),r(4,"span",10)(5,"span",11),x(6,Ui,1,1,null,12)(7,$i,1,1),l()()()}if(i&2){let e=a.$implicit,t=a.$index,n=Be(1),o=p();qe(e.labelClass),w("mdc-tab--active",o.selectedIndex===t),f("id",o._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),M("tabIndex",o._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(t))("aria-selected",o.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),d(3),f("matRippleTrigger",n)("matRippleDisabled",e.disabled||o.disableRipple),d(3),k(e.templateLabel?6:7)}}function Ji(i,a){i&1&&Ue(0)}function Ki(i,a){if(i&1){let e=I();r(0,"mat-tab-body",13),u("_onCentered",function(){_(e);let n=p();return g(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){_(e);let o=p();return g(o._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){_(e);let o=p();return g(o._bodyCentered(n))}),l()}if(i&2){let e=a.$implicit,t=a.$index,n=p();qe(e.bodyClass),f("id",n._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),M("tabindex",n.contentTabIndex!=null&&n.selectedIndex===t?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(e,t))("aria-hidden",n.selectedIndex!==t)}}var Zi=new P("MatTabContent"),Yi=(()=>{class i{template=s(ke);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","matTabContent",""]],features:[Fe([{provide:Zi,useExisting:i}])]})}return i})(),Xi=new P("MatTabLabel"),ui=new P("MAT_TAB"),ea=(()=>{class i extends mn{_closestTab=s(ui,{optional:!0});static \u0275fac=(()=>{let e;return function(n){return(e||(e=q(i)))(n||i)}})();static \u0275dir=F({type:i,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Fe([{provide:Xi,useExisting:i}]),W]})}return i})(),hi=new P("MAT_TAB_GROUP"),Bt=(()=>{class i{_viewContainerRef=s(Kt);_closestTabGroup=s(hi,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new O;position=null;origin=null;isActive=!1;constructor(){s(ln).load(xn)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new et(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-tab"]],contentQueries:function(t,n,o){if(t&1&&$e(o,ea,5)(o,Yi,7,ke),t&2){let c;D(c=T())&&(n.templateLabel=c.first),D(c=T())&&(n._explicitContent=c.first)}},viewQuery:function(t,n){if(t&1&&ue(ke,7),t&2){let o;D(o=T())&&(n._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,n){t&2&&M("id",null)},inputs:{disabled:[2,"disabled","disabled",V],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Fe([{provide:ui,useExisting:i}]),Qe],ngContentSelectors:Lt,decls:1,vars:0,template:function(t,n){t&1&&(Ge(),Yt(0,Bi,1,0,"ng-template"))},encapsulation:2})}return i})(),Mt="mdc-tab-indicator--active",ci="mdc-tab-indicator--no-transition",Rt=class{_items;_currentItem;constructor(a){this._items=a}hide(){this._items.forEach(a=>a.deactivateInkBar()),this._currentItem=void 0}alignToElement(a){let e=this._items.find(n=>n.elementRef.nativeElement===a),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let n=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(n),this._currentItem=e}}},ta=(()=>{class i{_elementRef=s(L);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(Mt);return}let n=t.getBoundingClientRect(),o=e.width/n.width,c=e.left-n.left;t.classList.add(ci),this._inkBarContentElement.style.setProperty("transform",`translateX(${c}px) scaleX(${o})`),t.getBoundingClientRect(),t.classList.remove(ci),t.classList.add(Mt),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Mt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),n=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",V]}})}return i})();var bi=(()=>{class i extends ta{elementRef=s(L);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(n){return(e||(e=q(i)))(n||i)}})();static \u0275dir=F({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,n){t&2&&(M("aria-disabled",!!n.disabled),w("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",V]},features:[W]})}return i})(),mi={passive:!0},na=650,ia=100,aa=(()=>{class i{_elementRef=s(L);_changeDetectorRef=s(Te);_viewportRuler=s(dn);_dir=s(Ie,{optional:!0});_ngZone=s(me);_platform=s(Ne);_sharedResizeObserver=s(Wn);_injector=s(j);_renderer=s(Ae);_animationsDisabled=be();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new O;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new O;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new R;indexFocused=new R;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),mi),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),mi))}ngAfterContentInit(){let e=this._dir?this._dir.change:Wt("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Gt(32),Re(this._destroyed)),n=this._viewportRuler.change(150).pipe(Re(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Cn(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),xe(o,{injector:this._injector}),ve(e,n,t,this._items.changes,this._itemsResized()).pipe(Re(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(c=>{this.indexFocused.emit(c),this._setTabFocus(c)})}_itemsResized(){return typeof ResizeObserver!="function"?Ht:this._items.changes.pipe($(this._items),$t(e=>new Vt(t=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(o=>t.next(o));return e.forEach(o=>n.observe(o.elementRef.nativeElement)),()=>{n.disconnect()}}))),Ut(1),ce(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!we(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,n=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:c}=t.elementRef.nativeElement,h,C;this._getLayoutDirection()=="ltr"?(h=o,C=h+c):(C=this._tabListInner.nativeElement.offsetWidth-o,h=C-c);let U=this.scrollDistance,Me=this.scrollDistance+n;h<U?this.scrollDistance-=U-h:C>Me&&(this.scrollDistance+=Math.min(C-Me,h-U))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,n=e-t>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),Qt(na,ia).pipe(Re(ve(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:o}=this._scrollHeader(e);(o===0||o>=n)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",V],selectedIndex:[2,"selectedIndex","selectedIndex",Ke]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return i})(),oa=(()=>{class i extends aa{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Rt(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=q(i)))(n||i)}})();static \u0275cmp=y({type:i,selectors:[["mat-tab-header"]],contentQueries:function(t,n,o){if(t&1&&$e(o,bi,4),t&2){let c;D(c=T())&&(n._items=c)}},viewQuery:function(t,n){if(t&1&&ue(Fi,7)(Oi,7)(Ni,7)(ji,5)(Vi,5),t&2){let o;D(o=T())&&(n._tabListContainer=o.first),D(o=T())&&(n._tabList=o.first),D(o=T())&&(n._tabListInner=o.first),D(o=T())&&(n._nextPaginator=o.first),D(o=T())&&(n._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,n){t&2&&w("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",V]},features:[W],ngContentSelectors:Lt,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,n){t&1&&(Ge(),r(0,"div",5,0),u("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(c){return n._handlePaginatorPress("before",c)})("touchend",function(){return n._stopInterval()}),B(2,"div",6),l(),r(3,"div",7,1),u("keydown",function(c){return n._handleKeydown(c)}),r(5,"div",8,2),u("cdkObserveContent",function(){return n._onContentChanges()}),r(7,"div",9,3),Ue(9),l()()(),r(10,"div",10,4),u("mousedown",function(c){return n._handlePaginatorPress("after",c)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),B(12,"div",6),l()),t&2&&(w("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),f("matRippleDisabled",n._disableScrollBefore||n.disableRipple),d(3),w("_mat-animation-noopable",n._animationsDisabled),d(2),M("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),d(5),w("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),f("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[Ct,_n],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return i})(),ra=new P("MAT_TABS_CONFIG"),pi=(()=>{class i extends J{_host=s(At);_ngZone=s(me);_centeringSub=de.EMPTY;_leavingSub=de.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe($(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","matTabBodyHost",""]],features:[W]})}return i})(),At=(()=>{class i{_elementRef=s(L);_dir=s(Ie,{optional:!0});_ngZone=s(me);_injector=s(j);_renderer=s(Ae);_diAnimationsDisabled=be();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=de.EMPTY;_position;_previousPosition;_onCentering=new R;_beforeCentering=new R;_afterLeavingCenter=new R;_onCentered=new R(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=s(Te);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),xe(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),xe(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-tab-body"]],viewQuery:function(t,n){if(t&1&&ue(pi,5)(Hi,5),t&2){let o;D(o=T())&&(n._portalHost=o.first),D(o=T())&&(n._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,n){t&2&&M("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,n){t&1&&(r(0,"div",1,0),pe(2,Wi,0,0,"ng-template",2),l()),t&2&&w("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[pi,Xe],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return i})(),fi=(()=>{class i{_elementRef=s(L);_changeDetectorRef=s(Te);_ngZone=s(me);_tabsSubscription=de.EMPTY;_tabLabelSubscription=de.EMPTY;_tabBodySubscription=de.EMPTY;_diAnimationsDisabled=be();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Jt;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new R;focusChange=new R;animationDone=new R;selectedTabChange=new R(!0);_groupId;_isServer=!s(Ne).isBrowser;constructor(){let e=s(ra,{optional:!0});this._groupId=s(he).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,o)=>n.isActive=o===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,n)=>{t.position=n-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),n;for(let o=0;o<t.length;o++)if(t[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,n=t[o];break}!n&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe($(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new Pt;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=ve(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,n){t.focusIndex=n,e.disabled||(this.selectedIndex=n)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,n)=>t._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-tab-group"]],contentQueries:function(t,n,o){if(t&1&&$e(o,Bt,5),t&2){let c;D(c=T())&&(n._allTabs=c)}},viewQuery:function(t,n){if(t&1&&ue(zi,5)(Qi,5)(At,5),t&2){let o;D(o=T())&&(n._tabBodyWrapper=o.first),D(o=T())&&(n._tabHeader=o.first),D(o=T())&&(n._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,n){t&2&&(M("mat-align-tabs",n.alignTabs),qe("mat-"+(n.color||"primary")),nn("--mat-tab-animation-duration",n.animationDuration),w("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",V],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",V],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",V],selectedIndex:[2,"selectedIndex","selectedIndex",Ke],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Ke],disablePagination:[2,"disablePagination","disablePagination",V],disableRipple:[2,"disableRipple","disableRipple",V],preserveContent:[2,"preserveContent","preserveContent",V],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Fe([{provide:hi,useExisting:i}])],ngContentSelectors:Lt,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,n){t&1&&(Ge(),r(0,"mat-tab-header",3,0),u("indexFocused",function(c){return n._focusChanged(c)})("selectFocusedIndex",function(c){return n.selectedIndex=c}),Pe(2,qi,8,17,"div",4,ft),l(),x(4,Ji,1,0),r(5,"div",5,1),Pe(7,Ki,1,10,"mat-tab-body",6,ft),l()),t&2&&(f("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),Xt("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),d(2),Le(n._tabs),d(2),k(n._isServer?4:-1),d(),w("_mat-animation-noopable",n._animationsDisabled()),d(2),Le(n._tabs))},dependencies:[oa,bi,fn,Ct,J,At],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return i})(),Pt=class{index;tab};var _i=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=De({type:i});static \u0275inj=Ce({imports:[Ye]})}return i})();function la(i,a){i&1&&B(0,"mat-progress-bar",1)}var lt=class i{importService=s(Ee);snackBar=s(ne);i18n=s(H);imported=Oe();accept=xt.acceptedExtensions.join(",");urlInput=E("");textInput=E("");busy=E(!1);async onFileSelected(a){let e=a.target,t=e.files?.[0];if(e.value="",!!t){if(t.size>xt.maxFileSizeBytes){this.fail(this.i18n.t("import.tooLarge"));return}await this.run(()=>this.importService.fromFile(t))}}async importUrl(){if(!this.urlInput().trim()){this.fail(this.i18n.t("import.enterUrl"));return}await this.run(()=>this.importService.fromUrl(this.urlInput()))}async importText(){if(!this.textInput().trim()){this.fail(this.i18n.t("import.pasteText"));return}await this.run(()=>this.importService.fromText(this.textInput()))}loadSample(){this.emit(rt)}async run(a){this.busy.set(!0);try{this.emit(await a())}catch(e){this.fail(e instanceof Error?e.message:"Import failed.")}finally{this.busy.set(!1)}}emit(a){this.imported.emit(a),this.snackBar.open(this.i18n.t("import.imported"),"OK",{duration:2500})}fail(a){this.snackBar.open(a,"Dismiss",{duration:5e3})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-import-panel"]],outputs:{imported:"imported"},decls:43,vars:20,consts:[["fileInput",""],["mode","indeterminate"],[3,"label"],[1,"flex","flex-col","gap-3","p-4"],[1,"field-hint"],[1,"form-actions"],["matButton","filled",3,"click","disabled"],["matButton","",3,"click","disabled"],["type","file",1,"hidden",3,"change","accept"],["appearance","outline",1,"form-field-full"],["matInput","","placeholder","https://raw.githubusercontent.com/user/repo/main/resume.json",3,"ngModelChange","ngModel"],["matInput","","rows","8",3,"ngModelChange","ngModel"]],template:function(e,t){if(e&1){let n=I();x(0,la,1,0,"mat-progress-bar",1),r(1,"mat-tab-group")(2,"mat-tab",2)(3,"div",3)(4,"p",4),m(5),l(),r(6,"div",5)(7,"button",6),u("click",function(){_(n);let c=Be(16);return g(c.click())}),r(8,"mat-icon"),m(9,"upload_file"),l(),m(10),l(),r(11,"button",7),u("click",function(){return t.loadSample()}),r(12,"mat-icon"),m(13,"auto_awesome"),l(),m(14),l()(),r(15,"input",8,0),u("change",function(c){return t.onFileSelected(c)}),l()()(),r(17,"mat-tab",2)(18,"div",3)(19,"p",4),m(20),l(),r(21,"mat-form-field",9)(22,"mat-label"),m(23),l(),r(24,"input",10),u("ngModelChange",function(c){return t.urlInput.set(c)}),l()(),r(25,"div",5)(26,"button",6),u("click",function(){return t.importUrl()}),r(27,"mat-icon"),m(28,"cloud_download"),l(),m(29),l()()()(),r(30,"mat-tab",2)(31,"div",3)(32,"p",4),m(33),l(),r(34,"mat-form-field",9)(35,"mat-label"),m(36),l(),r(37,"textarea",11),u("ngModelChange",function(c){return t.textInput.set(c)}),l()(),r(38,"div",5)(39,"button",6),u("click",function(){return t.importText()}),r(40,"mat-icon"),m(41,"auto_fix_high"),l(),m(42),l()()()()()}e&2&&(k(t.busy()?0:-1),d(2),f("label",t.i18n.t("import.tab.file")),d(3),b(t.i18n.t("import.file.hint")),d(2),f("disabled",t.busy()),d(3),S(" ",t.i18n.t("import.choose")," "),d(),f("disabled",t.busy()),d(3),S(" ",t.i18n.t("import.loadSample")," "),d(),f("accept",t.accept),d(2),f("label",t.i18n.t("import.tab.url")),d(3),b(t.i18n.t("import.url.hint")),d(3),b(t.i18n.t("import.url.label")),d(),f("ngModel",t.urlInput()),d(2),f("disabled",t.busy()),d(3),S(" ",t.i18n.t("import.url.button")," "),d(),f("label",t.i18n.t("import.tab.text")),d(3),b(t.i18n.t("import.text.hint")),d(3),b(t.i18n.t("import.text.label")),d(),f("ngModel",t.textInput()),d(2),f("disabled",t.busy()),d(3),S(" ",t.i18n.t("import.text.button")," "))},dependencies:[te,Y,X,ee,_i,Bt,fi,oe,ae,ie,se,re,G,Q,Z,K,Gn,Qn],encapsulation:2,changeDetection:0})};var mt=class i{snackBar=s(ne);i18n=s(H);resume=Je.required();applied=Oe();deleted=Oe();draft=an(()=>JSON.stringify(this.resume(),null,2));apply(){let a;try{a=JSON.parse(this.draft())}catch{this.snackBar.open(this.i18n.t("cv.editor.invalidJson"),"Dismiss",{duration:5e3});return}try{this.applied.emit(fe(a)),this.snackBar.open(this.i18n.t("cv.editor.applied"),"OK",{duration:2500})}catch(e){let t=e instanceof Error?e.message:this.i18n.t("cv.editor.invalidJson");this.snackBar.open(t,"Dismiss",{duration:5e3})}}remove(){this.deleted.emit()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-cv-json-editor"]],inputs:{resume:[1,"resume"]},outputs:{applied:"applied",deleted:"deleted"},decls:16,vars:5,consts:[[1,"flex","flex-col","gap-3"],[1,"field-hint"],["appearance","outline",1,"form-field-full"],["matInput","","rows","18","spellcheck","false",1,"cv-json-area",3,"ngModelChange","ngModel"],[1,"form-actions"],["matButton","filled",3,"click"],["matButton","",3,"click"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"p",1),m(2),l(),r(3,"mat-form-field",2)(4,"mat-label"),m(5),l(),r(6,"textarea",3),u("ngModelChange",function(o){return t.draft.set(o)}),l()(),r(7,"div",4)(8,"button",5),u("click",function(){return t.apply()}),r(9,"mat-icon"),m(10,"check"),l(),m(11),l(),r(12,"button",6),u("click",function(){return t.remove()}),r(13,"mat-icon"),m(14,"delete"),l(),m(15),l()()()),e&2&&(d(2),b(t.i18n.t("cv.editor.jsonHint")),d(3),b(t.i18n.t("cv.editor.jsonTitle")),d(),f("ngModel",t.draft()),d(5),S(" ",t.i18n.t("cv.editor.apply")," "),d(4),S(" ",t.i18n.t("cv.editor.delete")," "))},dependencies:[te,Y,X,ee,oe,ae,ie,se,re,G,Q,Z,K],encapsulation:2,changeDetection:0})};function da(i,a){if(i&1){let e=I();r(0,"mat-form-field",6)(1,"mat-label"),m(2),l(),B(3,"input",11),r(4,"button",12),u("click",function(){_(e);let n=p();return g(n.copy(n.embedLink()))}),r(5,"mat-icon"),m(6,"content_copy"),l()()()}if(i&2){let e=p();d(2),b(e.i18n.t("cv.share.title")),d(),f("value",e.embedLink()),d(),M("aria-label",e.i18n.t("cv.share.copy"))}}function ca(i,a){if(i&1){let e=I();r(0,"mat-form-field",6)(1,"mat-label"),m(2),l(),B(3,"input",11),r(4,"button",12),u("click",function(){_(e);let n=p();return g(n.copy(n.urlLink()))}),r(5,"mat-icon"),m(6,"content_copy"),l()()()}if(i&2){let e=p();d(2),b(e.i18n.t("cv.share.title")),d(),f("value",e.urlLink()),d(),M("aria-label",e.i18n.t("cv.share.copy"))}}var pt=class i{share=s(Se);snackBar=s(ne);i18n=s(H);resume=Je.required();embedLink=E("");jsonUrl=E("");urlLink=E("");generateEmbed(){this.embedLink.set(this.share.buildLink(this.resume()))}generateUrl(){this.jsonUrl().trim()&&this.urlLink.set(this.share.buildUrlLink(this.jsonUrl()))}async copy(a){if(a)try{await navigator.clipboard.writeText(a),this.snackBar.open(this.i18n.t("cv.share.copied"),"OK",{duration:2500})}catch{}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-cv-share-panel"]],inputs:{resume:[1,"resume"]},decls:28,vars:11,consts:[[1,"flex","flex-col","gap-6"],[1,"flex","flex-col","gap-3"],[1,"accent"],[1,"muted"],[1,"form-actions"],["matButton","filled",3,"click"],["appearance","outline",1,"form-field-full"],[1,"divider-line"],[1,"field-hint"],["matInput","","placeholder","https://raw.githubusercontent.com/user/repo/main/resume.json",3,"ngModelChange","ngModel"],["matButton","filled",3,"click","disabled"],["matInput","","readonly","",3,"value"],["matIconButton","","matSuffix","",3,"click"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"section",1)(2,"h3",2),m(3),l(),r(4,"p",3),m(5),l(),r(6,"div",4)(7,"button",5),u("click",function(){return t.generateEmbed()}),r(8,"mat-icon"),m(9,"link"),l(),m(10),l()(),x(11,da,7,3,"mat-form-field",6),l(),B(12,"hr",7),r(13,"section",1)(14,"h3",2),m(15),l(),r(16,"p",8),m(17),l(),r(18,"mat-form-field",6)(19,"mat-label"),m(20),l(),r(21,"input",9),u("ngModelChange",function(o){return t.jsonUrl.set(o)}),l()(),r(22,"div",4)(23,"button",10),u("click",function(){return t.generateUrl()}),r(24,"mat-icon"),m(25,"link"),l(),m(26),l()(),x(27,ca,7,3,"mat-form-field",6),l()()),e&2&&(d(3),b(t.i18n.t("cv.share.embedTitle")),d(2),b(t.i18n.t("cv.share.desc")),d(5),S(" ",t.i18n.t("cv.share.generate")," "),d(),k(t.embedLink()?11:-1),d(4),b(t.i18n.t("cv.share.urlTitle")),d(2),b(t.i18n.t("cv.share.urlHint")),d(3),b(t.i18n.t("cv.share.urlInput")),d(),f("ngModel",t.jsonUrl()),d(2),f("disabled",!t.jsonUrl().trim()),d(3),S(" ",t.i18n.t("cv.share.urlGenerate")," "),d(),k(t.urlLink()?27:-1))},dependencies:[te,Y,X,ee,oe,ae,ie,zn,se,re,G,Q,kn,Z,K],encapsulation:2,changeDetection:0})};var ma=(i,a)=>a.key;function pa(i,a){if(i&1){let e=I();r(0,"textarea",8),u("ngModelChange",function(n){_(e);let o=p().$implicit,c=p();return g(c.setValue(o.key,n))}),l()}if(i&2){let e=p().$implicit,t=p();f("ngModel",t.values()[e.key])}}function ua(i,a){if(i&1){let e=I();r(0,"input",9),u("ngModelChange",function(n){_(e);let o=p().$implicit,c=p();return g(c.setValue(o.key,n))}),l()}if(i&2){let e=p().$implicit,t=p();f("ngModel",t.values()[e.key])}}function ha(i,a){if(i&1&&(r(0,"mat-form-field",2)(1,"mat-label"),m(2),l(),x(3,pa,1,1,"textarea",6)(4,ua,1,1,"input",7),l()),i&2){let e=a.$implicit;d(2),b(e.label),d(),k(e.type==="textarea"?3:4)}}var ut=class i{i18n=s(H);data=s(wt);dialogRef=s(_e);values=E(Object.fromEntries(this.data.fields.map(a=>[a.key,a.value])));setValue(a,e){this.values.update(t=>A(v({},t),{[a]:e}))}save(){this.dialogRef.close(this.values())}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-edit-dialog"]],decls:10,vars:3,consts:[["mat-dialog-title",""],[1,"flex","flex-col","gap-3","pt-2",2,"min-width","360px"],["appearance","outline",1,"form-field-full"],["align","end"],["matButton","","mat-dialog-close",""],["matButton","filled",3,"click"],["matInput","","rows","4",3,"ngModel"],["matInput","",3,"ngModel"],["matInput","","rows","4",3,"ngModelChange","ngModel"],["matInput","",3,"ngModelChange","ngModel"]],template:function(e,t){e&1&&(r(0,"h2",0),m(1),l(),r(2,"mat-dialog-content",1),Pe(3,ha,5,2,"mat-form-field",2,ma),l(),r(5,"mat-dialog-actions",3)(6,"button",4),m(7),l(),r(8,"button",5),u("click",function(){return t.save()}),m(9),l()()),e&2&&(d(),b(t.data.title),d(2),Le(t.data.fields),d(4),b(t.i18n.t("common.cancel")),d(2),b(t.i18n.t("common.save")))},dependencies:[te,Y,X,ee,ri,ei,ni,ai,ii,oe,ae,ie,se,re,G,Q],encapsulation:2,changeDetection:0})};function gi(i,a){return[...i,a]}function vi(i,a,e){return i.map((t,n)=>n===a?e:t)}function We(i,a){return i.filter((e,t)=>t!==a)}var ht=class i{i18n=s(H);buildDialog(a,e){switch(e.section){case"basics":return this.basicsDialog(a);case"language":return this.languageDialog(a,e.index);case"skill":return this.skillDialog(a,e.index);case"education":return this.educationDialog(a,e.index);case"employment":return this.employmentDialog(a,e.index)}}applyResult(a,e,t){switch(e.section){case"basics":return A(v({},a),{basics:this.toBasics(t)});case"language":return A(v({},a),{languages:this.upsert(a.languages,e.index,this.toLanguage(t))});case"skill":return A(v({},a),{skills:this.upsert(a.skills,e.index,this.toSkill(t))});case"education":return A(v({},a),{education:this.upsert(a.education,e.index,this.toEducation(t))});case"employment":return A(v({},a),{employment:this.upsert(a.employment,e.index,this.toEmployment(t))})}}applyRemove(a,e){if(e.index===void 0)return a;switch(e.section){case"language":return A(v({},a),{languages:We(a.languages,e.index)});case"skill":return A(v({},a),{skills:We(a.skills,e.index)});case"education":return A(v({},a),{education:We(a.education,e.index)});case"employment":return A(v({},a),{employment:We(a.employment,e.index)});case"basics":return a}}basicsDialog(a){let e=a.basics,t=e.contact;return{title:this.i18n.t("edit.basics.title"),fields:[this.field("fullName","field.fullName","text",e.fullName),this.field("title","field.title","text",e.title),this.field("summary","field.summary","textarea",e.summary),this.field("imageURL","field.imageURL","text",e.imageURL??""),this.field("location","field.location","text",t.location??""),this.field("github","field.github","text",t.github??""),this.field("email","field.email","text",t.email??""),this.field("linkedin","field.linkedin","text",t.linkedin??""),this.field("phone","field.phone","text",t.phone??""),this.field("website","field.website","text",t.website??""),this.field("birthDate","field.birthDate","text",t.birthDate??"")]}}languageDialog(a,e){let t=e!==void 0?a.languages[e]:void 0;return{title:this.i18n.t("edit.language.title"),fields:[this.field("name","field.langName","text",t?.name??""),this.field("level","field.langLevel","text",t?.level??"")]}}skillDialog(a,e){let t=e!==void 0?a.skills[e]:void 0;return{title:this.i18n.t("edit.skill.title"),fields:[this.field("category","field.category","text",t?.category??""),this.field("skills","field.skills","textarea",(t?.skills??[]).join(`
`))]}}educationDialog(a,e){let t=e!==void 0?a.education[e]:void 0;return{title:this.i18n.t("edit.education.title"),fields:[this.field("degree","field.degree","text",t?.degree??""),this.field("institution","field.institution","text",t?.institution??""),this.field("specialty","field.specialty","text",t?.specialty??""),this.field("startDate","field.startDate","text",t?.startDate??""),this.field("endDate","field.endDate","text",t?.endDate??"")]}}employmentDialog(a,e){let t=e!==void 0?a.employment[e]:void 0;return{title:this.i18n.t("edit.employment.title"),fields:[this.field("role","field.role","text",t?.role??""),this.field("company","field.company","text",t?.company??""),this.field("project","field.project","text",t?.project??""),this.field("description","field.description","textarea",t?.description??""),this.field("startDate","field.startDate","text",t?.startDate??""),this.field("endDate","field.endDate","text",t?.endDate??""),this.field("responsibilities","field.responsibilities","textarea",(t?.responsibilities??[]).join(`
`))]}}toBasics(a){let e=this.str(a,"imageURL")||void 0;return{fullName:this.str(a,"fullName")||"Your Name",title:this.str(a,"title"),summary:this.str(a,"summary"),containsImage:e!==void 0,imageURL:e,contact:{location:this.str(a,"location")||void 0,github:this.str(a,"github")||void 0,email:this.str(a,"email")||void 0,linkedin:this.str(a,"linkedin")||void 0,phone:this.str(a,"phone")||void 0,website:this.str(a,"website")||void 0,birthDate:this.str(a,"birthDate")||void 0}}}toLanguage(a){return{name:this.str(a,"name"),level:this.str(a,"level")}}toSkill(a){return{category:this.str(a,"category"),skills:this.lines(a,"skills")}}toEducation(a){return{degree:this.str(a,"degree"),institution:this.str(a,"institution"),specialty:this.str(a,"specialty")||void 0,startDate:this.str(a,"startDate")||void 0,endDate:this.str(a,"endDate")||void 0}}toEmployment(a){return{role:this.str(a,"role"),company:this.str(a,"company"),project:this.str(a,"project")||void 0,description:this.str(a,"description")||void 0,startDate:this.str(a,"startDate")||void 0,endDate:this.str(a,"endDate")||void 0,responsibilities:this.lines(a,"responsibilities")}}upsert(a,e,t){return e===void 0?gi(a,t):vi(a,e,t)}field(a,e,t,n){return{key:a,label:this.i18n.t(e),type:t,value:n}}str(a,e){return(a[e]??"").trim()}lines(a,e){return(a[e]??"").split(/\r?\n/).map(t=>t.trim()).filter(t=>t.length>0)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})};var ba=["cvDoc"];function fa(i,a){if(i&1&&B(0,"app-cv-document",6,0),i&2){let e=p(2);f("resume",e.resume())}}function _a(i,a){if(i&1){let e=I();r(0,"div",4)(1,"button",5),u("click",function(){_(e);let n=p();return g(n.closeSharedView())}),r(2,"mat-icon"),m(3,"close"),l(),m(4),l()(),x(5,fa,2,1,"app-cv-document",6)}if(i&2){let e=p();d(4),S(" ",e.i18n.t("cv.closeView")," "),d(),k(e.hasResume()?5:-1)}}function ga(i,a){if(i&1){let e=I();r(0,"p",16),m(1),l(),r(2,"app-cv-document",17),u("edit",function(n){_(e);let o=p(3);return g(o.onEdit(n))}),l(),r(3,"mat-card",12)(4,"mat-card-header")(5,"mat-card-title"),m(6),l()(),r(7,"mat-card-content",13)(8,"app-cv-json-editor",18),u("applied",function(n){_(e);let o=p(3);return g(o.onImported(n))})("deleted",function(){_(e);let n=p(3);return g(n.clear())}),l()()()}if(i&2){let e=p(3);d(),b(e.i18n.t("builder.hint")),d(),f("resume",e.resume())("editable",!0),d(4),b(e.i18n.t("cv.editor.jsonTitle")),d(2),f("resume",e.resume())}}function va(i,a){if(i&1){let e=I();r(0,"mat-card",12)(1,"mat-card-header")(2,"mat-card-title"),m(3),l(),r(4,"mat-card-subtitle"),m(5),l()(),r(6,"mat-card-content",13)(7,"div",4)(8,"button",14),u("click",function(){_(e);let n=p(2);return g(n.createNew())}),r(9,"mat-icon"),m(10,"note_add"),l(),m(11),l()(),r(12,"app-import-panel",15),u("imported",function(n){_(e);let o=p(2);return g(o.onImported(n))}),l()()(),x(13,ga,9,5)}if(i&2){let e=p(2);d(3),b(e.i18n.t("cv.nav.editor")),d(2),b(e.i18n.t("cv.getStarted.subtitle")),d(6),S(" ",e.i18n.t("cv.createNew")," "),d(2),k(e.hasResume()?13:-1)}}function ya(i,a){if(i&1){let e=I();r(0,"div",19)(1,"button",5),u("click",function(){_(e);let n=p(3);return g(n.exportPdf())}),r(2,"mat-icon"),m(3,"picture_as_pdf"),l(),m(4),l(),r(5,"button",21),u("click",function(){_(e);let n=p(3);return g(n.exportJson())}),r(6,"mat-icon"),m(7,"data_object"),l(),m(8),l(),r(9,"button",21),u("click",function(){_(e);let n=p(3);return g(n.clear())}),r(10,"mat-icon"),m(11,"delete_outline"),l(),m(12),l()()}if(i&2){let e=p(3);d(4),S(" ",e.i18n.t("cv.exportPdf")," "),d(4),S(" ",e.i18n.t("cv.exportJson")," "),d(4),S(" ",e.i18n.t("cv.clear")," ")}}function Ca(i,a){if(i&1&&(r(0,"p",20),m(1),l()),i&2){let e=p(3);d(),b(e.i18n.t("cv.getStarted.title"))}}function xa(i,a){if(i&1&&(r(0,"mat-card",12)(1,"mat-card-header")(2,"mat-card-title"),m(3),l()(),r(4,"mat-card-content",13),x(5,ya,13,3,"div",19)(6,Ca,2,1,"p",20),l()()),i&2){let e=p(2);d(3),b(e.i18n.t("cv.export.title")),d(2),k(e.hasResume()?5:6)}}function ka(i,a){if(i&1&&B(0,"app-cv-share-panel",6),i&2){let e=p(3);f("resume",e.resume())}}function Da(i,a){if(i&1&&(r(0,"p",20),m(1),l()),i&2){let e=p(3);d(),b(e.i18n.t("cv.getStarted.title"))}}function Ta(i,a){if(i&1&&(r(0,"mat-card",12)(1,"mat-card-header")(2,"mat-card-title"),m(3),l()(),r(4,"mat-card-content",13),x(5,ka,1,1,"app-cv-share-panel",6)(6,Da,2,1,"p",20),l()()),i&2){let e=p(2);d(3),b(e.i18n.t("cv.share.title")),d(2),k(e.hasResume()?5:6)}}function Ia(i,a){if(i&1&&B(0,"app-cv-document",6,0),i&2){let e=p(2);f("resume",e.resume())}}function wa(i,a){if(i&1){let e=I();r(0,"div",3)(1,"aside",7)(2,"mat-nav-list")(3,"a",8),u("click",function(){_(e);let n=p();return g(n.select("editor"))}),r(4,"mat-icon",9),m(5,"edit_document"),l(),r(6,"span",10),m(7),l()(),r(8,"a",8),u("click",function(){_(e);let n=p();return g(n.select("export"))}),r(9,"mat-icon",9),m(10,"download"),l(),r(11,"span",10),m(12),l()(),r(13,"a",8),u("click",function(){_(e);let n=p();return g(n.select("share"))}),r(14,"mat-icon",9),m(15,"share"),l(),r(16,"span",10),m(17),l()()()(),r(18,"div",11),x(19,va,14,4)(20,xa,7,2,"mat-card",12)(21,Ta,7,2,"mat-card",12),x(22,Ia,2,1,"app-cv-document",6),l()()}if(i&2){let e,t=p();d(3),w("cv-nav-active",t.section()==="editor"),d(4),b(t.i18n.t("cv.nav.editor")),d(),w("cv-nav-active",t.section()==="export"),d(4),b(t.i18n.t("cv.nav.export")),d(),w("cv-nav-active",t.section()==="share"),d(4),b(t.i18n.t("cv.nav.share")),d(2),k((e=t.section())==="editor"?19:e==="export"?20:e==="share"?21:-1),d(3),k(t.hasResume()&&t.section()!=="editor"?22:-1)}}var yi=class i{repository=s(Fn);exporter=s(On);printer=s(Nn);shareService=s(Se);importService=s(Ee);route=s(sn);dialog=s(He);blockEdit=s(ht);snackBar=s(ne);i18n=s(H);cvDoc=on("cvDoc",{read:L});resume=this.repository.resume;hasResume=this.repository.hasResume;section=E("editor");sharedView=E(!1);constructor(){this.loadSharedFromQuery()}select(a){this.section.set(a)}closeSharedView(){this.sharedView.set(!1)}onImported(a){this.repository.set(a),this.sharedView.set(!1)}onEdit(a){let e=this.resume();if(!e)return;if(a.action==="remove"){this.repository.set(this.blockEdit.applyRemove(e,a));return}let t=this.blockEdit.buildDialog(e,a);this.dialog.open(ut,{data:t,autoFocus:!1}).afterClosed().subscribe(n=>{n&&this.repository.set(this.blockEdit.applyResult(e,a,n))})}createNew(){this.repository.set(rt),this.sharedView.set(!1),this.section.set("editor")}exportJson(){let a=this.resume();a&&this.exporter.downloadJson(a)}exportPdf(){let a=this.cvDoc()?.nativeElement;a&&this.printer.print(a)}clear(){this.repository.clear()}loadSharedFromQuery(){let a=this.route.snapshot.queryParamMap,e=a.get(St),t=a.get(Et);if(e){try{this.repository.set(this.shareService.decodeEmbedded(e)),this.sharedView.set(!0),this.notifyShared()}catch{this.notifyShareError()}return}t&&this.importService.fromUrl(t).then(n=>{this.repository.set(n),this.sharedView.set(!0),this.notifyShared()}).catch(()=>this.notifyShareError())}notifyShared(){this.snackBar.open(this.i18n.t("cv.shared.loaded"),"OK",{duration:2500})}notifyShareError(){this.snackBar.open(this.i18n.t("cv.shared.error"),"Dismiss",{duration:5e3})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-resume-workspace-page"]],viewQuery:function(e,t){e&1&&en(t.cvDoc,ba,5,L),e&2&&tn()},decls:5,vars:2,consts:[["cvDoc",""],[1,"page-header"],[1,"page-title"],[1,"cv-workspace"],[1,"form-actions","mb-4"],["matButton","filled",3,"click"],[3,"resume"],[1,"cv-workspace-nav","surface-card"],["mat-list-item","",3,"click"],["matListItemIcon",""],["matListItemTitle",""],[1,"cv-workspace-content"],[1,"mb-6"],[1,"pt-4"],["matButton","tonal",3,"click"],[3,"imported"],[1,"field-hint","mb-3"],[1,"block","mb-6",3,"edit","resume","editable"],[3,"applied","deleted","resume"],[1,"form-actions"],[1,"muted"],["matButton","",3,"click"]],template:function(e,t){e&1&&(r(0,"div",1)(1,"h1",2),m(2),l()(),x(3,_a,6,2)(4,wa,23,11,"div",3)),e&2&&(d(2),b(t.i18n.t("cv.title")),d(),k(t.sharedView()?3:4))},dependencies:[En,Dn,In,Sn,wn,Tn,G,Q,Z,K,Ln,Pn,An,Rn,Mn,lt,Un,mt,pt],encapsulation:2,changeDetection:0})};export{yi as ResumeWorkspacePage};
