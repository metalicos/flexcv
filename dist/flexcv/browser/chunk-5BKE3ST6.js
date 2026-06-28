import{a as X,b as Ye,d as ti,e as ei,g as ni,h as ai,i as si,j as ci,k as li}from"./chunk-2DU4RJDI.js";import{a as Ee}from"./chunk-Z3KRD7MP.js";import{c as $e}from"./chunk-UV7TTSNY.js";import{A as U,B as ii,C as oi,D as pt,G as ri,J as ht,K as bt,N as _t,O as ut,a as Ve,b as He,c as Qe,d as We,f as Ue,g as Ge,h as ct,k as lt,m as mt,o as dt,p as qe,q as Je,s as Ke,t as Ze,u as Kt}from"./chunk-GQTUBTSU.js";import{$ as Zt,I as ot,K as rt,L as ze,M as $t,N as qt,O as Ft,P as Ne,Q as Jt,R as st,S as je,T as V,U as H,V as Q,W,ca as Xe,da as G,g as Le,k as It,l as Re,n as Pe,o as Bt,s as Ot,t as Ae,v as Be,x as Oe,y as Fe}from"./chunk-PBZDZCY7.js";import{$ as f,Ab as D,Cb as h,Db as p,Eb as q,Fb as R,Gb as J,Hb as K,I as ve,Ib as u,J as Mt,Jb as g,K as xe,L as kt,Lb as Te,Mb as Ie,Na as s,Nb as at,Ob as Me,Pb as x,Qb as Rt,R as et,Rb as m,S as it,Sa as St,Sb as _,Ta as Dt,Tb as C,U as F,Va as Lt,W as l,Ya as ke,Yb as Z,a as O,aa as v,ab as y,bb as nt,c as pe,ca as wt,cb as T,cc as Se,d as yt,db as A,eb as Et,ec as Ct,f as he,fb as we,fc as Pt,ga as E,gc as De,h as be,ha as $,ic as Tt,kc as P,l as _e,la as S,lb as Ce,lc as At,mb as I,nb as k,ob as w,pa as Qt,qa as z,qb as Wt,rb as Ut,sa as L,sb as Gt,t as ue,ta as ye,tb as b,u as tt,ub as r,v as ge,vb as c,wb as M,z as fe}from"./chunk-V4U76MBR.js";import"./chunk-JJCA6Z7Z.js";var mi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=nt({type:n});static \u0275inj=it({imports:[st]})}return n})();var Li=["*"],Ei=`.mdc-list {
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
`,Ri=["unscopedContent"],Pi=["text"],Ai=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Bi=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Oi=new F("ListOption"),Yt=(()=>{class n{_elementRef=l(L);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=T({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),Fi=(()=>{class n{_elementRef=l(L);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=T({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),zi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=T({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),di=(()=>{class n{_listOption=l(Oi,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||n)};static \u0275dir=T({type:n,hostVars:4,hostBindings:function(e,i){e&2&&x("mdc-list-item__start",i._isAlignedAtStart())("mdc-list-item__end",!i._isAlignedAtStart())}})}return n})(),Ni=(()=>{class n extends di{static \u0275fac=(()=>{let t;return function(i){return(t||(t=z(n)))(i||n)}})();static \u0275dir=T({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[A]})}return n})(),te=(()=>{class n extends di{static \u0275fac=(()=>{let t;return function(i){return(t||(t=z(n)))(i||n)}})();static \u0275dir=T({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[A]})}return n})(),ji=new F("MAT_LIST_CONFIG"),Xt=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=rt(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(rt(t))}_disabled=S(!1);_defaultOptions=l(ji,{optional:!0});static \u0275fac=function(e){return new(e||n)};static \u0275dir=T({type:n,hostVars:1,hostBindings:function(e,i){e&2&&I("aria-disabled",i.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),Vi=(()=>{class n{_elementRef=l(L);_ngZone=l($);_listBase=l(Xt,{optional:!0});_platform=l(It);_hostElement;_isButtonElement;_noopAnimations=ot();_avatars;_icons;set lines(t){this._explicitLines=Re(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=rt(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(rt(t))}_disabled=S(!1);_subscriptions=new O;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){l(Bt).load(Ft);let t=l($t,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ze(this,this._ngZone,this._hostElement,this._platform,l(wt)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(tt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),i=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&e===1;i.classList.toggle("mdc-list-item__primary-text",a),i.classList.toggle("mdc-list-item__secondary-text",!a)}else i.classList.remove("mdc-list-item__primary-text"),i.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=T({type:n,contentQueries:function(e,i,a){if(e&1&&J(a,Ni,4)(a,te,4),e&2){let d;u(d=g())&&(i._avatars=d),u(d=g())&&(i._icons=d)}},hostVars:4,hostBindings:function(e,i){e&2&&(I("aria-disabled",i.disabled)("disabled",i._isButtonElement&&i.disabled||null),x("mdc-list-item--disabled",i.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})();var pi=(()=>{class n extends Vi{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=rt(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=z(n)))(i||n)}})();static \u0275cmp=y({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,i,a){if(e&1&&J(a,Fi,5)(a,Yt,5)(a,zi,5),e&2){let d;u(d=g())&&(i._lines=d),u(d=g())&&(i._titles=d),u(d=g())&&(i._meta=d)}},viewQuery:function(e,i){if(e&1&&K(Ri,5)(Pi,5),e&2){let a;u(a=g())&&(i._unscopedContent=a.first),u(a=g())&&(i._itemText=a.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,i){e&2&&(I("aria-current",i._getAriaCurrent()),x("mdc-list-item--activated",i.activated)("mdc-list-item--with-leading-avatar",i._avatars.length!==0)("mdc-list-item--with-leading-icon",i._icons.length!==0)("mdc-list-item--with-trailing-meta",i._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",i._hasBothLeadingAndTrailing())("_mat-animation-noopable",i._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[A],ngContentSelectors:Bi,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,i){e&1&&(q(Ai),R(0),r(1,"span",1),R(2,1),R(3,2),r(4,"span",2,0),h("cdkObserveContent",function(){return i._updateItemLines(!0)}),R(6,3),c()(),R(7,4),R(8,5),M(9,"div",3))},dependencies:[Ot],encapsulation:2,changeDetection:0})}return n})();var hi=(()=>{class n extends Xt{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(i){return(t||(t=z(n)))(i||n)}})();static \u0275cmp=y({type:n,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[Z([{provide:Xt,useExisting:n}]),A],ngContentSelectors:Li,decls:1,vars:0,template:function(e,i){e&1&&(q(),R(0))},styles:[Ei],encapsulation:2,changeDetection:0})}return n})();var bi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=nt({type:n});static \u0275inj=it({imports:[Ae,je,$e,st,mi]})}return n})();function _i(n){let o=new TextEncoder().encode(n),t="";for(let e of o)t+=String.fromCharCode(e);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function ui(n){let o=n.replace(/-/g,"+").replace(/_/g,"/"),t=atob(o),e=Uint8Array.from(t,i=>i.charCodeAt(0));return new TextDecoder().decode(e)}var ee="cvData",ie="cv",gt=class n{buildLink(o){let t=_i(JSON.stringify(o));return`${this.baseUrl()}cv?${ee}=${t}`}buildUrlLink(o){return`${this.baseUrl()}cv?${ie}=${encodeURIComponent(o.trim())}`}decodeEmbedded(o){return X(JSON.parse(ui(o)))}baseUrl(){return document.baseURI.endsWith("/")?document.baseURI:`${document.baseURI}/`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})};var zt={basics:{fullName:"Alex Carter",title:"Senior Java Backend Engineer",summary:"Senior Java Backend Engineer with 5+ years of experience in building and modernizing scalable enterprise solutions. Expert in Java 21, Spring Boot 3.5, and the AWS ecosystem (ECS, Lambda, Bedrock). Proven track record in architecting AI-native platforms that reduced operational costs by $16,000+ monthly and automated manual efforts by 58%. Specialist in high-load migrations, event-driven architectures, and technical leadership within the Retail, Healthcare, Real Estate and IoT domains.",containsImage:!0,imageURL:"https://ui-avatars.com/api/?name=Alex+Carter&size=256&background=00366d&color=ffffff",contact:{location:"Ukraine, Lviv",github:"@alexcarter",email:"alex.carter@example.com",linkedin:"alex-carter"}},languages:[{name:"Ukrainian",level:"Native"},{name:"English",level:"B2"}],skills:[{category:"Languages",skills:["Java","TypeScript","Angular","Python"]},{category:"Databases",skills:["MySQL","PostgreSQL","Oracle","MongoDB","DynamoDB","Redis"]},{category:"Spring",skills:["Spring Boot","Spring Data JPA","Spring MVC","Spring Security","Spring Cloud","Spring Batch","Spring AOP"]},{category:"AWS",skills:["ECS","Lambda","S3","SQS","SNS","API Gateway","Bedrock","CloudWatch","ECR","Fargate","ELB/ALB"]},{category:"DevOps",skills:["Docker","Kubernetes","Helm","Terraform","Jenkins","GitHub Actions"]},{category:"Messaging",skills:["Apache Kafka","MQTT","RabbitMQ"]},{category:"Architecture",skills:["Microservices","Serverless","Event-driven","REST API","GraphQL"]}],education:[{degree:"Master of Science, Computer Engineering",institution:"Lviv Polytechnic National University",specialty:"Specialized Computer Systems",startDate:"Sep 2021",endDate:"Sep 2022"},{degree:"Bachelor of Science, Computer Engineering",institution:"Lviv Polytechnic National University",specialty:"Specialized Computer Systems",startDate:"Sep 2017",endDate:"Sep 2021"}],employment:[{role:"Senior Software Engineer",company:"EPAM",project:"Enterprise Platform Modernisation and Optimisation",description:"Full-cycle software development, including architecture planning, API design, performance tuning, and legacy system optimization.",startDate:"Sep 2022",endDate:"Present",responsibilities:["Led migration from Java 8/Spring Boot 2.2 to Java 21/Spring Boot 3.4, resolving critical dependency issues","Coordinated integration across 8 teams, ensuring smooth large-scale system transition","Mentored engineers and improved code quality, test coverage, and maintainability","Built LLM-based optimization solution (GPT-4o) saving $16,000+/month","Designed scalable data processing solutions and contributed to Spark jobs processing 4M records"]},{role:"Senior Software Engineer",company:"GazdAI (self project)",project:"Real estate platform with AI-core and automated processes",description:"Architected and deployed a cost-optimized, AI-native platform on AWS, leveraging event-driven systems and automated pipelines.",startDate:"Dec 2025",endDate:"Mar 2026",responsibilities:["Led AWS cloud architecture (Docker, Terraform, Fargate), delivering a cost-efficient MVP","Built AI-native platform core with event-driven architecture","Reduced AI processing costs by 35% via image deduplication (perceptual hashing)","Cut LLM usage costs through search optimization and caching"]},{role:"Team Lead",company:"EPAM Systems",project:"AWS Bedrock AI Scheduling and Management Agent",description:"Led a cross-functional team during an internal EPAM AI Marathon to build an AWS Bedrock\u2013powered AI Scheduling and Management Agent.",startDate:"Jul 2025",endDate:"Aug 2025",responsibilities:["Led a technical team (1 DevOps, 4 Software Engineers)","Delivered a solution that reduced manual scheduling efforts by 58%","Coordinated team workflows and ensured timely delivery of a functional MVP"]}]};function gi(n,o){return`You are a resume parser. Convert the resume text below into a single JSON object.

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
${n}
"""`}var Nt=class n{async pdfToText(o){let t=await import("./chunk-VJQ23XIJ.js");t.GlobalWorkerOptions.workerSrc=new URL("pdf.worker.min.mjs",document.baseURI).toString();let e=await o.arrayBuffer(),i=await t.getDocument({data:e}).promise,a=[];for(let d=1;d<=i.numPages;d++){let vt=(await(await i.getPage(d)).getTextContent()).items.map(xt=>"str"in xt?xt.str:"").join(" ");a.push(vt)}return a.join(`
`)}async docxToText(o){let t=await import("./chunk-NYLLO4PB.js"),e=await o.arrayBuffer();return(await t.extractRawText({arrayBuffer:e})).value}static \u0275fac=function(t){return new(t||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})};var Y=class extends Error{constructor(o){super(o),this.name="ResumeImportError"}},ft=class n{http=l(Le);gemini=l(ni);extractor=l(Nt);settings=l(ii);fromJson(o){let t;try{t=JSON.parse(o)}catch{throw new Y("The file does not contain valid JSON.")}return X(t)}async fromUrl(o){let t;try{t=await _e(this.http.get(o.trim(),{responseType:"text"}))}catch{throw new Y("Could not fetch the URL. Make sure it is public and CORS-accessible (e.g. a GitHub raw link).")}return this.fromJson(t)}async fromText(o){if(!o.trim())throw new Y("No text to import.");let t=Xe[this.settings.cvLanguage()],e=await this.gemini.generateText(gi(o,t),{jsonOutput:!0,temperature:.1}),i=ai(e);if(i===null)throw new Y("Gemini did not return parseable resume JSON.");return X(i)}async fromFile(o){let t=this.extensionOf(o.name);if(t==="json")return this.fromJson(await o.text());if(t==="txt")return this.fromText(await o.text());if(t==="pdf")return this.fromText(await this.extractor.pdfToText(o));if(t==="docx")return this.fromText(await this.extractor.docxToText(o));throw new Y(`Unsupported file type: .${t}. Use JSON, TXT, PDF, or DOCX.`)}extensionOf(o){return o.split(".").pop()?.toLowerCase()??""}static \u0275fac=function(t){return new(t||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})};var se=["*"];function Ui(n,o){n&1&&R(0)}var Gi=["tabListContainer"],$i=["tabList"],qi=["tabListInner"],Ji=["nextPaginator"],Ki=["previousPaginator"],Zi=["content"];function Xi(n,o){}var Yi=["tabBodyWrapper"],tn=["tabHeader"];function en(n,o){}function nn(n,o){if(n&1&&Et(0,en,0,0,"ng-template",12),n&2){let t=p().$implicit;b("cdkPortalOutlet",t.templateLabel)}}function an(n,o){if(n&1&&m(0),n&2){let t=p().$implicit;_(t.textLabel)}}function on(n,o){if(n&1){let t=D();r(0,"div",7,2),h("click",function(){let i=f(t),a=i.$implicit,d=i.$index,B=p(),j=at(1);return v(B._handleClick(a,j,d))})("cdkFocusChange",function(i){let a=f(t).$index,d=p();return v(d._tabFocusChanged(i,a))}),M(2,"span",8)(3,"div",9),r(4,"span",10)(5,"span",11),k(6,nn,1,1,null,12)(7,an,1,1),c()()()}if(n&2){let t=o.$implicit,e=o.$index,i=at(1),a=p();Rt(t.labelClass),x("mdc-tab--active",a.selectedIndex===e),b("id",a._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",a.fitInkBarToContent),I("tabIndex",a._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",a._tabs.length)("aria-controls",a._getTabContentId(e))("aria-selected",a.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),s(3),b("matRippleTrigger",i)("matRippleDisabled",t.disabled||a.disableRipple),s(3),w(t.templateLabel?6:7)}}function rn(n,o){n&1&&R(0)}function sn(n,o){if(n&1){let t=D();r(0,"mat-tab-body",13),h("_onCentered",function(){f(t);let i=p();return v(i._removeTabBodyWrapperHeight())})("_onCentering",function(i){f(t);let a=p();return v(a._setTabBodyWrapperHeight(i))})("_beforeCentering",function(i){f(t);let a=p();return v(a._bodyCentered(i))}),c()}if(n&2){let t=o.$implicit,e=o.$index,i=p();Rt(t.bodyClass),b("id",i._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",i.animationDuration)("preserveContent",i.preserveContent),I("tabindex",i.contentTabIndex!=null&&i.selectedIndex===e?i.contentTabIndex:null)("aria-labelledby",i._getTabLabelId(t,e))("aria-hidden",i.selectedIndex!==e)}}var cn=new F("MatTabContent"),ln=(()=>{class n{template=l(Dt);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=T({type:n,selectors:[["","matTabContent",""]],features:[Z([{provide:cn,useExisting:n}])]})}return n})(),mn=new F("MatTabLabel"),yi=new F("MAT_TAB"),dn=(()=>{class n extends Ze{_closestTab=l(yi,{optional:!0});static \u0275fac=(()=>{let t;return function(i){return(t||(t=z(n)))(i||n)}})();static \u0275dir=T({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Z([{provide:mn,useExisting:n}]),A]})}return n})(),ki=new F("MAT_TAB_GROUP"),ce=(()=>{class n{_viewContainerRef=l(ke);_closestTabGroup=l(ki,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new yt;position=null;origin=null;isActive=!1;constructor(){l(Bt).load(Ft)}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Ke(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["mat-tab"]],contentQueries:function(e,i,a){if(e&1&&J(a,dn,5)(a,ln,7,Dt),e&2){let d;u(d=g())&&(i.templateLabel=d.first),u(d=g())&&(i._explicitContent=d.first)}},viewQuery:function(e,i){if(e&1&&K(Dt,7),e&2){let a;u(a=g())&&(i._implicitContent=a.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,i){e&2&&I("id",null)},inputs:{disabled:[2,"disabled","disabled",P],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Z([{provide:yi,useExisting:n}]),Qt],ngContentSelectors:se,decls:1,vars:0,template:function(e,i){e&1&&(q(),we(0,Ui,1,0,"ng-template"))},encapsulation:2})}return n})(),ne="mdc-tab-indicator--active",fi="mdc-tab-indicator--no-transition",ae=class{_items;_currentItem;constructor(o){this._items=o}hide(){this._items.forEach(o=>o.deactivateInkBar()),this._currentItem=void 0}alignToElement(o){let t=this._items.find(i=>i.elementRef.nativeElement===o),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let i=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(i),this._currentItem=t}}},pn=(()=>{class n{_elementRef=l(L);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(ne);return}let i=e.getBoundingClientRect(),a=t.width/i.width,d=t.left-i.left;e.classList.add(fi),this._inkBarContentElement.style.setProperty("transform",`translateX(${d}px) scaleX(${a})`),e.getBoundingClientRect(),e.classList.remove(fi),e.classList.add(ne),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(ne)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),i=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",i.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||n)};static \u0275dir=T({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",P]}})}return n})();var wi=(()=>{class n extends pn{elementRef=l(L);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(i){return(t||(t=z(n)))(i||n)}})();static \u0275dir=T({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,i){e&2&&(I("aria-disabled",!!i.disabled),x("mat-mdc-tab-disabled",i.disabled))},inputs:{disabled:[2,"disabled","disabled",P]},features:[A]})}return n})(),vi={passive:!0},hn=650,bn=100,_n=(()=>{class n{_elementRef=l(L);_changeDetectorRef=l(Tt);_viewportRuler=l(Je);_dir=l(Jt,{optional:!0});_ngZone=l($);_platform=l(It);_sharedResizeObserver=l(oi);_injector=l(wt);_renderer=l(Lt);_animationsDisabled=ot();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new yt;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new yt;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new E;indexFocused=new E;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),vi),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),vi))}ngAfterContentInit(){let t=this._dir?this._dir.change:be("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(fe(32),kt(this._destroyed)),i=this._viewportRuler.change(150).pipe(kt(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Oe(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),St(a,{injector:this._injector}),tt(t,i,e,this._items.changes,this._itemsResized()).pipe(kt(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(d=>{this.indexFocused.emit(d),this._setTabFocus(d)})}_itemsResized(){return typeof ResizeObserver!="function"?he:this._items.changes.pipe(Mt(this._items),xe(t=>new pe(e=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(a=>e.next(a));return t.forEach(a=>i.observe(a.elementRef.nativeElement)),()=>{i.disconnect()}}))),ve(1),ge(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Be(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,i=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:d}=e.elementRef.nativeElement,B,j;this._getLayoutDirection()=="ltr"?(B=a,j=B+d):(j=this._tabListInner.nativeElement.offsetWidth-a,B=j-d);let vt=this.scrollDistance,xt=this.scrollDistance+i;B<vt?this.scrollDistance-=vt-B:j>xt&&(this.scrollDistance+=Math.min(j-xt,B-vt))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,i=t-e>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),ue(hn,bn).pipe(kt(tt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:a}=this._scrollHeader(t);(a===0||a>=i)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||n)};static \u0275dir=T({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",P],selectedIndex:[2,"selectedIndex","selectedIndex",At]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return n})(),un=(()=>{class n extends _n{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new ae(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=z(n)))(i||n)}})();static \u0275cmp=y({type:n,selectors:[["mat-tab-header"]],contentQueries:function(e,i,a){if(e&1&&J(a,wi,4),e&2){let d;u(d=g())&&(i._items=d)}},viewQuery:function(e,i){if(e&1&&K(Gi,7)($i,7)(qi,7)(Ji,5)(Ki,5),e&2){let a;u(a=g())&&(i._tabListContainer=a.first),u(a=g())&&(i._tabList=a.first),u(a=g())&&(i._tabListInner=a.first),u(a=g())&&(i._nextPaginator=a.first),u(a=g())&&(i._previousPaginator=a.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,i){e&2&&x("mat-mdc-tab-header-pagination-controls-enabled",i._showPaginationControls)("mat-mdc-tab-header-rtl",i._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",P]},features:[A],ngContentSelectors:se,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,i){e&1&&(q(),r(0,"div",5,0),h("click",function(){return i._handlePaginatorClick("before")})("mousedown",function(d){return i._handlePaginatorPress("before",d)})("touchend",function(){return i._stopInterval()}),M(2,"div",6),c(),r(3,"div",7,1),h("keydown",function(d){return i._handleKeydown(d)}),r(5,"div",8,2),h("cdkObserveContent",function(){return i._onContentChanges()}),r(7,"div",9,3),R(9),c()()(),r(10,"div",10,4),h("mousedown",function(d){return i._handlePaginatorPress("after",d)})("click",function(){return i._handlePaginatorClick("after")})("touchend",function(){return i._stopInterval()}),M(12,"div",6),c()),e&2&&(x("mat-mdc-tab-header-pagination-disabled",i._disableScrollBefore),b("matRippleDisabled",i._disableScrollBefore||i.disableRipple),s(3),x("_mat-animation-noopable",i._animationsDisabled),s(2),I("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby||null),s(5),x("mat-mdc-tab-header-pagination-disabled",i._disableScrollAfter),b("matRippleDisabled",i._disableScrollAfter||i.disableRipple))},dependencies:[qt,Ot],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return n})(),gn=new F("MAT_TABS_CONFIG"),xi=(()=>{class n extends Kt{_host=l(oe);_ngZone=l($);_centeringSub=O.EMPTY;_leavingSub=O.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Mt(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=T({type:n,selectors:[["","matTabBodyHost",""]],features:[A]})}return n})(),oe=(()=>{class n{_elementRef=l(L);_dir=l(Jt,{optional:!0});_ngZone=l($);_injector=l(wt);_renderer=l(Lt);_diAnimationsDisabled=ot();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=O.EMPTY;_position;_previousPosition;_onCentering=new E;_beforeCentering=new E;_afterLeavingCenter=new E;_onCentered=new E(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=l(Tt);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),St(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),i.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),St(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["mat-tab-body"]],viewQuery:function(e,i){if(e&1&&K(xi,5)(Zi,5),e&2){let a;u(a=g())&&(i._portalHost=a.first),u(a=g())&&(i._contentElement=a.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,i){e&2&&I("inert",i._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,i){e&1&&(r(0,"div",1,0),Et(2,Xi,0,0,"ng-template",2),c()),e&2&&x("mat-tab-body-content-left",i._position==="left")("mat-tab-body-content-right",i._position==="right")("mat-tab-body-content-can-animate",i._position==="center"||i._previousPosition==="center")},dependencies:[xi,qe],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return n})(),Ci=(()=>{class n{_elementRef=l(L);_changeDetectorRef=l(Tt);_ngZone=l($);_tabsSubscription=O.EMPTY;_tabLabelSubscription=O.EMPTY;_tabBodySubscription=O.EMPTY;_diAnimationsDisabled=ot();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new ye;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new E;focusChange=new E;animationDone=new E;selectedTabChange=new E(!0);_groupId;_isServer=!l(It).isBrowser;constructor(){let t=l(gn,{optional:!0});this._groupId=l(Fe).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let i=this._tabBodyWrapper.nativeElement;i.style.minHeight=i.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((i,a)=>i.isActive=a===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,i)=>{e.position=i-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),i;for(let a=0;a<e.length;a++)if(e[a].isActive){this._indexToSelect=this._selectedIndex=a,this._lastFocusedTabIndex=null,i=e[a];break}!i&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Mt(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new re;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=tt(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,i){e.focusIndex=i,t.disabled||(this.selectedIndex=i)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,i)=>e._setActiveClass(i===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["mat-tab-group"]],contentQueries:function(e,i,a){if(e&1&&J(a,ce,5),e&2){let d;u(d=g())&&(i._allTabs=d)}},viewQuery:function(e,i){if(e&1&&K(Yi,5)(tn,5)(oe,5),e&2){let a;u(a=g())&&(i._tabBodyWrapper=a.first),u(a=g())&&(i._tabHeader=a.first),u(a=g())&&(i._tabBodies=a)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(e,i){e&2&&(I("mat-align-tabs",i.alignTabs),Rt("mat-"+(i.color||"primary")),Me("--mat-tab-animation-duration",i.animationDuration),x("mat-mdc-tab-group-dynamic-height",i.dynamicHeight)("mat-mdc-tab-group-inverted-header",i.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",i.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",P],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",P],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",P],selectedIndex:[2,"selectedIndex","selectedIndex",At],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",At],disablePagination:[2,"disablePagination","disablePagination",P],disableRipple:[2,"disableRipple","disableRipple",P],preserveContent:[2,"preserveContent","preserveContent",P],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Z([{provide:ki,useExisting:n}])],ngContentSelectors:se,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,i){e&1&&(q(),r(0,"mat-tab-header",3,0),h("indexFocused",function(d){return i._focusChanged(d)})("selectFocusedIndex",function(d){return i.selectedIndex=d}),Ut(2,on,8,17,"div",4,Wt),c(),k(4,rn,1,0),r(5,"div",5,1),Ut(7,sn,1,10,"mat-tab-body",6,Wt),c()),e&2&&(b("selectedIndex",i.selectedIndex||0)("disableRipple",i.disableRipple)("disablePagination",i.disablePagination),Ce("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby),s(2),Gt(i._tabs),s(2),w(i._isServer?4:-1),s(),x("_mat-animation-noopable",i._animationsDisabled()),s(2),Gt(i._tabs))},dependencies:[un,wi,Pe,qt,Kt,oe],styles:[`.mdc-tab {
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
`],encapsulation:2})}return n})(),re=class{index;tab};var Ti=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=nt({type:n});static \u0275inj=it({imports:[st]})}return n})();function vn(n,o){n&1&&M(0,"mat-progress-bar",1)}var jt=class n{importService=l(ft);snackBar=l(U);i18n=l(G);imported=Ct();accept=Zt.acceptedExtensions.join(",");urlInput=S("");textInput=S("");busy=S(!1);async onFileSelected(o){let t=o.target,e=t.files?.[0];if(t.value="",!!e){if(e.size>Zt.maxFileSizeBytes){this.fail(this.i18n.t("import.tooLarge"));return}await this.run(()=>this.importService.fromFile(e))}}async importUrl(){if(!this.urlInput().trim()){this.fail(this.i18n.t("import.enterUrl"));return}await this.run(()=>this.importService.fromUrl(this.urlInput()))}async importText(){if(!this.textInput().trim()){this.fail(this.i18n.t("import.pasteText"));return}await this.run(()=>this.importService.fromText(this.textInput()))}loadSample(){this.emit(zt)}async run(o){this.busy.set(!0);try{this.emit(await o())}catch(t){this.fail(t instanceof Error?t.message:"Import failed.")}finally{this.busy.set(!1)}}emit(o){this.imported.emit(o),this.snackBar.open(this.i18n.t("import.imported"),"OK",{duration:2500})}fail(o){this.snackBar.open(o,"Dismiss",{duration:5e3})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["app-import-panel"]],outputs:{imported:"imported"},decls:43,vars:20,consts:[["fileInput",""],["mode","indeterminate"],[3,"label"],[1,"flex","flex-col","gap-3","p-4"],[1,"field-hint"],[1,"form-actions"],["matButton","filled",3,"click","disabled"],["matButton","",3,"click","disabled"],["type","file",1,"hidden",3,"change","accept"],["appearance","outline",1,"form-field-full"],["matInput","","placeholder","https://raw.githubusercontent.com/user/repo/main/resume.json",3,"ngModelChange","ngModel"],["matInput","","rows","8",3,"ngModelChange","ngModel"]],template:function(t,e){if(t&1){let i=D();k(0,vn,1,0,"mat-progress-bar",1),r(1,"mat-tab-group")(2,"mat-tab",2)(3,"div",3)(4,"p",4),m(5),c(),r(6,"div",5)(7,"button",6),h("click",function(){f(i);let d=at(16);return v(d.click())}),r(8,"mat-icon"),m(9,"upload_file"),c(),m(10),c(),r(11,"button",7),h("click",function(){return e.loadSample()}),r(12,"mat-icon"),m(13,"auto_awesome"),c(),m(14),c()(),r(15,"input",8,0),h("change",function(d){return e.onFileSelected(d)}),c()()(),r(17,"mat-tab",2)(18,"div",3)(19,"p",4),m(20),c(),r(21,"mat-form-field",9)(22,"mat-label"),m(23),c(),r(24,"input",10),h("ngModelChange",function(d){return e.urlInput.set(d)}),c()(),r(25,"div",5)(26,"button",6),h("click",function(){return e.importUrl()}),r(27,"mat-icon"),m(28,"cloud_download"),c(),m(29),c()()()(),r(30,"mat-tab",2)(31,"div",3)(32,"p",4),m(33),c(),r(34,"mat-form-field",9)(35,"mat-label"),m(36),c(),r(37,"textarea",11),h("ngModelChange",function(d){return e.textInput.set(d)}),c()(),r(38,"div",5)(39,"button",6),h("click",function(){return e.importText()}),r(40,"mat-icon"),m(41,"auto_fix_high"),c(),m(42),c()()()()()}t&2&&(w(e.busy()?0:-1),s(2),b("label",e.i18n.t("import.tab.file")),s(3),_(e.i18n.t("import.file.hint")),s(2),b("disabled",e.busy()),s(3),C(" ",e.i18n.t("import.choose")," "),s(),b("disabled",e.busy()),s(3),C(" ",e.i18n.t("import.loadSample")," "),s(),b("accept",e.accept),s(2),b("label",e.i18n.t("import.tab.url")),s(3),_(e.i18n.t("import.url.hint")),s(3),_(e.i18n.t("import.url.label")),s(),b("ngModel",e.urlInput()),s(2),b("disabled",e.busy()),s(3),C(" ",e.i18n.t("import.url.button")," "),s(),b("label",e.i18n.t("import.tab.text")),s(3),_(e.i18n.t("import.text.hint")),s(3),_(e.i18n.t("import.text.label")),s(),b("ngModel",e.textInput()),s(2),b("disabled",e.busy()),s(3),C(" ",e.i18n.t("import.text.button")," "))},dependencies:[dt,ct,lt,mt,Ti,ce,Ci,bt,ht,pt,ut,_t,H,V,W,Q,ci,si],encapsulation:2,changeDetection:0})};var Vt=class n{snackBar=l(U);i18n=l(G);resume=Pt.required();applied=Ct();deleted=Ct();draft=Se(()=>JSON.stringify(this.resume(),null,2));apply(){let o;try{o=JSON.parse(this.draft())}catch{this.snackBar.open(this.i18n.t("cv.editor.invalidJson"),"Dismiss",{duration:5e3});return}try{this.applied.emit(X(o)),this.snackBar.open(this.i18n.t("cv.editor.applied"),"OK",{duration:2500})}catch(t){let e=t instanceof Error?t.message:this.i18n.t("cv.editor.invalidJson");this.snackBar.open(e,"Dismiss",{duration:5e3})}}remove(){this.deleted.emit()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["app-cv-json-editor"]],inputs:{resume:[1,"resume"]},outputs:{applied:"applied",deleted:"deleted"},decls:16,vars:5,consts:[[1,"flex","flex-col","gap-3"],[1,"field-hint"],["appearance","outline",1,"form-field-full"],["matInput","","rows","18","spellcheck","false",1,"cv-json-area",3,"ngModelChange","ngModel"],[1,"form-actions"],["matButton","filled",3,"click"],["matButton","",3,"click"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"p",1),m(2),c(),r(3,"mat-form-field",2)(4,"mat-label"),m(5),c(),r(6,"textarea",3),h("ngModelChange",function(a){return e.draft.set(a)}),c()(),r(7,"div",4)(8,"button",5),h("click",function(){return e.apply()}),r(9,"mat-icon"),m(10,"check"),c(),m(11),c(),r(12,"button",6),h("click",function(){return e.remove()}),r(13,"mat-icon"),m(14,"delete"),c(),m(15),c()()()),t&2&&(s(2),_(e.i18n.t("cv.editor.jsonHint")),s(3),_(e.i18n.t("cv.editor.jsonTitle")),s(),b("ngModel",e.draft()),s(5),C(" ",e.i18n.t("cv.editor.apply")," "),s(4),C(" ",e.i18n.t("cv.editor.delete")," "))},dependencies:[dt,ct,lt,mt,bt,ht,pt,ut,_t,H,V,W,Q],encapsulation:2,changeDetection:0})};function xn(n,o){if(n&1){let t=D();r(0,"mat-form-field",6)(1,"mat-label"),m(2),c(),M(3,"input",11),r(4,"button",12),h("click",function(){f(t);let i=p();return v(i.copy(i.embedLink()))}),r(5,"mat-icon"),m(6,"content_copy"),c()()()}if(n&2){let t=p();s(2),_(t.i18n.t("cv.share.title")),s(),b("value",t.embedLink()),s(),I("aria-label",t.i18n.t("cv.share.copy"))}}function yn(n,o){if(n&1){let t=D();r(0,"mat-form-field",6)(1,"mat-label"),m(2),c(),M(3,"input",11),r(4,"button",12),h("click",function(){f(t);let i=p();return v(i.copy(i.urlLink()))}),r(5,"mat-icon"),m(6,"content_copy"),c()()()}if(n&2){let t=p();s(2),_(t.i18n.t("cv.share.title")),s(),b("value",t.urlLink()),s(),I("aria-label",t.i18n.t("cv.share.copy"))}}var Ht=class n{share=l(gt);snackBar=l(U);i18n=l(G);resume=Pt.required();embedLink=S("");jsonUrl=S("");urlLink=S("");generateEmbed(){this.embedLink.set(this.share.buildLink(this.resume()))}generateUrl(){this.jsonUrl().trim()&&this.urlLink.set(this.share.buildUrlLink(this.jsonUrl()))}async copy(o){if(o)try{await navigator.clipboard.writeText(o),this.snackBar.open(this.i18n.t("cv.share.copied"),"OK",{duration:2500})}catch{}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["app-cv-share-panel"]],inputs:{resume:[1,"resume"]},decls:28,vars:11,consts:[[1,"flex","flex-col","gap-6"],[1,"flex","flex-col","gap-3"],[1,"accent"],[1,"muted"],[1,"form-actions"],["matButton","filled",3,"click"],["appearance","outline",1,"form-field-full"],[1,"divider-line"],[1,"field-hint"],["matInput","","placeholder","https://raw.githubusercontent.com/user/repo/main/resume.json",3,"ngModelChange","ngModel"],["matButton","filled",3,"click","disabled"],["matInput","","readonly","",3,"value"],["matIconButton","","matSuffix","",3,"click"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"section",1)(2,"h3",2),m(3),c(),r(4,"p",3),m(5),c(),r(6,"div",4)(7,"button",5),h("click",function(){return e.generateEmbed()}),r(8,"mat-icon"),m(9,"link"),c(),m(10),c()(),k(11,xn,7,3,"mat-form-field",6),c(),M(12,"hr",7),r(13,"section",1)(14,"h3",2),m(15),c(),r(16,"p",8),m(17),c(),r(18,"mat-form-field",6)(19,"mat-label"),m(20),c(),r(21,"input",9),h("ngModelChange",function(a){return e.jsonUrl.set(a)}),c()(),r(22,"div",4)(23,"button",10),h("click",function(){return e.generateUrl()}),r(24,"mat-icon"),m(25,"link"),c(),m(26),c()(),k(27,yn,7,3,"mat-form-field",6),c()()),t&2&&(s(3),_(e.i18n.t("cv.share.embedTitle")),s(2),_(e.i18n.t("cv.share.desc")),s(5),C(" ",e.i18n.t("cv.share.generate")," "),s(),w(e.embedLink()?11:-1),s(4),_(e.i18n.t("cv.share.urlTitle")),s(2),_(e.i18n.t("cv.share.urlHint")),s(3),_(e.i18n.t("cv.share.urlInput")),s(),b("ngModel",e.jsonUrl()),s(2),b("disabled",!e.jsonUrl().trim()),s(3),C(" ",e.i18n.t("cv.share.urlGenerate")," "),s(),w(e.urlLink()?27:-1))},dependencies:[dt,ct,lt,mt,bt,ht,pt,ri,ut,_t,H,V,Ne,W,Q],encapsulation:2,changeDetection:0})};var kn=["cvDoc"];function wn(n,o){if(n&1&&M(0,"app-cv-document",6,0),n&2){let t=p(2);b("resume",t.resume())}}function Cn(n,o){if(n&1){let t=D();r(0,"div",4)(1,"button",5),h("click",function(){f(t);let i=p();return v(i.closeSharedView())}),r(2,"mat-icon"),m(3,"close"),c(),m(4),c()(),k(5,wn,2,1,"app-cv-document",6)}if(n&2){let t=p();s(4),C(" ",t.i18n.t("cv.closeView")," "),s(),w(t.hasResume()?5:-1)}}function Tn(n,o){if(n&1){let t=D();r(0,"mat-card",12)(1,"mat-card-header")(2,"mat-card-title"),m(3),c()(),r(4,"mat-card-content",13)(5,"app-cv-json-editor",16),h("applied",function(i){f(t);let a=p(3);return v(a.onImported(i))})("deleted",function(){f(t);let i=p(3);return v(i.clear())}),c()()()}if(n&2){let t=p(3);s(3),_(t.i18n.t("cv.editor.jsonTitle")),s(2),b("resume",t.resume())}}function In(n,o){if(n&1){let t=D();r(0,"mat-card",12)(1,"mat-card-header")(2,"mat-card-title"),m(3),c(),r(4,"mat-card-subtitle"),m(5),c()(),r(6,"mat-card-content",13)(7,"div",4)(8,"button",14),h("click",function(){f(t);let i=p(2);return v(i.createNew())}),r(9,"mat-icon"),m(10,"note_add"),c(),m(11),c()(),r(12,"app-import-panel",15),h("imported",function(i){f(t);let a=p(2);return v(a.onImported(i))}),c()()(),k(13,Tn,6,2,"mat-card",12)}if(n&2){let t=p(2);s(3),_(t.i18n.t("cv.nav.editor")),s(2),_(t.i18n.t("cv.getStarted.subtitle")),s(6),C(" ",t.i18n.t("cv.createNew")," "),s(2),w(t.hasResume()?13:-1)}}function Mn(n,o){if(n&1){let t=D();r(0,"div",17)(1,"button",5),h("click",function(){f(t);let i=p(3);return v(i.exportPdf())}),r(2,"mat-icon"),m(3,"picture_as_pdf"),c(),m(4),c(),r(5,"button",19),h("click",function(){f(t);let i=p(3);return v(i.exportJson())}),r(6,"mat-icon"),m(7,"data_object"),c(),m(8),c(),r(9,"button",19),h("click",function(){f(t);let i=p(3);return v(i.clear())}),r(10,"mat-icon"),m(11,"delete_outline"),c(),m(12),c()()}if(n&2){let t=p(3);s(4),C(" ",t.i18n.t("cv.exportPdf")," "),s(4),C(" ",t.i18n.t("cv.exportJson")," "),s(4),C(" ",t.i18n.t("cv.clear")," ")}}function Sn(n,o){if(n&1&&(r(0,"p",18),m(1),c()),n&2){let t=p(3);s(),_(t.i18n.t("cv.getStarted.title"))}}function Dn(n,o){if(n&1&&(r(0,"mat-card",12)(1,"mat-card-header")(2,"mat-card-title"),m(3),c()(),r(4,"mat-card-content",13),k(5,Mn,13,3,"div",17)(6,Sn,2,1,"p",18),c()()),n&2){let t=p(2);s(3),_(t.i18n.t("cv.export.title")),s(2),w(t.hasResume()?5:6)}}function Ln(n,o){if(n&1&&M(0,"app-cv-share-panel",6),n&2){let t=p(3);b("resume",t.resume())}}function En(n,o){if(n&1&&(r(0,"p",18),m(1),c()),n&2){let t=p(3);s(),_(t.i18n.t("cv.getStarted.title"))}}function Rn(n,o){if(n&1&&(r(0,"mat-card",12)(1,"mat-card-header")(2,"mat-card-title"),m(3),c()(),r(4,"mat-card-content",13),k(5,Ln,1,1,"app-cv-share-panel",6)(6,En,2,1,"p",18),c()()),n&2){let t=p(2);s(3),_(t.i18n.t("cv.share.title")),s(2),w(t.hasResume()?5:6)}}function Pn(n,o){if(n&1&&M(0,"app-cv-document",6,0),n&2){let t=p(2);b("resume",t.resume())}}function An(n,o){if(n&1){let t=D();r(0,"div",3)(1,"aside",7)(2,"mat-nav-list")(3,"a",8),h("click",function(){f(t);let i=p();return v(i.select("editor"))}),r(4,"mat-icon",9),m(5,"edit_document"),c(),r(6,"span",10),m(7),c()(),r(8,"a",8),h("click",function(){f(t);let i=p();return v(i.select("export"))}),r(9,"mat-icon",9),m(10,"download"),c(),r(11,"span",10),m(12),c()(),r(13,"a",8),h("click",function(){f(t);let i=p();return v(i.select("share"))}),r(14,"mat-icon",9),m(15,"share"),c(),r(16,"span",10),m(17),c()()()(),r(18,"div",11),k(19,In,14,4)(20,Dn,7,2,"mat-card",12)(21,Rn,7,2,"mat-card",12),k(22,Pn,2,1,"app-cv-document",6),c()()}if(n&2){let t,e=p();s(3),x("cv-nav-active",e.section()==="editor"),s(4),_(e.i18n.t("cv.nav.editor")),s(),x("cv-nav-active",e.section()==="export"),s(4),_(e.i18n.t("cv.nav.export")),s(),x("cv-nav-active",e.section()==="share"),s(4),_(e.i18n.t("cv.nav.share")),s(2),w((t=e.section())==="editor"?19:t==="export"?20:t==="share"?21:-1),s(3),w(e.hasResume()?22:-1)}}var Di=class n{repository=l(Ye);exporter=l(ti);printer=l(ei);shareService=l(gt);importService=l(ft);route=l(Ee);snackBar=l(U);i18n=l(G);cvDoc=De("cvDoc",{read:L});resume=this.repository.resume;hasResume=this.repository.hasResume;section=S("editor");sharedView=S(!1);constructor(){this.loadSharedFromQuery()}select(o){this.section.set(o)}closeSharedView(){this.sharedView.set(!1)}onImported(o){this.repository.set(o),this.sharedView.set(!1)}createNew(){this.repository.set(zt),this.sharedView.set(!1),this.section.set("editor")}exportJson(){let o=this.resume();o&&this.exporter.downloadJson(o)}exportPdf(){let o=this.cvDoc()?.nativeElement;o&&this.printer.print(o)}clear(){this.repository.clear()}loadSharedFromQuery(){let o=this.route.snapshot.queryParamMap,t=o.get(ee),e=o.get(ie);if(t){try{this.repository.set(this.shareService.decodeEmbedded(t)),this.sharedView.set(!0),this.notifyShared()}catch{this.notifyShareError()}return}e&&this.importService.fromUrl(e).then(i=>{this.repository.set(i),this.sharedView.set(!0),this.notifyShared()}).catch(()=>this.notifyShareError())}notifyShared(){this.snackBar.open(this.i18n.t("cv.shared.loaded"),"OK",{duration:2500})}notifyShareError(){this.snackBar.open(this.i18n.t("cv.shared.error"),"Dismiss",{duration:5e3})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["app-resume-workspace-page"]],viewQuery:function(t,e){t&1&&Te(e.cvDoc,kn,5,L),t&2&&Ie()},decls:5,vars:2,consts:[["cvDoc",""],[1,"page-header"],[1,"page-title"],[1,"cv-workspace"],[1,"form-actions","mb-4"],["matButton","filled",3,"click"],[3,"resume"],[1,"cv-workspace-nav","surface-card"],["mat-list-item","",3,"click"],["matListItemIcon",""],["matListItemTitle",""],[1,"cv-workspace-content"],[1,"mb-6"],[1,"pt-4"],["matButton","tonal",3,"click"],[3,"imported"],[3,"applied","deleted","resume"],[1,"form-actions"],[1,"muted"],["matButton","",3,"click"]],template:function(t,e){t&1&&(r(0,"div",1)(1,"h1",2),m(2),c()(),k(3,Cn,6,2)(4,An,23,11,"div",3)),t&2&&(s(2),_(e.i18n.t("cv.title")),s(),w(e.sharedView()?3:4))},dependencies:[Ge,Ve,Qe,Ue,We,He,H,V,W,Q,bi,hi,pi,te,Yt,jt,li,Vt,Ht],encapsulation:2,changeDetection:0})};export{Di as ResumeWorkspacePage};
