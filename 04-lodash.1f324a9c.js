function t(t){return t&&t.__esModule?t.default:t}var n,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,p=Math.min,v=function(){return l.Date.now()};function y(t,n,e){var i,o,r,f,u,a,c=0,l=!1,d=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(n){var e=i,r=o;return i=o=void 0,c=n,f=t.apply(r,e)}function j(t){return c=t,u=setTimeout(w,n),l?m(t):f}function h(t){var e=t-a;return void 0===a||e>=n||e<0||d&&t-c>=r}function w(){var t=v();if(h(t))return T(t);u=setTimeout(w,function(t){var e=n-(t-a);return d?p(e,r-(t-c)):e}(t))}function T(t){return u=void 0,y&&i?m(t):(i=o=void 0,f)}function x(){var t=v(),e=h(t);if(i=arguments,o=this,a=t,e){if(void 0===u)return j(a);if(d)return u=setTimeout(w,n),m(a)}return void 0===u&&(u=setTimeout(w,n)),f}return n=g(n)||0,b(e)&&(l=!!e.leading,r=(d="maxWait"in e)?s(g(e.maxWait)||0,n):r,y="trailing"in e?!!e.trailing:y),x.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=a=o=u=void 0},x.flush=function(){return void 0===u?f:T(v())},x}function b(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var e=r.test(t);return e||f.test(t)?u(t.slice(2),e?2:8):o.test(t)?NaN:+t}n=function(t,n,e){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return b(e)&&(i="leading"in e?!!e.leading:i,o="trailing"in e?!!e.trailing:o),y(t,n,{leading:i,maxWait:n,trailing:o})};document.addEventListener("scroll",t(n)((t=>{console.log("Hello!")}),300));
//# sourceMappingURL=04-lodash.1f324a9c.js.map
