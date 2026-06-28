import{A as Je,Aa as et,B as gn,Ba as fe,C as Xe,Ca as he,Da as Tn,Ea as Sn,Eb as ve,Fa as Mn,Fb as K,G as bn,Ga as Fn,Ha as xn,I as qe,Ia as Rn,J as vn,Ja as On,K as yn,Ka as T,L as Qe,N as ue,O as A,Oa as pe,Pa as Nn,Pb as Z,Qa as tt,Qb as it,R as d,S as I,U as f,Ua as ge,V as m,Va as Ft,W as s,Wa as Ln,X as Tt,Y as _n,Ya as kn,Z as Fe,_ as Dn,a as Ye,ab as O,bb as S,c as ae,ca as P,cb as N,d as C,da as g,db as nt,dc as Un,e as un,ga as de,h as k,ha as D,hb as rt,i as dn,ia as Q,jc as jn,kb as xt,kc as U,la as ee,lc as zn,m as w,mb as Re,n as ln,na as En,nc as $n,oa as wn,pa as St,q as mn,s as fn,sa as x,ta as Mt,ua as An,v as se,va as xe,wa as Cn,x as hn,xa as le,xb as Pn,y as pn,ya as In,yb as Bn,z as ce,za as me,zb as be}from"./chunk-V4U76MBR.js";import{a as y}from"./chunk-JJCA6Z7Z.js";var Vn=null;function V(){return Vn}function Rt(n){Vn??=n}var Oe=class{},ye=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:()=>s(Hn),providedIn:"platform"})}return n})();var Hn=(()=>{class n extends ye{_location;_history;_doc=s(g);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return V().getBaseHref(this._doc)}onPopState(e){let t=V().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=V().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,i){this._history.pushState(e,t,i)}replaceState(e,t,i){this._history.replaceState(e,t,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Kn(n,r){return n?r?n.endsWith("/")?r.startsWith("/")?n+r.slice(1):n+r:r.startsWith("/")?n+r:`${n}/${r}`:n:r}function Gn(n){let r=n.search(/#|\?|$/);return n[r-1]==="/"?n.slice(0,r-1)+n.slice(r):n}function Y(n){return n&&n[0]!=="?"?`?${n}`:n}var ot=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:()=>s(ti),providedIn:"root"})}return n})(),ei=new f(""),ti=(()=>{class n extends ot{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??s(g).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Kn(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+Y(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${t}${i}`:t}pushState(e,t,i,o){let a=this.prepareExternalUrl(i+Y(o));this._platformLocation.pushState(e,t,a)}replaceState(e,t,i,o){let a=this.prepareExternalUrl(i+Y(o));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(m(ye),m(ei,8))};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Zn=(()=>{class n{_subject=new C;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=ii(Gn(Wn(t))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+Y(t))}normalize(e){return n.stripTrailingSlash(ri(this._basePath,Wn(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",i=null){this._locationStrategy.pushState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Y(t)),i)}replaceState(e,t="",i=null){this._locationStrategy.replaceState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Y(t)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(i=>i(e,t))}subscribe(e,t,i){return this._subject.subscribe({next:e,error:t??void 0,complete:i??void 0})}static normalizeQueryParams=Y;static joinWithSlash=Kn;static stripTrailingSlash=Gn;static \u0275fac=function(t){return new(t||n)(m(ot))};static \u0275prov=d({token:n,factory:()=>ni(),providedIn:"root"})}return n})();function ni(){return new Zn(m(ot))}function ri(n,r){if(!n||!r.startsWith(n))return r;let e=r.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function Wn(n){return n.replace(/\/index\.html$/,"")}function ii(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var oi=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=s(P);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,i):!1,get:(e,t,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,i)}})}static \u0275fac=function(t){return new(t||n)(Ln(kn))};static \u0275dir=N({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[St]})}return n})();function Ne(n,r){r=encodeURIComponent(r);for(let e of n.split(";")){let t=e.indexOf("="),[i,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(i.trim()===r)return decodeURIComponent(o)}return null}var te=class{};var Ot="browser";function Jn(n){return n===Ot}var Le=class{_doc;constructor(r){this._doc=r}manager},at=(()=>{class n extends Le{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,i,o){return e.addEventListener(t,i,o),()=>this.removeEventListener(e,t,i,o)}removeEventListener(e,t,i,o){return e.removeEventListener(t,i,o)}static \u0275fac=function(t){return new(t||n)(m(g))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),ut=new f(""),Pt=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let i=e.filter(a=>!(a instanceof at));this._plugins=i.slice().reverse();let o=e.find(a=>a instanceof at);o&&this._plugins.push(o)}addEventListener(e,t,i,o){return this._findPluginFor(t).addEventListener(e,t,i,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new A(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(m(ut),m(D))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),Nt="ng-app-id";function Xn(n){for(let r of n)r.remove()}function qn(n,r){let e=r.createElement("style");return e.textContent=n,e}function ui(n,r,e,t){let i=n.head?.querySelectorAll(`style[${Nt}="${r}"],link[${Nt}="${r}"]`);if(i)for(let o of i)o.removeAttribute(Nt),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function kt(n,r){let e=r.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var Bt=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,i,o={}){this.doc=e,this.appId=t,this.nonce=i,ui(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let i of e)this.addUsage(i,this.inline,qn);t?.forEach(i=>this.addUsage(i,this.external,kt))}removeStyles(e,t){for(let i of e)this.removeUsage(i,this.inline);t?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,t,i){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,i(e,this.doc)))})}removeUsage(e,t){let i=t.get(e);i&&(i.usage--,i.usage<=0&&(Xn(i.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Xn(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:i}]of this.inline)i.push(this.addElement(e,qn(t,this.doc)));for(let[t,{elements:i}]of this.external)i.push(this.addElement(e,kt(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(m(g),m(xe),m(me,8),m(le))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),Lt={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ut=/%COMP%/g;var er="%COMP%",di=`_nghost-${er}`,li=`_ngcontent-${er}`,mi=!0,fi=new f("",{factory:()=>mi});function hi(n){return li.replace(Ut,n)}function pi(n){return di.replace(Ut,n)}function tr(n,r){return r.map(e=>e.replace(Ut,n))}var jt=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,i,o,a,c,u=null,l=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=c,this.nonce=u,this.tracingService=l,this.defaultRenderer=new ke(e,a,c,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,t);return i instanceof ct?i.applyToHost(e):i instanceof Pe&&i.applyStyles(),i}getOrCreateRenderer(e,t){let i=this.rendererByCompId,o=i.get(t.id);if(!o){let a=this.doc,c=this.ngZone,u=this.eventManager,l=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,_=this.tracingService;switch(t.encapsulation){case et.Emulated:o=new ct(u,l,t,this.appId,h,a,c,_);break;case et.ShadowDom:return new st(u,e,t,a,c,this.nonce,_,l);case et.ExperimentalIsolatedShadowDom:return new st(u,e,t,a,c,this.nonce,_);default:o=new Pe(u,l,t,h,a,c,_);break}i.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(m(Pt),m(Bt),m(xe),m(fi),m(g),m(D),m(me),m(tt,8))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),ke=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,t,i){this.eventManager=r,this.doc=e,this.ngZone=t,this.tracingService=i}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(Lt[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(Qn(r)?r.content:r).appendChild(e)}insertBefore(r,e,t){r&&(Qn(r)?r.content:r).insertBefore(e,t)}removeChild(r,e){e.remove()}selectRootElement(r,e){let t=typeof r=="string"?this.doc.querySelector(r):r;if(!t)throw new A(-5104,!1);return e||(t.textContent=""),t}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,t,i){if(i){e=i+":"+e;let o=Lt[i];o?r.setAttributeNS(o,e,t):r.setAttribute(e,t)}else r.setAttribute(e,t)}removeAttribute(r,e,t){if(t){let i=Lt[t];i?r.removeAttributeNS(i,e):r.removeAttribute(`${t}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,t,i){i&(pe.DashCase|pe.Important)?r.style.setProperty(e,t,i&pe.Important?"important":""):r.style[e]=t}removeStyle(r,e,t){t&pe.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,t){r!=null&&(r[e]=t)}setValue(r,e){r.nodeValue=e}listen(r,e,t,i){if(typeof r=="string"&&(r=V().getGlobalEventTarget(this.doc,r),!r))throw new A(5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(r,e,o)),this.eventManager.addEventListener(r,e,o,i)}decoratePreventDefault(r){return e=>{if(e==="__ngUnwrap__")return r;r(e)===!1&&e.preventDefault()}}};function Qn(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var st=class extends ke{hostEl;sharedStylesHost;shadowRoot;constructor(r,e,t,i,o,a,c,u){super(r,i,o,c),this.hostEl=e,this.sharedStylesHost=u,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=t.styles;l=tr(t.id,l);for(let _ of l){let M=document.createElement("style");a&&M.setAttribute("nonce",a),M.textContent=_,this.shadowRoot.appendChild(M)}let h=t.getExternalStyles?.();if(h)for(let _ of h){let M=kt(_,i);a&&M.setAttribute("nonce",a),this.shadowRoot.appendChild(M)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,t){return super.insertBefore(this.nodeOrShadowRoot(r),e,t)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Pe=class extends ke{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,t,i,o,a,c,u){super(r,o,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let l=t.styles;this.styles=u?tr(u,l):l,this.styleUrls=t.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Nn.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ct=class extends Pe{contentAttr;hostAttr;constructor(r,e,t,i,o,a,c,u){let l=i+"-"+t.id;super(r,e,t,o,a,c,u,l),this.contentAttr=hi(l),this.hostAttr=pi(l)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){let t=super.createElement(r,e);return super.setAttribute(t,this.contentAttr,""),t}};var dt=class n extends Oe{supportsDOMEvents=!0;static makeCurrent(){Rt(new n)}onAndCancel(r,e,t,i){return r.addEventListener(e,t,i),()=>{r.removeEventListener(e,t,i)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e==="window"?window:e==="document"?r:e==="body"?r.body:null}getBaseHref(r){let e=bi();return e==null?null:vi(e)}resetBaseElement(){Be=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return Ne(document.cookie,r)}},Be=null;function bi(){return Be=Be||document.head.querySelector("base"),Be?Be.getAttribute("href"):null}function vi(n){return new URL(n,document.baseURI).pathname}var yi=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),nr=["alt","control","meta","shift"],_i={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Di={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},rr=(()=>{class n extends Le{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,i,o){let a=n.parseEventName(t),c=n.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>V().onAndCancel(e,a.domEventName,c,o))}static parseEventName(e){let t=e.toLowerCase().split("."),i=t.shift();if(t.length===0||!(i==="keydown"||i==="keyup"))return null;let o=n._normalizeKey(t.pop()),a="",c=t.indexOf("code");if(c>-1&&(t.splice(c,1),a="code."),nr.forEach(l=>{let h=t.indexOf(l);h>-1&&(t.splice(h,1),a+=l+".")}),a+=o,t.length!=0||o.length===0)return null;let u={};return u.domEventName=i,u.fullKey=a,u}static matchEventFullKeyCode(e,t){let i=_i[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(i=e.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),nr.forEach(a=>{if(a!==i){let c=Di[a];c(e)&&(o+=a+".")}}),o+=i,o===t)}static eventCallback(e,t,i){return o=>{n.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(m(g))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})();async function Ei(n,r,e){let t=y({rootComponent:n},wi(r,e));return jn(t)}function wi(n,r){return{platformRef:r?.platformRef,appProviders:[...Si,...n?.providers??[]],platformProviders:Ti}}function Ai(){dt.makeCurrent()}function Ci(){return new Q}function Ii(){return An(document),document}var Ti=[{provide:le,useValue:Ot},{provide:Cn,useValue:Ai,multi:!0},{provide:g,useFactory:Ii}];var Si=[{provide:_n,useValue:"root"},{provide:Q,useFactory:Ci},{provide:ut,useClass:at,multi:!0},{provide:ut,useClass:rr,multi:!0},jt,Bt,Pt,{provide:ge,useExisting:jt},{provide:te,useClass:yi},[]];var J=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r=="string"?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let i=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&r instanceof Headers?(this.headers=new Map,r.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:"a"})}set(r,e){return this.clone({name:r,value:e,op:"s"})}delete(r,e){return this.clone({name:r,value:e,op:"d"})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init(),Array.from(r.headers.keys()).forEach(e=>{this.headers.set(e,r.headers.get(e)),this.normalizedNames.set(e,r.normalizedNames.get(e))})}clone(r){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case"a":case"s":let t=r.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(r.name,e);let i=(r.op==="a"?this.headers.get(e):void 0)||[];i.push(...t),this.headers.set(e,i);break;case"d":let o=r.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(c=>o.indexOf(c)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(r,e){let t=r.toLowerCase();this.maybeSetNormalizedName(r,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(r,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=r.toLowerCase();this.headers.set(i,t),this.maybeSetNormalizedName(r,i)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var mt=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}},ft=class{encodeKey(r){return ir(r)}encodeValue(r){return ir(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function Mi(n,r){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[a,c]=o==-1?[r.decodeKey(i),""]:[r.decodeKey(i.slice(0,o)),r.decodeValue(i.slice(o+1))],u=e.get(a)||[];u.push(c),e.set(a,u)}),e}var Fi=/%(\d[a-f0-9])/gi,xi={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ir(n){return encodeURIComponent(n).replace(Fi,(r,e)=>xi[e]??r)}function lt(n){return`${n}`}var H=class n{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new ft,r.fromString){if(r.fromObject)throw new A(2805,!1);this.map=Mi(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let t=r.fromObject[e],i=Array.isArray(t)?t.map(lt):[lt(t)];this.map.set(e,i)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:"a"})}appendAll(r){let e=[];return Object.keys(r).forEach(t=>{let i=r[t];Array.isArray(i)?i.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:i,op:"a"})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:"s"})}delete(r,e){return this.clone({param:r,value:e,op:"d"})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(r=>r!=="").join("&")}clone(r){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(r=>this.map.set(r,this.cloneFrom.map.get(r))),this.updates.forEach(r=>{switch(r.op){case"a":case"s":let e=(r.op==="a"?this.map.get(r.param):void 0)||[];e.push(lt(r.value)),this.map.set(r.param,e);break;case"d":if(r.value!==void 0){let t=this.map.get(r.param)||[],i=t.indexOf(lt(r.value));i!==-1&&t.splice(i,1),t.length>0?this.map.set(r.param,t):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null)}};function Ri(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function or(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function ar(n){return typeof Blob<"u"&&n instanceof Blob}function sr(n){return typeof FormData<"u"&&n instanceof FormData}function Oi(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var cr="Content-Type",ur="Accept",dr="text/plain",lr="application/json",Ni=`${lr}, ${dr}, */*`,_e=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(r,e,t,i){this.url=e,this.method=r.toUpperCase();let o;if(Ri(this.method)||i?(this.body=t!==void 0?t:null,o=i):o=t,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new A(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new J,this.context??=new mt,!this.params)this.params=new H,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let c=e.indexOf("?"),u=c===-1?"?":c<e.length-1?"&":"";this.urlWithParams=e+u+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||or(this.body)||ar(this.body)||sr(this.body)||Oi(this.body)?this.body:this.body instanceof H?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||sr(this.body)?null:ar(this.body)?this.body.type||null:or(this.body)?null:typeof this.body=="string"?dr:this.body instanceof H?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?lr:null}clone(r={}){let e=r.method||this.method,t=r.url||this.url,i=r.responseType||this.responseType,o=r.keepalive??this.keepalive,a=r.priority||this.priority,c=r.cache||this.cache,u=r.mode||this.mode,l=r.redirect||this.redirect,h=r.credentials||this.credentials,_=r.referrer??this.referrer,M=r.integrity||this.integrity,X=r.referrerPolicy||this.referrerPolicy,W=r.transferCache??this.transferCache,R=r.timeout??this.timeout,p=r.body!==void 0?r.body:this.body,b=r.withCredentials??this.withCredentials,F=r.reportProgress??this.reportProgress,$=r.headers||this.headers,E=r.params||this.params,Se=r.context??this.context;return r.setHeaders!==void 0&&($=Object.keys(r.setHeaders).reduce((Me,q)=>Me.set(q,r.setHeaders[q]),$)),r.setParams&&(E=Object.keys(r.setParams).reduce((Me,q)=>Me.set(q,r.setParams[q]),E)),new n(e,t,p,{params:E,headers:$,context:Se,reportProgress:F,responseType:i,withCredentials:b,transferCache:W,keepalive:o,cache:c,priority:a,timeout:R,mode:u,redirect:l,credentials:h,referrer:_,integrity:M,referrerPolicy:X})}},ne=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(ne||{}),Ee=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,t="OK"){this.headers=r.headers||new J,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||t,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}},ht=class n extends Ee{constructor(r={}){super(r)}type=ne.ResponseHeader;clone(r={}){return new n({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},Ue=class n extends Ee{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=ne.Response;clone(r={}){return new n({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}},De=class extends Ee{name="HttpErrorResponse";message;error;ok=!1;constructor(r){super(r,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||"(unknown url)"}`:this.message=`Http failure response for ${r.url||"(unknown url)"}: ${r.status} ${r.statusText}`,this.error=r.error||null}},Li=200,ki=204;var Pi=new f("");var Bi=/^\)\]\}',?\n/;var $t=(()=>{class n{xhrFactory;tracingService=s(tt,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new A(-2800,!1);let t=this.xhrFactory;return k(null).pipe(yn(()=>new ae(o=>{let a=t.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((p,b)=>a.setRequestHeader(p,b.join(","))),e.headers.has(ur)||a.setRequestHeader(ur,Ni),!e.headers.has(cr)){let p=e.detectContentTypeHeader();p!==null&&a.setRequestHeader(cr,p)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let p=e.responseType.toLowerCase();a.responseType=p!=="json"?p:"text"}let c=e.serializeBody(),u=null,l=()=>{if(u!==null)return u;let p=a.statusText||"OK",b=new J(a.getAllResponseHeaders()),F=a.responseURL||e.url;return u=new ht({headers:b,status:a.status,statusText:p,url:F}),u},h=this.maybePropagateTrace(()=>{let{headers:p,status:b,statusText:F,url:$}=l(),E=null;b!==ki&&(E=typeof a.response>"u"?a.responseText:a.response),b===0&&(b=E?Li:0);let Se=b>=200&&b<300;if(e.responseType==="json"&&typeof E=="string"){let Me=E;E=E.replace(Bi,"");try{E=E!==""?JSON.parse(E):null}catch(q){E=Me,Se&&(Se=!1,E={error:q,text:E})}}Se?(o.next(new Ue({body:E,headers:p,status:b,statusText:F,url:$||void 0})),o.complete()):o.error(new De({error:E,headers:p,status:b,statusText:F,url:$||void 0}))}),_=this.maybePropagateTrace(p=>{let{url:b}=l(),F=new De({error:p,status:a.status||0,statusText:a.statusText||"Unknown Error",url:b||void 0});o.error(F)}),M=_;e.timeout&&(M=this.maybePropagateTrace(p=>{let{url:b}=l(),F=new De({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:b||void 0});o.error(F)}));let X=!1,W=this.maybePropagateTrace(p=>{X||(o.next(l()),X=!0);let b={type:ne.DownloadProgress,loaded:p.loaded};p.lengthComputable&&(b.total=p.total),e.responseType==="text"&&a.responseText&&(b.partialText=a.responseText),o.next(b)}),R=this.maybePropagateTrace(p=>{let b={type:ne.UploadProgress,loaded:p.loaded};p.lengthComputable&&(b.total=p.total),o.next(b)});return a.addEventListener("load",h),a.addEventListener("error",_),a.addEventListener("timeout",M),a.addEventListener("abort",_),e.reportProgress&&(a.addEventListener("progress",W),c!==null&&a.upload&&a.upload.addEventListener("progress",R)),a.send(c),o.next({type:ne.Sent}),()=>{a.removeEventListener("error",_),a.removeEventListener("abort",_),a.removeEventListener("load",h),a.removeEventListener("timeout",M),e.reportProgress&&(a.removeEventListener("progress",W),c!==null&&a.upload&&a.upload.removeEventListener("progress",R)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(t){return new(t||n)(m(te))};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ui(n,r){return r(n)}function ji(n,r,e){return(t,i)=>Dn(e,()=>r(t,o=>n(o,i)))}var mr=new f("",{factory:()=>[]}),fr=new f(""),hr=new f("",{factory:()=>!0});var Vt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:function(t){let i=null;return t?i=new(t||n):i=m($t),i},providedIn:"root"})}return n})();var pt=(()=>{class n{backend;injector;chain=null;pendingTasks=s(En);contributeToStability=s(hr);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(mr),...this.injector.get(fr,[])]));this.chain=t.reduceRight((i,o)=>ji(i,o,this.injector),Ui)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(Xe(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||n)(m(Vt),m(Fe))};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ht=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:function(t){let i=null;return t?i=new(t||n):i=m(pt),i},providedIn:"root"})}return n})();function zt(n,r){return{body:r,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,credentials:n.credentials,transferCache:n.transferCache,timeout:n.timeout,keepalive:n.keepalive,priority:n.priority,cache:n.cache,mode:n.mode,redirect:n.redirect,integrity:n.integrity,referrer:n.referrer,referrerPolicy:n.referrerPolicy}}var gt=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,i={}){let o;if(e instanceof _e)o=e;else{let u;i.headers instanceof J?u=i.headers:u=new J(i.headers);let l;i.params&&(i.params instanceof H?l=i.params:l=new H({fromObject:i.params})),o=new _e(e,t,i.body!==void 0?i.body:null,{headers:u,context:i.context,params:l,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let a=k(o).pipe(pn(u=>this.handler.handle(u)));if(e instanceof _e||i.observe==="events")return a;let c=a.pipe(se(u=>u instanceof Ue));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(w(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new A(2806,!1);return u.body}));case"blob":return c.pipe(w(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new A(2807,!1);return u.body}));case"text":return c.pipe(w(u=>{if(u.body!==null&&typeof u.body!="string")throw new A(2808,!1);return u.body}));default:return c.pipe(w(u=>u.body))}case"response":return c;default:throw new A(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new H().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,i={}){return this.request("PATCH",e,zt(i,t))}post(e,t,i={}){return this.request("POST",e,zt(i,t))}put(e,t,i={}){return this.request("PUT",e,zt(i,t))}static \u0275fac=function(t){return new(t||n)(m(Ht))};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var zi=new f("",{factory:()=>!0}),$i="XSRF-TOKEN",Vi=new f("",{factory:()=>$i}),Hi="X-XSRF-TOKEN",Gi=new f("",{factory:()=>Hi}),Wi=(()=>{class n{cookieName=s(Vi);doc=s(g);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ne(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),pr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:function(t){let i=null;return t?i=new(t||n):i=m(Wi),i},providedIn:"root"})}return n})();function Ki(n,r){if(!s(zi)||n.method==="GET"||n.method==="HEAD")return r(n);try{let i=s(ye).href,{origin:o}=new URL(i),{origin:a}=new URL(n.url,o);if(o!==a)return r(n)}catch{return r(n)}let e=s(pr).getToken(),t=s(Gi);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),r(n)}function Zi(...n){let r=[gt,pt,{provide:Ht,useExisting:pt},{provide:Vt,useFactory:()=>s(Pi,{optional:!0})??s($t)},{provide:mr,useValue:Ki,multi:!0}];for(let e of n)r.push(...e.\u0275providers);return Tt(r)}var fu=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(m(g))};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var je=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:function(t){let i=null;return t?i=new(t||n):i=m(Ji),i},providedIn:"root"})}return n})(),Ji=(()=>{class n extends je{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case T.NONE:return t;case T.HTML:return he(t,"HTML")?fe(t):On(this._doc,String(t)).toString();case T.STYLE:return he(t,"Style")?fe(t):t;case T.SCRIPT:if(he(t,"Script"))return fe(t);throw new A(5200,!1);case T.URL:return he(t,"URL")?fe(t):Rn(String(t));case T.RESOURCE_URL:if(he(t,"ResourceURL"))return fe(t);throw new A(5201,!1);default:throw new A(5202,!1)}}bypassSecurityTrustHtml(e){return Tn(e)}bypassSecurityTrustStyle(e){return Sn(e)}bypassSecurityTrustScript(e){return Mn(e)}bypassSecurityTrustUrl(e){return Fn(e)}bypassSecurityTrustResourceUrl(e){return xn(e)}static \u0275fac=function(t){return new(t||n)(m(g))};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ze(n){return n.buttons===0||n.detail===0}function $e(n){let r=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!r&&r.identifier===-1&&(r.radiusX==null||r.radiusX===1)&&(r.radiusY==null||r.radiusY===1)}var Gt;function gr(){if(Gt==null){let n=typeof document<"u"?document.head:null;Gt=!!(n&&(n.createShadowRoot||n.attachShadow))}return Gt}function Wt(n){if(gr()){let r=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function B(n){return n.composedPath?n.composedPath()[0]:n.target}var Kt;try{Kt=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Kt=!1}var j=(()=>{class n{_platformId=s(le);isBrowser=this._platformId?Jn(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Kt)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ve;function br(){if(Ve==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ve=!0}))}finally{Ve=Ve||!1}return Ve}function we(n){return br()?n:!!n.capture}function Zt(n,r=0){return vr(n)?Number(n):arguments.length===2?r:0}function vr(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function z(n){return n instanceof x?n.nativeElement:n}var yr=new f("cdk-input-modality-detector-options"),_r={ignoreKeys:[18,17,224,91,16]},Dr=650,Yt={passive:!0,capture:!0},Er=(()=>{class n{_platform=s(j);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new un(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=B(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Dr||(this._modality.next(ze(e)?"keyboard":"mouse"),this._mostRecentTarget=B(e))};_onTouchstart=e=>{if($e(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=B(e)};constructor(){let e=s(D),t=s(g),i=s(yr,{optional:!0});if(this._options=y(y({},_r),i),this.modalityDetected=this._modality.pipe(qe(1)),this.modalityChanged=this.modalityDetected.pipe(gn()),this._platform.isBrowser){let o=s(ge).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,Yt),o.listen(t,"mousedown",this._onMousedown,Yt),o.listen(t,"touchstart",this._onTouchstart,Yt)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),He=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(He||{}),wr=new f("cdk-focus-monitor-default-options"),bt=we({passive:!0,capture:!0}),vt=(()=>{class n{_ngZone=s(D);_platform=s(j);_inputModalityDetector=s(Er);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(g);_stopInputModalityDetector=new C;constructor(){let e=s(wr,{optional:!0});this._detectionMode=e?.detectionMode||He.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=B(e);for(let i=t;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,t=!1){let i=z(e);if(!this._platform.isBrowser||i.nodeType!==1)return k();let o=Wt(i)||this._document,a=this._elementInfo.get(i);if(a)return t&&(a.checkChildren=!0),a.subject;let c={checkChildren:t,subject:new C,rootNode:o};return this._elementInfo.set(i,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let t=z(e),i=this._elementInfo.get(t);i&&(i.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(i))}focusVia(e,t,i){let o=z(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([c,u])=>this._originChanged(c,t,u)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===He.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===He.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?Dr:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,t){let i=this._elementInfo.get(t),o=B(e);!i||!i.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),i)}_onBlur(e,t){let i=this._elementInfo.get(t);!i||i.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(i,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,i=this._rootNodeFocusListenerCount.get(t)||0;i||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,bt),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,bt)}),this._rootNodeFocusListenerCount.set(t,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Qe(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let i=this._rootNodeFocusListenerCount.get(t);i>1?this._rootNodeFocusListenerCount.set(t,i-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,bt),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,bt),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,i){this._setClasses(e,t),this._emitOrigin(i,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&t.push([o,i])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),qi=(()=>{class n{_elementRef=s(x);_focusMonitor=s(vt);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new de;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return n})();var yt=new WeakMap,Ge=(()=>{class n{_appRef;_injector=s(P);_environmentInjector=s(Fe);load(e){let t=this._appRef=this._appRef||this._injector.get(xt),i=yt.get(t);i||(i={loaders:new Set,refs:[]},yt.set(t,i),t.onDestroy(()=>{yt.get(t)?.refs.forEach(o=>o.destroy()),yt.delete(t)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push($n(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Qi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,i){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),_t;function eo(){if(_t===void 0&&(_t=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(_t=n.trustedTypes.createPolicy("angular#components",{createHTML:r=>r}))}return _t}function re(n){return eo()?.createHTML(n)||n}function Ar(n,r,e){let t=e.sanitize(T.HTML,r);n.innerHTML=re(t||"")}function Jt(n){return Array.isArray(n)?n:[n]}var Cr=new Set,ie,Dt=(()=>{class n{_platform=s(j);_nonce=s(me,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):no}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&to(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function to(n,r){if(!Cr.has(n))try{ie||(ie=document.createElement("style"),r&&ie.setAttribute("nonce",r),ie.setAttribute("type","text/css"),document.head.appendChild(ie)),ie.sheet&&(ie.sheet.insertRule(`@media ${n} {body{ }}`,0),Cr.add(n))}catch(e){console.error(e)}}function no(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var ro=(()=>{class n{_mediaMatcher=s(Dt);_zone=s(D);_queries=new Map;_destroySubject=new C;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Ir(Jt(e)).some(i=>this._registerQuery(i).mql.matches)}observe(e){let i=Ir(Jt(e)).map(a=>this._registerQuery(a).observable),o=ln(i);return o=mn(o.pipe(Je(1)),o.pipe(qe(1),ce(0))),o.pipe(w(a=>{let c={matches:!1,breakpoints:{}};return a.forEach(({matches:u,query:l})=>{c.matches=c.matches||u,c.breakpoints[l]=u}),c}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new ae(a=>{let c=u=>this._zone.run(()=>a.next(u));return t.addListener(c),()=>{t.removeListener(c)}}).pipe(vn(t),w(({matches:a})=>({query:e,matches:a})),Qe(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ir(n){return n.map(r=>r.split(",")).reduce((r,e)=>r.concat(e)).map(r=>r.trim())}function io(n){if(n.type==="characterData"&&n.target instanceof Comment)return!0;if(n.type==="childList"){for(let r=0;r<n.addedNodes.length;r++)if(!(n.addedNodes[r]instanceof Comment))return!1;for(let r=0;r<n.removedNodes.length;r++)if(!(n.removedNodes[r]instanceof Comment))return!1;return!0}return!1}var Tr=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),oo=(()=>{class n{_mutationObserverFactory=s(Tr);_observedElements=new Map;_ngZone=s(D);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=z(e);return new ae(i=>{let a=this._observeElement(t).pipe(w(c=>c.filter(u=>!io(u))),se(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{i.next(c)})});return()=>{a.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new C,i=this._mutationObserverFactory.create(o=>t.next(o));i&&i.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:i,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:i}=this._observedElements.get(e);t&&t.disconnect(),i.complete(),this._observedElements.delete(e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),hd=(()=>{class n{_contentObserver=s(oo);_elementRef=s(x);event=new de;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Zt(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(ce(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",U],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return n})(),pd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=S({type:n});static \u0275inj=I({providers:[Tr]})}return n})();var Sr=new f("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Mr=new f("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),ao=0,so=(()=>{class n{_ngZone=s(D);_defaultOptions=s(Mr,{optional:!0});_liveElement;_document=s(g);_sanitizer=s(je);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=s(Sr,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let i=this._defaultOptions,o,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[o,a]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=i&&i.politeness?i.politeness:"polite"),a==null&&i&&(a=i.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Ar(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),i=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return i.classList.add(e),i.classList.add("cdk-visually-hidden"),i.setAttribute("aria-atomic","true"),i.setAttribute("aria-live","polite"),i.id=`cdk-live-announcer-${ao++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<t.length;i++){let o=t[i],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var co=200,Et=class{_letterKeyStream=new C;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new C;selectedItem=this._selectedItem;constructor(r,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:co;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(r),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(r){this._selectedItemIndex=r}setItems(r){this._items=r}handleKey(r){let e=r.keyCode;r.key&&r.key.length===1?this._letterKeyStream.next(r.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(r){this._letterKeyStream.pipe(ue(e=>this._pressedLetters.push(e)),ce(r),se(()=>this._pressedLetters.length>0),w(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let i=(this._selectedItemIndex+t)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Fr(n,...r){return r.length?r.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Ae=class{_items;_activeItemIndex=ee(-1);_activeItem=ee(null);_wrap=!1;_typeaheadSubscription=Ye.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=r=>r.disabled;constructor(r,e){this._items=r,r instanceof Mt?this._itemChangesSubscription=r.changes.subscribe(t=>this._itemsChanged(t.toArray())):rt(r)&&(this._effectRef=wn(()=>this._itemsChanged(r()),{injector:e}))}tabOut=new C;change=new C;skipPredicate(r){return this._skipPredicateFn=r,this}withWrap(r=!0){return this._wrap=r,this}withVerticalOrientation(r=!0){return this._vertical=r,this}withHorizontalOrientation(r){return this._horizontal=r,this}withAllowedModifierKeys(r){return this._allowedModifierKeys=r,this}withTypeAhead(r=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Et(e,{debounceInterval:typeof r=="number"?r:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(r=!0){return this._homeAndEnd=r,this}withPageUpDown(r=!0,e=10){return this._pageUpAndDown={enabled:r,delta:e},this}setActiveItem(r){let e=this._activeItem();this.updateActiveItem(r),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(r){let e=r.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!r[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(i||Fr(r,"shiftKey"))&&this._typeahead?.handleKey(r);return}this._typeahead?.reset(),r.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(r){let e=this._getItemsArray(),t=typeof r=="number"?r:e.indexOf(r),i=e[t];this._activeItem.set(i??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(r){this._wrap?this._setActiveInWrapMode(r):this._setActiveInDefaultMode(r)}_setActiveInWrapMode(r){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let i=(this._activeItemIndex()+r*t+e.length)%e.length,o=e[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(r){this._setActiveItemByIndex(this._activeItemIndex()+r,r)}_setActiveItemByIndex(r,e){let t=this._getItemsArray();if(t[r]){for(;this._skipPredicateFn(t[r]);)if(r+=e,!t[r])return;this.setActiveItem(r)}}_getItemsArray(){return rt(this._items)?this._items():this._items instanceof Mt?this._items.toArray():this._items}_itemsChanged(r){this._typeahead?.setItems(r);let e=this._activeItem();if(e){let t=r.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Xt=class extends Ae{setActiveItem(r){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(r),this.activeItem&&this.activeItem.setActiveStyles()}};var qt=class extends Ae{_origin="program";setFocusOrigin(r){return this._origin=r,this}setActiveItem(r){super.setActiveItem(r),this.activeItem&&this.activeItem.focus(this._origin)}};var Qt={},en=class n{_appId=s(xe);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(r,e=!1){return this._appId!=="ng"&&(r+=this._appId),Qt.hasOwnProperty(r)||(Qt[r]=0),`${r}${e?n._infix+"-":""}${Qt[r]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})};var xr=" ";function cl(n,r,e){let t=Rr(n,r);e=e.trim(),!t.some(i=>i.trim()===e)&&(t.push(e),n.setAttribute(r,t.join(xr)))}function ul(n,r,e){let t=Rr(n,r);e=e.trim();let i=t.filter(o=>o!==e);i.length?n.setAttribute(r,i.join(xr)):n.removeAttribute(r)}function Rr(n,r){return n.getAttribute(r)?.match(/\S+/g)??[]}var We=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(We||{}),wt,oe;function bl(){if(oe==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return oe=!1,oe;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)oe=!0;else{let n=Element.prototype.scrollTo;n?oe=!/\{\s*\[native code\]\s*\}/.test(n.toString()):oe=!1}}return oe}function vl(){if(typeof document!="object"||!document)return We.NORMAL;if(wt==null){let n=document.createElement("div"),r=n.style;n.dir="rtl",r.width="1px",r.overflow="auto",r.visibility="hidden",r.pointerEvents="none",r.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",n.appendChild(e),document.body.appendChild(n),wt=We.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,wt=n.scrollLeft===0?We.NEGATED:We.INVERTED),n.remove()}return wt}function _l(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Ce,Or=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function wl(){if(Ce)return Ce;if(typeof document!="object"||!document)return Ce=new Set(Or),Ce;let n=document.createElement("input");return Ce=new Set(Or.filter(r=>(n.setAttribute("type",r),n.type===r))),Ce}var Sl={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var uo=new f("MATERIAL_ANIMATIONS"),Nr=null;function lo(){return s(uo,{optional:!0})?.animationsDisabled||s(In,{optional:!0})==="NoopAnimations"?"di-disabled":(Nr??=s(Dt).matchMedia("(prefers-reduced-motion)").matches,Nr?"reduced-motion":"enabled")}function Ie(){return lo()!=="enabled"}function Nl(n){return n==null?"":typeof n=="string"?n:`${n}px`}function kl(n){return n!=null&&`${n}`!="false"}var L=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(L||{}),tn=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=L.HIDDEN;constructor(r,e,t,i=!1){this._renderer=r,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},Lr=we({passive:!0,capture:!0}),nn=class{_events=new Map;addHandler(r,e,t,i){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(i):o.set(t,new Set([i]))}else this._events.set(e,new Map([[t,new Set([i])]])),r.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Lr)})}removeHandler(r,e,t){let i=this._events.get(r);if(!i)return;let o=i.get(e);o&&(o.delete(t),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(r),document.removeEventListener(r,this._delegateEventHandler,Lr)))}_delegateEventHandler=r=>{let e=B(r);e&&this._events.get(r.type)?.forEach((t,i)=>{(i===e||i.contains(e))&&t.forEach(o=>o.handleEvent(r))})}},Ke={enterDuration:225,exitDuration:150},mo=800,kr=we({passive:!0,capture:!0}),Pr=["mousedown","touchstart"],Br=["mouseup","mouseleave","touchend","touchcancel"],fo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ze=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new nn;constructor(r,e,t,i,o){this._target=r,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=z(t)),o&&o.get(Ge).load(fo)}fadeInRipple(r,e,t={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=y(y({},Ke),t.animation);t.centered&&(r=i.left+i.width/2,e=i.top+i.height/2);let a=t.radius||ho(r,e,i),c=r-i.left,u=e-i.top,l=o.enterDuration,h=document.createElement("div");h.classList.add("mat-ripple-element"),h.style.left=`${c-a}px`,h.style.top=`${u-a}px`,h.style.height=`${a*2}px`,h.style.width=`${a*2}px`,t.color!=null&&(h.style.backgroundColor=t.color),h.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(h);let _=window.getComputedStyle(h),M=_.transitionProperty,X=_.transitionDuration,W=M==="none"||X==="0s"||X==="0s, 0s"||i.width===0&&i.height===0,R=new tn(this,h,t,W);h.style.transform="scale3d(1, 1, 1)",R.state=L.FADING_IN,t.persistent||(this._mostRecentTransientRipple=R);let p=null;return!W&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let b=()=>{p&&(p.fallbackTimer=null),clearTimeout($),this._finishRippleTransition(R)},F=()=>this._destroyRipple(R),$=setTimeout(F,l+100);h.addEventListener("transitionend",b),h.addEventListener("transitioncancel",F),p={onTransitionEnd:b,onTransitionCancel:F,fallbackTimer:$}}),this._activeRipples.set(R,p),(W||!l)&&this._finishRippleTransition(R),R}fadeOutRipple(r){if(r.state===L.FADING_OUT||r.state===L.HIDDEN)return;let e=r.element,t=y(y({},Ke),r.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",r.state=L.FADING_OUT,(r._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(r)}fadeOutAll(){this._getActiveRipples().forEach(r=>r.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(r=>{r.config.persistent||r.fadeOut()})}setupTriggerEvents(r){let e=z(r);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Pr.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(r){r.type==="mousedown"?this._onMousedown(r):r.type==="touchstart"?this._onTouchStart(r):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Br.forEach(e=>{this._triggerElement.addEventListener(e,this,kr)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(r){r.state===L.FADING_IN?this._startFadeOutTransition(r):r.state===L.FADING_OUT&&this._destroyRipple(r)}_startFadeOutTransition(r){let e=r===this._mostRecentTransientRipple,{persistent:t}=r.config;r.state=L.VISIBLE,!t&&(!e||!this._isPointerDown)&&r.fadeOut()}_destroyRipple(r){let e=this._activeRipples.get(r)??null;this._activeRipples.delete(r),this._activeRipples.size||(this._containerRect=null),r===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),r.state=L.HIDDEN,e!==null&&(r.element.removeEventListener("transitionend",e.onTransitionEnd),r.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),r.element.remove()}_onMousedown(r){let e=ze(r),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+mo;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(r.clientX,r.clientY,this._target.rippleConfig))}_onTouchStart(r){if(!this._target.rippleDisabled&&!$e(r)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=r.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(r=>{let e=r.state===L.VISIBLE||r.config.terminateOnPointerUp&&r.state===L.FADING_IN;!r.config.persistent&&e&&r.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let r=this._triggerElement;r&&(Pr.forEach(e=>n._eventManager.removeHandler(e,r,this)),this._pointerUpEventsRegistered&&(Br.forEach(e=>r.removeEventListener(e,this,kr)),this._pointerUpEventsRegistered=!1))}};function ho(n,r,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),i=Math.max(Math.abs(r-e.top),Math.abs(r-e.bottom));return Math.sqrt(t*t+i*i)}var rn=new f("mat-ripple-global-options"),Jl=(()=>{class n{_elementRef=s(x);_animationsDisabled=Ie();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(D),t=s(j),i=s(rn,{optional:!0}),o=s(P);this._globalOptions=i||{},this._rippleRenderer=new Ze(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:y(y(y({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,i){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,y(y({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,y(y({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,i){t&2&&Z("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var po={capture:!0},go=["focus","mousedown","mouseenter","touchstart"],on="mat-ripple-loader-uninitialized",an="mat-ripple-loader-class-name",Ur="mat-ripple-loader-centered",At="mat-ripple-loader-disabled",jr=(()=>{class n{_document=s(g);_animationsDisabled=Ie();_globalRippleOptions=s(rn,{optional:!0});_platform=s(j);_ngZone=s(D);_injector=s(P);_eventCleanups;_hosts=new Map;constructor(){let e=s(ge).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>go.map(t=>e.listen(this._document,t,this._onInteraction,po)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(on,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(an))&&e.setAttribute(an,t.className||""),t.centered&&e.setAttribute(Ur,""),t.disabled&&e.setAttribute(At,"")}setDisabled(e,t){let i=this._hosts.get(e);i?(i.target.rippleDisabled=t,!t&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):t?e.setAttribute(At,""):e.removeAttribute(At)}_onInteraction=e=>{let t=B(e);if(t instanceof HTMLElement){let i=t.closest(`[${on}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(an)),e.append(t);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??Ke.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??Ke.exitDuration,c={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(At),rippleConfig:{centered:e.hasAttribute(Ur),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},u=new Ze(c,this._ngZone,t,this._platform,this._injector),l=!c.rippleDisabled;l&&u.setupTriggerEvents(e),this._hosts.set(e,{target:c,renderer:u,hasSetUpEvents:l}),e.removeAttribute(on)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var zr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var bo=["mat-icon-button",""],vo=["*"],yo=new f("MAT_BUTTON_CONFIG");function $r(n){return n==null?void 0:zn(n)}var sn=(()=>{class n{_elementRef=s(x);_ngZone=s(D);_animationsDisabled=Ie();_config=s(yo,{optional:!0});_focusMonitor=s(vt);_cleanupClick;_renderer=s(Ft);_rippleLoader=s(jr);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){s(Ge).load(zr);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,i){t&2&&(Re("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),it(i.color?"mat-"+i.color:""),Z("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",U],disabled:[2,"disabled","disabled",U],ariaDisabled:[2,"aria-disabled","ariaDisabled",U],disabledInteractive:[2,"disabledInteractive","disabledInteractive",U],tabIndex:[2,"tabIndex","tabIndex",$r],_tabindex:[2,"tabindex","_tabindex",$r]}})}return n})(),_o=(()=>{class n extends sn{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[nt],attrs:bo,ngContentSelectors:vo,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,i){t&1&&(ve(),be(0,"span",0),K(1),be(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Do=new f("cdk-dir-doc",{providedIn:"root",factory:()=>s(g)}),Eo=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Vr(n){let r=n?.toLowerCase()||"";return r==="auto"&&typeof navigator<"u"&&navigator?.language?Eo.test(navigator.language)?"rtl":"ltr":r==="rtl"?"rtl":"ltr"}var wo=(()=>{class n{get value(){return this.valueSignal()}valueSignal=ee("ltr");change=new de;constructor(){let e=s(Do,{optional:!0});if(e){let t=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Vr(t||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Te=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=S({type:n});static \u0275inj=I({})}return n})();var Hr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=S({type:n});static \u0275inj=I({imports:[Te]})}return n})();var Ao=["matButton",""],Co=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Io=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Gr=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Mm=(()=>{class n extends sn{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=To(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,i=this._appearance?Gr.get(this._appearance):null,o=Gr.get(e);i&&t.remove(...i),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[nt],attrs:Ao,ngContentSelectors:Io,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,i){t&1&&(ve(Co),be(0,"span",0),K(1),Pn(2,"span",1),K(3,1),Bn(),K(4,2),be(5,"span",2)(6,"span",3)),t&2&&Z("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function To(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Fm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=S({type:n});static \u0275inj=I({imports:[Hr,Te]})}return n})();function Wr(n){return Error(`Unable to find icon with the name "${n}"`)}function So(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Kr(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Zr(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var G=class{url;svgText;options;svgElement=null;constructor(r,e,t){this.url=r,this.svgText=e,this.options=t}},Jr=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,i,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=i}addSvgIcon(e,t,i){return this.addSvgIconInNamespace("",e,t,i)}addSvgIconLiteral(e,t,i){return this.addSvgIconLiteralInNamespace("",e,t,i)}addSvgIconInNamespace(e,t,i,o){return this._addSvgIconConfig(e,t,new G(i,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,i,o){let a=this._sanitizer.sanitize(T.HTML,i);if(!a)throw Zr(i);let c=re(a);return this._addSvgIconConfig(e,t,new G("",c,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,i){return this._addSvgIconSetConfig(e,new G(t,null,i))}addSvgIconSetLiteralInNamespace(e,t,i){let o=this._sanitizer.sanitize(T.HTML,t);if(!o)throw Zr(t);let a=re(o);return this._addSvgIconSetConfig(e,new G("",a,i))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(T.RESOURCE_URL,e);if(!t)throw Kr(e);let i=this._cachedIconsByUrl.get(t);return i?k(Ct(i)):this._loadSvgIconFromConfig(new G(e,null)).pipe(ue(o=>this._cachedIconsByUrl.set(t,o)),w(o=>Ct(o)))}getNamedSvgIcon(e,t=""){let i=Yr(t,e),o=this._svgIconConfigs.get(i);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(i,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):dn(Wr(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?k(Ct(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(w(t=>Ct(t)))}_getSvgFromIconSetConfigs(e,t){let i=this._extractIconWithNameFromAnySet(e,t);if(i)return k(i);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(hn(c=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(T.RESOURCE_URL,a.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(l)),k(null)})));return fn(o).pipe(w(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw Wr(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let i=t.length-1;i>=0;i--){let o=t[i];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),c=this._extractSvgIconFromSet(a,e,o.options);if(c)return c}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ue(t=>e.svgText=t),w(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?k(null):this._fetchIcon(e).pipe(ue(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,i){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,i);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),i);let c=this._svgElementFromString(re("<svg></svg>"));return c.appendChild(a),this._setSvgAttributes(c,i)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let i=t.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let t=this._svgElementFromString(re("<svg></svg>")),i=e.attributes;for(let o=0;o<i.length;o++){let{name:a,value:c}=i[o];a!=="id"&&t.setAttribute(a,c)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:i}=e,o=i?.withCredentials??!1;if(!this._httpClient)throw So();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(T.RESOURCE_URL,t);if(!a)throw Kr(t);let c=this._inProgressUrlFetches.get(a);if(c)return c;let u=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(w(l=>re(l)),Xe(()=>this._inProgressUrlFetches.delete(a)),bn());return this._inProgressUrlFetches.set(a,u),u}_addSvgIconConfig(e,t,i){return this._svgIconConfigs.set(Yr(e,t),i),this}_addSvgIconSetConfig(e,t){let i=this._iconSetConfigs.get(e);return i?i.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let i=0;i<this._resolvers.length;i++){let o=this._resolvers[i](t,e);if(o)return Mo(o)?new G(o.url,null,o.options):new G(o,null)}}static \u0275fac=function(t){return new(t||n)(m(gt,8),m(je),m(g,8),m(Q))};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ct(n){return n.cloneNode(!0)}function Yr(n,r){return n+":"+r}function Mo(n){return!!(n.url&&n.options)}var Fo=["*"],xo=new f("MAT_ICON_DEFAULT_OPTIONS"),Ro=new f("mat-icon-location",{providedIn:"root",factory:()=>{let n=s(g),r=n?n.location:null;return{getPathname:()=>r?r.pathname+r.search:""}}}),Xr=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Oo=Xr.map(n=>`[${n}]`).join(", "),No=/^url\(['"]?#(.*?)['"]?\)$/,Jm=(()=>{class n{_elementRef=s(x);_iconRegistry=s(Jr);_location=s(Ro);_errorHandler=s(Q);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Ye.EMPTY;constructor(){let e=s(new Un("aria-hidden"),{optional:!0}),t=s(xo,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let i=e.childNodes[t];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),t.forEach(i=>e.classList.add(i)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((i,o)=>{i.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Oo),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)Xr.forEach(a=>{let c=t[o],u=c.getAttribute(a),l=u?u.match(No):null;if(l){let h=i.get(c);h||(h=[],i.set(c,h)),h.push({name:a,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,i]=this._splitIconName(e);t&&(this._svgNamespace=t),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,t).pipe(Je(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${i}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,i){t&2&&(Re("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),it(i.color?"mat-"+i.color:""),Z("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",U],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Fo,decls:1,vars:0,template:function(t,i){t&1&&(ve(),K(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Xm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=S({type:n});static \u0275inj=I({imports:[Te]})}return n})();var cn={geminiApiKey:"flexcv.gemini.apiKey",geminiModel:"flexcv.gemini.model",resume:"flexcv.resume.current",interfaceLanguage:"flexcv.lang.interface",cvLanguage:"flexcv.lang.cv"},Qm={baseUrl:"https://generativelanguage.googleapis.com/v1beta/models",defaultModel:"gemini-2.5-flash",availableModels:["gemini-2.5-flash","gemini-2.5-pro","gemini-2.0-flash"]},ef={geminiApiKeys:"https://aistudio.google.com/api-keys"},tf={acceptedExtensions:[".json",".txt",".pdf",".docx"],maxFileSizeBytes:5*1024*1024};var rf=["uk","en"],of={uk:"\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",en:"English"},af={uk:"Ukrainian",en:"English"},Lo={"nav.cv":"My CV","nav.chat":"AI Chat","nav.settings":"Settings","settings.title":"Settings","settings.language.title":"Language","settings.language.subtitle":"Interface language changes the app; CV language drives the resume and all AI output.","settings.interfaceLanguage.label":"Interface language","settings.cvLanguage.label":"CV language","settings.gemini.title":"Gemini API","settings.gemini.subtitle":"Your key is stored only in this browser's local storage and is sent solely to Google Gemini.","settings.apiKey.label":"Gemini API key","settings.model.label":"Model","settings.apiKey.hint":"Don't have a key yet? Create one for free in Google AI Studio.","settings.save":"Save","settings.getKey":"Get API key","settings.removeKey":"Remove key","settings.saved":"Settings saved.","settings.keyRemoved":"API key removed.","import.tab.file":"File","import.tab.url":"From URL","import.tab.text":"Paste text","import.file.hint":"Import a JSON, TXT, PDF, or DOCX file. PDF and DOCX are converted to JSON with Gemini.","import.choose":"Choose file","import.loadSample":"Load sample","import.url.hint":"Paste a public link to a resume JSON (e.g. a GitHub raw URL).","import.url.label":"Resume JSON URL","import.url.button":"Import","import.text.hint":"Paste raw resume text \u2014 Gemini converts it into structured JSON.","import.text.label":"Resume text","import.text.button":"Convert with Gemini","import.imported":"Resume imported.","import.enterUrl":"Enter a URL first.","import.pasteText":"Paste some resume text first.","import.tooLarge":"File is too large (max 5 MB).","cv.title":"My CV","cv.nav.editor":"Viewer / Editor","cv.nav.export":"Export","cv.nav.share":"Share","cv.createNew":"Create new CV","cv.editor.jsonTitle":"Edit JSON","cv.editor.jsonHint":"Edit the resume JSON directly. Changes are validated before applying.","cv.editor.apply":"Apply","cv.editor.delete":"Delete","cv.editor.invalidJson":"Invalid resume JSON.","cv.editor.applied":"CV updated.","cv.export.title":"Export CV","cv.share.title":"Share CV","cv.share.desc":"Generate a self-contained link that embeds your CV JSON \u2014 open it anywhere, no hosting needed.","cv.share.generate":"Generate link","cv.share.copy":"Copy","cv.share.copied":"Link copied.","cv.share.embedTitle":"Self-contained link (embeds the JSON)","cv.share.urlTitle":"Link to a hosted JSON file","cv.share.urlInput":"Public JSON URL (e.g. GitHub raw)","cv.share.urlGenerate":"Generate link","cv.share.urlHint":"Host your exported JSON (e.g. push it to a GitHub repo and use its raw URL), paste it above, and share the generated link.","cv.shared.loaded":"Shared CV loaded.","cv.closeView":"Close resume view","cv.shared.error":"Could not load the shared CV.","cv.exportPdf":"Export PDF","cv.exportJson":"Export JSON","cv.clear":"Clear","cv.importReplace":"Import / replace resume","cv.getStarted.title":"Import a resume to get started","cv.getStarted.subtitle":"Load JSON, fetch from a public URL, or paste text for Gemini to structure.","chat.title":"AI Chat","chat.clear":"Clear chat","chat.export":"Export chat","chat.import":"Import chat","chat.exported":"Chat exported.","chat.importedOk":"Chat imported.","chat.importError":"Could not import chat: invalid file.","chat.needResume.before":"Import a resume first on the","chat.needResume.after":"page.","chat.needKey.before":"Add your Gemini API key in","chat.needKey.after":"to start chatting.","chat.vacancy.title":"Target vacancy","chat.vacancy.subtitle":"Paste the job description \u2014 it is the context for every task.","chat.jobDescription.label":"Job description","chat.empty":"Run a task below or ask anything about your fit for this vacancy.","chat.optimize":"Optimize resume","chat.match":"Match / mismatch","chat.recruiter":"Recruiter pitch","chat.technical":"Technical pitch","chat.ask.label":"Ask a follow-up question\u2026","chat.title.recruiter":"Recruiter talking points","chat.title.technical":"Technical interview talking points","chatmsg.match.title":"Match analysis","chatmsg.match.matches":"Matches","chatmsg.match.mismatches":"Mismatches / gaps","chatmsg.optimized.title":"Optimized resume","chatmsg.optimized.subtitle":"Tailored to the vacancy. Save the JSON for GitHub.","chatmsg.useAsCv":"Use as my CV","chatmsg.downloadJson":"Download JSON","chatmsg.downloadPdf":"Download PDF","chatmsg.savedAsCv":"Optimized resume saved as your current CV."},ko={"nav.cv":"\u041C\u043E\u0454 CV","nav.chat":"AI \u0427\u0430\u0442","nav.settings":"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F","settings.title":"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F","settings.language.title":"\u041C\u043E\u0432\u0430","settings.language.subtitle":"\u041C\u043E\u0432\u0430 \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443 \u0437\u043C\u0456\u043D\u044E\u0454 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u043D\u043E\u043A; \u043C\u043E\u0432\u0430 CV \u043A\u0435\u0440\u0443\u0454 \u0440\u0435\u0437\u044E\u043C\u0435 \u0442\u0430 \u0432\u0441\u0456\u043C \u0432\u0438\u0432\u043E\u0434\u043E\u043C AI.","settings.interfaceLanguage.label":"\u041C\u043E\u0432\u0430 \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443","settings.cvLanguage.label":"\u041C\u043E\u0432\u0430 CV","settings.gemini.title":"Gemini API","settings.gemini.subtitle":"\u041A\u043B\u044E\u0447 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454\u0442\u044C\u0441\u044F \u043B\u0438\u0448\u0435 \u0432 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u0441\u0445\u043E\u0432\u0438\u0449\u0456 \u0446\u044C\u043E\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0456 \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u0454\u0442\u044C\u0441\u044F \u0442\u0456\u043B\u044C\u043A\u0438 \u0434\u043E Google Gemini.","settings.apiKey.label":"\u041A\u043B\u044E\u0447 Gemini API","settings.model.label":"\u041C\u043E\u0434\u0435\u043B\u044C","settings.apiKey.hint":"\u0429\u0435 \u043D\u0435\u043C\u0430\u0454 \u043A\u043B\u044E\u0447\u0430? \u0421\u0442\u0432\u043E\u0440\u0456\u0442\u044C \u0439\u043E\u0433\u043E \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E \u0432 Google AI Studio.","settings.save":"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438","settings.getKey":"\u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043A\u043B\u044E\u0447","settings.removeKey":"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043A\u043B\u044E\u0447","settings.saved":"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E.","settings.keyRemoved":"\u041A\u043B\u044E\u0447 API \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E.","import.tab.file":"\u0424\u0430\u0439\u043B","import.tab.url":"\u0417\u0430 URL","import.tab.text":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0442\u0435\u043A\u0441\u0442","import.file.hint":"\u0406\u043C\u043F\u043E\u0440\u0442\u0443\u0439\u0442\u0435 \u0444\u0430\u0439\u043B JSON, TXT, PDF \u0430\u0431\u043E DOCX. PDF \u0456 DOCX \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0443\u044E\u0442\u044C\u0441\u044F \u0432 JSON \u0447\u0435\u0440\u0435\u0437 Gemini.","import.choose":"\u041E\u0431\u0440\u0430\u0442\u0438 \u0444\u0430\u0439\u043B","import.loadSample":"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043F\u0440\u0438\u043A\u043B\u0430\u0434","import.url.hint":"\u0412\u0441\u0442\u0430\u0432\u0442\u0435 \u043F\u0443\u0431\u043B\u0456\u0447\u043D\u0435 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 JSON \u0440\u0435\u0437\u044E\u043C\u0435 (\u043D\u0430\u043F\u0440. GitHub raw URL).","import.url.label":"URL JSON \u0440\u0435\u0437\u044E\u043C\u0435","import.url.button":"\u0406\u043C\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438","import.text.hint":"\u0412\u0441\u0442\u0430\u0432\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0440\u0435\u0437\u044E\u043C\u0435 \u2014 Gemini \u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u0438\u0442\u044C \u0439\u043E\u0433\u043E \u043D\u0430 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043E\u0432\u0430\u043D\u0438\u0439 JSON.","import.text.label":"\u0422\u0435\u043A\u0441\u0442 \u0440\u0435\u0437\u044E\u043C\u0435","import.text.button":"\u041A\u043E\u043D\u0432\u0435\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 Gemini","import.imported":"\u0420\u0435\u0437\u044E\u043C\u0435 \u0456\u043C\u043F\u043E\u0440\u0442\u043E\u0432\u0430\u043D\u043E.","import.enterUrl":"\u0421\u043F\u0435\u0440\u0448\u0443 \u0432\u0432\u0435\u0434\u0456\u0442\u044C URL.","import.pasteText":"\u0421\u043F\u0435\u0440\u0448\u0443 \u0432\u0441\u0442\u0430\u0432\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0440\u0435\u0437\u044E\u043C\u0435.","import.tooLarge":"\u0424\u0430\u0439\u043B \u0437\u0430\u0432\u0435\u043B\u0438\u043A\u0438\u0439 (\u043C\u0430\u043A\u0441. 5 \u041C\u0411).","cv.title":"\u041C\u043E\u0454 CV","cv.nav.editor":"\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0430\u0447 / \u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440","cv.nav.export":"\u0415\u043A\u0441\u043F\u043E\u0440\u0442","cv.nav.share":"\u041F\u043E\u0448\u0438\u0440\u0438\u0442\u0438","cv.createNew":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043D\u043E\u0432\u0435 CV","cv.editor.jsonTitle":"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 JSON","cv.editor.jsonHint":"\u0420\u0435\u0434\u0430\u0433\u0443\u0439\u0442\u0435 JSON \u0440\u0435\u0437\u044E\u043C\u0435 \u043D\u0430\u043F\u0440\u044F\u043C\u0443. \u0417\u043C\u0456\u043D\u0438 \u0432\u0430\u043B\u0456\u0434\u0443\u044E\u0442\u044C\u0441\u044F \u043F\u0435\u0440\u0435\u0434 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F\u043C.","cv.editor.apply":"\u0417\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u0442\u0438","cv.editor.delete":"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438","cv.editor.invalidJson":"\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 JSON \u0440\u0435\u0437\u044E\u043C\u0435.","cv.editor.applied":"CV \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E.","cv.export.title":"\u0415\u043A\u0441\u043F\u043E\u0440\u0442 CV","cv.share.title":"\u041F\u043E\u0448\u0438\u0440\u0438\u0442\u0438 CV","cv.share.desc":"\u0417\u0433\u0435\u043D\u0435\u0440\u0443\u0439\u0442\u0435 \u0441\u0430\u043C\u043E\u0434\u043E\u0441\u0442\u0430\u0442\u043D\u0454 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0437 \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u043C JSON \u0432\u0430\u0448\u043E\u0433\u043E CV \u2014 \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u0439\u0442\u0435 \u0431\u0443\u0434\u044C-\u0434\u0435, \u0431\u0435\u0437 \u0445\u043E\u0441\u0442\u0438\u043D\u0433\u0443.","cv.share.generate":"\u0417\u0433\u0435\u043D\u0435\u0440\u0443\u0432\u0430\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F","cv.share.copy":"\u041A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438","cv.share.copied":"\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0441\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E.","cv.share.embedTitle":"\u0421\u0430\u043C\u043E\u0434\u043E\u0441\u0442\u0430\u0442\u043D\u0454 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F (\u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0439 JSON)","cv.share.urlTitle":"\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u0440\u043E\u0437\u043C\u0456\u0449\u0435\u043D\u0438\u0439 JSON-\u0444\u0430\u0439\u043B","cv.share.urlInput":"\u041F\u0443\u0431\u043B\u0456\u0447\u043D\u0438\u0439 URL \u043D\u0430 JSON (\u043D\u0430\u043F\u0440. GitHub raw)","cv.share.urlGenerate":"\u0417\u0433\u0435\u043D\u0435\u0440\u0443\u0432\u0430\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F","cv.share.urlHint":"\u0420\u043E\u0437\u043C\u0456\u0441\u0442\u0456\u0442\u044C \u0435\u043A\u0441\u043F\u043E\u0440\u0442\u043E\u0432\u0430\u043D\u0438\u0439 JSON (\u043D\u0430\u043F\u0440. \u0437\u0430\u043F\u0443\u0448\u0442\u0435 \u0443 GitHub \u0456 \u0432\u0456\u0437\u044C\u043C\u0456\u0442\u044C raw-URL), \u0432\u0441\u0442\u0430\u0432\u0442\u0435 \u0439\u043E\u0433\u043E \u0432\u0438\u0449\u0435 \u0442\u0430 \u043F\u043E\u0434\u0456\u043B\u0456\u0442\u044C\u0441\u044F \u0437\u0433\u0435\u043D\u0435\u0440\u043E\u0432\u0430\u043D\u0438\u043C \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F\u043C.","cv.shared.loaded":"\u041F\u043E\u0448\u0438\u0440\u0435\u043D\u0435 CV \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E.","cv.closeView":"\u0417\u0430\u043A\u0440\u0438\u0442\u0438 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434 \u0440\u0435\u0437\u044E\u043C\u0435","cv.shared.error":"\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0435 CV.","cv.exportPdf":"\u0415\u043A\u0441\u043F\u043E\u0440\u0442 \u0443 PDF","cv.exportJson":"\u0415\u043A\u0441\u043F\u043E\u0440\u0442 \u0443 JSON","cv.clear":"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438","cv.importReplace":"\u0406\u043C\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 / \u0437\u0430\u043C\u0456\u043D\u0438\u0442\u0438 \u0440\u0435\u0437\u044E\u043C\u0435","cv.getStarted.title":"\u0406\u043C\u043F\u043E\u0440\u0442\u0443\u0439\u0442\u0435 \u0440\u0435\u0437\u044E\u043C\u0435, \u0449\u043E\u0431 \u043F\u043E\u0447\u0430\u0442\u0438","cv.getStarted.subtitle":"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0442\u0435 JSON, \u043E\u0442\u0440\u0438\u043C\u0430\u0439\u0442\u0435 \u0437\u0430 \u043F\u0443\u0431\u043B\u0456\u0447\u043D\u0438\u043C URL \u0430\u0431\u043E \u0432\u0441\u0442\u0430\u0432\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0447\u0435\u0440\u0435\u0437 Gemini.","chat.title":"AI \u0427\u0430\u0442","chat.clear":"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0447\u0430\u0442","chat.export":"\u0415\u043A\u0441\u043F\u043E\u0440\u0442 \u0447\u0430\u0442\u0443","chat.import":"\u0406\u043C\u043F\u043E\u0440\u0442 \u0447\u0430\u0442\u0443","chat.exported":"\u0427\u0430\u0442 \u0435\u043A\u0441\u043F\u043E\u0440\u0442\u043E\u0432\u0430\u043D\u043E.","chat.importedOk":"\u0427\u0430\u0442 \u0456\u043C\u043F\u043E\u0440\u0442\u043E\u0432\u0430\u043D\u043E.","chat.importError":"\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0456\u043C\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0447\u0430\u0442: \u043D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 \u0444\u0430\u0439\u043B.","chat.needResume.before":"\u0421\u043F\u0435\u0440\u0448\u0443 \u0456\u043C\u043F\u043E\u0440\u0442\u0443\u0439\u0442\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456","chat.needResume.after":".","chat.needKey.before":"\u0414\u043E\u0434\u0430\u0439\u0442\u0435 \u043A\u043B\u044E\u0447 Gemini API \u0443","chat.needKey.after":"\u0449\u043E\u0431 \u043F\u043E\u0447\u0430\u0442\u0438 \u0441\u043F\u0456\u043B\u043A\u0443\u0432\u0430\u043D\u043D\u044F.","chat.vacancy.title":"\u0426\u0456\u043B\u044C\u043E\u0432\u0430 \u0432\u0430\u043A\u0430\u043D\u0441\u0456\u044F","chat.vacancy.subtitle":"\u0412\u0441\u0442\u0430\u0432\u0442\u0435 \u043E\u043F\u0438\u0441 \u0432\u0430\u043A\u0430\u043D\u0441\u0456\u0457 \u2014 \u0446\u0435 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u043A\u043E\u0436\u043D\u043E\u0457 \u0437\u0430\u0434\u0430\u0447\u0456.","chat.jobDescription.label":"\u041E\u043F\u0438\u0441 \u0432\u0430\u043A\u0430\u043D\u0441\u0456\u0457","chat.empty":"\u0417\u0430\u043F\u0443\u0441\u0442\u0456\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443 \u043D\u0438\u0436\u0447\u0435 \u0430\u0431\u043E \u0437\u0430\u043F\u0438\u0442\u0430\u0439\u0442\u0435 \u0431\u0443\u0434\u044C-\u0449\u043E \u043F\u0440\u043E \u0432\u0430\u0448\u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0456\u0441\u0442\u044C \u0432\u0430\u043A\u0430\u043D\u0441\u0456\u0457.","chat.optimize":"\u041E\u043F\u0442\u0438\u043C\u0456\u0437\u0443\u0432\u0430\u0442\u0438 \u0440\u0435\u0437\u044E\u043C\u0435","chat.match":"\u041C\u0435\u0442\u0447 / \u043C\u0456\u0441\u043C\u0435\u0442\u0447","chat.recruiter":"\u0422\u0435\u0437\u0438 \u0434\u043B\u044F \u0440\u0435\u043A\u0440\u0443\u0442\u0435\u0440\u0430","chat.technical":"\u0422\u0435\u0437\u0438 \u0434\u043B\u044F \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u043E\u0433\u043E \u0456\u043D\u0442\u0435\u0440\u0432\u2019\u044E","chat.ask.label":"\u041F\u043E\u0441\u0442\u0430\u0432\u0442\u0435 \u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0435 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F\u2026","chat.title.recruiter":"\u0422\u0435\u0437\u0438 \u0434\u043B\u044F \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0456\u0457 \u0440\u0435\u043A\u0440\u0443\u0442\u0435\u0440\u0443","chat.title.technical":"\u0422\u0435\u0437\u0438 \u0434\u043B\u044F \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u043E\u0433\u043E \u0456\u043D\u0442\u0435\u0440\u0432\u2019\u044E","chatmsg.match.title":"\u0410\u043D\u0430\u043B\u0456\u0437 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E\u0441\u0442\u0456","chatmsg.match.matches":"\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E\u0441\u0442\u0456","chatmsg.match.mismatches":"\u041D\u0435\u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E\u0441\u0442\u0456 / \u043F\u0440\u043E\u0433\u0430\u043B\u0438\u043D\u0438","chatmsg.optimized.title":"\u041E\u043F\u0442\u0438\u043C\u0456\u0437\u043E\u0432\u0430\u043D\u0435 \u0440\u0435\u0437\u044E\u043C\u0435","chatmsg.optimized.subtitle":"\u041F\u0456\u0434\u043B\u0430\u0448\u0442\u043E\u0432\u0430\u043D\u0435 \u043F\u0456\u0434 \u0432\u0430\u043A\u0430\u043D\u0441\u0456\u044E. \u0417\u0431\u0435\u0440\u0435\u0436\u0456\u0442\u044C JSON \u0434\u043B\u044F GitHub.","chatmsg.useAsCv":"\u0417\u0440\u043E\u0431\u0438\u0442\u0438 \u043C\u043E\u0457\u043C CV","chatmsg.downloadJson":"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 JSON","chatmsg.downloadPdf":"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 PDF","chatmsg.savedAsCv":"\u041E\u043F\u0442\u0438\u043C\u0456\u0437\u043E\u0432\u0430\u043D\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E \u044F\u043A \u0432\u0430\u0448\u0435 \u043F\u043E\u0442\u043E\u0447\u043D\u0435 CV."},qr={en:Lo,uk:ko};var It=class n{read(r){try{return localStorage.getItem(r)}catch{return null}}readJson(r){let e=this.read(r);if(e===null)return null;try{return JSON.parse(e)}catch{return null}}write(r,e){try{localStorage.setItem(r,e)}catch{}}writeJson(r,e){this.write(r,JSON.stringify(e))}remove(r){try{localStorage.removeItem(r)}catch{}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})};var Po="uk",Qr=class n{storage=s(It);localeSig=ee(this.restore());locale=this.localeSig.asReadonly();t=r=>qr[this.localeSig()][r]??r;setLocale(r){this.localeSig.set(r),this.storage.write(cn.interfaceLanguage,r)}restore(){let r=this.storage.read(cn.interfaceLanguage);return r==="en"||r==="uk"?r:Po}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})};export{V as a,ot as b,Zn as c,oi as d,jt as e,Ei as f,gt as g,Zi as h,fu as i,B as j,j as k,Zt as l,z as m,qi as n,Ge as o,Qi as p,Jt as q,ro as r,hd as s,pd as t,so as u,Fr as v,Xt as w,qt as x,en as y,cl as z,ul as A,We as B,bl as C,vl as D,_l as E,wl as F,Sl as G,lo as H,Ie as I,Nl as J,kl as K,Ze as L,rn as M,Jl as N,zr as O,_o as P,wo as Q,Te as R,Hr as S,Mm as T,Fm as U,Jm as V,Xm as W,It as X,cn as Y,Qm as Z,ef as _,tf as $,rf as aa,of as ba,af as ca,Qr as da};
