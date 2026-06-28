import{b as G,c as W,d as Y,e as Z,f as q}from"./chunk-POGV3HBV.js";import{R as J,T as K,U as $,V as ee,W as te,da as oe,e as U,f as Q,h as H,k as X}from"./chunk-24VGQXQ5.js";import{$b as z,Eb as P,Fb as b,Gb as j,Ib as L,Jb as B,Na as p,O as v,Pb as O,Qb as V,R as w,Ra as I,Rb as m,S as x,Tb as u,U as M,Ua as F,W as a,X as C,Xa as S,ab as h,bb as k,ca as _,cb as N,da as c,ha as A,ka as R,ma as D,sa as T,ub as d,vb as s,wb as g,ya as E}from"./chunk-V4U76MBR.js";import"./chunk-JJCA6Z7Z.js";var de="@",ce=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=a(_);loadingSchedulerFn=a(pe,{optional:!0});_engine;constructor(e,t,r,i,l){this.doc=e,this.delegate=t,this.zone=r,this.animationType=i,this.moduleImpl=l}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-6TJAIO2W.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new v(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:i})=>{this._engine=r(this.animationType,this.doc);let l=new i(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let i=new y(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let me=l.createRenderer(e,t);i.use(me),this.scheduler??=this.injector.get(D,null,{optional:!0}),this.scheduler?.notify(10)}).catch(l=>{i.use(r)}),i}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){S()};static \u0275prov=w({token:n,factory:n.\u0275fac})}return n})(),y=class{delegate;replay=[];\u0275type=1;constructor(o){this.delegate=o}use(o){if(this.delegate=o,this.replay!==null){for(let e of this.replay)e(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,e){return this.delegate.createElement(o,e)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,e){this.delegate.appendChild(o,e)}insertBefore(o,e,t,r){this.delegate.insertBefore(o,e,t,r)}removeChild(o,e,t,r){this.delegate.removeChild(o,e,t,r)}selectRootElement(o,e){return this.delegate.selectRootElement(o,e)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,e,t,r){this.delegate.setAttribute(o,e,t,r)}removeAttribute(o,e,t){this.delegate.removeAttribute(o,e,t)}addClass(o,e){this.delegate.addClass(o,e)}removeClass(o,e){this.delegate.removeClass(o,e)}setStyle(o,e,t,r){this.delegate.setStyle(o,e,t,r)}removeStyle(o,e,t){this.delegate.removeStyle(o,e,t)}setProperty(o,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(o,e,t)),this.delegate.setProperty(o,e,t)}setValue(o,e){this.delegate.setValue(o,e)}listen(o,e,t,r){return this.shouldReplay(e)&&this.replay.push(i=>i.listen(o,e,t,r)),this.delegate.listen(o,e,t,r)}shouldReplay(o){return this.replay!==null&&o.startsWith(de)}},pe=new M("");function re(n="animations"){return I("NgAsyncAnimations"),C([{provide:F,useFactory:()=>new ce(a(c),a(U),a(A),n)},{provide:E,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ae=[{path:"",pathMatch:"full",redirectTo:"cv"},{path:"cv",title:"My CV \u2014 FlexCV",loadComponent:()=>import("./chunk-C6JWLNXO.js").then(n=>n.ResumeWorkspacePage)},{path:"ai",title:"AI Chat \u2014 FlexCV",loadComponent:()=>import("./chunk-QMJA332N.js").then(n=>n.ChatPage)},{path:"settings",title:"Settings \u2014 FlexCV",loadComponent:()=>import("./chunk-RQOTWYBM.js").then(n=>n.SettingsPage)},{path:"**",redirectTo:"cv"}];var ie={providers:[R(),z(),Z(ae,q()),H(),re()]};var he=["*",[["mat-toolbar-row"]]],ue=["*","mat-toolbar-row"],fe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),le=(()=>{class n{_elementRef=a(T);_platform=a(X);_document=a(c);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,r,i){if(t&1&&j(i,fe,5),t&2){let l;L(l=B())&&(r._toolbarRows=l)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(V(r.color?"mat-"+r.color:""),O("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:ue,decls:2,vars:0,template:function(t,r){t&1&&(P(he),b(0),b(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var se=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=x({imports:[J]})}return n})();var f=class n{i18n=a(oe);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["app-root"]],decls:23,vars:3,consts:[[1,"app-shell"],[1,"app-toolbar"],["routerLink","/cv",1,"flex","items-center","gap-2","no-underline"],[1,"font-semibold"],[1,"toolbar-spacer"],[1,"flex","items-center","gap-1"],["matButton","","routerLink","/cv","routerLinkActive","toolbar-link-active"],["matButton","","routerLink","/ai","routerLinkActive","toolbar-link-active"],["matButton","","routerLink","/settings","routerLinkActive","toolbar-link-active"],[1,"app-content"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"mat-toolbar",1)(2,"a",2)(3,"mat-icon"),m(4,"badge"),s(),d(5,"span",3),m(6,"FlexCV"),s()(),g(7,"span",4),d(8,"nav",5)(9,"a",6)(10,"mat-icon"),m(11,"description"),s(),m(12),s(),d(13,"a",7)(14,"mat-icon"),m(15,"forum"),s(),m(16),s(),d(17,"a",8)(18,"mat-icon"),m(19,"settings"),s(),m(20),s()()(),d(21,"main",9),g(22,"router-outlet"),s()()),e&2&&(p(12),u(" ",t.i18n.t("nav.cv")," "),p(4),u(" ",t.i18n.t("nav.chat")," "),p(4),u(" ",t.i18n.t("nav.settings")," "))},dependencies:[G,W,Y,se,le,$,K,te,ee],encapsulation:2,changeDetection:0})};Q(f,ie).catch(n=>console.error(n));
