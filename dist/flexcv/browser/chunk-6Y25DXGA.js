import{a as X,b as Xe,d as Ye,e as ti,g as ii,h as ni,i as ri,j as si,k as ci}from"./chunk-TTIZRAYM.js";import{a as Le}from"./chunk-DEGL7FKW.js";import{c as Ue}from"./chunk-2X3O45DA.js";import{A as G,B as ei,C as ai,D as ct,E as oi,H as lt,I as mt,L as dt,M as pt,a as je,b as He,c as Qe,d as Ve,f as We,g as Ge,h as At,k as Bt,m as Ot,o as Ft,p as qe,q as $e,s as Je,t as Ke,u as Kt}from"./chunk-XWI7B63L.js";import{$ as Zt,I as ot,K as rt,L as Fe,M as qt,N as $t,O as Pt,P as ze,Q as Jt,R as st,S as Ne,T as H,U as Q,V,W,ca as Ze,da as U,g as De,k as xt,l as Ee,n as Re,o as Et,s as Rt,t as Pe,v as Ae,x as Be,y as Oe}from"./chunk-O6QYUZYS.js";import{$ as v,Ab as P,Cb as p,Db as h,Eb as $,Fb as E,Gb as J,Hb as K,I as fe,Ib as u,J as kt,Jb as g,K as ve,L as ft,Lb as Ce,Mb as Te,Na as s,Nb as at,Ob as Ie,Pb as f,Qb as Mt,R as et,Rb as d,S as it,Sa as wt,Sb as _,Ta as Ct,Tb as I,U as F,Va as Tt,W as l,Ya as xe,Yb as Z,a as O,aa as y,ab as x,bb as nt,c as de,ca as vt,cb as k,cc as Me,d as gt,db as A,eb as It,ec as St,f as pe,fb as ke,fc as Dt,ga as D,gc as Se,h as he,ha as q,ic as yt,kc as R,l as be,la as L,lb as we,lc as Lt,mb as w,nb as C,ob as T,pa as Vt,qa as z,qb as Wt,rb as Gt,sa as M,sb as Ut,t as _e,ta as ye,tb as b,u as tt,ub as r,v as ue,vb as c,wb as S,z as ge}from"./chunk-V4U76MBR.js";import"./chunk-JJCA6Z7Z.js";var li=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=nt({type:n});static \u0275inj=it({imports:[st]})}return n})();var Di=["*"],Li=`.mdc-list {
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
`,Ei=["unscopedContent"],Ri=["text"],Pi=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Ai=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Bi=new F("ListOption"),Yt=(()=>{class n{_elementRef=l(M);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),Oi=(()=>{class n{_elementRef=l(M);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),Fi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),mi=(()=>{class n{_listOption=l(Bi,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,hostVars:4,hostBindings:function(e,i){e&2&&f("mdc-list-item__start",i._isAlignedAtStart())("mdc-list-item__end",!i._isAlignedAtStart())}})}return n})(),zi=(()=>{class n extends mi{static \u0275fac=(()=>{let t;return function(i){return(t||(t=z(n)))(i||n)}})();static \u0275dir=k({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[A]})}return n})(),te=(()=>{class n extends mi{static \u0275fac=(()=>{let t;return function(i){return(t||(t=z(n)))(i||n)}})();static \u0275dir=k({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[A]})}return n})(),Ni=new F("MAT_LIST_CONFIG"),Xt=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=rt(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(rt(t))}_disabled=L(!1);_defaultOptions=l(Ni,{optional:!0});static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,hostVars:1,hostBindings:function(e,i){e&2&&w("aria-disabled",i.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),ji=(()=>{class n{_elementRef=l(M);_ngZone=l(q);_listBase=l(Xt,{optional:!0});_platform=l(xt);_hostElement;_isButtonElement;_noopAnimations=ot();_avatars;_icons;set lines(t){this._explicitLines=Ee(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=rt(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(rt(t))}_disabled=L(!1);_subscriptions=new O;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){l(Et).load(Pt);let t=l(qt,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Fe(this,this._ngZone,this._hostElement,this._platform,l(vt)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(tt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),i=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&e===1;i.classList.toggle("mdc-list-item__primary-text",a),i.classList.toggle("mdc-list-item__secondary-text",!a)}else i.classList.remove("mdc-list-item__primary-text"),i.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,contentQueries:function(e,i,a){if(e&1&&J(a,zi,4)(a,te,4),e&2){let m;u(m=g())&&(i._avatars=m),u(m=g())&&(i._icons=m)}},hostVars:4,hostBindings:function(e,i){e&2&&(w("aria-disabled",i.disabled)("disabled",i._isButtonElement&&i.disabled||null),f("mdc-list-item--disabled",i.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})();var di=(()=>{class n extends ji{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=rt(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=z(n)))(i||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,i,a){if(e&1&&J(a,Oi,5)(a,Yt,5)(a,Fi,5),e&2){let m;u(m=g())&&(i._lines=m),u(m=g())&&(i._titles=m),u(m=g())&&(i._meta=m)}},viewQuery:function(e,i){if(e&1&&K(Ei,5)(Ri,5),e&2){let a;u(a=g())&&(i._unscopedContent=a.first),u(a=g())&&(i._itemText=a.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,i){e&2&&(w("aria-current",i._getAriaCurrent()),f("mdc-list-item--activated",i.activated)("mdc-list-item--with-leading-avatar",i._avatars.length!==0)("mdc-list-item--with-leading-icon",i._icons.length!==0)("mdc-list-item--with-trailing-meta",i._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",i._hasBothLeadingAndTrailing())("_mat-animation-noopable",i._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[A],ngContentSelectors:Ai,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,i){e&1&&($(Pi),E(0),r(1,"span",1),E(2,1),E(3,2),r(4,"span",2,0),p("cdkObserveContent",function(){return i._updateItemLines(!0)}),E(6,3),c()(),E(7,4),E(8,5),S(9,"div",3))},dependencies:[Rt],encapsulation:2,changeDetection:0})}return n})();var pi=(()=>{class n extends Xt{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(i){return(t||(t=z(n)))(i||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[Z([{provide:Xt,useExisting:n}]),A],ngContentSelectors:Di,decls:1,vars:0,template:function(e,i){e&1&&($(),E(0))},styles:[Li],encapsulation:2,changeDetection:0})}return n})();var hi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=nt({type:n});static \u0275inj=it({imports:[Pe,Ne,Ue,st,li]})}return n})();function bi(n){let o=new TextEncoder().encode(n),t="";for(let e of o)t+=String.fromCharCode(e);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function _i(n){let o=n.replace(/-/g,"+").replace(/_/g,"/"),t=atob(o),e=Uint8Array.from(t,i=>i.charCodeAt(0));return new TextDecoder().decode(e)}var ee="cvData",ui="cv",ht=class n{buildLink(o){let t=bi(JSON.stringify(o));return`${this.baseUrl()}cv?${ee}=${t}`}decodeEmbedded(o){return X(JSON.parse(_i(o)))}baseUrl(){return document.baseURI.endsWith("/")?document.baseURI:`${document.baseURI}/`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})};var zt={basics:{fullName:"Alex Carter",title:"Senior Java Backend Engineer",summary:"Senior Java Backend Engineer with 5+ years of experience in building and modernizing scalable enterprise solutions. Expert in Java 21, Spring Boot 3.5, and the AWS ecosystem (ECS, Lambda, Bedrock). Proven track record in architecting AI-native platforms that reduced operational costs by $16,000+ monthly and automated manual efforts by 58%. Specialist in high-load migrations, event-driven architectures, and technical leadership within the Retail, Healthcare, Real Estate and IoT domains.",containsImage:!0,imageURL:"https://ui-avatars.com/api/?name=Alex+Carter&size=256&background=00366d&color=ffffff",contact:{location:"Ukraine, Lviv",github:"@alexcarter",email:"alex.carter@example.com",linkedin:"alex-carter"}},languages:[{name:"Ukrainian",level:"Native"},{name:"English",level:"B2"}],skills:[{category:"Languages",skills:["Java","TypeScript","Angular","Python"]},{category:"Databases",skills:["MySQL","PostgreSQL","Oracle","MongoDB","DynamoDB","Redis"]},{category:"Spring",skills:["Spring Boot","Spring Data JPA","Spring MVC","Spring Security","Spring Cloud","Spring Batch","Spring AOP"]},{category:"AWS",skills:["ECS","Lambda","S3","SQS","SNS","API Gateway","Bedrock","CloudWatch","ECR","Fargate","ELB/ALB"]},{category:"DevOps",skills:["Docker","Kubernetes","Helm","Terraform","Jenkins","GitHub Actions"]},{category:"Messaging",skills:["Apache Kafka","MQTT","RabbitMQ"]},{category:"Architecture",skills:["Microservices","Serverless","Event-driven","REST API","GraphQL"]}],education:[{degree:"Master of Science, Computer Engineering",institution:"Lviv Polytechnic National University",specialty:"Specialized Computer Systems",startDate:"Sep 2021",endDate:"Sep 2022"},{degree:"Bachelor of Science, Computer Engineering",institution:"Lviv Polytechnic National University",specialty:"Specialized Computer Systems",startDate:"Sep 2017",endDate:"Sep 2021"}],employment:[{role:"Senior Software Engineer",company:"EPAM",project:"Enterprise Platform Modernisation and Optimisation",description:"Full-cycle software development, including architecture planning, API design, performance tuning, and legacy system optimization.",startDate:"Sep 2022",endDate:"Present",responsibilities:["Led migration from Java 8/Spring Boot 2.2 to Java 21/Spring Boot 3.4, resolving critical dependency issues","Coordinated integration across 8 teams, ensuring smooth large-scale system transition","Mentored engineers and improved code quality, test coverage, and maintainability","Built LLM-based optimization solution (GPT-4o) saving $16,000+/month","Designed scalable data processing solutions and contributed to Spark jobs processing 4M records"]},{role:"Senior Software Engineer",company:"GazdAI (self project)",project:"Real estate platform with AI-core and automated processes",description:"Architected and deployed a cost-optimized, AI-native platform on AWS, leveraging event-driven systems and automated pipelines.",startDate:"Dec 2025",endDate:"Mar 2026",responsibilities:["Led AWS cloud architecture (Docker, Terraform, Fargate), delivering a cost-efficient MVP","Built AI-native platform core with event-driven architecture","Reduced AI processing costs by 35% via image deduplication (perceptual hashing)","Cut LLM usage costs through search optimization and caching"]},{role:"Team Lead",company:"EPAM Systems",project:"AWS Bedrock AI Scheduling and Management Agent",description:"Led a cross-functional team during an internal EPAM AI Marathon to build an AWS Bedrock\u2013powered AI Scheduling and Management Agent.",startDate:"Jul 2025",endDate:"Aug 2025",responsibilities:["Led a technical team (1 DevOps, 4 Software Engineers)","Delivered a solution that reduced manual scheduling efforts by 58%","Coordinated team workflows and ensured timely delivery of a functional MVP"]}]};function gi(n,o){return`You are a resume parser. Convert the resume text below into a single JSON object.

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
"""`}var Nt=class n{async pdfToText(o){let t=await import("./chunk-VJQ23XIJ.js");t.GlobalWorkerOptions.workerSrc=new URL("pdf.worker.min.mjs",document.baseURI).toString();let e=await o.arrayBuffer(),i=await t.getDocument({data:e}).promise,a=[];for(let m=1;m<=i.numPages;m++){let _t=(await(await i.getPage(m)).getTextContent()).items.map(ut=>"str"in ut?ut.str:"").join(" ");a.push(_t)}return a.join(`
`)}async docxToText(o){let t=await import("./chunk-NYLLO4PB.js"),e=await o.arrayBuffer();return(await t.extractRawText({arrayBuffer:e})).value}static \u0275fac=function(t){return new(t||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})};var Y=class extends Error{constructor(o){super(o),this.name="ResumeImportError"}},bt=class n{http=l(De);gemini=l(ii);extractor=l(Nt);settings=l(ei);fromJson(o){let t;try{t=JSON.parse(o)}catch{throw new Y("The file does not contain valid JSON.")}return X(t)}async fromUrl(o){let t;try{t=await be(this.http.get(o.trim(),{responseType:"text"}))}catch{throw new Y("Could not fetch the URL. Make sure it is public and CORS-accessible (e.g. a GitHub raw link).")}return this.fromJson(t)}async fromText(o){if(!o.trim())throw new Y("No text to import.");let t=Ze[this.settings.cvLanguage()],e=await this.gemini.generateText(gi(o,t),{jsonOutput:!0,temperature:.1}),i=ni(e);if(i===null)throw new Y("Gemini did not return parseable resume JSON.");return X(i)}async fromFile(o){let t=this.extensionOf(o.name);if(t==="json")return this.fromJson(await o.text());if(t==="txt")return this.fromText(await o.text());if(t==="pdf")return this.fromText(await this.extractor.pdfToText(o));if(t==="docx")return this.fromText(await this.extractor.docxToText(o));throw new Y(`Unsupported file type: .${t}. Use JSON, TXT, PDF, or DOCX.`)}extensionOf(o){return o.split(".").pop()?.toLowerCase()??""}static \u0275fac=function(t){return new(t||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})};var re=["*"];function Wi(n,o){n&1&&E(0)}var Gi=["tabListContainer"],Ui=["tabList"],qi=["tabListInner"],$i=["nextPaginator"],Ji=["previousPaginator"],Ki=["content"];function Zi(n,o){}var Xi=["tabBodyWrapper"],Yi=["tabHeader"];function tn(n,o){}function en(n,o){if(n&1&&It(0,tn,0,0,"ng-template",12),n&2){let t=h().$implicit;b("cdkPortalOutlet",t.templateLabel)}}function nn(n,o){if(n&1&&d(0),n&2){let t=h().$implicit;_(t.textLabel)}}function an(n,o){if(n&1){let t=P();r(0,"div",7,2),p("click",function(){let i=v(t),a=i.$implicit,m=i.$index,B=h(),j=at(1);return y(B._handleClick(a,j,m))})("cdkFocusChange",function(i){let a=v(t).$index,m=h();return y(m._tabFocusChanged(i,a))}),S(2,"span",8)(3,"div",9),r(4,"span",10)(5,"span",11),C(6,en,1,1,null,12)(7,nn,1,1),c()()()}if(n&2){let t=o.$implicit,e=o.$index,i=at(1),a=h();Mt(t.labelClass),f("mdc-tab--active",a.selectedIndex===e),b("id",a._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",a.fitInkBarToContent),w("tabIndex",a._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",a._tabs.length)("aria-controls",a._getTabContentId(e))("aria-selected",a.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),s(3),b("matRippleTrigger",i)("matRippleDisabled",t.disabled||a.disableRipple),s(3),T(t.templateLabel?6:7)}}function on(n,o){n&1&&E(0)}function rn(n,o){if(n&1){let t=P();r(0,"mat-tab-body",13),p("_onCentered",function(){v(t);let i=h();return y(i._removeTabBodyWrapperHeight())})("_onCentering",function(i){v(t);let a=h();return y(a._setTabBodyWrapperHeight(i))})("_beforeCentering",function(i){v(t);let a=h();return y(a._bodyCentered(i))}),c()}if(n&2){let t=o.$implicit,e=o.$index,i=h();Mt(t.bodyClass),b("id",i._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",i.animationDuration)("preserveContent",i.preserveContent),w("tabindex",i.contentTabIndex!=null&&i.selectedIndex===e?i.contentTabIndex:null)("aria-labelledby",i._getTabLabelId(t,e))("aria-hidden",i.selectedIndex!==e)}}var sn=new F("MatTabContent"),cn=(()=>{class n{template=l(Ct);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","matTabContent",""]],features:[Z([{provide:sn,useExisting:n}])]})}return n})(),ln=new F("MatTabLabel"),xi=new F("MAT_TAB"),mn=(()=>{class n extends Ke{_closestTab=l(xi,{optional:!0});static \u0275fac=(()=>{let t;return function(i){return(t||(t=z(n)))(i||n)}})();static \u0275dir=k({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Z([{provide:ln,useExisting:n}]),A]})}return n})(),ki=new F("MAT_TAB_GROUP"),se=(()=>{class n{_viewContainerRef=l(xe);_closestTabGroup=l(ki,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new gt;position=null;origin=null;isActive=!1;constructor(){l(Et).load(Pt)}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Je(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["mat-tab"]],contentQueries:function(e,i,a){if(e&1&&J(a,mn,5)(a,cn,7,Ct),e&2){let m;u(m=g())&&(i.templateLabel=m.first),u(m=g())&&(i._explicitContent=m.first)}},viewQuery:function(e,i){if(e&1&&K(Ct,7),e&2){let a;u(a=g())&&(i._implicitContent=a.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,i){e&2&&w("id",null)},inputs:{disabled:[2,"disabled","disabled",R],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Z([{provide:xi,useExisting:n}]),Vt],ngContentSelectors:re,decls:1,vars:0,template:function(e,i){e&1&&($(),ke(0,Wi,1,0,"ng-template"))},encapsulation:2})}return n})(),ie="mdc-tab-indicator--active",fi="mdc-tab-indicator--no-transition",ne=class{_items;_currentItem;constructor(o){this._items=o}hide(){this._items.forEach(o=>o.deactivateInkBar()),this._currentItem=void 0}alignToElement(o){let t=this._items.find(i=>i.elementRef.nativeElement===o),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let i=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(i),this._currentItem=t}}},dn=(()=>{class n{_elementRef=l(M);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(ie);return}let i=e.getBoundingClientRect(),a=t.width/i.width,m=t.left-i.left;e.classList.add(fi),this._inkBarContentElement.style.setProperty("transform",`translateX(${m}px) scaleX(${a})`),e.getBoundingClientRect(),e.classList.remove(fi),e.classList.add(ie),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(ie)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),i=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",i.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",R]}})}return n})();var wi=(()=>{class n extends dn{elementRef=l(M);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(i){return(t||(t=z(n)))(i||n)}})();static \u0275dir=k({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,i){e&2&&(w("aria-disabled",!!i.disabled),f("mat-mdc-tab-disabled",i.disabled))},inputs:{disabled:[2,"disabled","disabled",R]},features:[A]})}return n})(),vi={passive:!0},pn=650,hn=100,bn=(()=>{class n{_elementRef=l(M);_changeDetectorRef=l(yt);_viewportRuler=l($e);_dir=l(Jt,{optional:!0});_ngZone=l(q);_platform=l(xt);_sharedResizeObserver=l(ai);_injector=l(vt);_renderer=l(Tt);_animationsDisabled=ot();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new gt;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new gt;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new D;indexFocused=new D;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),vi),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),vi))}ngAfterContentInit(){let t=this._dir?this._dir.change:he("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(ge(32),ft(this._destroyed)),i=this._viewportRuler.change(150).pipe(ft(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Be(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),wt(a,{injector:this._injector}),tt(t,i,e,this._items.changes,this._itemsResized()).pipe(ft(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(m=>{this.indexFocused.emit(m),this._setTabFocus(m)})}_itemsResized(){return typeof ResizeObserver!="function"?pe:this._items.changes.pipe(kt(this._items),ve(t=>new de(e=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(a=>e.next(a));return t.forEach(a=>i.observe(a.elementRef.nativeElement)),()=>{i.disconnect()}}))),fe(1),ue(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Ae(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,i=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:m}=e.elementRef.nativeElement,B,j;this._getLayoutDirection()=="ltr"?(B=a,j=B+m):(j=this._tabListInner.nativeElement.offsetWidth-a,B=j-m);let _t=this.scrollDistance,ut=this.scrollDistance+i;B<_t?this.scrollDistance-=_t-B:j>ut&&(this.scrollDistance+=Math.min(j-ut,B-_t))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,i=t-e>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),_e(pn,hn).pipe(ft(tt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:a}=this._scrollHeader(t);(a===0||a>=i)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",R],selectedIndex:[2,"selectedIndex","selectedIndex",Lt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return n})(),_n=(()=>{class n extends bn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new ne(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=z(n)))(i||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-tab-header"]],contentQueries:function(e,i,a){if(e&1&&J(a,wi,4),e&2){let m;u(m=g())&&(i._items=m)}},viewQuery:function(e,i){if(e&1&&K(Gi,7)(Ui,7)(qi,7)($i,5)(Ji,5),e&2){let a;u(a=g())&&(i._tabListContainer=a.first),u(a=g())&&(i._tabList=a.first),u(a=g())&&(i._tabListInner=a.first),u(a=g())&&(i._nextPaginator=a.first),u(a=g())&&(i._previousPaginator=a.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,i){e&2&&f("mat-mdc-tab-header-pagination-controls-enabled",i._showPaginationControls)("mat-mdc-tab-header-rtl",i._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",R]},features:[A],ngContentSelectors:re,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,i){e&1&&($(),r(0,"div",5,0),p("click",function(){return i._handlePaginatorClick("before")})("mousedown",function(m){return i._handlePaginatorPress("before",m)})("touchend",function(){return i._stopInterval()}),S(2,"div",6),c(),r(3,"div",7,1),p("keydown",function(m){return i._handleKeydown(m)}),r(5,"div",8,2),p("cdkObserveContent",function(){return i._onContentChanges()}),r(7,"div",9,3),E(9),c()()(),r(10,"div",10,4),p("mousedown",function(m){return i._handlePaginatorPress("after",m)})("click",function(){return i._handlePaginatorClick("after")})("touchend",function(){return i._stopInterval()}),S(12,"div",6),c()),e&2&&(f("mat-mdc-tab-header-pagination-disabled",i._disableScrollBefore),b("matRippleDisabled",i._disableScrollBefore||i.disableRipple),s(3),f("_mat-animation-noopable",i._animationsDisabled),s(2),w("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby||null),s(5),f("mat-mdc-tab-header-pagination-disabled",i._disableScrollAfter),b("matRippleDisabled",i._disableScrollAfter||i.disableRipple))},dependencies:[$t,Rt],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return n})(),un=new F("MAT_TABS_CONFIG"),yi=(()=>{class n extends Kt{_host=l(ae);_ngZone=l(q);_centeringSub=O.EMPTY;_leavingSub=O.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(kt(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","matTabBodyHost",""]],features:[A]})}return n})(),ae=(()=>{class n{_elementRef=l(M);_dir=l(Jt,{optional:!0});_ngZone=l(q);_injector=l(vt);_renderer=l(Tt);_diAnimationsDisabled=ot();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=O.EMPTY;_position;_previousPosition;_onCentering=new D;_beforeCentering=new D;_afterLeavingCenter=new D;_onCentered=new D(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=l(yt);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),wt(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),i.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),wt(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["mat-tab-body"]],viewQuery:function(e,i){if(e&1&&K(yi,5)(Ki,5),e&2){let a;u(a=g())&&(i._portalHost=a.first),u(a=g())&&(i._contentElement=a.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,i){e&2&&w("inert",i._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,i){e&1&&(r(0,"div",1,0),It(2,Zi,0,0,"ng-template",2),c()),e&2&&f("mat-tab-body-content-left",i._position==="left")("mat-tab-body-content-right",i._position==="right")("mat-tab-body-content-can-animate",i._position==="center"||i._previousPosition==="center")},dependencies:[yi,qe],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return n})(),Ci=(()=>{class n{_elementRef=l(M);_changeDetectorRef=l(yt);_ngZone=l(q);_tabsSubscription=O.EMPTY;_tabLabelSubscription=O.EMPTY;_tabBodySubscription=O.EMPTY;_diAnimationsDisabled=ot();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new ye;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new D;focusChange=new D;animationDone=new D;selectedTabChange=new D(!0);_groupId;_isServer=!l(xt).isBrowser;constructor(){let t=l(un,{optional:!0});this._groupId=l(Oe).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let i=this._tabBodyWrapper.nativeElement;i.style.minHeight=i.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((i,a)=>i.isActive=a===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,i)=>{e.position=i-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),i;for(let a=0;a<e.length;a++)if(e[a].isActive){this._indexToSelect=this._selectedIndex=a,this._lastFocusedTabIndex=null,i=e[a];break}!i&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(kt(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new oe;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=tt(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,i){e.focusIndex=i,t.disabled||(this.selectedIndex=i)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,i)=>e._setActiveClass(i===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["mat-tab-group"]],contentQueries:function(e,i,a){if(e&1&&J(a,se,5),e&2){let m;u(m=g())&&(i._allTabs=m)}},viewQuery:function(e,i){if(e&1&&K(Xi,5)(Yi,5)(ae,5),e&2){let a;u(a=g())&&(i._tabBodyWrapper=a.first),u(a=g())&&(i._tabHeader=a.first),u(a=g())&&(i._tabBodies=a)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(e,i){e&2&&(w("mat-align-tabs",i.alignTabs),Mt("mat-"+(i.color||"primary")),Ie("--mat-tab-animation-duration",i.animationDuration),f("mat-mdc-tab-group-dynamic-height",i.dynamicHeight)("mat-mdc-tab-group-inverted-header",i.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",i.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",R],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",R],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",R],selectedIndex:[2,"selectedIndex","selectedIndex",Lt],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Lt],disablePagination:[2,"disablePagination","disablePagination",R],disableRipple:[2,"disableRipple","disableRipple",R],preserveContent:[2,"preserveContent","preserveContent",R],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Z([{provide:ki,useExisting:n}])],ngContentSelectors:re,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,i){e&1&&($(),r(0,"mat-tab-header",3,0),p("indexFocused",function(m){return i._focusChanged(m)})("selectFocusedIndex",function(m){return i.selectedIndex=m}),Gt(2,an,8,17,"div",4,Wt),c(),C(4,on,1,0),r(5,"div",5,1),Gt(7,rn,1,10,"mat-tab-body",6,Wt),c()),e&2&&(b("selectedIndex",i.selectedIndex||0)("disableRipple",i.disableRipple)("disablePagination",i.disablePagination),we("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby),s(2),Ut(i._tabs),s(2),T(i._isServer?4:-1),s(),f("_mat-animation-noopable",i._animationsDisabled()),s(2),Ut(i._tabs))},dependencies:[_n,wi,Re,$t,Kt,ae],styles:[`.mdc-tab {
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
`],encapsulation:2})}return n})(),oe=class{index;tab};var Ti=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=nt({type:n});static \u0275inj=it({imports:[st]})}return n})();function vn(n,o){n&1&&S(0,"mat-progress-bar",1)}var jt=class n{importService=l(bt);snackBar=l(G);i18n=l(U);imported=St();accept=Zt.acceptedExtensions.join(",");urlInput=L("");textInput=L("");busy=L(!1);async onFileSelected(o){let t=o.target,e=t.files?.[0];if(t.value="",!!e){if(e.size>Zt.maxFileSizeBytes){this.fail(this.i18n.t("import.tooLarge"));return}await this.run(()=>this.importService.fromFile(e))}}async importUrl(){if(!this.urlInput().trim()){this.fail(this.i18n.t("import.enterUrl"));return}await this.run(()=>this.importService.fromUrl(this.urlInput()))}async importText(){if(!this.textInput().trim()){this.fail(this.i18n.t("import.pasteText"));return}await this.run(()=>this.importService.fromText(this.textInput()))}loadSample(){this.emit(zt)}async run(o){this.busy.set(!0);try{this.emit(await o())}catch(t){this.fail(t instanceof Error?t.message:"Import failed.")}finally{this.busy.set(!1)}}emit(o){this.imported.emit(o),this.snackBar.open(this.i18n.t("import.imported"),"OK",{duration:2500})}fail(o){this.snackBar.open(o,"Dismiss",{duration:5e3})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["app-import-panel"]],outputs:{imported:"imported"},decls:43,vars:20,consts:[["fileInput",""],["mode","indeterminate"],[3,"label"],[1,"flex","flex-col","gap-3","p-4"],[1,"field-hint"],[1,"form-actions"],["matButton","filled",3,"click","disabled"],["matButton","",3,"click","disabled"],["type","file",1,"hidden",3,"change","accept"],["appearance","outline",1,"form-field-full"],["matInput","","placeholder","https://raw.githubusercontent.com/user/repo/main/resume.json",3,"ngModelChange","ngModel"],["matInput","","rows","8",3,"ngModelChange","ngModel"]],template:function(t,e){if(t&1){let i=P();C(0,vn,1,0,"mat-progress-bar",1),r(1,"mat-tab-group")(2,"mat-tab",2)(3,"div",3)(4,"p",4),d(5),c(),r(6,"div",5)(7,"button",6),p("click",function(){v(i);let m=at(16);return y(m.click())}),r(8,"mat-icon"),d(9,"upload_file"),c(),d(10),c(),r(11,"button",7),p("click",function(){return e.loadSample()}),r(12,"mat-icon"),d(13,"auto_awesome"),c(),d(14),c()(),r(15,"input",8,0),p("change",function(m){return e.onFileSelected(m)}),c()()(),r(17,"mat-tab",2)(18,"div",3)(19,"p",4),d(20),c(),r(21,"mat-form-field",9)(22,"mat-label"),d(23),c(),r(24,"input",10),p("ngModelChange",function(m){return e.urlInput.set(m)}),c()(),r(25,"div",5)(26,"button",6),p("click",function(){return e.importUrl()}),r(27,"mat-icon"),d(28,"cloud_download"),c(),d(29),c()()()(),r(30,"mat-tab",2)(31,"div",3)(32,"p",4),d(33),c(),r(34,"mat-form-field",9)(35,"mat-label"),d(36),c(),r(37,"textarea",11),p("ngModelChange",function(m){return e.textInput.set(m)}),c()(),r(38,"div",5)(39,"button",6),p("click",function(){return e.importText()}),r(40,"mat-icon"),d(41,"auto_fix_high"),c(),d(42),c()()()()()}t&2&&(T(e.busy()?0:-1),s(2),b("label",e.i18n.t("import.tab.file")),s(3),_(e.i18n.t("import.file.hint")),s(2),b("disabled",e.busy()),s(3),I(" ",e.i18n.t("import.choose")," "),s(),b("disabled",e.busy()),s(3),I(" ",e.i18n.t("import.loadSample")," "),s(),b("accept",e.accept),s(2),b("label",e.i18n.t("import.tab.url")),s(3),_(e.i18n.t("import.url.hint")),s(3),_(e.i18n.t("import.url.label")),s(),b("ngModel",e.urlInput()),s(2),b("disabled",e.busy()),s(3),I(" ",e.i18n.t("import.url.button")," "),s(),b("label",e.i18n.t("import.tab.text")),s(3),_(e.i18n.t("import.text.hint")),s(3),_(e.i18n.t("import.text.label")),s(),b("ngModel",e.textInput()),s(2),b("disabled",e.busy()),s(3),I(" ",e.i18n.t("import.text.button")," "))},dependencies:[Ft,At,Bt,Ot,Ti,se,Ci,mt,lt,ct,pt,dt,Q,H,W,V,si,ri],encapsulation:2,changeDetection:0})};var Ht=class n{snackBar=l(G);i18n=l(U);resume=Dt.required();applied=St();draft=Me(()=>JSON.stringify(this.resume(),null,2));apply(){let o;try{o=JSON.parse(this.draft())}catch{this.snackBar.open(this.i18n.t("cv.editor.invalidJson"),"Dismiss",{duration:5e3});return}try{this.applied.emit(X(o)),this.snackBar.open(this.i18n.t("cv.editor.applied"),"OK",{duration:2500})}catch(t){let e=t instanceof Error?t.message:this.i18n.t("cv.editor.invalidJson");this.snackBar.open(e,"Dismiss",{duration:5e3})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["app-cv-json-editor"]],inputs:{resume:[1,"resume"]},outputs:{applied:"applied"},decls:12,vars:4,consts:[[1,"flex","flex-col","gap-3"],[1,"field-hint"],["appearance","outline",1,"form-field-full"],["matInput","","rows","18","spellcheck","false",1,"cv-json-area",3,"ngModelChange","ngModel"],[1,"form-actions"],["matButton","filled",3,"click"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"p",1),d(2),c(),r(3,"mat-form-field",2)(4,"mat-label"),d(5),c(),r(6,"textarea",3),p("ngModelChange",function(a){return e.draft.set(a)}),c()(),r(7,"div",4)(8,"button",5),p("click",function(){return e.apply()}),r(9,"mat-icon"),d(10,"check"),c(),d(11),c()()()),t&2&&(s(2),_(e.i18n.t("cv.editor.jsonHint")),s(3),_(e.i18n.t("cv.editor.jsonTitle")),s(),b("ngModel",e.draft()),s(5),I(" ",e.i18n.t("cv.editor.apply")," "))},dependencies:[Ft,At,Bt,Ot,mt,lt,ct,pt,dt,Q,H,W,V],encapsulation:2,changeDetection:0})};function yn(n,o){if(n&1){let t=P();r(0,"mat-form-field",4)(1,"mat-label"),d(2),c(),S(3,"input",6),r(4,"button",7),p("click",function(){v(t);let i=h();return y(i.copy())}),r(5,"mat-icon"),d(6,"content_copy"),c()()()}if(n&2){let t=h();s(2),_(t.i18n.t("cv.share.title")),s(),b("value",t.link()),s(),w("aria-label",t.i18n.t("cv.share.copy"))}}var Qt=class n{share=l(ht);snackBar=l(G);i18n=l(U);resume=Dt.required();link=L("");generate(){this.link.set(this.share.buildLink(this.resume()))}async copy(){this.link()||this.generate();try{await navigator.clipboard.writeText(this.link()),this.snackBar.open(this.i18n.t("cv.share.copied"),"OK",{duration:2500})}catch{}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["app-cv-share-panel"]],inputs:{resume:[1,"resume"]},decls:11,vars:4,consts:[[1,"flex","flex-col","gap-4"],[1,"muted"],[1,"form-actions"],["matButton","filled",3,"click"],["appearance","outline",1,"form-field-full"],[1,"field-hint"],["matInput","","readonly","",3,"value"],["matIconButton","","matSuffix","",3,"click"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"p",1),d(2),c(),r(3,"div",2)(4,"button",3),p("click",function(){return e.generate()}),r(5,"mat-icon"),d(6,"link"),c(),d(7),c()(),C(8,yn,7,3,"mat-form-field",4),r(9,"p",5),d(10),c()()),t&2&&(s(2),_(e.i18n.t("cv.share.desc")),s(5),I(" ",e.i18n.t("cv.share.generate")," "),s(),T(e.link()?8:-1),s(2),_(e.i18n.t("cv.share.urlHint")))},dependencies:[mt,lt,ct,oi,pt,dt,Q,H,ze,W,V],encapsulation:2,changeDetection:0})};var xn=["cvDoc"];function kn(n,o){if(n&1){let t=P();r(0,"mat-card",9)(1,"mat-card-header")(2,"mat-card-title"),d(3),c()(),r(4,"mat-card-content",11)(5,"app-cv-json-editor",15),p("applied",function(i){v(t);let a=h(2);return y(a.onImported(i))}),c()()()}if(n&2){let t=h(2);s(3),_(t.i18n.t("cv.editor.jsonTitle")),s(2),b("resume",t.resume())}}function wn(n,o){if(n&1){let t=P();r(0,"mat-card",9)(1,"mat-card-header")(2,"mat-card-title"),d(3),c(),r(4,"mat-card-subtitle"),d(5),c()(),r(6,"mat-card-content",11)(7,"div",12)(8,"button",13),p("click",function(){v(t);let i=h();return y(i.createNew())}),r(9,"mat-icon"),d(10,"note_add"),c(),d(11),c()(),r(12,"app-import-panel",14),p("imported",function(i){v(t);let a=h();return y(a.onImported(i))}),c()()(),C(13,kn,6,2,"mat-card",9)}if(n&2){let t=h();s(3),_(t.i18n.t("cv.nav.editor")),s(2),_(t.i18n.t("cv.getStarted.subtitle")),s(6),I(" ",t.i18n.t("cv.createNew")," "),s(2),T(t.hasResume()?13:-1)}}function Cn(n,o){if(n&1){let t=P();r(0,"div",16)(1,"button",18),p("click",function(){v(t);let i=h(2);return y(i.exportPdf())}),r(2,"mat-icon"),d(3,"picture_as_pdf"),c(),d(4),c(),r(5,"button",19),p("click",function(){v(t);let i=h(2);return y(i.exportJson())}),r(6,"mat-icon"),d(7,"data_object"),c(),d(8),c(),r(9,"button",19),p("click",function(){v(t);let i=h(2);return y(i.clear())}),r(10,"mat-icon"),d(11,"delete_outline"),c(),d(12),c()()}if(n&2){let t=h(2);s(4),I(" ",t.i18n.t("cv.exportPdf")," "),s(4),I(" ",t.i18n.t("cv.exportJson")," "),s(4),I(" ",t.i18n.t("cv.clear")," ")}}function Tn(n,o){if(n&1&&(r(0,"p",17),d(1),c()),n&2){let t=h(2);s(),_(t.i18n.t("cv.getStarted.title"))}}function In(n,o){if(n&1&&(r(0,"mat-card",9)(1,"mat-card-header")(2,"mat-card-title"),d(3),c()(),r(4,"mat-card-content",11),C(5,Cn,13,3,"div",16)(6,Tn,2,1,"p",17),c()()),n&2){let t=h();s(3),_(t.i18n.t("cv.export.title")),s(2),T(t.hasResume()?5:6)}}function Mn(n,o){if(n&1&&S(0,"app-cv-share-panel",10),n&2){let t=h(2);b("resume",t.resume())}}function Sn(n,o){if(n&1&&(r(0,"p",17),d(1),c()),n&2){let t=h(2);s(),_(t.i18n.t("cv.getStarted.title"))}}function Dn(n,o){if(n&1&&(r(0,"mat-card",9)(1,"mat-card-header")(2,"mat-card-title"),d(3),c()(),r(4,"mat-card-content",11),C(5,Mn,1,1,"app-cv-share-panel",10)(6,Sn,2,1,"p",17),c()()),n&2){let t=h();s(3),_(t.i18n.t("cv.share.title")),s(2),T(t.hasResume()?5:6)}}function Ln(n,o){if(n&1&&S(0,"app-cv-document",10,0),n&2){let t=h();b("resume",t.resume())}}var Si=class n{repository=l(Xe);exporter=l(Ye);printer=l(ti);shareService=l(ht);importService=l(bt);route=l(Le);snackBar=l(G);i18n=l(U);cvDoc=Se("cvDoc",{read:M});resume=this.repository.resume;hasResume=this.repository.hasResume;section=L("editor");constructor(){this.loadSharedFromQuery()}select(o){this.section.set(o)}onImported(o){this.repository.set(o)}createNew(){this.repository.set(zt),this.section.set("editor")}exportJson(){let o=this.resume();o&&this.exporter.downloadJson(o)}exportPdf(){let o=this.cvDoc()?.nativeElement;o&&this.printer.print(o)}clear(){this.repository.clear()}loadSharedFromQuery(){let o=this.route.snapshot.queryParamMap,t=o.get(ee),e=o.get(ui);if(t){try{this.repository.set(this.shareService.decodeEmbedded(t)),this.notifyShared()}catch{this.notifyShareError()}return}e&&this.importService.fromUrl(e).then(i=>{this.repository.set(i),this.notifyShared()}).catch(()=>this.notifyShareError())}notifyShared(){this.snackBar.open(this.i18n.t("cv.shared.loaded"),"OK",{duration:2500})}notifyShareError(){this.snackBar.open(this.i18n.t("cv.shared.error"),"Dismiss",{duration:5e3})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["app-resume-workspace-page"]],viewQuery:function(t,e){t&1&&Ce(e.cvDoc,xn,5,M),t&2&&Te()},decls:26,vars:12,consts:[["cvDoc",""],[1,"page-header"],[1,"page-title"],[1,"cv-workspace"],[1,"cv-workspace-nav","surface-card"],["mat-list-item","",3,"click"],["matListItemIcon",""],["matListItemTitle",""],[1,"cv-workspace-content"],[1,"mb-6"],[3,"resume"],[1,"pt-4"],[1,"form-actions","mb-4"],["matButton","tonal",3,"click"],[3,"imported"],[3,"applied","resume"],[1,"form-actions"],[1,"muted"],["matButton","filled",3,"click"],["matButton","",3,"click"]],template:function(t,e){if(t&1&&(r(0,"div",1)(1,"h1",2),d(2),c()(),r(3,"div",3)(4,"aside",4)(5,"mat-nav-list")(6,"a",5),p("click",function(){return e.select("editor")}),r(7,"mat-icon",6),d(8,"edit_document"),c(),r(9,"span",7),d(10),c()(),r(11,"a",5),p("click",function(){return e.select("export")}),r(12,"mat-icon",6),d(13,"download"),c(),r(14,"span",7),d(15),c()(),r(16,"a",5),p("click",function(){return e.select("share")}),r(17,"mat-icon",6),d(18,"share"),c(),r(19,"span",7),d(20),c()()()(),r(21,"div",8),C(22,wn,14,4)(23,In,7,2,"mat-card",9)(24,Dn,7,2,"mat-card",9),C(25,Ln,2,1,"app-cv-document",10),c()()),t&2){let i;s(2),_(e.i18n.t("cv.title")),s(4),f("cv-nav-active",e.section()==="editor"),s(4),_(e.i18n.t("cv.nav.editor")),s(),f("cv-nav-active",e.section()==="export"),s(4),_(e.i18n.t("cv.nav.export")),s(),f("cv-nav-active",e.section()==="share"),s(4),_(e.i18n.t("cv.nav.share")),s(2),T((i=e.section())==="editor"?22:i==="export"?23:i==="share"?24:-1),s(3),T(e.hasResume()?25:-1)}},dependencies:[Ge,je,Qe,We,Ve,He,Q,H,W,V,hi,pi,di,te,Yt,jt,ci,Ht,Qt],encapsulation:2,changeDetection:0})};export{Si as ResumeWorkspacePage};
