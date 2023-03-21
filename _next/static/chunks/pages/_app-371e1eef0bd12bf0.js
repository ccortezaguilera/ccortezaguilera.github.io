(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8849:function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,(function(t){return e[t]}).bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=r(5697)},function(e,t){e.exports=r(7294)},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(0),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},l=0,s=n.forwardRef(function(e,t){var r=e.title,o=void 0===r?null:r,s=e.description,c=void 0===s?null:s,u=e.size,f=void 0===u?null:u,d=e.color,p=void 0===d?"currentColor":d,h=e.horizontal,g=void 0===h?null:h,m=e.vertical,v=void 0===m?null:m,y=e.rotate,b=void 0===y?null:y,w=e.spin,j=void 0===w?null:w,x=e.style,O=void 0===x?{}:x,E=e.children,_=a(e,["title","description","size","color","horizontal","vertical","rotate","spin","style","children"]);l++;var S,C=null!==j&&j,k=n.Children.map(E,function(e){!0!==C&&(C=!0===(null===j?e.props.spin:j));var t=e.props.size;"number"==typeof f&&"number"==typeof e.props.size&&(t=e.props.size/f);var r={size:t,color:null===p?e.props.color:p,horizontal:null===g?e.props.horizontal:g,vertical:null===v?e.props.vertical:v,rotate:null===b?e.props.rotate:b,spin:null===j?e.props.spin:j,inStack:!0};return n.cloneElement(e,r)});null!==f&&(O.width="string"==typeof f?f:1.5*f+"rem");var P,z="stack_labelledby_"+l,A="stack_describedby_"+l;if(o)S=c?z+" "+A:z;else if(P="presentation",c)throw Error("title attribute required when description is set");return n.createElement("svg",i({ref:t,viewBox:"0 0 24 24",style:O,role:P,"aria-labelledby":S},_),o&&n.createElement("title",{id:z},o),c&&n.createElement("desc",{id:A},c),C&&n.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }","@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"),k)});s.displayName="Stack",s.propTypes={size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),children:o.oneOfType([o.arrayOf(o.node),o.node]).isRequired,className:o.string,style:o.object},s.defaultProps={size:null,color:null,horizontal:null,vertical:null,rotate:null,spin:null},r.d(t,"Icon",function(){return d}),r.d(t,"Stack",function(){return s});var c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},f=0,d=n.forwardRef(function(e,t){var r=e.path,o=e.id,i=void 0===o?++f:o,a=e.title,l=void 0===a?null:a,s=e.description,d=void 0===s?null:s,p=e.size,h=void 0===p?null:p,g=e.color,m=void 0===g?"currentColor":g,v=e.horizontal,y=void 0!==v&&v,b=e.vertical,w=void 0!==b&&b,j=e.rotate,x=void 0===j?0:j,O=e.spin,E=void 0!==O&&O,_=e.style,S=void 0===_?{}:_,C=e.inStack,k=void 0!==C&&C,P=u(e,["path","id","title","description","size","color","horizontal","vertical","rotate","spin","style","inStack"]),z={},A=[];null!==h&&(k?A.push("scale("+h+")"):(S.width="string"==typeof h?h:1.5*h+"rem",S.height=S.width)),y&&A.push("scaleX(-1)"),w&&A.push("scaleY(-1)"),0!==x&&A.push("rotate("+x+"deg)"),null!==m&&(z.fill=m);var R=n.createElement("path",c({d:r,style:z},k?P:{})),M=R;A.length>0&&(S.transform=A.join(" "),S.transformOrigin="center",k&&(M=n.createElement("g",{style:S},R,n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))));var N,L=M,T=!0===E||"number"!=typeof E?2:E,I=!k&&(y||w);if(T<0&&(I=!I),E&&(L=n.createElement("g",{style:{animation:"spin"+(I?"-inverse":"")+" linear "+Math.abs(T)+"s infinite",transformOrigin:"center"}},M,!(y||w||0!==x)&&n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))),k)return L;var D,B="icon_labelledby_"+i,U="icon_describedby_"+i;if(l)N=d?B+" "+U:B;else if(D="presentation",d)throw Error("title attribute required when description is set");return n.createElement("svg",c({ref:t,viewBox:"0 0 24 24",style:S,role:D,"aria-labelledby":N},P),l&&n.createElement("title",{id:B},l),d&&n.createElement("desc",{id:U},d),!k&&E&&(I?n.createElement("style",null,"@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"):n.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }")),L)});d.displayName="Icon",d.propTypes={path:o.string.isRequired,size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),style:o.object,inStack:o.bool,className:o.string},d.defaultProps={size:null,color:"currentColor",horizontal:!1,vertical:!1,rotate:0,spin:!1},t.default=d}])},4184:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0!==(r=(function(){return o}).apply(t,[]))&&(e.exports=r)}()},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7337)}])},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,o=r(2648).Z,i=r(1598).Z,a=r(7273).Z,l=i(r(7294)),s=o(r(2636)),c=r(7757),u=r(3735),f=r(3341);r(4210);var d=o(r(7746));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,o,i,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&a(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;o.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:o,widthInt:i,qualityInt:s,className:c,imgStyle:u,blurStyle:f,isLazy:d,fill:p,placeholder:h,loading:g,srcString:v,config:y,unoptimized:b,loader:w,onLoadRef:j,onLoadingCompleteRef:x,setBlurComplete:O,setShowAltText:E,onLoad:_,onError:S}=e,C=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=d?"lazy":g,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},C,{loading:g,width:i,height:o,decoding:"async","data-nimg":p?"fill":"1",className:c,style:n({},u,f)},r,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&m(e,v,h,j,x,O,b))},[v,h,j,x,O,S,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,h,j,x,O,b)},onError:e=>{E(!0),"blur"===h&&O(!0),S&&S(e)}})))}),y=l.forwardRef((e,t)=>{let r,o;var i,{src:m,sizes:y,unoptimized:b=!1,priority:w=!1,loading:j,className:x,quality:O,width:E,height:_,fill:S,style:C,onLoad:k,onLoadingComplete:P,placeholder:z="empty",blurDataURL:A,layout:R,objectFit:M,objectPosition:N,lazyBoundary:L,lazyRoot:T}=e,I=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=l.useContext(f.ImageConfigContext),B=l.useMemo(()=>{let e=p||D||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[D]),U=I,F=U.loader||d.default;delete U.loader;let H="__next_img_default"in F;if(H){if("custom"===B.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=F;F=t=>{let{config:r}=t,n=a(t,["config"]);return e(n)}}if(R){"fill"===R&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(C=n({},C,e));let t={responsive:"100vw",fill:"100vw"}[R];t&&!y&&(y=t)}let Z="",q=g(E),W=g(_);if("object"==typeof(i=m)&&(h(i)||void 0!==i.src)){let e=h(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,o=e.blurHeight,A=A||e.blurDataURL,Z=e.src,!S){if(q||W){if(q&&!W){let t=q/e.width;W=Math.round(e.height*t)}else if(!q&&W){let t=W/e.height;q=Math.round(e.width*t)}}else q=e.width,W=e.height}}let G=!w&&("lazy"===j||void 0===j);((m="string"==typeof m?m:Z).startsWith("data:")||m.startsWith("blob:"))&&(b=!0,G=!1),B.unoptimized&&(b=!0),H&&m.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(b=!0);let[V,X]=l.useState(!1),[J,K]=l.useState(!1),Q=g(O),Y=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:N}:{},J?{}:{color:"transparent"},C),$="blur"===z&&A&&!V?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:q,heightInt:W,blurWidth:r,blurHeight:o,blurDataURL:A,objectFit:Y.objectFit}),'")')}:{},ee=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,n)=>"".concat(l({config:t,src:r,quality:i,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:l({config:t,src:r,quality:i,width:s[u]})}}({config:B,src:m,unoptimized:b,width:q,quality:Q,sizes:y,loader:F}),et=m,er={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:U.crossOrigin},en=l.useRef(k);l.useEffect(()=>{en.current=k},[k]);let eo=l.useRef(P);l.useEffect(()=>{eo.current=P},[P]);let ei=n({isLazy:G,imgAttributes:ee,heightInt:W,widthInt:q,qualityInt:Q,className:x,imgStyle:Y,blurStyle:$,loading:j,config:B,fill:S,unoptimized:b,placeholder:z,loader:F,srcString:et,onLoadRef:en,onLoadingCompleteRef:eo,setBlurComplete:X,setShowAltText:K},U);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},ei,{ref:t})),w?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},er))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,o=r(7273).Z,i=n(r(7294)),a=r(4532),l=r(3353),s=r(1410),c=r(9064),u=r(370),f=r(9955),d=r(4224),p=r(508),h=r(1516),g=r(4266);let m=new Set;function v(e,t,r,n,o){if(o||l.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(m.has(i))return;m.add(i)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function y(e){return"string"==typeof e?e:s.formatUrl(e)}let b=i.default.forwardRef(function(e,t){let r,n;let{href:s,as:m,children:b,prefetch:w,passHref:j,replace:x,shallow:O,scroll:E,locale:_,onClick:S,onMouseEnter:C,onTouchStart:k,legacyBehavior:P=!1}=e,z=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=b,P&&("string"==typeof r||"number"==typeof r)&&(r=i.default.createElement("a",null,r));let A=!1!==w,R=i.default.useContext(f.RouterContext),M=i.default.useContext(d.AppRouterContext),N=null!=R?R:M,L=!R,{href:T,as:I}=i.default.useMemo(()=>{if(!R){let e=y(s);return{href:e,as:m?y(m):e}}let[e,t]=a.resolveHref(R,s,!0);return{href:e,as:m?a.resolveHref(R,m):t||e}},[R,s,m]),D=i.default.useRef(T),B=i.default.useRef(I);P&&(n=i.default.Children.only(r));let U=P?n&&"object"==typeof n&&n.ref:t,[F,H,Z]=p.useIntersection({rootMargin:"200px"}),q=i.default.useCallback(e=>{(B.current!==I||D.current!==T)&&(Z(),B.current=I,D.current=T),F(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[I,U,T,Z,F]);i.default.useEffect(()=>{N&&H&&A&&v(N,T,I,{locale:_},L)},[I,T,H,_,A,null==R?void 0:R.locale,N,L]);let W={ref:q,onClick(e){P||"function"!=typeof S||S(e),P&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,r,n,o,a,s,c,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!l.isLocalURL(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:s}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};u?i.default.startTransition(h):h()}(e,N,T,I,x,O,E,_,L,A)},onMouseEnter(e){P||"function"!=typeof C||C(e),P&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&(A||!L)&&v(N,T,I,{locale:_,priority:!0,bypassPrefetchedCheck:!0},L)},onTouchStart(e){P||"function"!=typeof k||k(e),P&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&(A||!L)&&v(N,T,I,{locale:_,priority:!0,bypassPrefetchedCheck:!0},L)}};if(c.isAbsoluteUrl(I))W.href=I;else if(!P||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==_?_:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&h.getDomainLocale(I,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);W.href=t||g.addBasePath(u.addLocale(I,e,null==R?void 0:R.defaultLocale))}return P?i.default.cloneElement(n,W):i.default.createElement("a",Object.assign({},z,W),r)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:s}=e,c=s||!i,[u,f]=n.useState(!1),d=n.useRef(null),p=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(i){if(c||u)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},l.push(r),a.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!u){let e=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(e)}},[c,r,t,u,d.current]);let h=n.useCallback(()=>{f(!1)},[]);return[p,u,h]};var n=r(7294),o=r(29);let i="function"==typeof IntersectionObserver,a=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:a}=e,l=n||t,s=o||r,c=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&o?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},7512:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(5893),o=r(7294),i=r(5675),a=r.n(i),l=r(1664),s=r.n(l),c=r(4184),u=r.n(c),f=r(8849),d=r.n(f),p={src:"/_next/static/media/linkedin.80aba7be.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA50lEQVR42h3MTUrDUBRA4XNfX0oRm6qQRiziUJ1Gd+ES3IErUNyBrsSBwy5BdGBLQZwKOpGqmErS/DUv19DZGRw+Ca/Gk3laRyxr7Q97kikY0JWqIDI186SOrqOAu/NjSUpHX8CBbBsB1ciQOz3a8zk9DKFsWFQNjVPiwjEwopaOSJxWfMUZTxcn7A99up7l9n7GzexHDJUj3OoxCvochAMeXz/5SwvOohEth0FRI4LtGKw1vHwsSLKKjZ4HTtXie/L89suyrNtJeI9zHlqlWDWw0xUJLseT79xFFE5RhE3LugXZ9b3pP46VZbNqVBlZAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8};function h(){let[e,t]=(0,o.useState)(!1),r=()=>{t(e=>!e)},i=(0,o.useMemo)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{className:"navbar-item",href:"/",children:[(0,n.jsx)(d(),{path:"M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z",size:1}),(0,n.jsx)("span",{className:"icon-text",children:"Home"})]}),(0,n.jsxs)(s(),{className:"navbar-item",href:"https://www.linkedin.com/in/carlosaguilera",children:[(0,n.jsx)(a(),{alt:"Linkedin Logo",src:p,width:24,height:24}),"Linkedin Profile"]}),(0,n.jsx)(s(),{className:"navbar-item",href:"/contact",children:"Contact"}),(0,n.jsx)(s(),{className:"navbar-item",href:"/portfolio",children:"Portfolio"})]}),[]);return(0,n.jsx)("nav",{className:"navbar",role:"navigation","aria-label":"main navigation",children:(0,n.jsxs)("div",{className:"navbar-brand",children:[(0,n.jsxs)("a",{role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false",onClick:r,children:[(0,n.jsx)("span",{"aria-hidden":"true"}),(0,n.jsx)("span",{"aria-hidden":"true"}),(0,n.jsx)("span",{"aria-hidden":"true"})]}),(0,n.jsx)("div",{className:u()("navbar-menu",{"is-active":e}),children:(0,n.jsx)("div",{className:"navbar-end",children:i})})]})})}function g(){return(0,n.jsx)("footer",{className:"footer",children:(0,n.jsxs)("div",{className:"columns has-text-centered",children:[(0,n.jsx)("span",{className:"column",children:"\xa9 2023 Carlos Aguilera. All Rights Reserved"}),(0,n.jsxs)("ul",{className:"column is-multiline",children:[(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/",children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/#about",children:"About"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/portfolio",children:"Portfolio"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/contact",children:"Contact"})})]}),(0,n.jsx)("div",{className:"column",children:(0,n.jsx)("a",{href:"https://www.flaticon.com/free-icons/linkedin",title:"linkedin icons",children:"Linkedin icons created by riajulislam - Flaticon"})})]})})}function m(e){let{children:t}=e;return(0,n.jsxs)(o.Fragment,{children:[(0,n.jsx)(h,{}),t,(0,n.jsx)(g,{})]})}r(7029),r(6676)},7337:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893);r(7952);var o=r(7294),i=r(1163),a=r(4298),l=r.n(a),s=r(7512);let c="G-9DXJFZB314";function u(e){var t;let{Component:r,pageProps:a}=e,u=(0,i.useRouter)();(0,o.useEffect)(()=>{let e=e=>{null==window||window.gtag("config",c,{page_path:e})};return u.events.on("routeChangeComplete",e),()=>{u.events.off("routeChangeComplete",e)}},[u.events]);let f=null!==(t=r.getLayout)&&void 0!==t?t:e=>(0,n.jsx)(s.Z,{children:e});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=".concat(c)}),(0,n.jsx)(l(),{id:"google-analytics",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n      \n        gtag('config', 'G-9DXJFZB314', {\n          page_path: window.location.pathname,\n        });\n        "}}),f((0,n.jsx)(r,{...a}))]})}},6676:function(){},7029:function(){},7952:function(){},5675:function(e,t,r){e.exports=r(3740)},1664:function(e,t,r){e.exports=r(5569)},1163:function(e,t,r){e.exports=r(6885)},4298:function(e,t,r){e.exports=r(5442)},2703:function(e,t,r){"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);