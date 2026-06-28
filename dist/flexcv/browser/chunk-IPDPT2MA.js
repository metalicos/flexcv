import{N as $t,P as tt}from"./chunk-MY33IDG4.js";import{E as At,F as Rt,K as S,M as Ot,N as zt,U as Ft,V as jt,X as Bt,Z as Pt,aa as Vt,ba as Nt,ca as Gt,da as Y,ea as ht,g as It,j as Dt,ka as Xt,n as Tt,q as Mt,w as N}from"./chunk-T6KVZ6ED.js";import{$b as St,Ab as Z,Bb as U,Cb as x,Eb as u,Gb as l,Hb as rt,Ib as M,Jb as st,Kb as wt,Lb as A,Ma as kt,Mb as R,Oa as r,Rb as ct,S as E,Sb as w,T as j,Tb as Ct,Ub as m,V as $,Vb as v,Wa as at,Wb as C,X as d,Xb as mt,Yb as Lt,Zb as K,_b as k,a as bt,aa as b,ba as f,bb as L,cb as P,da as xt,db as y,ec as W,fb as Q,ha as nt,hc as Et,ia as H,ic as lt,lc as dt,m as ft,ma as G,ob as I,oc as pt,pb as h,qb as _,ra as X,rb as V,sb as yt,ta as B,tb as D,ub as T,v as vt,vb as ot,wb as o,xb as s,yb as q,zb as J}from"./chunk-6J47JQUV.js";import{a as ut}from"./chunk-JJCA6Z7Z.js";var oe=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=S(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=S(e)}_inset=!1;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=L({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(n,a){n&2&&(I("aria-orientation",a.vertical?"vertical":"horizontal"),w("mat-divider-vertical",a.vertical)("mat-divider-horizontal",!a.vertical)("mat-divider-inset",a.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(n,a){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return t})(),Qt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=j({imports:[N]})}return t})();var re=["*"],se=`.mdc-list {
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
`,ce=["unscopedContent"],me=["text"],le=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],de=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var pe=new $("ListOption"),he=(()=>{class t{_elementRef=d(B);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=y({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),_e=(()=>{class t{_elementRef=d(B);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=y({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),ge=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=y({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),Ut=(()=>{class t{_listOption=d(pe,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(n){return new(n||t)};static \u0275dir=y({type:t,hostVars:4,hostBindings:function(n,a){n&2&&w("mdc-list-item__start",a._isAlignedAtStart())("mdc-list-item__end",!a._isAlignedAtStart())}})}return t})(),ue=(()=>{class t extends Ut{static \u0275fac=(()=>{let e;return function(a){return(e||(e=X(t)))(a||t)}})();static \u0275dir=y({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Q]})}return t})(),be=(()=>{class t extends Ut{static \u0275fac=(()=>{let e;return function(a){return(e||(e=X(t)))(a||t)}})();static \u0275dir=y({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Q]})}return t})(),fe=new $("MAT_LIST_CONFIG"),_t=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=S(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(S(e))}_disabled=G(!1);_defaultOptions=d(fe,{optional:!0});static \u0275fac=function(n){return new(n||t)};static \u0275dir=y({type:t,hostVars:1,hostBindings:function(n,a){n&2&&I("aria-disabled",a.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),ve=(()=>{class t{_elementRef=d(B);_ngZone=d(H);_listBase=d(_t,{optional:!0});_platform=d(Dt);_hostElement;_isButtonElement;_noopAnimations=zt();_avatars;_icons;set lines(e){this._explicitLines=Mt(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=S(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(S(e))}_disabled=G(!1);_subscriptions=new bt;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){d(Tt).load(Bt);let e=d(jt,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Ft(this,this._ngZone,this._hostElement,this._platform,d(xt)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(vt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let n=this._explicitLines??this._inferLinesFromContent(),a=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",n<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",n<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",n===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",n===3),this._hasUnscopedTextContent){let c=this._titles.length===0&&n===1;a.classList.toggle("mdc-list-item__primary-text",c),a.classList.toggle("mdc-list-item__secondary-text",!c)}else a.classList.remove("mdc-list-item__primary-text"),a.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=y({type:t,contentQueries:function(n,a,c){if(n&1&&st(c,ue,4)(c,be,4),n&2){let g;A(g=R())&&(a._avatars=g),A(g=R())&&(a._icons=g)}},hostVars:4,hostBindings:function(n,a){n&2&&(I("aria-disabled",a.disabled)("disabled",a._isButtonElement&&a.disabled||null),w("mdc-list-item--disabled",a.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var zi=(()=>{class t extends ve{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=S(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=X(t)))(a||t)}})();static \u0275cmp=L({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(n,a,c){if(n&1&&st(c,_e,5)(c,he,5)(c,ge,5),n&2){let g;A(g=R())&&(a._lines=g),A(g=R())&&(a._titles=g),A(g=R())&&(a._meta=g)}},viewQuery:function(n,a){if(n&1&&wt(ce,5)(me,5),n&2){let c;A(c=R())&&(a._unscopedContent=c.first),A(c=R())&&(a._itemText=c.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(n,a){n&2&&(I("aria-current",a._getAriaCurrent()),w("mdc-list-item--activated",a.activated)("mdc-list-item--with-leading-avatar",a._avatars.length!==0)("mdc-list-item--with-leading-icon",a._icons.length!==0)("mdc-list-item--with-trailing-meta",a._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",a._hasBothLeadingAndTrailing())("_mat-animation-noopable",a._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Q],ngContentSelectors:de,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(n,a){n&1&&(rt(le),M(0),o(1,"span",1),M(2,1),M(3,2),o(4,"span",2,0),u("cdkObserveContent",function(){return a._updateItemLines(!0)}),M(6,3),s()(),M(7,4),M(8,5),q(9,"div",3))},dependencies:[At],encapsulation:2,changeDetection:0})}return t})();var Fi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=y({type:t,selectors:[["","mat-subheader",""],["","matSubheader",""]],hostAttrs:[1,"mat-mdc-subheader","mdc-list-group__subheader"]})}return t})();var ji=(()=>{class t extends _t{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(a){return(e||(e=X(t)))(a||t)}})();static \u0275cmp=L({type:t,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[St([{provide:_t,useExisting:t}]),Q],ngContentSelectors:re,decls:1,vars:0,template:function(n,a){n&1&&(rt(),M(0))},styles:[se],encapsulation:2,changeDetection:0})}return t})();var Bi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=j({imports:[Rt,Pt,$t,N,Qt]})}return t})();var et=class extends Error{constructor(i){super(i),this.name="ResumeValidationError"}};function z(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}function p(t){return typeof t=="string"?t:""}function xe(t){return t===!0}function Ht(t){return Array.isArray(t)?t.filter(i=>typeof i=="string"):[]}function it(t){return Array.isArray(t)?t:[]}function ke(t){return it(t).filter(z).map(i=>({name:p(i.name),level:p(i.level)})).filter(i=>i.name.length>0)}function ye(t){return it(t).filter(z).map(i=>({category:p(i.category),skills:Ht(i.skills)})).filter(i=>i.skills.length>0)}function we(t){return it(t).filter(z).map(i=>({degree:p(i.degree),institution:p(i.institution),specialty:p(i.specialty)||void 0,location:p(i.location)||void 0,startDate:p(i.startDate)||void 0,endDate:p(i.endDate)||void 0})).filter(i=>i.degree.length>0||i.institution.length>0)}function Ce(t){return it(t).filter(z).map(i=>({role:p(i.role),company:p(i.company),project:p(i.project)||void 0,description:p(i.description)||void 0,startDate:p(i.startDate)||void 0,endDate:p(i.endDate)||void 0,responsibilities:Ht(i.responsibilities)})).filter(i=>i.role.length>0||i.company.length>0)}function qt(t){if(!z(t))throw new et("Resume JSON must be an object.");let i=z(t.basics)?t.basics:{},e=z(i.contact)?i.contact:{},n=p(i.fullName);if(!n)throw new et('Resume must include "basics.fullName".');let a=p(i.imageURL)||void 0,c=xe(i.containsImage)&&a!==void 0;return{basics:{fullName:n,title:p(i.title),summary:p(i.summary),containsImage:c,imageURL:a,contact:{location:p(e.location)||void 0,github:p(e.github)||void 0,email:p(e.email)||void 0,linkedin:p(e.linkedin)||void 0,phone:p(e.phone)||void 0,website:p(e.website)||void 0,birthDate:p(e.birthDate)||void 0}},languages:ke(t.languages),skills:ye(t.skills),education:we(t.education),employment:Ce(t.employment)}}var Jt=class t{storage=d(Gt);resumeSig=G(this.restore());resume=this.resumeSig.asReadonly();hasResume=W(()=>this.resumeSig()!==null);set(i){this.resumeSig.set(i),this.storage.writeJson(Y.resume,i)}clear(){this.resumeSig.set(null),this.storage.remove(Y.resume)}restore(){let i=this.storage.readJson(Y.resume);if(i===null)return null;try{return qt(i)}catch{return null}}static \u0275fac=function(e){return new(e||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})};function Zt(t,i,e="application/json"){let n=new Blob([i],{type:e}),a=URL.createObjectURL(n),c=document.createElement("a");c.href=a,c.download=t,c.click(),URL.revokeObjectURL(a)}function Kt(t,i){return t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||i}var Wt=class t{toJsonString(i){return JSON.stringify(i,null,2)}downloadJson(i){let e=`${Kt(i.basics.fullName,"resume")}.json`;Zt(e,this.toJsonString(i))}static \u0275fac=function(e){return new(e||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})};var Yt="print-target",te=class t{print(i){i.classList.add(Yt);let e=()=>{i.classList.remove(Yt),window.removeEventListener("afterprint",e)};window.addEventListener("afterprint",e),window.print(),setTimeout(e,1500)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})};function Le(t,i){t&1&&U(0,"div",2)}var Se=new $("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var mn=(()=>{class t{_elementRef=d(B);_ngZone=d(H);_changeDetectorRef=d(dt);_renderer=d(at);_cleanupTransitionEnd;constructor(){let e=Ot(),n=d(Se,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),n&&(n.color&&(this.color=this._defaultColor=n.color),this.mode=n.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=ee(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=ee(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new nt;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=L({type:t,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(n,a){n&2&&(I("aria-valuenow",a._isIndeterminate()?null:a.value)("mode",a.mode),Ct("mat-"+a.color),w("_mat-animation-noopable",a._isNoopAnimation)("mdc-linear-progress--animation-ready",!a._isNoopAnimation)("mdc-linear-progress--indeterminate",a._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",pt],bufferValue:[2,"bufferValue","bufferValue",pt],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(n,a){n&1&&(J(0,"div",0),U(1,"div",1),h(2,Le,1,0,"div",2),Z(),J(3,"div",3),U(4,"span",4),Z(),J(5,"div",5),U(6,"span",4),Z()),n&2&&(r(),ct("flex-basis",a._getBufferBarFlexBasis()),r(),_(a.mode==="buffer"?2:-1),r(),ct("transform",a._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2,changeDetection:0})}return t})();function ee(t,i=0,e=100){return Math.max(i,Math.min(e,t))}var ln=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=j({imports:[N]})}return t})();var Ee=(t,i)=>i.icon;function Ie(t,i){if(t&1){let e=x();o(0,"span",4)(1,"button",18),u("click",function(){b(e);let a=l();return f(a.fire("basics","edit"))}),o(2,"mat-icon"),m(3,"edit"),s()()()}}function De(t,i){if(t&1&&q(0,"img",5),t&2){l();let e=k(0);ot("src",e.basics.imageURL,kt)("alt",e.basics.fullName)}}function Te(t,i){if(t&1&&(o(0,"p",7),m(1),s()),t&2){l();let e=k(0);r(),v(e.basics.title)}}function Me(t,i){if(t&1&&(o(0,"li",9)(1,"mat-icon"),m(2),s(),o(3,"span"),m(4),s()()),t&2){let e=i.$implicit;r(2),v(e.icon),r(2),v(e.value)}}function Ae(t,i){if(t&1){let e=x();o(0,"span",4)(1,"button",18),u("click",function(){b(e);let a=l();return f(a.fire("language","add"))}),o(2,"mat-icon"),m(3,"add"),s()()()}}function Re(t,i){if(t&1){let e=x();o(0,"span",4)(1,"button",18),u("click",function(){b(e);let a=l().$index,c=l();return f(c.fire("language","edit",a))}),o(2,"mat-icon"),m(3,"edit"),s()(),o(4,"button",18),u("click",function(){b(e);let a=l().$index,c=l();return f(c.fire("language","remove",a))}),o(5,"mat-icon"),m(6,"delete"),s()()()}}function Oe(t,i){if(t&1&&(o(0,"div",12)(1,"span"),m(2),s(),o(3,"span",19),m(4),s(),h(5,Re,7,0,"span",4),s()),t&2){let e=i.$implicit;l();let n=k(2);r(2),v(e.name),r(2),v(e.level),r(),_(n?5:-1)}}function ze(t,i){if(t&1){let e=x();o(0,"span",4)(1,"button",18),u("click",function(){b(e);let a=l();return f(a.fire("skill","add"))}),o(2,"mat-icon"),m(3,"add"),s()()()}}function Fe(t,i){if(t&1&&(o(0,"div",20),m(1),s()),t&2){let e=l().$implicit;r(),v(e.category)}}function je(t,i){if(t&1&&(o(0,"span",22),m(1),s()),t&2){let e=i.$implicit;r(),v(e)}}function Be(t,i){if(t&1){let e=x();o(0,"span",4)(1,"button",18),u("click",function(){b(e);let a=l().$index,c=l();return f(c.fire("skill","edit",a))}),o(2,"mat-icon"),m(3,"edit"),s()(),o(4,"button",18),u("click",function(){b(e);let a=l().$index,c=l();return f(c.fire("skill","remove",a))}),o(5,"mat-icon"),m(6,"delete"),s()()()}}function Pe(t,i){if(t&1&&(o(0,"div",13),h(1,Fe,2,1,"div",20),o(2,"div",21),D(3,je,2,1,"span",22,yt),s(),h(5,Be,7,0,"span",4),s()),t&2){let e=i.$implicit;l();let n=k(2);r(),_(e.category?1:-1),r(2),T(e.skills),r(2),_(n?5:-1)}}function Ve(t,i){if(t&1){let e=x();o(0,"span",4)(1,"button",18),u("click",function(){b(e);let a=l();return f(a.fire("basics","edit"))}),o(2,"mat-icon"),m(3,"edit"),s()()()}}function Ne(t,i){if(t&1&&(o(0,"p",15),m(1),s()),t&2){l();let e=k(0);r(),v(e.basics.summary)}}function $e(t,i){if(t&1){let e=x();o(0,"span",4)(1,"button",18),u("click",function(){b(e);let a=l();return f(a.fire("education","add"))}),o(2,"mat-icon"),m(3,"add"),s()()()}}function Ge(t,i){if(t&1&&(o(0,"div",26),m(1),s()),t&2){let e=l().$implicit;l();let n=k(1);r(),mt("",n.specialty,": ",e.specialty)}}function Xe(t,i){if(t&1){let e=x();o(0,"span",4)(1,"button",18),u("click",function(){b(e);let a=l().$index,c=l();return f(c.fire("education","edit",a))}),o(2,"mat-icon"),m(3,"edit"),s()(),o(4,"button",18),u("click",function(){b(e);let a=l().$index,c=l();return f(c.fire("education","remove",a))}),o(5,"mat-icon"),m(6,"delete"),s()()()}}function Qe(t,i){if(t&1&&(o(0,"div",16)(1,"div",23)(2,"span",24),m(3),s(),o(4,"span",25),m(5),s()(),o(6,"div",26),m(7),s(),h(8,Ge,2,2,"div",26),h(9,Xe,7,0,"span",4),s()),t&2){let e=i.$implicit,n=l(),a=k(2);r(3),v(e.degree),r(2),v(n.period(e.startDate,e.endDate)),r(2),v(e.institution),r(),_(e.specialty?8:-1),r(),_(a?9:-1)}}function Ue(t,i){if(t&1){let e=x();o(0,"span",4)(1,"button",18),u("click",function(){b(e);let a=l();return f(a.fire("employment","add"))}),o(2,"mat-icon"),m(3,"add"),s()()()}}function He(t,i){if(t&1&&(o(0,"div",28)(1,"span",30),m(2),s(),m(3),s()),t&2){let e=l().$implicit;l();let n=k(1);r(2),C("",n.project,": "),r(),C("",e.project," ")}}function qe(t,i){if(t&1&&(o(0,"div",28)(1,"span",30),m(2),s(),m(3),s()),t&2){let e=l().$implicit;l();let n=k(1);r(2),C("",n.description,": "),r(),C("",e.description," ")}}function Je(t,i){if(t&1&&(o(0,"li"),m(1),s()),t&2){let e=i.$implicit;r(),v(e)}}function Ze(t,i){if(t&1&&(o(0,"ul",29),D(1,Je,2,1,"li",null,V),s()),t&2){let e=l().$implicit;r(),T(e.responsibilities)}}function Ke(t,i){if(t&1){let e=x();o(0,"span",4)(1,"button",18),u("click",function(){b(e);let a=l().$index,c=l();return f(c.fire("employment","edit",a))}),o(2,"mat-icon"),m(3,"edit"),s()(),o(4,"button",18),u("click",function(){b(e);let a=l().$index,c=l();return f(c.fire("employment","remove",a))}),o(5,"mat-icon"),m(6,"delete"),s()()()}}function We(t,i){if(t&1&&(o(0,"div",17)(1,"div",23)(2,"span",27),m(3),s(),o(4,"span",25),m(5),s()(),h(6,He,4,2,"div",28),h(7,qe,4,2,"div",28),h(8,Ze,3,0,"ul",29),h(9,Ke,7,0,"span",4),s()),t&2){let e=i.$implicit,n=l(),a=k(2);r(3),mt("",e.role," (",e.company,")"),r(2),v(n.period(e.startDate,e.endDate)),r(),_(e.project?6:-1),r(),_(e.description?7:-1),r(),_(e.responsibilities.length?8:-1),r(),_(a?9:-1)}}var Ye={en:{summary:"Summary",languages:"Languages",skills:"Technical Skills",education:"Education",employment:"Employment",specialty:"Specialty",project:"Project",description:"Description"},uk:{summary:"\u041F\u0440\u043E\u0444\u0456\u043B\u044C",languages:"\u041C\u043E\u0432\u0438",skills:"\u0422\u0435\u0445\u043D\u0456\u0447\u043D\u0456 \u043D\u0430\u0432\u0438\u0447\u043A\u0438",education:"\u041E\u0441\u0432\u0456\u0442\u0430",employment:"\u0414\u043E\u0441\u0432\u0456\u0434 \u0440\u043E\u0431\u043E\u0442\u0438",specialty:"\u0421\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C",project:"\u041F\u0440\u043E\u0454\u043A\u0442",description:"\u041E\u043F\u0438\u0441"}},ie=class t{settings=d(tt);i18n=d(Xt);resume=lt.required();editable=lt(!1);edit=Et();labels=W(()=>Ye[this.settings.cvLanguage()]);fire(i,e,n){this.edit.emit({section:i,action:e,index:n})}contactRows(i){let e=i.basics.contact,n=[];return e.location&&n.push({icon:"place",value:e.location}),e.github&&n.push({icon:"code",value:e.github}),e.email&&n.push({icon:"mail",value:e.email}),e.linkedin&&n.push({icon:"link",value:e.linkedin}),e.phone&&n.push({icon:"call",value:e.phone}),e.website&&n.push({icon:"language",value:e.website}),e.birthDate&&n.push({icon:"cake",value:e.birthDate}),n}period(i,e){return i&&e?`${i} - ${e}`:i??e??""}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=L({type:t,selectors:[["app-cv-document"]],inputs:{resume:[1,"resume"],editable:[1,"editable"]},outputs:{edit:"edit"},decls:47,vars:20,consts:[[1,"cv-document"],[1,"cv-grid"],[1,"cv-sidebar"],[1,"cv-head","cv-block"],[1,"cv-block-actions"],["referrerpolicy","no-referrer",1,"cv-photo",3,"src","alt"],[1,"cv-name"],[1,"cv-headline"],[1,"cv-contact-list"],[1,"cv-contact-item"],[1,"cv-section-title","cv-block"],[1,"cv-kv-list"],[1,"cv-kv-row","cv-block"],[1,"cv-skill-group","cv-block"],[1,"cv-main"],[1,"cv-summary"],[1,"cv-edu-item","cv-block"],[1,"cv-job","cv-block"],["type","button",1,"cv-mini-btn",3,"click"],[1,"cv-kv-value"],[1,"cv-skill-group-name"],[1,"cv-skill-tags"],[1,"cv-skill-tag"],[1,"cv-job-header"],[1,"cv-edu-degree"],[1,"cv-job-period"],[1,"cv-edu-meta"],[1,"cv-job-title"],[1,"cv-job-line"],[1,"cv-resp-list"],[1,"cv-job-label"]],template:function(e,n){if(e&1&&(Lt(0)(1)(2),o(3,"article",0)(4,"div",1)(5,"aside",2)(6,"header",3),h(7,Ie,4,0,"span",4),h(8,De,1,2,"img",5),o(9,"h1",6),m(10),s(),h(11,Te,2,1,"p",7),s(),o(12,"section")(13,"ul",8),D(14,Me,5,2,"li",9,Ee),s()(),o(16,"section")(17,"h2",10),m(18),h(19,Ae,4,0,"span",4),s(),o(20,"div",11),D(21,Oe,6,3,"div",12,V),s()(),o(23,"section")(24,"h2",10),m(25),h(26,ze,4,0,"span",4),s(),D(27,Pe,6,2,"div",13,V),s()(),o(29,"main",14)(30,"section")(31,"h2",10),m(32),h(33,Ve,4,0,"span",4),s(),h(34,Ne,2,1,"p",15),s(),o(35,"section")(36,"h2",10),m(37),h(38,$e,4,0,"span",4),s(),D(39,Qe,10,5,"div",16,V),s(),o(41,"section")(42,"h2",10),m(43),h(44,Ue,4,0,"span",4),s(),D(45,We,10,7,"div",17,V),s()()()()),e&2){let a=K(n.resume());r();let c=K(n.labels());r();let g=K(n.editable());r(),w("cv-editable",g),r(4),_(g?7:-1),r(),_(a.basics.containsImage&&a.basics.imageURL?8:-1),r(2),v(a.basics.fullName),r(),_(a.basics.title?11:-1),r(3),T(n.contactRows(a)),r(4),C(" ",c.languages," "),r(),_(g?19:-1),r(2),T(a.languages),r(4),C(" ",c.skills," "),r(),_(g?26:-1),r(),T(a.skills),r(5),C(" ",c.summary," "),r(),_(g?33:-1),r(),_(a.basics.summary?34:-1),r(3),C(" ",c.education," "),r(),_(g?38:-1),r(),T(a.education),r(4),C(" ",c.employment," "),r(),_(g?44:-1),r(),T(a.employment)}},dependencies:[Nt,Vt],encapsulation:2,changeDetection:0})};var F=class extends Error{constructor(e,n){super(e);this.detail=n;this.name="AiError"}detail};var ne=class t{http=d(It);settings=d(tt);async generateText(i,e={}){let n=this.settings.apiKey();if(!n)throw new F("Gemini API key is not set. Add it in Settings before using AI features.");let a=this.settings.model()||ht.defaultModel,c=`${ht.baseUrl}/${a}:generateContent`,g={contents:[{parts:[{text:i}]}],generationConfig:ut({temperature:e.temperature??.4},e.jsonOutput?{responseMimeType:"application/json"}:{})},gt;try{gt=await ft(this.http.post(c,g,{params:{key:n}}))}catch(ae){throw new F("Failed to reach Gemini. Check your API key and network connection.",ae)}return this.extractText(gt)}extractText(i){if(i.promptFeedback?.blockReason)throw new F(`Gemini blocked the request (${i.promptFeedback.blockReason}).`);let n=(i.candidates?.[0]?.content?.parts??[]).map(a=>a.text??"").join("").trim();if(!n)throw new F("Gemini returned an empty response.");return n}static \u0275fac=function(e){return new(e||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})};function ti(t){let i=t.trim(),e=i.match(/```(?:json)?\s*([\s\S]*?)```/i);e&&(i=e[1].trim());let n=i.search(/[[{]/),a=Math.max(i.lastIndexOf("}"),i.lastIndexOf("]"));return n!==-1&&a!==-1&&a>n&&(i=i.slice(n,a+1)),i}function Mn(t){try{return JSON.parse(ti(t))}catch{return null}}export{oe as a,Qt as b,he as c,be as d,zi as e,Fi as f,ji as g,Bi as h,qt as i,Jt as j,Zt as k,Wt as l,te as m,F as n,ne as o,Mn as p,mn as q,ln as r,ie as s};
