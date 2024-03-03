(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8849:function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,(function(t){return e[t]}).bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=r(5697)},function(e,t){e.exports=r(7294)},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(0),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},a=0,s=n.forwardRef(function(e,t){var r=e.title,o=void 0===r?null:r,s=e.description,u=void 0===s?null:s,c=e.size,d=void 0===c?null:c,f=e.color,p=void 0===f?"currentColor":f,g=e.horizontal,m=void 0===g?null:g,h=e.vertical,b=void 0===h?null:h,y=e.rotate,v=void 0===y?null:y,j=e.spin,_=void 0===j?null:j,w=e.style,O=void 0===w?{}:w,x=e.children,E=l(e,["title","description","size","color","horizontal","vertical","rotate","spin","style","children"]);a++;var A,P=null!==_&&_,M=n.Children.map(x,function(e){!0!==P&&(P=!0===(null===_?e.props.spin:_));var t=e.props.size;"number"==typeof d&&"number"==typeof e.props.size&&(t=e.props.size/d);var r={size:t,color:null===p?e.props.color:p,horizontal:null===m?e.props.horizontal:m,vertical:null===b?e.props.vertical:b,rotate:null===v?e.props.rotate:v,spin:null===_?e.props.spin:_,inStack:!0};return n.cloneElement(e,r)});null!==d&&(O.width="string"==typeof d?d:1.5*d+"rem");var S,C="stack_labelledby_"+a,T="stack_describedby_"+a;if(o)A=u?C+" "+T:C;else if(S="presentation",u)throw Error("title attribute required when description is set");return n.createElement("svg",i({ref:t,viewBox:"0 0 24 24",style:O,role:S,"aria-labelledby":A},E),o&&n.createElement("title",{id:C},o),u&&n.createElement("desc",{id:T},u),P&&n.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }","@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"),M)});s.displayName="Stack",s.propTypes={size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),children:o.oneOfType([o.arrayOf(o.node),o.node]).isRequired,className:o.string,style:o.object},s.defaultProps={size:null,color:null,horizontal:null,vertical:null,rotate:null,spin:null},r.d(t,"Icon",function(){return f}),r.d(t,"Stack",function(){return s});var u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},d=0,f=n.forwardRef(function(e,t){var r=e.path,o=e.id,i=void 0===o?++d:o,l=e.title,a=void 0===l?null:l,s=e.description,f=void 0===s?null:s,p=e.size,g=void 0===p?null:p,m=e.color,h=void 0===m?"currentColor":m,b=e.horizontal,y=void 0!==b&&b,v=e.vertical,j=void 0!==v&&v,_=e.rotate,w=void 0===_?0:_,O=e.spin,x=void 0!==O&&O,E=e.style,A=void 0===E?{}:E,P=e.inStack,M=void 0!==P&&P,S=c(e,["path","id","title","description","size","color","horizontal","vertical","rotate","spin","style","inStack"]),C={},T=[];null!==g&&(M?T.push("scale("+g+")"):(A.width="string"==typeof g?g:1.5*g+"rem",A.height=A.width)),y&&T.push("scaleX(-1)"),j&&T.push("scaleY(-1)"),0!==w&&T.push("rotate("+w+"deg)"),null!==h&&(C.fill=h);var k=n.createElement("path",u({d:r,style:C},M?S:{})),z=k;T.length>0&&(A.transform=T.join(" "),A.transformOrigin="center",M&&(z=n.createElement("g",{style:A},k,n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))));var R,I=z,G=!0===x||"number"!=typeof x?2:x,N=!M&&(y||j);if(G<0&&(N=!N),x&&(I=n.createElement("g",{style:{animation:"spin"+(N?"-inverse":"")+" linear "+Math.abs(G)+"s infinite",transformOrigin:"center"}},z,!(y||j||0!==w)&&n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))),M)return I;var L,D="icon_labelledby_"+i,$="icon_describedby_"+i;if(a)R=f?D+" "+$:D;else if(L="presentation",f)throw Error("title attribute required when description is set");return n.createElement("svg",u({ref:t,viewBox:"0 0 24 24",style:A,role:L,"aria-labelledby":R},S),a&&n.createElement("title",{id:D},a),f&&n.createElement("desc",{id:$},f),!M&&x&&(N?n.createElement("style",null,"@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"):n.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }")),I)});f.displayName="Icon",f.propTypes={path:o.string.isRequired,size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),style:o.object,inStack:o.bool,className:o.string},f.defaultProps={size:null,color:"currentColor",horizontal:!1,vertical:!1,rotate:0,spin:!1},t.default=f}])},9477:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(5893),o=r(7294);t.default=function({html:e,height:t=null,width:r=null,children:i,dataNtpc:l=""}){return(0,o.useEffect)(()=>{l&&performance.mark("mark_feature_usage",{detail:{feature:`next-third-parties-${l}`}})},[l]),(0,n.jsxs)(n.Fragment,{children:[i,e?(0,n.jsx)("div",{style:{height:null!=t?`${t}px`:"auto",width:null!=r?`${r}px`:"auto"},"data-ntpc":l,dangerouslySetInnerHTML:{__html:e}}):null]})}},7834:function(e,t,r){"use strict";let n;var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let i=r(5893),l=r(7294),a=o(r(4298));t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:r="dataLayer"}=e;return void 0===n&&(n=r),(0,l.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:`
          window['${r}'] = window['${r}'] || [];
          function gtag(){window['${r}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}');`}}),(0,i.jsx)(a.default,{id:"_next-ga",src:`https://www.googletagmanager.com/gtag/js?id=${t}`})]})},t.sendGAEvent=(...e)=>{if(void 0===n){console.warn("@next/third-parties: GA has not been initialized");return}window[n]?window[n].push(...e):console.warn(`@next/third-parties: GA dataLayer ${n} does not exist`)}},3632:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let o=r(5893),i=r(6257),l=n(r(9477));t.default=function(e){let{apiKey:t,...r}=e,n={...r,key:t},{html:a}=(0,i.GoogleMapsEmbed)(n);return(0,o.jsx)(l.default,{height:n.height||null,width:n.width||null,html:a,dataNtpc:"GoogleMapsEmbed"})}},674:function(e,t,r){"use strict";let n;var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let i=r(5893),l=r(7294),a=o(r(4298));t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:r="dataLayer",auth:o,preview:s,dataLayer:u}=e;void 0===n&&(n=r);let c="dataLayer"!==r?`$l=${r}`:"",d=o?`&gtm_auth=${o}`:"",f=s?`&gtm_preview=${s}&gtm_cookies_win=x`:"";return(0,l.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:`
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${u?`w[l].push(${JSON.stringify(u)})`:""}
      })(window,'${r}');`}}),(0,i.jsx)(a.default,{id:"_next-gtm","data-ntpc":"GTM",src:`https://www.googletagmanager.com/gtm.js?id=${t}${c}${d}${f}`})]})},t.sendGTMEvent=e=>{if(void 0===n){console.warn("@next/third-parties: GTM has not been initialized");return}window[n]?window[n].push(e):console.warn(`@next/third-parties: GTM dataLayer ${n} does not exist`)}},9692:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=t.sendGTMEvent=t.GoogleTagManager=t.YouTubeEmbed=t.GoogleMapsEmbed=void 0;var o=r(3632);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return n(o).default}});var i=r(1494);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return n(i).default}});var l=r(674);Object.defineProperty(t,"GoogleTagManager",{enumerable:!0,get:function(){return l.GoogleTagManager}}),Object.defineProperty(t,"sendGTMEvent",{enumerable:!0,get:function(){return l.sendGTMEvent}});var a=r(7834);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return a.GoogleAnalytics}}),Object.defineProperty(t,"sendGAEvent",{enumerable:!0,get:function(){return a.sendGAEvent}})},1494:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let o=r(5893),i=n(r(4298)),l=r(6257),a=n(r(9477)),s={server:"beforeInteractive",client:"afterInteractive",idle:"lazyOnload",worker:"worker"};t.default=function(e){let{html:t,scripts:r,stylesheets:n}=(0,l.YouTubeEmbed)(e);return(0,o.jsx)(a.default,{height:e.height||null,width:e.width||null,html:t,dataNtpc:"YouTubeEmbed",children:null==r?void 0:r.map(e=>(0,o.jsx)(i.default,{src:e.url,strategy:s[e.strategy],stylesheets:n},e.url))})}},4184:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var l=o.apply(null,r);l&&e.push(l)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0!==(r=(function(){return o}).apply(t,[]))&&(e.exports=r)}()},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2178)}])},3412:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return u},ACTION_SERVER_ACTION:function(){return c},isThenable:function(){return d}});let o="refresh",i="navigate",l="restore",a="server-patch",s="prefetch",u="fast-refresh",c="server-action";function d(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6504:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(282),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3686:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let n=r(8754),o=r(1757),i=r(5893),l=o._(r(7294)),a=n._(r(3935)),s=n._(r(6665)),u=r(1908),c=r(4706),d=r(5670);r(1558);let f=r(1973),p=n._(r(3293)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,r,n,o,i){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function h(e){let[t,r]=l.version.split(".",2),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let b=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:a,width:s,decoding:u,className:c,style:d,fetchPriority:f,placeholder:p,loading:g,unoptimized:b,fill:y,onLoadRef:v,onLoadingCompleteRef:j,setBlurComplete:_,setShowAltText:w,onLoad:O,onError:x,...E}=e;return(0,i.jsx)("img",{...E,...h(f),loading:g,width:s,height:a,decoding:u,"data-nimg":y?"fill":"1",className:c,style:d,sizes:o,srcSet:n,src:r,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&m(e,p,v,j,_,b))},[r,p,v,j,_,x,b,t]),onLoad:e=>{m(e.currentTarget,p,v,j,_,b)},onError:e=>{w(!0),"empty"!==p&&_(!0),x&&x(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):(0,i.jsx)(s.default,{children:(0,i.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let v=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(f.RouterContext),n=(0,l.useContext)(d.ImageConfigContext),o=(0,l.useMemo)(()=>{let e=g||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:s}=e,m=(0,l.useRef)(a);(0,l.useEffect)(()=>{m.current=a},[a]);let h=(0,l.useRef)(s);(0,l.useEffect)(()=>{h.current=s},[s]);let[v,j]=(0,l.useState)(!1),[_,w]=(0,l.useState)(!1),{props:O,meta:x}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:v,showAltText:_});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{...O,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:j,setShowAltText:w,ref:t}),x.priority?(0,i.jsx)(y,{isAppRouter:!r,imgAttributes:O}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3480:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let n=r(8754),o=r(5893),i=n._(r(7294)),l=r(7950),a=r(7387),s=r(6982),u=r(6921),c=r(7727),d=r(1973),f=r(6216),p=r(1722),g=r(6504),m=r(634),h=r(3412),b=new Set;function y(e,t,r,n,o,i){if(i||(0,a.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(b.has(o))return;b.add(o)}Promise.resolve(i?e.prefetch(t,o):e.prefetch(t,r,n)).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let j=i.default.forwardRef(function(e,t){let r,n;let{href:s,as:b,children:j,prefetch:_=null,passHref:w,replace:O,shallow:x,scroll:E,locale:A,onClick:P,onMouseEnter:M,onTouchStart:S,legacyBehavior:C=!1,...T}=e;r=j,C&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let k=i.default.useContext(d.RouterContext),z=i.default.useContext(f.AppRouterContext),R=null!=k?k:z,I=!k,G=!1!==_,N=null===_?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:L,as:D}=i.default.useMemo(()=>{if(!k){let e=v(s);return{href:e,as:b?v(b):e}}let[e,t]=(0,l.resolveHref)(k,s,!0);return{href:e,as:b?(0,l.resolveHref)(k,b):t||e}},[k,s,b]),$=i.default.useRef(L),U=i.default.useRef(D);C&&(n=i.default.Children.only(r));let H=C?n&&"object"==typeof n&&n.ref:t,[F,Y,B]=(0,p.useIntersection)({rootMargin:"200px"}),V=i.default.useCallback(e=>{(U.current!==D||$.current!==L)&&(B(),U.current=D,$.current=L),F(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[D,H,L,B,F]);i.default.useEffect(()=>{R&&Y&&G&&y(R,L,D,{locale:A},{kind:N},I)},[D,L,Y,A,G,null==k?void 0:k.locale,R,I,N]);let q={ref:V,onClick(e){C||"function"!=typeof P||P(e),C&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,r,n,o,l,s,u,c){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let f=()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:u,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};c?i.default.startTransition(f):f()}(e,R,L,D,O,x,E,A,I)},onMouseEnter(e){C||"function"!=typeof M||M(e),C&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),R&&(G||!I)&&y(R,L,D,{locale:A,priority:!0,bypassPrefetchedCheck:!0},{kind:N},I)},onTouchStart(e){C||"function"!=typeof S||S(e),C&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),R&&(G||!I)&&y(R,L,D,{locale:A,priority:!0,bypassPrefetchedCheck:!0},{kind:N},I)}};if((0,u.isAbsoluteUrl)(D))q.href=D;else if(!C||w||"a"===n.type&&!("href"in n.props)){let e=void 0!==A?A:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&(0,g.getDomainLocale)(D,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);q.href=t||(0,m.addBasePath)((0,c.addLocale)(D,e,null==k?void 0:k.defaultLocale))}return C?i.default.cloneElement(n,q):(0,o.jsx)("a",{...T,...q,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1722:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(7294),o=r(9126),i="function"==typeof IntersectionObserver,l=new Map,a=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,u=s||!i,[c,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(u||c)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},a.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,r,t,c,f.current]),[p,c,(0,n.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1908:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(1558);let n=r(7386),o=r(4706);function i(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,s,u,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:g,className:m,quality:h,width:b,height:y,fill:v=!1,style:j,onLoad:_,onLoadingComplete:w,placeholder:O="empty",blurDataURL:x,fetchPriority:E,layout:A,objectFit:P,objectPosition:M,lazyBoundary:S,lazyRoot:C,...T}=e,{imgConf:k,showAltText:z,blurComplete:R,defaultLoader:I}=t,G=k||o.imageConfigDefault;if("allSizes"in G)a=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);a={...G,allSizes:e,deviceSizes:t}}let N=T.loader||I;delete T.loader,delete T.srcSet;let L="__next_img_default"in N;if(L){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=N;N=t=>{let{config:r,...n}=t;return e(n)}}if(A){"fill"===A&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[A];t&&!d&&(d=t)}let D="",$=l(b),U=l(y);if("object"==typeof(r=c)&&(i(r)||void 0!==r.src)){let e=i(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,x=x||e.blurDataURL,D=e.src,!v){if($||U){if($&&!U){let t=$/e.width;U=Math.round(e.height*t)}else if(!$&&U){let t=U/e.height;$=Math.round(e.width*t)}}else $=e.width,U=e.height}}let H=!p&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:D)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,H=!1),a.unoptimized&&(f=!0),L&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(E="high");let F=l(h),Y=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:M}:{},z?{}:{color:"transparent"},j),B=R||"empty"===O?null:"blur"===O?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:$,heightInt:U,blurWidth:s,blurHeight:u,blurDataURL:x||"",objectFit:Y.objectFit})+'")':'url("'+O+'")',V=B?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:B}:{},q=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,l),c=s.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:s.map((e,n)=>a({config:t,src:r,quality:i,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:a({config:t,src:r,quality:i,width:s[c]})}}({config:a,src:c,unoptimized:f,width:$,quality:F,sizes:d,loader:N});return{props:{...T,loading:H?"lazy":g,fetchPriority:E,width:$,height:U,decoding:"async",className:m,style:{...Y,...V},sizes:q.sizes,srcSet:q.srcSet,src:q.src},meta:{unoptimized:f,priority:p,placeholder:O,fill:v}}}},7386:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}=e,a=n?40*n:t,s=o?40*o:r,u=a&&s?"viewBox='0 0 "+a+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},9267:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return a},default:function(){return s}});let n=r(8754),o=r(1908),i=r(3686),l=n._(r(3293)),a=e=>{let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},s=i.Image},3293:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},4892:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(5893),o=r(7294),i=r(5675),l=r.n(i),a=r(1664),s=r.n(a),u=r(4184),c=r.n(u),d=r(8849),f=r.n(d),p={src:"/_next/static/media/linkedin.80aba7be.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEUAbbAAd7UBd7cAdLRnrtO32eo3k8XH4u+VxuBfqtFLn8shib+Hv9ymzuUMf7zE1W9MAAAAAnRSTlP+wGfIw7sAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAOElEQVR4nB3IyQ3AMAwEsdGurcNJ//UG8Y8gISQrUC5bEsz2X3C6q9Kwdq39cpHdoJx5zjEhMI4PIRcBAgnWeGcAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8};function g(){let[e,t]=(0,o.useState)(!1),r=(0,o.useMemo)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{className:"navbar-item",href:"/",children:[(0,n.jsx)(f(),{path:"M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z",size:1}),(0,n.jsx)("span",{className:"icon-text",children:"Home"})]}),(0,n.jsxs)(s(),{className:"navbar-item",href:"https://www.linkedin.com/in/carlosaguilera",children:[(0,n.jsx)(l(),{alt:"Linkedin Logo",src:p,width:24,height:24}),"Linkedin Profile"]}),(0,n.jsx)(s(),{className:"navbar-item",href:"/contact",children:"Contact"}),(0,n.jsx)(s(),{className:"navbar-item",href:"/portfolio",children:"Portfolio"})]}),[]);return(0,n.jsx)("nav",{className:"navbar",role:"navigation","aria-label":"main navigation",children:(0,n.jsxs)("div",{className:"navbar-brand",children:[(0,n.jsxs)("a",{role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false",onClick:()=>{t(e=>!e)},children:[(0,n.jsx)("span",{"aria-hidden":"true"}),(0,n.jsx)("span",{"aria-hidden":"true"}),(0,n.jsx)("span",{"aria-hidden":"true"})]}),(0,n.jsx)("div",{className:c()("navbar-menu",{"is-active":e}),children:(0,n.jsx)("div",{className:"navbar-end",children:r})})]})})}function m(){return(0,n.jsx)("footer",{className:"footer",children:(0,n.jsxs)("div",{className:"columns has-text-centered",children:[(0,n.jsx)("span",{className:"column",children:"\xa9 2023 Carlos Aguilera. All Rights Reserved"}),(0,n.jsxs)("ul",{className:"column is-multiline",children:[(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/",children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/#about",children:"About"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/portfolio",children:"Portfolio"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/contact",children:"Contact"})})]}),(0,n.jsx)("div",{className:"column",children:(0,n.jsx)("a",{href:"https://www.flaticon.com/free-icons/linkedin",title:"linkedin icons",children:"Linkedin icons created by riajulislam - Flaticon"})})]})})}function h(e){let{children:t}=e;return(0,n.jsxs)(o.Fragment,{children:[(0,n.jsx)(g,{}),t,(0,n.jsx)(m,{})]})}r(3079),r(5194)},2178:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(5893);r(9166);var o=r(7294),i=r(1163),l=r(9692),a=r(4892);function s(e){var t;let{Component:r,pageProps:s}=e,u=(0,i.useRouter)();(0,o.useEffect)(()=>{let e=e=>{(0,l.sendGAEvent)(["event","screen_view",{app_name:"personal_website",screen_name:e}])};return u.events.on("routeChangeComplete",e),()=>{u.events.off("routeChangeComplete",e)}},[u.events]);let c=null!==(t=r.getLayout)&&void 0!==t?t:e=>(0,n.jsx)(a.Z,{children:e});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.GoogleAnalytics,{gaId:"G-9DXJFZB314"}),c((0,n.jsx)(r,{...s}))]})}},5194:function(){},3079:function(){},9166:function(){},5675:function(e,t,r){e.exports=r(9267)},1664:function(e,t,r){e.exports=r(3480)},1163:function(e,t,r){e.exports=r(3035)},4298:function(e,t,r){e.exports=r(5874)},2703:function(e,t,r){"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,l){if(l!==n){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6257:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=t.GoogleMapsEmbed=t.GoogleAnalytics=void 0;var n=r(3494);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return n.GoogleAnalytics}});var o=r(4248);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return o.GoogleMapsEmbed}});var i=r(2239);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return i.YouTubeEmbed}})},3494:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=void 0;let i=o(r(9426)),l=r(7058);t.GoogleAnalytics=e=>{var t=n(e,[]);return(0,l.formatData)(i.default,t)}},4248:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleMapsEmbed=void 0;let i=o(r(7395)),l=r(7058);t.GoogleMapsEmbed=e=>{var t=n(e,[]);return(0,l.formatData)(i.default,t)}},2239:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=void 0;let i=o(r(8420)),l=r(7058);t.YouTubeEmbed=e=>{var t=n(e,[]);return(0,l.formatData)(i.default,t)}},7058:function(e,t){"use strict";function r(e,t,r=!1){return t?Object.keys(e).filter(e=>r?!t.includes(e):t.includes(e)).reduce((t,r)=>(t[r]=e[r],t),{}):{}}function n(e,t,r,n){let o=n&&Object.keys(n).length>0?new URL(Object.values(n)[0],e):new URL(e);return t&&r&&t.forEach(e=>{r[e]&&o.searchParams.set(e,r[e])}),o.toString()}function o(e,t,r,o,i){var l;if(!t)return`<${e}></${e}>`;let a=(null===(l=t.src)||void 0===l?void 0:l.url)?Object.assign(Object.assign({},t),{src:n(t.src.url,t.src.params,o,i)}):t,s=Object.keys(Object.assign(Object.assign({},a),r)).reduce((e,t)=>{let n=null==r?void 0:r[t],o=a[t],i=null!=n?n:o,l=!0===i?t:`${t}="${i}"`;return i?e+` ${l}`:e},"");return`<${e}${s}></${e}>`}Object.defineProperty(t,"__esModule",{value:!0}),t.formatData=t.createHtml=t.formatUrl=void 0,t.formatUrl=n,t.createHtml=o,t.formatData=function(e,t){var i,l,a,s,u;let c=r(t,null===(i=e.scripts)||void 0===i?void 0:i.reduce((e,t)=>[...e,...Array.isArray(t.params)?t.params:[]],[])),d=r(t,null===(a=null===(l=e.html)||void 0===l?void 0:l.attributes.src)||void 0===a?void 0:a.params),f=r(t,[null===(u=null===(s=e.html)||void 0===s?void 0:s.attributes.src)||void 0===u?void 0:u.slugParam]),p=r(t,[...Object.keys(c),...Object.keys(d),...Object.keys(f)],!0);return Object.assign(Object.assign({},e),{html:e.html?o(e.html.element,e.html.attributes,p,d,f):null,scripts:e.scripts?e.scripts.map(e=>Object.assign(Object.assign({},e),{url:n(e.url,e.params,c)})):null})}},9426:function(e){"use strict";e.exports=JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}')},7395:function(e){"use strict";e.exports=JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}')},8420:function(e){"use strict";e.exports=JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}')}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(3035)}),_N_E=e.O()}]);