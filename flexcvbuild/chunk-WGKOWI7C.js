import{N as L}from"./chunk-BJESACEL.js";import{H as se,P as ce,T as me,U as le,V as de,W as T,X,g as oe}from"./chunk-QTZSD6YY.js";import{Db as d,La as Z,Na as r,Ob as F,Pb as ne,Qb as te,R as b,Rb as c,S as $,Sb as l,Tb as k,U as z,Ub as M,Va as q,Vb as ie,W as g,Wb as B,Xb as p,ab as S,bb as K,bc as D,fc as re,ga as V,ha as U,ic as ae,l as G,la as J,lc as N,mb as Y,nb as u,ob as f,pb as w,qb as Q,rb as _,sa as H,sb as v,tb as W,ub as s,vb as a,wb as ee,xb as R,yb as I,zb as C}from"./chunk-V4U76MBR.js";import{a as P}from"./chunk-JJCA6Z7Z.js";var j=class extends Error{constructor(t){super(t),this.name="ResumeValidationError"}};function h(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function m(e){return typeof e=="string"?e:""}function Se(e){return e===!0}function pe(e){return Array.isArray(e)?e.filter(t=>typeof t=="string"):[]}function A(e){return Array.isArray(e)?e:[]}function we(e){return A(e).filter(h).map(t=>({name:m(t.name),level:m(t.level)})).filter(t=>t.name.length>0)}function Re(e){return A(e).filter(h).map(t=>({category:m(t.category),skills:pe(t.skills)})).filter(t=>t.skills.length>0)}function Ie(e){return A(e).filter(h).map(t=>({degree:m(t.degree),institution:m(t.institution),specialty:m(t.specialty)||void 0,location:m(t.location)||void 0,startDate:m(t.startDate)||void 0,endDate:m(t.endDate)||void 0})).filter(t=>t.degree.length>0||t.institution.length>0)}function De(e){return A(e).filter(h).map(t=>({role:m(t.role),company:m(t.company),project:m(t.project)||void 0,description:m(t.description)||void 0,startDate:m(t.startDate)||void 0,endDate:m(t.endDate)||void 0,responsibilities:pe(t.responsibilities)})).filter(t=>t.role.length>0||t.company.length>0)}function ue(e){if(!h(e))throw new j("Resume JSON must be an object.");let t=h(e.basics)?e.basics:{},n=h(t.contact)?t.contact:{},i=m(t.fullName);if(!i)throw new j('Resume must include "basics.fullName".');let o=m(t.imageURL)||void 0,y=Se(t.containsImage)&&o!==void 0;return{basics:{fullName:i,title:m(t.title),summary:m(t.summary),containsImage:y,imageURL:o,contact:{location:m(n.location)||void 0,github:m(n.github)||void 0,email:m(n.email)||void 0,linkedin:m(n.linkedin)||void 0,phone:m(n.phone)||void 0,website:m(n.website)||void 0,birthDate:m(n.birthDate)||void 0}},languages:we(e.languages),skills:Re(e.skills),education:Ie(e.education),employment:De(e.employment)}}var fe=class e{storage=g(de);resumeSig=J(this.restore());resume=this.resumeSig.asReadonly();hasResume=D(()=>this.resumeSig()!==null);set(t){this.resumeSig.set(t),this.storage.writeJson(T.resume,t)}clear(){this.resumeSig.set(null),this.storage.remove(T.resume)}restore(){let t=this.storage.readJson(T.resume);if(t===null)return null;try{return ue(t)}catch{return null}}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})};function ge(e,t,n="application/json"){let i=new Blob([t],{type:n}),o=URL.createObjectURL(i),y=document.createElement("a");y.href=o,y.download=e,y.click(),URL.revokeObjectURL(o)}function be(e,t){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||t}var _e=class e{toJsonString(t){return JSON.stringify(t,null,2)}downloadJson(t){let n=`${be(t.basics.fullName,"resume")}.json`;ge(n,this.toJsonString(t))}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})};var ve="print-target",ye=class e{print(t){t.classList.add(ve);let n=()=>{t.classList.remove(ve),window.removeEventListener("afterprint",n)};window.addEventListener("afterprint",n),window.print(),setTimeout(n,1500)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})};function Te(e,t){e&1&&C(0,"div",2)}var Le=new z("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var En=(()=>{class e{_elementRef=g(H);_ngZone=g(U);_changeDetectorRef=g(ae);_renderer=g(q);_cleanupTransitionEnd;constructor(){let n=se(),i=g(Le,{optional:!0});this._isNoopAnimation=n==="di-disabled",n==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),i&&(i.color&&(this.color=this._defaultColor=i.color),this.mode=i.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(n){this._color=n}_color;_defaultColor="primary";get value(){return this._value}set value(n){this._value=he(n||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(n){this._bufferValue=he(n||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new V;get mode(){return this._mode}set mode(n){this._mode=n,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=n=>{this.animationEnd.observers.length===0||!n.target||!n.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=S({type:e,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(i,o){i&2&&(Y("aria-valuenow",o._isIndeterminate()?null:o.value)("mode",o.mode),te("mat-"+o.color),ne("_mat-animation-noopable",o._isNoopAnimation)("mdc-linear-progress--animation-ready",!o._isNoopAnimation)("mdc-linear-progress--indeterminate",o._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",N],bufferValue:[2,"bufferValue","bufferValue",N],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(i,o){i&1&&(R(0,"div",0),C(1,"div",1),u(2,Te,1,0,"div",2),I(),R(3,"div",3),C(4,"span",4),I(),R(5,"div",5),C(6,"span",4),I()),i&2&&(r(),F("flex-basis",o._getBufferBarFlexBasis()),r(),f(o.mode==="buffer"?2:-1),r(),F("transform",o._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2,changeDetection:0})}return e})();function he(e,t=0,n=100){return Math.max(t,Math.min(n,e))}var Sn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=K({type:e});static \u0275inj=$({imports:[ce]})}return e})();var je=(e,t)=>t.icon,Ae=(e,t)=>t.name,Fe=(e,t)=>t.category;function Me(e,t){if(e&1&&ee(0,"img",4),e&2){d();let n=p(0);W("src",n.basics.imageURL,Z)("alt",n.basics.fullName)}}function Be(e,t){if(e&1&&(s(0,"p",6),c(1),a()),e&2){d();let n=p(0);r(),l(n.basics.title)}}function Ne(e,t){if(e&1&&(s(0,"li",8)(1,"mat-icon"),c(2),a(),s(3,"span"),c(4),a()()),e&2){let n=t.$implicit;r(2),l(n.icon),r(2),l(n.value)}}function Xe(e,t){if(e&1&&(s(0,"div",12)(1,"span"),c(2),a(),s(3,"span",13),c(4),a()()),e&2){let n=t.$implicit;r(2),l(n.name),r(2),l(n.level)}}function Oe(e,t){if(e&1&&(s(0,"section")(1,"h2",10),c(2),a(),s(3,"div",11),_(4,Xe,5,2,"div",12,Ae),a()()),e&2){d();let n=p(0),i=p(1);r(2),l(i.languages),r(2),v(n.languages)}}function Pe(e,t){if(e&1&&(s(0,"div",15),c(1),a()),e&2){let n=d().$implicit;r(),l(n.category)}}function Ge(e,t){if(e&1&&(s(0,"span",17),c(1),a()),e&2){let n=t.$implicit;r(),l(n)}}function $e(e,t){if(e&1&&(s(0,"div",14),u(1,Pe,2,1,"div",15),s(2,"div",16),_(3,Ge,2,1,"span",17,Q),a()()),e&2){let n=t.$implicit;r(),f(n.category?1:-1),r(2),v(n.skills)}}function ze(e,t){if(e&1&&(s(0,"section")(1,"h2",10),c(2),a(),_(3,$e,5,1,"div",14,Fe),a()),e&2){d();let n=p(0),i=p(1);r(2),l(i.skills),r(),v(n.skills)}}function Ve(e,t){if(e&1&&(s(0,"section")(1,"h2",10),c(2),a(),s(3,"p",18),c(4),a()()),e&2){d();let n=p(0),i=p(1);r(2),l(i.summary),r(2),l(n.basics.summary)}}function Ue(e,t){if(e&1&&(s(0,"div",23),c(1),a()),e&2){let n=d().$implicit;d(2);let i=p(1);r(),M("",i.specialty,": ",n.specialty)}}function Je(e,t){if(e&1&&(s(0,"div",19)(1,"div",20)(2,"span",21),c(3),a(),s(4,"span",22),c(5),a()(),s(6,"div",23),c(7),a(),u(8,Ue,2,2,"div",23),a()),e&2){let n=t.$implicit,i=d(2);r(3),l(n.degree),r(2),l(i.period(n.startDate,n.endDate)),r(2),l(n.institution),r(),f(n.specialty?8:-1)}}function He(e,t){if(e&1&&(s(0,"section")(1,"h2",10),c(2),a(),_(3,Je,9,4,"div",19,w),a()),e&2){d();let n=p(0),i=p(1);r(2),l(i.education),r(),v(n.education)}}function Ze(e,t){if(e&1&&(s(0,"div",26)(1,"span",28),c(2),a(),c(3),a()),e&2){let n=d().$implicit;d(2);let i=p(1);r(2),k("",i.project,": "),r(),k("",n.project," ")}}function qe(e,t){if(e&1&&(s(0,"div",26)(1,"span",28),c(2),a(),c(3),a()),e&2){let n=d().$implicit;d(2);let i=p(1);r(2),k("",i.description,": "),r(),k("",n.description," ")}}function Ke(e,t){if(e&1&&(s(0,"li"),c(1),a()),e&2){let n=t.$implicit;r(),l(n)}}function Ye(e,t){if(e&1&&(s(0,"ul",27),_(1,Ke,2,1,"li",null,w),a()),e&2){let n=d().$implicit;r(),v(n.responsibilities)}}function Qe(e,t){if(e&1&&(s(0,"div",24)(1,"div",20)(2,"span",25),c(3),a(),s(4,"span",22),c(5),a()(),u(6,Ze,4,2,"div",26),u(7,qe,4,2,"div",26),u(8,Ye,3,0,"ul",27),a()),e&2){let n=t.$implicit,i=d(2);r(3),M("",n.role," (",n.company,")"),r(2),l(i.period(n.startDate,n.endDate)),r(),f(n.project?6:-1),r(),f(n.description?7:-1),r(),f(n.responsibilities.length?8:-1)}}function We(e,t){if(e&1&&(s(0,"section")(1,"h2",10),c(2),a(),_(3,Qe,9,6,"div",24,w),a()),e&2){d();let n=p(0),i=p(1);r(2),l(i.employment),r(),v(n.employment)}}var en={en:{summary:"Summary",languages:"Languages",skills:"Technical Skills",education:"Education",employment:"Employment",specialty:"Specialty",project:"Project",description:"Description"},uk:{summary:"\u041F\u0440\u043E\u0444\u0456\u043B\u044C",languages:"\u041C\u043E\u0432\u0438",skills:"\u0422\u0435\u0445\u043D\u0456\u0447\u043D\u0456 \u043D\u0430\u0432\u0438\u0447\u043A\u0438",education:"\u041E\u0441\u0432\u0456\u0442\u0430",employment:"\u0414\u043E\u0441\u0432\u0456\u0434 \u0440\u043E\u0431\u043E\u0442\u0438",specialty:"\u0421\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C",project:"\u041F\u0440\u043E\u0454\u043A\u0442",description:"\u041E\u043F\u0438\u0441"}},xe=class e{settings=g(L);resume=re.required();labels=D(()=>en[this.settings.cvLanguage()]);contactRows(t){let n=t.basics.contact,i=[];return n.location&&i.push({icon:"place",value:n.location}),n.github&&i.push({icon:"code",value:n.github}),n.email&&i.push({icon:"mail",value:n.email}),n.linkedin&&i.push({icon:"link",value:n.linkedin}),n.phone&&i.push({icon:"call",value:n.phone}),n.website&&i.push({icon:"language",value:n.website}),n.birthDate&&i.push({icon:"cake",value:n.birthDate}),i}period(t,n){return t&&n?`${t} - ${n}`:t??n??""}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=S({type:e,selectors:[["app-cv-document"]],inputs:{resume:[1,"resume"]},decls:20,vars:10,consts:[[1,"cv-document"],[1,"cv-grid"],[1,"cv-sidebar"],[1,"cv-head"],["referrerpolicy","no-referrer",1,"cv-photo",3,"src","alt"],[1,"cv-name"],[1,"cv-headline"],[1,"cv-contact-list"],[1,"cv-contact-item"],[1,"cv-main"],[1,"cv-section-title"],[1,"cv-kv-list"],[1,"cv-kv-row"],[1,"cv-kv-value"],[1,"cv-skill-group"],[1,"cv-skill-group-name"],[1,"cv-skill-tags"],[1,"cv-skill-tag"],[1,"cv-summary"],[1,"cv-edu-item"],[1,"cv-job-header"],[1,"cv-edu-degree"],[1,"cv-job-period"],[1,"cv-edu-meta"],[1,"cv-job"],[1,"cv-job-title"],[1,"cv-job-line"],[1,"cv-resp-list"],[1,"cv-job-label"]],template:function(n,i){if(n&1&&(ie(0)(1),s(2,"article",0)(3,"div",1)(4,"aside",2)(5,"header",3),u(6,Me,1,2,"img",4),s(7,"h1",5),c(8),a(),u(9,Be,2,1,"p",6),a(),s(10,"section")(11,"ul",7),_(12,Ne,5,2,"li",8,je),a()(),u(14,Oe,6,1,"section"),u(15,ze,5,1,"section"),a(),s(16,"main",9),u(17,Ve,5,2,"section"),u(18,He,5,1,"section"),u(19,We,5,1,"section"),a()()()),n&2){let o=B(i.resume());r(),B(i.labels()),r(5),f(o.basics.containsImage&&o.basics.imageURL?6:-1),r(2),l(o.basics.fullName),r(),f(o.basics.title?9:-1),r(3),v(i.contactRows(o)),r(2),f(o.languages.length?14:-1),r(),f(o.skills.length?15:-1),r(2),f(o.basics.summary?17:-1),r(),f(o.education.length?18:-1),r(),f(o.employment.length?19:-1)}},dependencies:[le,me],encapsulation:2,changeDetection:0})};var x=class extends Error{constructor(n,i){super(n);this.detail=i;this.name="AiError"}detail};var Ce=class e{http=g(oe);settings=g(L);async generateText(t,n={}){let i=this.settings.apiKey();if(!i)throw new x("Gemini API key is not set. Add it in Settings before using AI features.");let o=this.settings.model()||X.defaultModel,y=`${X.baseUrl}/${o}:generateContent`,ke={contents:[{parts:[{text:t}]}],generationConfig:P({temperature:n.temperature??.4},n.jsonOutput?{responseMimeType:"application/json"}:{})},O;try{O=await G(this.http.post(y,ke,{params:{key:i}}))}catch(Ee){throw new x("Failed to reach Gemini. Check your API key and network connection.",Ee)}return this.extractText(O)}extractText(t){if(t.promptFeedback?.blockReason)throw new x(`Gemini blocked the request (${t.promptFeedback.blockReason}).`);let i=(t.candidates?.[0]?.content?.parts??[]).map(o=>o.text??"").join("").trim();if(!i)throw new x("Gemini returned an empty response.");return i}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})};function nn(e){let t=e.trim(),n=t.match(/```(?:json)?\s*([\s\S]*?)```/i);n&&(t=n[1].trim());let i=t.search(/[[{]/),o=Math.max(t.lastIndexOf("}"),t.lastIndexOf("]"));return i!==-1&&o!==-1&&o>i&&(t=t.slice(i,o+1)),t}function Un(e){try{return JSON.parse(nn(e))}catch{return null}}export{ue as a,fe as b,ge as c,_e as d,ye as e,En as f,Sn as g,x as h,Ce as i,Un as j,xe as k};
