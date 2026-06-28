import{a as se,b as ae,c as le,d as ce,e as me,f as de,g as pe,h as he,i as Q,j as O,k as fe,l as ge,m as _e,n as W,o as ye,p as tt,q as Te,r as Se,s as Ee}from"./chunk-IPDPT2MA.js";import{c as Jt}from"./chunk-JGT7JFWM.js";import{$ as xe,B as U,C as K,E as ie,H as ne,J as oe,L as re,O as q,P as Z,R as ve,X as be,Y as Ce,a as Ft,aa as we,d as Yt,e as Ht,l as Kt,p as Gt,s as Xt,v as qt,w as B,x as F,y as Y,z as H}from"./chunk-MY33IDG4.js";import{$ as z,C as Zt,J as Wt,K as pt,N as ht,S as te,Y as ee,_ as $,aa as G,ba as X,j as $t,ja as ue,ka as D,q as dt,s as zt,w as Bt,y as Ut,z as Qt}from"./chunk-T6KVZ6ED.js";import{Ab as St,Cb as T,Eb as u,Fb as Et,Gb as h,Kb as It,Lb as Pt,M as v,Mb as Rt,Oa as r,Ob as Mt,Pb as kt,Qb as Dt,S as V,Sb as k,T as yt,Ta as ct,Tb as Ot,Ub as c,V as at,Vb as p,Wa as Ct,Wb as _,X as m,Yb as At,Za as xt,Zb as Nt,_b as S,aa as f,ba as g,bb as R,cb as wt,d as st,da as lt,db as Tt,ea as vt,ec as A,ia as bt,ic as Lt,jc as jt,lc as Vt,ma as P,pb as b,qb as C,rb as J,ta as I,tb as x,ub as w,vb as y,wb as s,xb as a,yb as M,zb as mt}from"./chunk-6J47JQUV.js";import{a as E,b as _t}from"./chunk-JJCA6Z7Z.js";var Ke=["tooltip"],Ge=20;var Xe=new at("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=m(lt);return()=>Kt(n,{scrollThrottle:Ge})}}),qe=new at("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Ie="tooltip-panel",Qe={passive:!0},Ze=8,We=8,ti=24,ei=200,ut=(()=>{class n{_elementRef=m(I);_ngZone=m(bt);_platform=m($t);_ariaDescriber=m(te);_focusMonitor=m(Qt);_dir=m(zt);_injector=m(lt);_viewContainerRef=m(xt);_mediaMatcher=m(Zt);_document=m(vt);_renderer=m(Ct);_animationsDisabled=ht();_defaultOptions=m(qe,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Pe;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=pt(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let i=pt(t);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=dt(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=dt(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(t){let i=this._message;this._message=t!=null?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new st;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=Ze}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(v(this._destroyed)).subscribe(t=>{t?t==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let o=this._createOverlay(i);this._detach(),this._portal=this._portal||new Ht(this._tooltipComponent,this._viewContainerRef);let l=this._tooltipInstance=o.attach(this._portal).instance;l._triggerElement=this._elementRef.nativeElement,l._mouseLeaveHideDelay=this._hideDelay,l.afterHidden().pipe(v(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),l.show(t)}hide(t=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(t):(i._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let d=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&d._origin instanceof I)return this._overlayRef;this._detach()}let i=this._injector.get(Ft).getAncestorScrollContainers(this._elementRef),o=`${this._cssClassPrefix}-${Ie}`,l=Gt(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation("global");return l.positionChanges.pipe(v(this._destroyed)).subscribe(d=>{this._updateCurrentPositionClass(d.connectionPair),this._tooltipInstance&&d.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Xt(this._injector,{direction:this._dir,positionStrategy:l,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,o]:o,scrollStrategy:this._injector.get(Xe)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(v(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(v(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(v(this._destroyed)).subscribe(d=>{d.preventDefault(),d.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(v(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let i=t.getConfig().positionStrategy,o=this._getOrigin(),l=this._getOverlayPosition();i.withPositions([this._addOffset(E(E({},o.main),l.main)),this._addOffset(E(E({},o.fallback),l.fallback))])}_addOffset(t){let i=We,o=!this._dir||this._dir.value=="ltr";return t.originY==="top"?t.offsetY=-i:t.originY==="bottom"?t.offsetY=i:t.originX==="start"?t.offsetX=o?-i:i:t.originX==="end"&&(t.offsetX=o?i:-i),t}_getOrigin(){let t=!this._dir||this._dir.value=="ltr",i=this.position,o;i=="above"||i=="below"?o={originX:"center",originY:i=="above"?"top":"bottom"}:i=="before"||i=="left"&&t||i=="right"&&!t?o={originX:"start",originY:"center"}:(i=="after"||i=="right"&&t||i=="left"&&!t)&&(o={originX:"end",originY:"center"});let{x:l,y:d}=this._invertPosition(o.originX,o.originY);return{main:o,fallback:{originX:l,originY:d}}}_getOverlayPosition(){let t=!this._dir||this._dir.value=="ltr",i=this.position,o;i=="above"?o={overlayX:"center",overlayY:"bottom"}:i=="below"?o={overlayX:"center",overlayY:"top"}:i=="before"||i=="left"&&t||i=="right"&&!t?o={overlayX:"end",overlayY:"center"}:(i=="after"||i=="right"&&t||i=="left"&&!t)&&(o={overlayX:"start",overlayY:"center"});let{x:l,y:d}=this._invertPosition(o.overlayX,o.overlayY);return{main:o,fallback:{overlayX:l,overlayY:d}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),ct(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,i){return this.position==="above"||this.position==="below"?i==="top"?i="bottom":i==="bottom"&&(i="top"):t==="end"?t="start":t==="start"&&(t="end"),{x:t,y:i}}_updateCurrentPositionClass(t){let{overlayY:i,originX:o,originY:l}=t,d;if(i==="center"?this._dir&&this._dir.value==="rtl"?d=o==="end"?"left":"right":d=o==="start"?"left":"right":d=i==="bottom"&&l==="top"?"above":"below",d!==this._currentPosition){let rt=this._overlayRef;if(rt){let gt=`${this._cssClassPrefix}-${Ie}-`;rt.removePanelClass(gt+this._currentPosition),rt.addPanelClass(gt+d)}this._currentPosition=d}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",t=>{let i=t.targetTouches?.[0],o=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let l=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,o)},this._defaultOptions?.touchLongPressShowDelay??l)})):this._addListener("mouseenter",t=>{this._setupPointerExitEventsIfNeeded();let i;t.x!==void 0&&t.y!==void 0&&(i=t),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",t=>{let i=t.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}),this._addListener("wheel",t=>{if(this._isTooltipVisible()){let i=this._document.elementFromPoint(t.clientX,t.clientY),o=this._elementRef.nativeElement;i!==o&&!o.contains(i)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",t),this._addListener("touchcancel",t)}}}_addListener(t,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,i,Qe))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t=="function"?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!=="off"){let i=this._elementRef.nativeElement,o=i.style;(t==="on"||i.nodeName!=="INPUT"&&i.nodeName!=="TEXTAREA")&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect="none"),(t==="on"||!i.draggable)&&(o.webkitUserDrag="none"),o.touchAction="none",o.webkitTapHighlightColor="transparent"}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,"tooltip"),this._isDestroyed||ct({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type==="keydown"?this._isTooltipVisible()&&t.keyCode===27&&!Ut(t):!0;static \u0275fac=function(i){return new(i||n)};static \u0275dir=Tt({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(i,o){i&2&&k("mat-mdc-tooltip-disabled",o.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),Pe=(()=>{class n{_changeDetectorRef=m(Vt);_elementRef=m(I);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=ht();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new st;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>ti&&t.width>=ei}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let i=this._tooltip.nativeElement,o=this._showAnimation,l=this._hideAnimation;if(i.classList.remove(t?l:o),i.classList.add(t?o:l),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let d=getComputedStyle(i);(d.getPropertyValue("animation-duration")==="0s"||d.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=R({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(i,o){if(i&1&&It(Ke,7),i&2){let l;Pt(l=Rt())&&(o._tooltip=l.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(i,o){i&1&&u("mouseleave",function(d){return o._handleMouseLeave(d)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(i,o){i&1&&(mt(0,"div",1,0),Et("animationend",function(d){return o._handleAnimationEnd(d)}),mt(2,"div",2),c(3),St()()),i&2&&(Ot(o.tooltipClass),k("mdc-tooltip--multiline",o._isMultiline),r(3),p(o.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return n})();var Re=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=wt({type:n});static \u0275inj=yt({imports:[Wt,qt,Bt,Yt]})}return n})();function Me(n,e,t){return`You are an expert technical resume writer. Rewrite the candidate's resume to target
the job description below, while staying truthful \u2014 never invent experience, employers, or skills.

Allowed changes:
- Reorder and reword the summary and responsibilities to emphasize relevant experience.
- Promote skills the job asks for that the candidate genuinely has.
- Adjust the title only if the candidate's experience clearly supports it.

Return ONLY a JSON object using EXACTLY the same schema as the input resume. No markdown, no commentary.
Write every human-readable string value in ${t} (keep proper nouns, technologies and emails unchanged).

CURRENT RESUME JSON:
${n}

TARGET JOB DESCRIPTION:
"""
${e}
"""`}function ke(n,e,t){return`Compare the candidate's resume against the job description. Focus on technologies,
stack, experience level, and domain.

Return ONLY this JSON (no markdown):
{
  "matches": string[],     // requirements the candidate clearly meets
  "mismatches": string[]   // requirements missing, weak, or unproven
}

Each item should be a short, concrete phrase written in ${t}. Be honest and specific.

RESUME JSON:
${n}

JOB DESCRIPTION:
"""
${e}
"""`}function De(n,e,t){return`Based on the resume and the job description, write talking points the candidate can
use to present themselves to a RECRUITER (non-technical screening). Emphasize impact, seniority,
domain fit, soft skills, and motivation \u2014 keep it business-friendly.

Return ONLY this JSON (no markdown):
{ "points": string[] }   // 5-8 concise, first-person-ready talking points written in ${t}

RESUME JSON:
${n}

JOB DESCRIPTION:
"""
${e}
"""`}function Oe(n,e,t){return`Based on the resume and the job description, write talking points the candidate can
use in a TECHNICAL interview. Emphasize concrete architecture decisions, technologies, trade-offs,
metrics, and depth that map to the job's stack. Suggest strong examples from the candidate's history.

Return ONLY this JSON (no markdown):
{ "points": string[] }   // 5-8 concrete, technical talking points written in ${t}

RESUME JSON:
${n}

JOB DESCRIPTION:
"""
${e}
"""`}function Ae(n,e,t,i,o){return`You are a career assistant helping a candidate evaluate and present their fit for a
specific job. Treat the resume JSON and the job description as ground truth. Never invent
experience the candidate does not have. Be concise, concrete, and practical.

RESUME JSON:
${n}

JOB DESCRIPTION:
"""
${e||"(not provided yet)"}
"""

CONVERSATION SO FAR:
${t||"(empty)"}

CANDIDATE MESSAGE:
${i}

Reply in ${o}, in plain text (no markdown headings, no code fences).`}function Ne(n,e,t){return`You are an expert technical resume writer. Produce a CONCISE version of the resume that
keeps ONLY the experience, skills and achievements most relevant to the job description. Drop or
shorten anything not relevant. Stay truthful \u2014 never invent anything.

Return ONLY a JSON object using EXACTLY the same schema as the input resume. No markdown, no commentary.
Write every human-readable string value in ${t} (keep proper nouns, technologies and emails unchanged).

CURRENT RESUME JSON:
${n}

TARGET JOB DESCRIPTION:
"""
${e}
"""`}function Le(n,e,t){return`Based on the candidate's resume and the job description, write the 10 most likely
interview questions this candidate will be asked for this position. Mix technical, experience and
behavioural questions that probe the candidate's actual background against the role.

Return ONLY this JSON (no markdown):
{ "points": string[] }   // exactly 10 questions written in ${t}

RESUME JSON:
${n}

JOB DESCRIPTION:
"""
${e}
"""`}function je(n,e){return`You are an expert resume writer. Rewrite and improve the candidate's professional SUMMARY
using the facts already present in the resume (experience, skills, achievements). Make it concise,
impactful and quantified where possible. Stay truthful.

Reply in ${e} with the improved summary as plain text only (no markdown, no quotes, no preamble).

RESUME JSON:
${n}`}function Ve(n,e){return`You are an expert resume writer. Improve the candidate's EMPLOYMENT section: stronger action
verbs, clearer impact, quantified results, removing redundancy. Use only facts already in the resume.

Reply in ${e} as plain text. For each role give the company and the improved bullet points.
No markdown headings, no code fences.

RESUME JSON:
${n}`}function Je(n,e){return`You are an expert resume writer. Improve the candidate's TECHNICAL SKILLS: better grouping,
clearer categories, removing duplicates, ordering by relevance and seniority. Use only skills the
candidate already lists or clearly demonstrates in their experience.

Reply in ${e} as plain text grouped by category (Category: skill, skill, ...). No markdown headings.

RESUME JSON:
${n}`}function $e(n,e){return`You are a senior technical recruiter and resume coach. Review the candidate's resume on
its own merits (NOT against any specific vacancy) and produce concise recommendation theses:
weak points, gaps, vague or unquantified achievements, weak wording, structure issues \u2014 each with a
short, actionable recommendation on how to improve it.

Return ONLY this JSON (no markdown):
{ "points": string[] }   // 6-10 short recommendation theses written in ${e}

RESUME JSON:
${n}`}function ze(n,e){return`You are an expert resume writer. Regenerate the resume with an IMPROVED STRUCTURE: better
ordering of sections and items, cleaner skill grouping, consistent and stronger wording, no
duplication. Keep all factual content truthful \u2014 do not invent experience.

Return ONLY a JSON object using EXACTLY the same schema as the input resume. No markdown, no commentary.
Write every human-readable string value in ${e} (keep proper nouns, technologies and emails unchanged).

CURRENT RESUME JSON:
${n}`}var et=class n{gemini=m(ye);settings=m(Z);optimize(e,t){return this.toResume(Me(this.serialize(e),t,this.language()))}concise(e,t){return this.toResume(Ne(this.serialize(e),t,this.language()))}restructure(e){return this.toResume(ze(this.serialize(e),this.language()))}async analyzeMatch(e,t){let i=await this.gemini.generateText(ke(this.serialize(e),t,this.language()),{jsonOutput:!0,temperature:.2}),o=tt(i);if(o===null)throw new W("Gemini did not return a valid match analysis.");return{matches:this.toStringList(o.matches),mismatches:this.toStringList(o.mismatches)}}recruiterPitch(e,t){return this.pitch(De(this.serialize(e),t,this.language()))}technicalPitch(e,t){return this.pitch(Oe(this.serialize(e),t,this.language()))}interviewQuestions(e,t){return this.pitch(Le(this.serialize(e),t,this.language()))}improveSummary(e){return this.text(je(this.serialize(e),this.language()))}improveEmployment(e){return this.text(Ve(this.serialize(e),this.language()))}improveSkills(e){return this.text(Je(this.serialize(e),this.language()))}review(e){return this.pitch($e(this.serialize(e),this.language()))}chat(e,t,i,o){return this.gemini.generateText(Ae(this.serialize(e),t,i,o,this.language()),{temperature:.5})}async toResume(e){let t=await this.gemini.generateText(e,{jsonOutput:!0,temperature:.3}),i=tt(t);if(i===null)throw new W("Gemini did not return a valid resume.");return Q(i)}async pitch(e){let t=await this.gemini.generateText(e,{jsonOutput:!0,temperature:.4}),i=tt(t),o=this.toStringList(i?.points);if(o.length===0)throw new W("Gemini did not return any items.");return o}text(e){return this.gemini.generateText(e,{temperature:.5})}language(){return ue[this.settings.cvLanguage()]}serialize(e){return JSON.stringify(e)}toStringList(e){return Array.isArray(e)?e.filter(t=>typeof t=="string"&&t.trim().length>0):[]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac,providedIn:"root"})};var Be=1;var j=class extends Error{constructor(e){super(e),this.name="ChatImportError"}};function it(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function L(n){return typeof n=="string"?n:""}function ft(n){return Array.isArray(n)?n.filter(e=>typeof e=="string"):[]}function ni(n){return n==="user"?"user":"assistant"}function oi(n){if(!it(n))return null;switch(n.type){case"text":return{type:"text",text:L(n.text)};case"error":return{type:"error",text:L(n.text)};case"pitch":return{type:"pitch",title:L(n.title),points:ft(n.points)};case"match":{let e=it(n.analysis)?n.analysis:{};return{type:"match",analysis:{matches:ft(e.matches),mismatches:ft(e.mismatches)}}}case"optimized":try{return{type:"optimized",resume:Q(n.resume)}}catch{return null}default:return null}}function Fe(n){if(!it(n)||!Array.isArray(n.messages))throw new j("Not a valid FlexCV chat export.");let e=[];for(let t of n.messages){if(!it(t))continue;let i=oi(t.content);i!==null&&e.push({id:L(t.id)||`m${e.length}`,role:ni(t.role),content:i})}return{version:typeof n.version=="number"?n.version:1,jobDescription:L(n.jobDescription),messages:e}}var nt=class n{repository=m(O);ai=m(et);i18n=m(D);messagesSig=P([]);busySig=P(!1);nextId=0;messages=this.messagesSig.asReadonly();busy=this.busySig.asReadonly();isEmpty=A(()=>this.messagesSig().length===0);jobDescription=P("");runOptimize(){return this.run(this.i18n.t("chat.optimize"),async(e,t)=>({type:"optimized",resume:await this.ai.optimize(e,t)}))}runMatch(){return this.run(this.i18n.t("chat.match"),async(e,t)=>({type:"match",analysis:await this.ai.analyzeMatch(e,t)}))}runRecruiter(){return this.run(this.i18n.t("chat.recruiter"),async(e,t)=>({type:"pitch",title:this.i18n.t("chat.title.recruiter"),points:await this.ai.recruiterPitch(e,t)}))}runTechnical(){return this.run(this.i18n.t("chat.technical"),async(e,t)=>({type:"pitch",title:this.i18n.t("chat.title.technical"),points:await this.ai.technicalPitch(e,t)}))}runConcise(){return this.run(this.i18n.t("chat.task.concise"),async(e,t)=>({type:"optimized",resume:await this.ai.concise(e,t)}))}runQuestions(){return this.run(this.i18n.t("chat.task.questions"),async(e,t)=>({type:"pitch",title:this.i18n.t("chat.title.questions"),points:await this.ai.interviewQuestions(e,t)}))}runImproveSummary(){return this.run(this.i18n.t("chat.task.improveSummary"),async e=>({type:"text",text:await this.ai.improveSummary(e)}))}runImproveEmployment(){return this.run(this.i18n.t("chat.task.improveEmployment"),async e=>({type:"text",text:await this.ai.improveEmployment(e)}))}runImproveSkills(){return this.run(this.i18n.t("chat.task.improveSkills"),async e=>({type:"text",text:await this.ai.improveSkills(e)}))}runReview(){return this.run(this.i18n.t("chat.task.review"),async e=>({type:"pitch",title:this.i18n.t("chat.title.review"),points:await this.ai.review(e)}))}runRestructure(){return this.run(this.i18n.t("chat.task.restructure"),async e=>({type:"optimized",resume:await this.ai.restructure(e)}))}ask(e){let t=e.trim();return t?this.run(t,async(i,o)=>({type:"text",text:await this.ai.chat(i,o,this.history(),t)})):Promise.resolve()}clear(){this.messagesSig.set([])}exportJson(){let e={version:Be,jobDescription:this.jobDescription(),messages:this.messagesSig()};return JSON.stringify(e,null,2)}importJson(e){let t;try{t=JSON.parse(e)}catch{throw new j("The file is not valid JSON.")}let i=Fe(t),o=i.messages.map((l,d)=>_t(E({},l),{id:`m${d}`}));this.nextId=o.length,this.messagesSig.set(o),this.jobDescription.set(i.jobDescription)}async run(e,t){let i=this.repository.resume();if(!(!i||this.busySig())){this.append("user",{type:"text",text:e}),this.busySig.set(!0);try{this.append("assistant",await t(i,this.jobDescription().trim()))}catch(o){let l=o instanceof Error?o.message:"AI request failed.";this.append("assistant",{type:"error",text:l})}finally{this.busySig.set(!1)}}}append(e,t){let i={id:`m${this.nextId++}`,role:e,content:t};this.messagesSig.update(o=>[...o,i])}history(){return this.messagesSig().map(e=>this.toHistoryLine(e)).filter(e=>e.length>0).join(`
`)}toHistoryLine(e){let t=e.role==="user"?"Candidate":"Assistant";switch(e.content.type){case"text":return`${t}: ${e.content.text}`;case"pitch":return`${t}: ${e.content.title}: ${e.content.points.join("; ")}`;case"match":case"optimized":case"error":return""}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac,providedIn:"root"})};var ci=["cvDoc"];function mi(n,e){if(n&1&&(s(0,"div",5),c(1),a()),n&2){h();let t=S(0);k("chat-bubble--user",t.role==="user"),r(),_(" ",t.content.text," ")}}function di(n,e){if(n&1&&(s(0,"div",3)(1,"mat-icon",6),c(2,"error_outline"),a(),c(3),a()),n&2){h();let t=S(0);r(3),_(" ",t.content.text," ")}}function pi(n,e){if(n&1&&(s(0,"li"),c(1),a()),n&2){let t=e.$implicit;r(),p(t)}}function hi(n,e){if(n&1&&(s(0,"li"),c(1),a()),n&2){let t=e.$implicit;r(),p(t)}}function ui(n,e){if(n&1&&(s(0,"mat-card",4)(1,"mat-card-header")(2,"mat-card-title"),c(3),a()(),s(4,"mat-card-content",7)(5,"div")(6,"h3",8),c(7),a(),s(8,"ul",9),x(9,pi,2,1,"li",null,J),a()(),s(11,"div")(12,"h3",10),c(13),a(),s(14,"ul",9),x(15,hi,2,1,"li",null,J),a()()()()),n&2){let t=h(),i=S(0);r(3),p(t.i18n.t("chatmsg.match.title")),r(4),p(t.i18n.t("chatmsg.match.matches")),r(2),w(i.content.analysis.matches),r(4),p(t.i18n.t("chatmsg.match.mismatches")),r(2),w(i.content.analysis.mismatches)}}function fi(n,e){if(n&1&&(s(0,"li"),c(1),a()),n&2){let t=e.$implicit;r(),p(t)}}function gi(n,e){if(n&1&&(s(0,"mat-card",4)(1,"mat-card-header")(2,"mat-card-title"),c(3),a()(),s(4,"mat-card-content",11)(5,"ul",12),x(6,fi,2,1,"li",null,J),a()()()),n&2){h();let t=S(0);r(3),p(t.content.title),r(3),w(t.content.points)}}function _i(n,e){if(n&1){let t=T();s(0,"mat-card",4)(1,"mat-card-header")(2,"mat-card-title"),c(3),a(),s(4,"mat-card-subtitle"),c(5),a()(),s(6,"mat-card-content",11)(7,"div",13)(8,"button",14),u("click",function(){f(t);let o=h(),l=S(0);return g(o.applyResume(l.content.resume))}),s(9,"mat-icon"),c(10,"check"),a(),c(11),a(),s(12,"button",15),u("click",function(){f(t);let o=h(),l=S(0);return g(o.downloadResume(l.content.resume))}),s(13,"mat-icon"),c(14,"data_object"),a(),c(15),a(),s(16,"button",14),u("click",function(){f(t);let o=h();return g(o.downloadPdf())}),s(17,"mat-icon"),c(18,"picture_as_pdf"),a(),c(19),a()(),M(20,"app-cv-document",16,0),a()()}if(n&2){let t=h(),i=S(0);r(3),p(t.i18n.t("chatmsg.optimized.title")),r(2),p(t.i18n.t("chatmsg.optimized.subtitle")),r(6),_(" ",t.i18n.t("chatmsg.useAsCv")," "),r(4),_(" ",t.i18n.t("chatmsg.downloadJson")," "),r(4),_(" ",t.i18n.t("chatmsg.downloadPdf")," "),r(),y("resume",i.content.resume)}}var ot=class n{repository=m(O);exporter=m(ge);printer=m(_e);snackBar=m(q);i18n=m(D);message=Lt.required();cvDoc=jt("cvDoc",{read:I});applyResume(e){this.repository.set(e),this.snackBar.open(this.i18n.t("chatmsg.savedAsCv"),"OK",{duration:3e3})}downloadResume(e){this.exporter.downloadJson(e)}downloadPdf(){let e=this.cvDoc()?.nativeElement;e&&this.printer.print(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["app-chat-message"]],viewQuery:function(t,i){t&1&&Mt(i.cvDoc,ci,5,I),t&2&&kt()},inputs:{message:[1,"message"]},decls:7,vars:4,consts:[["cvDoc",""],[1,"chat-row"],[1,"chat-bubble",3,"chat-bubble--user"],[1,"chat-bubble","chat-bubble--error"],[1,"chat-card"],[1,"chat-bubble"],[1,"align-middle"],[1,"grid","gap-6","pt-4","md:grid-cols-2"],[1,"accent","mb-2"],[1,"list-disc","pl-5","flex","flex-col","gap-1"],[1,"muted","mb-2"],[1,"pt-4"],[1,"list-disc","pl-5","flex","flex-col","gap-2"],[1,"form-actions","mb-4"],["matButton","filled",3,"click"],["matButton","",3,"click"],[3,"resume"]],template:function(t,i){if(t&1&&(At(0),s(1,"div",1),b(2,mi,2,3,"div",2)(3,di,4,1,"div",3)(4,ui,17,3,"mat-card",4)(5,gi,8,1,"mat-card",4)(6,_i,22,6,"mat-card",4),a()),t&2){let o,l=Nt(i.message());r(),k("chat-row--user",l.role==="user"),r(),C((o=l.content.type)==="text"?2:o==="error"?3:o==="match"?4:o==="pitch"?5:o==="optimized"?6:-1)}},dependencies:[K,B,Y,U,H,F,z,$,X,G,Ee],encapsulation:2,changeDetection:0})};var Ye=(n,e)=>e.key,yi=(n,e)=>e.id;function vi(n,e){if(n&1){let t=T();s(0,"button",4),u("click",function(){f(t);let o=h();return g(o.exportChat())}),s(1,"mat-icon"),c(2,"file_download"),a(),c(3),a(),s(4,"button",4),u("click",function(){f(t);let o=h();return g(o.clearChat())}),s(5,"mat-icon"),c(6,"delete_sweep"),a(),c(7),a()}if(n&2){let t=h();y("disabled",t.busy()),r(3),_(" ",t.i18n.t("chat.export")," "),r(),y("disabled",t.busy()),r(3),_(" ",t.i18n.t("chat.clear")," ")}}function bi(n,e){if(n&1&&(s(0,"mat-card")(1,"mat-card-content",6)(2,"mat-icon"),c(3,"description"),a(),s(4,"p"),c(5),s(6,"a",7),c(7),a(),c(8),a()()()),n&2){let t=h();r(5),_(" ",t.i18n.t("chat.needResume.before")," "),r(2),p(t.i18n.t("nav.cv")),r(),_(" ",t.i18n.t("chat.needResume.after")," ")}}function Ci(n,e){if(n&1&&(s(0,"mat-card",8)(1,"mat-card-content",25)(2,"mat-icon",26),c(3,"key"),a(),s(4,"span"),c(5),s(6,"a",27),c(7),a(),c(8),a()()()),n&2){let t=h(2);r(5),_(" ",t.i18n.t("chat.needKey.before")," "),r(2),p(t.i18n.t("nav.settings")),r(),_(" ",t.i18n.t("chat.needKey.after")," ")}}function xi(n,e){if(n&1){let t=T();s(0,"a",28),u("click",function(){let o=f(t).$implicit,l=h(2);return g(l.canRun(o)&&l.runTask(o.key))}),s(1,"mat-icon",29),c(2),a(),s(3,"span",30),c(4),a()()}if(n&2){let t=e.$implicit,i=h(2);y("disabled",!i.canRun(t))("matTooltip",t.needsJd&&!i.hasJob()?i.i18n.t("chat.needVacancyForTask"):""),r(2),p(t.icon),r(2),p(i.i18n.t(t.labelKey))}}function wi(n,e){if(n&1){let t=T();s(0,"a",28),u("click",function(){let o=f(t).$implicit,l=h(2);return g(l.canRun(o)&&l.runTask(o.key))}),s(1,"mat-icon",29),c(2),a(),s(3,"span",30),c(4),a()()}if(n&2){let t=e.$implicit,i=h(2);y("disabled",!i.canRun(t))("matTooltip",t.needsJd&&!i.hasJob()?i.i18n.t("chat.needVacancyForTask"):""),r(2),p(t.icon),r(2),p(i.i18n.t(t.labelKey))}}function Ti(n,e){if(n&1&&(s(0,"div",6)(1,"mat-icon"),c(2,"forum"),a(),s(3,"p"),c(4),a()()),n&2){let t=h(2);r(4),p(t.i18n.t("chat.empty"))}}function Si(n,e){if(n&1&&M(0,"app-chat-message",18),n&2){let t=e.$implicit;y("message",t)}}function Ei(n,e){n&1&&M(0,"mat-progress-bar",19)}function Ii(n,e){if(n&1){let t=T();b(0,Ci,9,3,"mat-card",8),s(1,"div",9)(2,"aside",10)(3,"mat-nav-list")(4,"h3",11),c(5),a(),x(6,xi,5,4,"a",12,Ye),M(8,"mat-divider",13),s(9,"h3",11),c(10),a(),x(11,wi,5,4,"a",12,Ye),a()(),s(13,"div",14)(14,"mat-card",8)(15,"mat-card-header")(16,"mat-card-title"),c(17),a(),s(18,"mat-card-subtitle"),c(19),a()(),s(20,"mat-card-content")(21,"mat-form-field",15)(22,"mat-label"),c(23),a(),s(24,"textarea",16),u("ngModelChange",function(o){f(t);let l=h();return g(l.jobDescription.set(o))}),a()()()(),s(25,"div",17),b(26,Ti,5,1,"div",6),x(27,Si,1,1,"app-chat-message",18,yi),b(29,Ei,1,0,"mat-progress-bar",19),a(),s(30,"div",20)(31,"div",21)(32,"mat-form-field",22)(33,"mat-label"),c(34),a(),s(35,"textarea",23),u("ngModelChange",function(o){f(t);let l=h();return g(l.draft.set(o))})("keydown.enter",function(o){f(t);let l=h();return o.preventDefault(),g(l.send())}),a()(),s(36,"button",24),u("click",function(){f(t);let o=h();return g(o.send())}),s(37,"mat-icon"),c(38,"send"),a()()()()()()}if(n&2){let t=h();C(t.hasApiKey()?-1:0),r(5),p(t.i18n.t("chat.cat.context")),r(),w(t.contextTasks),r(4),p(t.i18n.t("chat.cat.improve")),r(),w(t.improveTasks),r(6),p(t.i18n.t("chat.vacancy.title")),r(2),p(t.i18n.t("chat.vacancy.subtitle")),r(4),p(t.i18n.t("chat.jobDescription.label")),r(),y("ngModel",t.jobDescription()),r(2),C(t.isEmpty()?26:-1),r(),w(t.messages()),r(2),C(t.busy()?29:-1),r(5),p(t.i18n.t("chat.ask.label")),r(),y("ngModel",t.draft()),r(),y("disabled",!t.canChat()||!t.draft().trim())}}var He=class n{chat=m(nt);settings=m(Z);repository=m(O);snackBar=m(q);i18n=m(D);messages=this.chat.messages;busy=this.chat.busy;isEmpty=this.chat.isEmpty;jobDescription=this.chat.jobDescription;hasResume=this.repository.hasResume;hasApiKey=this.settings.hasApiKey;draft=P("");hasJob=A(()=>this.jobDescription().trim().length>0);canChat=A(()=>this.hasResume()&&this.hasApiKey()&&!this.busy());contextTasks=[{key:"concise",labelKey:"chat.task.concise",icon:"auto_fix_high",needsJd:!0},{key:"recruiter",labelKey:"chat.recruiter",icon:"record_voice_over",needsJd:!0},{key:"technical",labelKey:"chat.technical",icon:"terminal",needsJd:!0},{key:"questions",labelKey:"chat.task.questions",icon:"quiz",needsJd:!0}];improveTasks=[{key:"improveSummary",labelKey:"chat.task.improveSummary",icon:"subject",needsJd:!1},{key:"improveEmployment",labelKey:"chat.task.improveEmployment",icon:"work",needsJd:!1},{key:"improveSkills",labelKey:"chat.task.improveSkills",icon:"build",needsJd:!1},{key:"review",labelKey:"chat.task.review",icon:"rate_review",needsJd:!1},{key:"restructure",labelKey:"chat.task.restructure",icon:"dashboard_customize",needsJd:!1}];canRun(e){return this.canChat()&&(!e.needsJd||this.hasJob())}runTask(e){switch(e){case"concise":this.chat.runConcise();return;case"recruiter":this.chat.runRecruiter();return;case"technical":this.chat.runTechnical();return;case"questions":this.chat.runQuestions();return;case"improveSummary":this.chat.runImproveSummary();return;case"improveEmployment":this.chat.runImproveEmployment();return;case"improveSkills":this.chat.runImproveSkills();return;case"review":this.chat.runReview();return;case"restructure":this.chat.runRestructure();return}}send(){let e=this.draft().trim();!e||!this.canChat()||(this.draft.set(""),this.chat.ask(e))}exportChat(){fe("flexcv-chat.json",this.chat.exportJson()),this.snackBar.open(this.i18n.t("chat.exported"),"OK",{duration:2500})}async onImportFile(e){let t=e.target,i=t.files?.[0];if(t.value="",!!i)try{this.chat.importJson(await i.text()),this.snackBar.open(this.i18n.t("chat.importedOk"),"OK",{duration:2500})}catch{this.snackBar.open(this.i18n.t("chat.importError"),"Dismiss",{duration:5e3})}}clearChat(){this.chat.clear()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["app-chat-page"]],decls:13,vars:5,consts:[["chatFile",""],[1,"page-header"],[1,"page-title"],[1,"form-actions"],["matButton","",3,"click","disabled"],["type","file","accept",".json,application/json",1,"hidden",3,"change"],[1,"empty-state"],["routerLink","/cv"],[1,"mb-4"],[1,"cv-workspace"],[1,"cv-workspace-nav","surface-card"],["matSubheader",""],["mat-list-item","",3,"disabled","matTooltip"],[1,"my-2"],[1,"cv-workspace-content"],["appearance","outline",1,"form-field-full"],["matInput","","rows","5",3,"ngModelChange","ngModel"],[1,"chat-thread"],[3,"message"],["mode","indeterminate"],[1,"chat-composer"],[1,"chat-input-row"],["appearance","outline","subscriptSizing","dynamic",1,"form-field-full"],["matInput","","rows","2",3,"ngModelChange","keydown.enter","ngModel"],["matIconButton","filled","aria-label","Send",1,"chat-send",3,"click","disabled"],[1,"flex","items-center","gap-3"],[1,"accent"],["routerLink","/settings"],["mat-list-item","",3,"click","disabled","matTooltip"],["matListItemIcon",""],["matListItemTitle",""]],template:function(t,i){if(t&1){let o=T();s(0,"div",1)(1,"h1",2),c(2),a(),s(3,"div",3)(4,"button",4),u("click",function(){f(o);let d=Dt(10);return g(d.click())}),s(5,"mat-icon"),c(6,"file_upload"),a(),c(7),a(),b(8,vi,8,4),s(9,"input",5,0),u("change",function(d){return i.onImportFile(d)}),a()()(),b(11,bi,9,3,"mat-card")(12,Ii,39,12)}t&2&&(r(2),p(i.i18n.t("chat.title")),r(2),y("disabled",i.busy()),r(3),_(" ",i.i18n.t("chat.import")," "),r(),C(i.isEmpty()?-1:8),r(3),C(i.hasResume()?12:11))},dependencies:[re,ie,ne,oe,Jt,K,B,Y,U,H,F,z,$,ee,X,G,he,pe,me,ce,de,se,le,ae,Ce,be,ve,we,xe,Se,Te,Re,ut,ot],encapsulation:2,changeDetection:0})};export{He as ChatPage};
