import{K as B}from"./chunk-VO7N5T7I.js";import{$ as ge,L as fe,_ as _e,aa as be,ba as M,ca as U,g as pe,ia as ve,w as ue}from"./chunk-KHP2WY76.js";import{Ab as L,Bb as I,Cb as x,Eb as g,Fb as l,Ma as ne,Oa as a,Qb as O,Rb as j,S as k,Sb as ce,T as q,Tb as c,Ub as b,V as K,Vb as y,Wa as te,Wb as P,X as v,Xb as le,Yb as A,Zb as C,aa as f,ba as _,bb as V,cb as ie,dc as $,gc as me,ha as Y,hc as G,ia as Q,kc as de,m as Z,ma as W,nc as z,ob as re,pb as p,qb as u,rb as T,sb as ae,ta as ee,tb as w,ub as E,vb as oe,wb as o,xb as s,yb as se,zb as F}from"./chunk-6QRZ6BEM.js";import{a as H}from"./chunk-JJCA6Z7Z.js";var N=class extends Error{constructor(t){super(t),this.name="ResumeValidationError"}};function S(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function d(n){return typeof n=="string"?n:""}function Ve(n){return n===!0}function xe(n){return Array.isArray(n)?n.filter(t=>typeof t=="string"):[]}function X(n){return Array.isArray(n)?n:[]}function Fe(n){return X(n).filter(S).map(t=>({name:d(t.name),level:d(t.level)})).filter(t=>t.name.length>0)}function Le(n){return X(n).filter(S).map(t=>({category:d(t.category),skills:xe(t.skills)})).filter(t=>t.skills.length>0)}function je(n){return X(n).filter(S).map(t=>({degree:d(t.degree),institution:d(t.institution),specialty:d(t.specialty)||void 0,location:d(t.location)||void 0,startDate:d(t.startDate)||void 0,endDate:d(t.endDate)||void 0})).filter(t=>t.degree.length>0||t.institution.length>0)}function Ae(n){return X(n).filter(S).map(t=>({role:d(t.role),company:d(t.company),project:d(t.project)||void 0,description:d(t.description)||void 0,startDate:d(t.startDate)||void 0,endDate:d(t.endDate)||void 0,responsibilities:xe(t.responsibilities)})).filter(t=>t.role.length>0||t.company.length>0)}function Ce(n){if(!S(n))throw new N("Resume JSON must be an object.");let t=S(n.basics)?n.basics:{},e=S(t.contact)?t.contact:{},i=d(t.fullName);if(!i)throw new N('Resume must include "basics.fullName".');let r=d(t.imageURL)||void 0,m=Ve(t.containsImage)&&r!==void 0;return{basics:{fullName:i,title:d(t.title),summary:d(t.summary),containsImage:m,imageURL:r,contact:{location:d(e.location)||void 0,github:d(e.github)||void 0,email:d(e.email)||void 0,linkedin:d(e.linkedin)||void 0,phone:d(e.phone)||void 0,website:d(e.website)||void 0,birthDate:d(e.birthDate)||void 0}},languages:Fe(n.languages),skills:Le(n.skills),education:je(n.education),employment:Ae(n.employment)}}var ye=class n{storage=v(be);resumeSig=W(this.restore());resume=this.resumeSig.asReadonly();hasResume=$(()=>this.resumeSig()!==null);set(t){this.resumeSig.set(t),this.storage.writeJson(M.resume,t)}clear(){this.resumeSig.set(null),this.storage.remove(M.resume)}restore(){let t=this.storage.readJson(M.resume);if(t===null)return null;try{return Ce(t)}catch{return null}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})};function he(n,t,e="application/json"){let i=new Blob([t],{type:e}),r=URL.createObjectURL(i),m=document.createElement("a");m.href=r,m.download=n,m.click(),URL.revokeObjectURL(r)}function ke(n,t){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||t}var we=class n{toJsonString(t){return JSON.stringify(t,null,2)}downloadJson(t){let e=`${ke(t.basics.fullName,"resume")}.json`;he(e,this.toJsonString(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ee="print-target",Se=class n{print(t){t.classList.add(Ee);let e=()=>{t.classList.remove(Ee),window.removeEventListener("afterprint",e)};window.addEventListener("afterprint",e),window.print(),setTimeout(e,1500)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})};function $e(n,t){n&1&&I(0,"div",2)}var Me=new K("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var jn=(()=>{class n{_elementRef=v(ee);_ngZone=v(Q);_changeDetectorRef=v(de);_renderer=v(te);_cleanupTransitionEnd;constructor(){let e=fe(),i=v(Me,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),i&&(i.color&&(this.color=this._defaultColor=i.color),this.mode=i.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=De(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=De(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new Y;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=V({type:n,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(i,r){i&2&&(re("aria-valuenow",r._isIndeterminate()?null:r.value)("mode",r.mode),ce("mat-"+r.color),j("_mat-animation-noopable",r._isNoopAnimation)("mdc-linear-progress--animation-ready",!r._isNoopAnimation)("mdc-linear-progress--indeterminate",r._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",z],bufferValue:[2,"bufferValue","bufferValue",z],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(i,r){i&1&&(F(0,"div",0),I(1,"div",1),p(2,$e,1,0,"div",2),L(),F(3,"div",3),I(4,"span",4),L(),F(5,"div",5),I(6,"span",4),L()),i&2&&(a(),O("flex-basis",r._getBufferBarFlexBasis()),a(),u(r.mode==="buffer"?2:-1),a(),O("transform",r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function De(n,t=0,e=100){return Math.max(t,Math.min(e,n))}var An=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=ie({type:n});static \u0275inj=q({imports:[ue]})}return n})();var Be=(n,t)=>t.icon;function Ne(n,t){if(n&1){let e=x();o(0,"span",4)(1,"button",18),g("click",function(){f(e);let r=l();return _(r.fire("basics","edit"))}),o(2,"mat-icon"),c(3,"edit"),s()()()}}function Xe(n,t){if(n&1&&se(0,"img",5),n&2){l();let e=C(0);oe("src",e.basics.imageURL,ne)("alt",e.basics.fullName)}}function Oe(n,t){if(n&1&&(o(0,"p",7),c(1),s()),n&2){l();let e=C(0);a(),b(e.basics.title)}}function Pe(n,t){if(n&1&&(o(0,"li",9)(1,"mat-icon"),c(2),s(),o(3,"span"),c(4),s()()),n&2){let e=t.$implicit;a(2),b(e.icon),a(2),b(e.value)}}function Ge(n,t){if(n&1){let e=x();o(0,"span",4)(1,"button",18),g("click",function(){f(e);let r=l();return _(r.fire("language","add"))}),o(2,"mat-icon"),c(3,"add"),s()()()}}function ze(n,t){if(n&1){let e=x();o(0,"span",4)(1,"button",18),g("click",function(){f(e);let r=l().$index,m=l();return _(m.fire("language","edit",r))}),o(2,"mat-icon"),c(3,"edit"),s()(),o(4,"button",18),g("click",function(){f(e);let r=l().$index,m=l();return _(m.fire("language","remove",r))}),o(5,"mat-icon"),c(6,"delete"),s()()()}}function Ue(n,t){if(n&1&&(o(0,"div",12)(1,"span"),c(2),s(),o(3,"span",19),c(4),s(),p(5,ze,7,0,"span",4),s()),n&2){let e=t.$implicit;l();let i=C(2);a(2),b(e.name),a(2),b(e.level),a(),u(i?5:-1)}}function Je(n,t){if(n&1){let e=x();o(0,"span",4)(1,"button",18),g("click",function(){f(e);let r=l();return _(r.fire("skill","add"))}),o(2,"mat-icon"),c(3,"add"),s()()()}}function He(n,t){if(n&1&&(o(0,"div",20),c(1),s()),n&2){let e=l().$implicit;a(),b(e.category)}}function Ze(n,t){if(n&1&&(o(0,"span",22),c(1),s()),n&2){let e=t.$implicit;a(),b(e)}}function qe(n,t){if(n&1){let e=x();o(0,"span",4)(1,"button",18),g("click",function(){f(e);let r=l().$index,m=l();return _(m.fire("skill","edit",r))}),o(2,"mat-icon"),c(3,"edit"),s()(),o(4,"button",18),g("click",function(){f(e);let r=l().$index,m=l();return _(m.fire("skill","remove",r))}),o(5,"mat-icon"),c(6,"delete"),s()()()}}function Ke(n,t){if(n&1&&(o(0,"div",13),p(1,He,2,1,"div",20),o(2,"div",21),w(3,Ze,2,1,"span",22,ae),s(),p(5,qe,7,0,"span",4),s()),n&2){let e=t.$implicit;l();let i=C(2);a(),u(e.category?1:-1),a(2),E(e.skills),a(2),u(i?5:-1)}}function Ye(n,t){if(n&1){let e=x();o(0,"span",4)(1,"button",18),g("click",function(){f(e);let r=l();return _(r.fire("basics","edit"))}),o(2,"mat-icon"),c(3,"edit"),s()()()}}function Qe(n,t){if(n&1&&(o(0,"p",15),c(1),s()),n&2){l();let e=C(0);a(),b(e.basics.summary)}}function We(n,t){if(n&1){let e=x();o(0,"span",4)(1,"button",18),g("click",function(){f(e);let r=l();return _(r.fire("education","add"))}),o(2,"mat-icon"),c(3,"add"),s()()()}}function en(n,t){if(n&1&&(o(0,"div",26),c(1),s()),n&2){let e=l().$implicit;l();let i=C(1);a(),P("",i.specialty,": ",e.specialty)}}function nn(n,t){if(n&1){let e=x();o(0,"span",4)(1,"button",18),g("click",function(){f(e);let r=l().$index,m=l();return _(m.fire("education","edit",r))}),o(2,"mat-icon"),c(3,"edit"),s()(),o(4,"button",18),g("click",function(){f(e);let r=l().$index,m=l();return _(m.fire("education","remove",r))}),o(5,"mat-icon"),c(6,"delete"),s()()()}}function tn(n,t){if(n&1&&(o(0,"div",16)(1,"div",23)(2,"span",24),c(3),s(),o(4,"span",25),c(5),s()(),o(6,"div",26),c(7),s(),p(8,en,2,2,"div",26),p(9,nn,7,0,"span",4),s()),n&2){let e=t.$implicit,i=l(),r=C(2);a(3),b(e.degree),a(2),b(i.period(e.startDate,e.endDate)),a(2),b(e.institution),a(),u(e.specialty?8:-1),a(),u(r?9:-1)}}function rn(n,t){if(n&1){let e=x();o(0,"span",4)(1,"button",18),g("click",function(){f(e);let r=l();return _(r.fire("employment","add"))}),o(2,"mat-icon"),c(3,"add"),s()()()}}function an(n,t){if(n&1&&(o(0,"div",28)(1,"span",30),c(2),s(),c(3),s()),n&2){let e=l().$implicit;l();let i=C(1);a(2),y("",i.project,": "),a(),y("",e.project," ")}}function on(n,t){if(n&1&&(o(0,"div",28)(1,"span",30),c(2),s(),c(3),s()),n&2){let e=l().$implicit;l();let i=C(1);a(2),y("",i.description,": "),a(),y("",e.description," ")}}function sn(n,t){if(n&1&&(o(0,"li"),c(1),s()),n&2){let e=t.$implicit;a(),b(e)}}function cn(n,t){if(n&1&&(o(0,"ul",29),w(1,sn,2,1,"li",null,T),s()),n&2){let e=l().$implicit;a(),E(e.responsibilities)}}function ln(n,t){if(n&1){let e=x();o(0,"span",4)(1,"button",18),g("click",function(){f(e);let r=l().$index,m=l();return _(m.fire("employment","edit",r))}),o(2,"mat-icon"),c(3,"edit"),s()(),o(4,"button",18),g("click",function(){f(e);let r=l().$index,m=l();return _(m.fire("employment","remove",r))}),o(5,"mat-icon"),c(6,"delete"),s()()()}}function mn(n,t){if(n&1&&(o(0,"div",17)(1,"div",23)(2,"span",27),c(3),s(),o(4,"span",25),c(5),s()(),p(6,an,4,2,"div",28),p(7,on,4,2,"div",28),p(8,cn,3,0,"ul",29),p(9,ln,7,0,"span",4),s()),n&2){let e=t.$implicit,i=l(),r=C(2);a(3),P("",e.role," (",e.company,")"),a(2),b(i.period(e.startDate,e.endDate)),a(),u(e.project?6:-1),a(),u(e.description?7:-1),a(),u(e.responsibilities.length?8:-1),a(),u(r?9:-1)}}var dn={en:{summary:"Summary",languages:"Languages",skills:"Technical Skills",education:"Education",employment:"Employment",specialty:"Specialty",project:"Project",description:"Description"},uk:{summary:"\u041F\u0440\u043E\u0444\u0456\u043B\u044C",languages:"\u041C\u043E\u0432\u0438",skills:"\u0422\u0435\u0445\u043D\u0456\u0447\u043D\u0456 \u043D\u0430\u0432\u0438\u0447\u043A\u0438",education:"\u041E\u0441\u0432\u0456\u0442\u0430",employment:"\u0414\u043E\u0441\u0432\u0456\u0434 \u0440\u043E\u0431\u043E\u0442\u0438",specialty:"\u0421\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C",project:"\u041F\u0440\u043E\u0454\u043A\u0442",description:"\u041E\u043F\u0438\u0441"}},Te=class n{settings=v(B);i18n=v(ve);resume=G.required();editable=G(!1);edit=me();labels=$(()=>dn[this.settings.cvLanguage()]);fire(t,e,i){this.edit.emit({section:t,action:e,index:i})}contactRows(t){let e=t.basics.contact,i=[];return e.location&&i.push({icon:"place",value:e.location}),e.github&&i.push({icon:"code",value:e.github}),e.email&&i.push({icon:"mail",value:e.email}),e.linkedin&&i.push({icon:"link",value:e.linkedin}),e.phone&&i.push({icon:"call",value:e.phone}),e.website&&i.push({icon:"language",value:e.website}),e.birthDate&&i.push({icon:"cake",value:e.birthDate}),i}period(t,e){return t&&e?`${t} - ${e}`:t??e??""}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=V({type:n,selectors:[["app-cv-document"]],inputs:{resume:[1,"resume"],editable:[1,"editable"]},outputs:{edit:"edit"},decls:47,vars:20,consts:[[1,"cv-document"],[1,"cv-grid"],[1,"cv-sidebar"],[1,"cv-head","cv-block"],[1,"cv-block-actions"],["referrerpolicy","no-referrer",1,"cv-photo",3,"src","alt"],[1,"cv-name"],[1,"cv-headline"],[1,"cv-contact-list"],[1,"cv-contact-item"],[1,"cv-section-title","cv-block"],[1,"cv-kv-list"],[1,"cv-kv-row","cv-block"],[1,"cv-skill-group","cv-block"],[1,"cv-main"],[1,"cv-summary"],[1,"cv-edu-item","cv-block"],[1,"cv-job","cv-block"],["type","button",1,"cv-mini-btn",3,"click"],[1,"cv-kv-value"],[1,"cv-skill-group-name"],[1,"cv-skill-tags"],[1,"cv-skill-tag"],[1,"cv-job-header"],[1,"cv-edu-degree"],[1,"cv-job-period"],[1,"cv-edu-meta"],[1,"cv-job-title"],[1,"cv-job-line"],[1,"cv-resp-list"],[1,"cv-job-label"]],template:function(e,i){if(e&1&&(le(0)(1)(2),o(3,"article",0)(4,"div",1)(5,"aside",2)(6,"header",3),p(7,Ne,4,0,"span",4),p(8,Xe,1,2,"img",5),o(9,"h1",6),c(10),s(),p(11,Oe,2,1,"p",7),s(),o(12,"section")(13,"ul",8),w(14,Pe,5,2,"li",9,Be),s()(),o(16,"section")(17,"h2",10),c(18),p(19,Ge,4,0,"span",4),s(),o(20,"div",11),w(21,Ue,6,3,"div",12,T),s()(),o(23,"section")(24,"h2",10),c(25),p(26,Je,4,0,"span",4),s(),w(27,Ke,6,2,"div",13,T),s()(),o(29,"main",14)(30,"section")(31,"h2",10),c(32),p(33,Ye,4,0,"span",4),s(),p(34,Qe,2,1,"p",15),s(),o(35,"section")(36,"h2",10),c(37),p(38,We,4,0,"span",4),s(),w(39,tn,10,5,"div",16,T),s(),o(41,"section")(42,"h2",10),c(43),p(44,rn,4,0,"span",4),s(),w(45,mn,10,7,"div",17,T),s()()()()),e&2){let r=A(i.resume());a();let m=A(i.labels());a();let h=A(i.editable());a(),j("cv-editable",h),a(4),u(h?7:-1),a(),u(r.basics.containsImage&&r.basics.imageURL?8:-1),a(2),b(r.basics.fullName),a(),u(r.basics.title?11:-1),a(3),E(i.contactRows(r)),a(4),y(" ",m.languages," "),a(),u(h?19:-1),a(2),E(r.languages),a(4),y(" ",m.skills," "),a(),u(h?26:-1),a(),E(r.skills),a(5),y(" ",m.summary," "),a(),u(h?33:-1),a(),u(r.basics.summary?34:-1),a(3),y(" ",m.education," "),a(),u(h?38:-1),a(),E(r.education),a(4),y(" ",m.employment," "),a(),u(h?44:-1),a(),E(r.employment)}},dependencies:[ge,_e],encapsulation:2,changeDetection:0})};var D=class extends Error{constructor(e,i){super(e);this.detail=i;this.name="AiError"}detail};var Ie=class n{http=v(pe);settings=v(B);async generateText(t,e={}){let i=this.settings.apiKey();if(!i)throw new D("Gemini API key is not set. Add it in Settings before using AI features.");let r=this.settings.model()||U.defaultModel,m=`${U.baseUrl}/${r}:generateContent`,h={contents:[{parts:[{text:t}]}],generationConfig:H({temperature:e.temperature??.4},e.jsonOutput?{responseMimeType:"application/json"}:{})},J;try{J=await Z(this.http.post(m,h,{params:{key:i}}))}catch(Re){throw new D("Failed to reach Gemini. Check your API key and network connection.",Re)}return this.extractText(J)}extractText(t){if(t.promptFeedback?.blockReason)throw new D(`Gemini blocked the request (${t.promptFeedback.blockReason}).`);let i=(t.candidates?.[0]?.content?.parts??[]).map(r=>r.text??"").join("").trim();if(!i)throw new D("Gemini returned an empty response.");return i}static \u0275fac=function(e){return new(e||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})};function pn(n){let t=n.trim(),e=t.match(/```(?:json)?\s*([\s\S]*?)```/i);e&&(t=e[1].trim());let i=t.search(/[[{]/),r=Math.max(t.lastIndexOf("}"),t.lastIndexOf("]"));return i!==-1&&r!==-1&&r>i&&(t=t.slice(i,r+1)),t}function tt(n){try{return JSON.parse(pn(n))}catch{return null}}export{Ce as a,ye as b,he as c,we as d,Se as e,D as f,Ie as g,tt as h,jn as i,An as j,Te as k};
