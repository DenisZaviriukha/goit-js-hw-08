!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),g=Object.prototype.toString,v=Math.max,y=Math.min,p=function(){return s.Date.now()};function m(e,t,n){var o,r,u,f,a,l,c=0,d=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError(i);function m(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,a=setTimeout(T,t),d?m(e):f}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function T(){var e=p();if(S(e))return w(e);a=setTimeout(T,function(e){var n=t-(e-l);return s?y(n,u-(e-c)):n}(e))}function w(e){return a=void 0,g&&o?m(e):(o=r=void 0,f)}function O(){var e=p(),n=S(e);if(o=arguments,r=this,l=e,n){if(void 0===a)return j(l);if(s)return a=setTimeout(T,t),m(l)}return void 0===a&&(a=setTimeout(T,t)),f}return t=h(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(h(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=l=r=a=void 0},O.flush=function(){return void 0===a?f:w(p())},O}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==g.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=f.test(t);return i||a.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:o,maxWait:t,trailing:r})};var j=document.querySelector("iframe"),S=new Vimeo.Player(j),T=0,w="videoplayer-current-time";localStorage.getItem(w)||localStorage.setItem(w,JSON.stringify(T));var O=e(t)((function(){localStorage.setItem(w,JSON.stringify(T)),console.log(localStorage.getItem(w))}),1e3);S.on("play",(function(){console.log("played the video!")})),S.getVideoTitle().then((function(e){console.log("title:",e)})),S.on("timeupdate",(function(e){T=e.seconds,O()})),S.setCurrentTime(localStorage.getItem(w))}();
//# sourceMappingURL=02-video.692e8ee5.js.map