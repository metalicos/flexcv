import{a as $e,b as rt,c as lt}from"./chunk-RJ7UAIVP.js";import{A as ht,B as vt,D as bt,E as Ct,F as Mt,G as xt,H as St,I as $,J as kt,K as Ot,L as wt,M as It,a as ze,b as Ge,c as He,d as je,e as qe,f as Qe,g as Ue,h as Je,i as Ze,j as et,k as tt,l as it,m as nt,n as at,o as ot,q as st,r as ct,v as dt,w as mt,x as le,y as se,z as pt}from"./chunk-4JBRU2X5.js";import{A as re,I as Fe,N as Le,O as Pe,P as Ve,Q as Be,R as X,S as Ke,T as Ne,U as We,V as Ye,W as Xe,Z as ut,_ as gt,aa as ft,ba as _t,da as yt,j as Ie,o as De,p as Ee,u as Te,v as A,w as Ae,y as Y,z as Re}from"./chunk-C7PJW26K.js";import{$ as B,A as fe,Ab as j,Bb as xe,Cb as h,Db as u,Eb as q,Fb as E,Gb as Se,Hb as Q,Ib as b,J as ie,Jb as C,K as ne,L as O,Na as o,Nb as ke,Pb as L,Qb as Oe,Rb as m,S as V,Sb as p,Tb as T,U as S,Va as be,W as c,Yb as ae,aa as K,ab as I,ba as _e,bb as W,ca as ye,d as k,dc as we,eb as Ce,ga as w,hb as Me,ic as U,kc as _,la as M,lc as oe,m as ee,mb as x,nb as y,ob as v,pa as ve,qb as z,r as ge,rb as G,sa as N,sb as H,tb as g,u as P,ub as r,v as te,vb as l,wb as D}from"./chunk-V4U76MBR.js";import"./chunk-JJCA6Z7Z.js";var Pt=["text"],Vt=[[["mat-icon"]],"*"],Bt=["mat-icon","*"];function Kt(n,s){if(n&1&&D(0,"mat-pseudo-checkbox",1),n&2){let e=u();g("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Nt(n,s){if(n&1&&D(0,"mat-pseudo-checkbox",3),n&2){let e=u();g("disabled",e.disabled)}}function Wt(n,s){if(n&1&&(r(0,"span",4),m(1),l()),n&2){let e=u();o(),T("(",e.group.label,")")}}var me=new S("MAT_OPTION_PARENT_COMPONENT"),pe=new S("MatOptgroup");var ce=class{source;isUserInput;constructor(s,e=!1){this.source=s,this.isUserInput=e}},R=(()=>{class n{_element=c(N);_changeDetectorRef=c(U);_parent=c(me,{optional:!0});group=c(pe,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=c(Y).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=M(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new w;_text;_stateChanges=new k;constructor(){let e=c(De);e.load(Pe),e.load(Ee),this._signalDisableRipple=!!this._parent&&Me(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!A(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new ce(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-option"]],viewQuery:function(t,i){if(t&1&&Q(Pt,7),t&2){let a;b(a=C())&&(i._text=a.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,i){t&1&&h("click",function(){return i._selectViaInteraction()})("keydown",function(d){return i._handleKeydown(d)}),t&2&&(xe("id",i.id),x("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),L("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",_]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Bt,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,i){t&1&&(q(Vt),y(0,Kt,1,2,"mat-pseudo-checkbox",1),E(1),r(2,"span",2,0),E(4,1),l(),y(5,Nt,1,1,"mat-pseudo-checkbox",3),y(6,Wt,2,1,"span",4),D(7,"div",5)),t&2&&(v(i.multiple?0:-1),o(5),v(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),o(),v(i.group&&i.group._inert?6:-1),o(),g("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[rt,Le],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
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
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function Dt(n,s,e){if(e.length){let t=s.toArray(),i=e.toArray(),a=0;for(let d=0;d<n+1;d++)t[d].group&&t[d].group===i[a]&&a++;return a}return 0}function Et(n,s,e,t){return n<e?n:n+s>e+t?Math.max(0,n-t+s):e}var he=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=W({type:n});static \u0275inj=V({imports:[Ke,lt,R,X]})}return n})();var qt=["trigger"],Qt=["panel"],Ut=[[["mat-select-trigger"]],"*"],Yt=["mat-select-trigger","*"];function Xt(n,s){if(n&1&&(r(0,"span",4),m(1),l()),n&2){let e=u();o(),p(e.placeholder)}}function $t(n,s){n&1&&E(0)}function Jt(n,s){if(n&1&&(r(0,"span",11),m(1),l()),n&2){let e=u(2);o(),p(e.triggerValue)}}function Zt(n,s){if(n&1&&(r(0,"span",5),y(1,$t,1,0)(2,Jt,2,1,"span",11),l()),n&2){let e=u();o(),v(e.customTrigger?1:2)}}function ei(n,s){if(n&1){let e=j();r(0,"div",12,1),h("keydown",function(i){B(e);let a=u();return K(a._handleKeydown(i))}),E(2,1),l()}if(n&2){let e=u();Oe(e.panelClass),L("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),x("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var ti=new S("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=c(ye);return()=>dt(n)}}),ii=new S("MAT_SELECT_CONFIG"),ni=new S("MatSelectTrigger"),ue=class{source;value;constructor(s,e){this.source=s,this.value=e}},Rt=(()=>{class n{_viewportRuler=c(st);_changeDetectorRef=c(U);_elementRef=c(N);_dir=c(Be,{optional:!0});_idGenerator=c(Y);_renderer=c(be);_parentFormField=c(xt,{optional:!0});ngControl=c(et,{self:!0,optional:!0});_liveAnnouncer=c(Te);_defaultOptions=c(ii,{optional:!0});_animationsDisabled=Fe();_popoverLocation;_initialized=new k;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,a=Dt(e,this.options,this.optionGroups),d=t._getHostElement();e===0&&a===1?i.scrollTop=0:i.scrollTop=Et(d.offsetTop,d.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ue(this,e)}_scrollStrategyFactory=c(ti);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new k;_errorStateTracker;stateChanges=new k;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=M(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Ze.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=ge(()=>{let e=this.options;return e?e.changes.pipe(ie(e),ne(()=>P(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(ne(()=>this.optionSelectionChanges))});openedChange=new w;_openedStream=this.openedChange.pipe(te(e=>e),ee(()=>{}));_closedStream=this.openedChange.pipe(te(e=>!e),ee(()=>{}));selectionChange=new w;valueChange=new w;constructor(){let e=c(kt),t=c(it,{optional:!0}),i=c(at,{optional:!0}),a=c(new we("tabindex"),{optional:!0}),d=c(mt,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Ot(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=d?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new $e(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(O(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(O(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(ie(null),O(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(fe(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&re(this._trackedModal,"aria-owns",t),Re(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;re(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,a=t===13||t===32,d=this._keyManager;if(!d.isTyping()&&a&&!A(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let F=this.selected;d.onKeydown(e);let f=this.selected;f&&F!==f&&this._liveAnnouncer.announce(f.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,a=i===40||i===38,d=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!d&&(i===13||i===32)&&t.activeItem&&!A(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!d&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let F=this.options.some(f=>!f.disabled&&!f.selected);this.options.forEach(f=>{f.disabled||(F?f.select():f.deselect())})}else{let F=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==F&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!A(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof le?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Ae(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=P(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(O(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),P(...this.options.map(t=>t._stateChanges)).pipe(O(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Ie(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-select"]],contentQueries:function(t,i,a){if(t&1&&Se(a,ni,5)(a,R,5)(a,pe,5),t&2){let d;b(d=C())&&(i.customTrigger=d.first),b(d=C())&&(i.options=d),b(d=C())&&(i.optionGroups=d)}},viewQuery:function(t,i){if(t&1&&Q(qt,5)(Qt,5)(se,5),t&2){let a;b(a=C())&&(i.trigger=a.first),b(a=C())&&(i.panel=a.first),b(a=C())&&(i._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&h("keydown",function(d){return i._handleKeydown(d)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(x("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),L("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",_],disableRipple:[2,"disableRipple","disableRipple",_],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:oe(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",_],placeholder:"placeholder",required:[2,"required","required",_],multiple:[2,"multiple","multiple",_],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",_],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",oe],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",_]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[ae([{provide:Mt,useExisting:n},{provide:me,useExisting:n}]),ve],ngContentSelectors:Yt,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&(q(Ut),r(0,"div",2,0),h("click",function(){return i.open()}),r(3,"div",3),y(4,Xt,2,1,"span",4)(5,Zt,3,1,"span",5),l(),r(6,"div",6)(7,"div",7),_e(),r(8,"svg",8),D(9,"path",9),l()()()(),Ce(10,ei,3,16,"ng-template",10),h("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(d){return i._handleOverlayKeydown(d)})),t&2){let a=ke(1);o(3),x("id",i._valueId),o(),v(i.empty?4:5),o(6),g("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[le,se],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})();var Ft=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=W({type:n});static \u0275inj=V({imports:[pt,he,X,ct,$,he]})}return n})();function oi(n,s){if(n&1&&(r(0,"mat-option",6),m(1),l()),n&2){let e=s.$implicit,t=u();g("value",e),o(),p(t.languageLabels[e])}}function ri(n,s){if(n&1&&(r(0,"mat-option",6),m(1),l()),n&2){let e=s.$implicit,t=u();g("value",e),o(),p(t.languageLabels[e])}}function li(n,s){if(n&1&&(r(0,"mat-option",6),m(1),l()),n&2){let e=s.$implicit;g("value",e),o(),p(e)}}function si(n,s){if(n&1){let e=j();r(0,"button",15),h("click",function(){B(e);let i=u();return K(i.clearKey())}),r(1,"mat-icon"),m(2,"delete"),l(),m(3),l()}if(n&2){let e=u();o(3),T(" ",e.i18n.t("settings.removeKey")," ")}}var Lt=class n{settings=c(vt);snackBar=c(ht);i18n=c(yt);models=ut.availableModels;languages=ft;languageLabels=_t;hasApiKey=this.settings.hasApiKey;interfaceLanguage=this.i18n.locale;cvLanguage=this.settings.cvLanguage;keyInput=M(this.settings.apiKey());modelInput=M(this.settings.model());revealKey=M(!1);setInterfaceLanguage(s){this.i18n.setLocale(s)}setCvLanguage(s){this.settings.setCvLanguage(s)}toggleReveal(){this.revealKey.update(s=>!s)}save(){this.settings.setApiKey(this.keyInput()),this.settings.setModel(this.modelInput()),this.snackBar.open(this.i18n.t("settings.saved"),"OK",{duration:2500})}clearKey(){this.settings.clearApiKey(),this.keyInput.set(""),this.snackBar.open(this.i18n.t("settings.keyRemoved"),"OK",{duration:2500})}openApiKeyPage(){window.open(gt.geminiApiKeys,"_blank","noopener")}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["app-settings-page"]],decls:54,vars:20,consts:[[1,"page-header"],[1,"page-title"],[1,"max-w-2xl","mb-6"],[1,"form-row","pt-4"],["appearance","outline",1,"flex-1"],[3,"ngModelChange","ngModel"],[3,"value"],[1,"max-w-2xl"],[1,"flex","flex-col","gap-4","pt-4"],["appearance","outline",1,"form-field-full"],["matInput","","placeholder","AIza...","autocomplete","off",3,"ngModelChange","type","ngModel"],["matIconButton","","matSuffix","","type","button",3,"click"],[1,"field-hint"],[1,"form-actions"],["matButton","filled",3,"click"],["matButton","",3,"click"],["matButton",""]],template:function(e,t){e&1&&(r(0,"div",0)(1,"h1",1),m(2),l()(),r(3,"mat-card",2)(4,"mat-card-header")(5,"mat-card-title"),m(6),l(),r(7,"mat-card-subtitle"),m(8),l()(),r(9,"mat-card-content",3)(10,"mat-form-field",4)(11,"mat-label"),m(12),l(),r(13,"mat-select",5),h("ngModelChange",function(a){return t.setInterfaceLanguage(a)}),G(14,oi,2,2,"mat-option",6,z),l()(),r(16,"mat-form-field",4)(17,"mat-label"),m(18),l(),r(19,"mat-select",5),h("ngModelChange",function(a){return t.setCvLanguage(a)}),G(20,ri,2,2,"mat-option",6,z),l()()()(),r(22,"mat-card",7)(23,"mat-card-header")(24,"mat-card-title"),m(25),l(),r(26,"mat-card-subtitle"),m(27),l()(),r(28,"mat-card-content",8)(29,"mat-form-field",9)(30,"mat-label"),m(31),l(),r(32,"input",10),h("ngModelChange",function(a){return t.keyInput.set(a)}),l(),r(33,"button",11),h("click",function(){return t.toggleReveal()}),r(34,"mat-icon"),m(35),l()()(),r(36,"mat-form-field",9)(37,"mat-label"),m(38),l(),r(39,"mat-select",5),h("ngModelChange",function(a){return t.modelInput.set(a)}),G(40,li,2,2,"mat-option",6,z),l()(),r(42,"p",12),m(43),l()(),r(44,"mat-card-actions",13)(45,"button",14),h("click",function(){return t.save()}),r(46,"mat-icon"),m(47,"save"),l(),m(48),l(),r(49,"button",15),h("click",function(){return t.openApiKeyPage()}),r(50,"mat-icon"),m(51,"open_in_new"),l(),m(52),l(),y(53,si,4,1,"button",16),l()()),e&2&&(o(2),p(t.i18n.t("settings.title")),o(4),p(t.i18n.t("settings.language.title")),o(2),p(t.i18n.t("settings.language.subtitle")),o(4),p(t.i18n.t("settings.interfaceLanguage.label")),o(),g("ngModel",t.interfaceLanguage()),o(),H(t.languages),o(4),p(t.i18n.t("settings.cvLanguage.label")),o(),g("ngModel",t.cvLanguage()),o(),H(t.languages),o(5),p(t.i18n.t("settings.gemini.title")),o(2),p(t.i18n.t("settings.gemini.subtitle")),o(4),p(t.i18n.t("settings.apiKey.label")),o(),g("type",t.revealKey()?"text":"password")("ngModel",t.keyInput()),o(),x("aria-label",t.revealKey()?"Hide key":"Show key"),o(2),p(t.revealKey()?"visibility_off":"visibility"),o(3),p(t.i18n.t("settings.model.label")),o(),g("ngModel",t.modelInput()),o(),H(t.models),o(3),p(t.i18n.t("settings.apiKey.hint")),o(5),T(" ",t.i18n.t("settings.save")," "),o(4),T(" ",t.i18n.t("settings.getKey")," "),o(),v(t.hasApiKey()?53:-1))},dependencies:[ot,Je,tt,nt,Ue,ze,qe,He,Qe,je,Ge,$,St,bt,Ct,It,wt,Ft,Rt,R,We,Ne,Ve,Xe,Ye],encapsulation:2,changeDetection:0})};export{Lt as SettingsPage};
