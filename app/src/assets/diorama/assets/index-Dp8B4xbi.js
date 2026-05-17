(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var lf={exports:{}},ia={},uf={exports:{}},Et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function b_(){if(zm)return Et;zm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function g(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function _(O,J,Re){this.props=O,this.context=J,this.refs=A,this.updater=Re||S}_.prototype.isReactComponent={},_.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=_.prototype;function C(O,J,Re){this.props=O,this.context=J,this.refs=A,this.updater=Re||S}var b=C.prototype=new y;b.constructor=C,M(b,_.prototype),b.isPureReactComponent=!0;var P=Array.isArray,B=Object.prototype.hasOwnProperty,D={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function w(O,J,Re){var Ve,Fe={},ae=null,me=null;if(J!=null)for(Ve in J.ref!==void 0&&(me=J.ref),J.key!==void 0&&(ae=""+J.key),J)B.call(J,Ve)&&!I.hasOwnProperty(Ve)&&(Fe[Ve]=J[Ve]);var he=arguments.length-2;if(he===1)Fe.children=Re;else if(1<he){for(var Ie=Array(he),Me=0;Me<he;Me++)Ie[Me]=arguments[Me+2];Fe.children=Ie}if(O&&O.defaultProps)for(Ve in he=O.defaultProps,he)Fe[Ve]===void 0&&(Fe[Ve]=he[Ve]);return{$$typeof:s,type:O,key:ae,ref:me,props:Fe,_owner:D.current}}function N(O,J){return{$$typeof:s,type:O.type,key:J,ref:O.ref,props:O.props,_owner:O._owner}}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function U(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Re){return J[Re]})}var X=/\/+/g;function K(O,J){return typeof O=="object"&&O!==null&&O.key!=null?U(""+O.key):J.toString(36)}function oe(O,J,Re,Ve,Fe){var ae=typeof O;(ae==="undefined"||ae==="boolean")&&(O=null);var me=!1;if(O===null)me=!0;else switch(ae){case"string":case"number":me=!0;break;case"object":switch(O.$$typeof){case s:case e:me=!0}}if(me)return me=O,Fe=Fe(me),O=Ve===""?"."+K(me,0):Ve,P(Fe)?(Re="",O!=null&&(Re=O.replace(X,"$&/")+"/"),oe(Fe,J,Re,"",function(Me){return Me})):Fe!=null&&(k(Fe)&&(Fe=N(Fe,Re+(!Fe.key||me&&me.key===Fe.key?"":(""+Fe.key).replace(X,"$&/")+"/")+O)),J.push(Fe)),1;if(me=0,Ve=Ve===""?".":Ve+":",P(O))for(var he=0;he<O.length;he++){ae=O[he];var Ie=Ve+K(ae,he);me+=oe(ae,J,Re,Ie,Fe)}else if(Ie=g(O),typeof Ie=="function")for(O=Ie.call(O),he=0;!(ae=O.next()).done;)ae=ae.value,Ie=Ve+K(ae,he++),me+=oe(ae,J,Re,Ie,Fe);else if(ae==="object")throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return me}function H(O,J,Re){if(O==null)return O;var Ve=[],Fe=0;return oe(O,Ve,"","",function(ae){return J.call(Re,ae,Fe++)}),Ve}function $(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(Re){(O._status===0||O._status===-1)&&(O._status=1,O._result=Re)},function(Re){(O._status===0||O._status===-1)&&(O._status=2,O._result=Re)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var q={current:null},Z={transition:null},re={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:Z,ReactCurrentOwner:D};function se(){throw Error("act(...) is not supported in production builds of React.")}return Et.Children={map:H,forEach:function(O,J,Re){H(O,function(){J.apply(this,arguments)},Re)},count:function(O){var J=0;return H(O,function(){J++}),J},toArray:function(O){return H(O,function(J){return J})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Et.Component=_,Et.Fragment=t,Et.Profiler=o,Et.PureComponent=C,Et.StrictMode=r,Et.Suspense=h,Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,Et.act=se,Et.cloneElement=function(O,J,Re){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ve=M({},O.props),Fe=O.key,ae=O.ref,me=O._owner;if(J!=null){if(J.ref!==void 0&&(ae=J.ref,me=D.current),J.key!==void 0&&(Fe=""+J.key),O.type&&O.type.defaultProps)var he=O.type.defaultProps;for(Ie in J)B.call(J,Ie)&&!I.hasOwnProperty(Ie)&&(Ve[Ie]=J[Ie]===void 0&&he!==void 0?he[Ie]:J[Ie])}var Ie=arguments.length-2;if(Ie===1)Ve.children=Re;else if(1<Ie){he=Array(Ie);for(var Me=0;Me<Ie;Me++)he[Me]=arguments[Me+2];Ve.children=he}return{$$typeof:s,type:O.type,key:Fe,ref:ae,props:Ve,_owner:me}},Et.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Et.createElement=w,Et.createFactory=function(O){var J=w.bind(null,O);return J.type=O,J},Et.createRef=function(){return{current:null}},Et.forwardRef=function(O){return{$$typeof:f,render:O}},Et.isValidElement=k,Et.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:$}},Et.memo=function(O,J){return{$$typeof:p,type:O,compare:J===void 0?null:J}},Et.startTransition=function(O){var J=Z.transition;Z.transition={};try{O()}finally{Z.transition=J}},Et.unstable_act=se,Et.useCallback=function(O,J){return q.current.useCallback(O,J)},Et.useContext=function(O){return q.current.useContext(O)},Et.useDebugValue=function(){},Et.useDeferredValue=function(O){return q.current.useDeferredValue(O)},Et.useEffect=function(O,J){return q.current.useEffect(O,J)},Et.useId=function(){return q.current.useId()},Et.useImperativeHandle=function(O,J,Re){return q.current.useImperativeHandle(O,J,Re)},Et.useInsertionEffect=function(O,J){return q.current.useInsertionEffect(O,J)},Et.useLayoutEffect=function(O,J){return q.current.useLayoutEffect(O,J)},Et.useMemo=function(O,J){return q.current.useMemo(O,J)},Et.useReducer=function(O,J,Re){return q.current.useReducer(O,J,Re)},Et.useRef=function(O){return q.current.useRef(O)},Et.useState=function(O){return q.current.useState(O)},Et.useSyncExternalStore=function(O,J,Re){return q.current.useSyncExternalStore(O,J,Re)},Et.useTransition=function(){return q.current.useTransition()},Et.version="18.3.1",Et}var km;function Zd(){return km||(km=1,uf.exports=b_()),uf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function L_(){if(Vm)return ia;Vm=1;var s=Zd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var v,x={},g=null,S=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(S=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(x[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)x[v]===void 0&&(x[v]=h[v]);return{$$typeof:e,type:f,key:g,ref:S,props:x,_owner:o.current}}return ia.Fragment=t,ia.jsx=u,ia.jsxs=u,ia}var Hm;function D_(){return Hm||(Hm=1,lf.exports=L_()),lf.exports}var jn=D_(),Ll={},cf={exports:{}},qn={},ff={exports:{}},df={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function N_(){return Gm||(Gm=1,(function(s){function e(Z,re){var se=Z.length;Z.push(re);e:for(;0<se;){var O=se-1>>>1,J=Z[O];if(0<o(J,re))Z[O]=re,Z[se]=J,se=O;else break e}}function t(Z){return Z.length===0?null:Z[0]}function r(Z){if(Z.length===0)return null;var re=Z[0],se=Z.pop();if(se!==re){Z[0]=se;e:for(var O=0,J=Z.length,Re=J>>>1;O<Re;){var Ve=2*(O+1)-1,Fe=Z[Ve],ae=Ve+1,me=Z[ae];if(0>o(Fe,se))ae<J&&0>o(me,Fe)?(Z[O]=me,Z[ae]=se,O=ae):(Z[O]=Fe,Z[Ve]=se,O=Ve);else if(ae<J&&0>o(me,se))Z[O]=me,Z[ae]=se,O=ae;else break e}}return re}function o(Z,re){var se=Z.sortIndex-re.sortIndex;return se!==0?se:Z.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],v=1,x=null,g=3,S=!1,M=!1,A=!1,_=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(Z){for(var re=t(p);re!==null;){if(re.callback===null)r(p);else if(re.startTime<=Z)r(p),re.sortIndex=re.expirationTime,e(h,re);else break;re=t(p)}}function P(Z){if(A=!1,b(Z),!M)if(t(h)!==null)M=!0,$(B);else{var re=t(p);re!==null&&q(P,re.startTime-Z)}}function B(Z,re){M=!1,A&&(A=!1,y(w),w=-1),S=!0;var se=g;try{for(b(re),x=t(h);x!==null&&(!(x.expirationTime>re)||Z&&!U());){var O=x.callback;if(typeof O=="function"){x.callback=null,g=x.priorityLevel;var J=O(x.expirationTime<=re);re=s.unstable_now(),typeof J=="function"?x.callback=J:x===t(h)&&r(h),b(re)}else r(h);x=t(h)}if(x!==null)var Re=!0;else{var Ve=t(p);Ve!==null&&q(P,Ve.startTime-re),Re=!1}return Re}finally{x=null,g=se,S=!1}}var D=!1,I=null,w=-1,N=5,k=-1;function U(){return!(s.unstable_now()-k<N)}function X(){if(I!==null){var Z=s.unstable_now();k=Z;var re=!0;try{re=I(!0,Z)}finally{re?K():(D=!1,I=null)}}else D=!1}var K;if(typeof C=="function")K=function(){C(X)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,H=oe.port2;oe.port1.onmessage=X,K=function(){H.postMessage(null)}}else K=function(){_(X,0)};function $(Z){I=Z,D||(D=!0,K())}function q(Z,re){w=_(function(){Z(s.unstable_now())},re)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Z){Z.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,$(B))},s.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<Z?Math.floor(1e3/Z):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(Z){switch(g){case 1:case 2:case 3:var re=3;break;default:re=g}var se=g;g=re;try{return Z()}finally{g=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Z,re){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var se=g;g=Z;try{return re()}finally{g=se}},s.unstable_scheduleCallback=function(Z,re,se){var O=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,Z){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=se+J,Z={id:v++,callback:re,priorityLevel:Z,startTime:se,expirationTime:J,sortIndex:-1},se>O?(Z.sortIndex=se,e(p,Z),t(h)===null&&Z===t(p)&&(A?(y(w),w=-1):A=!0,q(P,se-O))):(Z.sortIndex=J,e(h,Z),M||S||(M=!0,$(B))),Z},s.unstable_shouldYield=U,s.unstable_wrapCallback=function(Z){var re=g;return function(){var se=g;g=re;try{return Z.apply(this,arguments)}finally{g=se}}}})(df)),df}var Wm;function I_(){return Wm||(Wm=1,ff.exports=N_()),ff.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function U_(){if(Xm)return qn;Xm=1;var s=Zd(),e=I_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function g(n){return h.call(x,n)?!0:h.call(v,n)?!1:p.test(n)?x[n]=!0:(v[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,C);_[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,C);_[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,C);_[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,i,a,c){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),D=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),U=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),Z=Symbol.iterator;function re(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,O;function J(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Re=!1;function Ve(n,i){if(!n||Re)return"";Re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var c=ue}Reflect.construct(n,[],i)}else{try{i.call()}catch(ue){c=ue}n.call(i.prototype)}else{try{throw Error()}catch(ue){c=ue}n()}}catch(ue){if(ue&&c&&typeof ue.stack=="string"){for(var d=ue.stack.split(`
`),m=c.stack.split(`
`),T=d.length-1,F=m.length-1;1<=T&&0<=F&&d[T]!==m[F];)F--;for(;1<=T&&0<=F;T--,F--)if(d[T]!==m[F]){if(T!==1||F!==1)do if(T--,F--,0>F||d[T]!==m[F]){var G=`
`+d[T].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=T&&0<=F);break}}}finally{Re=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?J(n):""}function Fe(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=Ve(n.type,!1),n;case 11:return n=Ve(n.type.render,!1),n;case 1:return n=Ve(n.type,!0),n;default:return""}}function ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case D:return"Portal";case N:return"Profiler";case w:return"StrictMode";case K:return"Suspense";case oe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case U:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case X:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case H:return i=n.displayName||null,i!==null?i:ae(n.type)||"Memo";case $:i=n._payload,n=n._init;try{return ae(n(i))}catch{}}return null}function me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function he(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Me(n){var i=Ie(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function we(n){n._valueTracker||(n._valueTracker=Me(n))}function ot(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ie(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function it(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ht(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function bt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=he(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ct(n,i){i=i.checked,i!=null&&b(n,"checked",i,!1)}function kt(n,i){ct(n,i);var a=he(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?qe(n,i.type,a):i.hasOwnProperty("defaultValue")&&qe(n,i.type,he(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ut(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function qe(n,i,a){(i!=="number"||it(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var z=Array.isArray;function _t(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+he(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function gt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Dt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(z(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:he(a)}}function Oe(n,i){var a=he(i.value),c=he(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Yt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function L(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?L(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Q,de=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Q=Q||document.createElement("div"),Q.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Q.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ve(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ue=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Ue.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function ce(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function pe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ce(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var ze=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function He(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Pe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Te=null;function at(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ft=null,yt=null,W=null;function Ce(n){if(n=Ho(n)){if(typeof ft!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ya(i),ft(n.stateNode,n.type,i))}}function fe(n){yt?W?W.push(n):W=[n]:yt=n}function ke(){if(yt){var n=yt,i=W;if(W=yt=null,Ce(n),i)for(n=0;n<i.length;n++)Ce(i[n])}}function Le(n,i){return n(i)}function _e(){}var $e=!1;function dt(n,i,a){if($e)return n(i,a);$e=!0;try{return Le(n,i,a)}finally{$e=!1,(yt!==null||W!==null)&&(_e(),ke())}}function Ht(n,i){var a=n.stateNode;if(a===null)return null;var c=Ya(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Nt=!1;if(f)try{var In={};Object.defineProperty(In,"passive",{get:function(){Nt=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{Nt=!1}function ri(n,i,a,c,d,m,T,F,G){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(a,ue)}catch(ye){this.onError(ye)}}var Xi=!1,Ss=null,Xr=!1,Ms=null,Yi={onError:function(n){Xi=!0,Ss=n}};function So(n,i,a,c,d,m,T,F,G){Xi=!1,Ss=null,ri.apply(Yi,arguments)}function Pa(n,i,a,c,d,m,T,F,G){if(So.apply(this,arguments),Xi){if(Xi){var ue=Ss;Xi=!1,Ss=null}else throw Error(t(198));Xr||(Xr=!0,Ms=ue)}}function Ri(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Yr(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Mo(n){if(Ri(n)!==n)throw Error(t(188))}function Es(n){var i=n.alternate;if(!i){if(i=Ri(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Mo(d),n;if(m===c)return Mo(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var T=!1,F=d.child;F;){if(F===a){T=!0,a=d,c=m;break}if(F===c){T=!0,c=d,a=m;break}F=F.sibling}if(!T){for(F=m.child;F;){if(F===a){T=!0,a=m,c=d;break}if(F===c){T=!0,c=m,a=d;break}F=F.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Eo(n){return n=Es(n),n!==null?wo(n):null}function wo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=wo(n);if(i!==null)return i;n=n.sibling}return null}var ba=e.unstable_scheduleCallback,La=e.unstable_cancelCallback,bu=e.unstable_shouldYield,Lu=e.unstable_requestPaint,Qt=e.unstable_now,Du=e.unstable_getCurrentPriorityLevel,To=e.unstable_ImmediatePriority,R=e.unstable_UserBlockingPriority,j=e.unstable_NormalPriority,le=e.unstable_LowPriority,ne=e.unstable_IdlePriority,te=null,De=null;function Xe(n){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(te,n,void 0,(n.current.flags&128)===128)}catch{}}var be=Math.clz32?Math.clz32:pt,Je=Math.log,nt=Math.LN2;function pt(n){return n>>>=0,n===0?32:31-(Je(n)/nt|0)|0}var mt=64,et=4194304;function Rt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,T=a&268435455;if(T!==0){var F=T&~d;F!==0?c=Rt(F):(m&=T,m!==0&&(c=Rt(m)))}else T=a&~d,T!==0?c=Rt(T):m!==0&&(c=Rt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-be(i),d=1<<a,c|=n[a],i&=~d;return c}function $t(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-be(m),F=1<<T,G=d[T];G===-1?((F&a)===0||(F&c)!==0)&&(d[T]=$t(F,i)):G<=i&&(n.expiredLanes|=F),m&=~F}}function ln(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ge(){var n=mt;return mt<<=1,(mt&4194240)===0&&(mt=64),n}function Mn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function St(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-be(i),n[i]=a}function kn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-be(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Vn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-be(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Mt=0;function qi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ft,qt,mi,Bt,gi,Pi=!1,qr=[],pr=null,mr=null,gr=null,Ao=new Map,Co=new Map,vr=[],Jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mh(n,i){switch(n){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Ao.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(i.pointerId)}}function Ro(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ho(i),i!==null&&qt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Qg(n,i,a,c,d){switch(i){case"focusin":return pr=Ro(pr,n,i,a,c,d),!0;case"dragenter":return mr=Ro(mr,n,i,a,c,d),!0;case"mouseover":return gr=Ro(gr,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Ao.set(m,Ro(Ao.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Co.set(m,Ro(Co.get(m)||null,n,i,a,c,d)),!0}return!1}function Eh(n){var i=jr(n.target);if(i!==null){var a=Ri(i);if(a!==null){if(i=a.tag,i===13){if(i=Yr(a),i!==null){n.blockedOn=i,gi(n.priority,function(){mi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Da(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Iu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Te=c,a.target.dispatchEvent(c),Te=null}else return i=Ho(a),i!==null&&qt(i),n.blockedOn=a,!1;i.shift()}return!0}function wh(n,i,a){Da(n)&&a.delete(i)}function ev(){Pi=!1,pr!==null&&Da(pr)&&(pr=null),mr!==null&&Da(mr)&&(mr=null),gr!==null&&Da(gr)&&(gr=null),Ao.forEach(wh),Co.forEach(wh)}function Po(n,i){n.blockedOn===i&&(n.blockedOn=null,Pi||(Pi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ev)))}function bo(n){function i(d){return Po(d,n)}if(0<qr.length){Po(qr[0],n);for(var a=1;a<qr.length;a++){var c=qr[a];c.blockedOn===n&&(c.blockedOn=null)}}for(pr!==null&&Po(pr,n),mr!==null&&Po(mr,n),gr!==null&&Po(gr,n),Ao.forEach(i),Co.forEach(i),a=0;a<vr.length;a++)c=vr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<vr.length&&(a=vr[0],a.blockedOn===null);)Eh(a),a.blockedOn===null&&vr.shift()}var ws=P.ReactCurrentBatchConfig,Na=!0;function tv(n,i,a,c){var d=Mt,m=ws.transition;ws.transition=null;try{Mt=1,Nu(n,i,a,c)}finally{Mt=d,ws.transition=m}}function nv(n,i,a,c){var d=Mt,m=ws.transition;ws.transition=null;try{Mt=4,Nu(n,i,a,c)}finally{Mt=d,ws.transition=m}}function Nu(n,i,a,c){if(Na){var d=Iu(n,i,a,c);if(d===null)$u(n,i,c,Ia,a),Mh(n,c);else if(Qg(d,n,i,a,c))c.stopPropagation();else if(Mh(n,c),i&4&&-1<Jg.indexOf(n)){for(;d!==null;){var m=Ho(d);if(m!==null&&Ft(m),m=Iu(n,i,a,c),m===null&&$u(n,i,c,Ia,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else $u(n,i,c,null,a)}}var Ia=null;function Iu(n,i,a,c){if(Ia=null,n=at(c),n=jr(n),n!==null)if(i=Ri(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Yr(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ia=n,null}function Th(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Du()){case To:return 1;case R:return 4;case j:case le:return 16;case ne:return 536870912;default:return 16}default:return 16}}var _r=null,Uu=null,Ua=null;function Ah(){if(Ua)return Ua;var n,i=Uu,a=i.length,c,d="value"in _r?_r.value:_r.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===d[m-c];c++);return Ua=d.slice(n,1<c?1-c:void 0)}function Fa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Oa(){return!0}function Ch(){return!1}function Kn(n){function i(a,c,d,m,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(a=n[F],this[F]=a?a(m):m[F]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Oa:Ch,this.isPropagationStopped=Ch,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),i}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fu=Kn(Ts),Lo=se({},Ts,{view:0,detail:0}),iv=Kn(Lo),Ou,Bu,Do,Ba=se({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Do&&(Do&&n.type==="mousemove"?(Ou=n.screenX-Do.screenX,Bu=n.screenY-Do.screenY):Bu=Ou=0,Do=n),Ou)},movementY:function(n){return"movementY"in n?n.movementY:Bu}}),Rh=Kn(Ba),rv=se({},Ba,{dataTransfer:0}),sv=Kn(rv),ov=se({},Lo,{relatedTarget:0}),zu=Kn(ov),av=se({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),lv=Kn(av),uv=se({},Ts,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),cv=Kn(uv),fv=se({},Ts,{data:0}),Ph=Kn(fv),dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=pv[n])?!!i[n]:!1}function ku(){return mv}var gv=se({},Lo,{key:function(n){if(n.key){var i=dv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Fa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?hv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(n){return n.type==="keypress"?Fa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Fa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),vv=Kn(gv),_v=se({},Ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bh=Kn(_v),xv=se({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),yv=Kn(xv),Sv=se({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mv=Kn(Sv),Ev=se({},Ba,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),wv=Kn(Ev),Tv=[9,13,27,32],Vu=f&&"CompositionEvent"in window,No=null;f&&"documentMode"in document&&(No=document.documentMode);var Av=f&&"TextEvent"in window&&!No,Lh=f&&(!Vu||No&&8<No&&11>=No),Dh=" ",Nh=!1;function Ih(n,i){switch(n){case"keyup":return Tv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var As=!1;function Cv(n,i){switch(n){case"compositionend":return Uh(i);case"keypress":return i.which!==32?null:(Nh=!0,Dh);case"textInput":return n=i.data,n===Dh&&Nh?null:n;default:return null}}function Rv(n,i){if(As)return n==="compositionend"||!Vu&&Ih(n,i)?(n=Ah(),Ua=Uu=_r=null,As=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Lh&&i.locale!=="ko"?null:i.data;default:return null}}var Pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Pv[n.type]:i==="textarea"}function Oh(n,i,a,c){fe(c),i=Ga(i,"onChange"),0<i.length&&(a=new Fu("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Io=null,Uo=null;function bv(n){tp(n,0)}function za(n){var i=Ls(n);if(ot(i))return n}function Lv(n,i){if(n==="change")return i}var Bh=!1;if(f){var Hu;if(f){var Gu="oninput"in document;if(!Gu){var zh=document.createElement("div");zh.setAttribute("oninput","return;"),Gu=typeof zh.oninput=="function"}Hu=Gu}else Hu=!1;Bh=Hu&&(!document.documentMode||9<document.documentMode)}function kh(){Io&&(Io.detachEvent("onpropertychange",Vh),Uo=Io=null)}function Vh(n){if(n.propertyName==="value"&&za(Uo)){var i=[];Oh(i,Uo,n,at(n)),dt(bv,i)}}function Dv(n,i,a){n==="focusin"?(kh(),Io=i,Uo=a,Io.attachEvent("onpropertychange",Vh)):n==="focusout"&&kh()}function Nv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return za(Uo)}function Iv(n,i){if(n==="click")return za(i)}function Uv(n,i){if(n==="input"||n==="change")return za(i)}function Fv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var vi=typeof Object.is=="function"?Object.is:Fv;function Fo(n,i){if(vi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!vi(n[d],i[d]))return!1}return!0}function Hh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Gh(n,i){var a=Hh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Hh(a)}}function Wh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Wh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Xh(){for(var n=window,i=it();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=it(n.document)}return i}function Wu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Ov(n){var i=Xh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Wh(a.ownerDocument.documentElement,a)){if(c!==null&&Wu(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Gh(a,m);var T=Gh(a,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Bv=f&&"documentMode"in document&&11>=document.documentMode,Cs=null,Xu=null,Oo=null,Yu=!1;function Yh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yu||Cs==null||Cs!==it(c)||(c=Cs,"selectionStart"in c&&Wu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Oo&&Fo(Oo,c)||(Oo=c,c=Ga(Xu,"onSelect"),0<c.length&&(i=new Fu("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Cs)))}function ka(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Rs={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},qu={},qh={};f&&(qh=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function Va(n){if(qu[n])return qu[n];if(!Rs[n])return n;var i=Rs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in qh)return qu[n]=i[a];return n}var jh=Va("animationend"),Zh=Va("animationiteration"),Kh=Va("animationstart"),$h=Va("transitionend"),Jh=new Map,Qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(n,i){Jh.set(n,i),l(i,[n])}for(var ju=0;ju<Qh.length;ju++){var Zu=Qh[ju],zv=Zu.toLowerCase(),kv=Zu[0].toUpperCase()+Zu.slice(1);xr(zv,"on"+kv)}xr(jh,"onAnimationEnd"),xr(Zh,"onAnimationIteration"),xr(Kh,"onAnimationStart"),xr("dblclick","onDoubleClick"),xr("focusin","onFocus"),xr("focusout","onBlur"),xr($h,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));function ep(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Pa(c,i,void 0,n),n.currentTarget=null}function tp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var F=c[T],G=F.instance,ue=F.currentTarget;if(F=F.listener,G!==m&&d.isPropagationStopped())break e;ep(d,F,ue),m=G}else for(T=0;T<c.length;T++){if(F=c[T],G=F.instance,ue=F.currentTarget,F=F.listener,G!==m&&d.isPropagationStopped())break e;ep(d,F,ue),m=G}}}if(Xr)throw n=Ms,Xr=!1,Ms=null,n}function jt(n,i){var a=i[ic];a===void 0&&(a=i[ic]=new Set);var c=n+"__bubble";a.has(c)||(np(i,n,2,!1),a.add(c))}function Ku(n,i,a){var c=0;i&&(c|=4),np(a,n,c,i)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function zo(n){if(!n[Ha]){n[Ha]=!0,r.forEach(function(a){a!=="selectionchange"&&(Vv.has(a)||Ku(a,!1,n),Ku(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ha]||(i[Ha]=!0,Ku("selectionchange",!1,i))}}function np(n,i,a,c){switch(Th(i)){case 1:var d=tv;break;case 4:d=nv;break;default:d=Nu}a=d.bind(null,i,a,n),d=void 0,!Nt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function $u(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var F=c.stateNode.containerInfo;if(F===d||F.nodeType===8&&F.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var G=T.tag;if((G===3||G===4)&&(G=T.stateNode.containerInfo,G===d||G.nodeType===8&&G.parentNode===d))return;T=T.return}for(;F!==null;){if(T=jr(F),T===null)return;if(G=T.tag,G===5||G===6){c=m=T;continue e}F=F.parentNode}}c=c.return}dt(function(){var ue=m,ye=at(a),Se=[];e:{var xe=Jh.get(n);if(xe!==void 0){var We=Fu,Ze=n;switch(n){case"keypress":if(Fa(a)===0)break e;case"keydown":case"keyup":We=vv;break;case"focusin":Ze="focus",We=zu;break;case"focusout":Ze="blur",We=zu;break;case"beforeblur":case"afterblur":We=zu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=Rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=yv;break;case jh:case Zh:case Kh:We=lv;break;case $h:We=Mv;break;case"scroll":We=iv;break;case"wheel":We=wv;break;case"copy":case"cut":case"paste":We=cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=bh}var Qe=(i&4)!==0,on=!Qe&&n==="scroll",ee=Qe?xe!==null?xe+"Capture":null:xe;Qe=[];for(var Y=ue,ie;Y!==null;){ie=Y;var Ae=ie.stateNode;if(ie.tag===5&&Ae!==null&&(ie=Ae,ee!==null&&(Ae=Ht(Y,ee),Ae!=null&&Qe.push(ko(Y,Ae,ie)))),on)break;Y=Y.return}0<Qe.length&&(xe=new We(xe,Ze,null,a,ye),Se.push({event:xe,listeners:Qe}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",We=n==="mouseout"||n==="pointerout",xe&&a!==Te&&(Ze=a.relatedTarget||a.fromElement)&&(jr(Ze)||Ze[ji]))break e;if((We||xe)&&(xe=ye.window===ye?ye:(xe=ye.ownerDocument)?xe.defaultView||xe.parentWindow:window,We?(Ze=a.relatedTarget||a.toElement,We=ue,Ze=Ze?jr(Ze):null,Ze!==null&&(on=Ri(Ze),Ze!==on||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(We=null,Ze=ue),We!==Ze)){if(Qe=Rh,Ae="onMouseLeave",ee="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(Qe=bh,Ae="onPointerLeave",ee="onPointerEnter",Y="pointer"),on=We==null?xe:Ls(We),ie=Ze==null?xe:Ls(Ze),xe=new Qe(Ae,Y+"leave",We,a,ye),xe.target=on,xe.relatedTarget=ie,Ae=null,jr(ye)===ue&&(Qe=new Qe(ee,Y+"enter",Ze,a,ye),Qe.target=ie,Qe.relatedTarget=on,Ae=Qe),on=Ae,We&&Ze)t:{for(Qe=We,ee=Ze,Y=0,ie=Qe;ie;ie=Ps(ie))Y++;for(ie=0,Ae=ee;Ae;Ae=Ps(Ae))ie++;for(;0<Y-ie;)Qe=Ps(Qe),Y--;for(;0<ie-Y;)ee=Ps(ee),ie--;for(;Y--;){if(Qe===ee||ee!==null&&Qe===ee.alternate)break t;Qe=Ps(Qe),ee=Ps(ee)}Qe=null}else Qe=null;We!==null&&ip(Se,xe,We,Qe,!1),Ze!==null&&on!==null&&ip(Se,on,Ze,Qe,!0)}}e:{if(xe=ue?Ls(ue):window,We=xe.nodeName&&xe.nodeName.toLowerCase(),We==="select"||We==="input"&&xe.type==="file")var tt=Lv;else if(Fh(xe))if(Bh)tt=Uv;else{tt=Nv;var rt=Dv}else(We=xe.nodeName)&&We.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(tt=Iv);if(tt&&(tt=tt(n,ue))){Oh(Se,tt,a,ye);break e}rt&&rt(n,xe,ue),n==="focusout"&&(rt=xe._wrapperState)&&rt.controlled&&xe.type==="number"&&qe(xe,"number",xe.value)}switch(rt=ue?Ls(ue):window,n){case"focusin":(Fh(rt)||rt.contentEditable==="true")&&(Cs=rt,Xu=ue,Oo=null);break;case"focusout":Oo=Xu=Cs=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,Yh(Se,a,ye);break;case"selectionchange":if(Bv)break;case"keydown":case"keyup":Yh(Se,a,ye)}var st;if(Vu)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else As?Ih(n,a)&&(ut="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ut="onCompositionStart");ut&&(Lh&&a.locale!=="ko"&&(As||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&As&&(st=Ah()):(_r=ye,Uu="value"in _r?_r.value:_r.textContent,As=!0)),rt=Ga(ue,ut),0<rt.length&&(ut=new Ph(ut,n,null,a,ye),Se.push({event:ut,listeners:rt}),st?ut.data=st:(st=Uh(a),st!==null&&(ut.data=st)))),(st=Av?Cv(n,a):Rv(n,a))&&(ue=Ga(ue,"onBeforeInput"),0<ue.length&&(ye=new Ph("onBeforeInput","beforeinput",null,a,ye),Se.push({event:ye,listeners:ue}),ye.data=st))}tp(Se,i)})}function ko(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ga(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Ht(n,a),m!=null&&c.unshift(ko(n,m,d)),m=Ht(n,i),m!=null&&c.push(ko(n,m,d))),n=n.return}return c}function Ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ip(n,i,a,c,d){for(var m=i._reactName,T=[];a!==null&&a!==c;){var F=a,G=F.alternate,ue=F.stateNode;if(G!==null&&G===c)break;F.tag===5&&ue!==null&&(F=ue,d?(G=Ht(a,m),G!=null&&T.unshift(ko(a,G,F))):d||(G=Ht(a,m),G!=null&&T.push(ko(a,G,F)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var Hv=/\r\n?/g,Gv=/\u0000|\uFFFD/g;function rp(n){return(typeof n=="string"?n:""+n).replace(Hv,`
`).replace(Gv,"")}function Wa(n,i,a){if(i=rp(i),rp(n)!==i&&a)throw Error(t(425))}function Xa(){}var Ju=null,Qu=null;function ec(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var tc=typeof setTimeout=="function"?setTimeout:void 0,Wv=typeof clearTimeout=="function"?clearTimeout:void 0,sp=typeof Promise=="function"?Promise:void 0,Xv=typeof queueMicrotask=="function"?queueMicrotask:typeof sp<"u"?function(n){return sp.resolve(null).then(n).catch(Yv)}:tc;function Yv(n){setTimeout(function(){throw n})}function nc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),bo(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);bo(i)}function yr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function op(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var bs=Math.random().toString(36).slice(2),bi="__reactFiber$"+bs,Vo="__reactProps$"+bs,ji="__reactContainer$"+bs,ic="__reactEvents$"+bs,qv="__reactListeners$"+bs,jv="__reactHandles$"+bs;function jr(n){var i=n[bi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[ji]||a[bi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=op(n);n!==null;){if(a=n[bi])return a;n=op(n)}return i}n=a,a=n.parentNode}return null}function Ho(n){return n=n[bi]||n[ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ls(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ya(n){return n[Vo]||null}var rc=[],Ds=-1;function Sr(n){return{current:n}}function Zt(n){0>Ds||(n.current=rc[Ds],rc[Ds]=null,Ds--)}function Xt(n,i){Ds++,rc[Ds]=n.current,n.current=i}var Mr={},An=Sr(Mr),Hn=Sr(!1),Zr=Mr;function Ns(n,i){var a=n.type.contextTypes;if(!a)return Mr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gn(n){return n=n.childContextTypes,n!=null}function qa(){Zt(Hn),Zt(An)}function ap(n,i,a){if(An.current!==Mr)throw Error(t(168));Xt(An,i),Xt(Hn,a)}function lp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,me(n)||"Unknown",d));return se({},a,c)}function ja(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Mr,Zr=An.current,Xt(An,n),Xt(Hn,Hn.current),!0}function up(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=lp(n,i,Zr),c.__reactInternalMemoizedMergedChildContext=n,Zt(Hn),Zt(An),Xt(An,n)):Zt(Hn),Xt(Hn,a)}var Zi=null,Za=!1,sc=!1;function cp(n){Zi===null?Zi=[n]:Zi.push(n)}function Zv(n){Za=!0,cp(n)}function Er(){if(!sc&&Zi!==null){sc=!0;var n=0,i=Mt;try{var a=Zi;for(Mt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Zi=null,Za=!1}catch(d){throw Zi!==null&&(Zi=Zi.slice(n+1)),ba(To,Er),d}finally{Mt=i,sc=!1}}return null}var Is=[],Us=0,Ka=null,$a=0,si=[],oi=0,Kr=null,Ki=1,$i="";function $r(n,i){Is[Us++]=$a,Is[Us++]=Ka,Ka=n,$a=i}function fp(n,i,a){si[oi++]=Ki,si[oi++]=$i,si[oi++]=Kr,Kr=n;var c=Ki;n=$i;var d=32-be(c)-1;c&=~(1<<d),a+=1;var m=32-be(i)+d;if(30<m){var T=d-d%5;m=(c&(1<<T)-1).toString(32),c>>=T,d-=T,Ki=1<<32-be(i)+d|a<<d|c,$i=m+n}else Ki=1<<m|a<<d|c,$i=n}function oc(n){n.return!==null&&($r(n,1),fp(n,1,0))}function ac(n){for(;n===Ka;)Ka=Is[--Us],Is[Us]=null,$a=Is[--Us],Is[Us]=null;for(;n===Kr;)Kr=si[--oi],si[oi]=null,$i=si[--oi],si[oi]=null,Ki=si[--oi],si[oi]=null}var $n=null,Jn=null,Jt=!1,_i=null;function dp(n,i){var a=ci(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function hp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,$n=n,Jn=yr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,$n=n,Jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Kr!==null?{id:Ki,overflow:$i}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ci(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,$n=n,Jn=null,!0):!1;default:return!1}}function lc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function uc(n){if(Jt){var i=Jn;if(i){var a=i;if(!hp(n,i)){if(lc(n))throw Error(t(418));i=yr(a.nextSibling);var c=$n;i&&hp(n,i)?dp(c,a):(n.flags=n.flags&-4097|2,Jt=!1,$n=n)}}else{if(lc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Jt=!1,$n=n}}}function pp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;$n=n}function Ja(n){if(n!==$n)return!1;if(!Jt)return pp(n),Jt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!ec(n.type,n.memoizedProps)),i&&(i=Jn)){if(lc(n))throw mp(),Error(t(418));for(;i;)dp(n,i),i=yr(i.nextSibling)}if(pp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Jn=yr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Jn=null}}else Jn=$n?yr(n.stateNode.nextSibling):null;return!0}function mp(){for(var n=Jn;n;)n=yr(n.nextSibling)}function Fs(){Jn=$n=null,Jt=!1}function cc(n){_i===null?_i=[n]:_i.push(n)}var Kv=P.ReactCurrentBatchConfig;function Go(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var F=d.refs;T===null?delete F[m]:F[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Qa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function gp(n){var i=n._init;return i(n._payload)}function vp(n){function i(ee,Y){if(n){var ie=ee.deletions;ie===null?(ee.deletions=[Y],ee.flags|=16):ie.push(Y)}}function a(ee,Y){if(!n)return null;for(;Y!==null;)i(ee,Y),Y=Y.sibling;return null}function c(ee,Y){for(ee=new Map;Y!==null;)Y.key!==null?ee.set(Y.key,Y):ee.set(Y.index,Y),Y=Y.sibling;return ee}function d(ee,Y){return ee=Lr(ee,Y),ee.index=0,ee.sibling=null,ee}function m(ee,Y,ie){return ee.index=ie,n?(ie=ee.alternate,ie!==null?(ie=ie.index,ie<Y?(ee.flags|=2,Y):ie):(ee.flags|=2,Y)):(ee.flags|=1048576,Y)}function T(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function F(ee,Y,ie,Ae){return Y===null||Y.tag!==6?(Y=tf(ie,ee.mode,Ae),Y.return=ee,Y):(Y=d(Y,ie),Y.return=ee,Y)}function G(ee,Y,ie,Ae){var tt=ie.type;return tt===I?ye(ee,Y,ie.props.children,Ae,ie.key):Y!==null&&(Y.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===$&&gp(tt)===Y.type)?(Ae=d(Y,ie.props),Ae.ref=Go(ee,Y,ie),Ae.return=ee,Ae):(Ae=El(ie.type,ie.key,ie.props,null,ee.mode,Ae),Ae.ref=Go(ee,Y,ie),Ae.return=ee,Ae)}function ue(ee,Y,ie,Ae){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ie.containerInfo||Y.stateNode.implementation!==ie.implementation?(Y=nf(ie,ee.mode,Ae),Y.return=ee,Y):(Y=d(Y,ie.children||[]),Y.return=ee,Y)}function ye(ee,Y,ie,Ae,tt){return Y===null||Y.tag!==7?(Y=ss(ie,ee.mode,Ae,tt),Y.return=ee,Y):(Y=d(Y,ie),Y.return=ee,Y)}function Se(ee,Y,ie){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=tf(""+Y,ee.mode,ie),Y.return=ee,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case B:return ie=El(Y.type,Y.key,Y.props,null,ee.mode,ie),ie.ref=Go(ee,null,Y),ie.return=ee,ie;case D:return Y=nf(Y,ee.mode,ie),Y.return=ee,Y;case $:var Ae=Y._init;return Se(ee,Ae(Y._payload),ie)}if(z(Y)||re(Y))return Y=ss(Y,ee.mode,ie,null),Y.return=ee,Y;Qa(ee,Y)}return null}function xe(ee,Y,ie,Ae){var tt=Y!==null?Y.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return tt!==null?null:F(ee,Y,""+ie,Ae);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case B:return ie.key===tt?G(ee,Y,ie,Ae):null;case D:return ie.key===tt?ue(ee,Y,ie,Ae):null;case $:return tt=ie._init,xe(ee,Y,tt(ie._payload),Ae)}if(z(ie)||re(ie))return tt!==null?null:ye(ee,Y,ie,Ae,null);Qa(ee,ie)}return null}function We(ee,Y,ie,Ae,tt){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return ee=ee.get(ie)||null,F(Y,ee,""+Ae,tt);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case B:return ee=ee.get(Ae.key===null?ie:Ae.key)||null,G(Y,ee,Ae,tt);case D:return ee=ee.get(Ae.key===null?ie:Ae.key)||null,ue(Y,ee,Ae,tt);case $:var rt=Ae._init;return We(ee,Y,ie,rt(Ae._payload),tt)}if(z(Ae)||re(Ae))return ee=ee.get(ie)||null,ye(Y,ee,Ae,tt,null);Qa(Y,Ae)}return null}function Ze(ee,Y,ie,Ae){for(var tt=null,rt=null,st=Y,ut=Y=0,xn=null;st!==null&&ut<ie.length;ut++){st.index>ut?(xn=st,st=null):xn=st.sibling;var It=xe(ee,st,ie[ut],Ae);if(It===null){st===null&&(st=xn);break}n&&st&&It.alternate===null&&i(ee,st),Y=m(It,Y,ut),rt===null?tt=It:rt.sibling=It,rt=It,st=xn}if(ut===ie.length)return a(ee,st),Jt&&$r(ee,ut),tt;if(st===null){for(;ut<ie.length;ut++)st=Se(ee,ie[ut],Ae),st!==null&&(Y=m(st,Y,ut),rt===null?tt=st:rt.sibling=st,rt=st);return Jt&&$r(ee,ut),tt}for(st=c(ee,st);ut<ie.length;ut++)xn=We(st,ee,ut,ie[ut],Ae),xn!==null&&(n&&xn.alternate!==null&&st.delete(xn.key===null?ut:xn.key),Y=m(xn,Y,ut),rt===null?tt=xn:rt.sibling=xn,rt=xn);return n&&st.forEach(function(Dr){return i(ee,Dr)}),Jt&&$r(ee,ut),tt}function Qe(ee,Y,ie,Ae){var tt=re(ie);if(typeof tt!="function")throw Error(t(150));if(ie=tt.call(ie),ie==null)throw Error(t(151));for(var rt=tt=null,st=Y,ut=Y=0,xn=null,It=ie.next();st!==null&&!It.done;ut++,It=ie.next()){st.index>ut?(xn=st,st=null):xn=st.sibling;var Dr=xe(ee,st,It.value,Ae);if(Dr===null){st===null&&(st=xn);break}n&&st&&Dr.alternate===null&&i(ee,st),Y=m(Dr,Y,ut),rt===null?tt=Dr:rt.sibling=Dr,rt=Dr,st=xn}if(It.done)return a(ee,st),Jt&&$r(ee,ut),tt;if(st===null){for(;!It.done;ut++,It=ie.next())It=Se(ee,It.value,Ae),It!==null&&(Y=m(It,Y,ut),rt===null?tt=It:rt.sibling=It,rt=It);return Jt&&$r(ee,ut),tt}for(st=c(ee,st);!It.done;ut++,It=ie.next())It=We(st,ee,ut,It.value,Ae),It!==null&&(n&&It.alternate!==null&&st.delete(It.key===null?ut:It.key),Y=m(It,Y,ut),rt===null?tt=It:rt.sibling=It,rt=It);return n&&st.forEach(function(P_){return i(ee,P_)}),Jt&&$r(ee,ut),tt}function on(ee,Y,ie,Ae){if(typeof ie=="object"&&ie!==null&&ie.type===I&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case B:e:{for(var tt=ie.key,rt=Y;rt!==null;){if(rt.key===tt){if(tt=ie.type,tt===I){if(rt.tag===7){a(ee,rt.sibling),Y=d(rt,ie.props.children),Y.return=ee,ee=Y;break e}}else if(rt.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===$&&gp(tt)===rt.type){a(ee,rt.sibling),Y=d(rt,ie.props),Y.ref=Go(ee,rt,ie),Y.return=ee,ee=Y;break e}a(ee,rt);break}else i(ee,rt);rt=rt.sibling}ie.type===I?(Y=ss(ie.props.children,ee.mode,Ae,ie.key),Y.return=ee,ee=Y):(Ae=El(ie.type,ie.key,ie.props,null,ee.mode,Ae),Ae.ref=Go(ee,Y,ie),Ae.return=ee,ee=Ae)}return T(ee);case D:e:{for(rt=ie.key;Y!==null;){if(Y.key===rt)if(Y.tag===4&&Y.stateNode.containerInfo===ie.containerInfo&&Y.stateNode.implementation===ie.implementation){a(ee,Y.sibling),Y=d(Y,ie.children||[]),Y.return=ee,ee=Y;break e}else{a(ee,Y);break}else i(ee,Y);Y=Y.sibling}Y=nf(ie,ee.mode,Ae),Y.return=ee,ee=Y}return T(ee);case $:return rt=ie._init,on(ee,Y,rt(ie._payload),Ae)}if(z(ie))return Ze(ee,Y,ie,Ae);if(re(ie))return Qe(ee,Y,ie,Ae);Qa(ee,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,Y!==null&&Y.tag===6?(a(ee,Y.sibling),Y=d(Y,ie),Y.return=ee,ee=Y):(a(ee,Y),Y=tf(ie,ee.mode,Ae),Y.return=ee,ee=Y),T(ee)):a(ee,Y)}return on}var Os=vp(!0),_p=vp(!1),el=Sr(null),tl=null,Bs=null,fc=null;function dc(){fc=Bs=tl=null}function hc(n){var i=el.current;Zt(el),n._currentValue=i}function pc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function zs(n,i){tl=n,fc=Bs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Wn=!0),n.firstContext=null)}function ai(n){var i=n._currentValue;if(fc!==n)if(n={context:n,memoizedValue:i,next:null},Bs===null){if(tl===null)throw Error(t(308));Bs=n,tl.dependencies={lanes:0,firstContext:n}}else Bs=Bs.next=n;return i}var Jr=null;function mc(n){Jr===null?Jr=[n]:Jr.push(n)}function xp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,mc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Ji(n,c)}function Ji(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var wr=!1;function gc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Qi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Tr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Lt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Ji(n,a)}return d=c.interleaved,d===null?(i.next=i,mc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Ji(n,a)}function nl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Vn(n,a)}}function Sp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function il(n,i,a,c){var d=n.updateQueue;wr=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,F=d.shared.pending;if(F!==null){d.shared.pending=null;var G=F,ue=G.next;G.next=null,T===null?m=ue:T.next=ue,T=G;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,F=ye.lastBaseUpdate,F!==T&&(F===null?ye.firstBaseUpdate=ue:F.next=ue,ye.lastBaseUpdate=G))}if(m!==null){var Se=d.baseState;T=0,ye=ue=G=null,F=m;do{var xe=F.lane,We=F.eventTime;if((c&xe)===xe){ye!==null&&(ye=ye.next={eventTime:We,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Ze=n,Qe=F;switch(xe=i,We=a,Qe.tag){case 1:if(Ze=Qe.payload,typeof Ze=="function"){Se=Ze.call(We,Se,xe);break e}Se=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=Qe.payload,xe=typeof Ze=="function"?Ze.call(We,Se,xe):Ze,xe==null)break e;Se=se({},Se,xe);break e;case 2:wr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,xe=d.effects,xe===null?d.effects=[F]:xe.push(F))}else We={eventTime:We,lane:xe,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ye===null?(ue=ye=We,G=Se):ye=ye.next=We,T|=xe;if(F=F.next,F===null){if(F=d.shared.pending,F===null)break;xe=F,F=xe.next,xe.next=null,d.lastBaseUpdate=xe,d.shared.pending=null}}while(!0);if(ye===null&&(G=Se),d.baseState=G,d.firstBaseUpdate=ue,d.lastBaseUpdate=ye,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);ts|=T,n.lanes=T,n.memoizedState=Se}}function Mp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Wo={},Li=Sr(Wo),Xo=Sr(Wo),Yo=Sr(Wo);function Qr(n){if(n===Wo)throw Error(t(174));return n}function vc(n,i){switch(Xt(Yo,i),Xt(Xo,n),Xt(Li,Wo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=E(i,n)}Zt(Li),Xt(Li,i)}function ks(){Zt(Li),Zt(Xo),Zt(Yo)}function Ep(n){Qr(Yo.current);var i=Qr(Li.current),a=E(i,n.type);i!==a&&(Xt(Xo,n),Xt(Li,a))}function _c(n){Xo.current===n&&(Zt(Li),Zt(Xo))}var en=Sr(0);function rl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xc=[];function yc(){for(var n=0;n<xc.length;n++)xc[n]._workInProgressVersionPrimary=null;xc.length=0}var sl=P.ReactCurrentDispatcher,Sc=P.ReactCurrentBatchConfig,es=0,tn=null,fn=null,vn=null,ol=!1,qo=!1,jo=0,$v=0;function Cn(){throw Error(t(321))}function Mc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!vi(n[a],i[a]))return!1;return!0}function Ec(n,i,a,c,d,m){if(es=m,tn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,sl.current=n===null||n.memoizedState===null?t_:n_,n=a(c,d),qo){m=0;do{if(qo=!1,jo=0,25<=m)throw Error(t(301));m+=1,vn=fn=null,i.updateQueue=null,sl.current=i_,n=a(c,d)}while(qo)}if(sl.current=ul,i=fn!==null&&fn.next!==null,es=0,vn=fn=tn=null,ol=!1,i)throw Error(t(300));return n}function wc(){var n=jo!==0;return jo=0,n}function Di(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?tn.memoizedState=vn=n:vn=vn.next=n,vn}function li(){if(fn===null){var n=tn.alternate;n=n!==null?n.memoizedState:null}else n=fn.next;var i=vn===null?tn.memoizedState:vn.next;if(i!==null)vn=i,fn=n;else{if(n===null)throw Error(t(310));fn=n,n={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},vn===null?tn.memoizedState=vn=n:vn=vn.next=n}return vn}function Zo(n,i){return typeof i=="function"?i(n):i}function Tc(n){var i=li(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=fn,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var F=T=null,G=null,ue=m;do{var ye=ue.lane;if((es&ye)===ye)G!==null&&(G=G.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),c=ue.hasEagerState?ue.eagerState:n(c,ue.action);else{var Se={lane:ye,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};G===null?(F=G=Se,T=c):G=G.next=Se,tn.lanes|=ye,ts|=ye}ue=ue.next}while(ue!==null&&ue!==m);G===null?T=c:G.next=F,vi(c,i.memoizedState)||(Wn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=G,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,tn.lanes|=m,ts|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Ac(n){var i=li(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do m=n(m,T.action),T=T.next;while(T!==d);vi(m,i.memoizedState)||(Wn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function wp(){}function Tp(n,i){var a=tn,c=li(),d=i(),m=!vi(c.memoizedState,d);if(m&&(c.memoizedState=d,Wn=!0),c=c.queue,Cc(Rp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||vn!==null&&vn.memoizedState.tag&1){if(a.flags|=2048,Ko(9,Cp.bind(null,a,c,d,i),void 0,null),_n===null)throw Error(t(349));(es&30)!==0||Ap(a,i,d)}return d}function Ap(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=tn.updateQueue,i===null?(i={lastEffect:null,stores:null},tn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Cp(n,i,a,c){i.value=a,i.getSnapshot=c,Pp(i)&&bp(n)}function Rp(n,i,a){return a(function(){Pp(i)&&bp(n)})}function Pp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!vi(n,a)}catch{return!0}}function bp(n){var i=Ji(n,1);i!==null&&Mi(i,n,1,-1)}function Lp(n){var i=Di();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:n},i.queue=n,n=n.dispatch=e_.bind(null,tn,n),[i.memoizedState,n]}function Ko(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=tn.updateQueue,i===null?(i={lastEffect:null,stores:null},tn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Dp(){return li().memoizedState}function al(n,i,a,c){var d=Di();tn.flags|=n,d.memoizedState=Ko(1|i,a,void 0,c===void 0?null:c)}function ll(n,i,a,c){var d=li();c=c===void 0?null:c;var m=void 0;if(fn!==null){var T=fn.memoizedState;if(m=T.destroy,c!==null&&Mc(c,T.deps)){d.memoizedState=Ko(i,a,m,c);return}}tn.flags|=n,d.memoizedState=Ko(1|i,a,m,c)}function Np(n,i){return al(8390656,8,n,i)}function Cc(n,i){return ll(2048,8,n,i)}function Ip(n,i){return ll(4,2,n,i)}function Up(n,i){return ll(4,4,n,i)}function Fp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Op(n,i,a){return a=a!=null?a.concat([n]):null,ll(4,4,Fp.bind(null,i,n),a)}function Rc(){}function Bp(n,i){var a=li();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Mc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function zp(n,i){var a=li();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Mc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function kp(n,i,a){return(es&21)===0?(n.baseState&&(n.baseState=!1,Wn=!0),n.memoizedState=a):(vi(a,i)||(a=Ge(),tn.lanes|=a,ts|=a,n.baseState=!0),i)}function Jv(n,i){var a=Mt;Mt=a!==0&&4>a?a:4,n(!0);var c=Sc.transition;Sc.transition={};try{n(!1),i()}finally{Mt=a,Sc.transition=c}}function Vp(){return li().memoizedState}function Qv(n,i,a){var c=Pr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Hp(n))Gp(i,a);else if(a=xp(n,i,a,c),a!==null){var d=Fn();Mi(a,n,c,d),Wp(a,i,c)}}function e_(n,i,a){var c=Pr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hp(n))Gp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,F=m(T,a);if(d.hasEagerState=!0,d.eagerState=F,vi(F,T)){var G=i.interleaved;G===null?(d.next=d,mc(i)):(d.next=G.next,G.next=d),i.interleaved=d;return}}catch{}finally{}a=xp(n,i,d,c),a!==null&&(d=Fn(),Mi(a,n,c,d),Wp(a,i,c))}}function Hp(n){var i=n.alternate;return n===tn||i!==null&&i===tn}function Gp(n,i){qo=ol=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Wp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Vn(n,a)}}var ul={readContext:ai,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},t_={readContext:ai,useCallback:function(n,i){return Di().memoizedState=[n,i===void 0?null:i],n},useContext:ai,useEffect:Np,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,al(4194308,4,Fp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return al(4194308,4,n,i)},useInsertionEffect:function(n,i){return al(4,2,n,i)},useMemo:function(n,i){var a=Di();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Di();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Qv.bind(null,tn,n),[c.memoizedState,n]},useRef:function(n){var i=Di();return n={current:n},i.memoizedState=n},useState:Lp,useDebugValue:Rc,useDeferredValue:function(n){return Di().memoizedState=n},useTransition:function(){var n=Lp(!1),i=n[0];return n=Jv.bind(null,n[1]),Di().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=tn,d=Di();if(Jt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),_n===null)throw Error(t(349));(es&30)!==0||Ap(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Np(Rp.bind(null,c,m,n),[n]),c.flags|=2048,Ko(9,Cp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Di(),i=_n.identifierPrefix;if(Jt){var a=$i,c=Ki;a=(c&~(1<<32-be(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=jo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=$v++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},n_={readContext:ai,useCallback:Bp,useContext:ai,useEffect:Cc,useImperativeHandle:Op,useInsertionEffect:Ip,useLayoutEffect:Up,useMemo:zp,useReducer:Tc,useRef:Dp,useState:function(){return Tc(Zo)},useDebugValue:Rc,useDeferredValue:function(n){var i=li();return kp(i,fn.memoizedState,n)},useTransition:function(){var n=Tc(Zo)[0],i=li().memoizedState;return[n,i]},useMutableSource:wp,useSyncExternalStore:Tp,useId:Vp,unstable_isNewReconciler:!1},i_={readContext:ai,useCallback:Bp,useContext:ai,useEffect:Cc,useImperativeHandle:Op,useInsertionEffect:Ip,useLayoutEffect:Up,useMemo:zp,useReducer:Ac,useRef:Dp,useState:function(){return Ac(Zo)},useDebugValue:Rc,useDeferredValue:function(n){var i=li();return fn===null?i.memoizedState=n:kp(i,fn.memoizedState,n)},useTransition:function(){var n=Ac(Zo)[0],i=li().memoizedState;return[n,i]},useMutableSource:wp,useSyncExternalStore:Tp,useId:Vp,unstable_isNewReconciler:!1};function xi(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Pc(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var cl={isMounted:function(n){return(n=n._reactInternals)?Ri(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Fn(),d=Pr(n),m=Qi(c,d);m.payload=i,a!=null&&(m.callback=a),i=Tr(n,m,d),i!==null&&(Mi(i,n,d,c),nl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Fn(),d=Pr(n),m=Qi(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Tr(n,m,d),i!==null&&(Mi(i,n,d,c),nl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Fn(),c=Pr(n),d=Qi(a,c);d.tag=2,i!=null&&(d.callback=i),i=Tr(n,d,c),i!==null&&(Mi(i,n,c,a),nl(i,n,c))}};function Xp(n,i,a,c,d,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!Fo(a,c)||!Fo(d,m):!0}function Yp(n,i,a){var c=!1,d=Mr,m=i.contextType;return typeof m=="object"&&m!==null?m=ai(m):(d=Gn(i)?Zr:An.current,c=i.contextTypes,m=(c=c!=null)?Ns(n,d):Mr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=cl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function qp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&cl.enqueueReplaceState(i,i.state,null)}function bc(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},gc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=ai(m):(m=Gn(i)?Zr:An.current,d.context=Ns(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Pc(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&cl.enqueueReplaceState(d,d.state,null),il(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Vs(n,i){try{var a="",c=i;do a+=Fe(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function Lc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Dc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var r_=typeof WeakMap=="function"?WeakMap:Map;function jp(n,i,a){a=Qi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){vl||(vl=!0,qc=c),Dc(n,i)},a}function Zp(n,i,a){a=Qi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Dc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Dc(n,i),typeof c!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Kp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new r_;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=__.bind(null,n,i,a),i.then(n,n))}function $p(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Jp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Qi(-1,1),i.tag=2,Tr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var s_=P.ReactCurrentOwner,Wn=!1;function Un(n,i,a,c){i.child=n===null?_p(i,null,a,c):Os(i,n.child,a,c)}function Qp(n,i,a,c,d){a=a.render;var m=i.ref;return zs(i,d),c=Ec(n,i,a,c,m,d),a=wc(),n!==null&&!Wn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,er(n,i,d)):(Jt&&a&&oc(i),i.flags|=1,Un(n,i,c,d),i.child)}function em(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!ef(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,tm(n,i,m,c,d)):(n=El(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:Fo,a(T,c)&&n.ref===i.ref)return er(n,i,d)}return i.flags|=1,n=Lr(m,c),n.ref=i.ref,n.return=i,i.child=n}function tm(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Fo(m,c)&&n.ref===i.ref)if(Wn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Wn=!0);else return i.lanes=n.lanes,er(n,i,d)}return Nc(n,i,a,c,d)}function nm(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(Gs,Qn),Qn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Xt(Gs,Qn),Qn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Xt(Gs,Qn),Qn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Xt(Gs,Qn),Qn|=c;return Un(n,i,d,a),i.child}function im(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Nc(n,i,a,c,d){var m=Gn(a)?Zr:An.current;return m=Ns(i,m),zs(i,d),a=Ec(n,i,a,c,m,d),c=wc(),n!==null&&!Wn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,er(n,i,d)):(Jt&&c&&oc(i),i.flags|=1,Un(n,i,a,d),i.child)}function rm(n,i,a,c,d){if(Gn(a)){var m=!0;ja(i)}else m=!1;if(zs(i,d),i.stateNode===null)dl(n,i),Yp(i,a,c),bc(i,a,c,d),c=!0;else if(n===null){var T=i.stateNode,F=i.memoizedProps;T.props=F;var G=T.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=ai(ue):(ue=Gn(a)?Zr:An.current,ue=Ns(i,ue));var ye=a.getDerivedStateFromProps,Se=typeof ye=="function"||typeof T.getSnapshotBeforeUpdate=="function";Se||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==c||G!==ue)&&qp(i,T,c,ue),wr=!1;var xe=i.memoizedState;T.state=xe,il(i,c,T,d),G=i.memoizedState,F!==c||xe!==G||Hn.current||wr?(typeof ye=="function"&&(Pc(i,a,ye,c),G=i.memoizedState),(F=wr||Xp(i,a,F,c,xe,G,ue))?(Se||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=G),T.props=c,T.state=G,T.context=ue,c=F):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,yp(n,i),F=i.memoizedProps,ue=i.type===i.elementType?F:xi(i.type,F),T.props=ue,Se=i.pendingProps,xe=T.context,G=a.contextType,typeof G=="object"&&G!==null?G=ai(G):(G=Gn(a)?Zr:An.current,G=Ns(i,G));var We=a.getDerivedStateFromProps;(ye=typeof We=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==Se||xe!==G)&&qp(i,T,c,G),wr=!1,xe=i.memoizedState,T.state=xe,il(i,c,T,d);var Ze=i.memoizedState;F!==Se||xe!==Ze||Hn.current||wr?(typeof We=="function"&&(Pc(i,a,We,c),Ze=i.memoizedState),(ue=wr||Xp(i,a,ue,c,xe,Ze,G)||!1)?(ye||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Ze,G),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Ze,G)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ze),T.props=c,T.state=Ze,T.context=G,c=ue):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),c=!1)}return Ic(n,i,a,c,m,d)}function Ic(n,i,a,c,d,m){im(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&up(i,a,!1),er(n,i,m);c=i.stateNode,s_.current=i;var F=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Os(i,n.child,null,m),i.child=Os(i,null,F,m)):Un(n,i,F,m),i.memoizedState=c.state,d&&up(i,a,!0),i.child}function sm(n){var i=n.stateNode;i.pendingContext?ap(n,i.pendingContext,i.pendingContext!==i.context):i.context&&ap(n,i.context,!1),vc(n,i.containerInfo)}function om(n,i,a,c,d){return Fs(),cc(d),i.flags|=256,Un(n,i,a,c),i.child}var Uc={dehydrated:null,treeContext:null,retryLane:0};function Fc(n){return{baseLanes:n,cachePool:null,transitions:null}}function am(n,i,a){var c=i.pendingProps,d=en.current,m=!1,T=(i.flags&128)!==0,F;if((F=T)||(F=n!==null&&n.memoizedState===null?!1:(d&2)!==0),F?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Xt(en,d&1),n===null)return uc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=wl(T,c,0,null),n=ss(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Fc(a),i.memoizedState=Uc,n):Oc(i,T));if(d=n.memoizedState,d!==null&&(F=d.dehydrated,F!==null))return o_(n,i,T,c,F,d,a);if(m){m=c.fallback,T=i.mode,d=n.child,F=d.sibling;var G={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=G,i.deletions=null):(c=Lr(d,G),c.subtreeFlags=d.subtreeFlags&14680064),F!==null?m=Lr(F,m):(m=ss(m,T,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?Fc(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~a,i.memoizedState=Uc,c}return m=n.child,n=m.sibling,c=Lr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Oc(n,i){return i=wl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function fl(n,i,a,c){return c!==null&&cc(c),Os(i,n.child,null,a),n=Oc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function o_(n,i,a,c,d,m,T){if(a)return i.flags&256?(i.flags&=-257,c=Lc(Error(t(422))),fl(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=wl({mode:"visible",children:c.children},d,0,null),m=ss(m,d,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Os(i,n.child,null,T),i.child.memoizedState=Fc(T),i.memoizedState=Uc,m);if((i.mode&1)===0)return fl(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var F=c.dgst;return c=F,m=Error(t(419)),c=Lc(m,c,void 0),fl(n,i,T,c)}if(F=(T&n.childLanes)!==0,Wn||F){if(c=_n,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Ji(n,d),Mi(c,n,d,-1))}return Qc(),c=Lc(Error(t(421))),fl(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=x_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Jn=yr(d.nextSibling),$n=i,Jt=!0,_i=null,n!==null&&(si[oi++]=Ki,si[oi++]=$i,si[oi++]=Kr,Ki=n.id,$i=n.overflow,Kr=i),i=Oc(i,c.children),i.flags|=4096,i)}function lm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),pc(n.return,i,a)}function Bc(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function um(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Un(n,i,c.children,a),c=en.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&lm(n,a,i);else if(n.tag===19)lm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Xt(en,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&rl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Bc(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&rl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Bc(i,!0,a,null,m);break;case"together":Bc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function dl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function er(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ts|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Lr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Lr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function a_(n,i,a){switch(i.tag){case 3:sm(i),Fs();break;case 5:Ep(i);break;case 1:Gn(i.type)&&ja(i);break;case 4:vc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Xt(el,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Xt(en,en.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?am(n,i,a):(Xt(en,en.current&1),n=er(n,i,a),n!==null?n.sibling:null);Xt(en,en.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return um(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Xt(en,en.current),c)break;return null;case 22:case 23:return i.lanes=0,nm(n,i,a)}return er(n,i,a)}var cm,zc,fm,dm;cm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},zc=function(){},fm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Qr(Li.current);var m=null;switch(a){case"input":d=ht(n,d),c=ht(n,c),m=[];break;case"select":d=se({},d,{value:void 0}),c=se({},c,{value:void 0}),m=[];break;case"textarea":d=gt(n,d),c=gt(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Xa)}He(a,c);var T;a=null;for(ue in d)if(!c.hasOwnProperty(ue)&&d.hasOwnProperty(ue)&&d[ue]!=null)if(ue==="style"){var F=d[ue];for(T in F)F.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?m||(m=[]):(m=m||[]).push(ue,null));for(ue in c){var G=c[ue];if(F=d!=null?d[ue]:void 0,c.hasOwnProperty(ue)&&G!==F&&(G!=null||F!=null))if(ue==="style")if(F){for(T in F)!F.hasOwnProperty(T)||G&&G.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in G)G.hasOwnProperty(T)&&F[T]!==G[T]&&(a||(a={}),a[T]=G[T])}else a||(m||(m=[]),m.push(ue,a)),a=G;else ue==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,F=F?F.__html:void 0,G!=null&&F!==G&&(m=m||[]).push(ue,G)):ue==="children"?typeof G!="string"&&typeof G!="number"||(m=m||[]).push(ue,""+G):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(G!=null&&ue==="onScroll"&&jt("scroll",n),m||F===G||(m=[])):(m=m||[]).push(ue,G))}a&&(m=m||[]).push("style",a);var ue=m;(i.updateQueue=ue)&&(i.flags|=4)}},dm=function(n,i,a,c){a!==c&&(i.flags|=4)};function $o(n,i){if(!Jt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Rn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function l_(n,i,a){var c=i.pendingProps;switch(ac(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(i),null;case 1:return Gn(i.type)&&qa(),Rn(i),null;case 3:return c=i.stateNode,ks(),Zt(Hn),Zt(An),yc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ja(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,_i!==null&&(Kc(_i),_i=null))),zc(n,i),Rn(i),null;case 5:_c(i);var d=Qr(Yo.current);if(a=i.type,n!==null&&i.stateNode!=null)fm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Rn(i),null}if(n=Qr(Li.current),Ja(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[bi]=i,c[Vo]=m,n=(i.mode&1)!==0,a){case"dialog":jt("cancel",c),jt("close",c);break;case"iframe":case"object":case"embed":jt("load",c);break;case"video":case"audio":for(d=0;d<Bo.length;d++)jt(Bo[d],c);break;case"source":jt("error",c);break;case"img":case"image":case"link":jt("error",c),jt("load",c);break;case"details":jt("toggle",c);break;case"input":bt(c,m),jt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},jt("invalid",c);break;case"textarea":Dt(c,m),jt("invalid",c)}He(a,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var F=m[T];T==="children"?typeof F=="string"?c.textContent!==F&&(m.suppressHydrationWarning!==!0&&Wa(c.textContent,F,n),d=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(m.suppressHydrationWarning!==!0&&Wa(c.textContent,F,n),d=["children",""+F]):o.hasOwnProperty(T)&&F!=null&&T==="onScroll"&&jt("scroll",c)}switch(a){case"input":we(c),Ut(c,m,!0);break;case"textarea":we(c),Yt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Xa)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=L(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[bi]=i,n[Vo]=c,cm(n,i,!1,!1),i.stateNode=n;e:{switch(T=Pe(a,c),a){case"dialog":jt("cancel",n),jt("close",n),d=c;break;case"iframe":case"object":case"embed":jt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Bo.length;d++)jt(Bo[d],n);d=c;break;case"source":jt("error",n),d=c;break;case"img":case"image":case"link":jt("error",n),jt("load",n),d=c;break;case"details":jt("toggle",n),d=c;break;case"input":bt(n,c),d=ht(n,c),jt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=se({},c,{value:void 0}),jt("invalid",n);break;case"textarea":Dt(n,c),d=gt(n,c),jt("invalid",n);break;default:d=c}He(a,d),F=d;for(m in F)if(F.hasOwnProperty(m)){var G=F[m];m==="style"?pe(n,G):m==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&de(n,G)):m==="children"?typeof G=="string"?(a!=="textarea"||G!=="")&&ve(n,G):typeof G=="number"&&ve(n,""+G):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?G!=null&&m==="onScroll"&&jt("scroll",n):G!=null&&b(n,m,G,T))}switch(a){case"input":we(n),Ut(n,c,!1);break;case"textarea":we(n),Yt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+he(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?_t(n,!!c.multiple,m,!1):c.defaultValue!=null&&_t(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Xa)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Rn(i),null;case 6:if(n&&i.stateNode!=null)dm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Qr(Yo.current),Qr(Li.current),Ja(i)){if(c=i.stateNode,a=i.memoizedProps,c[bi]=i,(m=c.nodeValue!==a)&&(n=$n,n!==null))switch(n.tag){case 3:Wa(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Wa(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[bi]=i,i.stateNode=c}return Rn(i),null;case 13:if(Zt(en),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Jt&&Jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)mp(),Fs(),i.flags|=98560,m=!1;else if(m=Ja(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[bi]=i}else Fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Rn(i),m=!1}else _i!==null&&(Kc(_i),_i=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(en.current&1)!==0?dn===0&&(dn=3):Qc())),i.updateQueue!==null&&(i.flags|=4),Rn(i),null);case 4:return ks(),zc(n,i),n===null&&zo(i.stateNode.containerInfo),Rn(i),null;case 10:return hc(i.type._context),Rn(i),null;case 17:return Gn(i.type)&&qa(),Rn(i),null;case 19:if(Zt(en),m=i.memoizedState,m===null)return Rn(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)$o(m,!1);else{if(dn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=rl(n),T!==null){for(i.flags|=128,$o(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Xt(en,en.current&1|2),i.child}n=n.sibling}m.tail!==null&&Qt()>Ws&&(i.flags|=128,c=!0,$o(m,!1),i.lanes=4194304)}else{if(!c)if(n=rl(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),$o(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!Jt)return Rn(i),null}else 2*Qt()-m.renderingStartTime>Ws&&a!==1073741824&&(i.flags|=128,c=!0,$o(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(a=m.last,a!==null?a.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Qt(),i.sibling=null,a=en.current,Xt(en,c?a&1|2:a&1),i):(Rn(i),null);case 22:case 23:return Jc(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Qn&1073741824)!==0&&(Rn(i),i.subtreeFlags&6&&(i.flags|=8192)):Rn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function u_(n,i){switch(ac(i),i.tag){case 1:return Gn(i.type)&&qa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ks(),Zt(Hn),Zt(An),yc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return _c(i),null;case 13:if(Zt(en),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Fs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Zt(en),null;case 4:return ks(),null;case 10:return hc(i.type._context),null;case 22:case 23:return Jc(),null;case 24:return null;default:return null}}var hl=!1,Pn=!1,c_=typeof WeakSet=="function"?WeakSet:Set,je=null;function Hs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rn(n,i,c)}else a.current=null}function kc(n,i,a){try{a()}catch(c){rn(n,i,c)}}var hm=!1;function f_(n,i){if(Ju=Na,n=Xh(),Wu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,F=-1,G=-1,ue=0,ye=0,Se=n,xe=null;t:for(;;){for(var We;Se!==a||d!==0&&Se.nodeType!==3||(F=T+d),Se!==m||c!==0&&Se.nodeType!==3||(G=T+c),Se.nodeType===3&&(T+=Se.nodeValue.length),(We=Se.firstChild)!==null;)xe=Se,Se=We;for(;;){if(Se===n)break t;if(xe===a&&++ue===d&&(F=T),xe===m&&++ye===c&&(G=T),(We=Se.nextSibling)!==null)break;Se=xe,xe=Se.parentNode}Se=We}a=F===-1||G===-1?null:{start:F,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qu={focusedElem:n,selectionRange:a},Na=!1,je=i;je!==null;)if(i=je,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,je=n;else for(;je!==null;){i=je;try{var Ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var Qe=Ze.memoizedProps,on=Ze.memoizedState,ee=i.stateNode,Y=ee.getSnapshotBeforeUpdate(i.elementType===i.type?Qe:xi(i.type,Qe),on);ee.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){rn(i,i.return,Ae)}if(n=i.sibling,n!==null){n.return=i.return,je=n;break}je=i.return}return Ze=hm,hm=!1,Ze}function Jo(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&kc(i,a,m)}d=d.next}while(d!==c)}}function pl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Vc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function pm(n){var i=n.alternate;i!==null&&(n.alternate=null,pm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[bi],delete i[Vo],delete i[ic],delete i[qv],delete i[jv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function mm(n){return n.tag===5||n.tag===3||n.tag===4}function gm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||mm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Hc(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Xa));else if(c!==4&&(n=n.child,n!==null))for(Hc(n,i,a),n=n.sibling;n!==null;)Hc(n,i,a),n=n.sibling}function Gc(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Gc(n,i,a),n=n.sibling;n!==null;)Gc(n,i,a),n=n.sibling}var En=null,yi=!1;function Ar(n,i,a){for(a=a.child;a!==null;)vm(n,i,a),a=a.sibling}function vm(n,i,a){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(te,a)}catch{}switch(a.tag){case 5:Pn||Hs(a,i);case 6:var c=En,d=yi;En=null,Ar(n,i,a),En=c,yi=d,En!==null&&(yi?(n=En,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):En.removeChild(a.stateNode));break;case 18:En!==null&&(yi?(n=En,a=a.stateNode,n.nodeType===8?nc(n.parentNode,a):n.nodeType===1&&nc(n,a),bo(n)):nc(En,a.stateNode));break;case 4:c=En,d=yi,En=a.stateNode.containerInfo,yi=!0,Ar(n,i,a),En=c,yi=d;break;case 0:case 11:case 14:case 15:if(!Pn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&kc(a,i,T),d=d.next}while(d!==c)}Ar(n,i,a);break;case 1:if(!Pn&&(Hs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(F){rn(a,i,F)}Ar(n,i,a);break;case 21:Ar(n,i,a);break;case 22:a.mode&1?(Pn=(c=Pn)||a.memoizedState!==null,Ar(n,i,a),Pn=c):Ar(n,i,a);break;default:Ar(n,i,a)}}function _m(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new c_),i.forEach(function(c){var d=y_.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Si(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,T=i,F=T;e:for(;F!==null;){switch(F.tag){case 5:En=F.stateNode,yi=!1;break e;case 3:En=F.stateNode.containerInfo,yi=!0;break e;case 4:En=F.stateNode.containerInfo,yi=!0;break e}F=F.return}if(En===null)throw Error(t(160));vm(m,T,d),En=null,yi=!1;var G=d.alternate;G!==null&&(G.return=null),d.return=null}catch(ue){rn(d,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)xm(i,n),i=i.sibling}function xm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Si(i,n),Ni(n),c&4){try{Jo(3,n,n.return),pl(3,n)}catch(Qe){rn(n,n.return,Qe)}try{Jo(5,n,n.return)}catch(Qe){rn(n,n.return,Qe)}}break;case 1:Si(i,n),Ni(n),c&512&&a!==null&&Hs(a,a.return);break;case 5:if(Si(i,n),Ni(n),c&512&&a!==null&&Hs(a,a.return),n.flags&32){var d=n.stateNode;try{ve(d,"")}catch(Qe){rn(n,n.return,Qe)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,T=a!==null?a.memoizedProps:m,F=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{F==="input"&&m.type==="radio"&&m.name!=null&&ct(d,m),Pe(F,T);var ue=Pe(F,m);for(T=0;T<G.length;T+=2){var ye=G[T],Se=G[T+1];ye==="style"?pe(d,Se):ye==="dangerouslySetInnerHTML"?de(d,Se):ye==="children"?ve(d,Se):b(d,ye,Se,ue)}switch(F){case"input":kt(d,m);break;case"textarea":Oe(d,m);break;case"select":var xe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var We=m.value;We!=null?_t(d,!!m.multiple,We,!1):xe!==!!m.multiple&&(m.defaultValue!=null?_t(d,!!m.multiple,m.defaultValue,!0):_t(d,!!m.multiple,m.multiple?[]:"",!1))}d[Vo]=m}catch(Qe){rn(n,n.return,Qe)}}break;case 6:if(Si(i,n),Ni(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Qe){rn(n,n.return,Qe)}}break;case 3:if(Si(i,n),Ni(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{bo(i.containerInfo)}catch(Qe){rn(n,n.return,Qe)}break;case 4:Si(i,n),Ni(n);break;case 13:Si(i,n),Ni(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Yc=Qt())),c&4&&_m(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(Pn=(ue=Pn)||ye,Si(i,n),Pn=ue):Si(i,n),Ni(n),c&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!ye&&(n.mode&1)!==0)for(je=n,ye=n.child;ye!==null;){for(Se=je=ye;je!==null;){switch(xe=je,We=xe.child,xe.tag){case 0:case 11:case 14:case 15:Jo(4,xe,xe.return);break;case 1:Hs(xe,xe.return);var Ze=xe.stateNode;if(typeof Ze.componentWillUnmount=="function"){c=xe,a=xe.return;try{i=c,Ze.props=i.memoizedProps,Ze.state=i.memoizedState,Ze.componentWillUnmount()}catch(Qe){rn(c,a,Qe)}}break;case 5:Hs(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Mm(Se);continue}}We!==null?(We.return=xe,je=We):Mm(Se)}ye=ye.sibling}e:for(ye=null,Se=n;;){if(Se.tag===5){if(ye===null){ye=Se;try{d=Se.stateNode,ue?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(F=Se.stateNode,G=Se.memoizedProps.style,T=G!=null&&G.hasOwnProperty("display")?G.display:null,F.style.display=ce("display",T))}catch(Qe){rn(n,n.return,Qe)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=ue?"":Se.memoizedProps}catch(Qe){rn(n,n.return,Qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Si(i,n),Ni(n),c&4&&_m(n);break;case 21:break;default:Si(i,n),Ni(n)}}function Ni(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(mm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(ve(d,""),c.flags&=-33);var m=gm(n);Gc(n,m,d);break;case 3:case 4:var T=c.stateNode.containerInfo,F=gm(n);Hc(n,F,T);break;default:throw Error(t(161))}}catch(G){rn(n,n.return,G)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function d_(n,i,a){je=n,ym(n)}function ym(n,i,a){for(var c=(n.mode&1)!==0;je!==null;){var d=je,m=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||hl;if(!T){var F=d.alternate,G=F!==null&&F.memoizedState!==null||Pn;F=hl;var ue=Pn;if(hl=T,(Pn=G)&&!ue)for(je=d;je!==null;)T=je,G=T.child,T.tag===22&&T.memoizedState!==null?Em(d):G!==null?(G.return=T,je=G):Em(d);for(;m!==null;)je=m,ym(m),m=m.sibling;je=d,hl=F,Pn=ue}Sm(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,je=m):Sm(n)}}function Sm(n){for(;je!==null;){var i=je;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Pn||pl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Pn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:xi(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Mp(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Mp(i,T,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var G=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&a.focus();break;case"img":G.src&&(a.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var ye=ue.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&bo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||i.flags&512&&Vc(i)}catch(xe){rn(i,i.return,xe)}}if(i===n){je=null;break}if(a=i.sibling,a!==null){a.return=i.return,je=a;break}je=i.return}}function Mm(n){for(;je!==null;){var i=je;if(i===n){je=null;break}var a=i.sibling;if(a!==null){a.return=i.return,je=a;break}je=i.return}}function Em(n){for(;je!==null;){var i=je;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{pl(4,i)}catch(G){rn(i,a,G)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(G){rn(i,d,G)}}var m=i.return;try{Vc(i)}catch(G){rn(i,m,G)}break;case 5:var T=i.return;try{Vc(i)}catch(G){rn(i,T,G)}}}catch(G){rn(i,i.return,G)}if(i===n){je=null;break}var F=i.sibling;if(F!==null){F.return=i.return,je=F;break}je=i.return}}var h_=Math.ceil,ml=P.ReactCurrentDispatcher,Wc=P.ReactCurrentOwner,ui=P.ReactCurrentBatchConfig,Lt=0,_n=null,un=null,wn=0,Qn=0,Gs=Sr(0),dn=0,Qo=null,ts=0,gl=0,Xc=0,ea=null,Xn=null,Yc=0,Ws=1/0,tr=null,vl=!1,qc=null,Cr=null,_l=!1,Rr=null,xl=0,ta=0,jc=null,yl=-1,Sl=0;function Fn(){return(Lt&6)!==0?Qt():yl!==-1?yl:yl=Qt()}function Pr(n){return(n.mode&1)===0?1:(Lt&2)!==0&&wn!==0?wn&-wn:Kv.transition!==null?(Sl===0&&(Sl=Ge()),Sl):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:Th(n.type)),n)}function Mi(n,i,a,c){if(50<ta)throw ta=0,jc=null,Error(t(185));St(n,a,c),((Lt&2)===0||n!==_n)&&(n===_n&&((Lt&2)===0&&(gl|=a),dn===4&&br(n,wn)),Yn(n,c),a===1&&Lt===0&&(i.mode&1)===0&&(Ws=Qt()+500,Za&&Er()))}function Yn(n,i){var a=n.callbackNode;Ot(n,i);var c=Wt(n,n===_n?wn:0);if(c===0)a!==null&&La(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&La(a),i===1)n.tag===0?Zv(Tm.bind(null,n)):cp(Tm.bind(null,n)),Xv(function(){(Lt&6)===0&&Er()}),a=null;else{switch(qi(c)){case 1:a=To;break;case 4:a=R;break;case 16:a=j;break;case 536870912:a=ne;break;default:a=j}a=Nm(a,wm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function wm(n,i){if(yl=-1,Sl=0,(Lt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Xs()&&n.callbackNode!==a)return null;var c=Wt(n,n===_n?wn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Ml(n,c);else{i=c;var d=Lt;Lt|=2;var m=Cm();(_n!==n||wn!==i)&&(tr=null,Ws=Qt()+500,is(n,i));do try{g_();break}catch(F){Am(n,F)}while(!0);dc(),ml.current=m,Lt=d,un!==null?i=0:(_n=null,wn=0,i=dn)}if(i!==0){if(i===2&&(d=ln(n),d!==0&&(c=d,i=Zc(n,d))),i===1)throw a=Qo,is(n,0),br(n,c),Yn(n,Qt()),a;if(i===6)br(n,c);else{if(d=n.current.alternate,(c&30)===0&&!p_(d)&&(i=Ml(n,c),i===2&&(m=ln(n),m!==0&&(c=m,i=Zc(n,m))),i===1))throw a=Qo,is(n,0),br(n,c),Yn(n,Qt()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:rs(n,Xn,tr);break;case 3:if(br(n,c),(c&130023424)===c&&(i=Yc+500-Qt(),10<i)){if(Wt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Fn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=tc(rs.bind(null,n,Xn,tr),i);break}rs(n,Xn,tr);break;case 4:if(br(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-be(c);m=1<<T,T=i[T],T>d&&(d=T),c&=~m}if(c=d,c=Qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*h_(c/1960))-c,10<c){n.timeoutHandle=tc(rs.bind(null,n,Xn,tr),c);break}rs(n,Xn,tr);break;case 5:rs(n,Xn,tr);break;default:throw Error(t(329))}}}return Yn(n,Qt()),n.callbackNode===a?wm.bind(null,n):null}function Zc(n,i){var a=ea;return n.current.memoizedState.isDehydrated&&(is(n,i).flags|=256),n=Ml(n,i),n!==2&&(i=Xn,Xn=a,i!==null&&Kc(i)),n}function Kc(n){Xn===null?Xn=n:Xn.push.apply(Xn,n)}function p_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!vi(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function br(n,i){for(i&=~Xc,i&=~gl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-be(i),c=1<<a;n[a]=-1,i&=~c}}function Tm(n){if((Lt&6)!==0)throw Error(t(327));Xs();var i=Wt(n,0);if((i&1)===0)return Yn(n,Qt()),null;var a=Ml(n,i);if(n.tag!==0&&a===2){var c=ln(n);c!==0&&(i=c,a=Zc(n,c))}if(a===1)throw a=Qo,is(n,0),br(n,i),Yn(n,Qt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,rs(n,Xn,tr),Yn(n,Qt()),null}function $c(n,i){var a=Lt;Lt|=1;try{return n(i)}finally{Lt=a,Lt===0&&(Ws=Qt()+500,Za&&Er())}}function ns(n){Rr!==null&&Rr.tag===0&&(Lt&6)===0&&Xs();var i=Lt;Lt|=1;var a=ui.transition,c=Mt;try{if(ui.transition=null,Mt=1,n)return n()}finally{Mt=c,ui.transition=a,Lt=i,(Lt&6)===0&&Er()}}function Jc(){Qn=Gs.current,Zt(Gs)}function is(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Wv(a)),un!==null)for(a=un.return;a!==null;){var c=a;switch(ac(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&qa();break;case 3:ks(),Zt(Hn),Zt(An),yc();break;case 5:_c(c);break;case 4:ks();break;case 13:Zt(en);break;case 19:Zt(en);break;case 10:hc(c.type._context);break;case 22:case 23:Jc()}a=a.return}if(_n=n,un=n=Lr(n.current,null),wn=Qn=i,dn=0,Qo=null,Xc=gl=ts=0,Xn=ea=null,Jr!==null){for(i=0;i<Jr.length;i++)if(a=Jr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var T=m.next;m.next=d,c.next=T}a.pending=c}Jr=null}return n}function Am(n,i){do{var a=un;try{if(dc(),sl.current=ul,ol){for(var c=tn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}ol=!1}if(es=0,vn=fn=tn=null,qo=!1,jo=0,Wc.current=null,a===null||a.return===null){dn=1,Qo=i,un=null;break}e:{var m=n,T=a.return,F=a,G=i;if(i=wn,F.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var ue=G,ye=F,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var xe=ye.alternate;xe?(ye.updateQueue=xe.updateQueue,ye.memoizedState=xe.memoizedState,ye.lanes=xe.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var We=$p(T);if(We!==null){We.flags&=-257,Jp(We,T,F,m,i),We.mode&1&&Kp(m,ue,i),i=We,G=ue;var Ze=i.updateQueue;if(Ze===null){var Qe=new Set;Qe.add(G),i.updateQueue=Qe}else Ze.add(G);break e}else{if((i&1)===0){Kp(m,ue,i),Qc();break e}G=Error(t(426))}}else if(Jt&&F.mode&1){var on=$p(T);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),Jp(on,T,F,m,i),cc(Vs(G,F));break e}}m=G=Vs(G,F),dn!==4&&(dn=2),ea===null?ea=[m]:ea.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ee=jp(m,G,i);Sp(m,ee);break e;case 1:F=G;var Y=m.type,ie=m.stateNode;if((m.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Cr===null||!Cr.has(ie)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ae=Zp(m,F,i);Sp(m,Ae);break e}}m=m.return}while(m!==null)}Pm(a)}catch(tt){i=tt,un===a&&a!==null&&(un=a=a.return);continue}break}while(!0)}function Cm(){var n=ml.current;return ml.current=ul,n===null?ul:n}function Qc(){(dn===0||dn===3||dn===2)&&(dn=4),_n===null||(ts&268435455)===0&&(gl&268435455)===0||br(_n,wn)}function Ml(n,i){var a=Lt;Lt|=2;var c=Cm();(_n!==n||wn!==i)&&(tr=null,is(n,i));do try{m_();break}catch(d){Am(n,d)}while(!0);if(dc(),Lt=a,ml.current=c,un!==null)throw Error(t(261));return _n=null,wn=0,dn}function m_(){for(;un!==null;)Rm(un)}function g_(){for(;un!==null&&!bu();)Rm(un)}function Rm(n){var i=Dm(n.alternate,n,Qn);n.memoizedProps=n.pendingProps,i===null?Pm(n):un=i,Wc.current=null}function Pm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=l_(a,i,Qn),a!==null){un=a;return}}else{if(a=u_(a,i),a!==null){a.flags&=32767,un=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dn=6,un=null;return}}if(i=i.sibling,i!==null){un=i;return}un=i=n}while(i!==null);dn===0&&(dn=5)}function rs(n,i,a){var c=Mt,d=ui.transition;try{ui.transition=null,Mt=1,v_(n,i,a,c)}finally{ui.transition=d,Mt=c}return null}function v_(n,i,a,c){do Xs();while(Rr!==null);if((Lt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(kn(n,m),n===_n&&(un=_n=null,wn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||_l||(_l=!0,Nm(j,function(){return Xs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=ui.transition,ui.transition=null;var T=Mt;Mt=1;var F=Lt;Lt|=4,Wc.current=null,f_(n,a),xm(a,n),Ov(Qu),Na=!!Ju,Qu=Ju=null,n.current=a,d_(a),Lu(),Lt=F,Mt=T,ui.transition=m}else n.current=a;if(_l&&(_l=!1,Rr=n,xl=d),m=n.pendingLanes,m===0&&(Cr=null),Xe(a.stateNode),Yn(n,Qt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(vl)throw vl=!1,n=qc,qc=null,n;return(xl&1)!==0&&n.tag!==0&&Xs(),m=n.pendingLanes,(m&1)!==0?n===jc?ta++:(ta=0,jc=n):ta=0,Er(),null}function Xs(){if(Rr!==null){var n=qi(xl),i=ui.transition,a=Mt;try{if(ui.transition=null,Mt=16>n?16:n,Rr===null)var c=!1;else{if(n=Rr,Rr=null,xl=0,(Lt&6)!==0)throw Error(t(331));var d=Lt;for(Lt|=4,je=n.current;je!==null;){var m=je,T=m.child;if((je.flags&16)!==0){var F=m.deletions;if(F!==null){for(var G=0;G<F.length;G++){var ue=F[G];for(je=ue;je!==null;){var ye=je;switch(ye.tag){case 0:case 11:case 15:Jo(8,ye,m)}var Se=ye.child;if(Se!==null)Se.return=ye,je=Se;else for(;je!==null;){ye=je;var xe=ye.sibling,We=ye.return;if(pm(ye),ye===ue){je=null;break}if(xe!==null){xe.return=We,je=xe;break}je=We}}}var Ze=m.alternate;if(Ze!==null){var Qe=Ze.child;if(Qe!==null){Ze.child=null;do{var on=Qe.sibling;Qe.sibling=null,Qe=on}while(Qe!==null)}}je=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,je=T;else e:for(;je!==null;){if(m=je,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Jo(9,m,m.return)}var ee=m.sibling;if(ee!==null){ee.return=m.return,je=ee;break e}je=m.return}}var Y=n.current;for(je=Y;je!==null;){T=je;var ie=T.child;if((T.subtreeFlags&2064)!==0&&ie!==null)ie.return=T,je=ie;else e:for(T=Y;je!==null;){if(F=je,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:pl(9,F)}}catch(tt){rn(F,F.return,tt)}if(F===T){je=null;break e}var Ae=F.sibling;if(Ae!==null){Ae.return=F.return,je=Ae;break e}je=F.return}}if(Lt=d,Er(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(te,n)}catch{}c=!0}return c}finally{Mt=a,ui.transition=i}}return!1}function bm(n,i,a){i=Vs(a,i),i=jp(n,i,1),n=Tr(n,i,1),i=Fn(),n!==null&&(St(n,1,i),Yn(n,i))}function rn(n,i,a){if(n.tag===3)bm(n,n,a);else for(;i!==null;){if(i.tag===3){bm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Cr===null||!Cr.has(c))){n=Vs(a,n),n=Zp(i,n,1),i=Tr(i,n,1),n=Fn(),i!==null&&(St(i,1,n),Yn(i,n));break}}i=i.return}}function __(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Fn(),n.pingedLanes|=n.suspendedLanes&a,_n===n&&(wn&a)===a&&(dn===4||dn===3&&(wn&130023424)===wn&&500>Qt()-Yc?is(n,0):Xc|=a),Yn(n,i)}function Lm(n,i){i===0&&((n.mode&1)===0?i=1:(i=et,et<<=1,(et&130023424)===0&&(et=4194304)));var a=Fn();n=Ji(n,i),n!==null&&(St(n,i,a),Yn(n,a))}function x_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Lm(n,a)}function y_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Lm(n,a)}var Dm;Dm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Hn.current)Wn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Wn=!1,a_(n,i,a);Wn=(n.flags&131072)!==0}else Wn=!1,Jt&&(i.flags&1048576)!==0&&fp(i,$a,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;dl(n,i),n=i.pendingProps;var d=Ns(i,An.current);zs(i,a),d=Ec(null,i,c,n,d,a);var m=wc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Gn(c)?(m=!0,ja(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,gc(i),d.updater=cl,i.stateNode=d,d._reactInternals=i,bc(i,c,n,a),i=Ic(null,i,c,!0,m,a)):(i.tag=0,Jt&&m&&oc(i),Un(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(dl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=M_(c),n=xi(c,n),d){case 0:i=Nc(null,i,c,n,a);break e;case 1:i=rm(null,i,c,n,a);break e;case 11:i=Qp(null,i,c,n,a);break e;case 14:i=em(null,i,c,xi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xi(c,d),Nc(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xi(c,d),rm(n,i,c,d,a);case 3:e:{if(sm(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,yp(n,i),il(i,c,null,a);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Vs(Error(t(423)),i),i=om(n,i,c,a,d);break e}else if(c!==d){d=Vs(Error(t(424)),i),i=om(n,i,c,a,d);break e}else for(Jn=yr(i.stateNode.containerInfo.firstChild),$n=i,Jt=!0,_i=null,a=_p(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Fs(),c===d){i=er(n,i,a);break e}Un(n,i,c,a)}i=i.child}return i;case 5:return Ep(i),n===null&&uc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,T=d.children,ec(c,d)?T=null:m!==null&&ec(c,m)&&(i.flags|=32),im(n,i),Un(n,i,T,a),i.child;case 6:return n===null&&uc(i),null;case 13:return am(n,i,a);case 4:return vc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Os(i,null,c,a):Un(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xi(c,d),Qp(n,i,c,d,a);case 7:return Un(n,i,i.pendingProps,a),i.child;case 8:return Un(n,i,i.pendingProps.children,a),i.child;case 12:return Un(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,Xt(el,c._currentValue),c._currentValue=T,m!==null)if(vi(m.value,T)){if(m.children===d.children&&!Hn.current){i=er(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var F=m.dependencies;if(F!==null){T=m.child;for(var G=F.firstContext;G!==null;){if(G.context===c){if(m.tag===1){G=Qi(-1,a&-a),G.tag=2;var ue=m.updateQueue;if(ue!==null){ue=ue.shared;var ye=ue.pending;ye===null?G.next=G:(G.next=ye.next,ye.next=G),ue.pending=G}}m.lanes|=a,G=m.alternate,G!==null&&(G.lanes|=a),pc(m.return,a,i),F.lanes|=a;break}G=G.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=a,F=T.alternate,F!==null&&(F.lanes|=a),pc(T,a,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}Un(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,zs(i,a),d=ai(d),c=c(d),i.flags|=1,Un(n,i,c,a),i.child;case 14:return c=i.type,d=xi(c,i.pendingProps),d=xi(c.type,d),em(n,i,c,d,a);case 15:return tm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xi(c,d),dl(n,i),i.tag=1,Gn(c)?(n=!0,ja(i)):n=!1,zs(i,a),Yp(i,c,d),bc(i,c,d,a),Ic(null,i,c,!0,n,a);case 19:return um(n,i,a);case 22:return nm(n,i,a)}throw Error(t(156,i.tag))};function Nm(n,i){return ba(n,i)}function S_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(n,i,a,c){return new S_(n,i,a,c)}function ef(n){return n=n.prototype,!(!n||!n.isReactComponent)}function M_(n){if(typeof n=="function")return ef(n)?1:0;if(n!=null){if(n=n.$$typeof,n===X)return 11;if(n===H)return 14}return 2}function Lr(n,i){var a=n.alternate;return a===null?(a=ci(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function El(n,i,a,c,d,m){var T=2;if(c=n,typeof n=="function")ef(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case I:return ss(a.children,d,m,i);case w:T=8,d|=8;break;case N:return n=ci(12,a,i,d|2),n.elementType=N,n.lanes=m,n;case K:return n=ci(13,a,i,d),n.elementType=K,n.lanes=m,n;case oe:return n=ci(19,a,i,d),n.elementType=oe,n.lanes=m,n;case q:return wl(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:T=10;break e;case U:T=9;break e;case X:T=11;break e;case H:T=14;break e;case $:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ci(T,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function ss(n,i,a,c){return n=ci(7,n,c,i),n.lanes=a,n}function wl(n,i,a,c){return n=ci(22,n,c,i),n.elementType=q,n.lanes=a,n.stateNode={isHidden:!1},n}function tf(n,i,a){return n=ci(6,n,null,i),n.lanes=a,n}function nf(n,i,a){return i=ci(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function E_(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mn(0),this.expirationTimes=Mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function rf(n,i,a,c,d,m,T,F,G){return n=new E_(n,i,a,F,G),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ci(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},gc(m),n}function w_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Im(n){if(!n)return Mr;n=n._reactInternals;e:{if(Ri(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Gn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gn(a))return lp(n,a,i)}return i}function Um(n,i,a,c,d,m,T,F,G){return n=rf(a,c,!0,n,d,m,T,F,G),n.context=Im(null),a=n.current,c=Fn(),d=Pr(a),m=Qi(c,d),m.callback=i??null,Tr(a,m,d),n.current.lanes=d,St(n,d,c),Yn(n,c),n}function Tl(n,i,a,c){var d=i.current,m=Fn(),T=Pr(d);return a=Im(a),i.context===null?i.context=a:i.pendingContext=a,i=Qi(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Tr(d,i,T),n!==null&&(Mi(n,d,T,m),nl(n,d,T)),T}function Al(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Fm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function sf(n,i){Fm(n,i),(n=n.alternate)&&Fm(n,i)}function T_(){return null}var Om=typeof reportError=="function"?reportError:function(n){console.error(n)};function of(n){this._internalRoot=n}Cl.prototype.render=of.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Tl(n,i,null,null)},Cl.prototype.unmount=of.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ns(function(){Tl(null,n,null,null)}),i[ji]=null}};function Cl(n){this._internalRoot=n}Cl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Bt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<vr.length&&i!==0&&i<vr[a].priority;a++);vr.splice(a,0,n),a===0&&Eh(n)}};function af(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Rl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Bm(){}function A_(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var ue=Al(T);m.call(ue)}}var T=Um(i,c,n,0,null,!1,!1,"",Bm);return n._reactRootContainer=T,n[ji]=T.current,zo(n.nodeType===8?n.parentNode:n),ns(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var F=c;c=function(){var ue=Al(G);F.call(ue)}}var G=rf(n,0,!1,null,null,!1,!1,"",Bm);return n._reactRootContainer=G,n[ji]=G.current,zo(n.nodeType===8?n.parentNode:n),ns(function(){Tl(i,G,a,c)}),G}function Pl(n,i,a,c,d){var m=a._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var F=d;d=function(){var G=Al(T);F.call(G)}}Tl(i,T,n,d)}else T=A_(a,i,n,d,c);return Al(T)}Ft=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Rt(i.pendingLanes);a!==0&&(Vn(i,a|1),Yn(i,Qt()),(Lt&6)===0&&(Ws=Qt()+500,Er()))}break;case 13:ns(function(){var c=Ji(n,1);if(c!==null){var d=Fn();Mi(c,n,1,d)}}),sf(n,1)}},qt=function(n){if(n.tag===13){var i=Ji(n,134217728);if(i!==null){var a=Fn();Mi(i,n,134217728,a)}sf(n,134217728)}},mi=function(n){if(n.tag===13){var i=Pr(n),a=Ji(n,i);if(a!==null){var c=Fn();Mi(a,n,i,c)}sf(n,i)}},Bt=function(){return Mt},gi=function(n,i){var a=Mt;try{return Mt=n,i()}finally{Mt=a}},ft=function(n,i,a){switch(i){case"input":if(kt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Ya(c);if(!d)throw Error(t(90));ot(c),kt(c,d)}}}break;case"textarea":Oe(n,a);break;case"select":i=a.value,i!=null&&_t(n,!!a.multiple,i,!1)}},Le=$c,_e=ns;var C_={usingClientEntryPoint:!1,Events:[Ho,Ls,Ya,fe,ke,$c]},na={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},R_={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Eo(n),n===null?null:n.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||T_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{te=bl.inject(R_),De=bl}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C_,qn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!af(i))throw Error(t(200));return w_(n,i,null,a)},qn.createRoot=function(n,i){if(!af(n))throw Error(t(299));var a=!1,c="",d=Om;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=rf(n,1,!1,null,null,a,!1,c,d),n[ji]=i.current,zo(n.nodeType===8?n.parentNode:n),new of(i)},qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Eo(i),n=n===null?null:n.stateNode,n},qn.flushSync=function(n){return ns(n)},qn.hydrate=function(n,i,a){if(!Rl(i))throw Error(t(200));return Pl(null,n,i,!0,a)},qn.hydrateRoot=function(n,i,a){if(!af(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",T=Om;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=Um(i,null,n,1,a??null,d,!1,m,T),n[ji]=i.current,zo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Cl(i)},qn.render=function(n,i,a){if(!Rl(i))throw Error(t(200));return Pl(null,n,i,!1,a)},qn.unmountComponentAtNode=function(n){if(!Rl(n))throw Error(t(40));return n._reactRootContainer?(ns(function(){Pl(null,null,n,!1,function(){n._reactRootContainer=null,n[ji]=null})}),!0):!1},qn.unstable_batchedUpdates=$c,qn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Rl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Pl(n,i,a,!1,c)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var Ym;function F_(){if(Ym)return cf.exports;Ym=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),cf.exports=U_(),cf.exports}var qm;function O_(){if(qm)return Ll;qm=1;var s=F_();return Ll.createRoot=s.createRoot,Ll.hydrateRoot=s.hydrateRoot,Ll}var B_=O_(),pu=Zd();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kd="184",z_=0,jm=1,k_=2,ga=1,V_=2,ha=3,Gr=0,zn=1,ni=2,ur=0,ho=1,Zm=2,Km=3,$m=4,H_=5,fs=100,G_=101,W_=102,X_=103,Y_=104,q_=200,j_=201,Z_=202,K_=203,Jf=204,Qf=205,$_=206,J_=207,Q_=208,ex=209,tx=210,nx=211,ix=212,rx=213,sx=214,ed=0,td=1,nd=2,mo=3,id=4,rd=5,sd=6,od=7,og=0,ox=1,ax=2,ki=0,ag=1,lg=2,ug=3,$d=4,cg=5,fg=6,dg=7,hg=300,ms=301,go=302,hf=303,pf=304,wu=306,mu=1e3,ar=1001,ad=1002,Tn=1003,lx=1004,Dl=1005,Dn=1006,mf=1007,hs=1008,ii=1009,pg=1010,mg=1011,ya=1012,Jd=1013,Gi=1014,Bi=1015,dr=1016,Qd=1017,eh=1018,Sa=1020,gg=35902,vg=35899,_g=1021,xg=1022,Ai=1023,hr=1026,ps=1027,yg=1028,th=1029,gs=1030,nh=1031,ih=1033,uu=33776,cu=33777,fu=33778,du=33779,ld=35840,ud=35841,cd=35842,fd=35843,dd=36196,hd=37492,pd=37496,md=37488,gd=37489,gu=37490,vd=37491,_d=37808,xd=37809,yd=37810,Sd=37811,Md=37812,Ed=37813,wd=37814,Td=37815,Ad=37816,Cd=37817,Rd=37818,Pd=37819,bd=37820,Ld=37821,Dd=36492,Nd=36494,Id=36495,Ud=36283,Fd=36284,vu=36285,Od=36286,ux=3200,Bd=0,cx=1,kr="",Sn="srgb",_u="srgb-linear",xu="linear",zt="srgb",Ys=7680,Jm=519,fx=512,dx=513,hx=514,rh=515,px=516,mx=517,sh=518,gx=519,zd=35044,Qm="300 es",zi=2e3,Ma=2001;function vx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function yu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _x(){const s=yu("canvas");return s.style.display="block",s}const e0={};function Su(...s){const e="THREE."+s.shift();console.log(e,...s)}function Sg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function lt(...s){s=Sg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function At(...s){s=Sg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function kd(...s){const e=s.join(" ");e in e0||(e0[e]=!0,lt(...s))}function xx(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const yx={[ed]:td,[nd]:sd,[id]:od,[mo]:rd,[td]:ed,[sd]:nd,[od]:id,[rd]:mo};class _s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gf=Math.PI/180,Vd=180/Math.PI;function cr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function Tt(s,e,t){return Math.max(e,Math.min(t,s))}function Sx(s,e){return(s%e+e)%e}function vf(s,e,t){return(1-t)*s+t*e}function Oi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const vh=class vh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vh.prototype.isVector2=!0;let Ye=vh;class xs{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],p=r[o+1],v=r[o+2],x=r[o+3],g=l[u+0],S=l[u+1],M=l[u+2],A=l[u+3];if(x!==A||h!==g||p!==S||v!==M){let _=h*g+p*S+v*M+x*A;_<0&&(g=-g,S=-S,M=-M,A=-A,_=-_);let y=1-f;if(_<.9995){const C=Math.acos(_),b=Math.sin(C);y=Math.sin(y*C)/b,f=Math.sin(f*C)/b,h=h*y+g*f,p=p*y+S*f,v=v*y+M*f,x=x*y+A*f}else{h=h*y+g*f,p=p*y+S*f,v=v*y+M*f,x=x*y+A*f;const C=1/Math.sqrt(h*h+p*p+v*v+x*x);h*=C,p*=C,v*=C,x*=C}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],p=r[o+2],v=r[o+3],x=l[u],g=l[u+1],S=l[u+2],M=l[u+3];return e[t]=f*M+v*x+h*S-p*g,e[t+1]=h*M+v*g+p*x-f*S,e[t+2]=p*M+v*S+f*g-h*x,e[t+3]=v*M-f*x-h*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),v=f(o/2),x=f(l/2),g=h(r/2),S=h(o/2),M=h(l/2);switch(u){case"XYZ":this._x=g*v*x+p*S*M,this._y=p*S*x-g*v*M,this._z=p*v*M+g*S*x,this._w=p*v*x-g*S*M;break;case"YXZ":this._x=g*v*x+p*S*M,this._y=p*S*x-g*v*M,this._z=p*v*M-g*S*x,this._w=p*v*x+g*S*M;break;case"ZXY":this._x=g*v*x-p*S*M,this._y=p*S*x+g*v*M,this._z=p*v*M+g*S*x,this._w=p*v*x-g*S*M;break;case"ZYX":this._x=g*v*x-p*S*M,this._y=p*S*x+g*v*M,this._z=p*v*M-g*S*x,this._w=p*v*x+g*S*M;break;case"YZX":this._x=g*v*x+p*S*M,this._y=p*S*x+g*v*M,this._z=p*v*M-g*S*x,this._w=p*v*x-g*S*M;break;case"XZY":this._x=g*v*x-p*S*M,this._y=p*S*x-g*v*M,this._z=p*v*M+g*S*x,this._w=p*v*x+g*S*M;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],v=t[6],x=t[10],g=r+f+x;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(v-h)*S,this._y=(l-p)*S,this._z=(u-o)*S}else if(r>f&&r>x){const S=2*Math.sqrt(1+r-f-x);this._w=(v-h)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+p)/S}else if(f>x){const S=2*Math.sqrt(1+f-r-x);this._w=(l-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(h+v)/S}else{const S=2*Math.sqrt(1+x-r-f);this._w=(u-o)/S,this._x=(l+p)/S,this._y=(h+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+u*f+o*p-l*h,this._y=o*v+u*h+l*f-r*p,this._z=l*v+u*p+r*h-o*f,this._w=u*v-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _h=class _h{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(t0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(t0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*r),v=2*(f*t-l*o),x=2*(l*r-u*t);return this.x=t+h*p+u*x-f*v,this.y=r+h*v+f*p-l*x,this.z=o+h*x+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _f.copy(this).projectOnVector(e),this.sub(_f)}reflect(e){return this.sub(_f.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_h.prototype.isVector3=!0;let V=_h;const _f=new V,t0=new xs,xh=class xh{constructor(e,t,r,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p)}set(e,t,r,o,l,u,f,h,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],v=r[4],x=r[7],g=r[2],S=r[5],M=r[8],A=o[0],_=o[3],y=o[6],C=o[1],b=o[4],P=o[7],B=o[2],D=o[5],I=o[8];return l[0]=u*A+f*C+h*B,l[3]=u*_+f*b+h*D,l[6]=u*y+f*P+h*I,l[1]=p*A+v*C+x*B,l[4]=p*_+v*b+x*D,l[7]=p*y+v*P+x*I,l[2]=g*A+S*C+M*B,l[5]=g*_+S*b+M*D,l[8]=g*y+S*P+M*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*f*p-r*l*v+r*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],x=v*u-f*p,g=f*h-v*l,S=p*l-u*h,M=t*x+r*g+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=x*A,e[1]=(o*p-v*r)*A,e[2]=(f*r-o*u)*A,e[3]=g*A,e[4]=(v*t-o*h)*A,e[5]=(o*l-f*t)*A,e[6]=S*A,e[7]=(r*h-p*t)*A,e[8]=(u*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(xf.makeScale(e,t)),this}rotate(e){return this.premultiply(xf.makeRotation(-e)),this}translate(e,t){return this.premultiply(xf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xh.prototype.isMatrix3=!0;let vt=xh;const xf=new vt,n0=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),i0=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mx(){const s={enabled:!0,workingColorSpace:_u,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===zt&&(o.r=fr(o.r),o.g=fr(o.g),o.b=fr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===zt&&(o.r=po(o.r),o.g=po(o.g),o.b=po(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===kr?xu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return kd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return kd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[_u]:{primaries:e,whitePoint:r,transfer:xu,toXYZ:n0,fromXYZ:i0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:r,transfer:zt,toXYZ:n0,fromXYZ:i0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),s}const Ct=Mx();function fr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function po(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let qs;class Ex{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{qs===void 0&&(qs=yu("canvas")),qs.width=e.width,qs.height=e.height;const o=qs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=qs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=fr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(fr(t[r]/255)*255):t[r]=fr(t[r]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wx=0;class oh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=cr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(yf(o[u].image)):l.push(yf(o[u]))}else l=yf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function yf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ex.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let Tx=0;const Sf=new V;class Nn extends _s{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,r=ar,o=ar,l=Dn,u=hs,f=Ai,h=ii,p=Nn.DEFAULT_ANISOTROPY,v=kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=cr(),this.name="",this.source=new oh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sf).x}get height(){return this.source.getSize(Sf).y}get depth(){return this.source.getSize(Sf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mu:e.x=e.x-Math.floor(e.x);break;case ar:e.x=e.x<0?0:1;break;case ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mu:e.y=e.y-Math.floor(e.y);break;case ar:e.y=e.y<0?0:1;break;case ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=hg;Nn.DEFAULT_ANISOTROPY=1;const yh=class yh{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],v=h[4],x=h[8],g=h[1],S=h[5],M=h[9],A=h[2],_=h[6],y=h[10];if(Math.abs(v-g)<.01&&Math.abs(x-A)<.01&&Math.abs(M-_)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+A)<.1&&Math.abs(M+_)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(p+1)/2,P=(S+1)/2,B=(y+1)/2,D=(v+g)/4,I=(x+A)/4,w=(M+_)/4;return b>P&&b>B?b<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(b),o=D/r,l=I/r):P>B?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=D/o,l=w/o):B<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(B),r=I/l,o=w/l),this.set(r,o,l,t),this}let C=Math.sqrt((_-M)*(_-M)+(x-A)*(x-A)+(g-v)*(g-v));return Math.abs(C)<.001&&(C=1),this.x=(_-M)/C,this.y=(x-A)/C,this.z=(g-v)/C,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yh.prototype.isVector4=!0;let sn=yh;class Ax extends _s{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Nn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new oh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends Ax{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Mg extends Nn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cx extends Nn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eu=class Eu{constructor(e,t,r,o,l,u,f,h,p,v,x,g,S,M,A,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p,v,x,g,S,M,A,_)}set(e,t,r,o,l,u,f,h,p,v,x,g,S,M,A,_){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=f,y[13]=h,y[2]=p,y[6]=v,y[10]=x,y[14]=g,y[3]=S,y[7]=M,y[11]=A,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Eu().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/js.setFromMatrixColumn(e,0).length(),l=1/js.setFromMatrixColumn(e,1).length(),u=1/js.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),v=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const g=u*v,S=u*x,M=f*v,A=f*x;t[0]=h*v,t[4]=-h*x,t[8]=p,t[1]=S+M*p,t[5]=g-A*p,t[9]=-f*h,t[2]=A-g*p,t[6]=M+S*p,t[10]=u*h}else if(e.order==="YXZ"){const g=h*v,S=h*x,M=p*v,A=p*x;t[0]=g+A*f,t[4]=M*f-S,t[8]=u*p,t[1]=u*x,t[5]=u*v,t[9]=-f,t[2]=S*f-M,t[6]=A+g*f,t[10]=u*h}else if(e.order==="ZXY"){const g=h*v,S=h*x,M=p*v,A=p*x;t[0]=g-A*f,t[4]=-u*x,t[8]=M+S*f,t[1]=S+M*f,t[5]=u*v,t[9]=A-g*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const g=u*v,S=u*x,M=f*v,A=f*x;t[0]=h*v,t[4]=M*p-S,t[8]=g*p+A,t[1]=h*x,t[5]=A*p+g,t[9]=S*p-M,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,S=u*p,M=f*h,A=f*p;t[0]=h*v,t[4]=A-g*x,t[8]=M*x+S,t[1]=x,t[5]=u*v,t[9]=-f*v,t[2]=-p*v,t[6]=S*x+M,t[10]=g-A*x}else if(e.order==="XZY"){const g=u*h,S=u*p,M=f*h,A=f*p;t[0]=h*v,t[4]=-x,t[8]=p*v,t[1]=g*x+A,t[5]=u*v,t[9]=S*x-M,t[2]=M*x-S,t[6]=f*v,t[10]=A*x+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rx,e,Px)}lookAt(e,t,r){const o=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Nr.crossVectors(r,ei),Nr.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Nr.crossVectors(r,ei)),Nr.normalize(),Nl.crossVectors(ei,Nr),o[0]=Nr.x,o[4]=Nl.x,o[8]=ei.x,o[1]=Nr.y,o[5]=Nl.y,o[9]=ei.y,o[2]=Nr.z,o[6]=Nl.z,o[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],v=r[1],x=r[5],g=r[9],S=r[13],M=r[2],A=r[6],_=r[10],y=r[14],C=r[3],b=r[7],P=r[11],B=r[15],D=o[0],I=o[4],w=o[8],N=o[12],k=o[1],U=o[5],X=o[9],K=o[13],oe=o[2],H=o[6],$=o[10],q=o[14],Z=o[3],re=o[7],se=o[11],O=o[15];return l[0]=u*D+f*k+h*oe+p*Z,l[4]=u*I+f*U+h*H+p*re,l[8]=u*w+f*X+h*$+p*se,l[12]=u*N+f*K+h*q+p*O,l[1]=v*D+x*k+g*oe+S*Z,l[5]=v*I+x*U+g*H+S*re,l[9]=v*w+x*X+g*$+S*se,l[13]=v*N+x*K+g*q+S*O,l[2]=M*D+A*k+_*oe+y*Z,l[6]=M*I+A*U+_*H+y*re,l[10]=M*w+A*X+_*$+y*se,l[14]=M*N+A*K+_*q+y*O,l[3]=C*D+b*k+P*oe+B*Z,l[7]=C*I+b*U+P*H+B*re,l[11]=C*w+b*X+P*$+B*se,l[15]=C*N+b*K+P*q+B*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],v=e[2],x=e[6],g=e[10],S=e[14],M=e[3],A=e[7],_=e[11],y=e[15],C=h*S-p*g,b=f*S-p*x,P=f*g-h*x,B=u*S-p*v,D=u*g-h*v,I=u*x-f*v;return t*(A*C-_*b+y*P)-r*(M*C-_*B+y*D)+o*(M*b-A*B+y*I)-l*(M*P-A*D+_*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],x=e[9],g=e[10],S=e[11],M=e[12],A=e[13],_=e[14],y=e[15],C=t*f-r*u,b=t*h-o*u,P=t*p-l*u,B=r*h-o*f,D=r*p-l*f,I=o*p-l*h,w=v*A-x*M,N=v*_-g*M,k=v*y-S*M,U=x*_-g*A,X=x*y-S*A,K=g*y-S*_,oe=C*K-b*X+P*U+B*k-D*N+I*w;if(oe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/oe;return e[0]=(f*K-h*X+p*U)*H,e[1]=(o*X-r*K-l*U)*H,e[2]=(A*I-_*D+y*B)*H,e[3]=(g*D-x*I-S*B)*H,e[4]=(h*k-u*K-p*N)*H,e[5]=(t*K-o*k+l*N)*H,e[6]=(_*P-M*I-y*b)*H,e[7]=(v*I-g*P+S*b)*H,e[8]=(u*X-f*k+p*w)*H,e[9]=(r*k-t*X-l*w)*H,e[10]=(M*D-A*P+y*C)*H,e[11]=(x*P-v*D-S*C)*H,e[12]=(f*N-u*U-h*w)*H,e[13]=(t*U-r*N+o*w)*H,e[14]=(A*b-M*B-_*C)*H,e[15]=(v*B-x*b+g*C)*H,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,v=l*f;return this.set(p*u+r,p*f-o*h,p*h+o*f,0,p*f+o*h,v*f+r,v*h-o*u,0,p*h-o*f,v*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,v=u+u,x=f+f,g=l*p,S=l*v,M=l*x,A=u*v,_=u*x,y=f*x,C=h*p,b=h*v,P=h*x,B=r.x,D=r.y,I=r.z;return o[0]=(1-(A+y))*B,o[1]=(S+P)*B,o[2]=(M-b)*B,o[3]=0,o[4]=(S-P)*D,o[5]=(1-(g+y))*D,o[6]=(_+C)*D,o[7]=0,o[8]=(M+b)*I,o[9]=(_-C)*I,o[10]=(1-(g+A))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=js.set(o[0],o[1],o[2]).length();const f=js.set(o[4],o[5],o[6]).length(),h=js.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Ei.copy(this);const p=1/u,v=1/f,x=1/h;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=v,Ei.elements[5]*=v,Ei.elements[6]*=v,Ei.elements[8]*=x,Ei.elements[9]*=x,Ei.elements[10]*=x,t.setFromRotationMatrix(Ei),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,u,f=zi,h=!1){const p=this.elements,v=2*l/(t-e),x=2*l/(r-o),g=(t+e)/(t-e),S=(r+o)/(r-o);let M,A;if(h)M=l/(u-l),A=u*l/(u-l);else if(f===zi)M=-(u+l)/(u-l),A=-2*u*l/(u-l);else if(f===Ma)M=-u/(u-l),A=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=zi,h=!1){const p=this.elements,v=2/(t-e),x=2/(r-o),g=-(t+e)/(t-e),S=-(r+o)/(r-o);let M,A;if(h)M=1/(u-l),A=u/(u-l);else if(f===zi)M=-2/(u-l),A=-(u+l)/(u-l);else if(f===Ma)M=-1/(u-l),A=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Eu.prototype.isMatrix4=!0;let Kt=Eu;const js=new V,Ei=new Kt,Rx=new V(0,0,0),Px=new V(1,1,1),Nr=new V,Nl=new V,ei=new V,r0=new Kt,s0=new xs;class Wr{constructor(e=0,t=0,r=0,o=Wr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],v=o[9],x=o[2],g=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Tt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return r0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(r0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return s0.setFromEuler(this),this.setFromQuaternion(s0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wr.DEFAULT_ORDER="XYZ";class ah{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bx=0;const o0=new V,Zs=new xs,nr=new Kt,Il=new V,ra=new V,Lx=new V,Dx=new xs,a0=new V(1,0,0),l0=new V(0,1,0),u0=new V(0,0,1),c0={type:"added"},Nx={type:"removed"},Ks={type:"childadded",child:null},Mf={type:"childremoved",child:null};class hn extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new V,t=new Wr,r=new xs,o=new V(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Kt},normalMatrix:{value:new vt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(a0,e)}rotateY(e){return this.rotateOnAxis(l0,e)}rotateZ(e){return this.rotateOnAxis(u0,e)}translateOnAxis(e,t){return o0.copy(e).applyQuaternion(this.quaternion),this.position.add(o0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(a0,e)}translateY(e){return this.translateOnAxis(l0,e)}translateZ(e){return this.translateOnAxis(u0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Il.copy(e):Il.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(ra,Il,this.up):nr.lookAt(Il,ra,this.up),this.quaternion.setFromRotationMatrix(nr),o&&(nr.extractRotation(o.matrixWorld),Zs.setFromRotationMatrix(nr),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(c0),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nx),Mf.child=e,this.dispatchEvent(Mf),Mf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(c0),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,Lx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,Dx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const x=h[p];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),x=u(e.shapes),g=u(e.skeletons),S=u(e.animations),M=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}hn.DEFAULT_UP=new V(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pi extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ix={type:"move"};class Ef{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const A of e.hand.values()){const _=t.getJointPose(A,r),y=this._getHandJoint(p,A);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=_.radius),y.visible=_!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=v.position.distanceTo(x.position),S=.02,M=.005;p.inputState.pinching&&g>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Ix)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new pi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function wf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class wt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ct.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Ct.workingColorSpace){if(e=Sx(e,1),t=Tt(t,0,1),r=Tt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=wf(u,l,e+1/3),this.g=wf(u,l,e),this.b=wf(u,l,e-1/3)}return Ct.colorSpaceToWorking(this,o),this}setStyle(e,t=Sn){function r(l){l!==void 0&&parseFloat(l)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){const r=Eg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return Ct.workingToColorSpace(Ln.copy(this),e),Math.round(Tt(Ln.r*255,0,255))*65536+Math.round(Tt(Ln.g*255,0,255))*256+Math.round(Tt(Ln.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(Ln.copy(this),t);const r=Ln.r,o=Ln.g,l=Ln.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const v=(f+u)/2;if(f===u)h=0,p=0;else{const x=u-f;switch(p=v<=.5?x/(u+f):x/(2-u-f),u){case r:h=(o-l)/x+(o<l?6:0);break;case o:h=(l-r)/x+2;break;case l:h=(r-o)/x+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Sn){Ct.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,r=Ln.g,o=Ln.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(Ul);const r=vf(Ir.h,Ul.h,t),o=vf(Ir.s,Ul.s,t),l=vf(Ir.l,Ul.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new wt;wt.NAMES=Eg;class Ux extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wr,this.environmentIntensity=1,this.environmentRotation=new Wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const wi=new V,ir=new V,Tf=new V,rr=new V,$s=new V,Js=new V,f0=new V,Af=new V,Cf=new V,Rf=new V,Pf=new sn,bf=new sn,Lf=new sn;class hi{constructor(e=new V,t=new V,r=new V){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),wi.subVectors(e,t),o.cross(wi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){wi.subVectors(o,t),ir.subVectors(r,t),Tf.subVectors(e,t);const u=wi.dot(wi),f=wi.dot(ir),h=wi.dot(Tf),p=ir.dot(ir),v=ir.dot(Tf),x=u*p-f*f;if(x===0)return l.set(0,0,0),null;const g=1/x,S=(p*h-f*v)*g,M=(u*v-f*h)*g;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,rr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,rr.x),h.addScaledVector(u,rr.y),h.addScaledVector(f,rr.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return Pf.setScalar(0),bf.setScalar(0),Lf.setScalar(0),Pf.fromBufferAttribute(e,t),bf.fromBufferAttribute(e,r),Lf.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Pf,l.x),u.addScaledVector(bf,l.y),u.addScaledVector(Lf,l.z),u}static isFrontFacing(e,t,r,o){return wi.subVectors(r,t),ir.subVectors(e,t),wi.cross(ir).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),wi.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return hi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;$s.subVectors(o,r),Js.subVectors(l,r),Af.subVectors(e,r);const h=$s.dot(Af),p=Js.dot(Af);if(h<=0&&p<=0)return t.copy(r);Cf.subVectors(e,o);const v=$s.dot(Cf),x=Js.dot(Cf);if(v>=0&&x<=v)return t.copy(o);const g=h*x-v*p;if(g<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(r).addScaledVector($s,u);Rf.subVectors(e,l);const S=$s.dot(Rf),M=Js.dot(Rf);if(M>=0&&S<=M)return t.copy(l);const A=S*p-h*M;if(A<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(r).addScaledVector(Js,f);const _=v*M-S*x;if(_<=0&&x-v>=0&&S-M>=0)return f0.subVectors(l,o),f=(x-v)/(x-v+(S-M)),t.copy(o).addScaledVector(f0,f);const y=1/(_+A+g);return u=A*y,f=g*y,t.copy(r).addScaledVector($s,u).addScaledVector(Js,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ca{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ti):Ti.fromBufferAttribute(l,u),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Fl.copy(r.boundingBox)),Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),Ol.subVectors(this.max,sa),Qs.subVectors(e.a,sa),eo.subVectors(e.b,sa),to.subVectors(e.c,sa),Ur.subVectors(eo,Qs),Fr.subVectors(to,eo),os.subVectors(Qs,to);let t=[0,-Ur.z,Ur.y,0,-Fr.z,Fr.y,0,-os.z,os.y,Ur.z,0,-Ur.x,Fr.z,0,-Fr.x,os.z,0,-os.x,-Ur.y,Ur.x,0,-Fr.y,Fr.x,0,-os.y,os.x,0];return!Df(t,Qs,eo,to,Ol)||(t=[1,0,0,0,1,0,0,0,1],!Df(t,Qs,eo,to,Ol))?!1:(Bl.crossVectors(Ur,Fr),t=[Bl.x,Bl.y,Bl.z],Df(t,Qs,eo,to,Ol))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sr=[new V,new V,new V,new V,new V,new V,new V,new V],Ti=new V,Fl=new Ca,Qs=new V,eo=new V,to=new V,Ur=new V,Fr=new V,os=new V,sa=new V,Ol=new V,Bl=new V,as=new V;function Df(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){as.fromArray(s,l);const f=o.x*Math.abs(as.x)+o.y*Math.abs(as.y)+o.z*Math.abs(as.z),h=e.dot(as),p=t.dot(as),v=r.dot(as);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const cn=new V,zl=new Ye;let Fx=0;class Zn extends _s{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=zd,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)zl.fromBufferAttribute(this,t),zl.applyMatrix3(e),this.setXY(t,zl.x,zl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Oi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Vt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array),o=Vt(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array),o=Vt(o,this.array),l=Vt(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zd&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class wg extends Zn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Tg extends Zn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Gt extends Zn{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Ox=new Ca,oa=new V,Nf=new V;class Tu{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Ox.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const t=oa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(oa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(Nf)),this.expandByPoint(oa.copy(e.center).sub(Nf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Bx=0;const fi=new Kt,If=new hn,no=new V,ti=new Ca,aa=new Ca,yn=new V;class gn extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vx(e)?Tg:wg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new vt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,r){return fi.makeTranslation(e,t,r),this.applyMatrix4(fi),this}scale(e,t,r){return fi.makeScale(e,t,r),this.applyMatrix4(fi),this}lookAt(e){return If.lookAt(e),If.updateMatrix(),this.applyMatrix4(If.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Gt(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ti.setFromBufferAttribute(l),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];aa.setFromBufferAttribute(f),this.morphTargetsRelative?(yn.addVectors(ti.min,aa.min),ti.expandByPoint(yn),yn.addVectors(ti.max,aa.max),ti.expandByPoint(yn)):(ti.expandByPoint(aa.min),ti.expandByPoint(aa.max))}ti.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)yn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(yn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)yn.fromBufferAttribute(f,p),h&&(no.fromBufferAttribute(e,p),yn.add(no)),o=Math.max(o,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let w=0;w<r.count;w++)f[w]=new V,h[w]=new V;const p=new V,v=new V,x=new V,g=new Ye,S=new Ye,M=new Ye,A=new V,_=new V;function y(w,N,k){p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,N),x.fromBufferAttribute(r,k),g.fromBufferAttribute(l,w),S.fromBufferAttribute(l,N),M.fromBufferAttribute(l,k),v.sub(p),x.sub(p),S.sub(g),M.sub(g);const U=1/(S.x*M.y-M.x*S.y);isFinite(U)&&(A.copy(v).multiplyScalar(M.y).addScaledVector(x,-S.y).multiplyScalar(U),_.copy(x).multiplyScalar(S.x).addScaledVector(v,-M.x).multiplyScalar(U),f[w].add(A),f[N].add(A),f[k].add(A),h[w].add(_),h[N].add(_),h[k].add(_))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let w=0,N=C.length;w<N;++w){const k=C[w],U=k.start,X=k.count;for(let K=U,oe=U+X;K<oe;K+=3)y(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const b=new V,P=new V,B=new V,D=new V;function I(w){B.fromBufferAttribute(o,w),D.copy(B);const N=f[w];b.copy(N),b.sub(B.multiplyScalar(B.dot(N))).normalize(),P.crossVectors(D,N);const U=P.dot(h[w])<0?-1:1;u.setXYZW(w,b.x,b.y,b.z,U)}for(let w=0,N=C.length;w<N;++w){const k=C[w],U=k.start,X=k.count;for(let K=U,oe=U+X;K<oe;K+=3)I(e.getX(K+0)),I(e.getX(K+1)),I(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new V,l=new V,u=new V,f=new V,h=new V,p=new V,v=new V,x=new V;if(e)for(let g=0,S=e.count;g<S;g+=3){const M=e.getX(g+0),A=e.getX(g+1),_=e.getX(g+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,A),u.fromBufferAttribute(t,_),v.subVectors(u,l),x.subVectors(o,l),v.cross(x),f.fromBufferAttribute(r,M),h.fromBufferAttribute(r,A),p.fromBufferAttribute(r,_),f.add(v),h.add(v),p.add(v),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(_,p.x,p.y,p.z)}else for(let g=0,S=t.count;g<S;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,l),x.subVectors(o,l),v.cross(x),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,x=f.normalized,g=new p.constructor(h.length*v);let S=0,M=0;for(let A=0,_=h.length;A<_;A++){f.isInterleavedBufferAttribute?S=h[A]*f.data.stride+f.offset:S=h[A]*v;for(let y=0;y<v;y++)g[M++]=p[S++]}return new Zn(g,v,x)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,x=p.length;v<x;v++){const g=p[v],S=e(g,r);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let x=0,g=p.length;x<g;x++){const S=p[x];v.push(S.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],x=l[p];for(let g=0,S=x.length;g<S;g++)v.push(x[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zd,this.updateRanges=[],this.version=0,this.uuid=cr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const On=new V;class Mu{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Oi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Vt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Oi(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array),o=Vt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array),o=Vt(o,this.array),l=Vt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){Su("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new Zn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Su("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let kx=0;class ys extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=ho,this.side=Gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jf,this.blendDst=Qf,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(r.blending=this.blending),this.side!==Gr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Jf&&(r.blendSrc=this.blendSrc),this.blendDst!==Qf&&(r.blendDst=this.blendDst),this.blendEquation!==fs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==mo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ag extends ys{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let io;const la=new V,ro=new V,so=new V,oo=new Ye,ua=new Ye,Cg=new Kt,kl=new V,ca=new V,Vl=new V,d0=new Ye,Uf=new Ye,h0=new Ye;class Vx extends hn{constructor(e=new Ag){if(super(),this.isSprite=!0,this.type="Sprite",io===void 0){io=new gn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new zx(t,5);io.setIndex([0,1,2,0,2,3]),io.setAttribute("position",new Mu(r,3,0,!1)),io.setAttribute("uv",new Mu(r,2,3,!1))}this.geometry=io,this.material=e,this.center=new Ye(.5,.5),this.count=1}raycast(e,t){e.camera===null&&At('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ro.setFromMatrixScale(this.matrixWorld),Cg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),so.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ro.multiplyScalar(-so.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const u=this.center;Hl(kl.set(-.5,-.5,0),so,u,ro,o,l),Hl(ca.set(.5,-.5,0),so,u,ro,o,l),Hl(Vl.set(.5,.5,0),so,u,ro,o,l),d0.set(0,0),Uf.set(1,0),h0.set(1,1);let f=e.ray.intersectTriangle(kl,ca,Vl,!1,la);if(f===null&&(Hl(ca.set(-.5,.5,0),so,u,ro,o,l),Uf.set(0,1),f=e.ray.intersectTriangle(kl,Vl,ca,!1,la),f===null))return;const h=e.ray.origin.distanceTo(la);h<e.near||h>e.far||t.push({distance:h,point:la.clone(),uv:hi.getInterpolation(la,kl,ca,Vl,d0,Uf,h0,new Ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Hl(s,e,t,r,o,l){oo.subVectors(s,t).addScalar(.5).multiply(r),o!==void 0?(ua.x=l*oo.x-o*oo.y,ua.y=o*oo.x+l*oo.y):ua.copy(oo),s.copy(e),s.x+=ua.x,s.y+=ua.y,s.applyMatrix4(Cg)}const or=new V,Ff=new V,Gl=new V,Or=new V,Of=new V,Wl=new V,Bf=new V;class lh{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,t),or.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Ff.copy(e).add(t).multiplyScalar(.5),Gl.copy(t).sub(e).normalize(),Or.copy(this.origin).sub(Ff);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Gl),f=Or.dot(this.direction),h=-Or.dot(Gl),p=Or.lengthSq(),v=Math.abs(1-u*u);let x,g,S,M;if(v>0)if(x=u*h-f,g=u*f-h,M=l*v,x>=0)if(g>=-M)if(g<=M){const A=1/v;x*=A,g*=A,S=x*(x+u*g+2*f)+g*(u*x+g+2*h)+p}else g=l,x=Math.max(0,-(u*g+f)),S=-x*x+g*(g+2*h)+p;else g=-l,x=Math.max(0,-(u*g+f)),S=-x*x+g*(g+2*h)+p;else g<=-M?(x=Math.max(0,-(-u*l+f)),g=x>0?-l:Math.min(Math.max(-l,-h),l),S=-x*x+g*(g+2*h)+p):g<=M?(x=0,g=Math.min(Math.max(-l,-h),l),S=g*(g+2*h)+p):(x=Math.max(0,-(u*l+f)),g=x>0?l:Math.min(Math.max(-l,-h),l),S=-x*x+g*(g+2*h)+p);else g=u>0?-l:l,x=Math.max(0,-(u*g+f)),S=-x*x+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Ff).addScaledVector(Gl,g),S}intersectSphere(e,t){or.subVectors(e.center,this.origin);const r=or.dot(this.direction),o=or.dot(or)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),x>=0?(f=(e.min.z-g.z)*x,h=(e.max.z-g.z)*x):(f=(e.max.z-g.z)*x,h=(e.min.z-g.z)*x),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,t,r,o,l){Of.subVectors(t,e),Wl.subVectors(r,e),Bf.crossVectors(Of,Wl);let u=this.direction.dot(Bf),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Or.subVectors(this.origin,e);const h=f*this.direction.dot(Wl.crossVectors(Or,Wl));if(h<0)return null;const p=f*this.direction.dot(Of.cross(Or));if(p<0||h+p>u)return null;const v=-f*Or.dot(Bf);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hr extends ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wr,this.combine=og,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const p0=new Kt,ls=new lh,Xl=new Tu,m0=new V,Yl=new V,ql=new V,jl=new V,zf=new V,Zl=new V,g0=new V,Kl=new V;class ge extends hn{constructor(e=new gn,t=new Hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Zl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],x=l[h];v!==0&&(zf.fromBufferAttribute(x,e),u?Zl.addScaledVector(zf,v):Zl.addScaledVector(zf.sub(t),v))}t.add(Zl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Xl.copy(r.boundingSphere),Xl.applyMatrix4(l),ls.copy(e.ray).recast(e.near),!(Xl.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Xl,m0)===null||ls.origin.distanceToSquared(m0)>(e.far-e.near)**2))&&(p0.copy(l).invert(),ls.copy(e.ray).applyMatrix4(p0),!(r.boundingBox!==null&&ls.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,x=l.attributes.normal,g=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,A=g.length;M<A;M++){const _=g[M],y=u[_.materialIndex],C=Math.max(_.start,S.start),b=Math.min(f.count,Math.min(_.start+_.count,S.start+S.count));for(let P=C,B=b;P<B;P+=3){const D=f.getX(P),I=f.getX(P+1),w=f.getX(P+2);o=$l(this,y,e,r,p,v,x,D,I,w),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),A=Math.min(f.count,S.start+S.count);for(let _=M,y=A;_<y;_+=3){const C=f.getX(_),b=f.getX(_+1),P=f.getX(_+2);o=$l(this,u,e,r,p,v,x,C,b,P),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let M=0,A=g.length;M<A;M++){const _=g[M],y=u[_.materialIndex],C=Math.max(_.start,S.start),b=Math.min(h.count,Math.min(_.start+_.count,S.start+S.count));for(let P=C,B=b;P<B;P+=3){const D=P,I=P+1,w=P+2;o=$l(this,y,e,r,p,v,x,D,I,w),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let _=M,y=A;_<y;_+=3){const C=_,b=_+1,P=_+2;o=$l(this,u,e,r,p,v,x,C,b,P),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Hx(s,e,t,r,o,l,u,f){let h;if(e.side===zn?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===Gr,f),h===null)return null;Kl.copy(f),Kl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Kl);return p<t.near||p>t.far?null:{distance:p,point:Kl.clone(),object:s}}function $l(s,e,t,r,o,l,u,f,h,p){s.getVertexPosition(f,Yl),s.getVertexPosition(h,ql),s.getVertexPosition(p,jl);const v=Hx(s,e,t,r,Yl,ql,jl,g0);if(v){const x=new V;hi.getBarycoord(g0,Yl,ql,jl,x),o&&(v.uv=hi.getInterpolatedAttribute(o,f,h,p,x,new Ye)),l&&(v.uv1=hi.getInterpolatedAttribute(l,f,h,p,x,new Ye)),u&&(v.normal=hi.getInterpolatedAttribute(u,f,h,p,x,new V),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new V,materialIndex:0};hi.getNormal(Yl,ql,jl,g.normal),v.face=g,v.barycoord=x}return v}class Gx extends Nn{constructor(e=null,t=1,r=1,o,l,u,f,h,p=Tn,v=Tn,x,g){super(null,u,f,h,p,v,o,l,x,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kf=new V,Wx=new V,Xx=new vt;class cs{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=kf.subVectors(r,t).cross(Wx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(kf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Xx.getNormalMatrix(e),o=this.coplanarPoint(kf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new Tu,Yx=new Ye(.5,.5),Jl=new V;class uh{constructor(e=new cs,t=new cs,r=new cs,o=new cs,l=new cs,u=new cs){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=zi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],v=l[4],x=l[5],g=l[6],S=l[7],M=l[8],A=l[9],_=l[10],y=l[11],C=l[12],b=l[13],P=l[14],B=l[15];if(o[0].setComponents(p-u,S-v,y-M,B-C).normalize(),o[1].setComponents(p+u,S+v,y+M,B+C).normalize(),o[2].setComponents(p+f,S+x,y+A,B+b).normalize(),o[3].setComponents(p-f,S-x,y-A,B-b).normalize(),r)o[4].setComponents(h,g,_,P).normalize(),o[5].setComponents(p-h,S-g,y-_,B-P).normalize();else if(o[4].setComponents(p-h,S-g,y-_,B-P).normalize(),t===zi)o[5].setComponents(p+h,S+g,y+_,B+P).normalize();else if(t===Ma)o[5].setComponents(h,g,_,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);const t=Yx.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Jl.x=o.normal.x>0?e.max.x:e.min.x,Jl.y=o.normal.y>0?e.max.y:e.min.y,Jl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rg extends ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const v0=new Kt,Hd=new lh,Ql=new Tu,eu=new V;class qx extends hn{constructor(e=new gn,t=new Rg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ql.copy(r.boundingSphere),Ql.applyMatrix4(o),Ql.radius+=l,e.ray.intersectsSphere(Ql)===!1)return;v0.copy(o).invert(),Hd.copy(e.ray).applyMatrix4(v0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=r.index,x=r.attributes.position;if(p!==null){const g=Math.max(0,u.start),S=Math.min(p.count,u.start+u.count);for(let M=g,A=S;M<A;M++){const _=p.getX(M);eu.fromBufferAttribute(x,_),_0(eu,_,h,o,e,t,this)}}else{const g=Math.max(0,u.start),S=Math.min(x.count,u.start+u.count);for(let M=g,A=S;M<A;M++)eu.fromBufferAttribute(x,M),_0(eu,M,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function _0(s,e,t,r,o,l,u){const f=Hd.distanceSqToPoint(s);if(f<t){const h=new V;Hd.closestPointToPoint(s,h),h.applyMatrix4(r);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Pg extends Nn{constructor(e=[],t=ms,r,o,l,u,f,h,p,v){super(e,t,r,o,l,u,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ra extends Nn{constructor(e,t,r,o,l,u,f,h,p){super(e,t,r,o,l,u,f,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vo extends Nn{constructor(e,t,r=Gi,o,l,u,f=Tn,h=Tn,p,v=hr,x=1){if(v!==hr&&v!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:x};super(g,o,l,u,f,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new oh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jx extends vo{constructor(e,t=Gi,r=ms,o,l,u=Tn,f=Tn,h,p=hr){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,t,r,o,l,u,f,h,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bg extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ke extends gn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],x=[];let g=0,S=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Gt(p,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(x,2));function M(A,_,y,C,b,P,B,D,I,w,N){const k=P/I,U=B/w,X=P/2,K=B/2,oe=D/2,H=I+1,$=w+1;let q=0,Z=0;const re=new V;for(let se=0;se<$;se++){const O=se*U-K;for(let J=0;J<H;J++){const Re=J*k-X;re[A]=Re*C,re[_]=O*b,re[y]=oe,p.push(re.x,re.y,re.z),re[A]=0,re[_]=0,re[y]=D>0?1:-1,v.push(re.x,re.y,re.z),x.push(J/I),x.push(1-se/w),q+=1}}for(let se=0;se<w;se++)for(let O=0;O<I;O++){const J=g+O+H*se,Re=g+O+H*(se+1),Ve=g+(O+1)+H*(se+1),Fe=g+(O+1)+H*se;h.push(J,Re,Fe),h.push(Re,Ve,Fe),Z+=6}f.addGroup(S,Z,N),S+=Z,g+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ke(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ch extends gn{constructor(e=1,t=1,r=4,o=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:r,radialSegments:o,heightSegments:l},t=Math.max(0,t),r=Math.max(1,Math.floor(r)),o=Math.max(3,Math.floor(o)),l=Math.max(1,Math.floor(l));const u=[],f=[],h=[],p=[],v=t/2,x=Math.PI/2*e,g=t,S=2*x+g,M=r*2+l,A=o+1,_=new V,y=new V;for(let C=0;C<=M;C++){let b=0,P=0,B=0,D=0;if(C<=r){const N=C/r,k=N*Math.PI/2;P=-v-e*Math.cos(k),B=e*Math.sin(k),D=-e*Math.cos(k),b=N*x}else if(C<=r+l){const N=(C-r)/l;P=-v+N*t,B=e,D=0,b=x+N*g}else{const N=(C-r-l)/r,k=N*Math.PI/2;P=v+e*Math.sin(k),B=e*Math.cos(k),D=e*Math.sin(k),b=x+g+N*x}const I=Math.max(0,Math.min(1,b/S));let w=0;C===0?w=.5/o:C===M&&(w=-.5/o);for(let N=0;N<=o;N++){const k=N/o,U=k*Math.PI*2,X=Math.sin(U),K=Math.cos(U);y.x=-B*K,y.y=P,y.z=B*X,f.push(y.x,y.y,y.z),_.set(-B*K,D,B*X),_.normalize(),h.push(_.x,_.y,_.z),p.push(k+w,I)}if(C>0){const N=(C-1)*A;for(let k=0;k<o;k++){const U=N+k,X=N+k+1,K=C*A+k,oe=C*A+k+1;u.push(U,X,K),u.push(X,oe,K)}}}this.setIndex(u),this.setAttribute("position",new Gt(f,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ch(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class an extends gn{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const p=this;o=Math.floor(o),l=Math.floor(l);const v=[],x=[],g=[],S=[];let M=0;const A=[],_=r/2;let y=0;C(),u===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(v),this.setAttribute("position",new Gt(x,3)),this.setAttribute("normal",new Gt(g,3)),this.setAttribute("uv",new Gt(S,2));function C(){const P=new V,B=new V;let D=0;const I=(t-e)/r;for(let w=0;w<=l;w++){const N=[],k=w/l,U=k*(t-e)+e;for(let X=0;X<=o;X++){const K=X/o,oe=K*h+f,H=Math.sin(oe),$=Math.cos(oe);B.x=U*H,B.y=-k*r+_,B.z=U*$,x.push(B.x,B.y,B.z),P.set(H,I,$).normalize(),g.push(P.x,P.y,P.z),S.push(K,1-k),N.push(M++)}A.push(N)}for(let w=0;w<o;w++)for(let N=0;N<l;N++){const k=A[N][w],U=A[N+1][w],X=A[N+1][w+1],K=A[N][w+1];(e>0||N!==0)&&(v.push(k,U,K),D+=3),(t>0||N!==l-1)&&(v.push(U,X,K),D+=3)}p.addGroup(y,D,0),y+=D}function b(P){const B=M,D=new Ye,I=new V;let w=0;const N=P===!0?e:t,k=P===!0?1:-1;for(let X=1;X<=o;X++)x.push(0,_*k,0),g.push(0,k,0),S.push(.5,.5),M++;const U=M;for(let X=0;X<=o;X++){const oe=X/o*h+f,H=Math.cos(oe),$=Math.sin(oe);I.x=N*$,I.y=_*k,I.z=N*H,x.push(I.x,I.y,I.z),g.push(0,k,0),D.x=H*.5+.5,D.y=$*.5*k+.5,S.push(D.x,D.y),M++}for(let X=0;X<o;X++){const K=B+X,oe=U+X;P===!0?v.push(oe,oe+1,K):v.push(oe+1,oe,K),w+=3}p.addGroup(y,w,P===!0?1:2),y+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fh extends an{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,r,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new fh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){lt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let f=0,h=l-1,p;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),p=r[o]-u,p<0)f=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,r[o]===u)return o/(l-1);const v=r[o],g=r[o+1]-v,S=(u-v)/g;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),f=this.getPoint(l),h=t||(u.isVector2?new Ye:new V);return h.copy(f).sub(u).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new V,o=[],l=[],u=[],f=new V,h=new Kt;for(let S=0;S<=e;S++){const M=S/e;o[S]=this.getTangentAt(M,new V)}l[0]=new V,u[0]=new V;let p=Number.MAX_VALUE;const v=Math.abs(o[0].x),x=Math.abs(o[0].y),g=Math.abs(o[0].z);v<=p&&(p=v,r.set(1,0,0)),x<=p&&(p=x,r.set(0,1,0)),g<=p&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),u[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),u[S]=u[S-1].clone(),f.crossVectors(o[S-1],o[S]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(Tt(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(f,M))}u[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(Tt(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(S=-S);for(let M=1;M<=e;M++)l[M].applyMatrix4(h.makeRotationAxis(o[M],S*M)),u[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class dh extends Wi{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Ye){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),x=Math.sin(this.aRotation),g=h-this.aX,S=p-this.aY;h=g*v-S*x+this.aX,p=g*x+S*v+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Zx extends dh{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function hh(){let s=0,e=0,t=0,r=0;function o(l,u,f,h){s=l,e=f,t=-3*l+3*u-2*f-h,r=2*l-2*u+f+h}return{initCatmullRom:function(l,u,f,h,p){o(u,f,p*(f-l),p*(h-u))},initNonuniformCatmullRom:function(l,u,f,h,p,v,x){let g=(u-l)/p-(f-l)/(p+v)+(f-u)/v,S=(f-u)/v-(h-u)/(v+x)+(h-f)/x;g*=v,S*=v,o(u,f,g,S)},calc:function(l){const u=l*l,f=u*l;return s+e*l+t*u+r*f}}}const x0=new V,y0=new V,Vf=new hh,Hf=new hh,Gf=new hh;class ph extends Wi{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new V){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let f=Math.floor(u),h=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let p,v;this.closed||f>0?p=o[(f-1)%l]:(y0.subVectors(o[0],o[1]).add(o[0]),p=y0);const x=o[f%l],g=o[(f+1)%l];if(this.closed||f+2<l?v=o[(f+2)%l]:(x0.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=x0),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(x),S),A=Math.pow(x.distanceToSquared(g),S),_=Math.pow(g.distanceToSquared(v),S);A<1e-4&&(A=1),M<1e-4&&(M=A),_<1e-4&&(_=A),Vf.initNonuniformCatmullRom(p.x,x.x,g.x,v.x,M,A,_),Hf.initNonuniformCatmullRom(p.y,x.y,g.y,v.y,M,A,_),Gf.initNonuniformCatmullRom(p.z,x.z,g.z,v.z,M,A,_)}else this.curveType==="catmullrom"&&(Vf.initCatmullRom(p.x,x.x,g.x,v.x,this.tension),Hf.initCatmullRom(p.y,x.y,g.y,v.y,this.tension),Gf.initCatmullRom(p.z,x.z,g.z,v.z,this.tension));return r.set(Vf.calc(h),Hf.calc(h),Gf.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new V().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function S0(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+u)*h+(-3*t+3*r-2*l-u)*f+l*s+t}function Kx(s,e){const t=1-s;return t*t*e}function $x(s,e){return 2*(1-s)*s*e}function Jx(s,e){return s*s*e}function va(s,e,t,r){return Kx(s,e)+$x(s,t)+Jx(s,r)}function Qx(s,e){const t=1-s;return t*t*t*e}function ey(s,e){const t=1-s;return 3*t*t*s*e}function ty(s,e){return 3*(1-s)*s*s*e}function ny(s,e){return s*s*s*e}function _a(s,e,t,r,o){return Qx(s,e)+ey(s,t)+ty(s,r)+ny(s,o)}class Lg extends Wi{constructor(e=new Ye,t=new Ye,r=new Ye,o=new Ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Ye){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(_a(e,o.x,l.x,u.x,f.x),_a(e,o.y,l.y,u.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class iy extends Wi{constructor(e=new V,t=new V,r=new V,o=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new V){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(_a(e,o.x,l.x,u.x,f.x),_a(e,o.y,l.y,u.y,f.y),_a(e,o.z,l.z,u.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dg extends Wi{constructor(e=new Ye,t=new Ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ye){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ry extends Wi{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ng extends Wi{constructor(e=new Ye,t=new Ye,r=new Ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ye){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(va(e,o.x,l.x,u.x),va(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ig extends Wi{constructor(e=new V,t=new V,r=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new V){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(va(e,o.x,l.x,u.x),va(e,o.y,l.y,u.y),va(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ug extends Wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ye){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),f=l-u,h=o[u===0?u:u-1],p=o[u],v=o[u>o.length-2?o.length-1:u+1],x=o[u>o.length-3?o.length-1:u+2];return r.set(S0(f,h.x,p.x,v.x,x.x),S0(f,h.y,p.y,v.y,x.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Ye().fromArray(o))}return this}}var Gd=Object.freeze({__proto__:null,ArcCurve:Zx,CatmullRomCurve3:ph,CubicBezierCurve:Lg,CubicBezierCurve3:iy,EllipseCurve:dh,LineCurve:Dg,LineCurve3:ry,QuadraticBezierCurve:Ng,QuadraticBezierCurve3:Ig,SplineCurve:Ug});class sy extends Wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gd[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const u=o[l]-r,f=this.curves[l],h=f.getLength(),p=h===0?0:1-u/h;return f.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const u=l[o],f=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,h=u.getPoints(f);for(let p=0;p<h.length;p++){const v=h[p];r&&r.equals(v)||(t.push(v),r=v)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new Gd[o.type]().fromJSON(o))}return this}}class M0 extends sy{constructor(e){super(),this.type="Path",this.currentPoint=new Ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new Dg(this.currentPoint.clone(),new Ye(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new Ng(this.currentPoint.clone(),new Ye(e,t),new Ye(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,u){const f=new Lg(this.currentPoint.clone(),new Ye(e,t),new Ye(r,o),new Ye(l,u));return this.curves.push(f),this.currentPoint.set(l,u),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new Ug(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,u){const f=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+f,t+h,r,o,l,u),this}absarc(e,t,r,o,l,u){return this.absellipse(e,t,r,r,o,l,u),this}ellipse(e,t,r,o,l,u,f,h){const p=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(e+p,t+v,r,o,l,u,f,h),this}absellipse(e,t,r,o,l,u,f,h){const p=new dh(e,t,r,o,l,u,f,h);if(this.curves.length>0){const x=p.getPoint(0);x.equals(this.currentPoint)||this.lineTo(x.x,x.y)}this.curves.push(p);const v=p.getPoint(1);return this.currentPoint.copy(v),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Fg extends M0{constructor(e){super(e),this.uuid=cr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new M0().fromJSON(o))}return this}}function oy(s,e,t=2){const r=e&&e.length,o=r?e[0]*t:s.length;let l=Og(s,0,o,t,!0);const u=[];if(!l||l.next===l.prev)return u;let f,h,p;if(r&&(l=fy(s,e,l,t)),s.length>80*t){f=s[0],h=s[1];let v=f,x=h;for(let g=t;g<o;g+=t){const S=s[g],M=s[g+1];S<f&&(f=S),M<h&&(h=M),S>v&&(v=S),M>x&&(x=M)}p=Math.max(v-f,x-h),p=p!==0?32767/p:0}return Ea(l,u,t,f,h,p,0),u}function Og(s,e,t,r,o){let l;if(o===My(s,e,t,r)>0)for(let u=e;u<t;u+=r)l=E0(u/r|0,s[u],s[u+1],l);else for(let u=t-r;u>=e;u-=r)l=E0(u/r|0,s[u],s[u+1],l);return l&&_o(l,l.next)&&(Ta(l),l=l.next),l}function vs(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(_o(t,t.next)||nn(t.prev,t,t.next)===0)){if(Ta(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function Ea(s,e,t,r,o,l,u){if(!s)return;!u&&l&&gy(s,r,o,l);let f=s;for(;s.prev!==s.next;){const h=s.prev,p=s.next;if(l?ly(s,r,o,l):ay(s)){e.push(h.i,s.i,p.i),Ta(s),s=p.next,f=p.next;continue}if(s=p,s===f){u?u===1?(s=uy(vs(s),e),Ea(s,e,t,r,o,l,2)):u===2&&cy(s,e,t,r,o,l):Ea(vs(s),e,t,r,o,l,1);break}}}function ay(s){const e=s.prev,t=s,r=s.next;if(nn(e,t,r)>=0)return!1;const o=e.x,l=t.x,u=r.x,f=e.y,h=t.y,p=r.y,v=Math.min(o,l,u),x=Math.min(f,h,p),g=Math.max(o,l,u),S=Math.max(f,h,p);let M=r.next;for(;M!==e;){if(M.x>=v&&M.x<=g&&M.y>=x&&M.y<=S&&pa(o,f,l,h,u,p,M.x,M.y)&&nn(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function ly(s,e,t,r){const o=s.prev,l=s,u=s.next;if(nn(o,l,u)>=0)return!1;const f=o.x,h=l.x,p=u.x,v=o.y,x=l.y,g=u.y,S=Math.min(f,h,p),M=Math.min(v,x,g),A=Math.max(f,h,p),_=Math.max(v,x,g),y=Wd(S,M,e,t,r),C=Wd(A,_,e,t,r);let b=s.prevZ,P=s.nextZ;for(;b&&b.z>=y&&P&&P.z<=C;){if(b.x>=S&&b.x<=A&&b.y>=M&&b.y<=_&&b!==o&&b!==u&&pa(f,v,h,x,p,g,b.x,b.y)&&nn(b.prev,b,b.next)>=0||(b=b.prevZ,P.x>=S&&P.x<=A&&P.y>=M&&P.y<=_&&P!==o&&P!==u&&pa(f,v,h,x,p,g,P.x,P.y)&&nn(P.prev,P,P.next)>=0))return!1;P=P.nextZ}for(;b&&b.z>=y;){if(b.x>=S&&b.x<=A&&b.y>=M&&b.y<=_&&b!==o&&b!==u&&pa(f,v,h,x,p,g,b.x,b.y)&&nn(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;P&&P.z<=C;){if(P.x>=S&&P.x<=A&&P.y>=M&&P.y<=_&&P!==o&&P!==u&&pa(f,v,h,x,p,g,P.x,P.y)&&nn(P.prev,P,P.next)>=0)return!1;P=P.nextZ}return!0}function uy(s,e){let t=s;do{const r=t.prev,o=t.next.next;!_o(r,o)&&zg(r,t,t.next,o)&&wa(r,o)&&wa(o,r)&&(e.push(r.i,t.i,o.i),Ta(t),Ta(t.next),t=s=o),t=t.next}while(t!==s);return vs(t)}function cy(s,e,t,r,o,l){let u=s;do{let f=u.next.next;for(;f!==u.prev;){if(u.i!==f.i&&xy(u,f)){let h=kg(u,f);u=vs(u,u.next),h=vs(h,h.next),Ea(u,e,t,r,o,l,0),Ea(h,e,t,r,o,l,0);return}f=f.next}u=u.next}while(u!==s)}function fy(s,e,t,r){const o=[];for(let l=0,u=e.length;l<u;l++){const f=e[l]*r,h=l<u-1?e[l+1]*r:s.length,p=Og(s,f,h,r,!1);p===p.next&&(p.steiner=!0),o.push(_y(p))}o.sort(dy);for(let l=0;l<o.length;l++)t=hy(o[l],t);return t}function dy(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const r=(s.next.y-s.y)/(s.next.x-s.x),o=(e.next.y-e.y)/(e.next.x-e.x);t=r-o}return t}function hy(s,e){const t=py(s,e);if(!t)return e;const r=kg(t,s);return vs(r,r.next),vs(t,t.next)}function py(s,e){let t=e;const r=s.x,o=s.y;let l=-1/0,u;if(_o(s,t))return t;do{if(_o(s,t.next))return t.next;if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const x=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(x<=r&&x>l&&(l=x,u=t.x<t.next.x?t:t.next,x===r))return u}t=t.next}while(t!==e);if(!u)return null;const f=u,h=u.x,p=u.y;let v=1/0;t=u;do{if(r>=t.x&&t.x>=h&&r!==t.x&&Bg(o<p?r:l,o,h,p,o<p?l:r,o,t.x,t.y)){const x=Math.abs(o-t.y)/(r-t.x);wa(t,s)&&(x<v||x===v&&(t.x>u.x||t.x===u.x&&my(u,t)))&&(u=t,v=x)}t=t.next}while(t!==f);return u}function my(s,e){return nn(s.prev,s,e.prev)<0&&nn(e.next,s,s.next)<0}function gy(s,e,t,r){let o=s;do o.z===0&&(o.z=Wd(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,vy(o)}function vy(s){let e,t=1;do{let r=s,o;s=null;let l=null;for(e=0;r;){e++;let u=r,f=0;for(let p=0;p<t&&(f++,u=u.nextZ,!!u);p++);let h=t;for(;f>0||h>0&&u;)f!==0&&(h===0||!u||r.z<=u.z)?(o=r,r=r.nextZ,f--):(o=u,u=u.nextZ,h--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;r=u}l.nextZ=null,t*=2}while(e>1);return s}function Wd(s,e,t,r,o){return s=(s-t)*o|0,e=(e-r)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function _y(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Bg(s,e,t,r,o,l,u,f){return(o-u)*(e-f)>=(s-u)*(l-f)&&(s-u)*(r-f)>=(t-u)*(e-f)&&(t-u)*(l-f)>=(o-u)*(r-f)}function pa(s,e,t,r,o,l,u,f){return!(s===u&&e===f)&&Bg(s,e,t,r,o,l,u,f)}function xy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!yy(s,e)&&(wa(s,e)&&wa(e,s)&&Sy(s,e)&&(nn(s.prev,s,e.prev)||nn(s,e.prev,e))||_o(s,e)&&nn(s.prev,s,s.next)>0&&nn(e.prev,e,e.next)>0)}function nn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function _o(s,e){return s.x===e.x&&s.y===e.y}function zg(s,e,t,r){const o=nu(nn(s,e,t)),l=nu(nn(s,e,r)),u=nu(nn(t,r,s)),f=nu(nn(t,r,e));return!!(o!==l&&u!==f||o===0&&tu(s,t,e)||l===0&&tu(s,r,e)||u===0&&tu(t,s,r)||f===0&&tu(t,e,r))}function tu(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function nu(s){return s>0?1:s<0?-1:0}function yy(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&zg(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function wa(s,e){return nn(s.prev,s,s.next)<0?nn(s,e,s.next)>=0&&nn(s,s.prev,e)>=0:nn(s,e,s.prev)<0||nn(s,s.next,e)<0}function Sy(s,e){let t=s,r=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function kg(s,e){const t=Xd(s.i,s.x,s.y),r=Xd(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function E0(s,e,t,r){const o=Xd(s,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function Ta(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Xd(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function My(s,e,t,r){let o=0;for(let l=e,u=t-r;l<t;l+=r)o+=(s[u]-s[l])*(s[l+1]+s[u+1]),u=l;return o}class Ey{static triangulate(e,t,r=2){return oy(e,t,r)}}class xa{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return xa.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];w0(e),T0(r,e);let u=e.length;t.forEach(w0);for(let h=0;h<t.length;h++)o.push(u),u+=t[h].length,T0(r,t[h]);const f=Ey.triangulate(r,o);for(let h=0;h<f.length;h+=3)l.push(f.slice(h,h+3));return l}}function w0(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function T0(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Hi extends gn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,v=h+1,x=e/f,g=t/h,S=[],M=[],A=[],_=[];for(let y=0;y<v;y++){const C=y*g-u;for(let b=0;b<p;b++){const P=b*x-l;M.push(P,-C,0),A.push(0,0,1),_.push(b/f),_.push(1-y/h)}}for(let y=0;y<h;y++)for(let C=0;C<f;C++){const b=C+p*y,P=C+p*(y+1),B=C+1+p*(y+1),D=C+1+p*y;S.push(b,P,D),S.push(P,B,D)}this.setIndex(S),this.setAttribute("position",new Gt(M,3)),this.setAttribute("normal",new Gt(A,3)),this.setAttribute("uv",new Gt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.widthSegments,e.heightSegments)}}class mh extends gn{constructor(e=new Fg([new Ye(0,.5),new Ye(-.5,-.5),new Ye(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const r=[],o=[],l=[],u=[];let f=0,h=0;if(Array.isArray(e)===!1)p(e);else for(let v=0;v<e.length;v++)p(e[v]),this.addGroup(f,h,v),f+=h,h=0;this.setIndex(r),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(u,2));function p(v){const x=o.length/3,g=v.extractPoints(t);let S=g.shape;const M=g.holes;xa.isClockWise(S)===!1&&(S=S.reverse());for(let _=0,y=M.length;_<y;_++){const C=M[_];xa.isClockWise(C)===!0&&(M[_]=C.reverse())}const A=xa.triangulateShape(S,M);for(let _=0,y=M.length;_<y;_++){const C=M[_];S=S.concat(C)}for(let _=0,y=S.length;_<y;_++){const C=S[_];o.push(C.x,C.y,0),l.push(0,0,1),u.push(C.x,C.y)}for(let _=0,y=A.length;_<y;_++){const C=A[_],b=C[0]+x,P=C[1]+x,B=C[2]+x;r.push(b,P,B),h+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return wy(t,e)}static fromJSON(e,t){const r=[];for(let o=0,l=e.shapes.length;o<l;o++){const u=t[e.shapes[o]];r.push(u)}return new mh(r,e.curveSegments)}}function wy(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,r=s.length;t<r;t++){const o=s[t];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e}class lr extends gn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const v=[],x=new V,g=new V,S=[],M=[],A=[],_=[];for(let y=0;y<=r;y++){const C=[],b=y/r;let P=0;y===0&&u===0?P=.5/t:y===r&&h===Math.PI&&(P=-.5/t);for(let B=0;B<=t;B++){const D=B/t;x.x=-e*Math.cos(o+D*l)*Math.sin(u+b*f),x.y=e*Math.cos(u+b*f),x.z=e*Math.sin(o+D*l)*Math.sin(u+b*f),M.push(x.x,x.y,x.z),g.copy(x).normalize(),A.push(g.x,g.y,g.z),_.push(D+P,1-b),C.push(p++)}v.push(C)}for(let y=0;y<r;y++)for(let C=0;C<t;C++){const b=v[y][C+1],P=v[y][C],B=v[y+1][C],D=v[y+1][C+1];(y!==0||u>0)&&S.push(b,P,D),(y!==r-1||h<Math.PI)&&S.push(P,B,D)}this.setIndex(S),this.setAttribute("position",new Gt(M,3)),this.setAttribute("normal",new Gt(A,3)),this.setAttribute("uv",new Gt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Aa extends gn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},r=Math.floor(r),o=Math.floor(o);const h=[],p=[],v=[],x=[],g=new V,S=new V,M=new V;for(let A=0;A<=r;A++){const _=u+A/r*f;for(let y=0;y<=o;y++){const C=y/o*l;S.x=(e+t*Math.cos(_))*Math.cos(C),S.y=(e+t*Math.cos(_))*Math.sin(C),S.z=t*Math.sin(_),p.push(S.x,S.y,S.z),g.x=e*Math.cos(C),g.y=e*Math.sin(C),M.subVectors(S,g).normalize(),v.push(M.x,M.y,M.z),x.push(y/o),x.push(A/r)}}for(let A=1;A<=r;A++)for(let _=1;_<=o;_++){const y=(o+1)*A+_-1,C=(o+1)*(A-1)+_-1,b=(o+1)*(A-1)+_,P=(o+1)*A+_;h.push(y,C,P),h.push(C,b,P)}this.setIndex(h),this.setAttribute("position",new Gt(p,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class gh extends gn{constructor(e=new Ig(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const f=new V,h=new V,p=new Ye;let v=new V;const x=[],g=[],S=[],M=[];A(),this.setIndex(M),this.setAttribute("position",new Gt(x,3)),this.setAttribute("normal",new Gt(g,3)),this.setAttribute("uv",new Gt(S,2));function A(){for(let b=0;b<t;b++)_(b);_(l===!1?t:0),C(),y()}function _(b){v=e.getPointAt(b/t,v);const P=u.normals[b],B=u.binormals[b];for(let D=0;D<=o;D++){const I=D/o*Math.PI*2,w=Math.sin(I),N=-Math.cos(I);h.x=N*P.x+w*B.x,h.y=N*P.y+w*B.y,h.z=N*P.z+w*B.z,h.normalize(),g.push(h.x,h.y,h.z),f.x=v.x+r*h.x,f.y=v.y+r*h.y,f.z=v.z+r*h.z,x.push(f.x,f.y,f.z)}}function y(){for(let b=1;b<=t;b++)for(let P=1;P<=o;P++){const B=(o+1)*(b-1)+(P-1),D=(o+1)*b+(P-1),I=(o+1)*b+P,w=(o+1)*(b-1)+P;M.push(B,D,w),M.push(D,I,w)}}function C(){for(let b=0;b<=t;b++)for(let P=0;P<=o;P++)p.x=b/t,p.y=P/o,S.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new gh(new Gd[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function xo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(A0(o))o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(A0(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Bn(s){const e={};for(let t=0;t<s.length;t++){const r=xo(s[t]);for(const o in r)e[o]=r[o]}return e}function A0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ty(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Vg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const Ay={clone:xo,merge:Bn};var Cy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ry=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cy,this.fragmentShader=Ry,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=Ty(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Py extends Ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ne extends ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bd,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class by extends ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ux,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ly extends ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Au extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Dy extends Au{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Wf=new Kt,C0=new V,R0=new V;class Hg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uh,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;C0.setFromMatrixPosition(e.matrixWorld),t.position.copy(C0),R0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(R0),t.updateMatrixWorld(),Wf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ma||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Wf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const iu=new V,ru=new xs,Ii=new V;class Gg extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(iu,ru,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(iu,ru,Ii.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(iu,ru,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(iu,ru,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Br=new V,P0=new Ye,b0=new Ye;class di extends Gg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vd*2*Math.atan(Math.tan(gf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,t){return this.getViewBounds(e,P0,b0),t.subVectors(b0,P0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gf*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ny extends Hg{constructor(){super(new di(90,1,.5,500)),this.isPointLightShadow=!0}}class L0 extends Au{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new Ny}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Cu extends Gg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Iy extends Hg{constructor(){super(new Cu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uy extends Au{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new Iy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Fy extends Au{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ao=-90,lo=1;class Oy extends hn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new di(ao,lo,e,t);o.layers=this.layers,this.add(o);const l=new di(ao,lo,e,t);l.layers=this.layers,this.add(l);const u=new di(ao,lo,e,t);u.layers=this.layers,this.add(u);const f=new di(ao,lo,e,t);f.layers=this.layers,this.add(f);const h=new di(ao,lo,e,t);h.layers=this.layers,this.add(h);const p=new di(ao,lo,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ma)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,v]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(x,g,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class By extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const D0=new Kt;class zy{constructor(e,t,r=0,o=1/0){this.ray=new lh(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new ah,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):At("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return D0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(D0),this}intersectObject(e,t=!0,r=[]){return Yd(e,this,r,t),r.sort(N0),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Yd(e[o],this,r,t);return r.sort(N0),r}}function N0(s,e){return s.distance-e.distance}function Yd(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,f=l.length;u<f;u++)Yd(l[u],e,t,!0)}}const Sh=class Sh{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Sh.prototype.isMatrix2=!0;let I0=Sh;function U0(s,e,t,r){const o=ky(r);switch(t){case _g:return s*e;case yg:return s*e/o.components*o.byteLength;case th:return s*e/o.components*o.byteLength;case gs:return s*e*2/o.components*o.byteLength;case nh:return s*e*2/o.components*o.byteLength;case xg:return s*e*3/o.components*o.byteLength;case Ai:return s*e*4/o.components*o.byteLength;case ih:return s*e*4/o.components*o.byteLength;case uu:case cu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case fu:case du:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ud:case fd:return Math.max(s,16)*Math.max(e,8)/4;case ld:case cd:return Math.max(s,8)*Math.max(e,8)/2;case dd:case hd:case md:case gd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pd:case gu:case vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case yd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Md:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case wd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Td:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Pd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case bd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ld:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Dd:case Nd:case Id:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ud:case Fd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case vu:case Od:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ky(s){switch(s){case ii:case pg:return{byteLength:1,components:1};case ya:case mg:case dr:return{byteLength:2,components:1};case Qd:case eh:return{byteLength:2,components:4};case Gi:case Jd:case Bi:return{byteLength:4,components:1};case gg:case vg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kd}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wg(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Vy(s){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,x=p.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,p,v),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,h,p){const v=h.array,x=h.updateRanges;if(s.bindBuffer(p,f),x.length===0)s.bufferSubData(p,0,v);else{x.sort((S,M)=>S.start-M.start);let g=0;for(let S=1;S<x.length;S++){const M=x[g],A=x[S];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++g,x[g]=A)}x.length=g+1;for(let S=0,M=x.length;S<M;S++){const A=x[S];s.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var Hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ky=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$y=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_S="gl_FragColor = linearToOutputTexel( gl_FragColor );",xS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,SS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,MS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ES=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,IS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,US=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,XS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$S=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_M=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,TM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,RM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,KM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$M=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,a1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,u1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:Hy,alphahash_pars_fragment:Gy,alphamap_fragment:Wy,alphamap_pars_fragment:Xy,alphatest_fragment:Yy,alphatest_pars_fragment:qy,aomap_fragment:jy,aomap_pars_fragment:Zy,batching_pars_vertex:Ky,batching_vertex:$y,begin_vertex:Jy,beginnormal_vertex:Qy,bsdfs:eS,iridescence_fragment:tS,bumpmap_pars_fragment:nS,clipping_planes_fragment:iS,clipping_planes_pars_fragment:rS,clipping_planes_pars_vertex:sS,clipping_planes_vertex:oS,color_fragment:aS,color_pars_fragment:lS,color_pars_vertex:uS,color_vertex:cS,common:fS,cube_uv_reflection_fragment:dS,defaultnormal_vertex:hS,displacementmap_pars_vertex:pS,displacementmap_vertex:mS,emissivemap_fragment:gS,emissivemap_pars_fragment:vS,colorspace_fragment:_S,colorspace_pars_fragment:xS,envmap_fragment:yS,envmap_common_pars_fragment:SS,envmap_pars_fragment:MS,envmap_pars_vertex:ES,envmap_physical_pars_fragment:IS,envmap_vertex:wS,fog_vertex:TS,fog_pars_vertex:AS,fog_fragment:CS,fog_pars_fragment:RS,gradientmap_pars_fragment:PS,lightmap_pars_fragment:bS,lights_lambert_fragment:LS,lights_lambert_pars_fragment:DS,lights_pars_begin:NS,lights_toon_fragment:US,lights_toon_pars_fragment:FS,lights_phong_fragment:OS,lights_phong_pars_fragment:BS,lights_physical_fragment:zS,lights_physical_pars_fragment:kS,lights_fragment_begin:VS,lights_fragment_maps:HS,lights_fragment_end:GS,lightprobes_pars_fragment:WS,logdepthbuf_fragment:XS,logdepthbuf_pars_fragment:YS,logdepthbuf_pars_vertex:qS,logdepthbuf_vertex:jS,map_fragment:ZS,map_pars_fragment:KS,map_particle_fragment:$S,map_particle_pars_fragment:JS,metalnessmap_fragment:QS,metalnessmap_pars_fragment:eM,morphinstance_vertex:tM,morphcolor_vertex:nM,morphnormal_vertex:iM,morphtarget_pars_vertex:rM,morphtarget_vertex:sM,normal_fragment_begin:oM,normal_fragment_maps:aM,normal_pars_fragment:lM,normal_pars_vertex:uM,normal_vertex:cM,normalmap_pars_fragment:fM,clearcoat_normal_fragment_begin:dM,clearcoat_normal_fragment_maps:hM,clearcoat_pars_fragment:pM,iridescence_pars_fragment:mM,opaque_fragment:gM,packing:vM,premultiplied_alpha_fragment:_M,project_vertex:xM,dithering_fragment:yM,dithering_pars_fragment:SM,roughnessmap_fragment:MM,roughnessmap_pars_fragment:EM,shadowmap_pars_fragment:wM,shadowmap_pars_vertex:TM,shadowmap_vertex:AM,shadowmask_pars_fragment:CM,skinbase_vertex:RM,skinning_pars_vertex:PM,skinning_vertex:bM,skinnormal_vertex:LM,specularmap_fragment:DM,specularmap_pars_fragment:NM,tonemapping_fragment:IM,tonemapping_pars_fragment:UM,transmission_fragment:FM,transmission_pars_fragment:OM,uv_pars_fragment:BM,uv_pars_vertex:zM,uv_vertex:kM,worldpos_vertex:VM,background_vert:HM,background_frag:GM,backgroundCube_vert:WM,backgroundCube_frag:XM,cube_vert:YM,cube_frag:qM,depth_vert:jM,depth_frag:ZM,distance_vert:KM,distance_frag:$M,equirect_vert:JM,equirect_frag:QM,linedashed_vert:e1,linedashed_frag:t1,meshbasic_vert:n1,meshbasic_frag:i1,meshlambert_vert:r1,meshlambert_frag:s1,meshmatcap_vert:o1,meshmatcap_frag:a1,meshnormal_vert:l1,meshnormal_frag:u1,meshphong_vert:c1,meshphong_frag:f1,meshphysical_vert:d1,meshphysical_frag:h1,meshtoon_vert:p1,meshtoon_frag:m1,points_vert:g1,points_frag:v1,shadow_vert:_1,shadow_frag:x1,sprite_vert:y1,sprite_frag:S1},Be={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Fi={basic:{uniforms:Bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Bn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Bn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new wt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Bn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Bn([Be.points,Be.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Bn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Bn([Be.common,Be.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Bn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Bn([Be.sprite,Be.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:Bn([Be.common,Be.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:Bn([Be.lights,Be.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Fi.physical={uniforms:Bn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const su={r:0,b:0,g:0},M1=new Kt,Xg=new vt;Xg.set(-1,0,0,0,1,0,0,0,1);function E1(s,e,t,r,o,l){const u=new wt(0);let f=o===!0?0:1,h,p,v=null,x=0,g=null;function S(C){let b=C.isScene===!0?C.background:null;if(b&&b.isTexture){const P=C.backgroundBlurriness>0;b=e.get(b,P)}return b}function M(C){let b=!1;const P=S(C);P===null?_(u,f):P&&P.isColor&&(_(P,1),b=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?t.buffers.color.setClear(0,0,0,1,l):B==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function A(C,b){const P=S(b);P&&(P.isCubeTexture||P.mapping===wu)?(p===void 0&&(p=new ge(new Ke(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:xo(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=P,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(M1.makeRotationFromEuler(b.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Xg),p.material.toneMapped=Ct.getTransfer(P.colorSpace)!==zt,(v!==P||x!==P.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=P,x=P.version,g=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new ge(new Hi(2,2),new Ci({name:"BackgroundMaterial",uniforms:xo(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(P.colorSpace)!==zt,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||x!==P.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=P,x=P.version,g=s.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function _(C,b){C.getRGB(su,Vg(s)),t.buffers.color.setClear(su.r,su.g,su.b,b,l)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(C,b=1){u.set(C),f=b,_(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,_(u,f)},render:M,addToRenderList:A,dispose:y}}function w1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function f(U,X,K,oe,H){let $=!1;const q=x(U,oe,K,X);l!==q&&(l=q,p(l.object)),$=S(U,oe,K,H),$&&M(U,oe,K,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,P(U,X,K,oe),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function h(){return s.createVertexArray()}function p(U){return s.bindVertexArray(U)}function v(U){return s.deleteVertexArray(U)}function x(U,X,K,oe){const H=oe.wireframe===!0;let $=r[X.id];$===void 0&&($={},r[X.id]=$);const q=U.isInstancedMesh===!0?U.id:0;let Z=$[q];Z===void 0&&(Z={},$[q]=Z);let re=Z[K.id];re===void 0&&(re={},Z[K.id]=re);let se=re[H];return se===void 0&&(se=g(h()),re[H]=se),se}function g(U){const X=[],K=[],oe=[];for(let H=0;H<t;H++)X[H]=0,K[H]=0,oe[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:K,attributeDivisors:oe,object:U,attributes:{},index:null}}function S(U,X,K,oe){const H=l.attributes,$=X.attributes;let q=0;const Z=K.getAttributes();for(const re in Z)if(Z[re].location>=0){const O=H[re];let J=$[re];if(J===void 0&&(re==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),re==="instanceColor"&&U.instanceColor&&(J=U.instanceColor)),O===void 0||O.attribute!==J||J&&O.data!==J.data)return!0;q++}return l.attributesNum!==q||l.index!==oe}function M(U,X,K,oe){const H={},$=X.attributes;let q=0;const Z=K.getAttributes();for(const re in Z)if(Z[re].location>=0){let O=$[re];O===void 0&&(re==="instanceMatrix"&&U.instanceMatrix&&(O=U.instanceMatrix),re==="instanceColor"&&U.instanceColor&&(O=U.instanceColor));const J={};J.attribute=O,O&&O.data&&(J.data=O.data),H[re]=J,q++}l.attributes=H,l.attributesNum=q,l.index=oe}function A(){const U=l.newAttributes;for(let X=0,K=U.length;X<K;X++)U[X]=0}function _(U){y(U,0)}function y(U,X){const K=l.newAttributes,oe=l.enabledAttributes,H=l.attributeDivisors;K[U]=1,oe[U]===0&&(s.enableVertexAttribArray(U),oe[U]=1),H[U]!==X&&(s.vertexAttribDivisor(U,X),H[U]=X)}function C(){const U=l.newAttributes,X=l.enabledAttributes;for(let K=0,oe=X.length;K<oe;K++)X[K]!==U[K]&&(s.disableVertexAttribArray(K),X[K]=0)}function b(U,X,K,oe,H,$,q){q===!0?s.vertexAttribIPointer(U,X,K,H,$):s.vertexAttribPointer(U,X,K,oe,H,$)}function P(U,X,K,oe){A();const H=oe.attributes,$=K.getAttributes(),q=X.defaultAttributeValues;for(const Z in $){const re=$[Z];if(re.location>=0){let se=H[Z];if(se===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(se=U.instanceColor)),se!==void 0){const O=se.normalized,J=se.itemSize,Re=e.get(se);if(Re===void 0)continue;const Ve=Re.buffer,Fe=Re.type,ae=Re.bytesPerElement,me=Fe===s.INT||Fe===s.UNSIGNED_INT||se.gpuType===Jd;if(se.isInterleavedBufferAttribute){const he=se.data,Ie=he.stride,Me=se.offset;if(he.isInstancedInterleavedBuffer){for(let we=0;we<re.locationSize;we++)y(re.location+we,he.meshPerAttribute);U.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let we=0;we<re.locationSize;we++)_(re.location+we);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let we=0;we<re.locationSize;we++)b(re.location+we,J/re.locationSize,Fe,O,Ie*ae,(Me+J/re.locationSize*we)*ae,me)}else{if(se.isInstancedBufferAttribute){for(let he=0;he<re.locationSize;he++)y(re.location+he,se.meshPerAttribute);U.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let he=0;he<re.locationSize;he++)_(re.location+he);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let he=0;he<re.locationSize;he++)b(re.location+he,J/re.locationSize,Fe,O,J*ae,J/re.locationSize*he*ae,me)}}else if(q!==void 0){const O=q[Z];if(O!==void 0)switch(O.length){case 2:s.vertexAttrib2fv(re.location,O);break;case 3:s.vertexAttrib3fv(re.location,O);break;case 4:s.vertexAttrib4fv(re.location,O);break;default:s.vertexAttrib1fv(re.location,O)}}}}C()}function B(){N();for(const U in r){const X=r[U];for(const K in X){const oe=X[K];for(const H in oe){const $=oe[H];for(const q in $)v($[q].object),delete $[q];delete oe[H]}}delete r[U]}}function D(U){if(r[U.id]===void 0)return;const X=r[U.id];for(const K in X){const oe=X[K];for(const H in oe){const $=oe[H];for(const q in $)v($[q].object),delete $[q];delete oe[H]}}delete r[U.id]}function I(U){for(const X in r){const K=r[X];for(const oe in K){const H=K[oe];if(H[U.id]===void 0)continue;const $=H[U.id];for(const q in $)v($[q].object),delete $[q];delete H[U.id]}}}function w(U){for(const X in r){const K=r[X],oe=U.isInstancedMesh===!0?U.id:0,H=K[oe];if(H!==void 0){for(const $ in H){const q=H[$];for(const Z in q)v(q[Z].object),delete q[Z];delete H[$]}delete K[oe],Object.keys(K).length===0&&delete r[X]}}}function N(){k(),u=!0,l!==o&&(l=o,p(l.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:N,resetDefaultState:k,dispose:B,releaseStatesOfGeometry:D,releaseStatesOfObject:w,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:_,disableUnusedAttributes:C}}function T1(s,e,t){let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,v){v!==0&&(s.drawArraysInstanced(r,h,p,v),t.update(p,r,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,v);let g=0;for(let S=0;S<v;S++)g+=p[S];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function A1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(I){return!(I!==Ai&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const w=I===dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ii&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Bi&&!w)}function h(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(lt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:C,maxVaryings:b,maxFragmentUniforms:P,maxSamples:B,samples:D}}function C1(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new cs,f=new vt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const S=x.length!==0||g||r!==0||o;return o=g,r=x.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,g){t=v(x,g,0)},this.setState=function(x,g,S){const M=x.clippingPlanes,A=x.clipIntersection,_=x.clipShadows,y=s.get(x);if(!o||M===null||M.length===0||l&&!_)l?v(null):p();else{const C=l?0:r,b=C*4;let P=y.clippingState||null;h.value=P,P=v(M,g,b,S);for(let B=0;B!==b;++B)P[B]=t[B];y.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,g,S,M){const A=x!==null?x.length:0;let _=null;if(A!==0){if(_=h.value,M!==!0||_===null){const y=S+A*4,C=g.matrixWorldInverse;f.getNormalMatrix(C),(_===null||_.length<y)&&(_=new Float32Array(y));for(let b=0,P=S;b!==A;++b,P+=4)u.copy(x[b]).applyMatrix4(C,f),u.normal.toArray(_,P),_[P+3]=u.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,_}}const Vr=4,F0=[.125,.215,.35,.446,.526,.582],ds=20,R1=256,fa=new Cu,O0=new wt;let Xf=null,Yf=0,qf=0,jf=!1;const P1=new V;class B0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=P1}=l;Xf=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),qf=this._renderer.getActiveMipmapLevel(),jf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=k0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xf,Yf,qf),this._renderer.xr.enabled=jf,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xf=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),qf=this._renderer.getActiveMipmapLevel(),jf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:dr,format:Ai,colorSpace:_u,depthBuffer:!1},o=z0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=b1(l)),this._blurMaterial=D1(l,e,t),this._ggxMaterial=L1(l,e,t)}return o}_compileMaterial(e){const t=new ge(new gn,e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,r,o,l){const h=new di(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,S=x.toneMapping;x.getClearColor(O0),x.toneMapping=ki,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ge(new Ke,new Hr({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,_=A.material;let y=!1;const C=e.background;C?C.isColor&&(_.color.copy(C),e.background=null,y=!0):(_.color.copy(O0),y=!0);for(let b=0;b<6;b++){const P=b%3;P===0?(h.up.set(0,p[b],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[b],l.y,l.z)):P===1?(h.up.set(0,0,p[b]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[b],l.z)):(h.up.set(0,p[b],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[b]));const B=this._cubeSize;uo(o,P*B,b>2?B:0,B,B),x.setRenderTarget(o),y&&x.render(A,h),x.render(e,h)}x.toneMapping=S,x.autoClear=g,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===ms||e.mapping===go;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=V0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=k0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;uo(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,fa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),x=Math.sqrt(p*p-v*v),g=0+p*1.25,S=x*g,{_lodMax:M}=this,A=this._sizeLods[r],_=3*A*(r>M-Vr?r-M+Vr:0),y=4*(this._cubeSize-A);h.envMap.value=e.texture,h.roughness.value=S,h.mipInt.value=M-t,uo(l,_,y,3*A,2*A),o.setRenderTarget(l),o.render(f,fa),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=M-r,uo(e,_,y,3*A,2*A),o.setRenderTarget(e),o.render(f,fa)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[o];x.material=p;const g=p.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ds-1),A=l/M,_=isFinite(l)?1+Math.floor(v*A):ds;_>ds&&lt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ds}`);const y=[];let C=0;for(let I=0;I<ds;++I){const w=I/A,N=Math.exp(-w*w/2);y.push(N),I===0?C+=N:I<_&&(C+=2*N)}for(let I=0;I<y.length;I++)y[I]=y[I]/C;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=y,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:b}=this;g.dTheta.value=M,g.mipInt.value=b-r;const P=this._sizeLods[o],B=3*P*(o>b-Vr?o-b+Vr:0),D=4*(this._cubeSize-P);uo(t,B,D,3*P,2*P),h.setRenderTarget(t),h.render(x,fa)}}function b1(s){const e=[],t=[],r=[];let o=s;const l=s-Vr+1+F0.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>s-Vr?h=F0[u-s+Vr-1]:u===0&&(h=0),t.push(h);const p=1/(f-2),v=-p,x=1+p,g=[v,v,x,v,x,x,v,v,x,x,v,x],S=6,M=6,A=3,_=2,y=1,C=new Float32Array(A*M*S),b=new Float32Array(_*M*S),P=new Float32Array(y*M*S);for(let D=0;D<S;D++){const I=D%3*2/3-1,w=D>2?0:-1,N=[I,w,0,I+2/3,w,0,I+2/3,w+1,0,I,w,0,I+2/3,w+1,0,I,w+1,0];C.set(N,A*M*D),b.set(g,_*M*D);const k=[D,D,D,D,D,D];P.set(k,y*M*D)}const B=new gn;B.setAttribute("position",new Zn(C,A)),B.setAttribute("uv",new Zn(b,_)),B.setAttribute("faceIndex",new Zn(P,y)),r.push(new ge(B,null)),o>Vr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function z0(s,e,t){const r=new Vi(s,e,t);return r.texture.mapping=wu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function uo(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function L1(s,e,t){return new Ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:R1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ru(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function D1(s,e,t){const r=new Float32Array(ds),o=new V(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function k0(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function V0(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Yg extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Pg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ke(5,5,5),l=new Ci({name:"CubemapFromEquirect",uniforms:xo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:ur});l.uniforms.tEquirect.value=t;const u=new ge(o,l),f=t.minFilter;return t.minFilter===hs&&(t.minFilter=Dn),new Oy(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function N1(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,S=!1){return g==null?null:S?u(g):l(g)}function l(g){if(g&&g.isTexture){const S=g.mapping;if(S===hf||S===pf)if(e.has(g)){const M=e.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const A=new Yg(M.height);return A.fromEquirectangularTexture(s,g),e.set(g,A),g.addEventListener("dispose",p),f(A.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,M=S===hf||S===pf,A=S===ms||S===go;if(M||A){let _=t.get(g);const y=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new B0(s)),_=M?r.fromEquirectangular(g,_):r.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,t.set(g,_),_.texture;if(_!==void 0)return _.texture;{const C=g.image;return M&&C&&C.height>0||A&&C&&h(C)?(r===null&&(r=new B0(s)),_=M?r.fromEquirectangular(g):r.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,t.set(g,_),g.addEventListener("dispose",v),_.texture):null}}}return g}function f(g,S){return S===hf?g.mapping=ms:S===pf&&(g.mapping=go),g}function h(g){let S=0;const M=6;for(let A=0;A<M;A++)g[A]!==void 0&&S++;return S===M}function p(g){const S=g.target;S.removeEventListener("dispose",p);const M=e.get(S);M!==void 0&&(e.delete(S),M.dispose())}function v(g){const S=g.target;S.removeEventListener("dispose",v);const M=t.get(S);M!==void 0&&(t.delete(S),M.dispose())}function x(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:x}}function I1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&kd("WebGLRenderer: "+r+" extension not supported."),o}}}function U1(s,e,t,r){const o={},l=new WeakMap;function u(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",u),delete o[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(x,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function h(x){const g=x.attributes;for(const S in g)e.update(g[S],s.ARRAY_BUFFER)}function p(x){const g=[],S=x.index,M=x.attributes.position;let A=0;if(M===void 0)return;if(S!==null){const C=S.array;A=S.version;for(let b=0,P=C.length;b<P;b+=3){const B=C[b+0],D=C[b+1],I=C[b+2];g.push(B,D,D,I,I,B)}}else{const C=M.array;A=M.version;for(let b=0,P=C.length/3-1;b<P;b+=3){const B=b+0,D=b+1,I=b+2;g.push(B,D,D,I,I,B)}}const _=new(M.count>=65535?Tg:wg)(g,1);_.version=A;const y=l.get(x);y&&e.remove(y),l.set(x,_)}function v(x){const g=l.get(x);if(g){const S=x.index;S!==null&&g.version<S.version&&p(x)}else p(x);return l.get(x)}return{get:f,update:h,getWireframeAttribute:v}}function F1(s,e,t){let r;function o(x){r=x}let l,u;function f(x){l=x.type,u=x.bytesPerElement}function h(x,g){s.drawElements(r,g,l,x*u),t.update(g,r,1)}function p(x,g,S){S!==0&&(s.drawElementsInstanced(r,g,l,x*u,S),t.update(g,r,S))}function v(x,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,x,0,S);let A=0;for(let _=0;_<S;_++)A+=g[_];t.update(A,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function O1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:At("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function B1(s,e,t){const r=new WeakMap,o=new sn;function l(u,f,h){const p=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=v!==void 0?v.length:0;let g=r.get(f);if(g===void 0||g.count!==x){let k=function(){w.dispose(),r.delete(f),f.removeEventListener("dispose",k)};var S=k;g!==void 0&&g.texture.dispose();const M=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let P=0;M===!0&&(P=1),A===!0&&(P=2),_===!0&&(P=3);let B=f.attributes.position.count*P,D=1;B>e.maxTextureSize&&(D=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const I=new Float32Array(B*D*4*x),w=new Mg(I,B,D,x);w.type=Bi,w.needsUpdate=!0;const N=P*4;for(let U=0;U<x;U++){const X=y[U],K=C[U],oe=b[U],H=B*D*4*U;for(let $=0;$<X.count;$++){const q=$*N;M===!0&&(o.fromBufferAttribute(X,$),I[H+q+0]=o.x,I[H+q+1]=o.y,I[H+q+2]=o.z,I[H+q+3]=0),A===!0&&(o.fromBufferAttribute(K,$),I[H+q+4]=o.x,I[H+q+5]=o.y,I[H+q+6]=o.z,I[H+q+7]=0),_===!0&&(o.fromBufferAttribute(oe,$),I[H+q+8]=o.x,I[H+q+9]=o.y,I[H+q+10]=o.z,I[H+q+11]=oe.itemSize===4?o.w:1)}}g={count:x,texture:w,size:new Ye(B,D)},r.set(f,g),f.addEventListener("dispose",k)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let M=0;for(let _=0;_<p.length;_++)M+=p[_];const A=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function z1(s,e,t,r,o){let l=new WeakMap;function u(p){const v=o.render.frame,x=p.geometry,g=e.get(p,x);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==v&&(S.update(),l.set(S,v))}return g}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const k1={[ag]:"LINEAR_TONE_MAPPING",[lg]:"REINHARD_TONE_MAPPING",[ug]:"CINEON_TONE_MAPPING",[$d]:"ACES_FILMIC_TONE_MAPPING",[fg]:"AGX_TONE_MAPPING",[dg]:"NEUTRAL_TONE_MAPPING",[cg]:"CUSTOM_TONE_MAPPING"};function V1(s,e,t,r,o){const l=new Vi(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new vo(e,t):void 0}),u=new Vi(e,t,{type:dr,depthBuffer:!1,stencilBuffer:!1}),f=new gn;f.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Gt([0,2,0,0,2,0],2));const h=new Py({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ge(f,h),v=new Cu(-1,1,1,-1,0,1);let x=null,g=null,S=!1,M,A=null,_=[],y=!1;this.setSize=function(C,b){l.setSize(C,b),u.setSize(C,b);for(let P=0;P<_.length;P++){const B=_[P];B.setSize&&B.setSize(C,b)}},this.setEffects=function(C){_=C,y=_.length>0&&_[0].isRenderPass===!0;const b=l.width,P=l.height;for(let B=0;B<_.length;B++){const D=_[B];D.setSize&&D.setSize(b,P)}},this.begin=function(C,b){if(S||C.toneMapping===ki&&_.length===0)return!1;if(A=b,b!==null){const P=b.width,B=b.height;(l.width!==P||l.height!==B)&&this.setSize(P,B)}return y===!1&&C.setRenderTarget(l),M=C.toneMapping,C.toneMapping=ki,!0},this.hasRenderPass=function(){return y},this.end=function(C,b){C.toneMapping=M,S=!0;let P=l,B=u;for(let D=0;D<_.length;D++){const I=_[D];if(I.enabled!==!1&&(I.render(C,B,P,b),I.needsSwap!==!1)){const w=P;P=B,B=w}}if(x!==C.outputColorSpace||g!==C.toneMapping){x=C.outputColorSpace,g=C.toneMapping,h.defines={},Ct.getTransfer(x)===zt&&(h.defines.SRGB_TRANSFER="");const D=k1[g];D&&(h.defines[D]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(A),C.render(p,v),A=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),h.dispose()}}const qg=new Nn,qd=new vo(1,1),jg=new Mg,Zg=new Cx,Kg=new Pg,H0=[],G0=[],W0=new Float32Array(16),X0=new Float32Array(9),Y0=new Float32Array(4);function yo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=H0[o];if(l===void 0&&(l=new Float32Array(o),H0[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function pn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function mn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Pu(s,e){let t=G0[e];t===void 0&&(t=new Int32Array(e),G0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function H1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function G1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2fv(this.addr,e),mn(t,e)}}function W1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;s.uniform3fv(this.addr,e),mn(t,e)}}function X1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4fv(this.addr,e),mn(t,e)}}function Y1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;Y0.set(r),s.uniformMatrix2fv(this.addr,!1,Y0),mn(t,r)}}function q1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;X0.set(r),s.uniformMatrix3fv(this.addr,!1,X0),mn(t,r)}}function j1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;W0.set(r),s.uniformMatrix4fv(this.addr,!1,W0),mn(t,r)}}function Z1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function K1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2iv(this.addr,e),mn(t,e)}}function $1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;s.uniform3iv(this.addr,e),mn(t,e)}}function J1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4iv(this.addr,e),mn(t,e)}}function Q1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function eE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2uiv(this.addr,e),mn(t,e)}}function tE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;s.uniform3uiv(this.addr,e),mn(t,e)}}function nE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4uiv(this.addr,e),mn(t,e)}}function iE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(qd.compareFunction=t.isReversedDepthBuffer()?sh:rh,l=qd):l=qg,t.setTexture2D(e||l,o)}function rE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Zg,o)}function sE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Kg,o)}function oE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||jg,o)}function aE(s){switch(s){case 5126:return H1;case 35664:return G1;case 35665:return W1;case 35666:return X1;case 35674:return Y1;case 35675:return q1;case 35676:return j1;case 5124:case 35670:return Z1;case 35667:case 35671:return K1;case 35668:case 35672:return $1;case 35669:case 35673:return J1;case 5125:return Q1;case 36294:return eE;case 36295:return tE;case 36296:return nE;case 35678:case 36198:case 36298:case 36306:case 35682:return iE;case 35679:case 36299:case 36307:return rE;case 35680:case 36300:case 36308:case 36293:return sE;case 36289:case 36303:case 36311:case 36292:return oE}}function lE(s,e){s.uniform1fv(this.addr,e)}function uE(s,e){const t=yo(e,this.size,2);s.uniform2fv(this.addr,t)}function cE(s,e){const t=yo(e,this.size,3);s.uniform3fv(this.addr,t)}function fE(s,e){const t=yo(e,this.size,4);s.uniform4fv(this.addr,t)}function dE(s,e){const t=yo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function hE(s,e){const t=yo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function pE(s,e){const t=yo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function mE(s,e){s.uniform1iv(this.addr,e)}function gE(s,e){s.uniform2iv(this.addr,e)}function vE(s,e){s.uniform3iv(this.addr,e)}function _E(s,e){s.uniform4iv(this.addr,e)}function xE(s,e){s.uniform1uiv(this.addr,e)}function yE(s,e){s.uniform2uiv(this.addr,e)}function SE(s,e){s.uniform3uiv(this.addr,e)}function ME(s,e){s.uniform4uiv(this.addr,e)}function EE(s,e,t){const r=this.cache,o=e.length,l=Pu(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=qd:u=qg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function wE(s,e,t){const r=this.cache,o=e.length,l=Pu(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Zg,l[u])}function TE(s,e,t){const r=this.cache,o=e.length,l=Pu(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Kg,l[u])}function AE(s,e,t){const r=this.cache,o=e.length,l=Pu(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||jg,l[u])}function CE(s){switch(s){case 5126:return lE;case 35664:return uE;case 35665:return cE;case 35666:return fE;case 35674:return dE;case 35675:return hE;case 35676:return pE;case 5124:case 35670:return mE;case 35667:case 35671:return gE;case 35668:case 35672:return vE;case 35669:case 35673:return _E;case 5125:return xE;case 36294:return yE;case 36295:return SE;case 36296:return ME;case 35678:case 36198:case 36298:case 36306:case 35682:return EE;case 35679:case 36299:case 36307:return wE;case 35680:case 36300:case 36308:case 36293:return TE;case 36289:case 36303:case 36311:case 36292:return AE}}class RE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=aE(t.type)}}class PE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CE(t.type)}}class bE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Zf=/(\w+)(\])?(\[|\.)?/g;function q0(s,e){s.seq.push(e),s.map[e.id]=e}function LE(s,e,t){const r=s.name,o=r.length;for(Zf.lastIndex=0;;){const l=Zf.exec(r),u=Zf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){q0(t,p===void 0?new RE(f,s,e):new PE(f,s,e));break}else{let x=t.map[f];x===void 0&&(x=new bE(f),q0(t,x)),t=x}}}class hu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);LE(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function j0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const DE=37297;let NE=0;function IE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const Z0=new vt;function UE(s){Ct._getMatrix(Z0,Ct.workingColorSpace,s);const e=`mat3( ${Z0.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(s)){case xu:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function K0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+IE(s.getShaderSource(e),f)}else return l}function FE(s,e){const t=UE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const OE={[ag]:"Linear",[lg]:"Reinhard",[ug]:"Cineon",[$d]:"ACESFilmic",[fg]:"AgX",[dg]:"Neutral",[cg]:"Custom"};function BE(s,e){const t=OE[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ou=new V;function zE(){Ct.getLuminanceCoefficients(ou);const s=ou.x.toFixed(4),e=ou.y.toFixed(4),t=ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function VE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function HE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function ma(s){return s!==""}function $0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function J0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GE=/^[ \t]*#include +<([\w\d./]+)>/gm;function jd(s){return s.replace(GE,XE)}const WE=new Map;function XE(s,e){let t=xt[e];if(t===void 0){const r=WE.get(e);if(r!==void 0)t=xt[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return jd(t)}const YE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q0(s){return s.replace(YE,qE)}function qE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function eg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const jE={[ga]:"SHADOWMAP_TYPE_PCF",[ha]:"SHADOWMAP_TYPE_VSM"};function ZE(s){return jE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const KE={[ms]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE",[wu]:"ENVMAP_TYPE_CUBE_UV"};function $E(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":KE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const JE={[go]:"ENVMAP_MODE_REFRACTION"};function QE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":JE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ew={[og]:"ENVMAP_BLENDING_MULTIPLY",[ox]:"ENVMAP_BLENDING_MIX",[ax]:"ENVMAP_BLENDING_ADD"};function tw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ew[s.combine]||"ENVMAP_BLENDING_NONE"}function nw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function iw(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=ZE(t),p=$E(t),v=QE(t),x=tw(t),g=nw(t),S=kE(t),M=VE(l),A=o.createProgram();let _,y,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ma).join(`
`),_.length>0&&(_+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ma).join(`
`),y.length>0&&(y+=`
`)):(_=[eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),y=[eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?xt.tonemapping_pars_fragment:"",t.toneMapping!==ki?BE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,FE("linearToOutputTexel",t.outputColorSpace),zE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),u=jd(u),u=$0(u,t),u=J0(u,t),f=jd(f),f=$0(f,t),f=J0(f,t),u=Q0(u),f=Q0(f),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,y=["#define varying in",t.glslVersion===Qm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=C+_+u,P=C+y+f,B=j0(o,o.VERTEX_SHADER,b),D=j0(o,o.FRAGMENT_SHADER,P);o.attachShader(A,B),o.attachShader(A,D),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function I(U){if(s.debug.checkShaderErrors){const X=o.getProgramInfoLog(A)||"",K=o.getShaderInfoLog(B)||"",oe=o.getShaderInfoLog(D)||"",H=X.trim(),$=K.trim(),q=oe.trim();let Z=!0,re=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,B,D);else{const se=K0(o,B,"vertex"),O=K0(o,D,"fragment");At("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+H+`
`+se+`
`+O)}else H!==""?lt("WebGLProgram: Program Info Log:",H):($===""||q==="")&&(re=!1);re&&(U.diagnostics={runnable:Z,programLog:H,vertexShader:{log:$,prefix:_},fragmentShader:{log:q,prefix:y}})}o.deleteShader(B),o.deleteShader(D),w=new hu(o,A),N=HE(o,A)}let w;this.getUniforms=function(){return w===void 0&&I(this),w};let N;this.getAttributes=function(){return N===void 0&&I(this),N};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(A,DE)),k},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=NE++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=B,this.fragmentShader=D,this}let rw=0;class sw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new ow(e),t.set(e,r)),r}}class ow{constructor(e){this.id=rw++,this.code=e,this.usedTimes=0}}function aw(s){return s===gs||s===gu||s===vu}function lw(s,e,t,r,o,l){const u=new ah,f=new sw,h=new Set,p=[],v=new Map,x=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return h.add(w),w===0?"uv":`uv${w}`}function A(w,N,k,U,X,K){const oe=U.fog,H=X.geometry,$=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,q=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Z=e.get(w.envMap||$,q),re=Z&&Z.mapping===wu?Z.image.height:null,se=S[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&lt("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const O=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,J=O!==void 0?O.length:0;let Re=0;H.morphAttributes.position!==void 0&&(Re=1),H.morphAttributes.normal!==void 0&&(Re=2),H.morphAttributes.color!==void 0&&(Re=3);let Ve,Fe,ae,me;if(se){const dt=Fi[se];Ve=dt.vertexShader,Fe=dt.fragmentShader}else Ve=w.vertexShader,Fe=w.fragmentShader,f.update(w),ae=f.getVertexShaderID(w),me=f.getFragmentShaderID(w);const he=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),Me=X.isInstancedMesh===!0,we=X.isBatchedMesh===!0,ot=!!w.map,it=!!w.matcap,ht=!!Z,bt=!!w.aoMap,ct=!!w.lightMap,kt=!!w.bumpMap,Ut=!!w.normalMap,qe=!!w.displacementMap,z=!!w.emissiveMap,_t=!!w.metalnessMap,gt=!!w.roughnessMap,Dt=w.anisotropy>0,Oe=w.clearcoat>0,Yt=w.dispersion>0,L=w.iridescence>0,E=w.sheen>0,Q=w.transmission>0,de=Dt&&!!w.anisotropyMap,ve=Oe&&!!w.clearcoatMap,Ee=Oe&&!!w.clearcoatNormalMap,Ue=Oe&&!!w.clearcoatRoughnessMap,ce=L&&!!w.iridescenceMap,pe=L&&!!w.iridescenceThicknessMap,ze=E&&!!w.sheenColorMap,He=E&&!!w.sheenRoughnessMap,Pe=!!w.specularMap,Te=!!w.specularColorMap,at=!!w.specularIntensityMap,ft=Q&&!!w.transmissionMap,yt=Q&&!!w.thicknessMap,W=!!w.gradientMap,Ce=!!w.alphaMap,fe=w.alphaTest>0,ke=!!w.alphaHash,Le=!!w.extensions;let _e=ki;w.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(_e=s.toneMapping);const $e={shaderID:se,shaderType:w.type,shaderName:w.name,vertexShader:Ve,fragmentShader:Fe,defines:w.defines,customVertexShaderID:ae,customFragmentShaderID:me,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:we,batchingColor:we&&X._colorsTexture!==null,instancing:Me,instancingColor:Me&&X.instanceColor!==null,instancingMorph:Me&&X.morphTexture!==null,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:ot,matcap:it,envMap:ht,envMapMode:ht&&Z.mapping,envMapCubeUVHeight:re,aoMap:bt,lightMap:ct,bumpMap:kt,normalMap:Ut,displacementMap:qe,emissiveMap:z,normalMapObjectSpace:Ut&&w.normalMapType===cx,normalMapTangentSpace:Ut&&w.normalMapType===Bd,packedNormalMap:Ut&&w.normalMapType===Bd&&aw(w.normalMap.format),metalnessMap:_t,roughnessMap:gt,anisotropy:Dt,anisotropyMap:de,clearcoat:Oe,clearcoatMap:ve,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ue,dispersion:Yt,iridescence:L,iridescenceMap:ce,iridescenceThicknessMap:pe,sheen:E,sheenColorMap:ze,sheenRoughnessMap:He,specularMap:Pe,specularColorMap:Te,specularIntensityMap:at,transmission:Q,transmissionMap:ft,thicknessMap:yt,gradientMap:W,opaque:w.transparent===!1&&w.blending===ho&&w.alphaToCoverage===!1,alphaMap:Ce,alphaTest:fe,alphaHash:ke,combine:w.combine,mapUv:ot&&M(w.map.channel),aoMapUv:bt&&M(w.aoMap.channel),lightMapUv:ct&&M(w.lightMap.channel),bumpMapUv:kt&&M(w.bumpMap.channel),normalMapUv:Ut&&M(w.normalMap.channel),displacementMapUv:qe&&M(w.displacementMap.channel),emissiveMapUv:z&&M(w.emissiveMap.channel),metalnessMapUv:_t&&M(w.metalnessMap.channel),roughnessMapUv:gt&&M(w.roughnessMap.channel),anisotropyMapUv:de&&M(w.anisotropyMap.channel),clearcoatMapUv:ve&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:He&&M(w.sheenRoughnessMap.channel),specularMapUv:Pe&&M(w.specularMap.channel),specularColorMapUv:Te&&M(w.specularColorMap.channel),specularIntensityMapUv:at&&M(w.specularIntensityMap.channel),transmissionMapUv:ft&&M(w.transmissionMap.channel),thicknessMapUv:yt&&M(w.thicknessMap.channel),alphaMapUv:Ce&&M(w.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ut||Dt),vertexNormals:!!H.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!H.attributes.uv&&(ot||Ce),fog:!!oe,useFog:w.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||H.attributes.normal===void 0&&Ut===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ie,skinning:X.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Re,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:ot&&w.map.isVideoTexture===!0&&Ct.getTransfer(w.map.colorSpace)===zt,decodeVideoTextureEmissive:z&&w.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(w.emissiveMap.colorSpace)===zt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ni,flipSided:w.side===zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Le&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&w.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return $e.vertexUv1s=h.has(1),$e.vertexUv2s=h.has(2),$e.vertexUv3s=h.has(3),h.clear(),$e}function _(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)N.push(k),N.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(y(N,w),C(N,w),N.push(s.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function y(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function C(w,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),w.push(u.mask)}function b(w){const N=S[w.type];let k;if(N){const U=Fi[N];k=Ay.clone(U.uniforms)}else k=w.uniforms;return k}function P(w,N){let k=v.get(N);return k!==void 0?++k.usedTimes:(k=new iw(s,N,w,o),p.push(k),v.set(N,k)),k}function B(w){if(--w.usedTimes===0){const N=p.indexOf(w);p[N]=p[p.length-1],p.pop(),v.delete(w.cacheKey),w.destroy()}}function D(w){f.remove(w)}function I(){f.dispose()}return{getParameters:A,getProgramCacheKey:_,getUniforms:b,acquireProgram:P,releaseProgram:B,releaseShaderCache:D,programs:p,dispose:I}}function uw(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function cw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function tg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ng(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function f(g,S,M,A,_,y){let C=s[e];return C===void 0?(C={id:g.id,object:g,geometry:S,material:M,materialVariant:u(g),groupOrder:A,renderOrder:g.renderOrder,z:_,group:y},s[e]=C):(C.id=g.id,C.object=g,C.geometry=S,C.material=M,C.materialVariant=u(g),C.groupOrder=A,C.renderOrder=g.renderOrder,C.z=_,C.group=y),e++,C}function h(g,S,M,A,_,y){const C=f(g,S,M,A,_,y);M.transmission>0?r.push(C):M.transparent===!0?o.push(C):t.push(C)}function p(g,S,M,A,_,y){const C=f(g,S,M,A,_,y);M.transmission>0?r.unshift(C):M.transparent===!0?o.unshift(C):t.unshift(C)}function v(g,S){t.length>1&&t.sort(g||cw),r.length>1&&r.sort(S||tg),o.length>1&&o.sort(S||tg)}function x(){for(let g=e,S=s.length;g<S;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:x,sort:v}}function fw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new ng,s.set(r,[u])):o>=l.length?(u=new ng,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function dw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new wt};break;case"SpotLight":t={position:new V,direction:new V,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new V,halfWidth:new V,halfHeight:new V};break}return s[e.id]=t,t}}}function hw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let pw=0;function mw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gw(s){const e=new dw,t=hw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new V);const o=new V,l=new Kt,u=new Kt;function f(p){let v=0,x=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let S=0,M=0,A=0,_=0,y=0,C=0,b=0,P=0,B=0,D=0,I=0;p.sort(mw);for(let N=0,k=p.length;N<k;N++){const U=p[N],X=U.color,K=U.intensity,oe=U.distance;let H=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===gs?H=U.shadow.map.texture:H=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)v+=X.r*K,x+=X.g*K,g+=X.b*K;else if(U.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(U.sh.coefficients[$],K);I++}else if(U.isDirectionalLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const q=U.shadow,Z=t.get(U);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,r.directionalShadow[S]=Z,r.directionalShadowMap[S]=H,r.directionalShadowMatrix[S]=U.shadow.matrix,C++}r.directional[S]=$,S++}else if(U.isSpotLight){const $=e.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(X).multiplyScalar(K),$.distance=oe,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,r.spot[A]=$;const q=U.shadow;if(U.map&&(r.spotLightMap[B]=U.map,B++,q.updateMatrices(U),U.castShadow&&D++),r.spotLightMatrix[A]=q.matrix,U.castShadow){const Z=t.get(U);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,r.spotShadow[A]=Z,r.spotShadowMap[A]=H,P++}A++}else if(U.isRectAreaLight){const $=e.get(U);$.color.copy(X).multiplyScalar(K),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),r.rectArea[_]=$,_++}else if(U.isPointLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){const q=U.shadow,Z=t.get(U);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,Z.shadowCameraNear=q.camera.near,Z.shadowCameraFar=q.camera.far,r.pointShadow[M]=Z,r.pointShadowMap[M]=H,r.pointShadowMatrix[M]=U.shadow.matrix,b++}r.point[M]=$,M++}else if(U.isHemisphereLight){const $=e.get(U);$.skyColor.copy(U.color).multiplyScalar(K),$.groundColor.copy(U.groundColor).multiplyScalar(K),r.hemi[y]=$,y++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==S||w.pointLength!==M||w.spotLength!==A||w.rectAreaLength!==_||w.hemiLength!==y||w.numDirectionalShadows!==C||w.numPointShadows!==b||w.numSpotShadows!==P||w.numSpotMaps!==B||w.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=_,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=P+B-D,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=I,w.directionalLength=S,w.pointLength=M,w.spotLength=A,w.rectAreaLength=_,w.hemiLength=y,w.numDirectionalShadows=C,w.numPointShadows=b,w.numSpotShadows=P,w.numSpotMaps=B,w.numLightProbes=I,r.version=pw++)}function h(p,v){let x=0,g=0,S=0,M=0,A=0;const _=v.matrixWorldInverse;for(let y=0,C=p.length;y<C;y++){const b=p[y];if(b.isDirectionalLight){const P=r.directional[x];P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(_),x++}else if(b.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(_),P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(_),S++}else if(b.isRectAreaLight){const P=r.rectArea[M];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(_),u.identity(),l.copy(b.matrixWorld),l.premultiply(_),u.extractRotation(l),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),M++}else if(b.isPointLight){const P=r.point[g];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(_),g++}else if(b.isHemisphereLight){const P=r.hemi[A];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(_),A++}}}return{setup:f,setupView:h,state:r}}function ig(s){const e=new gw(s),t=[],r=[],o=[];function l(g){x.camera=g,t.length=0,r.length=0,o.length=0}function u(g){t.push(g)}function f(g){r.push(g)}function h(g){o.push(g)}function p(){e.setup(t)}function v(g){e.setupView(t,g)}const x={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function vw(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new ig(s),e.set(o,[f])):l>=u.length?(f=new ig(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const _w=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yw=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Sw=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],rg=new Kt,da=new V,Kf=new V;function Mw(s,e,t){let r=new uh;const o=new Ye,l=new Ye,u=new sn,f=new by,h=new Ly,p={},v=t.maxTextureSize,x={[Gr]:zn,[zn]:Gr,[ni]:ni},g=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:_w,fragmentShader:xw}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const M=new gn;M.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ge(M,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ga;let y=this.type;this.render=function(D,I,w){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;this.type===V_&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ga);const N=s.getRenderTarget(),k=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),X=s.state;X.setBlending(ur),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const K=y!==this.type;K&&I.traverse(function(oe){oe.material&&(Array.isArray(oe.material)?oe.material.forEach(H=>H.needsUpdate=!0):oe.material.needsUpdate=!0)});for(let oe=0,H=D.length;oe<H;oe++){const $=D[oe],q=$.shadow;if(q===void 0){lt("WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const Z=q.getFrameExtents();o.multiply(Z),l.copy(q.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/Z.x),o.x=l.x*Z.x,q.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/Z.y),o.y=l.y*Z.y,q.mapSize.y=l.y));const re=s.state.buffers.depth.getReversed();if(q.camera._reversedDepth=re,q.map===null||K===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===ha){if($.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Vi(o.x,o.y,{format:gs,type:dr,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),q.map.texture.name=$.name+".shadowMap",q.map.depthTexture=new vo(o.x,o.y,Bi),q.map.depthTexture.name=$.name+".shadowMapDepth",q.map.depthTexture.format=hr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Tn,q.map.depthTexture.magFilter=Tn}else $.isPointLight?(q.map=new Yg(o.x),q.map.depthTexture=new jx(o.x,Gi)):(q.map=new Vi(o.x,o.y),q.map.depthTexture=new vo(o.x,o.y,Gi)),q.map.depthTexture.name=$.name+".shadowMap",q.map.depthTexture.format=hr,this.type===ga?(q.map.depthTexture.compareFunction=re?sh:rh,q.map.depthTexture.minFilter=Dn,q.map.depthTexture.magFilter=Dn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Tn,q.map.depthTexture.magFilter=Tn);q.camera.updateProjectionMatrix()}const se=q.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<se;O++){if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,O),s.clear();else{O===0&&(s.setRenderTarget(q.map),s.clear());const J=q.getViewport(O);u.set(l.x*J.x,l.y*J.y,l.x*J.z,l.y*J.w),X.viewport(u)}if($.isPointLight){const J=q.camera,Re=q.matrix,Ve=$.distance||J.far;Ve!==J.far&&(J.far=Ve,J.updateProjectionMatrix()),da.setFromMatrixPosition($.matrixWorld),J.position.copy(da),Kf.copy(J.position),Kf.add(yw[O]),J.up.copy(Sw[O]),J.lookAt(Kf),J.updateMatrixWorld(),Re.makeTranslation(-da.x,-da.y,-da.z),rg.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),q._frustum.setFromProjectionMatrix(rg,J.coordinateSystem,J.reversedDepth)}else q.updateMatrices($);r=q.getFrustum(),P(I,w,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===ha&&C(q,w),q.needsUpdate=!1}y=this.type,_.needsUpdate=!1,s.setRenderTarget(N,k,U)};function C(D,I){const w=e.update(A);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Vi(o.x,o.y,{format:gs,type:dr})),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(I,null,w,g,A,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(I,null,w,S,A,null)}function b(D,I,w,N){let k=null;const U=w.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(U!==void 0)k=U;else if(k=w.isPointLight===!0?h:f,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const X=k.uuid,K=I.uuid;let oe=p[X];oe===void 0&&(oe={},p[X]=oe);let H=oe[K];H===void 0&&(H=k.clone(),oe[K]=H,I.addEventListener("dispose",B)),k=H}if(k.visible=I.visible,k.wireframe=I.wireframe,N===ha?k.side=I.shadowSide!==null?I.shadowSide:I.side:k.side=I.shadowSide!==null?I.shadowSide:x[I.side],k.alphaMap=I.alphaMap,k.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,k.map=I.map,k.clipShadows=I.clipShadows,k.clippingPlanes=I.clippingPlanes,k.clipIntersection=I.clipIntersection,k.displacementMap=I.displacementMap,k.displacementScale=I.displacementScale,k.displacementBias=I.displacementBias,k.wireframeLinewidth=I.wireframeLinewidth,k.linewidth=I.linewidth,w.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const X=s.properties.get(k);X.light=w}return k}function P(D,I,w,N,k){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&k===ha)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,D.matrixWorld);const K=e.update(D),oe=D.material;if(Array.isArray(oe)){const H=K.groups;for(let $=0,q=H.length;$<q;$++){const Z=H[$],re=oe[Z.materialIndex];if(re&&re.visible){const se=b(D,re,N,k);D.onBeforeShadow(s,D,I,w,K,se,Z),s.renderBufferDirect(w,null,K,se,D,Z),D.onAfterShadow(s,D,I,w,K,se,Z)}}}else if(oe.visible){const H=b(D,oe,N,k);D.onBeforeShadow(s,D,I,w,K,H,null),s.renderBufferDirect(w,null,K,H,D,null),D.onAfterShadow(s,D,I,w,K,H,null)}}const X=D.children;for(let K=0,oe=X.length;K<oe;K++)P(X[K],I,w,N,k)}function B(D){D.target.removeEventListener("dispose",B);for(const w in p){const N=p[w],k=D.target.uuid;k in N&&(N[k].dispose(),delete N[k])}}}function Ew(s,e){function t(){let W=!1;const Ce=new sn;let fe=null;const ke=new sn(0,0,0,0);return{setMask:function(Le){fe!==Le&&!W&&(s.colorMask(Le,Le,Le,Le),fe=Le)},setLocked:function(Le){W=Le},setClear:function(Le,_e,$e,dt,Ht){Ht===!0&&(Le*=dt,_e*=dt,$e*=dt),Ce.set(Le,_e,$e,dt),ke.equals(Ce)===!1&&(s.clearColor(Le,_e,$e,dt),ke.copy(Ce))},reset:function(){W=!1,fe=null,ke.set(-1,0,0,0)}}}function r(){let W=!1,Ce=!1,fe=null,ke=null,Le=null;return{setReversed:function(_e){if(Ce!==_e){const $e=e.get("EXT_clip_control");_e?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Ce=_e;const dt=Le;Le=null,this.setClear(dt)}},getReversed:function(){return Ce},setTest:function(_e){_e?he(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(_e){fe!==_e&&!W&&(s.depthMask(_e),fe=_e)},setFunc:function(_e){if(Ce&&(_e=yx[_e]),ke!==_e){switch(_e){case ed:s.depthFunc(s.NEVER);break;case td:s.depthFunc(s.ALWAYS);break;case nd:s.depthFunc(s.LESS);break;case mo:s.depthFunc(s.LEQUAL);break;case id:s.depthFunc(s.EQUAL);break;case rd:s.depthFunc(s.GEQUAL);break;case sd:s.depthFunc(s.GREATER);break;case od:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ke=_e}},setLocked:function(_e){W=_e},setClear:function(_e){Le!==_e&&(Le=_e,Ce&&(_e=1-_e),s.clearDepth(_e))},reset:function(){W=!1,fe=null,ke=null,Le=null,Ce=!1}}}function o(){let W=!1,Ce=null,fe=null,ke=null,Le=null,_e=null,$e=null,dt=null,Ht=null;return{setTest:function(Nt){W||(Nt?he(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(Nt){Ce!==Nt&&!W&&(s.stencilMask(Nt),Ce=Nt)},setFunc:function(Nt,In,ri){(fe!==Nt||ke!==In||Le!==ri)&&(s.stencilFunc(Nt,In,ri),fe=Nt,ke=In,Le=ri)},setOp:function(Nt,In,ri){(_e!==Nt||$e!==In||dt!==ri)&&(s.stencilOp(Nt,In,ri),_e=Nt,$e=In,dt=ri)},setLocked:function(Nt){W=Nt},setClear:function(Nt){Ht!==Nt&&(s.clearStencil(Nt),Ht=Nt)},reset:function(){W=!1,Ce=null,fe=null,ke=null,Le=null,_e=null,$e=null,dt=null,Ht=null}}}const l=new t,u=new r,f=new o,h=new WeakMap,p=new WeakMap;let v={},x={},g={},S=new WeakMap,M=[],A=null,_=!1,y=null,C=null,b=null,P=null,B=null,D=null,I=null,w=new wt(0,0,0),N=0,k=!1,U=null,X=null,K=null,oe=null,H=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Z=0;const re=s.getParameter(s.VERSION);re.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(re)[1]),q=Z>=1):re.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),q=Z>=2);let se=null,O={};const J=s.getParameter(s.SCISSOR_BOX),Re=s.getParameter(s.VIEWPORT),Ve=new sn().fromArray(J),Fe=new sn().fromArray(Re);function ae(W,Ce,fe,ke){const Le=new Uint8Array(4),_e=s.createTexture();s.bindTexture(W,_e),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<fe;$e++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,ke,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Ce+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return _e}const me={};me[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),me[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),me[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),he(s.DEPTH_TEST),u.setFunc(mo),kt(!1),Ut(jm),he(s.CULL_FACE),bt(ur);function he(W){v[W]!==!0&&(s.enable(W),v[W]=!0)}function Ie(W){v[W]!==!1&&(s.disable(W),v[W]=!1)}function Me(W,Ce){return g[W]!==Ce?(s.bindFramebuffer(W,Ce),g[W]=Ce,W===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ce),W===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function we(W,Ce){let fe=M,ke=!1;if(W){fe=S.get(Ce),fe===void 0&&(fe=[],S.set(Ce,fe));const Le=W.textures;if(fe.length!==Le.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,$e=Le.length;_e<$e;_e++)fe[_e]=s.COLOR_ATTACHMENT0+_e;fe.length=Le.length,ke=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,ke=!0);ke&&s.drawBuffers(fe)}function ot(W){return A!==W?(s.useProgram(W),A=W,!0):!1}const it={[fs]:s.FUNC_ADD,[G_]:s.FUNC_SUBTRACT,[W_]:s.FUNC_REVERSE_SUBTRACT};it[X_]=s.MIN,it[Y_]=s.MAX;const ht={[q_]:s.ZERO,[j_]:s.ONE,[Z_]:s.SRC_COLOR,[Jf]:s.SRC_ALPHA,[tx]:s.SRC_ALPHA_SATURATE,[Q_]:s.DST_COLOR,[$_]:s.DST_ALPHA,[K_]:s.ONE_MINUS_SRC_COLOR,[Qf]:s.ONE_MINUS_SRC_ALPHA,[ex]:s.ONE_MINUS_DST_COLOR,[J_]:s.ONE_MINUS_DST_ALPHA,[nx]:s.CONSTANT_COLOR,[ix]:s.ONE_MINUS_CONSTANT_COLOR,[rx]:s.CONSTANT_ALPHA,[sx]:s.ONE_MINUS_CONSTANT_ALPHA};function bt(W,Ce,fe,ke,Le,_e,$e,dt,Ht,Nt){if(W===ur){_===!0&&(Ie(s.BLEND),_=!1);return}if(_===!1&&(he(s.BLEND),_=!0),W!==H_){if(W!==y||Nt!==k){if((C!==fs||B!==fs)&&(s.blendEquation(s.FUNC_ADD),C=fs,B=fs),Nt)switch(W){case ho:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zm:s.blendFunc(s.ONE,s.ONE);break;case Km:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $m:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:At("WebGLState: Invalid blending: ",W);break}else switch(W){case ho:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Km:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $m:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",W);break}b=null,P=null,D=null,I=null,w.set(0,0,0),N=0,y=W,k=Nt}return}Le=Le||Ce,_e=_e||fe,$e=$e||ke,(Ce!==C||Le!==B)&&(s.blendEquationSeparate(it[Ce],it[Le]),C=Ce,B=Le),(fe!==b||ke!==P||_e!==D||$e!==I)&&(s.blendFuncSeparate(ht[fe],ht[ke],ht[_e],ht[$e]),b=fe,P=ke,D=_e,I=$e),(dt.equals(w)===!1||Ht!==N)&&(s.blendColor(dt.r,dt.g,dt.b,Ht),w.copy(dt),N=Ht),y=W,k=!1}function ct(W,Ce){W.side===ni?Ie(s.CULL_FACE):he(s.CULL_FACE);let fe=W.side===zn;Ce&&(fe=!fe),kt(fe),W.blending===ho&&W.transparent===!1?bt(ur):bt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const ke=W.stencilWrite;f.setTest(ke),ke&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),z(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(W){U!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),U=W)}function Ut(W){W!==z_?(he(s.CULL_FACE),W!==X&&(W===jm?s.cullFace(s.BACK):W===k_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),X=W}function qe(W){W!==K&&(q&&s.lineWidth(W),K=W)}function z(W,Ce,fe){W?(he(s.POLYGON_OFFSET_FILL),(oe!==Ce||H!==fe)&&(oe=Ce,H=fe,u.getReversed()&&(Ce=-Ce),s.polygonOffset(Ce,fe))):Ie(s.POLYGON_OFFSET_FILL)}function _t(W){W?he(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function gt(W){W===void 0&&(W=s.TEXTURE0+$-1),se!==W&&(s.activeTexture(W),se=W)}function Dt(W,Ce,fe){fe===void 0&&(se===null?fe=s.TEXTURE0+$-1:fe=se);let ke=O[fe];ke===void 0&&(ke={type:void 0,texture:void 0},O[fe]=ke),(ke.type!==W||ke.texture!==Ce)&&(se!==fe&&(s.activeTexture(fe),se=fe),s.bindTexture(W,Ce||me[W]),ke.type=W,ke.texture=Ce)}function Oe(){const W=O[se];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Yt(){try{s.compressedTexImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function E(){try{s.texSubImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function Q(){try{s.texSubImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function de(){try{s.compressedTexSubImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function ve(){try{s.compressedTexSubImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function Ee(){try{s.texStorage2D(...arguments)}catch(W){At("WebGLState:",W)}}function Ue(){try{s.texStorage3D(...arguments)}catch(W){At("WebGLState:",W)}}function ce(){try{s.texImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function pe(){try{s.texImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function ze(W){return x[W]!==void 0?x[W]:s.getParameter(W)}function He(W,Ce){x[W]!==Ce&&(s.pixelStorei(W,Ce),x[W]=Ce)}function Pe(W){Ve.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Ve.copy(W))}function Te(W){Fe.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Fe.copy(W))}function at(W,Ce){let fe=p.get(Ce);fe===void 0&&(fe=new WeakMap,p.set(Ce,fe));let ke=fe.get(W);ke===void 0&&(ke=s.getUniformBlockIndex(Ce,W.name),fe.set(W,ke))}function ft(W,Ce){const ke=p.get(Ce).get(W);h.get(Ce)!==ke&&(s.uniformBlockBinding(Ce,ke,W.__bindingPointIndex),h.set(Ce,ke))}function yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},x={},se=null,O={},g={},S=new WeakMap,M=[],A=null,_=!1,y=null,C=null,b=null,P=null,B=null,D=null,I=null,w=new wt(0,0,0),N=0,k=!1,U=null,X=null,K=null,oe=null,H=null,Ve.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:he,disable:Ie,bindFramebuffer:Me,drawBuffers:we,useProgram:ot,setBlending:bt,setMaterial:ct,setFlipSided:kt,setCullFace:Ut,setLineWidth:qe,setPolygonOffset:z,setScissorTest:_t,activeTexture:gt,bindTexture:Dt,unbindTexture:Oe,compressedTexImage2D:Yt,compressedTexImage3D:L,texImage2D:ce,texImage3D:pe,pixelStorei:He,getParameter:ze,updateUBOMapping:at,uniformBlockBinding:ft,texStorage2D:Ee,texStorage3D:Ue,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:de,compressedTexSubImage3D:ve,scissor:Pe,viewport:Te,reset:yt}}function ww(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ye,v=new WeakMap,x=new Set;let g;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,E){return M?new OffscreenCanvas(L,E):yu("canvas")}function _(L,E,Q){let de=1;const ve=Yt(L);if((ve.width>Q||ve.height>Q)&&(de=Q/Math.max(ve.width,ve.height)),de<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ee=Math.floor(de*ve.width),Ue=Math.floor(de*ve.height);g===void 0&&(g=A(Ee,Ue));const ce=E?A(Ee,Ue):g;return ce.width=Ee,ce.height=Ue,ce.getContext("2d").drawImage(L,0,0,Ee,Ue),lt("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+Ee+"x"+Ue+")."),ce}else return"data"in L&&lt("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function y(L){return L.generateMipmaps}function C(L){s.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(L,E,Q,de,ve,Ee=!1){if(L!==null){if(s[L]!==void 0)return s[L];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ue;de&&(Ue=e.get("EXT_texture_norm16"),Ue||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=E;if(E===s.RED&&(Q===s.FLOAT&&(ce=s.R32F),Q===s.HALF_FLOAT&&(ce=s.R16F),Q===s.UNSIGNED_BYTE&&(ce=s.R8),Q===s.UNSIGNED_SHORT&&Ue&&(ce=Ue.R16_EXT),Q===s.SHORT&&Ue&&(ce=Ue.R16_SNORM_EXT)),E===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ce=s.R8UI),Q===s.UNSIGNED_SHORT&&(ce=s.R16UI),Q===s.UNSIGNED_INT&&(ce=s.R32UI),Q===s.BYTE&&(ce=s.R8I),Q===s.SHORT&&(ce=s.R16I),Q===s.INT&&(ce=s.R32I)),E===s.RG&&(Q===s.FLOAT&&(ce=s.RG32F),Q===s.HALF_FLOAT&&(ce=s.RG16F),Q===s.UNSIGNED_BYTE&&(ce=s.RG8),Q===s.UNSIGNED_SHORT&&Ue&&(ce=Ue.RG16_EXT),Q===s.SHORT&&Ue&&(ce=Ue.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ce=s.RG8UI),Q===s.UNSIGNED_SHORT&&(ce=s.RG16UI),Q===s.UNSIGNED_INT&&(ce=s.RG32UI),Q===s.BYTE&&(ce=s.RG8I),Q===s.SHORT&&(ce=s.RG16I),Q===s.INT&&(ce=s.RG32I)),E===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),Q===s.UNSIGNED_INT&&(ce=s.RGB32UI),Q===s.BYTE&&(ce=s.RGB8I),Q===s.SHORT&&(ce=s.RGB16I),Q===s.INT&&(ce=s.RGB32I)),E===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),Q===s.UNSIGNED_INT&&(ce=s.RGBA32UI),Q===s.BYTE&&(ce=s.RGBA8I),Q===s.SHORT&&(ce=s.RGBA16I),Q===s.INT&&(ce=s.RGBA32I)),E===s.RGB&&(Q===s.UNSIGNED_SHORT&&Ue&&(ce=Ue.RGB16_EXT),Q===s.SHORT&&Ue&&(ce=Ue.RGB16_SNORM_EXT),Q===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),Q===s.UNSIGNED_INT_10F_11F_11F_REV&&(ce=s.R11F_G11F_B10F)),E===s.RGBA){const pe=Ee?xu:Ct.getTransfer(ve);Q===s.FLOAT&&(ce=s.RGBA32F),Q===s.HALF_FLOAT&&(ce=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(ce=pe===zt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT&&Ue&&(ce=Ue.RGBA16_EXT),Q===s.SHORT&&Ue&&(ce=Ue.RGBA16_SNORM_EXT),Q===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function B(L,E){let Q;return L?E===null||E===Gi||E===Sa?Q=s.DEPTH24_STENCIL8:E===Bi?Q=s.DEPTH32F_STENCIL8:E===ya&&(Q=s.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Gi||E===Sa?Q=s.DEPTH_COMPONENT24:E===Bi?Q=s.DEPTH_COMPONENT32F:E===ya&&(Q=s.DEPTH_COMPONENT16),Q}function D(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Tn&&L.minFilter!==Dn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function I(L){const E=L.target;E.removeEventListener("dispose",I),N(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&x.delete(E)}function w(L){const E=L.target;E.removeEventListener("dispose",w),U(E)}function N(L){const E=r.get(L);if(E.__webglInit===void 0)return;const Q=L.source,de=S.get(Q);if(de){const ve=de[E.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&k(L),Object.keys(de).length===0&&S.delete(Q)}r.remove(L)}function k(L){const E=r.get(L);s.deleteTexture(E.__webglTexture);const Q=L.source,de=S.get(Q);delete de[E.__cacheKey],u.memory.textures--}function U(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(E.__webglFramebuffer[de]))for(let ve=0;ve<E.__webglFramebuffer[de].length;ve++)s.deleteFramebuffer(E.__webglFramebuffer[de][ve]);else s.deleteFramebuffer(E.__webglFramebuffer[de]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[de])}else{if(Array.isArray(E.__webglFramebuffer))for(let de=0;de<E.__webglFramebuffer.length;de++)s.deleteFramebuffer(E.__webglFramebuffer[de]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let de=0;de<E.__webglColorRenderbuffer.length;de++)E.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[de]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=L.textures;for(let de=0,ve=Q.length;de<ve;de++){const Ee=r.get(Q[de]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),u.memory.textures--),r.remove(Q[de])}r.remove(L)}let X=0;function K(){X=0}function oe(){return X}function H(L){X=L}function $(){const L=X;return L>=o.maxTextures&&lt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),X+=1,L}function q(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function Z(L,E){const Q=r.get(L);if(L.isVideoTexture&&Dt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Q.__version!==L.version){const de=L.image;if(de===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(Q,L,E);return}}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+E)}function re(L,E){const Q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){Ie(Q,L,E);return}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+E)}function se(L,E){const Q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){Ie(Q,L,E);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+E)}function O(L,E){const Q=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&Q.__version!==L.version){Me(Q,L,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+E)}const J={[mu]:s.REPEAT,[ar]:s.CLAMP_TO_EDGE,[ad]:s.MIRRORED_REPEAT},Re={[Tn]:s.NEAREST,[lx]:s.NEAREST_MIPMAP_NEAREST,[Dl]:s.NEAREST_MIPMAP_LINEAR,[Dn]:s.LINEAR,[mf]:s.LINEAR_MIPMAP_NEAREST,[hs]:s.LINEAR_MIPMAP_LINEAR},Ve={[fx]:s.NEVER,[gx]:s.ALWAYS,[dx]:s.LESS,[rh]:s.LEQUAL,[hx]:s.EQUAL,[sh]:s.GEQUAL,[px]:s.GREATER,[mx]:s.NOTEQUAL};function Fe(L,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Dn||E.magFilter===mf||E.magFilter===Dl||E.magFilter===hs||E.minFilter===Dn||E.minFilter===mf||E.minFilter===Dl||E.minFilter===hs)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,J[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,J[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,J[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Re[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Re[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Ve[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==Dl&&E.minFilter!==hs||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ae(L,E){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",I));const de=E.source;let ve=S.get(de);ve===void 0&&(ve={},S.set(de,ve));const Ee=q(E);if(Ee!==L.__cacheKey){ve[Ee]===void 0&&(ve[Ee]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),ve[Ee].usedTimes++;const Ue=ve[L.__cacheKey];Ue!==void 0&&(ve[L.__cacheKey].usedTimes--,Ue.usedTimes===0&&k(E)),L.__cacheKey=Ee,L.__webglTexture=ve[Ee].texture}return Q}function me(L,E,Q){return Math.floor(Math.floor(L/Q)/E)}function he(L,E,Q,de){const Ee=L.updateRanges;if(Ee.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,Q,de,E.data);else{Ee.sort((He,Pe)=>He.start-Pe.start);let Ue=0;for(let He=1;He<Ee.length;He++){const Pe=Ee[Ue],Te=Ee[He],at=Pe.start+Pe.count,ft=me(Te.start,E.width,4),yt=me(Pe.start,E.width,4);Te.start<=at+1&&ft===yt&&me(Te.start+Te.count-1,E.width,4)===ft?Pe.count=Math.max(Pe.count,Te.start+Te.count-Pe.start):(++Ue,Ee[Ue]=Te)}Ee.length=Ue+1;const ce=t.getParameter(s.UNPACK_ROW_LENGTH),pe=t.getParameter(s.UNPACK_SKIP_PIXELS),ze=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let He=0,Pe=Ee.length;He<Pe;He++){const Te=Ee[He],at=Math.floor(Te.start/4),ft=Math.ceil(Te.count/4),yt=at%E.width,W=Math.floor(at/E.width),Ce=ft,fe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,yt),t.pixelStorei(s.UNPACK_SKIP_ROWS,W),t.texSubImage2D(s.TEXTURE_2D,0,yt,W,Ce,fe,Q,de,E.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ce),t.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,ze)}}function Ie(L,E,Q){let de=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(de=s.TEXTURE_3D);const ve=ae(L,E),Ee=E.source;t.bindTexture(de,L.__webglTexture,s.TEXTURE0+Q);const Ue=r.get(Ee);if(Ee.version!==Ue.__version||ve===!0){if(t.activeTexture(s.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const fe=Ct.getPrimaries(Ct.workingColorSpace),ke=E.colorSpace===kr?null:Ct.getPrimaries(E.colorSpace),Le=E.colorSpace===kr||fe===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let pe=_(E.image,!1,o.maxTextureSize);pe=Oe(E,pe);const ze=l.convert(E.format,E.colorSpace),He=l.convert(E.type);let Pe=P(E.internalFormat,ze,He,E.normalized,E.colorSpace,E.isVideoTexture);Fe(de,E);let Te;const at=E.mipmaps,ft=E.isVideoTexture!==!0,yt=Ue.__version===void 0||ve===!0,W=Ee.dataReady,Ce=D(E,pe);if(E.isDepthTexture)Pe=B(E.format===ps,E.type),yt&&(ft?t.texStorage2D(s.TEXTURE_2D,1,Pe,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,Pe,pe.width,pe.height,0,ze,He,null));else if(E.isDataTexture)if(at.length>0){ft&&yt&&t.texStorage2D(s.TEXTURE_2D,Ce,Pe,at[0].width,at[0].height);for(let fe=0,ke=at.length;fe<ke;fe++)Te=at[fe],ft?W&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,Te.width,Te.height,ze,He,Te.data):t.texImage2D(s.TEXTURE_2D,fe,Pe,Te.width,Te.height,0,ze,He,Te.data);E.generateMipmaps=!1}else ft?(yt&&t.texStorage2D(s.TEXTURE_2D,Ce,Pe,pe.width,pe.height),W&&he(E,pe,ze,He)):t.texImage2D(s.TEXTURE_2D,0,Pe,pe.width,pe.height,0,ze,He,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ft&&yt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Pe,at[0].width,at[0].height,pe.depth);for(let fe=0,ke=at.length;fe<ke;fe++)if(Te=at[fe],E.format!==Ai)if(ze!==null)if(ft){if(W)if(E.layerUpdates.size>0){const Le=U0(Te.width,Te.height,E.format,E.type);for(const _e of E.layerUpdates){const $e=Te.data.subarray(_e*Le/Te.data.BYTES_PER_ELEMENT,(_e+1)*Le/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,_e,Te.width,Te.height,1,ze,$e)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Te.width,Te.height,pe.depth,ze,Te.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,Pe,Te.width,Te.height,pe.depth,0,Te.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?W&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Te.width,Te.height,pe.depth,ze,He,Te.data):t.texImage3D(s.TEXTURE_2D_ARRAY,fe,Pe,Te.width,Te.height,pe.depth,0,ze,He,Te.data)}else{ft&&yt&&t.texStorage2D(s.TEXTURE_2D,Ce,Pe,at[0].width,at[0].height);for(let fe=0,ke=at.length;fe<ke;fe++)Te=at[fe],E.format!==Ai?ze!==null?ft?W&&t.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,Te.width,Te.height,ze,Te.data):t.compressedTexImage2D(s.TEXTURE_2D,fe,Pe,Te.width,Te.height,0,Te.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?W&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,Te.width,Te.height,ze,He,Te.data):t.texImage2D(s.TEXTURE_2D,fe,Pe,Te.width,Te.height,0,ze,He,Te.data)}else if(E.isDataArrayTexture)if(ft){if(yt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Pe,pe.width,pe.height,pe.depth),W)if(E.layerUpdates.size>0){const fe=U0(pe.width,pe.height,E.format,E.type);for(const ke of E.layerUpdates){const Le=pe.data.subarray(ke*fe/pe.data.BYTES_PER_ELEMENT,(ke+1)*fe/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ke,pe.width,pe.height,1,ze,He,Le)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,ze,He,pe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,pe.width,pe.height,pe.depth,0,ze,He,pe.data);else if(E.isData3DTexture)ft?(yt&&t.texStorage3D(s.TEXTURE_3D,Ce,Pe,pe.width,pe.height,pe.depth),W&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,ze,He,pe.data)):t.texImage3D(s.TEXTURE_3D,0,Pe,pe.width,pe.height,pe.depth,0,ze,He,pe.data);else if(E.isFramebufferTexture){if(yt)if(ft)t.texStorage2D(s.TEXTURE_2D,Ce,Pe,pe.width,pe.height);else{let fe=pe.width,ke=pe.height;for(let Le=0;Le<Ce;Le++)t.texImage2D(s.TEXTURE_2D,Le,Pe,fe,ke,0,ze,He,null),fe>>=1,ke>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const fe=s.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),pe.parentNode!==fe){fe.appendChild(pe),x.add(E),fe.onpaint=dt=>{const Ht=dt.changedElements;for(const Nt of x)Ht.includes(Nt.image)&&(Nt.needsUpdate=!0)},fe.requestPaint();return}const ke=0,Le=s.RGBA,_e=s.RGBA,$e=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,ke,Le,_e,$e,pe),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(at.length>0){if(ft&&yt){const fe=Yt(at[0]);t.texStorage2D(s.TEXTURE_2D,Ce,Pe,fe.width,fe.height)}for(let fe=0,ke=at.length;fe<ke;fe++)Te=at[fe],ft?W&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,ze,He,Te):t.texImage2D(s.TEXTURE_2D,fe,Pe,ze,He,Te);E.generateMipmaps=!1}else if(ft){if(yt){const fe=Yt(pe);t.texStorage2D(s.TEXTURE_2D,Ce,Pe,fe.width,fe.height)}W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,He,pe)}else t.texImage2D(s.TEXTURE_2D,0,Pe,ze,He,pe);y(E)&&C(de),Ue.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Me(L,E,Q){if(E.image.length!==6)return;const de=ae(L,E),ve=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Q);const Ee=r.get(ve);if(ve.version!==Ee.__version||de===!0){t.activeTexture(s.TEXTURE0+Q);const Ue=Ct.getPrimaries(Ct.workingColorSpace),ce=E.colorSpace===kr?null:Ct.getPrimaries(E.colorSpace),pe=E.colorSpace===kr||Ue===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const ze=E.isCompressedTexture||E.image[0].isCompressedTexture,He=E.image[0]&&E.image[0].isDataTexture,Pe=[];for(let _e=0;_e<6;_e++)!ze&&!He?Pe[_e]=_(E.image[_e],!0,o.maxCubemapSize):Pe[_e]=He?E.image[_e].image:E.image[_e],Pe[_e]=Oe(E,Pe[_e]);const Te=Pe[0],at=l.convert(E.format,E.colorSpace),ft=l.convert(E.type),yt=P(E.internalFormat,at,ft,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,Ce=Ee.__version===void 0||de===!0,fe=ve.dataReady;let ke=D(E,Te);Fe(s.TEXTURE_CUBE_MAP,E);let Le;if(ze){W&&Ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,yt,Te.width,Te.height);for(let _e=0;_e<6;_e++){Le=Pe[_e].mipmaps;for(let $e=0;$e<Le.length;$e++){const dt=Le[$e];E.format!==Ai?at!==null?W?fe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e,0,0,dt.width,dt.height,at,dt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e,yt,dt.width,dt.height,0,dt.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e,0,0,dt.width,dt.height,at,ft,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e,yt,dt.width,dt.height,0,at,ft,dt.data)}}}else{if(Le=E.mipmaps,W&&Ce){Le.length>0&&ke++;const _e=Yt(Pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,yt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(He){W?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Pe[_e].width,Pe[_e].height,at,ft,Pe[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,yt,Pe[_e].width,Pe[_e].height,0,at,ft,Pe[_e].data);for(let $e=0;$e<Le.length;$e++){const Ht=Le[$e].image[_e].image;W?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e+1,0,0,Ht.width,Ht.height,at,ft,Ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e+1,yt,Ht.width,Ht.height,0,at,ft,Ht.data)}}else{W?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,at,ft,Pe[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,yt,at,ft,Pe[_e]);for(let $e=0;$e<Le.length;$e++){const dt=Le[$e];W?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e+1,0,0,at,ft,dt.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e+1,yt,at,ft,dt.image[_e])}}}y(E)&&C(s.TEXTURE_CUBE_MAP),Ee.__version=ve.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function we(L,E,Q,de,ve,Ee){const Ue=l.convert(Q.format,Q.colorSpace),ce=l.convert(Q.type),pe=P(Q.internalFormat,Ue,ce,Q.normalized,Q.colorSpace),ze=r.get(E),He=r.get(Q);if(He.__renderTarget=E,!ze.__hasExternalTextures){const Pe=Math.max(1,E.width>>Ee),Te=Math.max(1,E.height>>Ee);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?t.texImage3D(ve,Ee,pe,Pe,Te,E.depth,0,Ue,ce,null):t.texImage2D(ve,Ee,pe,Pe,Te,0,Ue,ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),gt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ve,He.__webglTexture,0,_t(E)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,ve,He.__webglTexture,Ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(L,E,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const de=E.depthTexture,ve=de&&de.isDepthTexture?de.type:null,Ee=B(E.stencilBuffer,ve),Ue=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;gt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t(E),Ee,E.width,E.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t(E),Ee,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,L)}else{const de=E.textures;for(let ve=0;ve<de.length;ve++){const Ee=de[ve],Ue=l.convert(Ee.format,Ee.colorSpace),ce=l.convert(Ee.type),pe=P(Ee.internalFormat,Ue,ce,Ee.normalized,Ee.colorSpace);gt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t(E),pe,E.width,E.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t(E),pe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,pe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function it(L,E,Q){const de=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=r.get(E.depthTexture);if(ve.__renderTarget=E,(!ve.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),de){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),ve.__webglTexture===void 0){ve.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,E.depthTexture);const ze=l.convert(E.depthTexture.format),He=l.convert(E.depthTexture.type);let Pe;E.depthTexture.format===hr?Pe=s.DEPTH_COMPONENT24:E.depthTexture.format===ps&&(Pe=s.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Pe,E.width,E.height,0,ze,He,null)}}else Z(E.depthTexture,0);const Ee=ve.__webglTexture,Ue=_t(E),ce=de?s.TEXTURE_CUBE_MAP_POSITIVE_X+Q:s.TEXTURE_2D,pe=E.depthTexture.format===ps?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===hr)gt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ce,Ee,0,Ue):s.framebufferTexture2D(s.FRAMEBUFFER,pe,ce,Ee,0);else if(E.depthTexture.format===ps)gt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ce,Ee,0,Ue):s.framebufferTexture2D(s.FRAMEBUFFER,pe,ce,Ee,0);else throw new Error("Unknown depthTexture format")}function ht(L){const E=r.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const de=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),de){const ve=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,de.removeEventListener("dispose",ve)};de.addEventListener("dispose",ve),E.__depthDisposeCallback=ve}E.__boundDepthTexture=de}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let de=0;de<6;de++)it(E.__webglFramebuffer[de],L,de);else{const de=L.texture.mipmaps;de&&de.length>0?it(E.__webglFramebuffer[0],L,0):it(E.__webglFramebuffer,L,0)}else if(Q){E.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[de]),E.__webglDepthbuffer[de]===void 0)E.__webglDepthbuffer[de]=s.createRenderbuffer(),ot(E.__webglDepthbuffer[de],L,!1);else{const ve=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,Ee)}}else{const de=L.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),ot(E.__webglDepthbuffer,L,!1);else{const ve=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,Ee)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(L,E,Q){const de=r.get(L);E!==void 0&&we(de.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&ht(L)}function ct(L){const E=L.texture,Q=r.get(L),de=r.get(E);L.addEventListener("dispose",w);const ve=L.textures,Ee=L.isWebGLCubeRenderTarget===!0,Ue=ve.length>1;if(Ue||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=E.version,u.memory.textures++),Ee){Q.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[ce]=[];for(let pe=0;pe<E.mipmaps.length;pe++)Q.__webglFramebuffer[ce][pe]=s.createFramebuffer()}else Q.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)Q.__webglFramebuffer[ce]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let ce=0,pe=ve.length;ce<pe;ce++){const ze=r.get(ve[ce]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&gt(L)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ce=0;ce<ve.length;ce++){const pe=ve[ce];Q.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[ce]);const ze=l.convert(pe.format,pe.colorSpace),He=l.convert(pe.type),Pe=P(pe.internalFormat,ze,He,pe.normalized,pe.colorSpace,L.isXRRenderTarget===!0),Te=_t(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,Pe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,Q.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(Q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)we(Q.__webglFramebuffer[ce][pe],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe);else we(Q.__webglFramebuffer[ce],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);y(E)&&C(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let ce=0,pe=ve.length;ce<pe;ce++){const ze=ve[ce],He=r.get(ze);let Pe=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Pe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Pe,He.__webglTexture),Fe(Pe,ze),we(Q.__webglFramebuffer,L,ze,s.COLOR_ATTACHMENT0+ce,Pe,0),y(ze)&&C(Pe)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,de.__webglTexture),Fe(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)we(Q.__webglFramebuffer[pe],L,E,s.COLOR_ATTACHMENT0,ce,pe);else we(Q.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,ce,0);y(E)&&C(ce),t.unbindTexture()}L.depthBuffer&&ht(L)}function kt(L){const E=L.textures;for(let Q=0,de=E.length;Q<de;Q++){const ve=E[Q];if(y(ve)){const Ee=b(L),Ue=r.get(ve).__webglTexture;t.bindTexture(Ee,Ue),C(Ee),t.unbindTexture()}}}const Ut=[],qe=[];function z(L){if(L.samples>0){if(gt(L)===!1){const E=L.textures,Q=L.width,de=L.height;let ve=s.COLOR_BUFFER_BIT;const Ee=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=r.get(L),ce=E.length>1;if(ce)for(let ze=0;ze<E.length;ze++)t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const pe=L.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let ze=0;ze<E.length;ze++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[ze]);const He=r.get(E[ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,He,0)}s.blitFramebuffer(0,0,Q,de,0,0,Q,de,ve,s.NEAREST),h===!0&&(Ut.length=0,qe.length=0,Ut.push(s.COLOR_ATTACHMENT0+ze),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ut.push(Ee),qe.push(Ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,qe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ce)for(let ze=0;ze<E.length;ze++){t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[ze]);const He=r.get(E[ze]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,He,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function _t(L){return Math.min(o.maxSamples,L.samples)}function gt(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Dt(L){const E=u.render.frame;v.get(L)!==E&&(v.set(L,E),L.update())}function Oe(L,E){const Q=L.colorSpace,de=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==_u&&Q!==kr&&(Ct.getTransfer(Q)===zt?(de!==Ai||ve!==ii)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",Q)),E}function Yt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=$,this.resetTextureUnits=K,this.getTextureUnits=oe,this.setTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=re,this.setTexture3D=se,this.setTextureCube=O,this.rebindTextures=bt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=we,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Tw(s,e){function t(r,o=kr){let l;const u=Ct.getTransfer(o);if(r===ii)return s.UNSIGNED_BYTE;if(r===Qd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===eh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===gg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===vg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===pg)return s.BYTE;if(r===mg)return s.SHORT;if(r===ya)return s.UNSIGNED_SHORT;if(r===Jd)return s.INT;if(r===Gi)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===dr)return s.HALF_FLOAT;if(r===_g)return s.ALPHA;if(r===xg)return s.RGB;if(r===Ai)return s.RGBA;if(r===hr)return s.DEPTH_COMPONENT;if(r===ps)return s.DEPTH_STENCIL;if(r===yg)return s.RED;if(r===th)return s.RED_INTEGER;if(r===gs)return s.RG;if(r===nh)return s.RG_INTEGER;if(r===ih)return s.RGBA_INTEGER;if(r===uu||r===cu||r===fu||r===du)if(u===zt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===uu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===cu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===du)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===uu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===cu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===du)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ld||r===ud||r===cd||r===fd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===ld)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ud)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===cd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dd||r===hd||r===pd||r===md||r===gd||r===gu||r===vd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===dd||r===hd)return u===zt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===pd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===md)return l.COMPRESSED_R11_EAC;if(r===gd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===gu)return l.COMPRESSED_RG11_EAC;if(r===vd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===_d||r===xd||r===yd||r===Sd||r===Md||r===Ed||r===wd||r===Td||r===Ad||r===Cd||r===Rd||r===Pd||r===bd||r===Ld)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===_d)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Md)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ed)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Td)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ad)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Rd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ld)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dd||r===Nd||r===Id)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Dd)return u===zt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Id)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ud||r===Fd||r===vu||r===Od)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Ud)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Fd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vu)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Od)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Sa?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Aw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Rw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new bg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ci({vertexShader:Aw,fragmentShader:Cw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ge(new Hi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pw extends _s{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,v=null,x=null,g=null,S=null,M=null;const A=typeof XRWebGLBinding<"u",_=new Rw,y={},C=t.getContextAttributes();let b=null,P=null;const B=[],D=[],I=new Ye;let w=null;const N=new di;N.viewport=new sn;const k=new di;k.viewport=new sn;const U=[N,k],X=new By;let K=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let me=B[ae];return me===void 0&&(me=new Ef,B[ae]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ae){let me=B[ae];return me===void 0&&(me=new Ef,B[ae]=me),me.getGripSpace()},this.getHand=function(ae){let me=B[ae];return me===void 0&&(me=new Ef,B[ae]=me),me.getHandSpace()};function H(ae){const me=D.indexOf(ae.inputSource);if(me===-1)return;const he=B[me];he!==void 0&&(he.update(ae.inputSource,ae.frame,p||u),he.dispatchEvent({type:ae.type,data:ae.inputSource}))}function $(){o.removeEventListener("select",H),o.removeEventListener("selectstart",H),o.removeEventListener("selectend",H),o.removeEventListener("squeeze",H),o.removeEventListener("squeezestart",H),o.removeEventListener("squeezeend",H),o.removeEventListener("end",$),o.removeEventListener("inputsourceschange",q);for(let ae=0;ae<B.length;ae++){const me=D[ae];me!==null&&(D[ae]=null,B[ae].disconnect(me))}K=null,oe=null,_.reset();for(const ae in y)delete y[ae];e.setRenderTarget(b),S=null,g=null,x=null,o=null,P=null,Fe.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){f=ae,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(o,t)),x},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(b=e.getRenderTarget(),o.addEventListener("select",H),o.addEventListener("selectstart",H),o.addEventListener("selectend",H),o.addEventListener("squeeze",H),o.addEventListener("squeezestart",H),o.addEventListener("squeezeend",H),o.addEventListener("end",$),o.addEventListener("inputsourceschange",q),C.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(I),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ie=null,Me=null;C.depth&&(Me=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=C.stencil?ps:hr,Ie=C.stencil?Sa:Gi);const we={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:l};x=this.getBinding(),g=x.createProjectionLayer(we),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Vi(g.textureWidth,g.textureHeight,{format:Ai,type:ii,depthTexture:new vo(g.textureWidth,g.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const he={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,he),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Vi(S.framebufferWidth,S.framebufferHeight,{format:Ai,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),Fe.setContext(o),Fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(ae){for(let me=0;me<ae.removed.length;me++){const he=ae.removed[me],Ie=D.indexOf(he);Ie>=0&&(D[Ie]=null,B[Ie].disconnect(he))}for(let me=0;me<ae.added.length;me++){const he=ae.added[me];let Ie=D.indexOf(he);if(Ie===-1){for(let we=0;we<B.length;we++)if(we>=D.length){D.push(he),Ie=we;break}else if(D[we]===null){D[we]=he,Ie=we;break}if(Ie===-1)break}const Me=B[Ie];Me&&Me.connect(he)}}const Z=new V,re=new V;function se(ae,me,he){Z.setFromMatrixPosition(me.matrixWorld),re.setFromMatrixPosition(he.matrixWorld);const Ie=Z.distanceTo(re),Me=me.projectionMatrix.elements,we=he.projectionMatrix.elements,ot=Me[14]/(Me[10]-1),it=Me[14]/(Me[10]+1),ht=(Me[9]+1)/Me[5],bt=(Me[9]-1)/Me[5],ct=(Me[8]-1)/Me[0],kt=(we[8]+1)/we[0],Ut=ot*ct,qe=ot*kt,z=Ie/(-ct+kt),_t=z*-ct;if(me.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(_t),ae.translateZ(z),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Me[10]===-1)ae.projectionMatrix.copy(me.projectionMatrix),ae.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const gt=ot+z,Dt=it+z,Oe=Ut-_t,Yt=qe+(Ie-_t),L=ht*it/Dt*gt,E=bt*it/Dt*gt;ae.projectionMatrix.makePerspective(Oe,Yt,L,E,gt,Dt),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function O(ae,me){me===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(me.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let me=ae.near,he=ae.far;_.texture!==null&&(_.depthNear>0&&(me=_.depthNear),_.depthFar>0&&(he=_.depthFar)),X.near=k.near=N.near=me,X.far=k.far=N.far=he,(K!==X.near||oe!==X.far)&&(o.updateRenderState({depthNear:X.near,depthFar:X.far}),K=X.near,oe=X.far),X.layers.mask=ae.layers.mask|6,N.layers.mask=X.layers.mask&-5,k.layers.mask=X.layers.mask&-3;const Ie=ae.parent,Me=X.cameras;O(X,Ie);for(let we=0;we<Me.length;we++)O(Me[we],Ie);Me.length===2?se(X,N,k):X.projectionMatrix.copy(N.projectionMatrix),J(ae,X,Ie)};function J(ae,me,he){he===null?ae.matrix.copy(me.matrixWorld):(ae.matrix.copy(he.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(me.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(me.projectionMatrix),ae.projectionMatrixInverse.copy(me.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Vd*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(g===null&&S===null))return h},this.setFoveation=function(ae){h=ae,g!==null&&(g.fixedFoveation=ae),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ae)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(X)},this.getCameraTexture=function(ae){return y[ae]};let Re=null;function Ve(ae,me){if(v=me.getViewerPose(p||u),M=me,v!==null){const he=v.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let Ie=!1;he.length!==X.cameras.length&&(X.cameras.length=0,Ie=!0);for(let it=0;it<he.length;it++){const ht=he[it];let bt=null;if(S!==null)bt=S.getViewport(ht);else{const kt=x.getViewSubImage(g,ht);bt=kt.viewport,it===0&&(e.setRenderTargetTextures(P,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(P))}let ct=U[it];ct===void 0&&(ct=new di,ct.layers.enable(it),ct.viewport=new sn,U[it]=ct),ct.matrix.fromArray(ht.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(ht.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(bt.x,bt.y,bt.width,bt.height),it===0&&(X.matrix.copy(ct.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ie===!0&&X.cameras.push(ct)}const Me=o.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){x=r.getBinding();const it=x.getDepthInformation(he[0]);it&&it.isValid&&it.texture&&_.init(it,o.renderState)}if(Me&&Me.includes("camera-access")&&A){e.state.unbindTexture(),x=r.getBinding();for(let it=0;it<he.length;it++){const ht=he[it].camera;if(ht){let bt=y[ht];bt||(bt=new bg,y[ht]=bt);const ct=x.getCameraImage(ht);bt.sourceTexture=ct}}}}for(let he=0;he<B.length;he++){const Ie=D[he],Me=B[he];Ie!==null&&Me!==void 0&&Me.update(Ie,me,p||u)}Re&&Re(ae,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),M=null}const Fe=new Wg;Fe.setAnimationLoop(Ve),this.setAnimationLoop=function(ae){Re=ae},this.dispose=function(){}}}const bw=new Kt,$g=new vt;$g.set(-1,0,0,0,1,0,0,0,1);function Lw(s,e){function t(_,y){_.matrixAutoUpdate===!0&&_.updateMatrix(),y.value.copy(_.matrix)}function r(_,y){y.color.getRGB(_.fogColor.value,Vg(s)),y.isFog?(_.fogNear.value=y.near,_.fogFar.value=y.far):y.isFogExp2&&(_.fogDensity.value=y.density)}function o(_,y,C,b,P){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?l(_,y):y.isMeshLambertMaterial?(l(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(_,y),x(_,y)):y.isMeshPhongMaterial?(l(_,y),v(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(_,y),g(_,y),y.isMeshPhysicalMaterial&&S(_,y,P)):y.isMeshMatcapMaterial?(l(_,y),M(_,y)):y.isMeshDepthMaterial?l(_,y):y.isMeshDistanceMaterial?(l(_,y),A(_,y)):y.isMeshNormalMaterial?l(_,y):y.isLineBasicMaterial?(u(_,y),y.isLineDashedMaterial&&f(_,y)):y.isPointsMaterial?h(_,y,C,b):y.isSpriteMaterial?p(_,y):y.isShadowMaterial?(_.color.value.copy(y.color),_.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(_,y){_.opacity.value=y.opacity,y.color&&_.diffuse.value.copy(y.color),y.emissive&&_.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(_.map.value=y.map,t(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.bumpMap&&(_.bumpMap.value=y.bumpMap,t(y.bumpMap,_.bumpMapTransform),_.bumpScale.value=y.bumpScale,y.side===zn&&(_.bumpScale.value*=-1)),y.normalMap&&(_.normalMap.value=y.normalMap,t(y.normalMap,_.normalMapTransform),_.normalScale.value.copy(y.normalScale),y.side===zn&&_.normalScale.value.negate()),y.displacementMap&&(_.displacementMap.value=y.displacementMap,t(y.displacementMap,_.displacementMapTransform),_.displacementScale.value=y.displacementScale,_.displacementBias.value=y.displacementBias),y.emissiveMap&&(_.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,_.emissiveMapTransform)),y.specularMap&&(_.specularMap.value=y.specularMap,t(y.specularMap,_.specularMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest);const C=e.get(y),b=C.envMap,P=C.envMapRotation;b&&(_.envMap.value=b,_.envMapRotation.value.setFromMatrix4(bw.makeRotationFromEuler(P)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply($g),_.reflectivity.value=y.reflectivity,_.ior.value=y.ior,_.refractionRatio.value=y.refractionRatio),y.lightMap&&(_.lightMap.value=y.lightMap,_.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,_.lightMapTransform)),y.aoMap&&(_.aoMap.value=y.aoMap,_.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,_.aoMapTransform))}function u(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,y.map&&(_.map.value=y.map,t(y.map,_.mapTransform))}function f(_,y){_.dashSize.value=y.dashSize,_.totalSize.value=y.dashSize+y.gapSize,_.scale.value=y.scale}function h(_,y,C,b){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.size.value=y.size*C,_.scale.value=b*.5,y.map&&(_.map.value=y.map,t(y.map,_.uvTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function p(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.rotation.value=y.rotation,y.map&&(_.map.value=y.map,t(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function v(_,y){_.specular.value.copy(y.specular),_.shininess.value=Math.max(y.shininess,1e-4)}function x(_,y){y.gradientMap&&(_.gradientMap.value=y.gradientMap)}function g(_,y){_.metalness.value=y.metalness,y.metalnessMap&&(_.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,_.metalnessMapTransform)),_.roughness.value=y.roughness,y.roughnessMap&&(_.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,_.roughnessMapTransform)),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)}function S(_,y,C){_.ior.value=y.ior,y.sheen>0&&(_.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),_.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(_.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,_.sheenColorMapTransform)),y.sheenRoughnessMap&&(_.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,_.sheenRoughnessMapTransform))),y.clearcoat>0&&(_.clearcoat.value=y.clearcoat,_.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(_.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,_.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(_.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===zn&&_.clearcoatNormalScale.value.negate())),y.dispersion>0&&(_.dispersion.value=y.dispersion),y.iridescence>0&&(_.iridescence.value=y.iridescence,_.iridescenceIOR.value=y.iridescenceIOR,_.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(_.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,_.iridescenceMapTransform)),y.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),y.transmission>0&&(_.transmission.value=y.transmission,_.transmissionSamplerMap.value=C.texture,_.transmissionSamplerSize.value.set(C.width,C.height),y.transmissionMap&&(_.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,_.transmissionMapTransform)),_.thickness.value=y.thickness,y.thicknessMap&&(_.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=y.attenuationDistance,_.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(_.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(_.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=y.specularIntensity,_.specularColor.value.copy(y.specularColor),y.specularColorMap&&(_.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,_.specularColorMapTransform)),y.specularIntensityMap&&(_.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,y){y.matcap&&(_.matcap.value=y.matcap)}function A(_,y){const C=e.get(y).light;_.referencePosition.value.setFromMatrixPosition(C.matrixWorld),_.nearDistance.value=C.shadow.camera.near,_.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Dw(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(C,b){const P=b.program;r.uniformBlockBinding(C,P)}function p(C,b){let P=o[C.id];P===void 0&&(M(C),P=v(C),o[C.id]=P,C.addEventListener("dispose",_));const B=b.program;r.updateUBOMapping(C,B);const D=e.render.frame;l[C.id]!==D&&(g(C),l[C.id]=D)}function v(C){const b=x();C.__bindingPointIndex=b;const P=s.createBuffer(),B=C.__size,D=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,B,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,P),P}function x(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const b=o[C.id],P=C.uniforms,B=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let D=0,I=P.length;D<I;D++){const w=Array.isArray(P[D])?P[D]:[P[D]];for(let N=0,k=w.length;N<k;N++){const U=w[N];if(S(U,D,N,B)===!0){const X=U.__offset,K=Array.isArray(U.value)?U.value:[U.value];let oe=0;for(let H=0;H<K.length;H++){const $=K[H],q=A($);typeof $=="number"||typeof $=="boolean"?(U.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,X+oe,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=0,U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=0,U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=0):ArrayBuffer.isView($)?U.__data.set(new $.constructor($.buffer,$.byteOffset,U.__data.length)):($.toArray(U.__data,oe),oe+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,X,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(C,b,P,B){const D=C.value,I=b+"_"+P;if(B[I]===void 0)return typeof D=="number"||typeof D=="boolean"?B[I]=D:ArrayBuffer.isView(D)?B[I]=D.slice():B[I]=D.clone(),!0;{const w=B[I];if(typeof D=="number"||typeof D=="boolean"){if(w!==D)return B[I]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(w.equals(D)===!1)return w.copy(D),!0}}return!1}function M(C){const b=C.uniforms;let P=0;const B=16;for(let I=0,w=b.length;I<w;I++){const N=Array.isArray(b[I])?b[I]:[b[I]];for(let k=0,U=N.length;k<U;k++){const X=N[k],K=Array.isArray(X.value)?X.value:[X.value];for(let oe=0,H=K.length;oe<H;oe++){const $=K[oe],q=A($),Z=P%B,re=Z%q.boundary,se=Z+re;P+=re,se!==0&&B-se<q.storage&&(P+=B-se),X.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=P,P+=q.storage}}}const D=P%B;return D>0&&(P+=B-D),C.__size=P,C.__cache={},this}function A(C){const b={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(b.boundary=4,b.storage=4):C.isVector2?(b.boundary=8,b.storage=8):C.isVector3||C.isColor?(b.boundary=16,b.storage=12):C.isVector4?(b.boundary=16,b.storage=16):C.isMatrix3?(b.boundary=48,b.storage=48):C.isMatrix4?(b.boundary=64,b.storage=64):C.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(b.boundary=16,b.storage=C.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",C),b}function _(C){const b=C.target;b.removeEventListener("dispose",_);const P=u.indexOf(b.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function y(){for(const C in o)s.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:h,update:p,dispose:y}}const Nw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ui=null;function Iw(){return Ui===null&&(Ui=new Gx(Nw,16,16,gs,dr),Ui.name="DFG_LUT",Ui.minFilter=Dn,Ui.magFilter=Dn,Ui.wrapS=ar,Ui.wrapT=ar,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}class Uw{constructor(e={}){const{canvas:t=_x(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:S=ii}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const A=S,_=new Set([ih,nh,th]),y=new Set([ii,Gi,ya,Sa,Qd,eh]),C=new Uint32Array(4),b=new Int32Array(4),P=new V;let B=null,D=null;const I=[],w=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let U=!1,X=null;this._outputColorSpace=Sn;let K=0,oe=0,H=null,$=-1,q=null;const Z=new sn,re=new sn;let se=null;const O=new wt(0);let J=0,Re=t.width,Ve=t.height,Fe=1,ae=null,me=null;const he=new sn(0,0,Re,Ve),Ie=new sn(0,0,Re,Ve);let Me=!1;const we=new uh;let ot=!1,it=!1;const ht=new Kt,bt=new V,ct=new sn,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function qe(){return H===null?Fe:1}let z=r;function _t(R,j){return t.getContext(R,j)}try{const R={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kd}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",dt,!1),z===null){const j="webgl2";if(z=_t(j,R),z===null)throw _t(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw At("WebGLRenderer: "+R.message),R}let gt,Dt,Oe,Yt,L,E,Q,de,ve,Ee,Ue,ce,pe,ze,He,Pe,Te,at,ft,yt,W,Ce,fe;function ke(){gt=new I1(z),gt.init(),W=new Tw(z,gt),Dt=new A1(z,gt,e,W),Oe=new Ew(z,gt),Dt.reversedDepthBuffer&&g&&Oe.buffers.depth.setReversed(!0),Yt=new O1(z),L=new uw,E=new ww(z,gt,Oe,L,Dt,W,Yt),Q=new N1(k),de=new Vy(z),Ce=new w1(z,de),ve=new U1(z,de,Yt,Ce),Ee=new z1(z,ve,de,Ce,Yt),at=new B1(z,Dt,E),He=new C1(L),Ue=new lw(k,Q,gt,Dt,Ce,He),ce=new Lw(k,L),pe=new fw,ze=new vw(gt),Te=new E1(k,Q,Oe,Ee,M,h),Pe=new Mw(k,Ee,Dt),fe=new Dw(z,Yt,Dt,Oe),ft=new T1(z,gt,Yt),yt=new F1(z,gt,Yt),Yt.programs=Ue.programs,k.capabilities=Dt,k.extensions=gt,k.properties=L,k.renderLists=pe,k.shadowMap=Pe,k.state=Oe,k.info=Yt}ke(),A!==ii&&(N=new V1(A,t.width,t.height,o,l));const Le=new Pw(k,z);this.xr=Le,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=gt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=gt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(R){R!==void 0&&(Fe=R,this.setSize(Re,Ve,!1))},this.getSize=function(R){return R.set(Re,Ve)},this.setSize=function(R,j,le=!0){if(Le.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=R,Ve=j,t.width=Math.floor(R*Fe),t.height=Math.floor(j*Fe),le===!0&&(t.style.width=R+"px",t.style.height=j+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(Re*Fe,Ve*Fe).floor()},this.setDrawingBufferSize=function(R,j,le){Re=R,Ve=j,Fe=le,t.width=Math.floor(R*le),t.height=Math.floor(j*le),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(A===ii){At("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){lt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(Z)},this.getViewport=function(R){return R.copy(he)},this.setViewport=function(R,j,le,ne){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,j,le,ne),Oe.viewport(Z.copy(he).multiplyScalar(Fe).round())},this.getScissor=function(R){return R.copy(Ie)},this.setScissor=function(R,j,le,ne){R.isVector4?Ie.set(R.x,R.y,R.z,R.w):Ie.set(R,j,le,ne),Oe.scissor(re.copy(Ie).multiplyScalar(Fe).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){Oe.setScissorTest(Me=R)},this.setOpaqueSort=function(R){ae=R},this.setTransparentSort=function(R){me=R},this.getClearColor=function(R){return R.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,le=!0){let ne=0;if(R){let te=!1;if(H!==null){const De=H.texture.format;te=_.has(De)}if(te){const De=H.texture.type,Xe=y.has(De),be=Te.getClearColor(),Je=Te.getClearAlpha(),nt=be.r,pt=be.g,mt=be.b;Xe?(C[0]=nt,C[1]=pt,C[2]=mt,C[3]=Je,z.clearBufferuiv(z.COLOR,0,C)):(b[0]=nt,b[1]=pt,b[2]=mt,b[3]=Je,z.clearBufferiv(z.COLOR,0,b))}else ne|=z.COLOR_BUFFER_BIT}j&&(ne|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(ne|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&z.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),X=R},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),Te.dispose(),pe.dispose(),ze.dispose(),L.dispose(),Q.dispose(),Ee.dispose(),Ce.dispose(),fe.dispose(),Ue.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Xr),Le.removeEventListener("sessionend",Ms),Yi.stop()};function _e(R){R.preventDefault(),Su("WebGLRenderer: Context Lost."),U=!0}function $e(){Su("WebGLRenderer: Context Restored."),U=!1;const R=Yt.autoReset,j=Pe.enabled,le=Pe.autoUpdate,ne=Pe.needsUpdate,te=Pe.type;ke(),Yt.autoReset=R,Pe.enabled=j,Pe.autoUpdate=le,Pe.needsUpdate=ne,Pe.type=te}function dt(R){At("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ht(R){const j=R.target;j.removeEventListener("dispose",Ht),Nt(j)}function Nt(R){In(R),L.remove(R)}function In(R){const j=L.get(R).programs;j!==void 0&&(j.forEach(function(le){Ue.releaseProgram(le)}),R.isShaderMaterial&&Ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,le,ne,te,De){j===null&&(j=kt);const Xe=te.isMesh&&te.matrixWorld.determinant()<0,be=La(R,j,le,ne,te);Oe.setMaterial(ne,Xe);let Je=le.index,nt=1;if(ne.wireframe===!0){if(Je=ve.getWireframeAttribute(le),Je===void 0)return;nt=2}const pt=le.drawRange,mt=le.attributes.position;let et=pt.start*nt,Rt=(pt.start+pt.count)*nt;De!==null&&(et=Math.max(et,De.start*nt),Rt=Math.min(Rt,(De.start+De.count)*nt)),Je!==null?(et=Math.max(et,0),Rt=Math.min(Rt,Je.count)):mt!=null&&(et=Math.max(et,0),Rt=Math.min(Rt,mt.count));const Wt=Rt-et;if(Wt<0||Wt===1/0)return;Ce.setup(te,ne,be,le,Je);let $t,Ot=ft;if(Je!==null&&($t=de.get(Je),Ot=yt,Ot.setIndex($t)),te.isMesh)ne.wireframe===!0?(Oe.setLineWidth(ne.wireframeLinewidth*qe()),Ot.setMode(z.LINES)):Ot.setMode(z.TRIANGLES);else if(te.isLine){let ln=ne.linewidth;ln===void 0&&(ln=1),Oe.setLineWidth(ln*qe()),te.isLineSegments?Ot.setMode(z.LINES):te.isLineLoop?Ot.setMode(z.LINE_LOOP):Ot.setMode(z.LINE_STRIP)}else te.isPoints?Ot.setMode(z.POINTS):te.isSprite&&Ot.setMode(z.TRIANGLES);if(te.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const ln=te._multiDrawStarts,Ge=te._multiDrawCounts,Mn=te._multiDrawCount,St=Je?de.get(Je).bytesPerElement:1,kn=L.get(ne).currentProgram.getUniforms();for(let Vn=0;Vn<Mn;Vn++)kn.setValue(z,"_gl_DrawID",Vn),Ot.render(ln[Vn]/St,Ge[Vn])}else if(te.isInstancedMesh)Ot.renderInstances(et,Wt,te.count);else if(le.isInstancedBufferGeometry){const ln=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ge=Math.min(le.instanceCount,ln);Ot.renderInstances(et,Wt,Ge)}else Ot.render(et,Wt)};function ri(R,j,le){R.transparent===!0&&R.side===ni&&R.forceSinglePass===!1?(R.side=zn,R.needsUpdate=!0,Es(R,j,le),R.side=Gr,R.needsUpdate=!0,Es(R,j,le),R.side=ni):Es(R,j,le)}this.compile=function(R,j,le=null){le===null&&(le=R),D=ze.get(le),D.init(j),w.push(D),le.traverseVisible(function(te){te.isLight&&te.layers.test(j.layers)&&(D.pushLight(te),te.castShadow&&D.pushShadow(te))}),R!==le&&R.traverseVisible(function(te){te.isLight&&te.layers.test(j.layers)&&(D.pushLight(te),te.castShadow&&D.pushShadow(te))}),D.setupLights();const ne=new Set;return R.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const De=te.material;if(De)if(Array.isArray(De))for(let Xe=0;Xe<De.length;Xe++){const be=De[Xe];ri(be,le,te),ne.add(be)}else ri(De,le,te),ne.add(De)}),D=w.pop(),ne},this.compileAsync=function(R,j,le=null){const ne=this.compile(R,j,le);return new Promise(te=>{function De(){if(ne.forEach(function(Xe){L.get(Xe).currentProgram.isReady()&&ne.delete(Xe)}),ne.size===0){te(R);return}setTimeout(De,10)}gt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Xi=null;function Ss(R){Xi&&Xi(R)}function Xr(){Yi.stop()}function Ms(){Yi.start()}const Yi=new Wg;Yi.setAnimationLoop(Ss),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(R){Xi=R,Le.setAnimationLoop(R),R===null?Yi.stop():Yi.start()},Le.addEventListener("sessionstart",Xr),Le.addEventListener("sessionend",Ms),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;X!==null&&X.renderStart(R,j);const le=Le.enabled===!0&&Le.isPresenting===!0,ne=N!==null&&(H===null||le)&&N.begin(k,H);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(j),j=Le.getCamera()),R.isScene===!0&&R.onBeforeRender(k,R,j,H),D=ze.get(R,w.length),D.init(j),D.state.textureUnits=E.getTextureUnits(),w.push(D),ht.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),we.setFromProjectionMatrix(ht,zi,j.reversedDepth),it=this.localClippingEnabled,ot=He.init(this.clippingPlanes,it),B=pe.get(R,I.length),B.init(),I.push(B),Le.enabled===!0&&Le.isPresenting===!0){const Xe=k.xr.getDepthSensingMesh();Xe!==null&&So(Xe,j,-1/0,k.sortObjects)}So(R,j,0,k.sortObjects),B.finish(),k.sortObjects===!0&&B.sort(ae,me),Ut=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Ut&&Te.addToRenderList(B,R),this.info.render.frame++,ot===!0&&He.beginShadows();const te=D.state.shadowsArray;if(Pe.render(te,R,j),ot===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&N.hasRenderPass())===!1){const Xe=B.opaque,be=B.transmissive;if(D.setupLights(),j.isArrayCamera){const Je=j.cameras;if(be.length>0)for(let nt=0,pt=Je.length;nt<pt;nt++){const mt=Je[nt];Ri(Xe,be,R,mt)}Ut&&Te.render(R);for(let nt=0,pt=Je.length;nt<pt;nt++){const mt=Je[nt];Pa(B,R,mt,mt.viewport)}}else be.length>0&&Ri(Xe,be,R,j),Ut&&Te.render(R),Pa(B,R,j)}H!==null&&oe===0&&(E.updateMultisampleRenderTarget(H),E.updateRenderTargetMipmap(H)),ne&&N.end(k),R.isScene===!0&&R.onAfterRender(k,R,j),Ce.resetDefaultState(),$=-1,q=null,w.pop(),w.length>0?(D=w[w.length-1],E.setTextureUnits(D.state.textureUnits),ot===!0&&He.setGlobalState(k.clippingPlanes,D.state.camera)):D=null,I.pop(),I.length>0?B=I[I.length-1]:B=null,X!==null&&X.renderEnd()};function So(R,j,le,ne){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLightProbeGrid)D.pushLightProbeGrid(R);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||we.intersectsSprite(R)){ne&&ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ht);const Xe=Ee.update(R),be=R.material;be.visible&&B.push(R,Xe,be,le,ct.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||we.intersectsObject(R))){const Xe=Ee.update(R),be=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ct.copy(R.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),ct.copy(Xe.boundingSphere.center)),ct.applyMatrix4(R.matrixWorld).applyMatrix4(ht)),Array.isArray(be)){const Je=Xe.groups;for(let nt=0,pt=Je.length;nt<pt;nt++){const mt=Je[nt],et=be[mt.materialIndex];et&&et.visible&&B.push(R,Xe,et,le,ct.z,mt)}}else be.visible&&B.push(R,Xe,be,le,ct.z,null)}}const De=R.children;for(let Xe=0,be=De.length;Xe<be;Xe++)So(De[Xe],j,le,ne)}function Pa(R,j,le,ne){const{opaque:te,transmissive:De,transparent:Xe}=R;D.setupLightsView(le),ot===!0&&He.setGlobalState(k.clippingPlanes,le),ne&&Oe.viewport(Z.copy(ne)),te.length>0&&Yr(te,j,le),De.length>0&&Yr(De,j,le),Xe.length>0&&Yr(Xe,j,le),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function Ri(R,j,le,ne){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ne.id]===void 0){const et=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ne.id]=new Vi(1,1,{generateMipmaps:!0,type:et?dr:ii,minFilter:hs,samples:Math.max(4,Dt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const De=D.state.transmissionRenderTarget[ne.id],Xe=ne.viewport||Z;De.setSize(Xe.z*k.transmissionResolutionScale,Xe.w*k.transmissionResolutionScale);const be=k.getRenderTarget(),Je=k.getActiveCubeFace(),nt=k.getActiveMipmapLevel();k.setRenderTarget(De),k.getClearColor(O),J=k.getClearAlpha(),J<1&&k.setClearColor(16777215,.5),k.clear(),Ut&&Te.render(le);const pt=k.toneMapping;k.toneMapping=ki;const mt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),D.setupLightsView(ne),ot===!0&&He.setGlobalState(k.clippingPlanes,ne),Yr(R,le,ne),E.updateMultisampleRenderTarget(De),E.updateRenderTargetMipmap(De),gt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Rt=0,Wt=j.length;Rt<Wt;Rt++){const $t=j[Rt],{object:Ot,geometry:ln,material:Ge,group:Mn}=$t;if(Ge.side===ni&&Ot.layers.test(ne.layers)){const St=Ge.side;Ge.side=zn,Ge.needsUpdate=!0,Mo(Ot,le,ne,ln,Ge,Mn),Ge.side=St,Ge.needsUpdate=!0,et=!0}}et===!0&&(E.updateMultisampleRenderTarget(De),E.updateRenderTargetMipmap(De))}k.setRenderTarget(be,Je,nt),k.setClearColor(O,J),mt!==void 0&&(ne.viewport=mt),k.toneMapping=pt}function Yr(R,j,le){const ne=j.isScene===!0?j.overrideMaterial:null;for(let te=0,De=R.length;te<De;te++){const Xe=R[te],{object:be,geometry:Je,group:nt}=Xe;let pt=Xe.material;pt.allowOverride===!0&&ne!==null&&(pt=ne),be.layers.test(le.layers)&&Mo(be,j,le,Je,pt,nt)}}function Mo(R,j,le,ne,te,De){R.onBeforeRender(k,j,le,ne,te,De),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.onBeforeRender(k,j,le,ne,R,De),te.transparent===!0&&te.side===ni&&te.forceSinglePass===!1?(te.side=zn,te.needsUpdate=!0,k.renderBufferDirect(le,j,ne,te,R,De),te.side=Gr,te.needsUpdate=!0,k.renderBufferDirect(le,j,ne,te,R,De),te.side=ni):k.renderBufferDirect(le,j,ne,te,R,De),R.onAfterRender(k,j,le,ne,te,De)}function Es(R,j,le){j.isScene!==!0&&(j=kt);const ne=L.get(R),te=D.state.lights,De=D.state.shadowsArray,Xe=te.state.version,be=Ue.getParameters(R,te.state,De,j,le,D.state.lightProbeGridArray),Je=Ue.getProgramCacheKey(be);let nt=ne.programs;ne.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?j.environment:null,ne.fog=j.fog;const pt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ne.envMap=Q.get(R.envMap||ne.environment,pt),ne.envMapRotation=ne.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,nt===void 0&&(R.addEventListener("dispose",Ht),nt=new Map,ne.programs=nt);let mt=nt.get(Je);if(mt!==void 0){if(ne.currentProgram===mt&&ne.lightsStateVersion===Xe)return wo(R,be),mt}else be.uniforms=Ue.getUniforms(R),X!==null&&R.isNodeMaterial&&X.build(R,le,be),R.onBeforeCompile(be,k),mt=Ue.acquireProgram(be,Je),nt.set(Je,mt),ne.uniforms=be.uniforms;const et=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=He.uniform),wo(R,be),ne.needsLights=Lu(R),ne.lightsStateVersion=Xe,ne.needsLights&&(et.ambientLightColor.value=te.state.ambient,et.lightProbe.value=te.state.probe,et.directionalLights.value=te.state.directional,et.directionalLightShadows.value=te.state.directionalShadow,et.spotLights.value=te.state.spot,et.spotLightShadows.value=te.state.spotShadow,et.rectAreaLights.value=te.state.rectArea,et.ltc_1.value=te.state.rectAreaLTC1,et.ltc_2.value=te.state.rectAreaLTC2,et.pointLights.value=te.state.point,et.pointLightShadows.value=te.state.pointShadow,et.hemisphereLights.value=te.state.hemi,et.directionalShadowMatrix.value=te.state.directionalShadowMatrix,et.spotLightMatrix.value=te.state.spotLightMatrix,et.spotLightMap.value=te.state.spotLightMap,et.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=D.state.lightProbeGridArray.length>0,ne.currentProgram=mt,ne.uniformsList=null,mt}function Eo(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=hu.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function wo(R,j){const le=L.get(R);le.outputColorSpace=j.outputColorSpace,le.batching=j.batching,le.batchingColor=j.batchingColor,le.instancing=j.instancing,le.instancingColor=j.instancingColor,le.instancingMorph=j.instancingMorph,le.skinning=j.skinning,le.morphTargets=j.morphTargets,le.morphNormals=j.morphNormals,le.morphColors=j.morphColors,le.morphTargetsCount=j.morphTargetsCount,le.numClippingPlanes=j.numClippingPlanes,le.numIntersection=j.numClipIntersection,le.vertexAlphas=j.vertexAlphas,le.vertexTangents=j.vertexTangents,le.toneMapping=j.toneMapping}function ba(R,j){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;P.setFromMatrixPosition(j.matrixWorld);for(let le=0,ne=R.length;le<ne;le++){const te=R[le];if(te.texture!==null&&te.boundingBox.containsPoint(P))return te}return null}function La(R,j,le,ne,te){j.isScene!==!0&&(j=kt),E.resetTextureUnits();const De=j.fog,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?j.environment:null,be=H===null?k.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ct.workingColorSpace,Je=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,nt=Q.get(ne.envMap||Xe,Je),pt=ne.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,mt=!!le.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),et=!!le.morphAttributes.position,Rt=!!le.morphAttributes.normal,Wt=!!le.morphAttributes.color;let $t=ki;ne.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&($t=k.toneMapping);const Ot=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,ln=Ot!==void 0?Ot.length:0,Ge=L.get(ne),Mn=D.state.lights;if(ot===!0&&(it===!0||R!==q)){const Bt=R===q&&ne.id===$;He.setState(ne,R,Bt)}let St=!1;ne.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Mn.state.version||Ge.outputColorSpace!==be||te.isBatchedMesh&&Ge.batching===!1||!te.isBatchedMesh&&Ge.batching===!0||te.isBatchedMesh&&Ge.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Ge.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Ge.instancing===!1||!te.isInstancedMesh&&Ge.instancing===!0||te.isSkinnedMesh&&Ge.skinning===!1||!te.isSkinnedMesh&&Ge.skinning===!0||te.isInstancedMesh&&Ge.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ge.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ge.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ge.instancingMorph===!1&&te.morphTexture!==null||Ge.envMap!==nt||ne.fog===!0&&Ge.fog!==De||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==He.numPlanes||Ge.numIntersection!==He.numIntersection)||Ge.vertexAlphas!==pt||Ge.vertexTangents!==mt||Ge.morphTargets!==et||Ge.morphNormals!==Rt||Ge.morphColors!==Wt||Ge.toneMapping!==$t||Ge.morphTargetsCount!==ln||!!Ge.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,Ge.__version=ne.version);let kn=Ge.currentProgram;St===!0&&(kn=Es(ne,j,te),X&&ne.isNodeMaterial&&X.onUpdateProgram(ne,kn,Ge));let Vn=!1,Mt=!1,qi=!1;const Ft=kn.getUniforms(),qt=Ge.uniforms;if(Oe.useProgram(kn.program)&&(Vn=!0,Mt=!0,qi=!0),ne.id!==$&&($=ne.id,Mt=!0),Ge.needsLights){const Bt=ba(D.state.lightProbeGridArray,te);Ge.lightProbeGrid!==Bt&&(Ge.lightProbeGrid=Bt,Mt=!0)}if(Vn||q!==R){Oe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ft.setValue(z,"projectionMatrix",R.projectionMatrix),Ft.setValue(z,"viewMatrix",R.matrixWorldInverse);const gi=Ft.map.cameraPosition;gi!==void 0&&gi.setValue(z,bt.setFromMatrixPosition(R.matrixWorld)),Dt.logarithmicDepthBuffer&&Ft.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ft.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),q!==R&&(q=R,Mt=!0,qi=!0)}if(Ge.needsLights&&(Mn.state.directionalShadowMap.length>0&&Ft.setValue(z,"directionalShadowMap",Mn.state.directionalShadowMap,E),Mn.state.spotShadowMap.length>0&&Ft.setValue(z,"spotShadowMap",Mn.state.spotShadowMap,E),Mn.state.pointShadowMap.length>0&&Ft.setValue(z,"pointShadowMap",Mn.state.pointShadowMap,E)),te.isSkinnedMesh){Ft.setOptional(z,te,"bindMatrix"),Ft.setOptional(z,te,"bindMatrixInverse");const Bt=te.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Ft.setValue(z,"boneTexture",Bt.boneTexture,E))}te.isBatchedMesh&&(Ft.setOptional(z,te,"batchingTexture"),Ft.setValue(z,"batchingTexture",te._matricesTexture,E),Ft.setOptional(z,te,"batchingIdTexture"),Ft.setValue(z,"batchingIdTexture",te._indirectTexture,E),Ft.setOptional(z,te,"batchingColorTexture"),te._colorsTexture!==null&&Ft.setValue(z,"batchingColorTexture",te._colorsTexture,E));const mi=le.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&at.update(te,le,kn),(Mt||Ge.receiveShadow!==te.receiveShadow)&&(Ge.receiveShadow=te.receiveShadow,Ft.setValue(z,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&j.environment!==null&&(qt.envMapIntensity.value=j.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=Iw()),Mt){if(Ft.setValue(z,"toneMappingExposure",k.toneMappingExposure),Ge.needsLights&&bu(qt,qi),De&&ne.fog===!0&&ce.refreshFogUniforms(qt,De),ce.refreshMaterialUniforms(qt,ne,Fe,Ve,D.state.transmissionRenderTarget[R.id]),Ge.needsLights&&Ge.lightProbeGrid){const Bt=Ge.lightProbeGrid;qt.probesSH.value=Bt.texture,qt.probesMin.value.copy(Bt.boundingBox.min),qt.probesMax.value.copy(Bt.boundingBox.max),qt.probesResolution.value.copy(Bt.resolution)}hu.upload(z,Eo(Ge),qt,E)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(hu.upload(z,Eo(Ge),qt,E),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ft.setValue(z,"center",te.center),Ft.setValue(z,"modelViewMatrix",te.modelViewMatrix),Ft.setValue(z,"normalMatrix",te.normalMatrix),Ft.setValue(z,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const Bt=ne.uniformsGroups;for(let gi=0,Pi=Bt.length;gi<Pi;gi++){const qr=Bt[gi];fe.update(qr,kn),fe.bind(qr,kn)}}return kn}function bu(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Lu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(R,j,le){const ne=L.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),L.get(R.texture).__webglTexture=j,L.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:le,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const le=L.get(R);le.__webglFramebuffer=j,le.__useDefaultFramebuffer=j===void 0};const Qt=z.createFramebuffer();this.setRenderTarget=function(R,j=0,le=0){H=R,K=j,oe=le;let ne=null,te=!1,De=!1;if(R){const be=L.get(R);if(be.__useDefaultFramebuffer!==void 0){Oe.bindFramebuffer(z.FRAMEBUFFER,be.__webglFramebuffer),Z.copy(R.viewport),re.copy(R.scissor),se=R.scissorTest,Oe.viewport(Z),Oe.scissor(re),Oe.setScissorTest(se),$=-1;return}else if(be.__webglFramebuffer===void 0)E.setupRenderTarget(R);else if(be.__hasExternalTextures)E.rebindTextures(R,L.get(R.texture).__webglTexture,L.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const pt=R.depthTexture;if(be.__boundDepthTexture!==pt){if(pt!==null&&L.has(pt)&&(R.width!==pt.image.width||R.height!==pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(R)}}const Je=R.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(De=!0);const nt=L.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[j])?ne=nt[j][le]:ne=nt[j],te=!0):R.samples>0&&E.useMultisampledRTT(R)===!1?ne=L.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?ne=nt[le]:ne=nt,Z.copy(R.viewport),re.copy(R.scissor),se=R.scissorTest}else Z.copy(he).multiplyScalar(Fe).floor(),re.copy(Ie).multiplyScalar(Fe).floor(),se=Me;if(le!==0&&(ne=Qt),Oe.bindFramebuffer(z.FRAMEBUFFER,ne)&&Oe.drawBuffers(R,ne),Oe.viewport(Z),Oe.scissor(re),Oe.setScissorTest(se),te){const be=L.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+j,be.__webglTexture,le)}else if(De){const be=j;for(let Je=0;Je<R.textures.length;Je++){const nt=L.get(R.textures[Je]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Je,nt.__webglTexture,le,be)}}else if(R!==null&&le!==0){const be=L.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,be.__webglTexture,le)}$=-1},this.readRenderTargetPixels=function(R,j,le,ne,te,De,Xe,be=0){if(!(R&&R.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=L.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xe!==void 0&&(Je=Je[Xe]),Je){Oe.bindFramebuffer(z.FRAMEBUFFER,Je);try{const nt=R.textures[be],pt=nt.format,mt=nt.type;if(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be),!Dt.textureFormatReadable(pt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(mt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-ne&&le>=0&&le<=R.height-te&&z.readPixels(j,le,ne,te,W.convert(pt),W.convert(mt),De)}finally{const nt=H!==null?L.get(H).__webglFramebuffer:null;Oe.bindFramebuffer(z.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(R,j,le,ne,te,De,Xe,be=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=L.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xe!==void 0&&(Je=Je[Xe]),Je)if(j>=0&&j<=R.width-ne&&le>=0&&le<=R.height-te){Oe.bindFramebuffer(z.FRAMEBUFFER,Je);const nt=R.textures[be],pt=nt.format,mt=nt.type;if(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be),!Dt.textureFormatReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,et),z.bufferData(z.PIXEL_PACK_BUFFER,De.byteLength,z.STREAM_READ),z.readPixels(j,le,ne,te,W.convert(pt),W.convert(mt),0);const Rt=H!==null?L.get(H).__webglFramebuffer:null;Oe.bindFramebuffer(z.FRAMEBUFFER,Rt);const Wt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await xx(z,Wt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,et),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,De),z.deleteBuffer(et),z.deleteSync(Wt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,le=0){const ne=Math.pow(2,-le),te=Math.floor(R.image.width*ne),De=Math.floor(R.image.height*ne),Xe=j!==null?j.x:0,be=j!==null?j.y:0;E.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,le,0,0,Xe,be,te,De),Oe.unbindTexture()};const Du=z.createFramebuffer(),To=z.createFramebuffer();this.copyTextureToTexture=function(R,j,le=null,ne=null,te=0,De=0){let Xe,be,Je,nt,pt,mt,et,Rt,Wt;const $t=R.isCompressedTexture?R.mipmaps[De]:R.image;if(le!==null)Xe=le.max.x-le.min.x,be=le.max.y-le.min.y,Je=le.isBox3?le.max.z-le.min.z:1,nt=le.min.x,pt=le.min.y,mt=le.isBox3?le.min.z:0;else{const qt=Math.pow(2,-te);Xe=Math.floor($t.width*qt),be=Math.floor($t.height*qt),R.isDataArrayTexture?Je=$t.depth:R.isData3DTexture?Je=Math.floor($t.depth*qt):Je=1,nt=0,pt=0,mt=0}ne!==null?(et=ne.x,Rt=ne.y,Wt=ne.z):(et=0,Rt=0,Wt=0);const Ot=W.convert(j.format),ln=W.convert(j.type);let Ge;j.isData3DTexture?(E.setTexture3D(j,0),Ge=z.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(E.setTexture2DArray(j,0),Ge=z.TEXTURE_2D_ARRAY):(E.setTexture2D(j,0),Ge=z.TEXTURE_2D),Oe.activeTexture(z.TEXTURE0),Oe.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),Oe.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Oe.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const Mn=Oe.getParameter(z.UNPACK_ROW_LENGTH),St=Oe.getParameter(z.UNPACK_IMAGE_HEIGHT),kn=Oe.getParameter(z.UNPACK_SKIP_PIXELS),Vn=Oe.getParameter(z.UNPACK_SKIP_ROWS),Mt=Oe.getParameter(z.UNPACK_SKIP_IMAGES);Oe.pixelStorei(z.UNPACK_ROW_LENGTH,$t.width),Oe.pixelStorei(z.UNPACK_IMAGE_HEIGHT,$t.height),Oe.pixelStorei(z.UNPACK_SKIP_PIXELS,nt),Oe.pixelStorei(z.UNPACK_SKIP_ROWS,pt),Oe.pixelStorei(z.UNPACK_SKIP_IMAGES,mt);const qi=R.isDataArrayTexture||R.isData3DTexture,Ft=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const qt=L.get(R),mi=L.get(j),Bt=L.get(qt.__renderTarget),gi=L.get(mi.__renderTarget);Oe.bindFramebuffer(z.READ_FRAMEBUFFER,Bt.__webglFramebuffer),Oe.bindFramebuffer(z.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let Pi=0;Pi<Je;Pi++)qi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,L.get(R).__webglTexture,te,mt+Pi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,L.get(j).__webglTexture,De,Wt+Pi)),z.blitFramebuffer(nt,pt,Xe,be,et,Rt,Xe,be,z.DEPTH_BUFFER_BIT,z.NEAREST);Oe.bindFramebuffer(z.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(te!==0||R.isRenderTargetTexture||L.has(R)){const qt=L.get(R),mi=L.get(j);Oe.bindFramebuffer(z.READ_FRAMEBUFFER,Du),Oe.bindFramebuffer(z.DRAW_FRAMEBUFFER,To);for(let Bt=0;Bt<Je;Bt++)qi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qt.__webglTexture,te,mt+Bt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,qt.__webglTexture,te),Ft?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,mi.__webglTexture,De,Wt+Bt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,mi.__webglTexture,De),te!==0?z.blitFramebuffer(nt,pt,Xe,be,et,Rt,Xe,be,z.COLOR_BUFFER_BIT,z.NEAREST):Ft?z.copyTexSubImage3D(Ge,De,et,Rt,Wt+Bt,nt,pt,Xe,be):z.copyTexSubImage2D(Ge,De,et,Rt,nt,pt,Xe,be);Oe.bindFramebuffer(z.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ft?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Ge,De,et,Rt,Wt,Xe,be,Je,Ot,ln,$t.data):j.isCompressedArrayTexture?z.compressedTexSubImage3D(Ge,De,et,Rt,Wt,Xe,be,Je,Ot,$t.data):z.texSubImage3D(Ge,De,et,Rt,Wt,Xe,be,Je,Ot,ln,$t):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,De,et,Rt,Xe,be,Ot,ln,$t.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,De,et,Rt,$t.width,$t.height,Ot,$t.data):z.texSubImage2D(z.TEXTURE_2D,De,et,Rt,Xe,be,Ot,ln,$t);Oe.pixelStorei(z.UNPACK_ROW_LENGTH,Mn),Oe.pixelStorei(z.UNPACK_IMAGE_HEIGHT,St),Oe.pixelStorei(z.UNPACK_SKIP_PIXELS,kn),Oe.pixelStorei(z.UNPACK_SKIP_ROWS,Vn),Oe.pixelStorei(z.UNPACK_SKIP_IMAGES,Mt),De===0&&j.generateMipmaps&&z.generateMipmap(Ge),Oe.unbindTexture()},this.initRenderTarget=function(R){L.get(R).__webglFramebuffer===void 0&&E.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?E.setTextureCube(R,0):R.isData3DTexture?E.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?E.setTexture2DArray(R,0):E.setTexture2D(R,0),Oe.unbindTexture()},this.resetState=function(){K=0,oe=0,H=null,Oe.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}function Fw(s){const e=new Fy(16774374,.6);s.add(e);const t=new Uy(16771273,1.1);t.position.set(8,14,6),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=.5,t.shadow.camera.far=40;const r=14;t.shadow.camera.left=-r,t.shadow.camera.right=r,t.shadow.camera.top=r,t.shadow.camera.bottom=-r,t.shadow.bias=-5e-4,t.shadow.radius=6,s.add(t);const o=new Dy(16767208,16042408,.35);return s.add(o),{ambient:e,dir:t,fill:o}}const Ow=16103322,Bw=16238287,zw=14256746,kw=15243944,Vw=16765109,Hw=15967136,Pt=6,zr=5,au=.6,co=.15;function Gw(s){const e=new pi;e.name="platform";const t=new ge(new Ke(Pt,au,Pt),new Ne({color:zw,roughness:.9}));t.position.set(-Pt/2,-au/2,-Pt/2),t.receiveShadow=!0,t.castShadow=!0,e.add(t);const r=new ge(new Ke(Pt,au,Pt),new Ne({color:kw,roughness:.9}));r.position.set(Pt/2,-au/2,-Pt/2),r.receiveShadow=!0,r.castShadow=!0,e.add(r);const o=Ww(),l=new ge(new Ke(Pt,co,Pt),new Ne({map:o,roughness:.85}));l.position.set(-Pt/2,co/2,-Pt/2),l.receiveShadow=!0,e.add(l);const u=new ge(new Ke(Pt,co,Pt),new Ne({color:Vw,roughness:.95}));u.position.set(Pt/2,co/2,-Pt/2),u.receiveShadow=!0,e.add(u);const f=new ge(Xw(3.5,2.8,.4),new Ne({color:Hw,roughness:1}));f.rotation.x=-Math.PI/2,f.position.set(Pt/2,co+.005,-Pt/2+.2),f.receiveShadow=!0,e.add(f);const h=.25,p=co,v=2.6,x=2.4,g=p+1,S=g+x,M=new Ne({color:Ow,roughness:.95}),A=new Ne({color:Bw,roughness:.95}),_=($,q,Z,re,se,O,J)=>{const Re=new ge(new Ke(q,Z,re),$);return Re.position.set(se,O,J),Re.castShadow=!0,Re.receiveShadow=!0,e.add(Re),Re},y=Pt-v;_(M,y,zr,h,-Pt+y/2,p+zr/2,-Pt+h/2),_(M,v,g-p,h,-v/2,p+(g-p)/2,-Pt+h/2);const C=p+zr-S;_(M,v,C,h,-v/2,S+C/2,-Pt+h/2),_(A,Pt,zr,h,Pt/2,p+zr/2,-Pt+h/2);const b=Pt-v;_(A,h,zr,b,Pt-h/2,p+zr/2,-Pt+b/2),_(A,h,g-p,v,Pt-h/2,p+(g-p)/2,-v/2);const P=p+zr-S;_(A,h,P,v,Pt-h/2,S+P/2,-v/2);const B=new Ne({color:16777215,roughness:.5}),D=($,q,Z,re,se,O)=>{const J=new ge(new Ke($,q,Z),B);J.position.set(re,se,O),J.castShadow=!0,e.add(J)},I=-Pt+h,w=Pt-h,N=-v/2,k=-v/2,U=(g+S)/2,X=h+.04;D(v+.1,.14,X,N,g+.07,I-h/2),D(v+.1,.14,X,N,S-.07,I-h/2),D(.14,x,X,-v,U,I-h/2),D(v,.06,.08,N,U,I+.06),D(.06,x,.08,N,U,I+.06),D(X,.14,v+.1,w+h/2,g+.07,k),D(X,.14,v+.1,w+h/2,S-.07,k),D(X,x,.14,w+h/2,U,-v),D(.08,.06,v,w-.06,U,k),D(.08,x,.06,w-.06,U,k),D(.22,x+.28,.22,.02,U,-Pt+.12);const K=new an(24,24,18,96,1,!0),oe=new Ci({side:zn,uniforms:{uHour:{value:17.5}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv;
      uniform float uHour;

      // 5 keyframes around the clock: night -> dawn -> day -> sunset -> dusk
      // Each keyframe has (bottom, mid, top) colors.
      vec3 palette(float h, int which) {
        // which: 0=bottom, 1=mid, 2=top
        // Normalize hour to 0..1 of day
        // Keyframe anchors (hour, colors)
        // 0h  night:   dark navy
        // 6h  dawn:    pink/orange horizon, purple top
        // 12h midday:  bright blue
        // 18h sunset:  warm gold/pink/blue
        // 22h dusk:    deep blue/violet
        vec3 b[5]; vec3 m[5]; vec3 t[5];
        // Night (0h / 24h)
        b[0]=vec3(0.06,0.08,0.22); m[0]=vec3(0.04,0.05,0.16); t[0]=vec3(0.02,0.02,0.10);
        // Dawn (6h)
        b[1]=vec3(1.00,0.78,0.55); m[1]=vec3(1.00,0.60,0.70); t[1]=vec3(0.45,0.40,0.70);
        // Midday (12h)
        b[2]=vec3(0.85,0.95,1.00); m[2]=vec3(0.60,0.82,1.00); t[2]=vec3(0.35,0.62,0.95);
        // Sunset (18h)
        b[3]=vec3(1.00,0.88,0.55); m[3]=vec3(1.00,0.65,0.68); t[3]=vec3(0.62,0.70,0.95);
        // Dusk (22h)
        b[4]=vec3(0.35,0.30,0.55); m[4]=vec3(0.18,0.16,0.38); t[4]=vec3(0.06,0.06,0.22);

        float anchors[5];
        anchors[0]=0.0; anchors[1]=6.0; anchors[2]=12.0; anchors[3]=18.0; anchors[4]=22.0;

        // Wrap hour into [0, 24]
        float hh = mod(h, 24.0);
        // find segment
        int i0 = 0; int i1 = 0;
        float seg = 0.0;
        if (hh < anchors[1])       { i0=0; i1=1; seg=(hh-0.0)/6.0; }
        else if (hh < anchors[2])  { i0=1; i1=2; seg=(hh-6.0)/6.0; }
        else if (hh < anchors[3])  { i0=2; i1=3; seg=(hh-12.0)/6.0; }
        else if (hh < anchors[4])  { i0=3; i1=4; seg=(hh-18.0)/4.0; }
        else                        { i0=4; i1=0; seg=(hh-22.0)/2.0; } // wrap to night
        vec3 c0 = which==0 ? b[i0] : (which==1 ? m[i0] : t[i0]);
        vec3 c1 = which==0 ? b[i1] : (which==1 ? m[i1] : t[i1]);
        return mix(c0, c1, smoothstep(0.0, 1.0, seg));
      }

      void main() {
        float y = vUv.y;
        vec3 bottom = palette(uHour, 0);
        vec3 mid    = palette(uHour, 1);
        vec3 top    = palette(uHour, 2);
        vec3 col = mix(bottom, mid, smoothstep(0.05, 0.55, y));
        col = mix(col, top, smoothstep(0.55, 1.0, y));

        // Sun / moon traverses the sky from x=0 at hour 6 to x=1 at hour 18
        float sunX = clamp((uHour - 6.0) / 12.0, 0.0, 1.0);
        float sunY = 0.32 + 0.35 * sin(clamp((uHour-6.0)/12.0, 0.0, 1.0) * 3.14159);
        float d = distance(vec2(fract(vUv.x), vUv.y), vec2(sunX, sunY));
        float sun = smoothstep(0.28, 0.0, d);
        // Day sun warm, night moon cool
        float isDay = smoothstep(5.5, 6.5, uHour) * (1.0 - smoothstep(18.5, 19.5, uHour));
        vec3 sunCol = mix(vec3(0.85, 0.88, 1.0), vec3(1.0, 0.88, 0.6), isDay);
        col += sunCol * sun * (0.5 + 0.3 * isDay);

        // Stars at night
        float night = (1.0 - isDay);
        float star = step(0.997, fract(sin(dot(floor(vUv*300.0), vec2(12.9898,78.233))) * 43758.5453));
        col += vec3(1.0) * star * night * 0.8 * step(0.45, vUv.y);

        // Cloud bands (subtle, only during day/twilight)
        float cloud = smoothstep(0.52, 0.58, y) * (1.0 - smoothstep(0.66, 0.74, y));
        float cn = sin(vUv.x * 48.0 + 1.3) * 0.5 + 0.5;
        col = mix(col, mix(vec3(0.4,0.4,0.5), vec3(1.0,0.96,0.98), isDay), cloud * cn * 0.4);
        float cloud2 = smoothstep(0.72, 0.76, y) * (1.0 - smoothstep(0.82, 0.88, y));
        float cn2 = sin(vUv.x * 28.0 + 4.2) * 0.5 + 0.5;
        col = mix(col, mix(vec3(0.3,0.3,0.45), vec3(1.0,0.95,1.0), isDay), cloud2 * cn2 * 0.3);

        gl_FragColor = vec4(col, 1.0);
      }
    `}),H=new ge(K,oe);return H.position.set(0,4,0),e.add(H),s.add(e),{root:e,skyMat:oe}}function Ww(){const s=document.createElement("canvas");s.width=512,s.height=512;const e=s.getContext("2d");e.fillStyle="#ecd6b3",e.fillRect(0,0,512,512);const t=64;for(let o=0;o<512;o+=t){const l=210+Math.floor(Math.random()*28);e.fillStyle=`rgb(${l}, ${l-28}, ${l-58})`,e.fillRect(0,o,512,t-2),e.strokeStyle="rgba(120, 80, 50, 0.12)";for(let u=0;u<6;u++)e.beginPath(),e.moveTo(0,o+Math.random()*t),e.lineTo(512,o+Math.random()*t),e.stroke();e.fillStyle="rgba(80,50,30,0.35)",e.fillRect(0,o+t-2,512,2)}const r=new Ra(s);return r.wrapS=r.wrapT=mu,r.repeat.set(1.5,1.5),r.colorSpace=Sn,r}function Xw(s,e,t){const r=new Fg,o=-s/2,l=-e/2;return r.moveTo(o+t,l),r.lineTo(o+s-t,l),r.quadraticCurveTo(o+s,l,o+s,l+t),r.lineTo(o+s,l+e-t),r.quadraticCurveTo(o+s,l+e,o+s-t,l+e),r.lineTo(o+t,l+e),r.quadraticCurveTo(o,l+e,o,l+e-t),r.lineTo(o,l+t),r.quadraticCurveTo(o,l,o+t,l),new mh(r,8)}const Yw=16103621,qw=16438749,$f=16774886,jw=14268810;function Zw(s){const e=new pi;e.name="leftRoom",e.position.set(-3,.15,-3);const t=[],r=[],o=new Ne({color:$f,roughness:.7}),l=new Ne({color:jw,roughness:.8}),u=new ge(new Ke(4.6,.12,1.2),o);u.position.set(-.2,1.2,-2.3),u.castShadow=u.receiveShadow=!0,e.add(u);const f=new ge(new Ke(1.2,.12,3),o);f.position.set(-1.9,1.2,-.9),f.castShadow=f.receiveShadow=!0,e.add(f);const h=new Ke(.12,1.2,.12);[[1.95,.6,-2.3],[1.95,.6,-1.3],[-2.4,.6,-2.3],[-2.4,.6,.5],[-1.4,.6,-.6],[-1.4,.6,.5]].forEach(Me=>{const we=new ge(h,l);we.position.set(...Me),we.castShadow=!0,e.add(we)});const v=new Ne({color:3355443,roughness:.5}),x=new Ne({color:1710618,roughness:.5});(Me=>{const we=new ge(new Ke(.1,.5,.1),v);we.position.set(Me,1.55,-2.7),we.castShadow=!0,e.add(we);const ot=new ge(new Ke(.6,.05,.3),v);ot.position.set(Me,1.28,-2.7),e.add(ot);const it=new ge(new Ke(1.4,.9,.08),x);it.position.set(Me,2.2,-2.68),it.castShadow=!0,e.add(it);const ht=new Hr({color:1048442}),bt=new ge(new Hi(1.3,.8),ht);bt.position.set(Me,2.2,-2.63),e.add(bt),t.push(ht);const ct=Kw();ht.map=ct,ht.color=new wt(6750130)})(0);const S=new ge(new Ke(.6,1.2,.5),new Ne({color:2763306,roughness:.4}));S.position.set(1.6,.6,-2.3),S.castShadow=!0,e.add(S);const M=new ge(new Ke(.02,.8,.02),new Ne({color:16743096,emissive:16743096,emissiveIntensity:1.2}));M.position.set(1.3,.7,-2.05),e.add(M);const A=new ge(new Ke(1.4,.08,.45),new Ne({color:2829104,roughness:.6}));A.position.set(0,1.3,-2),A.castShadow=!0,e.add(A);const _=[16103621,13231359,16769955,13103313,14271731];for(let Me=0;Me<4;Me++)for(let we=0;we<12;we++){const ot=new Ne({color:_[(Me+we)%_.length],roughness:.5}),it=new ge(new Ke(.09,.04,.09),ot);it.position.set(-.6+we*.11,1.36,-2.15+Me*.1),e.add(it)}const y=new ge(new lr(.1,12,8),new Ne({color:16438749,roughness:.3}));y.scale.set(1,.5,1.4),y.position.set(.9,1.3,-1.9),e.add(y);const C=new pi,b=new ge(new Ke(.8,.04,.55),new Ne({color:13662858,roughness:.8}));b.position.y=0,C.add(b);const P=new ge(new Ke(.38,.02,.5),new Ne({color:16775402,roughness:.9}));P.position.set(-.2,.03,0),P.rotation.z=.06,C.add(P);const B=new ge(new Ke(.38,.02,.5),new Ne({color:16775402,roughness:.9}));B.position.set(.2,.03,0),B.rotation.z=-.06,C.add(B);const D=new ge(new Ke(.04,.05,.52),new Ne({color:11886704}));D.position.set(0,.04,0),C.add(D);for(let Me=0;Me<5;Me++)for(const we of[-1,1]){const ot=new ge(new Ke(.28,.005,.02),new Ne({color:11575440}));ot.position.set(we*.2,.045,-.18+Me*.08),ot.rotation.z=we>0?-.06:.06,C.add(ot)}C.position.set(-.9,1.27,-1.95),C.rotation.y=.25,e.add(C);const I=new pi,w=new ge(new Ke(.55,.9,.5),new Ne({color:1908002,roughness:.5}));w.castShadow=!0,I.add(w);for(let Me=0;Me<4;Me++){const we=new ge(new Ke(.5,.15,.02),new Ne({color:2960693,roughness:.4}));we.position.set(0,-.3+Me*.2,.26),I.add(we);for(let ot=0;ot<5;ot++){const it=new Ne({color:6750105,emissive:2293589,emissiveIntensity:1.2}),ht=new ge(new Ke(.03,.03,.02),it);ht.position.set(-.18+ot*.08,-.3+Me*.2,.28),I.add(ht),r.push(it)}}I.position.set(1.7,1.71,-2.15),e.add(I);const N=new Ne({color:16757895,roughness:.7}),k=new ge(new Ke(.9,.15,.9),N);k.position.set(0,.9,-.2),k.castShadow=!0,e.add(k);const U=new ge(new Ke(.9,1.1,.15),N);U.position.set(0,1.4,.15),U.castShadow=!0,e.add(U);const X=new ge(new an(.05,.05,.6,12),new Ne({color:1365,roughness:.5}));X.position.set(0,.55,-.2),e.add(X);for(let Me=0;Me<5;Me++){const we=Me/5*Math.PI*2,ot=new ge(new lr(.07,10,8),new Ne({color:819,roughness:.5}));ot.position.set(Math.cos(we)*.3,.12,-.2+Math.sin(we)*.3),e.add(ot)}const K=-2.7,oe=new ge(new Ke(2,.08,.35),new Ne({color:$f,roughness:.7}));oe.position.set(-1.3,3.35,K),oe.castShadow=!0,e.add(oe);const H=new ge(new Ke(.7,.35,.06),new Ne({color:qw,roughness:.8}));H.position.set(-2,3.58,K),e.add(H);const $=$w("CODE","#2a2a2a","#fad5dd"),q=new ge(new Hi(.66,.31),new Hr({map:$}));q.position.set(-2,3.58,K+.035),e.add(q);const Z=new ge(new Ke(.26,.36,.26),new Ne({color:546,roughness:.6}));Z.position.set(-1.4,3.57,K),Z.castShadow=!0,e.add(Z);const re=new ge(new an(.035,.035,.5,10),new Ne({color:3003,roughness:.6}));re.position.set(-.75,3.64,K),e.add(re);const se=new ge(new Aa(.13,.035,10,20,Math.PI),new Ne({color:Yw,roughness:.5}));se.position.set(-.75,3.9,K),se.rotation.x=Math.PI/2,e.add(se);const O=new ge(new Ke(1.6,.08,.3),new Ne({color:$f,roughness:.7}));O.position.set(-1.5,2.55,K),O.castShadow=!0,e.add(O);const J=[16103621,16766629,13231359,14271731,16769955];for(let Me=0;Me<5;Me++){const we=new ge(new Ke(.15,.42+Math.random()*.12,.22),new Ne({color:J[Me],roughness:.8}));we.position.set(-2.15+Me*.18,2.82,K),we.rotation.z=(Math.random()-.5)*.12,we.castShadow=!0,e.add(we)}const Re=new ge(new Ke(3.2,.02,2.2),new Ne({color:16238287,roughness:1}));Re.position.set(.2,.01,.3),Re.receiveShadow=!0,e.add(Re);const Ve=new ge(new Ke(2.8,.022,1.8),new Ne({color:16438749,roughness:1}));Ve.position.set(.2,.012,.3),e.add(Ve);const Fe=new ge(new an(.25,.2,.5,16),new Ne({color:14715546,roughness:.8}));Fe.position.set(2.3,.25,-1),Fe.castShadow=!0,e.add(Fe);for(let Me=0;Me<14;Me++){const we=new ge(new lr(.16+Math.random()*.06,8,6),new Ne({color:8176762,roughness:.9}));we.position.set(2.3+(Math.random()-.5)*.3,.6+Math.random()*.5,-1+(Math.random()-.5)*.3),we.castShadow=!0,e.add(we)}const ae=new ge(new an(.1,.09,.16,16),new Ne({color:16103621,roughness:.5}));ae.position.set(1.25,1.34,-1.85),ae.castShadow=!0,e.add(ae);const me=new ge(new Aa(.05,.014,8,14),new Ne({color:16103621}));me.position.set(1.35,1.34,-1.85),me.rotation.y=Math.PI/2,e.add(me);const he=new ge(new an(.08,.08,.2,14),new Ne({color:16438749,roughness:.6}));he.position.set(-1.9,1.36,-1.6),e.add(he),[16739194,8035839,16764779].forEach((Me,we)=>{const ot=new ge(new an(.012,.012,.28,8),new Ne({color:Me}));ot.position.set(-1.9+(we-1)*.03,1.48,-1.6),ot.rotation.z=(we-1)*.15,e.add(ot)});const Ie=new ge(new Ke(6,.05,6),new Hr({visible:!1}));return Ie.position.set(0,.05,0),Ie.userData.pickId="gio",e.add(Ie),s.add(e),{group:e,screens:t,serverLEDs:r,pickZone:Ie,deskCenter:new V(-3,2.6,-3+-1.8)}}function Kw(){const s=document.createElement("canvas");s.width=512,s.height=320;const e=s.getContext("2d");e.fillStyle="#0a0f10",e.fillRect(0,0,512,320),e.font="14px monospace";const t=["#66ffb2","#9dffcf","#4ade80","#a7f3d0"];for(let o=0;o<18;o++){e.fillStyle=t[o%t.length];const l=10+Math.floor(Math.random()*30),u=o%4*16;let f="";const h="abcdefghijklmnopqrstuvwxyz(){};=><*.,+-";for(let p=0;p<l;p++)f+=h[Math.floor(Math.random()*h.length)];e.fillText(f,10+u,20+o*16)}const r=new Ra(s);return r.colorSpace=Sn,r}function $w(s,e,t){const r=document.createElement("canvas");r.width=256,r.height=128;const o=r.getContext("2d");o.fillStyle=t,o.fillRect(0,0,256,128),o.fillStyle=e,o.font="bold 72px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(s,128,68);const l=new Ra(r);return l.colorSpace=Sn,l}const Jw=12816486,fo=9135168,lu=16773598;function Qw(s){const e=new pi;e.name="rightRoom",e.position.set(3,.15,-3);const t=new Ne({color:Jw,roughness:.75}),r=new Ne({color:fo,roughness:.7}),o=new ge(new Ke(3.2,.18,1.3),t);o.position.set(.6,1.25,-1.8),o.castShadow=o.receiveShadow=!0,e.add(o);const l=new ge(new Ke(1,1.1,1.2),r);l.position.set(1.65,.6,-2),l.castShadow=l.receiveShadow=!0,e.add(l);for(let qe=0;qe<3;qe++){const z=new ge(new Ke(.9,.3,.02),new Ne({color:10711893,roughness:.6}));z.position.set(1.65,.15+qe*.33,-1.39),e.add(z);const _t=new ge(new lr(.04,10,8),new Ne({color:5913122}));_t.position.set(1.65,.15+qe*.33,-1.35),e.add(_t)}const u=new Ne({color:fo});[[-.9,.6,-2.4],[-.9,.6,-1.5]].forEach(qe=>{const z=new ge(new Ke(.12,1.2,.12),u);z.position.set(qe[0],qe[1],qe[2]),z.castShadow=!0,e.add(z)});const f=new Ne({color:16103621,roughness:.95}),h=new ge(new Ke(1.6,.8,1.4),f);h.position.set(-.5,.5,-.3),h.castShadow=h.receiveShadow=!0,e.add(h);const p=new ge(new Ke(1.4,.35,1.2),f);p.position.set(-.5,1,-.3),p.castShadow=!0,e.add(p);const v=new ge(new Ke(1.6,1.4,.4),f);v.position.set(-.5,1.3,.3),v.castShadow=!0,e.add(v);const x=new ge(new Ke(.35,.7,1.4),f);x.position.set(-1.3,1,-.3),x.castShadow=!0,e.add(x);const g=new ge(new Ke(.35,.7,1.4),f);g.position.set(.3,1,-.3),g.castShadow=!0,e.add(g);const S=new ge(new Hi(1.2,1.2,6,6),new Ne({color:16242344,roughness:1,side:ni})),M=S.geometry.attributes.position;for(let qe=0;qe<M.count;qe++){const z=M.getY(qe);M.setZ(qe,Math.sin(z*3)*.05)}S.position.set(-.5,1.6,.55),S.rotation.x=.3,S.castShadow=!0,e.add(S);const A=new ge(new an(.15,.2,.05,16),new Ne({color:9135168}));A.position.set(-.5,1.36,-2.3),e.add(A);const _=new ge(new an(.03,.03,.6,10),new Ne({color:9135168}));_.position.set(-.5,1.66,-2.3),e.add(_);const y=new Ne({color:16767400,emissive:16751189,emissiveIntensity:.9,roughness:.3}),C=new ge(new ch(.16,.3,6,12),y);C.position.set(-.5,2.05,-2.3),e.add(C);const b=new L0(16753752,.8,3.5,2);b.position.set(-.5,1.9,-2.1),b.castShadow=!0,e.add(b);const P=[11889478,14721123,16242344,13662802];for(let qe=0;qe<4;qe++){const z=new ge(new Ke(.5,.08,.35),new Ne({color:P[qe],roughness:.8}));z.position.set(.9,1.38+qe*.085,-2.1),z.rotation.y=(Math.random()-.5)*.1,z.castShadow=!0,e.add(z)}const B=new ge(new an(.15,.12,.28,16),new Ne({color:13597266,roughness:.7}));B.position.set(1.35,1.45,-2.25),B.castShadow=!0,e.add(B);for(let qe=0;qe<10;qe++){const z=new ge(new lr(.09+Math.random()*.06,8,6),new Ne({color:7189099+Math.floor(Math.random()*546),roughness:.9}));z.position.set(1.35+(Math.random()-.5)*.2,1.65+Math.random()*.2,-2.25+(Math.random()-.5)*.2),z.castShadow=!0,e.add(z)}const D=new ge(new Ke(.7,.04,.5),new Ne({color:lu,roughness:.9}));D.position.set(.1,1.36,-1.75),D.rotation.y=-.2,e.add(D);const I=new ge(new Ke(.04,.05,.5),new Ne({color:11896418}));I.position.set(.1,1.39,-1.75),I.rotation.y=-.2,e.add(I);const w=new ge(new an(.11,.09,.18,20),new Ne({color:lu,roughness:.5}));w.position.set(-.2,1.44,-1.7),w.castShadow=!0,e.add(w);const N=new ge(new Aa(.05,.015,8,16),new Ne({color:lu}));N.position.set(-.08,1.44,-1.7),N.rotation.y=Math.PI/2,e.add(N);const k=[];for(let qe=0;qe<3;qe++){const z=new ge(new Hi(.12,.35,1,6),new Ne({color:16777215,transparent:!0,opacity:.35,side:ni,depthWrite:!1}));z.position.set(-.2+(qe-1)*.05,1.75+qe*.08,-1.7),z.userData.base=z.position.clone(),z.userData.phase=qe*1.1,e.add(z),k.push(z)}const U=new pi,X=new ge(new Ke(.8,.04,.55),new Ne({color:15259076,roughness:.4,metalness:.3}));X.position.y=.02,X.castShadow=!0,U.add(X);const K=new ge(new Ke(.68,.005,.32),new Ne({color:3811874,roughness:.7}));K.position.set(0,.043,.05),U.add(K);const oe=new ge(new Ke(.26,.006,.14),new Ne({color:13941151,roughness:.5}));oe.position.set(0,.044,.22),U.add(oe);const H=new pi;H.position.set(0,.04,-.275);const $=new ge(new Ke(.8,.03,.55),new Ne({color:15259076,roughness:.4,metalness:.3}));$.position.set(0,0,.275),$.castShadow=!0,H.add($);const q=new Hr({color:16766888}),Z=new ge(new Hi(.72,.48),q);Z.position.set(0,-.018,.275),Z.rotation.x=Math.PI/2,H.add(Z),H.rotation.x=-1.85,U.add(H),U.position.set(1.65,1.34,-1.55),U.rotation.y=.1,e.add(U);const re=-2.7,se=new ge(new Ke(2,.08,.35),new Ne({color:16773598,roughness:.7}));se.position.set(1,3.35,re),se.castShadow=!0,e.add(se);const O=[11889478,14721123,16242344,13662802,12615776];for(let qe=0;qe<5;qe++){const z=new ge(new Ke(.15,.4+Math.random()*.12,.22),new Ne({color:O[qe],roughness:.85}));z.position.set(.1+qe*.18,3.6,re-.05),z.rotation.z=(Math.random()-.5)*.15,z.castShadow=!0,e.add(z)}const J=[],Re=new ph([new V(-.2,3.9,re),new V(.6,3.55,re),new V(1.4,3.85,re),new V(2.2,3.5,re)]),Ve=new ge(new gh(Re,40,.015,6,!1),new Ne({color:819,roughness:.6}));e.add(Ve);for(let qe=0;qe<14;qe++){const z=qe/13,_t=Re.getPointAt(z),gt=new Ne({color:16773800,emissive:16765286,emissiveIntensity:1.4}),Dt=new ge(new lr(.045,10,8),gt);Dt.position.set(_t.x,_t.y-.06,_t.z+.04),e.add(Dt),J.push(gt)}const Fe=sg("desert",[16042394,15241315,7031354]);Fe.position.set(-.2,2.6,re),e.add(Fe);const ae=sg("boho",[15320992,13665888,15982791]);ae.position.set(1.3,2.6,re),e.add(ae);const me=new ge(new Ke(3,.02,2.6),new Ne({color:15320992,roughness:1}));me.position.set(-.2,.01,0),me.receiveShadow=!0,e.add(me);const he=new ge(new Ke(2.6,.022,2.2),new Ne({color:16242344,roughness:1}));he.position.set(-.2,.012,0),e.add(he);const Ie=new ge(new an(.35,.35,.05,20),new Ne({color:fo,roughness:.7}));Ie.position.set(-1.9,.9,-.3),Ie.castShadow=!0,e.add(Ie);const Me=new ge(new an(.04,.04,.9,10),new Ne({color:fo}));Me.position.set(-1.9,.45,-.3),e.add(Me),[[-2.05,-.35,.12],[-1.85,-.25,.15],[-1.75,-.4,.1]].forEach(qe=>{const z=new ge(new an(.05,.05,qe[2]*2,10),new Ne({color:lu,roughness:.8}));z.position.set(qe[0],.93+qe[2],qe[1]),e.add(z);const _t=new ge(new fh(.02,.06,8),new Ne({color:16765286,emissive:16753482,emissiveIntensity:1.5}));_t.position.set(qe[0],.93+qe[2]*2+.04,qe[1]),e.add(_t)});const we=new ge(new an(.25,.3,.08,18),new Ne({color:fo}));we.position.set(-2.1,.04,-1.8),e.add(we);const ot=new ge(new an(.04,.04,2.8,10),new Ne({color:fo}));ot.position.set(-2.1,1.4,-1.8),e.add(ot);const it=new ge(new an(.35,.45,.55,18,1,!0),new Ne({color:16773598,emissive:16757350,emissiveIntensity:.6,roughness:.8,side:ni}));it.position.set(-2.1,2.95,-1.8),e.add(it);const ht=new L0(16757350,.8,4,2);ht.position.set(-2.1,2.7,-1.8),e.add(ht);const bt=it.material,ct=new ge(new an(.25,.2,.5,16),new Ne({color:13597266,roughness:.7}));ct.position.set(2.1,.25,.4),ct.castShadow=!0,e.add(ct);for(let qe=0;qe<12;qe++){const z=new ge(new lr(.16+Math.random()*.05,8,6),new Ne({color:7189099,roughness:.9}));z.position.set(2.1+(Math.random()-.5)*.3,.6+Math.random()*.5,.4+(Math.random()-.5)*.3),e.add(z)}[13665888,16242344,11889478].forEach((qe,z)=>{const _t=new ge(new Ke(.5,.04,.35),new Ne({color:qe,roughness:.85}));_t.position.set(-1.6,.05+z*.045,.9),_t.rotation.y=(Math.random()-.5)*.3,e.add(_t)});const kt=new ge(new Ke(.55,.2,.4),new Ne({color:16242344,roughness:1}));kt.position.set(-1,1.3,-.5),kt.rotation.y=.3,kt.castShadow=!0,e.add(kt);const Ut=new ge(new Ke(6,.05,6),new Hr({visible:!1}));return Ut.position.set(0,.05,0),Ut.userData.pickId="almeira",e.add(Ut),s.add(e),{group:e,lampLight:b,lampMat:y,steam:k,stringLights:J,floorLampLight:ht,floorLampMat:bt,laptopScreen:q,pickZone:Ut,deskCenter:new V(3+.1,2.4,-3+-1.8)}}function sg(s,e){const t=new pi,r=new ge(new Ke(1,1.4,.05),new Ne({color:7031354}));t.add(r);const o=document.createElement("canvas");o.width=256,o.height=360;const l=o.getContext("2d"),u=l.createLinearGradient(0,0,0,360);u.addColorStop(0,"#"+e[2].toString(16).padStart(6,"0")),u.addColorStop(.6,"#"+e[0].toString(16).padStart(6,"0")),u.addColorStop(1,"#"+e[1].toString(16).padStart(6,"0")),l.fillStyle=u,l.fillRect(0,0,256,360),l.fillStyle="#"+e[1].toString(16).padStart(6,"0"),l.beginPath(),l.arc(80,260,60,Math.PI,0),l.fill(),l.beginPath(),l.arc(170,280,80,Math.PI,0),l.fill(),l.fillStyle="rgba(255,230,200,0.6)",l.beginPath(),l.arc(180,120,28,0,Math.PI*2),l.fill();const f=new Ra(o);f.colorSpace=Sn;const h=new ge(new Hi(.88,1.28),new Hr({map:f}));return h.position.z=.03,t.add(h),t}class eT{constructor(e){this.hearts=[],this.scene=e,this.texture=tT()}burst(e,t=10){for(let r=0;r<t;r++){const o=new Ag({map:this.texture,transparent:!0,depthWrite:!1}),l=new Vx(o);l.scale.set(.35,.35,.35),l.position.copy(e),l.position.x+=(Math.random()-.5)*.4,l.position.z+=(Math.random()-.5)*.4,this.scene.add(l),this.hearts.push({sprite:l,vel:new V((Math.random()-.5)*.4,.8+Math.random()*.5,(Math.random()-.5)*.4),life:0,maxLife:1.5+Math.random()*.5})}}update(e){for(let t=this.hearts.length-1;t>=0;t--){const r=this.hearts[t];r.life+=e,r.sprite.position.addScaledVector(r.vel,e),r.vel.y-=e*.3;const o=r.life/r.maxLife;r.sprite.material.opacity=Math.max(0,1-o),r.sprite.scale.setScalar(.35*(1+o*.4)),r.life>=r.maxLife&&(this.scene.remove(r.sprite),r.sprite.material.dispose(),this.hearts.splice(t,1))}}}function tT(){const s=document.createElement("canvas");s.width=128,s.height=128;const e=s.getContext("2d");e.font="100px serif",e.textAlign="center",e.textBaseline="middle",e.fillText("❤️",64,68);const t=new Ra(s);return t.colorSpace=Sn,t}function nT(s,e,t,r,o=()=>!1){const l=new zy,u=new Ye,f=(p,v)=>{var A,_;if(o())return;const x=s.domElement.getBoundingClientRect();if(u.x=(p-x.left)/x.width*2-1,u.y=-((v-x.top)/x.height)*2+1,l.setFromCamera(u,e),t.paperPlane&&t.paperPlane.isIdle()&&t.paperPlane.mesh.visible&&l.intersectObject(t.paperPlane.mesh,!1).length>0){t.paperPlane.dismiss();return}const g=l.intersectObjects([t.leftZone,t.rightZone],!1);if(g.length===0)return;const S=g[0].object.userData.pickId,M=S==="gio"?t.leftBurstOrigin:t.rightBurstOrigin;r.burst(M,12);try{(_=(A=window.Android)==null?void 0:A.onDeskInteraction)==null||_.call(A,S)}catch{}},h=p=>f(p.clientX,p.clientY);return s.domElement.addEventListener("click",h),()=>{s.domElement.removeEventListener("click",h)}}function iT(s,e,t){const r={gio:"idle",almeira:"idle"},o=f=>{r.gio=f,s.screens.forEach(h=>{f==="sleep"?(h.color.set(1052688),h.opacity=1):h.color.set(f==="studying"?10354639:6750130)})},l=f=>{r.almeira=f,f==="studying"?(e.lampLight.intensity=1.6,e.lampMat.emissiveIntensity=1.3,e.floorLampLight.intensity=1.2,e.floorLampMat.emissiveIntensity=1.1):f==="idle"?(e.lampLight.intensity=.8,e.lampMat.emissiveIntensity=.9,e.floorLampLight.intensity=.7,e.floorLampMat.emissiveIntensity=.7):(e.lampLight.intensity=0,e.lampMat.emissiveIntensity=.1,e.floorLampLight.intensity=0,e.floorLampMat.emissiveIntensity=.1);const h=f==="sleep"?.25:1;e.stringLights.forEach(p=>p.emissiveIntensity=1.4*h),e.laptopScreen.color.set(f==="studying"?12575999:1381653)};o(r.gio),l(r.almeira);const u={setGioState:o,setAlmeiraState:l,triggerIncomingNote:t};return window.ElevasiDiorama=u,{store:r,api:u}}function rT(s,e,t){const r={target:t.clone(),distance:30,theta:Math.PI/4,phi:Math.PI/3.4,zoom:1},o=()=>{const{theta:A,phi:_,distance:y}=r,C=Math.sin(_);s.position.set(r.target.x+y*C*Math.sin(A),r.target.y+y*Math.cos(_),r.target.z+y*C*Math.cos(A));const b=r.phi>Math.PI;s.up.set(0,b?-1:1,0),s.lookAt(r.target),s.zoom=r.zoom,s.updateProjectionMatrix()};o();let l=!1;const u=new Map;let f=0,h=0,p=0;const v=()=>{const A=Array.from(u.values());if(A.length<2)return 0;const _=A[0].x-A[1].x,y=A[0].y-A[1].y;return Math.hypot(_,y)},x=A=>{var _,y;u.set(A.pointerId,{x:A.clientX,y:A.clientY}),(y=(_=A.target).setPointerCapture)==null||y.call(_,A.pointerId),u.size===1?(l=!1,f=A.clientX,h=A.clientY):u.size===2&&(p=v(),l=!0)},g=A=>{if(!u.has(A.pointerId))return;if(u.set(A.pointerId,{x:A.clientX,y:A.clientY}),u.size>=2){const b=v();if(p>0&&b>0){const P=b/p;r.zoom=Math.max(.4,Math.min(2.5,r.zoom*P)),o()}p=b;return}const _=A.clientX-f,y=A.clientY-h;Math.abs(_)+Math.abs(y)>3&&(l=!0),f=A.clientX,h=A.clientY,r.theta-=_*.008,r.phi-=y*.008;const C=Math.PI*2;r.phi=(r.phi%C+C)%C,r.theta=(r.theta%C+C)%C,o()},S=A=>{var _,y;if(u.delete(A.pointerId),(y=(_=A.target).releasePointerCapture)==null||y.call(_,A.pointerId),u.size<2&&(p=0),u.size===1){const C=u.values().next().value;f=C.x,h=C.y}},M=A=>{A.preventDefault();const _=Math.pow(.95,-A.deltaY*.01);r.zoom=Math.max(.4,Math.min(2.5,r.zoom*_)),o()};return e.style.touchAction="none",e.style.cursor="grab",e.addEventListener("pointerdown",x),window.addEventListener("pointermove",g),window.addEventListener("pointerup",S),window.addEventListener("pointercancel",S),e.addEventListener("wheel",M,{passive:!1}),{state:r,apply:o,wasDragging:()=>l,dispose:()=>{e.removeEventListener("pointerdown",x),window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S),e.removeEventListener("wheel",M)}}}class sT{constructor(e){this.mode="hidden",this.flightT=0,this.flightDuration=2.6,this.dismissT=0,this.dismissDuration=.35,this.landPos=new V,this.idleBaseY=0,this._quatTmp=new xs,this._vTmp=new V,this._up=new V(0,1,0),this.noteId=null,this.scene=e;const t=new gn,r=.55,o=.35,l=new Float32Array([0,0,r,-o,0,-r*.9,o,0,-r*.9,0,0,-r*.7,0,-.08,-r*.2]),u=[0,3,1,0,2,3,0,4,3,0,3,4,1,3,4,2,4,3];t.setAttribute("position",new Zn(l,3)),t.setIndex(u),t.computeVertexNormals();const f=new Ne({color:16774898,roughness:.85,metalness:0,side:ni,flatShading:!0});this.mesh=new ge(t,f),this.mesh.castShadow=!0,this.mesh.visible=!1,this.mesh.userData.pickId="paperPlane",e.add(this.mesh),this.landPos.set(2.55,1.55,-4.55),this.idleBaseY=this.landPos.y,this.curve=new ph([new V(12,7.5,-2),new V(6.2,4.5,-4),this.landPos.clone()],!1,"catmullrom",.5),this.dust=new oT(e)}triggerDrop(e){if(this.mode==="flying"||this.mode==="dismissing")return;this.noteId=e,this.mesh.userData.noteId=e,this.flightT=0,this.mesh.scale.setScalar(1),this.mesh.visible=!0;const t=this.curve.getPoint(0);this.mesh.position.copy(t),this.mode="flying"}isIdle(){return this.mode==="idle"}dismiss(){this.mode==="idle"&&(this.mode="dismissing",this.dismissT=0,this.dust.burst(this.mesh.position))}update(e,t){var r;if(this.dust.update(t),this.mode!=="hidden"){if(this.mode==="flying"){this.flightT+=t;const o=Math.min(this.flightT/this.flightDuration,1),l=1-Math.pow(1-o,3),u=this.curve.getPoint(l);this.mesh.position.copy(u);const f=this.curve.getTangent(Math.min(l+.001,1),this._vTmp).normalize();this._quatTmp.setFromUnitVectors(new V(0,0,1),f),this.mesh.quaternion.copy(this._quatTmp),this.mesh.rotateZ(Math.sin(o*Math.PI)*.25),o>=1&&(this.mode="idle",this.mesh.position.copy(this.landPos),this.idleBaseY=this.landPos.y);return}if(this.mode==="idle"){const o=this.idleBaseY+Math.sin(e*2.2)*.04;this.mesh.position.y=o,this.mesh.position.x=this.landPos.x,this.mesh.position.z=this.landPos.z,this.mesh.rotation.set(0,e*.4,0),this.mesh.rotation.z=Math.sin(e*1.3)*.08;return}if(this.mode==="dismissing"){this.dismissT+=t;const o=Math.min(this.dismissT/this.dismissDuration,1),l=1-o;if(this.mesh.scale.setScalar(Math.max(.001,l)),this.mesh.rotation.y+=t*8,o>=1){this.mesh.visible=!1,this.mesh.scale.setScalar(1),this.mode="hidden";const u=this.noteId;if(this.noteId=null,u&&((r=window.Android)!=null&&r.onNoteOpened))try{window.Android.onNoteOpened(u)}catch{}}}}}dispose(){this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.dust.dispose()}}class oT{constructor(e){this.count=36,this.maxLife=.9,this.active=!1,this.scene=e,this.geom=new gn;const t=new Float32Array(this.count*3),r=new Float32Array(this.count*3);this.velocities=new Float32Array(this.count*3),this.life=new Float32Array(this.count);for(let o=0;o<this.count;o++){this.life[o]=0;const l=o%2===0;r[o*3+0]=1,r[o*3+1]=l?.82:.72,r[o*3+2]=l?.35:.82}this.geom.setAttribute("position",new Zn(t,3)),this.geom.setAttribute("color",new Zn(r,3)),this.mat=new Rg({size:.08,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0}),this.points=new qx(this.geom,this.mat),this.points.visible=!1,e.add(this.points)}burst(e){const t=this.geom.attributes.position;for(let r=0;r<this.count;r++){t.setXYZ(r,e.x,e.y,e.z);const o=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1),u=1.2+Math.random()*1.4;this.velocities[r*3+0]=Math.sin(l)*Math.cos(o)*u,this.velocities[r*3+1]=Math.cos(l)*u*.6+.6,this.velocities[r*3+2]=Math.sin(l)*Math.sin(o)*u,this.life[r]=this.maxLife}t.needsUpdate=!0,this.points.visible=!0,this.mat.opacity=1,this.active=!0}update(e){if(!this.active)return;const t=this.geom.attributes.position;let r=!1;for(let o=0;o<this.count;o++)this.life[o]<=0||(r=!0,this.life[o]-=e,this.velocities[o*3+1]-=e*2.2,t.setXYZ(o,t.getX(o)+this.velocities[o*3+0]*e,t.getY(o)+this.velocities[o*3+1]*e,t.getZ(o)+this.velocities[o*3+2]*e));t.needsUpdate=!0,this.mat.opacity=Math.max(0,this.mat.opacity-e*1.1),r||(this.points.visible=!1,this.active=!1)}dispose(){this.scene.remove(this.points),this.geom.dispose(),this.mat.dispose()}}function aT(s){const e=new Ux;e.background=new wt(16509400);const t=s.clientWidth/s.clientHeight,r=13,o=new Cu(-r*t/2,r*t/2,r/2,-r/2,-200,200),l=new V(0,1.6,-2.5),u=new Uw({antialias:!0,alpha:!0});u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.setSize(s.clientWidth,s.clientHeight),u.shadowMap.enabled=!0,u.shadowMap.type=ga,u.toneMapping=$d,u.toneMappingExposure=1.05,u.outputColorSpace=Sn,s.appendChild(u.domElement);const f=Fw(e),{skyMat:h}=Gw(e),p=Zw(e),v=Qw(e),x=new sT(e),{store:g}=iT(p,v,I=>x.triggerDrop(I)),S=new eT(e),M=rT(o,u.domElement,l),A=nT(u,o,{leftZone:p.pickZone,rightZone:v.pickZone,leftBurstOrigin:p.deskCenter,rightBurstOrigin:v.deskCenter,paperPlane:{mesh:x.mesh,isIdle:()=>x.isIdle(),dismiss:()=>x.dismiss()}},S,()=>M.wasDragging()),_=()=>{const I=s.clientWidth,w=s.clientHeight,N=I/w;o.left=-r*N/2,o.right=r*N/2,o.top=r/2,o.bottom=-r/2,o.updateProjectionMatrix(),u.setSize(I,w)};window.addEventListener("resize",_);const y=performance.now();let C=y,b=0;const P=()=>{const I=new Date,w=I.getTime()+I.getTimezoneOffset()*6e4,N=new Date(w+7*36e5);return N.getHours()+N.getMinutes()/60+N.getSeconds()/3600},B=I=>{const w=Math.max(0,Math.sin((I-6)/12*Math.PI)),N=I>=6&&I<=18?1:0;f.dir.intensity=.2+1*w,f.ambient.intensity=.25+.45*w;const k=new wt;if(N){const U=1-Math.abs(I-12)/6;k.setRGB(1,.85+.1*U,.6+.35*U)}else k.setRGB(.45,.5,.75);f.dir.color.copy(k)},D=()=>{const I=performance.now(),w=Math.min(.1,(I-C)/1e3),N=(I-y)/1e3;C=I;const k=P();h.uniforms.uHour.value=k,B(k);const U=g.gio==="studying"?6:2,X=g.gio==="sleep";if(p.serverLEDs.forEach((K,oe)=>{if(X)K.emissiveIntensity=.05;else{const H=Math.sin(N*U+oe*.7)*.5+.5;K.emissiveIntensity=.4+H*1.2}}),g.gio!=="sleep"){const K=g.gio==="studying"?.85+Math.sin(N*4)*.15:.7;p.screens.forEach(oe=>{const H=g.gio==="studying"?10354639:6750130,$=new wt(H);$.multiplyScalar(K),oe.color.copy($)})}g.almeira==="studying"||g.almeira==="idle"?v.steam.forEach((K,oe)=>{const H=K.userData.base,$=K.userData.phase;K.visible=!0,K.position.x=H.x+Math.sin(N*2+$)*.05,K.position.y=H.y+(N*.4+oe*.3)%1*.4,K.material.opacity=.45*(1-(N*.4+oe*.3)%1)}):v.steam.forEach(K=>K.visible=!1),S.update(w),x.update(N,w),u.render(e,o),b=requestAnimationFrame(D)};return D(),{dispose:()=>{cancelAnimationFrame(b),window.removeEventListener("resize",_),A(),M.dispose(),x.dispose(),u.dispose(),u.domElement.parentElement===s&&s.removeChild(u.domElement),window.ElevasiDiorama&&delete window.ElevasiDiorama}}}function lT(){const s=pu.useRef(null);return pu.useEffect(()=>{if(!s.current)return;const e=aT(s.current);return()=>e.dispose()},[]),jn.jsx("div",{ref:s,className:"absolute inset-0"})}function uT(){const[s,e]=pu.useState("idle"),[t,r]=pu.useState("idle"),o=u=>{var f;e(u),(f=window.ElevasiDiorama)==null||f.setGioState(u)},l=u=>{var f;r(u),(f=window.ElevasiDiorama)==null||f.setAlmeiraState(u)};return jn.jsxs("div",{className:"relative size-full overflow-hidden bg-gradient-to-b from-[#ffe8d6] to-[#fbd5c9]",children:[jn.jsx(lT,{}),jn.jsxs("div",{className:"pointer-events-none absolute inset-0",children:[jn.jsxs("div",{className:"pointer-events-auto absolute left-4 top-4 rounded-2xl bg-white/70 px-3 py-2 shadow-lg backdrop-blur-md",children:[jn.jsx("div",{className:"mb-1 text-pink-700",children:"Varel Giovano"}),jn.jsx("div",{className:"flex gap-1.5",children:["studying","idle","sleep"].map(u=>jn.jsx("button",{onClick:()=>o(u),className:`rounded-full px-2.5 py-0.5 text-xs transition ${s===u?"bg-pink-400 text-white":"bg-pink-100 text-pink-700 hover:bg-pink-200"}`,children:u},u))})]}),jn.jsxs("div",{className:"pointer-events-auto absolute right-4 top-4 rounded-2xl bg-white/70 px-3 py-2 shadow-lg backdrop-blur-md",children:[jn.jsx("div",{className:"mb-1 text-orange-700",children:"Almeira Dewi"}),jn.jsx("div",{className:"flex gap-1.5",children:["studying","idle","sleep"].map(u=>jn.jsx("button",{onClick:()=>l(u),className:`rounded-full px-2.5 py-0.5 text-xs transition ${t===u?"bg-orange-400 text-white":"bg-orange-100 text-orange-700 hover:bg-orange-200"}`,children:u},u))})]}),jn.jsx("div",{className:"pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/70 px-4 py-1.5 text-xs text-neutral-600 shadow backdrop-blur-md",children:"Drag to orbit · Scroll to zoom · Click desk for ❤️"})]})]})}B_.createRoot(document.getElementById("root")).render(jn.jsx(uT,{}));
