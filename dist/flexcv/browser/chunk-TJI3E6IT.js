import{a as Tt,b as zi,d as ji,e as Vi,g as Qi,h as Wi,i as $i,j as qi,k as Ji}from"./chunk-3GPJ7G6B.js";import{a as ui}from"./chunk-RF45POEX.js";import{c as Fi}from"./chunk-QBOWLZ7K.js";import{A as Oi,B as lt,E as ct,G as dt,I as mt,J as pt,K as Hi,L as Gi,M as ht,P as Ui,S as ut,T as bt,W as _t,X as gt,a as ie,b as bi,d as we,e as ne,f as _i,g as gi,h as ot,i as $t,j as ae,l as fi,m as vi,n as yi,o as oe,q as xi,t as re,u as Ai,v as Li,w as Ri,x as Pi,z as Bi}from"./chunk-VO7N5T7I.js";import{$ as st,A as ki,D as se,E as wi,F as Ci,G as Di,I as Ti,J as Ot,M as tt,O as Ii,S as Mi,T as De,U as Te,V as le,W as Si,X as Ei,Y as q,Z as J,_ as rt,ea as Ie,g as hi,ha as Ni,ia as G,j as Ct,k as Gt,n as ee,q as Ut,s as Pt,w as at,x as Dt,y as Bt,z as Ce}from"./chunk-KHP2WY76.js";import{A as Xe,B as St,Cb as L,Db as ke,Eb as h,Fb as p,Gb as yt,Hb as Q,Ib as xt,J as ti,Jb as X,K as it,Kb as v,L as ei,Lb as y,M as jt,Nb as li,Oa as c,Ob as ci,Pb as Rt,Qb as di,Rb as w,S as H,Sb as Yt,T as U,Ta as Et,Tb as m,Ua as At,Ub as b,V as A,Vb as R,Wa as Lt,X as r,Za as ai,_b as kt,a as Z,aa as g,ba as f,bb as x,c as qe,cb as $,d as z,da as N,db as k,ea as ii,eb as oi,ec as mi,f as ye,fb as B,g as Je,gb as nt,gc as Wt,ha as P,hb as ri,hc as Xt,i as Ke,ia as Y,ic as pi,kc as wt,m as Ze,ma as T,mc as W,nb as si,nc as te,ob as D,pb as I,qa as Vt,qb as M,ra as j,s as Zt,sb as xe,ta as E,tb as Ht,u as Ye,ua as ni,ub as Qt,v as et,vb as _,w as vt,wb as s,xb as l,yb as O}from"./chunk-6QRZ6BEM.js";import{a as C,b as F}from"./chunk-JJCA6Z7Z.js";function En(n,a){}var ft=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Se=(()=>{class n extends _i{_elementRef=r(E);_focusTrapFactory=r(Di);_config;_interactivityChecker=r(Ci);_ngZone=r(Y);_focusMonitor=r(Ce);_renderer=r(Lt);_changeDetectorRef=r(wt);_injector=r(N);_platform=r(Ct);_document=r(ii);_portalOutlet;_focusTrapped=new z;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=r(ft,{optional:!0})||new ft,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),d(),t.removeAttribute("tabindex")},o=this._renderer.listen(t,"blur",i),d=this._renderer.listen(t,"mousedown",i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_trapFocus(t){this._isDestroyed||Et(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus(t);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',t);break;default:this._focusByCssSelector(this._config.autoFocus,t);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let i=Gt(),o=this._elementRef.nativeElement;(!i||i===this._document.body||i===o||o.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=Gt();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Gt()))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(e,i){if(e&1&&X(ot,7),e&2){let o;v(o=y())&&(i._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,i){e&2&&D("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},features:[B],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,i){e&1&&nt(0,En,0,0,"ng-template",0)},dependencies:[ot],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),qt=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new z;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,t){this.overlayRef=a,this.config=t,this.disableClose=t.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!Bt(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(a,t){if(this._canClose(a)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(a),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",t=""){return this.overlayRef.updateSize({width:a,height:t}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(a,t,this.componentInstance))}},An=new A("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=r(N);return()=>ae(n)}}),Ln=new A("DialogData"),Rn=new A("DefaultDialogConfig");function Pn(n){let a=T(n),t=new P;return{valueSignal:a,get value(){return a()},change:t,ngOnDestroy(){t.complete()}}}var Ee=(()=>{class n{_injector=r(N);_defaultOptions=r(Rn,{optional:!0});_parentDialog=r(n,{optional:!0,skipSelf:!0});_overlayContainer=r(vi);_idGenerator=r(Dt);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new z;_afterOpenedAtThisLevel=new z;_ariaHiddenElements=new Map;_scrollStrategy=r(An);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Zt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(it(void 0)));constructor(){}open(t,e){let i=this._defaultOptions||new ft;e=C(C({},i),e),e.id=e.id||this._idGenerator.getId("cdk-dialog-"),e.id&&this.getDialogById(e.id);let o=this._getOverlayConfig(e),d=xi(this._injector,o),u=new qt(d,e),S=this._attachContainer(d,u,e);if(u.containerInstance=S,!this.openDialogs.length){let K=this._overlayContainer.getContainerElement();S._focusTrapped?S._focusTrapped.pipe(St(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(K)}):this._hideNonDialogContentFromAssistiveTechnology(K)}return this._attachDialogContent(t,u,S,e),this.openDialogs.push(u),u.closed.subscribe(()=>this._removeOpenDialog(u,!0)),this.afterOpened.next(u),u}closeAll(){Me(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){Me(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),Me(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new fi({positionStrategy:t.positionStrategy||oe().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,i){let o=i.injector||i.viewContainerRef?.injector,d=[{provide:ft,useValue:i},{provide:qt,useValue:e},{provide:yi,useValue:t}],u;i.container?typeof i.container=="function"?u=i.container:(u=i.container.type,d.push(...i.container.providers(i))):u=Se;let S=new we(u,i.viewContainerRef,N.create({parent:o||this._injector,providers:d}));return t.attach(S).instance}_attachDialogContent(t,e,i,o){if(t instanceof At){let d=this._createInjector(o,e,i,void 0),u={$implicit:o.data,dialogRef:e};o.templateContext&&(u=C(C({},u),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),i.attachTemplatePortal(new ne(t,null,u,d))}else{let d=this._createInjector(o,e,i,this._injector),u=i.attachComponentPortal(new we(t,o.viewContainerRef,d));e.componentRef=u,e.componentInstance=u.instance}}_createInjector(t,e,i,o){let d=t.injector||t.viewContainerRef?.injector,u=[{provide:Ln,useValue:t.data},{provide:qt,useValue:e}];return t.providers&&(typeof t.providers=="function"?u.push(...t.providers(e,t,i)):u.push(...t.providers)),t.direction&&(!d||!d.get(Pt,null,{optional:!0}))&&u.push({provide:Pt,useValue:Pn(t.direction)}),N.create({parent:d||o,providers:u})}_removeOpenDialog(t,e){let i=this.openDialogs.indexOf(t);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,d)=>{o?d.setAttribute("aria-hidden",o):d.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let i=e.length-1;i>-1;i--){let o=e[i];o!==t&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(e){return new(e||n)};static \u0275prov=H({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Me(n,a){let t=n.length;for(;t--;)a(n[t])}var Zi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=$({type:n});static \u0275inj=U({providers:[Ee],imports:[re,$t,Ti,$t]})}return n})();function Bn(n,a){}var de=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Ae="mdc-dialog--open",Yi="mdc-dialog--opening",Xi="mdc-dialog--closing",On=150,Fn=75,Nn=(()=>{class n extends Se{_animationStateChanged=new P;_animationsEnabled=!tt();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?en(this._config.enterAnimationDuration)??On:0;_exitAnimationDuration=this._animationsEnabled?en(this._config.exitAnimationDuration)??Fn:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(tn,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Yi,Ae)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Ae),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Ae),this._animationsEnabled?(this._hostElement.style.setProperty(tn,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Xi)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Yi,Xi)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,i){e&2&&(ke("id",i._config.id),D("aria-modal",i._config.ariaModal)("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),w("_mat-animation-noopable",!i._animationsEnabled)("mat-mdc-dialog-container-with-actions",i._actionSectionCount>0))},features:[B],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,i){e&1&&(s(0,"div",0)(1,"div",1),nt(2,Bn,0,0,"ng-template",2),l()())},dependencies:[ot],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2})}return n})(),tn="--mat-dialog-transition-duration";function en(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?Ut(n.substring(0,n.length-2)):n.endsWith("s")?Ut(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var ce=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(ce||{}),It=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new ye(1);_beforeClosed=new ye(1);_result;_closeFallbackTimeout;_state=ce.OPEN;_closeInteractionType;constructor(a,t,e){this._ref=a,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe(vt(i=>i.state==="opened"),St(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(vt(i=>i.state==="closed"),St(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),et(this.backdropClick(),this.keydownEvents().pipe(vt(i=>i.keyCode===27&&!this.disableClose&&!Bt(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),nn(this,i.type==="keydown"?"keyboard":"mouse"))})}close(a){let t=this._config.closePredicate;t&&!t(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(vt(e=>e.state==="closing"),St(1)).subscribe(e=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=ce.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let t=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?t.left(a.left):t.right(a.right):t.centerHorizontally(),a&&(a.top||a.bottom)?a.top?t.top(a.top):t.bottom(a.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",t=""){return this._ref.updateSize(a,t),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=ce.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function nn(n,a,t){return n._closeInteractionType=a,n.close(t)}var Le=new A("MatMdcDialogData"),zn=new A("mat-mdc-dialog-default-options"),jn=new A("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=r(N);return()=>ae(n)}}),Jt=(()=>{class n{_defaultOptions=r(zn,{optional:!0});_scrollStrategy=r(jn);_parentDialog=r(n,{optional:!0,skipSelf:!0});_idGenerator=r(Dt);_injector=r(N);_dialog=r(Ee);_animationsDisabled=tt();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new z;_afterOpenedAtThisLevel=new z;dialogConfigClass=de;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Zt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(it(void 0)));constructor(){this._dialogRefConstructor=It,this._dialogContainerType=Nn,this._dialogDataToken=Le}open(t,e){let i;e=C(C({},this._defaultOptions||new de),e),e.id=e.id||this._idGenerator.getId("mat-mdc-dialog-"),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(t,F(C({},e),{positionStrategy:oe(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()==="0"||e.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:ft,useValue:e}]},templateContext:()=>({dialogRef:i}),providers:(d,u,S)=>(i=new this._dialogRefConstructor(d,e,S),i.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:S},{provide:this._dialogDataToken,useValue:u.data},{provide:this._dialogRefConstructor,useValue:i}])}));return i.componentRef=o.componentRef,i.componentInstance=o.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let d=this.openDialogs.indexOf(i);d>-1&&(this.openDialogs.splice(d,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=H({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),an=(()=>{class n{dialogRef=r(It,{optional:!0});_elementRef=r(E);_dialog=r(Jt);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=cn(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){nn(this.dialogRef,t.screenX===0&&t.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(e,i){e&1&&h("click",function(d){return i._onButtonClick(d)}),e&2&&D("aria-label",i.ariaLabel||null)("type",i.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[Vt]})}return n})(),on=(()=>{class n{_dialogRef=r(It,{optional:!0});_elementRef=r(E);_dialog=r(Jt);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=cn(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n})}return n})(),rn=(()=>{class n extends on{id=r(Dt).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275dir=k({type:n,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(e,i){e&2&&ke("id",i.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[B]})}return n})(),sn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[oi([ie])]})}return n})(),ln=(()=>{class n extends on{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275dir=k({type:n,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(e,i){e&2&&w("mat-mdc-dialog-actions-align-start",i.align==="start")("mat-mdc-dialog-actions-align-center",i.align==="center")("mat-mdc-dialog-actions-align-end",i.align==="end")},inputs:{align:"align"},features:[B]})}return n})();function cn(n,a){let t=n.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?a.find(e=>e.id===t.id):null}var dn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=$({type:n});static \u0275inj=U({providers:[Jt],imports:[Zi,re,$t,at]})}return n})();var mn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=$({type:n});static \u0275inj=U({imports:[at]})}return n})();var Hn=["*"],Qn=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,Wn=["unscopedContent"],Gn=["text"],Un=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],$n=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var qn=new A("ListOption"),Pe=(()=>{class n{_elementRef=r(E);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),Jn=(()=>{class n{_elementRef=r(E);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),Kn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),pn=(()=>{class n{_listOption=r(qn,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,hostVars:4,hostBindings:function(e,i){e&2&&w("mdc-list-item__start",i._isAlignedAtStart())("mdc-list-item__end",!i._isAlignedAtStart())}})}return n})(),Zn=(()=>{class n extends pn{static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275dir=k({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[B]})}return n})(),Be=(()=>{class n extends pn{static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275dir=k({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[B]})}return n})(),Yn=new A("MAT_LIST_CONFIG"),Re=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Ot(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(Ot(t))}_disabled=T(!1);_defaultOptions=r(Yn,{optional:!0});static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,hostVars:1,hostBindings:function(e,i){e&2&&D("aria-disabled",i.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),Xn=(()=>{class n{_elementRef=r(E);_ngZone=r(Y);_listBase=r(Re,{optional:!0});_platform=r(Ct);_hostElement;_isButtonElement;_noopAnimations=tt();_avatars;_icons;set lines(t){this._explicitLines=Ut(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=Ot(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(Ot(t))}_disabled=T(!1);_subscriptions=new Z;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){r(ee).load(le);let t=r(De,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Mi(this,this._ngZone,this._hostElement,this._platform,r(N)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(et(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),i=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&e===1;i.classList.toggle("mdc-list-item__primary-text",o),i.classList.toggle("mdc-list-item__secondary-text",!o)}else i.classList.remove("mdc-list-item__primary-text"),i.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,contentQueries:function(e,i,o){if(e&1&&xt(o,Zn,4)(o,Be,4),e&2){let d;v(d=y())&&(i._avatars=d),v(d=y())&&(i._icons=d)}},hostVars:4,hostBindings:function(e,i){e&2&&(D("aria-disabled",i.disabled)("disabled",i._isButtonElement&&i.disabled||null),w("mdc-list-item--disabled",i.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})();var hn=(()=>{class n extends Xn{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=Ot(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,i,o){if(e&1&&xt(o,Jn,5)(o,Pe,5)(o,Kn,5),e&2){let d;v(d=y())&&(i._lines=d),v(d=y())&&(i._titles=d),v(d=y())&&(i._meta=d)}},viewQuery:function(e,i){if(e&1&&X(Wn,5)(Gn,5),e&2){let o;v(o=y())&&(i._unscopedContent=o.first),v(o=y())&&(i._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,i){e&2&&(D("aria-current",i._getAriaCurrent()),w("mdc-list-item--activated",i.activated)("mdc-list-item--with-leading-avatar",i._avatars.length!==0)("mdc-list-item--with-leading-icon",i._icons.length!==0)("mdc-list-item--with-trailing-meta",i._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",i._hasBothLeadingAndTrailing())("_mat-animation-noopable",i._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[B],ngContentSelectors:$n,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,i){e&1&&(yt(Un),Q(0),s(1,"span",1),Q(2,1),Q(3,2),s(4,"span",2,0),h("cdkObserveContent",function(){return i._updateItemLines(!0)}),Q(6,3),l()(),Q(7,4),Q(8,5),O(9,"div",3))},dependencies:[se],encapsulation:2,changeDetection:0})}return n})();var un=(()=>{class n extends Re{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[kt([{provide:Re,useExisting:n}]),B],ngContentSelectors:Hn,decls:1,vars:0,template:function(e,i){e&1&&(yt(),Q(0))},styles:[Qn],encapsulation:2,changeDetection:0})}return n})();var bn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=$({type:n});static \u0275inj=U({imports:[wi,Ei,Fi,at,mn]})}return n})();function _n(n){let a=new TextEncoder().encode(n),t="";for(let e of a)t+=String.fromCharCode(e);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function gn(n){let a=n.replace(/-/g,"+").replace(/_/g,"/"),t=atob(a),e=Uint8Array.from(t,i=>i.charCodeAt(0));return new TextDecoder().decode(e)}var Oe="cvData",Fe="cv",Ft=class n{buildLink(a){let t=_n(JSON.stringify(a));return`${this.baseUrl()}cv?${Oe}=${t}`}buildUrlLink(a){return`${this.baseUrl()}cv?${Fe}=${encodeURIComponent(a.trim())}`}decodeEmbedded(a){return Tt(JSON.parse(gn(a)))}baseUrl(){return document.baseURI.endsWith("/")?document.baseURI:`${document.baseURI}/`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=H({token:n,factory:n.\u0275fac,providedIn:"root"})};var me={basics:{fullName:"Alex Carter",title:"Senior Java Backend Engineer",summary:"Senior Java Backend Engineer with 5+ years of experience in building and modernizing scalable enterprise solutions. Expert in Java 21, Spring Boot 3.5, and the AWS ecosystem (ECS, Lambda, Bedrock). Proven track record in architecting AI-native platforms that reduced operational costs by $16,000+ monthly and automated manual efforts by 58%. Specialist in high-load migrations, event-driven architectures, and technical leadership within the Retail, Healthcare, Real Estate and IoT domains.",containsImage:!0,imageURL:"https://ui-avatars.com/api/?name=Alex+Carter&size=256&background=00366d&color=ffffff",contact:{location:"Ukraine, Lviv",github:"@alexcarter",email:"alex.carter@example.com",linkedin:"alex-carter"}},languages:[{name:"Ukrainian",level:"Native"},{name:"English",level:"B2"}],skills:[{category:"Languages",skills:["Java","TypeScript","Angular","Python"]},{category:"Databases",skills:["MySQL","PostgreSQL","Oracle","MongoDB","DynamoDB","Redis"]},{category:"Spring",skills:["Spring Boot","Spring Data JPA","Spring MVC","Spring Security","Spring Cloud","Spring Batch","Spring AOP"]},{category:"AWS",skills:["ECS","Lambda","S3","SQS","SNS","API Gateway","Bedrock","CloudWatch","ECR","Fargate","ELB/ALB"]},{category:"DevOps",skills:["Docker","Kubernetes","Helm","Terraform","Jenkins","GitHub Actions"]},{category:"Messaging",skills:["Apache Kafka","MQTT","RabbitMQ"]},{category:"Architecture",skills:["Microservices","Serverless","Event-driven","REST API","GraphQL"]}],education:[{degree:"Master of Science, Computer Engineering",institution:"Lviv Polytechnic National University",specialty:"Specialized Computer Systems",startDate:"Sep 2021",endDate:"Sep 2022"},{degree:"Bachelor of Science, Computer Engineering",institution:"Lviv Polytechnic National University",specialty:"Specialized Computer Systems",startDate:"Sep 2017",endDate:"Sep 2021"}],employment:[{role:"Senior Software Engineer",company:"EPAM",project:"Enterprise Platform Modernisation and Optimisation",description:"Full-cycle software development, including architecture planning, API design, performance tuning, and legacy system optimization.",startDate:"Sep 2022",endDate:"Present",responsibilities:["Led migration from Java 8/Spring Boot 2.2 to Java 21/Spring Boot 3.4, resolving critical dependency issues","Coordinated integration across 8 teams, ensuring smooth large-scale system transition","Mentored engineers and improved code quality, test coverage, and maintainability","Built LLM-based optimization solution (GPT-4o) saving $16,000+/month","Designed scalable data processing solutions and contributed to Spark jobs processing 4M records"]},{role:"Senior Software Engineer",company:"GazdAI (self project)",project:"Real estate platform with AI-core and automated processes",description:"Architected and deployed a cost-optimized, AI-native platform on AWS, leveraging event-driven systems and automated pipelines.",startDate:"Dec 2025",endDate:"Mar 2026",responsibilities:["Led AWS cloud architecture (Docker, Terraform, Fargate), delivering a cost-efficient MVP","Built AI-native platform core with event-driven architecture","Reduced AI processing costs by 35% via image deduplication (perceptual hashing)","Cut LLM usage costs through search optimization and caching"]},{role:"Team Lead",company:"EPAM Systems",project:"AWS Bedrock AI Scheduling and Management Agent",description:"Led a cross-functional team during an internal EPAM AI Marathon to build an AWS Bedrock\u2013powered AI Scheduling and Management Agent.",startDate:"Jul 2025",endDate:"Aug 2025",responsibilities:["Led a technical team (1 DevOps, 4 Software Engineers)","Delivered a solution that reduced manual scheduling efforts by 58%","Coordinated team workflows and ensured timely delivery of a functional MVP"]}]};function fn(n,a){return`You are a resume parser. Convert the resume text below into a single JSON object.

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
${n}
"""`}var pe=class n{async pdfToText(a){let t=await import("./chunk-VJQ23XIJ.js");t.GlobalWorkerOptions.workerSrc=new URL("pdf.worker.min.mjs",document.baseURI).toString();let e=await a.arrayBuffer(),i=await t.getDocument({data:e}).promise,o=[];for(let d=1;d<=i.numPages;d++){let K=(await(await i.getPage(d)).getTextContent()).items.map(zt=>"str"in zt?zt.str:"").join(" ");o.push(K)}return o.join(`
`)}async docxToText(a){let t=await import("./chunk-NYLLO4PB.js"),e=await a.arrayBuffer();return(await t.extractRawText({arrayBuffer:e})).value}static \u0275fac=function(t){return new(t||n)};static \u0275prov=H({token:n,factory:n.\u0275fac,providedIn:"root"})};var Mt=class extends Error{constructor(a){super(a),this.name="ResumeImportError"}},Nt=class n{http=r(hi);gemini=r(Qi);extractor=r(pe);settings=r(Hi);fromJson(a){let t;try{t=JSON.parse(a)}catch{throw new Mt("The file does not contain valid JSON.")}return Tt(t)}async fromUrl(a){let t;try{t=await Ze(this.http.get(a.trim(),{responseType:"text"}))}catch{throw new Mt("Could not fetch the URL. Make sure it is public and CORS-accessible (e.g. a GitHub raw link).")}return this.fromJson(t)}async fromText(a){if(!a.trim())throw new Mt("No text to import.");let t=Ni[this.settings.cvLanguage()],e=await this.gemini.generateText(fn(a,t),{jsonOutput:!0,temperature:.1}),i=Wi(e);if(i===null)throw new Mt("Gemini did not return parseable resume JSON.");return Tt(i)}async fromFile(a){let t=this.extensionOf(a.name);if(t==="json")return this.fromJson(await a.text());if(t==="txt")return this.fromText(await a.text());if(t==="pdf")return this.fromText(await this.extractor.pdfToText(a));if(t==="docx")return this.fromText(await this.extractor.docxToText(a));throw new Mt(`Unsupported file type: .${t}. Use JSON, TXT, PDF, or DOCX.`)}extensionOf(a){return a.split(".").pop()?.toLowerCase()??""}static \u0275fac=function(t){return new(t||n)};static \u0275prov=H({token:n,factory:n.\u0275fac,providedIn:"root"})};var He=["*"];function na(n,a){n&1&&Q(0)}var aa=["tabListContainer"],oa=["tabList"],ra=["tabListInner"],sa=["nextPaginator"],la=["previousPaginator"],ca=["content"];function da(n,a){}var ma=["tabBodyWrapper"],pa=["tabHeader"];function ha(n,a){}function ua(n,a){if(n&1&&nt(0,ha,0,0,"ng-template",12),n&2){let t=p().$implicit;_("cdkPortalOutlet",t.templateLabel)}}function ba(n,a){if(n&1&&m(0),n&2){let t=p().$implicit;b(t.textLabel)}}function _a(n,a){if(n&1){let t=L();s(0,"div",7,2),h("click",function(){let i=g(t),o=i.$implicit,d=i.$index,u=p(),S=Rt(1);return f(u._handleClick(o,S,d))})("cdkFocusChange",function(i){let o=g(t).$index,d=p();return f(d._tabFocusChanged(i,o))}),O(2,"span",8)(3,"div",9),s(4,"span",10)(5,"span",11),I(6,ua,1,1,null,12)(7,ba,1,1),l()()()}if(n&2){let t=a.$implicit,e=a.$index,i=Rt(1),o=p();Yt(t.labelClass),w("mdc-tab--active",o.selectedIndex===e),_("id",o._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",o.fitInkBarToContent),D("tabIndex",o._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(e))("aria-selected",o.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),c(3),_("matRippleTrigger",i)("matRippleDisabled",t.disabled||o.disableRipple),c(3),M(t.templateLabel?6:7)}}function ga(n,a){n&1&&Q(0)}function fa(n,a){if(n&1){let t=L();s(0,"mat-tab-body",13),h("_onCentered",function(){g(t);let i=p();return f(i._removeTabBodyWrapperHeight())})("_onCentering",function(i){g(t);let o=p();return f(o._setTabBodyWrapperHeight(i))})("_beforeCentering",function(i){g(t);let o=p();return f(o._bodyCentered(i))}),l()}if(n&2){let t=a.$implicit,e=a.$index,i=p();Yt(t.bodyClass),_("id",i._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",i.animationDuration)("preserveContent",i.preserveContent),D("tabindex",i.contentTabIndex!=null&&i.selectedIndex===e?i.contentTabIndex:null)("aria-labelledby",i._getTabLabelId(t,e))("aria-hidden",i.selectedIndex!==e)}}var va=new A("MatTabContent"),ya=(()=>{class n{template=r(At);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","matTabContent",""]],features:[kt([{provide:va,useExisting:n}])]})}return n})(),xa=new A("MatTabLabel"),kn=new A("MAT_TAB"),ka=(()=>{class n extends gi{_closestTab=r(kn,{optional:!0});static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275dir=k({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[kt([{provide:xa,useExisting:n}]),B]})}return n})(),wn=new A("MAT_TAB_GROUP"),Qe=(()=>{class n{_viewContainerRef=r(ai);_closestTabGroup=r(wn,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new z;position=null;origin=null;isActive=!1;constructor(){r(ee).load(le)}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new ne(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["mat-tab"]],contentQueries:function(e,i,o){if(e&1&&xt(o,ka,5)(o,ya,7,At),e&2){let d;v(d=y())&&(i.templateLabel=d.first),v(d=y())&&(i._explicitContent=d.first)}},viewQuery:function(e,i){if(e&1&&X(At,7),e&2){let o;v(o=y())&&(i._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,i){e&2&&D("id",null)},inputs:{disabled:[2,"disabled","disabled",W],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[kt([{provide:kn,useExisting:n}]),Vt],ngContentSelectors:He,decls:1,vars:0,template:function(e,i){e&1&&(yt(),ri(0,na,1,0,"ng-template"))},encapsulation:2})}return n})(),Ne="mdc-tab-indicator--active",vn="mdc-tab-indicator--no-transition",ze=class{_items;_currentItem;constructor(a){this._items=a}hide(){this._items.forEach(a=>a.deactivateInkBar()),this._currentItem=void 0}alignToElement(a){let t=this._items.find(i=>i.elementRef.nativeElement===a),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let i=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(i),this._currentItem=t}}},wa=(()=>{class n{_elementRef=r(E);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(Ne);return}let i=e.getBoundingClientRect(),o=t.width/i.width,d=t.left-i.left;e.classList.add(vn),this._inkBarContentElement.style.setProperty("transform",`translateX(${d}px) scaleX(${o})`),e.getBoundingClientRect(),e.classList.remove(vn),e.classList.add(Ne),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Ne)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),i=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",i.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",W]}})}return n})();var Cn=(()=>{class n extends wa{elementRef=r(E);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275dir=k({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,i){e&2&&(D("aria-disabled",!!i.disabled),w("mat-mdc-tab-disabled",i.disabled))},inputs:{disabled:[2,"disabled","disabled",W]},features:[B]})}return n})(),yn={passive:!0},Ca=650,Da=100,Ta=(()=>{class n{_elementRef=r(E);_changeDetectorRef=r(wt);_viewportRuler=r(bi);_dir=r(Pt,{optional:!0});_ngZone=r(Y);_platform=r(Ct);_sharedResizeObserver=r(Gi);_injector=r(N);_renderer=r(Lt);_animationsDisabled=tt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new z;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new z;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new P;indexFocused=new P;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),yn),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),yn))}ngAfterContentInit(){let t=this._dir?this._dir.change:Ke("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Xe(32),jt(this._destroyed)),i=this._viewportRuler.change(150).pipe(jt(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Ii(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Et(o,{injector:this._injector}),et(t,i,e,this._items.changes,this._itemsResized()).pipe(jt(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(d=>{this.indexFocused.emit(d),this._setTabFocus(d)})}_itemsResized(){return typeof ResizeObserver!="function"?Je:this._items.changes.pipe(it(this._items),ei(t=>new qe(e=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(o=>e.next(o));return t.forEach(o=>i.observe(o.elementRef.nativeElement)),()=>{i.disconnect()}}))),ti(1),vt(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Bt(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,i=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:d}=e.elementRef.nativeElement,u,S;this._getLayoutDirection()=="ltr"?(u=o,S=u+d):(S=this._tabListInner.nativeElement.offsetWidth-o,u=S-d);let K=this.scrollDistance,zt=this.scrollDistance+i;u<K?this.scrollDistance-=K-u:S>zt&&(this.scrollDistance+=Math.min(S-zt,u-K))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,i=t-e>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Ye(Ca,Da).pipe(jt(et(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:o}=this._scrollHeader(t);(o===0||o>=i)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",W],selectedIndex:[2,"selectedIndex","selectedIndex",te]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return n})(),Ia=(()=>{class n extends Ta{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new ze(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-tab-header"]],contentQueries:function(e,i,o){if(e&1&&xt(o,Cn,4),e&2){let d;v(d=y())&&(i._items=d)}},viewQuery:function(e,i){if(e&1&&X(aa,7)(oa,7)(ra,7)(sa,5)(la,5),e&2){let o;v(o=y())&&(i._tabListContainer=o.first),v(o=y())&&(i._tabList=o.first),v(o=y())&&(i._tabListInner=o.first),v(o=y())&&(i._nextPaginator=o.first),v(o=y())&&(i._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,i){e&2&&w("mat-mdc-tab-header-pagination-controls-enabled",i._showPaginationControls)("mat-mdc-tab-header-rtl",i._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",W]},features:[B],ngContentSelectors:He,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,i){e&1&&(yt(),s(0,"div",5,0),h("click",function(){return i._handlePaginatorClick("before")})("mousedown",function(d){return i._handlePaginatorPress("before",d)})("touchend",function(){return i._stopInterval()}),O(2,"div",6),l(),s(3,"div",7,1),h("keydown",function(d){return i._handleKeydown(d)}),s(5,"div",8,2),h("cdkObserveContent",function(){return i._onContentChanges()}),s(7,"div",9,3),Q(9),l()()(),s(10,"div",10,4),h("mousedown",function(d){return i._handlePaginatorPress("after",d)})("click",function(){return i._handlePaginatorClick("after")})("touchend",function(){return i._stopInterval()}),O(12,"div",6),l()),e&2&&(w("mat-mdc-tab-header-pagination-disabled",i._disableScrollBefore),_("matRippleDisabled",i._disableScrollBefore||i.disableRipple),c(3),w("_mat-animation-noopable",i._animationsDisabled),c(2),D("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby||null),c(5),w("mat-mdc-tab-header-pagination-disabled",i._disableScrollAfter),_("matRippleDisabled",i._disableScrollAfter||i.disableRipple))},dependencies:[Te,se],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return n})(),Ma=new A("MAT_TABS_CONFIG"),xn=(()=>{class n extends ot{_host=r(je);_ngZone=r(Y);_centeringSub=Z.EMPTY;_leavingSub=Z.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(it(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","matTabBodyHost",""]],features:[B]})}return n})(),je=(()=>{class n{_elementRef=r(E);_dir=r(Pt,{optional:!0});_ngZone=r(Y);_injector=r(N);_renderer=r(Lt);_diAnimationsDisabled=tt();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=Z.EMPTY;_position;_previousPosition;_onCentering=new P;_beforeCentering=new P;_afterLeavingCenter=new P;_onCentered=new P(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=r(wt);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Et(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),i.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Et(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["mat-tab-body"]],viewQuery:function(e,i){if(e&1&&X(xn,5)(ca,5),e&2){let o;v(o=y())&&(i._portalHost=o.first),v(o=y())&&(i._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,i){e&2&&D("inert",i._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,i){e&1&&(s(0,"div",1,0),nt(2,da,0,0,"ng-template",2),l()),e&2&&w("mat-tab-body-content-left",i._position==="left")("mat-tab-body-content-right",i._position==="right")("mat-tab-body-content-can-animate",i._position==="center"||i._previousPosition==="center")},dependencies:[xn,ie],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return n})(),Dn=(()=>{class n{_elementRef=r(E);_changeDetectorRef=r(wt);_ngZone=r(Y);_tabsSubscription=Z.EMPTY;_tabLabelSubscription=Z.EMPTY;_tabBodySubscription=Z.EMPTY;_diAnimationsDisabled=tt();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new ni;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new P;focusChange=new P;animationDone=new P;selectedTabChange=new P(!0);_groupId;_isServer=!r(Ct).isBrowser;constructor(){let t=r(Ma,{optional:!0});this._groupId=r(Dt).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let i=this._tabBodyWrapper.nativeElement;i.style.minHeight=i.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((i,o)=>i.isActive=o===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,i)=>{e.position=i-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),i;for(let o=0;o<e.length;o++)if(e[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,i=e[o];break}!i&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(it(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new Ve;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=et(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,i){e.focusIndex=i,t.disabled||(this.selectedIndex=i)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,i)=>e._setActiveClass(i===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["mat-tab-group"]],contentQueries:function(e,i,o){if(e&1&&xt(o,Qe,5),e&2){let d;v(d=y())&&(i._allTabs=d)}},viewQuery:function(e,i){if(e&1&&X(ma,5)(pa,5)(je,5),e&2){let o;v(o=y())&&(i._tabBodyWrapper=o.first),v(o=y())&&(i._tabHeader=o.first),v(o=y())&&(i._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(e,i){e&2&&(D("mat-align-tabs",i.alignTabs),Yt("mat-"+(i.color||"primary")),di("--mat-tab-animation-duration",i.animationDuration),w("mat-mdc-tab-group-dynamic-height",i.dynamicHeight)("mat-mdc-tab-group-inverted-header",i.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",i.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",W],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",W],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",W],selectedIndex:[2,"selectedIndex","selectedIndex",te],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",te],disablePagination:[2,"disablePagination","disablePagination",W],disableRipple:[2,"disableRipple","disableRipple",W],preserveContent:[2,"preserveContent","preserveContent",W],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[kt([{provide:wn,useExisting:n}])],ngContentSelectors:He,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,i){e&1&&(yt(),s(0,"mat-tab-header",3,0),h("indexFocused",function(d){return i._focusChanged(d)})("selectFocusedIndex",function(d){return i.selectedIndex=d}),Ht(2,_a,8,17,"div",4,xe),l(),I(4,ga,1,0),s(5,"div",5,1),Ht(7,fa,1,10,"mat-tab-body",6,xe),l()),e&2&&(_("selectedIndex",i.selectedIndex||0)("disableRipple",i.disableRipple)("disablePagination",i.disablePagination),si("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby),c(2),Qt(i._tabs),c(2),M(i._isServer?4:-1),c(),w("_mat-animation-noopable",i._animationsDisabled()),c(2),Qt(i._tabs))},dependencies:[Ia,Cn,ki,Te,ot,je],styles:[`.mdc-tab {
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
`],encapsulation:2})}return n})(),Ve=class{index;tab};var Tn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=$({type:n});static \u0275inj=U({imports:[at]})}return n})();function Ea(n,a){n&1&&O(0,"mat-progress-bar",1)}var he=class n{importService=r(Nt);snackBar=r(pt);i18n=r(G);imported=Wt();accept=Ie.acceptedExtensions.join(",");urlInput=T("");textInput=T("");busy=T(!1);async onFileSelected(a){let t=a.target,e=t.files?.[0];if(t.value="",!!e){if(e.size>Ie.maxFileSizeBytes){this.fail(this.i18n.t("import.tooLarge"));return}await this.run(()=>this.importService.fromFile(e))}}async importUrl(){if(!this.urlInput().trim()){this.fail(this.i18n.t("import.enterUrl"));return}await this.run(()=>this.importService.fromUrl(this.urlInput()))}async importText(){if(!this.textInput().trim()){this.fail(this.i18n.t("import.pasteText"));return}await this.run(()=>this.importService.fromText(this.textInput()))}loadSample(){this.emit(me)}async run(a){this.busy.set(!0);try{this.emit(await a())}catch(t){this.fail(t instanceof Error?t.message:"Import failed.")}finally{this.busy.set(!1)}}emit(a){this.imported.emit(a),this.snackBar.open(this.i18n.t("import.imported"),"OK",{duration:2500})}fail(a){this.snackBar.open(a,"Dismiss",{duration:5e3})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["app-import-panel"]],outputs:{imported:"imported"},decls:43,vars:20,consts:[["fileInput",""],["mode","indeterminate"],[3,"label"],[1,"flex","flex-col","gap-3","p-4"],[1,"field-hint"],[1,"form-actions"],["matButton","filled",3,"click","disabled"],["matButton","",3,"click","disabled"],["type","file",1,"hidden",3,"change","accept"],["appearance","outline",1,"form-field-full"],["matInput","","placeholder","https://raw.githubusercontent.com/user/repo/main/resume.json",3,"ngModelChange","ngModel"],["matInput","","rows","8",3,"ngModelChange","ngModel"]],template:function(t,e){if(t&1){let i=L();I(0,Ea,1,0,"mat-progress-bar",1),s(1,"mat-tab-group")(2,"mat-tab",2)(3,"div",3)(4,"p",4),m(5),l(),s(6,"div",5)(7,"button",6),h("click",function(){g(i);let d=Rt(16);return f(d.click())}),s(8,"mat-icon"),m(9,"upload_file"),l(),m(10),l(),s(11,"button",7),h("click",function(){return e.loadSample()}),s(12,"mat-icon"),m(13,"auto_awesome"),l(),m(14),l()(),s(15,"input",8,0),h("change",function(d){return e.onFileSelected(d)}),l()()(),s(17,"mat-tab",2)(18,"div",3)(19,"p",4),m(20),l(),s(21,"mat-form-field",9)(22,"mat-label"),m(23),l(),s(24,"input",10),h("ngModelChange",function(d){return e.urlInput.set(d)}),l()(),s(25,"div",5)(26,"button",6),h("click",function(){return e.importUrl()}),s(27,"mat-icon"),m(28,"cloud_download"),l(),m(29),l()()()(),s(30,"mat-tab",2)(31,"div",3)(32,"p",4),m(33),l(),s(34,"mat-form-field",9)(35,"mat-label"),m(36),l(),s(37,"textarea",11),h("ngModelChange",function(d){return e.textInput.set(d)}),l()(),s(38,"div",5)(39,"button",6),h("click",function(){return e.importText()}),s(40,"mat-icon"),m(41,"auto_fix_high"),l(),m(42),l()()()()()}t&2&&(M(e.busy()?0:-1),c(2),_("label",e.i18n.t("import.tab.file")),c(3),b(e.i18n.t("import.file.hint")),c(2),_("disabled",e.busy()),c(3),R(" ",e.i18n.t("import.choose")," "),c(),_("disabled",e.busy()),c(3),R(" ",e.i18n.t("import.loadSample")," "),c(),_("accept",e.accept),c(2),_("label",e.i18n.t("import.tab.url")),c(3),b(e.i18n.t("import.url.hint")),c(3),b(e.i18n.t("import.url.label")),c(),_("ngModel",e.urlInput()),c(2),_("disabled",e.busy()),c(3),R(" ",e.i18n.t("import.url.button")," "),c(),_("label",e.i18n.t("import.tab.text")),c(3),b(e.i18n.t("import.text.hint")),c(3),b(e.i18n.t("import.text.label")),c(),_("ngModel",e.textInput()),c(2),_("disabled",e.busy()),c(3),R(" ",e.i18n.t("import.text.button")," "))},dependencies:[mt,lt,ct,dt,Tn,Qe,Dn,bt,ut,ht,gt,_t,J,q,st,rt,qi,$i],encapsulation:2,changeDetection:0})};var _e=class n{snackBar=r(pt);i18n=r(G);resume=Xt.required();applied=Wt();deleted=Wt();draft=mi(()=>JSON.stringify(this.resume(),null,2));apply(){let a;try{a=JSON.parse(this.draft())}catch{this.snackBar.open(this.i18n.t("cv.editor.invalidJson"),"Dismiss",{duration:5e3});return}try{this.applied.emit(Tt(a)),this.snackBar.open(this.i18n.t("cv.editor.applied"),"OK",{duration:2500})}catch(t){let e=t instanceof Error?t.message:this.i18n.t("cv.editor.invalidJson");this.snackBar.open(e,"Dismiss",{duration:5e3})}}remove(){this.deleted.emit()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["app-cv-json-editor"]],inputs:{resume:[1,"resume"]},outputs:{applied:"applied",deleted:"deleted"},decls:16,vars:5,consts:[[1,"flex","flex-col","gap-3"],[1,"field-hint"],["appearance","outline",1,"form-field-full"],["matInput","","rows","18","spellcheck","false",1,"cv-json-area",3,"ngModelChange","ngModel"],[1,"form-actions"],["matButton","filled",3,"click"],["matButton","",3,"click"]],template:function(t,e){t&1&&(s(0,"div",0)(1,"p",1),m(2),l(),s(3,"mat-form-field",2)(4,"mat-label"),m(5),l(),s(6,"textarea",3),h("ngModelChange",function(o){return e.draft.set(o)}),l()(),s(7,"div",4)(8,"button",5),h("click",function(){return e.apply()}),s(9,"mat-icon"),m(10,"check"),l(),m(11),l(),s(12,"button",6),h("click",function(){return e.remove()}),s(13,"mat-icon"),m(14,"delete"),l(),m(15),l()()()),t&2&&(c(2),b(e.i18n.t("cv.editor.jsonHint")),c(3),b(e.i18n.t("cv.editor.jsonTitle")),c(),_("ngModel",e.draft()),c(5),R(" ",e.i18n.t("cv.editor.apply")," "),c(4),R(" ",e.i18n.t("cv.editor.delete")," "))},dependencies:[mt,lt,ct,dt,bt,ut,ht,gt,_t,J,q,st,rt],encapsulation:2,changeDetection:0})};function Aa(n,a){if(n&1){let t=L();s(0,"mat-form-field",6)(1,"mat-label"),m(2),l(),O(3,"input",11),s(4,"button",12),h("click",function(){g(t);let i=p();return f(i.copy(i.embedLink()))}),s(5,"mat-icon"),m(6,"content_copy"),l()()()}if(n&2){let t=p();c(2),b(t.i18n.t("cv.share.title")),c(),_("value",t.embedLink()),c(),D("aria-label",t.i18n.t("cv.share.copy"))}}function La(n,a){if(n&1){let t=L();s(0,"mat-form-field",6)(1,"mat-label"),m(2),l(),O(3,"input",11),s(4,"button",12),h("click",function(){g(t);let i=p();return f(i.copy(i.urlLink()))}),s(5,"mat-icon"),m(6,"content_copy"),l()()()}if(n&2){let t=p();c(2),b(t.i18n.t("cv.share.title")),c(),_("value",t.urlLink()),c(),D("aria-label",t.i18n.t("cv.share.copy"))}}var ge=class n{share=r(Ft);snackBar=r(pt);i18n=r(G);resume=Xt.required();embedLink=T("");jsonUrl=T("");urlLink=T("");generateEmbed(){this.embedLink.set(this.share.buildLink(this.resume()))}generateUrl(){this.jsonUrl().trim()&&this.urlLink.set(this.share.buildUrlLink(this.jsonUrl()))}async copy(a){if(a)try{await navigator.clipboard.writeText(a),this.snackBar.open(this.i18n.t("cv.share.copied"),"OK",{duration:2500})}catch{}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["app-cv-share-panel"]],inputs:{resume:[1,"resume"]},decls:28,vars:11,consts:[[1,"flex","flex-col","gap-6"],[1,"flex","flex-col","gap-3"],[1,"accent"],[1,"muted"],[1,"form-actions"],["matButton","filled",3,"click"],["appearance","outline",1,"form-field-full"],[1,"divider-line"],[1,"field-hint"],["matInput","","placeholder","https://raw.githubusercontent.com/user/repo/main/resume.json",3,"ngModelChange","ngModel"],["matButton","filled",3,"click","disabled"],["matInput","","readonly","",3,"value"],["matIconButton","","matSuffix","",3,"click"]],template:function(t,e){t&1&&(s(0,"div",0)(1,"section",1)(2,"h3",2),m(3),l(),s(4,"p",3),m(5),l(),s(6,"div",4)(7,"button",5),h("click",function(){return e.generateEmbed()}),s(8,"mat-icon"),m(9,"link"),l(),m(10),l()(),I(11,Aa,7,3,"mat-form-field",6),l(),O(12,"hr",7),s(13,"section",1)(14,"h3",2),m(15),l(),s(16,"p",8),m(17),l(),s(18,"mat-form-field",6)(19,"mat-label"),m(20),l(),s(21,"input",9),h("ngModelChange",function(o){return e.jsonUrl.set(o)}),l()(),s(22,"div",4)(23,"button",10),h("click",function(){return e.generateUrl()}),s(24,"mat-icon"),m(25,"link"),l(),m(26),l()(),I(27,La,7,3,"mat-form-field",6),l()()),t&2&&(c(3),b(e.i18n.t("cv.share.embedTitle")),c(2),b(e.i18n.t("cv.share.desc")),c(5),R(" ",e.i18n.t("cv.share.generate")," "),c(),M(e.embedLink()?11:-1),c(4),b(e.i18n.t("cv.share.urlTitle")),c(2),b(e.i18n.t("cv.share.urlHint")),c(3),b(e.i18n.t("cv.share.urlInput")),c(),_("ngModel",e.jsonUrl()),c(2),_("disabled",!e.jsonUrl().trim()),c(3),R(" ",e.i18n.t("cv.share.urlGenerate")," "),c(),M(e.urlLink()?27:-1))},dependencies:[mt,lt,ct,dt,bt,ut,ht,Ui,gt,_t,J,q,Si,st,rt],encapsulation:2,changeDetection:0})};var Ra=(n,a)=>a.key;function Pa(n,a){if(n&1){let t=L();s(0,"textarea",8),h("ngModelChange",function(i){g(t);let o=p().$implicit,d=p();return f(d.setValue(o.key,i))}),l()}if(n&2){let t=p().$implicit,e=p();_("ngModel",e.values()[t.key])}}function Ba(n,a){if(n&1){let t=L();s(0,"input",9),h("ngModelChange",function(i){g(t);let o=p().$implicit,d=p();return f(d.setValue(o.key,i))}),l()}if(n&2){let t=p().$implicit,e=p();_("ngModel",e.values()[t.key])}}function Oa(n,a){if(n&1&&(s(0,"mat-form-field",2)(1,"mat-label"),m(2),l(),I(3,Pa,1,1,"textarea",6)(4,Ba,1,1,"input",7),l()),n&2){let t=a.$implicit;c(2),b(t.label),c(),M(t.type==="textarea"?3:4)}}var fe=class n{i18n=r(G);data=r(Le);dialogRef=r(It);values=T(Object.fromEntries(this.data.fields.map(a=>[a.key,a.value])));setValue(a,t){this.values.update(e=>F(C({},e),{[a]:t}))}save(){this.dialogRef.close(this.values())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["app-edit-dialog"]],decls:10,vars:3,consts:[["mat-dialog-title",""],[1,"flex","flex-col","gap-3","pt-2",2,"min-width","360px"],["appearance","outline",1,"form-field-full"],["align","end"],["matButton","","mat-dialog-close",""],["matButton","filled",3,"click"],["matInput","","rows","4",3,"ngModel"],["matInput","",3,"ngModel"],["matInput","","rows","4",3,"ngModelChange","ngModel"],["matInput","",3,"ngModelChange","ngModel"]],template:function(t,e){t&1&&(s(0,"h2",0),m(1),l(),s(2,"mat-dialog-content",1),Ht(3,Oa,5,2,"mat-form-field",2,Ra),l(),s(5,"mat-dialog-actions",3)(6,"button",4),m(7),l(),s(8,"button",5),h("click",function(){return e.save()}),m(9),l()()),t&2&&(c(),b(e.data.title),c(2),Qt(e.data.fields),c(4),b(e.i18n.t("common.cancel")),c(2),b(e.i18n.t("common.save")))},dependencies:[mt,lt,ct,dt,dn,an,rn,ln,sn,bt,ut,ht,gt,_t,J,q],encapsulation:2,changeDetection:0})};function In(n,a){return[...n,a]}function Mn(n,a,t){return n.map((e,i)=>i===a?t:e)}function Kt(n,a){return n.filter((t,e)=>e!==a)}var ve=class n{i18n=r(G);buildDialog(a,t){switch(t.section){case"basics":return this.basicsDialog(a);case"language":return this.languageDialog(a,t.index);case"skill":return this.skillDialog(a,t.index);case"education":return this.educationDialog(a,t.index);case"employment":return this.employmentDialog(a,t.index)}}applyResult(a,t,e){switch(t.section){case"basics":return F(C({},a),{basics:this.toBasics(e)});case"language":return F(C({},a),{languages:this.upsert(a.languages,t.index,this.toLanguage(e))});case"skill":return F(C({},a),{skills:this.upsert(a.skills,t.index,this.toSkill(e))});case"education":return F(C({},a),{education:this.upsert(a.education,t.index,this.toEducation(e))});case"employment":return F(C({},a),{employment:this.upsert(a.employment,t.index,this.toEmployment(e))})}}applyRemove(a,t){if(t.index===void 0)return a;switch(t.section){case"language":return F(C({},a),{languages:Kt(a.languages,t.index)});case"skill":return F(C({},a),{skills:Kt(a.skills,t.index)});case"education":return F(C({},a),{education:Kt(a.education,t.index)});case"employment":return F(C({},a),{employment:Kt(a.employment,t.index)});case"basics":return a}}basicsDialog(a){let t=a.basics,e=t.contact;return{title:this.i18n.t("edit.basics.title"),fields:[this.field("fullName","field.fullName","text",t.fullName),this.field("title","field.title","text",t.title),this.field("summary","field.summary","textarea",t.summary),this.field("imageURL","field.imageURL","text",t.imageURL??""),this.field("location","field.location","text",e.location??""),this.field("github","field.github","text",e.github??""),this.field("email","field.email","text",e.email??""),this.field("linkedin","field.linkedin","text",e.linkedin??""),this.field("phone","field.phone","text",e.phone??""),this.field("website","field.website","text",e.website??""),this.field("birthDate","field.birthDate","text",e.birthDate??"")]}}languageDialog(a,t){let e=t!==void 0?a.languages[t]:void 0;return{title:this.i18n.t("edit.language.title"),fields:[this.field("name","field.langName","text",e?.name??""),this.field("level","field.langLevel","text",e?.level??"")]}}skillDialog(a,t){let e=t!==void 0?a.skills[t]:void 0;return{title:this.i18n.t("edit.skill.title"),fields:[this.field("category","field.category","text",e?.category??""),this.field("skills","field.skills","textarea",(e?.skills??[]).join(`
`))]}}educationDialog(a,t){let e=t!==void 0?a.education[t]:void 0;return{title:this.i18n.t("edit.education.title"),fields:[this.field("degree","field.degree","text",e?.degree??""),this.field("institution","field.institution","text",e?.institution??""),this.field("specialty","field.specialty","text",e?.specialty??""),this.field("startDate","field.startDate","text",e?.startDate??""),this.field("endDate","field.endDate","text",e?.endDate??"")]}}employmentDialog(a,t){let e=t!==void 0?a.employment[t]:void 0;return{title:this.i18n.t("edit.employment.title"),fields:[this.field("role","field.role","text",e?.role??""),this.field("company","field.company","text",e?.company??""),this.field("project","field.project","text",e?.project??""),this.field("description","field.description","textarea",e?.description??""),this.field("startDate","field.startDate","text",e?.startDate??""),this.field("endDate","field.endDate","text",e?.endDate??""),this.field("responsibilities","field.responsibilities","textarea",(e?.responsibilities??[]).join(`
`))]}}toBasics(a){let t=this.str(a,"imageURL")||void 0;return{fullName:this.str(a,"fullName")||"Your Name",title:this.str(a,"title"),summary:this.str(a,"summary"),containsImage:t!==void 0,imageURL:t,contact:{location:this.str(a,"location")||void 0,github:this.str(a,"github")||void 0,email:this.str(a,"email")||void 0,linkedin:this.str(a,"linkedin")||void 0,phone:this.str(a,"phone")||void 0,website:this.str(a,"website")||void 0,birthDate:this.str(a,"birthDate")||void 0}}}toLanguage(a){return{name:this.str(a,"name"),level:this.str(a,"level")}}toSkill(a){return{category:this.str(a,"category"),skills:this.lines(a,"skills")}}toEducation(a){return{degree:this.str(a,"degree"),institution:this.str(a,"institution"),specialty:this.str(a,"specialty")||void 0,startDate:this.str(a,"startDate")||void 0,endDate:this.str(a,"endDate")||void 0}}toEmployment(a){return{role:this.str(a,"role"),company:this.str(a,"company"),project:this.str(a,"project")||void 0,description:this.str(a,"description")||void 0,startDate:this.str(a,"startDate")||void 0,endDate:this.str(a,"endDate")||void 0,responsibilities:this.lines(a,"responsibilities")}}upsert(a,t,e){return t===void 0?In(a,e):Mn(a,t,e)}field(a,t,e,i){return{key:a,label:this.i18n.t(t),type:e,value:i}}str(a,t){return(a[t]??"").trim()}lines(a,t){return(a[t]??"").split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=H({token:n,factory:n.\u0275fac,providedIn:"root"})};var Fa=["cvDoc"];function Na(n,a){if(n&1&&O(0,"app-cv-document",6,0),n&2){let t=p(2);_("resume",t.resume())}}function za(n,a){if(n&1){let t=L();s(0,"div",4)(1,"button",5),h("click",function(){g(t);let i=p();return f(i.closeSharedView())}),s(2,"mat-icon"),m(3,"close"),l(),m(4),l()(),I(5,Na,2,1,"app-cv-document",6)}if(n&2){let t=p();c(4),R(" ",t.i18n.t("cv.closeView")," "),c(),M(t.hasResume()?5:-1)}}function ja(n,a){if(n&1){let t=L();s(0,"p",16),m(1),l(),s(2,"app-cv-document",17),h("edit",function(i){g(t);let o=p(3);return f(o.onEdit(i))}),l(),s(3,"mat-card",12)(4,"mat-card-header")(5,"mat-card-title"),m(6),l()(),s(7,"mat-card-content",13)(8,"app-cv-json-editor",18),h("applied",function(i){g(t);let o=p(3);return f(o.onImported(i))})("deleted",function(){g(t);let i=p(3);return f(i.clear())}),l()()()}if(n&2){let t=p(3);c(),b(t.i18n.t("builder.hint")),c(),_("resume",t.resume())("editable",!0),c(4),b(t.i18n.t("cv.editor.jsonTitle")),c(2),_("resume",t.resume())}}function Va(n,a){if(n&1){let t=L();s(0,"mat-card",12)(1,"mat-card-header")(2,"mat-card-title"),m(3),l(),s(4,"mat-card-subtitle"),m(5),l()(),s(6,"mat-card-content",13)(7,"div",4)(8,"button",14),h("click",function(){g(t);let i=p(2);return f(i.createNew())}),s(9,"mat-icon"),m(10,"note_add"),l(),m(11),l()(),s(12,"app-import-panel",15),h("imported",function(i){g(t);let o=p(2);return f(o.onImported(i))}),l()()(),I(13,ja,9,5)}if(n&2){let t=p(2);c(3),b(t.i18n.t("cv.nav.editor")),c(2),b(t.i18n.t("cv.getStarted.subtitle")),c(6),R(" ",t.i18n.t("cv.createNew")," "),c(2),M(t.hasResume()?13:-1)}}function Ha(n,a){if(n&1){let t=L();s(0,"div",19)(1,"button",5),h("click",function(){g(t);let i=p(3);return f(i.exportPdf())}),s(2,"mat-icon"),m(3,"picture_as_pdf"),l(),m(4),l(),s(5,"button",21),h("click",function(){g(t);let i=p(3);return f(i.exportJson())}),s(6,"mat-icon"),m(7,"data_object"),l(),m(8),l(),s(9,"button",21),h("click",function(){g(t);let i=p(3);return f(i.clear())}),s(10,"mat-icon"),m(11,"delete_outline"),l(),m(12),l()()}if(n&2){let t=p(3);c(4),R(" ",t.i18n.t("cv.exportPdf")," "),c(4),R(" ",t.i18n.t("cv.exportJson")," "),c(4),R(" ",t.i18n.t("cv.clear")," ")}}function Qa(n,a){if(n&1&&(s(0,"p",20),m(1),l()),n&2){let t=p(3);c(),b(t.i18n.t("cv.getStarted.title"))}}function Wa(n,a){if(n&1&&(s(0,"mat-card",12)(1,"mat-card-header")(2,"mat-card-title"),m(3),l()(),s(4,"mat-card-content",13),I(5,Ha,13,3,"div",19)(6,Qa,2,1,"p",20),l()()),n&2){let t=p(2);c(3),b(t.i18n.t("cv.export.title")),c(2),M(t.hasResume()?5:6)}}function Ga(n,a){if(n&1&&O(0,"app-cv-share-panel",6),n&2){let t=p(3);_("resume",t.resume())}}function Ua(n,a){if(n&1&&(s(0,"p",20),m(1),l()),n&2){let t=p(3);c(),b(t.i18n.t("cv.getStarted.title"))}}function $a(n,a){if(n&1&&(s(0,"mat-card",12)(1,"mat-card-header")(2,"mat-card-title"),m(3),l()(),s(4,"mat-card-content",13),I(5,Ga,1,1,"app-cv-share-panel",6)(6,Ua,2,1,"p",20),l()()),n&2){let t=p(2);c(3),b(t.i18n.t("cv.share.title")),c(2),M(t.hasResume()?5:6)}}function qa(n,a){if(n&1&&O(0,"app-cv-document",6,0),n&2){let t=p(2);_("resume",t.resume())}}function Ja(n,a){if(n&1){let t=L();s(0,"div",3)(1,"aside",7)(2,"mat-nav-list")(3,"a",8),h("click",function(){g(t);let i=p();return f(i.select("editor"))}),s(4,"mat-icon",9),m(5,"edit_document"),l(),s(6,"span",10),m(7),l()(),s(8,"a",8),h("click",function(){g(t);let i=p();return f(i.select("export"))}),s(9,"mat-icon",9),m(10,"download"),l(),s(11,"span",10),m(12),l()(),s(13,"a",8),h("click",function(){g(t);let i=p();return f(i.select("share"))}),s(14,"mat-icon",9),m(15,"share"),l(),s(16,"span",10),m(17),l()()()(),s(18,"div",11),I(19,Va,14,4)(20,Wa,7,2,"mat-card",12)(21,$a,7,2,"mat-card",12),I(22,qa,2,1,"app-cv-document",6),l()()}if(n&2){let t,e=p();c(3),w("cv-nav-active",e.section()==="editor"),c(4),b(e.i18n.t("cv.nav.editor")),c(),w("cv-nav-active",e.section()==="export"),c(4),b(e.i18n.t("cv.nav.export")),c(),w("cv-nav-active",e.section()==="share"),c(4),b(e.i18n.t("cv.nav.share")),c(2),M((t=e.section())==="editor"?19:t==="export"?20:t==="share"?21:-1),c(3),M(e.hasResume()&&e.section()!=="editor"?22:-1)}}var Sn=class n{repository=r(zi);exporter=r(ji);printer=r(Vi);shareService=r(Ft);importService=r(Nt);route=r(ui);dialog=r(Jt);blockEdit=r(ve);snackBar=r(pt);i18n=r(G);cvDoc=pi("cvDoc",{read:E});resume=this.repository.resume;hasResume=this.repository.hasResume;section=T("editor");sharedView=T(!1);constructor(){this.loadSharedFromQuery()}select(a){this.section.set(a)}closeSharedView(){this.sharedView.set(!1)}onImported(a){this.repository.set(a),this.sharedView.set(!1)}onEdit(a){let t=this.resume();if(!t)return;if(a.action==="remove"){this.repository.set(this.blockEdit.applyRemove(t,a));return}let e=this.blockEdit.buildDialog(t,a);this.dialog.open(fe,{data:e,autoFocus:!1}).afterClosed().subscribe(i=>{i&&this.repository.set(this.blockEdit.applyResult(t,a,i))})}createNew(){this.repository.set(me),this.sharedView.set(!1),this.section.set("editor")}exportJson(){let a=this.resume();a&&this.exporter.downloadJson(a)}exportPdf(){let a=this.cvDoc()?.nativeElement;a&&this.printer.print(a)}clear(){this.repository.clear()}loadSharedFromQuery(){let a=this.route.snapshot.queryParamMap,t=a.get(Oe),e=a.get(Fe);if(t){try{this.repository.set(this.shareService.decodeEmbedded(t)),this.sharedView.set(!0),this.notifyShared()}catch{this.notifyShareError()}return}e&&this.importService.fromUrl(e).then(i=>{this.repository.set(i),this.sharedView.set(!0),this.notifyShared()}).catch(()=>this.notifyShareError())}notifyShared(){this.snackBar.open(this.i18n.t("cv.shared.loaded"),"OK",{duration:2500})}notifyShareError(){this.snackBar.open(this.i18n.t("cv.shared.error"),"Dismiss",{duration:5e3})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["app-resume-workspace-page"]],viewQuery:function(t,e){t&1&&li(e.cvDoc,Fa,5,E),t&2&&ci()},decls:5,vars:2,consts:[["cvDoc",""],[1,"page-header"],[1,"page-title"],[1,"cv-workspace"],[1,"form-actions","mb-4"],["matButton","filled",3,"click"],[3,"resume"],[1,"cv-workspace-nav","surface-card"],["mat-list-item","",3,"click"],["matListItemIcon",""],["matListItemTitle",""],[1,"cv-workspace-content"],[1,"mb-6"],[1,"pt-4"],["matButton","tonal",3,"click"],[3,"imported"],[1,"field-hint","mb-3"],[1,"block","mb-6",3,"edit","resume","editable"],[3,"applied","deleted","resume"],[1,"form-actions"],[1,"muted"],["matButton","",3,"click"]],template:function(t,e){t&1&&(s(0,"div",1)(1,"h1",2),m(2),l()(),I(3,za,6,2)(4,Ja,23,11,"div",3)),t&2&&(c(2),b(e.i18n.t("cv.title")),c(),M(e.sharedView()?3:4))},dependencies:[Oi,Ai,Ri,Bi,Pi,Li,J,q,st,rt,bn,un,hn,Be,Pe,he,Ji,_e,ge],encapsulation:2,changeDetection:0})};export{Sn as ResumeWorkspacePage};
