(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"1jzt":function(e,t,a){(function(n){var r,i;a("hEkN"),a("a1Th"),a("h7Nl"),a("Btvt"),a("8+KV"),i=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(r=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},a=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var a in t){if(!t.hasOwnProperty(a))return;e[a]=t[a]}})),e},n=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,a=String(e),n=a.length,r=-1,i="",o=a.charCodeAt(0);++r<n;){if(0===(t=a.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=t&&t<=31||127==t||0===r&&48<=t&&t<=57||1===r&&48<=t&&t<=57&&45===o?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?a.charAt(r):"\\"+a.charAt(r)}return"#"+i},r=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t,a,n,r){if(a.emitEvents&&"function"==typeof e.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:n,toggle:r}});document.dispatchEvent(i)}};return function(o,s){var c,l,u,d,f={cancelScroll:function(e){cancelAnimationFrame(d),d=null,e||i("scrollCancel",c)},animateScroll:function(n,o,s){f.cancelScroll();var l=a(c||t,s||{}),m="[object Number]"===Object.prototype.toString.call(n),h=m||!n.tagName?null:n;if(m||h){var p=e.pageYOffset;l.header&&!u&&(u=document.querySelector(l.header));var g,b,v,y,w,E,S,A,C=function(t){return t?(a=t,parseInt(e.getComputedStyle(a).height,10)+t.offsetTop):0;var a}(u),O=m?n:function(t,a,n,i){var o=0;if(t.offsetParent)for(;o+=t.offsetTop,t=t.offsetParent;);return o=Math.max(o-a-n,0),i&&(o=Math.min(o,r()-e.innerHeight)),o}(h,C,parseInt("function"==typeof l.offset?l.offset(n,o):l.offset,10),l.clip),I=O-p,N=r(),k=0,L=(g=I,v=(b=l).speedAsDuration?b.speed:Math.abs(g/1e3*b.speed),b.durationMax&&v>b.durationMax?b.durationMax:b.durationMin&&v<b.durationMin?b.durationMin:parseInt(v,10));0===e.pageYOffset&&e.scrollTo(0,0),S=n,A=l,m||history.pushState&&A.updateURL&&history.pushState({smoothScroll:JSON.stringify(A),anchor:S.id},document.title,S===document.documentElement?"#top":"#"+S.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?e.scrollTo(0,Math.floor(O)):(i("scrollStart",l,n,o),f.cancelScroll(!0),e.requestAnimationFrame((function t(a){var r,s,c;y||(y=a),k+=a-y,E=p+I*(s=w=1<(w=0===L?0:k/L)?1:w,"easeInQuad"===(r=l).easing&&(c=s*s),"easeOutQuad"===r.easing&&(c=s*(2-s)),"easeInOutQuad"===r.easing&&(c=s<.5?2*s*s:(4-2*s)*s-1),"easeInCubic"===r.easing&&(c=s*s*s),"easeOutCubic"===r.easing&&(c=--s*s*s+1),"easeInOutCubic"===r.easing&&(c=s<.5?4*s*s*s:(s-1)*(2*s-2)*(2*s-2)+1),"easeInQuart"===r.easing&&(c=s*s*s*s),"easeOutQuart"===r.easing&&(c=1- --s*s*s*s),"easeInOutQuart"===r.easing&&(c=s<.5?8*s*s*s*s:1-8*--s*s*s*s),"easeInQuint"===r.easing&&(c=s*s*s*s*s),"easeOutQuint"===r.easing&&(c=1+--s*s*s*s*s),"easeInOutQuint"===r.easing&&(c=s<.5?16*s*s*s*s*s:1+16*--s*s*s*s*s),r.customEasing&&(c=r.customEasing(s)),c||s),e.scrollTo(0,Math.floor(E)),function(t,a){var r,s,c,u=e.pageYOffset;if(t==a||u==a||(p<a&&e.innerHeight+u)>=N)return f.cancelScroll(!0),s=a,c=m,0===(r=n)&&document.body.focus(),c||(r.focus(),document.activeElement!==r&&(r.setAttribute("tabindex","-1"),r.focus(),r.style.outline="none"),e.scrollTo(0,s)),i("scrollStop",l,n,o),!(d=y=null)}(E,O)||(d=e.requestAnimationFrame(t),y=a)})))}}},m=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(l=t.target.closest(o))&&"a"===l.tagName.toLowerCase()&&!t.target.closest(c.ignore)&&l.hostname===e.location.hostname&&l.pathname===e.location.pathname&&/#/.test(l.href)){var a,r;try{a=n(decodeURIComponent(l.hash))}catch(t){a=n(l.hash)}if("#"===a){if(!c.topOnEmptyHash)return;r=document.documentElement}else r=document.querySelector(a);(r=r||"#top"!==a?r:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var a=e.location.hash;a=a||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:a||e.pageYOffset},document.title,a||e.location.href)}}(c),f.animateScroll(r,l))}},h=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(c)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(n(history.state.anchor)))||f.animateScroll(t,null,{updateURL:!1})}};return f.destroy=function(){c&&(document.removeEventListener("click",m,!1),e.removeEventListener("popstate",h,!1),f.cancelScroll(),d=u=l=c=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),c=a(t,s||{}),u=c.header?document.querySelector(c.header):null,document.addEventListener("click",m,!1),c.updateURL&&c.popstate&&e.addEventListener("popstate",h,!1)}(),f}}(i)}.apply(t,[]))||(e.exports=r)}).call(this,a("yLpj"))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r,i=n(a("PJYZ")),o=n(a("VbXa")),s=n(a("8OQS")),c=n(a("pVnL")),l=n(a("q1tI")),u=n(a("17x9")),d=function(e){var t=(0,c.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return h(t||a).src},h=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},p=Object.create({}),g=function(e){var t=d(e),a=m(t);return p[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},n&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:i}),l.default.createElement("source",{media:r,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function A(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:n})}))}function C(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:n})}))}function O(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+l+o+s+a+n+t+i+r+c+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=function(e){var t=e.src,a=e.imageVariants,n=e.generateSources,r=e.spreadProps,i=e.ariaHidden,o=l.default.createElement(L,(0,c.default)({src:t},r,{ariaHidden:i}));return a.length>1?l.default.createElement("picture",null,n(a),o):o},L=l.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,m=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,c.default)({"aria-hidden":m,sizes:a,srcSet:n,src:r},h,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));L.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=m(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,p=e.fluid,g=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,w=e.itemProp,S=e.loading,O=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,c.default)({opacity:I?1:0,transition:x?"opacity "+v+"ms":"none"},s),j="boolean"==typeof b?"lightgray":b,P={transitionDelay:v+"ms"},q=(0,c.default)({opacity:this.state.imgLoaded?0:1},x&&P,{},s,{},f),z={title:t,alt:this.state.isVisible?"":a,style:q,className:m,itemProp:w};if(p){var M=p,V=h(p);return l.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),j&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&P)}),V.base64&&l.default.createElement(k,{ariaHidden:!0,src:V.base64,spreadProps:z,imageVariants:M,generateSources:C}),V.tracedSVG&&l.default.createElement(k,{ariaHidden:!0,src:V.tracedSVG,spreadProps:z,imageVariants:M,generateSources:A}),this.state.isVisible&&l.default.createElement("picture",null,E(M),l.default.createElement(L,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,c.default)({alt:a,title:t,loading:S},V,{imageVariants:M}))}}))}if(g){var D=g,T=h(g),H=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},i);return"inherit"===i.display&&delete H.display,l.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},j&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:j,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},x&&P)}),T.base64&&l.default.createElement(k,{ariaHidden:!0,src:T.base64,spreadProps:z,imageVariants:D,generateSources:C}),T.tracedSVG&&l.default.createElement(k,{ariaHidden:!0,src:T.tracedSVG,spreadProps:z,imageVariants:D,generateSources:A}),this.state.isVisible&&l.default.createElement("picture",null,E(D),l.default.createElement(L,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,c.default)({alt:a,title:t,loading:S},T,{imageVariants:D}))}}))}return null},t}(l.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),j=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});x.propTypes={resolutions:R,sizes:j,fixed:u.default.oneOfType([R,u.default.arrayOf(R)]),fluid:u.default.oneOfType([j,u.default.arrayOf(j)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var P=x;t.default=P},Cqjd:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAADRUlEQVQ4y2P4DwP/wADIePP+45qdh6snLEis7I0r7y7tmr1ww+5Hz19B1PwFq4EABgj19+9fIPn+05fGKUsUneOZNT0YlJwYVF0YVF2BDCZ1N3GbiKymyQ+evgQr/ofQDNF54fpdw8AsoFI2HW9uQ39+k0AB0yB+kyA+40AeowB2PR8GZWdZ++gtB07C9TNAdJ6/flfSNpJB3Y3PJJDLwA+omVXHi0HRkUHFmVXXm8fIHyjIZxLAou3JoeuzbvdRiJUgm999/KznnwHSaRwAVARUyqjhrumVUj9pcWrdBAXnOCYND6BxYKkAoKGiFiGXbz2AOru6fz7QtRA7eQz9mbU8df0yHr94DQmhj5+/xpZ2MWp6AHWC7DcOZFBx8c9uAGl++fa9jH0Um643xGyQnKJj5+xVQLnvP3/++QPy1PW7j4Ce59D35Tb0A6oBImAQHDt/jWHJpr0Mam68YFPhmjtmrQTq+f3nDyTybj98KmgWzKHng7BAyQnk3sKOmSA3GwdCNPMCJZSdJy3eANEMCdUrtx8APQW3Geh+Bg1316QKhrCCVgY1V7jNvMYBwBDObpwC1APUCtQPZCzfegAYhJAwh8eFhmcKQ3BeM7KzgRLAeFZwin326i08CQRkNwBTC5oaVfdEhvT6iQzKCGcDncSh58sgaxdf3v363ccv3763z1wB9BeLthePoT9MjT+TpodVZCHDlKWbgJ7kNYaayqThLmoVXtQxc8+xc91zVwODfcOeY+2zVqp5JDNrukPCjA8cLhkNkxjA0RDICQoMkGPqJi16+fYDJOn+/v3n1+/fEPbXbz9mrdwGDHOgSl5QgLmt330UlEgiitqBXgKmDaf4Mlg++QdEkGwG9DaQCfE8yDZVV6AXTIJzfv3+A9J8+dZ9MatwBjm79lkrgFy4bcgAklpW7zgEtINRw2PL/hOIjLEYmFSUnDfuOYZf8/0nz4FxVtk3D5JyGeD5a/qKLX0L1v4BmwWS+/8PqAGI/iHlfqDNtRMXYhQGYBWHzlzum792/4mLbz58+odkLTBvnLx0Y/KSjZv2HQfbiaoZrv/Tl6/bD52esXLr9OVbgLE4demm6cs3z1ixZd2uIy9ev4O4Fq4FAHqJtYQ/JS6YAAAAAElFTkSuQmCC","width":72,"height":72,"src":"/static/035ce7483ee8f639767376dfc414c0e6/e5b88/profile.png","srcSet":"/static/035ce7483ee8f639767376dfc414c0e6/e5b88/profile.png 1x,\\n/static/035ce7483ee8f639767376dfc414c0e6/e7bd6/profile.png 1.5x,\\n/static/035ce7483ee8f639767376dfc414c0e6/a12fc/profile.png 2x"}}},"site":{"siteMetadata":{"author":"[Your Name]","introduction":"I explain with words and code. I explain with words and code. I explain with words and code.","social":{"twitter":"","github":"","medium":"","facebook":"","linkedin":""}}}}}')},EXIE:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return c}));var n,r=a("1jzt"),i=a.n(r);function o(){return n=new i.a('a[href*="#"]',{speed:500,speedAsDuration:!0})}function s(){if(!n)throw Error("Not founded SmoothScroll instance");return n.destroy(),n=null}function c(e){if(!n)throw Error("Not founded SmoothScroll instance");return n.animateScroll(e),n}},INYr:function(e,t,a){"use strict";var n=a("XKFU"),r=a("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(i)},OGtf:function(e,t,a){var n=a("XKFU"),r=a("eeVq"),i=a("vhPU"),o=/"/g,s=function(e,t,a,n){var r=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RPjP:function(e,t,a){"use strict";e.exports=a("SLms")},SLms:function(e,t,a){"use strict";a("pIFo"),a("8+KV"),a("dZ+Y"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("DNiP"),a("V+eJ"),a("/SS/"),a("hHhE"),a("91GP"),a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=s(a("q1tI")),o=s(a("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=["shortname","identifier","title","url","category_id","onNewComment","language"],d=!1;function f(e,t){var a=t.onNewComment,n=t.language,r=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["onNewComment","language"]);for(var i in r)e.page[i]=r[i];e.language=n,a&&(e.callbacks={onNewComment:[a]})}var m=function(e){function t(){return c(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,a){return u.some((function(e){return e===a}))?t:n({},t,function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},a,e.props[a]))}),{});return i.default.createElement("div",t,i.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!d){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),d=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};u.forEach((function(a){"shortname"!==a&&e.props[a]&&(t[a]=e.props[a])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){f(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){f(this,t)},this.addDisqusScript())}}]),t}(i.default.Component);m.displayName="DisqusThread",m.propTypes={id:o.default.string,shortname:o.default.string.isRequired,identifier:o.default.string,title:o.default.string,url:o.default.string,category_id:o.default.string,onNewComment:o.default.func,language:o.default.string},m.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=m},hEkN:function(e,t,a){"use strict";a("OGtf")("anchor",(function(e){return function(t){return e(this,"a","name",t)}}))},lbRd:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a("0mN4");var n=a("Cqjd"),r=a("q1tI"),i=a.n(r),o=a("Wbzz"),s=a("9eSz"),c=a.n(s),l=(a("9H8W"),function(){return i.a.createElement(o.StaticQuery,{query:u,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social,r=t.introduction;return i.a.createElement("div",{className:"bio"},i.a.createElement("div",{className:"author"},i.a.createElement("div",{className:"author-description"},i.a.createElement(c.a,{className:"author-image",fixed:e.avatar.childImageSharp.fixed,alt:a,style:{borderRadius:"100%"}}),i.a.createElement("div",{className:"author-name"},i.a.createElement("span",{className:"author-name-prefix"},"Written by"),i.a.createElement(o.Link,{to:"/about",className:"author-name-content"},i.a.createElement("span",null,"@",a)),i.a.createElement("div",{className:"author-introduction"},r),i.a.createElement("p",{className:"author-socials"},n.github&&i.a.createElement("a",{href:"https://github.com/"+n.github},"GitHub"),n.medium&&i.a.createElement("a",{href:"https://medium.com/"+n.medium},"Medium"),n.twitter&&i.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"Twitter"),n.facebook&&i.a.createElement("a",{href:"https://www.facebook.com/"+n.facebook},"Facebook"),n.linkedin&&i.a.createElement("a",{href:"https://www.linkedin.com/in/"+n.linkedin+"/"},"LinkedIn"))))))},data:n})}),u="556011471"},yZlL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=(a("TsVF"),function(){return r.a.createElement("hr",{className:"custom-hr"})}),o=a("hpys"),s=a("CC2r"),c=function(e){var t=e.title;return r.a.createElement("h1",null,t)},l=function(e){var t=e.html;return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},u=(a("weRM"),function(e){var t=e.onClick;return r.a.createElement("a",{className:"resp-sharing-button__link",href:"#",target:"_blank",rel:"noopener","aria-label":"Share on Facebook",onClick:t},r.a.createElement("div",{className:"resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"},r.a.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"}))),r.a.createElement("span",{className:"service-label"},"Share on Facebook")))}),d=(a("hUWy"),function(e){var t=e.onClick;return r.a.createElement("a",{className:"resp-sharing-button__link",href:"#",rel:"noopener","aria-label":"Share on Twitter",onClick:t},r.a.createElement("div",{className:"resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"},r.a.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"}))),r.a.createElement("span",{className:"service-label"},"Share on Twitter")))}),f=(a("DMNx"),function(e){var t='Recommend on "'+e.title+'" written by @'+e.author;return r.a.createElement("div",{className:"social-share"},r.a.createElement(u,{onClick:function(e){return e.preventDefault(),function(e,t){window.FB.ui({method:"share",mobile_iframe:!0,href:e,quote:t})}(window.location.href,t)}}),r.a.createElement(d,{onClick:function(e){return e.preventDefault(),function(e,t){window.open("https://twitter.com/share?url="+encodeURI(encodeURI(e))+"&text="+t,"sharer","toolbar=0,status=0,width=626,height=436")}(window.location.href,t)}}))}),m=(a("jmfv"),function(e){var t=e.sponsorId;return r.a.createElement("div",{className:"sponsor-button"},r.a.createElement("a",{className:"bmc-button",target:"_blank",rel:"noopener noreferrer",href:"https://www.buymeacoffee.com/"+t},r.a.createElement("img",{src:"https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg",alt:"Buy me a coffee"}),r.a.createElement("span",null,"Buy me a coffee")))}),h=a("lbRd"),p=a("Wbzz"),g=(a("n1n/"),function(e){var t=e.pageContext,a=t.previous,n=t.next;return r.a.createElement("ul",{className:"navigator"},r.a.createElement("li",null,a&&r.a.createElement(p.Link,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),r.a.createElement("li",null,n&&r.a.createElement(p.Link,{to:n.fields.slug,rel:"next"},n.frontmatter.title," →")))}),b=a("RPjP"),v=a.n(b);function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var w=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={toasts:[]},a.notifyAboutComment=a.notifyAboutComment.bind(y(a)),a.onSnackbarDismiss=a.onSnackbarDismiss.bind(y(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},i.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},i.render=function(){var e=this.props,t=e.post,a=e.shortName,n=e.siteUrl+e.slug;return r.a.createElement(v.a,{shortname:a,identifier:t.frontmatter.title,title:t.frontmatter.title,url:n,category_id:t.frontmatter.category_id,onNewComment:this.notifyAboutComment})},n}(n.Component),E=(a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),function(e){var t=e.repo,a=r.a.createRef();return Object(n.useEffect)((function(){var e=document.createElement("script"),n={src:"https://utteranc.es/client.js",repo:t,branch:"master",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),a.current.appendChild(e)}),[]),r.a.createElement("div",{className:"utterences",ref:a})}),S=a("EXIE");a("uhgt"),a("vg9a");a.d(t,"pageQuery",(function(){return A}));t.default=function(e){var t=e.data,a=e.pageContext,u=e.location;Object(n.useEffect)((function(){return S.c(),function(){return S.a()}}),[]);var d=t.markdownRemark,p=t.site.siteMetadata,b=p.title,v=p.comment,y=p.siteUrl,A=p.author,C=p.sponsor,O=v.disqusShortName,I=v.utterances;return r.a.createElement(o.a,{location:u,title:b},r.a.createElement(s.a,{title:d.frontmatter.title,description:d.excerpt}),r.a.createElement(c,{title:d.frontmatter.title}),r.a.createElement(l,{html:d.html}),r.a.createElement(f,{title:d.frontmatter.title,author:A}),!!C.buyMeACoffeeId&&r.a.createElement(m,{sponsorId:C.buyMeACoffeeId}),r.a.createElement(i,null),r.a.createElement(h.a,null),r.a.createElement(g,{pageContext:a}),!!O&&r.a.createElement(w,{post:d,shortName:O,siteUrl:y,slug:a.slug}),!!I&&r.a.createElement(E,{repo:I}))};var A="1559320954"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-f6c6ad1bcef05964a138.js.map