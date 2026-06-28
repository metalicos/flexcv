import{a as qe,b as St,d as Rt,e as At,f as Wt,g as Gt,i as Kt,j as Zt,k as Yt}from"./chunk-WGKOWI7C.js";import{a as we}from"./chunk-45N2ALGQ.js";import{C as Qt,D as Vt,E as qt,F as Ut,M as $t,N as Jt,a as Ct,b as kt,c as Tt,d as wt,f as It,g as Mt,h as Ie,i as Dt,j as me,k as Pt,l as Bt,o as Lt,q as Ft,s as Ht,t as Ot,u as Nt,y as jt,z as zt}from"./chunk-BJESACEL.js";import{I as te,L as Ve,M as xe,O as We,P as Ce,R as ke,S as Te,T as Me,U as De,Z as Ge,aa as Et,ba as Pe,g as vt,k as je,m as ze,n as yt,o as ve,s as xt,v as ye,x as Qe,y as ee}from"./chunk-QTZSD6YY.js";import{$ as v,A as st,Ab as A,Cb as b,Db as _,Eb as W,Fb as D,Gb as Y,Hb as G,I as lt,Ib as h,J as $,Jb as u,K as dt,L as oe,Lb as ut,Mb as gt,Na as l,Nb as ce,Ob as _e,Pb as x,Qb as fe,R as be,Rb as m,S as J,Sa as he,Sb as C,Ta as K,Tb as B,U as k,Va as le,W as r,Ya as ue,Yb as L,a as M,aa as y,ab as T,ba as ct,bb as Z,c as nt,ca as Ae,cb as w,d as N,da as mt,db as V,dc as Ne,eb as de,ec as _t,f as pe,fb as pt,ga as g,gc as ft,h as at,ha as z,ic as O,kc as f,l as it,la as Q,lb as bt,lc as X,mb as I,nb as P,ob as E,pa as re,qa as se,qb as Le,rb as Fe,sa as R,sb as He,t as ot,ta as Be,tb as p,u as U,ub as d,v as j,vb as c,wb as H,xb as ge,yb as Oe,z as rt,zb as ht}from"./chunk-V4U76MBR.js";import"./chunk-JJCA6Z7Z.js";var Xt=new k("CdkAccordion");var en=(()=>{class a{accordion=r(Xt,{optional:!0,skipSelf:!0});_changeDetectorRef=r(O);_expansionDispatcher=r(we);_openCloseAllSubscription=M.EMPTY;closed=new g;opened=new g;destroyed=new g;expandedChange=new g;id=r(ee).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Q(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(t){return new(t||a)};static \u0275dir=w({type:a,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",f],disabled:[2,"disabled","disabled",f]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[L([{provide:Xt,useValue:void 0}])]})}return a})(),tn=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=Z({type:a});static \u0275inj=J({})}return a})();var yn=["body"],xn=["bodyWrapper"],Cn=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],kn=["mat-expansion-panel-header","*","mat-action-row"];function Tn(a,o){}var wn=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],In=["mat-panel-title","mat-panel-description","*"];function Mn(a,o){a&1&&(ge(0,"span",1),ct(),ge(1,"svg",2),ht(2,"path",3),Oe()())}var nn=new k("MAT_ACCORDION"),an=new k("MAT_EXPANSION_PANEL"),Dn=(()=>{class a{_template=r(K);_expansionPanel=r(an,{optional:!0});constructor(){}static \u0275fac=function(t){return new(t||a)};static \u0275dir=w({type:a,selectors:[["ng-template","matExpansionPanelContent",""]]})}return a})(),on=new k("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),Je=(()=>{class a extends en{_viewContainerRef=r(ue);_animationsDisabled=te();_document=r(mt);_ngZone=r(z);_elementRef=r(R);_renderer=r(le);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new g;afterCollapse=new g;_inputChanges=new N;accordion=r(nn,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=r(ee).getId("mat-expansion-panel-header-");constructor(){super();let e=r(on,{optional:!0});this._expansionDispatcher=r(we),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe($(null),j(()=>this.expanded&&!this._portal),st(1)).subscribe(()=>{this._portal=new Ie(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=T({type:a,selectors:[["mat-expansion-panel"]],contentQueries:function(t,n,i){if(t&1&&Y(i,Dn,5),t&2){let s;h(s=u())&&(n._lazyContent=s.first)}},viewQuery:function(t,n){if(t&1&&G(yn,5)(xn,5),t&2){let i;h(i=u())&&(n._body=i.first),h(i=u())&&(n._bodyWrapper=i.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(t,n){t&2&&x("mat-expanded",n.expanded)("mat-expansion-panel-spacing",n._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",f],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[L([{provide:nn,useValue:void 0},{provide:an,useExisting:a}]),V,re],ngContentSelectors:kn,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,n){t&1&&(W(Cn),D(0),d(1,"div",2,0)(3,"div",3,1)(5,"div",4),D(6,1),de(7,Tn,0,0,"ng-template",5),c(),D(8,2),c()()),t&2&&(l(),I("inert",n.expanded?null:""),l(2),p("id",n.id),I("aria-labelledby",n._headerId),l(4),p("cdkPortalOutlet",n._portal))},dependencies:[me],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return a})();var rn=(()=>{class a{panel=r(Je,{host:!0});_element=r(R);_focusMonitor=r(ze);_changeDetectorRef=r(O);_parentChangeSubscription=M.EMPTY;constructor(){r(ve).load(xe);let e=this.panel,t=r(on,{optional:!0}),n=r(new Ne("tabindex"),{optional:!0}),i=e.accordion?e.accordion._stateChanges.pipe(j(s=>!!(s.hideToggle||s.togglePosition))):pe;this.tabIndex=parseInt(n||"")||0,this._parentChangeSubscription=U(e.opened,e.closed,i,e._inputChanges.pipe(j(s=>!!(s.hideToggle||s.disabled||s.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(j(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:ye(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=T({type:a,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(t,n){t&1&&b("click",function(){return n._toggle()})("keydown",function(s){return n._keydown(s)}),t&2&&(I("id",n.panel._headerId)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n._getPanelId())("aria-expanded",n._isExpanded())("aria-disabled",n.panel.disabled),_e("height",n._getHeaderHeight()),x("mat-expanded",n._isExpanded())("mat-expansion-toggle-indicator-after",n._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",n._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:X(e)]},ngContentSelectors:In,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(t,n){t&1&&(W(wn),ge(0,"span",0),D(1),D(2,1),D(3,2),Oe(),P(4,Mn,3,0,"span",1)),t&2&&(x("mat-content-hide-toggle",!n._showToggle()),l(4),E(n._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return a})();var sn=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=w({type:a,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return a})();var ln=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=Z({type:a});static \u0275inj=J({imports:[tn,Pt,Ce]})}return a})();var et=["*"];function En(a,o){a&1&&D(0)}var Sn=["tabListContainer"],Rn=["tabList"],An=["tabListInner"],Bn=["nextPaginator"],Ln=["previousPaginator"],Fn=["content"];function Hn(a,o){}var On=["tabBodyWrapper"],Nn=["tabHeader"];function jn(a,o){}function zn(a,o){if(a&1&&de(0,jn,0,0,"ng-template",12),a&2){let e=_().$implicit;p("cdkPortalOutlet",e.templateLabel)}}function Qn(a,o){if(a&1&&m(0),a&2){let e=_().$implicit;C(e.textLabel)}}function Vn(a,o){if(a&1){let e=A();d(0,"div",7,2),b("click",function(){let n=v(e),i=n.$implicit,s=n.$index,S=_(),F=ce(1);return y(S._handleClick(i,F,s))})("cdkFocusChange",function(n){let i=v(e).$index,s=_();return y(s._tabFocusChanged(n,i))}),H(2,"span",8)(3,"div",9),d(4,"span",10)(5,"span",11),P(6,zn,1,1,null,12)(7,Qn,1,1),c()()()}if(a&2){let e=o.$implicit,t=o.$index,n=ce(1),i=_();fe(e.labelClass),x("mdc-tab--active",i.selectedIndex===t),p("id",i._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",i.fitInkBarToContent),I("tabIndex",i._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",i._tabs.length)("aria-controls",i._getTabContentId(t))("aria-selected",i.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),l(3),p("matRippleTrigger",n)("matRippleDisabled",e.disabled||i.disableRipple),l(3),E(e.templateLabel?6:7)}}function Wn(a,o){a&1&&D(0)}function Gn(a,o){if(a&1){let e=A();d(0,"mat-tab-body",13),b("_onCentered",function(){v(e);let n=_();return y(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){v(e);let i=_();return y(i._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){v(e);let i=_();return y(i._bodyCentered(n))}),c()}if(a&2){let e=o.$implicit,t=o.$index,n=_();fe(e.bodyClass),p("id",n._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),I("tabindex",n.contentTabIndex!=null&&n.selectedIndex===t?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(e,t))("aria-hidden",n.selectedIndex!==t)}}var qn=new k("MatTabContent"),Un=(()=>{class a{template=r(K);constructor(){}static \u0275fac=function(t){return new(t||a)};static \u0275dir=w({type:a,selectors:[["","matTabContent",""]],features:[L([{provide:qn,useExisting:a}])]})}return a})(),$n=new k("MatTabLabel"),pn=new k("MAT_TAB"),Jn=(()=>{class a extends Dt{_closestTab=r(pn,{optional:!0});static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(a)))(n||a)}})();static \u0275dir=w({type:a,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[L([{provide:$n,useExisting:a}]),V]})}return a})(),bn=new k("MAT_TAB_GROUP"),tt=(()=>{class a{_viewContainerRef=r(ue);_closestTabGroup=r(bn,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new N;position=null;origin=null;isActive=!1;constructor(){r(ve).load(xe)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Ie(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=T({type:a,selectors:[["mat-tab"]],contentQueries:function(t,n,i){if(t&1&&Y(i,Jn,5)(i,Un,7,K),t&2){let s;h(s=u())&&(n.templateLabel=s.first),h(s=u())&&(n._explicitContent=s.first)}},viewQuery:function(t,n){if(t&1&&G(K,7),t&2){let i;h(i=u())&&(n._implicitContent=i.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,n){t&2&&I("id",null)},inputs:{disabled:[2,"disabled","disabled",f],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[L([{provide:pn,useExisting:a}]),re],ngContentSelectors:et,decls:1,vars:0,template:function(t,n){t&1&&(W(),pt(0,En,1,0,"ng-template"))},encapsulation:2})}return a})(),Ke="mdc-tab-indicator--active",dn="mdc-tab-indicator--no-transition",Ze=class{_items;_currentItem;constructor(o){this._items=o}hide(){this._items.forEach(o=>o.deactivateInkBar()),this._currentItem=void 0}alignToElement(o){let e=this._items.find(n=>n.elementRef.nativeElement===o),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let n=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(n),this._currentItem=e}}},Kn=(()=>{class a{_elementRef=r(R);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(Ke);return}let n=t.getBoundingClientRect(),i=e.width/n.width,s=e.left-n.left;t.classList.add(dn),this._inkBarContentElement.style.setProperty("transform",`translateX(${s}px) scaleX(${i})`),t.getBoundingClientRect(),t.classList.remove(dn),t.classList.add(Ke),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Ke)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),n=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||a)};static \u0275dir=w({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",f]}})}return a})();var hn=(()=>{class a extends Kn{elementRef=r(R);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(a)))(n||a)}})();static \u0275dir=w({type:a,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,n){t&2&&(I("aria-disabled",!!n.disabled),x("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",f]},features:[V]})}return a})(),cn={passive:!0},Zn=650,Yn=100,Xn=(()=>{class a{_elementRef=r(R);_changeDetectorRef=r(O);_viewportRuler=r(Ut);_dir=r(We,{optional:!0});_ngZone=r(z);_platform=r(je);_sharedResizeObserver=r(Ot);_injector=r(Ae);_renderer=r(le);_animationsDisabled=te();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new N;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new N;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new g;indexFocused=new g;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),cn),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),cn))}ngAfterContentInit(){let e=this._dir?this._dir.change:at("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(rt(32),oe(this._destroyed)),n=this._viewportRuler.change(150).pipe(oe(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Qe(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),he(i,{injector:this._injector}),U(e,n,t,this._items.changes,this._itemsResized()).pipe(oe(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(s=>{this.indexFocused.emit(s),this._setTabFocus(s)})}_itemsResized(){return typeof ResizeObserver!="function"?pe:this._items.changes.pipe($(this._items),dt(e=>new nt(t=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(i=>t.next(i));return e.forEach(i=>n.observe(i.elementRef.nativeElement)),()=>{n.disconnect()}}))),lt(1),j(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!ye(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,n=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:s}=t.elementRef.nativeElement,S,F;this._getLayoutDirection()=="ltr"?(S=i,F=S+s):(F=this._tabListInner.nativeElement.offsetWidth-i,S=F-s);let ae=this.scrollDistance,ie=this.scrollDistance+n;S<ae?this.scrollDistance-=ae-S:F>ie&&(this.scrollDistance+=Math.min(F-ie,S-ae))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,n=e-t>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),ot(Zn,Yn).pipe(oe(U(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:i}=this._scrollHeader(e);(i===0||i>=n)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||a)};static \u0275dir=w({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",f],selectedIndex:[2,"selectedIndex","selectedIndex",X]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})(),ea=(()=>{class a extends Xn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Ze(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=se(a)))(n||a)}})();static \u0275cmp=T({type:a,selectors:[["mat-tab-header"]],contentQueries:function(t,n,i){if(t&1&&Y(i,hn,4),t&2){let s;h(s=u())&&(n._items=s)}},viewQuery:function(t,n){if(t&1&&G(Sn,7)(Rn,7)(An,7)(Bn,5)(Ln,5),t&2){let i;h(i=u())&&(n._tabListContainer=i.first),h(i=u())&&(n._tabList=i.first),h(i=u())&&(n._tabListInner=i.first),h(i=u())&&(n._nextPaginator=i.first),h(i=u())&&(n._previousPaginator=i.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,n){t&2&&x("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",f]},features:[V],ngContentSelectors:et,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,n){t&1&&(W(),d(0,"div",5,0),b("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(s){return n._handlePaginatorPress("before",s)})("touchend",function(){return n._stopInterval()}),H(2,"div",6),c(),d(3,"div",7,1),b("keydown",function(s){return n._handleKeydown(s)}),d(5,"div",8,2),b("cdkObserveContent",function(){return n._onContentChanges()}),d(7,"div",9,3),D(9),c()()(),d(10,"div",10,4),b("mousedown",function(s){return n._handlePaginatorPress("after",s)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),H(12,"div",6),c()),t&2&&(x("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),p("matRippleDisabled",n._disableScrollBefore||n.disableRipple),l(3),x("_mat-animation-noopable",n._animationsDisabled),l(2),I("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),l(5),x("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),p("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[Ve,xt],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return a})(),ta=new k("MAT_TABS_CONFIG"),mn=(()=>{class a extends me{_host=r(Ye);_ngZone=r(z);_centeringSub=M.EMPTY;_leavingSub=M.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe($(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||a)};static \u0275dir=w({type:a,selectors:[["","matTabBodyHost",""]],features:[V]})}return a})(),Ye=(()=>{class a{_elementRef=r(R);_dir=r(We,{optional:!0});_ngZone=r(z);_injector=r(Ae);_renderer=r(le);_diAnimationsDisabled=te();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=M.EMPTY;_position;_previousPosition;_onCentering=new g;_beforeCentering=new g;_afterLeavingCenter=new g;_onCentered=new g(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=r(O);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),he(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),he(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=T({type:a,selectors:[["mat-tab-body"]],viewQuery:function(t,n){if(t&1&&G(mn,5)(Fn,5),t&2){let i;h(i=u())&&(n._portalHost=i.first),h(i=u())&&(n._contentElement=i.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,n){t&2&&I("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,n){t&1&&(d(0,"div",1,0),de(2,Hn,0,0,"ng-template",2),c()),t&2&&x("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[mn,qt],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return a})(),un=(()=>{class a{_elementRef=r(R);_changeDetectorRef=r(O);_ngZone=r(z);_tabsSubscription=M.EMPTY;_tabLabelSubscription=M.EMPTY;_tabBodySubscription=M.EMPTY;_diAnimationsDisabled=te();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Be;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new g;focusChange=new g;animationDone=new g;selectedTabChange=new g(!0);_groupId;_isServer=!r(je).isBrowser;constructor(){let e=r(ta,{optional:!0});this._groupId=r(ee).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,i)=>n.isActive=i===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,n)=>{t.position=n-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),n;for(let i=0;i<t.length;i++)if(t[i].isActive){this._indexToSelect=this._selectedIndex=i,this._lastFocusedTabIndex=null,n=t[i];break}!n&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe($(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new Xe;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=U(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,n){t.focusIndex=n,e.disabled||(this.selectedIndex=n)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,n)=>t._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=T({type:a,selectors:[["mat-tab-group"]],contentQueries:function(t,n,i){if(t&1&&Y(i,tt,5),t&2){let s;h(s=u())&&(n._allTabs=s)}},viewQuery:function(t,n){if(t&1&&G(On,5)(Nn,5)(Ye,5),t&2){let i;h(i=u())&&(n._tabBodyWrapper=i.first),h(i=u())&&(n._tabHeader=i.first),h(i=u())&&(n._tabBodies=i)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,n){t&2&&(I("mat-align-tabs",n.alignTabs),fe("mat-"+(n.color||"primary")),_e("--mat-tab-animation-duration",n.animationDuration),x("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",f],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",f],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",f],selectedIndex:[2,"selectedIndex","selectedIndex",X],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",X],disablePagination:[2,"disablePagination","disablePagination",f],disableRipple:[2,"disableRipple","disableRipple",f],preserveContent:[2,"preserveContent","preserveContent",f],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[L([{provide:bn,useExisting:a}])],ngContentSelectors:et,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,n){t&1&&(W(),d(0,"mat-tab-header",3,0),b("indexFocused",function(s){return n._focusChanged(s)})("selectFocusedIndex",function(s){return n.selectedIndex=s}),Fe(2,Vn,8,17,"div",4,Le),c(),P(4,Wn,1,0),d(5,"div",5,1),Fe(7,Gn,1,10,"mat-tab-body",6,Le),c()),t&2&&(p("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),bt("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),l(2),He(n._tabs),l(2),E(n._isServer?4:-1),l(),x("_mat-animation-noopable",n._animationsDisabled()),l(2),He(n._tabs))},dependencies:[ea,hn,yt,Ve,me,Ye],styles:[`.mdc-tab {
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
`],encapsulation:2})}return a})(),Xe=class{index;tab};var gn=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=Z({type:a});static \u0275inj=J({imports:[Ce]})}return a})();var _n={basics:{fullName:"Ostap Komplikevych",title:"Senior Java Backend Engineer",summary:"Senior Java Backend Engineer with 5+ years of experience in building and modernizing scalable enterprise solutions. Expert in Java 21, Spring Boot 3.5, and the AWS ecosystem (ECS, Lambda, Bedrock). Proven track record in architecting AI-native platforms that reduced operational costs by $16,000+ monthly and automated manual efforts by 58%. Specialist in high-load migrations, event-driven architectures, and technical leadership within the Retail, Healthcare, Real Estate and IoT domains.",containsImage:!0,imageURL:"https://ui-avatars.com/api/?name=Ostap+Komplikevych&size=256&background=00366d&color=ffffff",contact:{location:"Ukraine, Lviv",github:"@komplikevych",email:"ostap.ja@gmail.com",linkedin:"ostap-komplikevych",birthDate:"September 3, 1999"}},languages:[{name:"Ukrainian",level:"Native"},{name:"English",level:"B2"}],skills:[{category:"Languages",skills:["Java","TypeScript","Angular","Python"]},{category:"Databases",skills:["MySQL","PostgreSQL","Oracle","MongoDB","DynamoDB","Redis"]},{category:"Spring",skills:["Spring Boot","Spring Data JPA","Spring MVC","Spring Security","Spring Cloud","Spring Batch","Spring AOP"]},{category:"AWS",skills:["ECS","Lambda","S3","SQS","SNS","API Gateway","Bedrock","CloudWatch","ECR","Fargate","ELB/ALB"]},{category:"DevOps",skills:["Docker","Kubernetes","Helm","Terraform","Jenkins","GitHub Actions"]},{category:"Messaging",skills:["Apache Kafka","MQTT","RabbitMQ"]},{category:"Architecture",skills:["Microservices","Serverless","Event-driven","REST API","GraphQL"]}],education:[{degree:"Master of Science, Computer Engineering",institution:"Lviv Polytechnic National University",specialty:"Specialized Computer Systems",startDate:"Sep 2021",endDate:"Sep 2022"},{degree:"Bachelor of Science, Computer Engineering",institution:"Lviv Polytechnic National University",specialty:"Specialized Computer Systems",startDate:"Sep 2017",endDate:"Sep 2021"}],employment:[{role:"Senior Software Engineer",company:"EPAM",project:"Enterprise Platform Modernisation and Optimisation",description:"Full-cycle software development, including architecture planning, API design, performance tuning, and legacy system optimization.",startDate:"Sep 2022",endDate:"Present",responsibilities:["Led migration from Java 8/Spring Boot 2.2 to Java 21/Spring Boot 3.4, resolving critical dependency issues","Coordinated integration across 8 teams, ensuring smooth large-scale system transition","Mentored engineers and improved code quality, test coverage, and maintainability","Built LLM-based optimization solution (GPT-4o) saving $16,000+/month","Designed scalable data processing solutions and contributed to Spark jobs processing 4M records"]},{role:"Senior Software Engineer",company:"GazdAI (self project)",project:"Real estate platform with AI-core and automated processes",description:"Architected and deployed a cost-optimized, AI-native platform on AWS, leveraging event-driven systems and automated pipelines.",startDate:"Dec 2025",endDate:"Mar 2026",responsibilities:["Led AWS cloud architecture (Docker, Terraform, Fargate), delivering a cost-efficient MVP","Built AI-native platform core with event-driven architecture","Reduced AI processing costs by 35% via image deduplication (perceptual hashing)","Cut LLM usage costs through search optimization and caching"]},{role:"Team Lead",company:"EPAM Systems",project:"AWS Bedrock AI Scheduling and Management Agent",description:"Led a cross-functional team during an internal EPAM AI Marathon to build an AWS Bedrock\u2013powered AI Scheduling and Management Agent.",startDate:"Jul 2025",endDate:"Aug 2025",responsibilities:["Led a technical team (1 DevOps, 4 Software Engineers)","Delivered a solution that reduced manual scheduling efforts by 58%","Coordinated team workflows and ensured timely delivery of a functional MVP"]}]};function fn(a,o){return`You are a resume parser. Convert the resume text below into a single JSON object.

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
- Write every human-readable string value in ${o}. Keep proper nouns, brand names,
  technologies and emails unchanged.
- Group skills into reasonable categories.
- Plain text has no photo: set "containsImage" to false and omit "imageURL".

RESUME TEXT:
"""
${a}
"""`}var Ee=class a{async pdfToText(o){let e=await import("./chunk-VJQ23XIJ.js");e.GlobalWorkerOptions.workerSrc=new URL("pdf.worker.min.mjs",document.baseURI).toString();let t=await o.arrayBuffer(),n=await e.getDocument({data:t}).promise,i=[];for(let s=1;s<=n.numPages;s++){let ae=(await(await n.getPage(s)).getTextContent()).items.map(ie=>"str"in ie?ie.str:"").join(" ");i.push(ae)}return i.join(`
`)}async docxToText(o){let e=await import("./chunk-NYLLO4PB.js"),t=await o.arrayBuffer();return(await e.extractRawText({arrayBuffer:t})).value}static \u0275fac=function(e){return new(e||a)};static \u0275prov=be({token:a,factory:a.\u0275fac,providedIn:"root"})};var q=class extends Error{constructor(o){super(o),this.name="ResumeImportError"}},Se=class a{http=r(vt);gemini=r(Kt);extractor=r(Ee);settings=r(Jt);fromJson(o){let e;try{e=JSON.parse(o)}catch{throw new q("The file does not contain valid JSON.")}return qe(e)}async fromUrl(o){let e;try{e=await it(this.http.get(o.trim(),{responseType:"text"}))}catch{throw new q("Could not fetch the URL. Make sure it is public and CORS-accessible (e.g. a GitHub raw link).")}return this.fromJson(e)}async fromText(o){if(!o.trim())throw new q("No text to import.");let e=Et[this.settings.cvLanguage()],t=await this.gemini.generateText(fn(o,e),{jsonOutput:!0,temperature:.1}),n=Zt(t);if(n===null)throw new q("Gemini did not return parseable resume JSON.");return qe(n)}async fromFile(o){let e=this.extensionOf(o.name);if(e==="json")return this.fromJson(await o.text());if(e==="txt")return this.fromText(await o.text());if(e==="pdf")return this.fromText(await this.extractor.pdfToText(o));if(e==="docx")return this.fromText(await this.extractor.docxToText(o));throw new q(`Unsupported file type: .${e}. Use JSON, TXT, PDF, or DOCX.`)}extensionOf(o){return o.split(".").pop()?.toLowerCase()??""}static \u0275fac=function(e){return new(e||a)};static \u0275prov=be({token:a,factory:a.\u0275fac,providedIn:"root"})};function ra(a,o){a&1&&H(0,"mat-progress-bar",1)}var Re=class a{importService=r(Se);snackBar=r($t);i18n=r(Pe);imported=_t();accept=Ge.acceptedExtensions.join(",");urlInput=Q("");textInput=Q("");busy=Q(!1);async onFileSelected(o){let e=o.target,t=e.files?.[0];if(e.value="",!!t){if(t.size>Ge.maxFileSizeBytes){this.fail(this.i18n.t("import.tooLarge"));return}await this.run(()=>this.importService.fromFile(t))}}async importUrl(){if(!this.urlInput().trim()){this.fail(this.i18n.t("import.enterUrl"));return}await this.run(()=>this.importService.fromUrl(this.urlInput()))}async importText(){if(!this.textInput().trim()){this.fail(this.i18n.t("import.pasteText"));return}await this.run(()=>this.importService.fromText(this.textInput()))}loadSample(){this.emit(_n)}async run(o){this.busy.set(!0);try{this.emit(await o())}catch(e){this.fail(e instanceof Error?e.message:"Import failed.")}finally{this.busy.set(!1)}}emit(o){this.imported.emit(o),this.snackBar.open(this.i18n.t("import.imported"),"OK",{duration:2500})}fail(o){this.snackBar.open(o,"Dismiss",{duration:5e3})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=T({type:a,selectors:[["app-import-panel"]],outputs:{imported:"imported"},decls:43,vars:20,consts:[["fileInput",""],["mode","indeterminate"],[3,"label"],[1,"flex","flex-col","gap-3","p-4"],[1,"field-hint"],[1,"form-actions"],["matButton","filled",3,"click","disabled"],["matButton","",3,"click","disabled"],["type","file",1,"hidden",3,"change","accept"],["appearance","outline",1,"form-field-full"],["matInput","","placeholder","https://raw.githubusercontent.com/user/repo/main/resume.json",3,"ngModelChange","ngModel"],["matInput","","rows","8",3,"ngModelChange","ngModel"]],template:function(e,t){if(e&1){let n=A();P(0,ra,1,0,"mat-progress-bar",1),d(1,"mat-tab-group")(2,"mat-tab",2)(3,"div",3)(4,"p",4),m(5),c(),d(6,"div",5)(7,"button",6),b("click",function(){v(n);let s=ce(16);return y(s.click())}),d(8,"mat-icon"),m(9,"upload_file"),c(),m(10),c(),d(11,"button",7),b("click",function(){return t.loadSample()}),d(12,"mat-icon"),m(13,"auto_awesome"),c(),m(14),c()(),d(15,"input",8,0),b("change",function(s){return t.onFileSelected(s)}),c()()(),d(17,"mat-tab",2)(18,"div",3)(19,"p",4),m(20),c(),d(21,"mat-form-field",9)(22,"mat-label"),m(23),c(),d(24,"input",10),b("ngModelChange",function(s){return t.urlInput.set(s)}),c()(),d(25,"div",5)(26,"button",6),b("click",function(){return t.importUrl()}),d(27,"mat-icon"),m(28,"cloud_download"),c(),m(29),c()()()(),d(30,"mat-tab",2)(31,"div",3)(32,"p",4),m(33),c(),d(34,"mat-form-field",9)(35,"mat-label"),m(36),c(),d(37,"textarea",11),b("ngModelChange",function(s){return t.textInput.set(s)}),c()(),d(38,"div",5)(39,"button",6),b("click",function(){return t.importText()}),d(40,"mat-icon"),m(41,"auto_fix_high"),c(),m(42),c()()()()()}e&2&&(E(t.busy()?0:-1),l(2),p("label",t.i18n.t("import.tab.file")),l(3),C(t.i18n.t("import.file.hint")),l(2),p("disabled",t.busy()),l(3),B(" ",t.i18n.t("import.choose")," "),l(),p("disabled",t.busy()),l(3),B(" ",t.i18n.t("import.loadSample")," "),l(),p("accept",t.accept),l(2),p("label",t.i18n.t("import.tab.url")),l(3),C(t.i18n.t("import.url.hint")),l(3),C(t.i18n.t("import.url.label")),l(),p("ngModel",t.urlInput()),l(2),p("disabled",t.busy()),l(3),B(" ",t.i18n.t("import.url.button")," "),l(),p("label",t.i18n.t("import.tab.text")),l(3),C(t.i18n.t("import.text.hint")),l(3),C(t.i18n.t("import.text.label")),l(),p("ngModel",t.textInput()),l(2),p("disabled",t.busy()),l(3),B(" ",t.i18n.t("import.text.button")," "))},dependencies:[Ht,Bt,Lt,Ft,gn,tt,un,zt,jt,Nt,Vt,Qt,Te,ke,De,Me,Gt,Wt],encapsulation:2,changeDetection:0})};var sa=["cvDoc"];function la(a,o){if(a&1){let e=A();d(0,"div",3)(1,"button",4),b("click",function(){v(e);let n=_();return y(n.exportPdf())}),d(2,"mat-icon"),m(3,"picture_as_pdf"),c(),m(4),c(),d(5,"button",5),b("click",function(){v(e);let n=_();return y(n.exportJson())}),d(6,"mat-icon"),m(7,"data_object"),c(),m(8),c(),d(9,"button",5),b("click",function(){v(e);let n=_();return y(n.clear())}),d(10,"mat-icon"),m(11,"delete_outline"),c(),m(12),c()()}if(a&2){let e=_();l(4),B(" ",e.i18n.t("cv.exportPdf")," "),l(4),B(" ",e.i18n.t("cv.exportJson")," "),l(4),B(" ",e.i18n.t("cv.clear")," ")}}function da(a,o){if(a&1){let e=A();d(0,"mat-expansion-panel",6)(1,"mat-expansion-panel-header")(2,"mat-panel-title"),m(3),c()(),d(4,"app-import-panel",7),b("imported",function(n){v(e);let i=_();return y(i.onImported(n))}),c()(),H(5,"app-cv-document",8,0)}if(a&2){let e=_();l(3),C(e.i18n.t("cv.importReplace")),l(2),p("resume",e.resume())}}function ca(a,o){if(a&1){let e=A();d(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),m(3),c(),d(4,"mat-card-subtitle"),m(5),c()(),d(6,"mat-card-content",9)(7,"app-import-panel",7),b("imported",function(n){v(e);let i=_();return y(i.onImported(n))}),c()()()}if(a&2){let e=_();l(3),C(e.i18n.t("cv.getStarted.title")),l(2),C(e.i18n.t("cv.getStarted.subtitle"))}}var vn=class a{repository=r(St);exporter=r(Rt);printer=r(At);i18n=r(Pe);cvDoc=ft("cvDoc");resume=this.repository.resume;hasResume=this.repository.hasResume;onImported(o){this.repository.set(o)}exportJson(){let o=this.resume();o&&this.exporter.downloadJson(o)}exportPdf(){let o=this.cvDoc()?.nativeElement;o&&this.printer.print(o)}clear(){this.repository.clear()}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=T({type:a,selectors:[["app-resume-workspace-page"]],viewQuery:function(e,t){e&1&&ut(t.cvDoc,sa,5),e&2&&gt()},decls:6,vars:3,consts:[["cvDoc",""],[1,"page-header"],[1,"page-title"],[1,"form-actions"],["matButton","filled",3,"click"],["matButton","",3,"click"],[1,"mb-6"],[3,"imported"],[3,"resume"],[1,"pt-4"]],template:function(e,t){e&1&&(d(0,"div",1)(1,"h1",2),m(2),c(),P(3,la,13,3,"div",3),c(),P(4,da,7,2)(5,ca,8,2,"mat-card")),e&2&&(l(2),C(t.i18n.t("cv.title")),l(),E(t.hasResume()?3:-1),l(),E(t.hasResume()?4:5))},dependencies:[Mt,Ct,Tt,It,wt,kt,Te,ke,De,Me,ln,Je,rn,sn,Re,Yt],encapsulation:2,changeDetection:0})};export{vn as ResumeWorkspacePage};
