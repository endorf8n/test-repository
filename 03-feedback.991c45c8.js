var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("bOFJ0");const a=document.querySelector(".feedback-form"),l={};(()=>{const e=r.default.load("contactFormData");if(void 0!==e){console.log(e);for(const t in e)a.elements[t].value=e[t]}})();a.addEventListener("change",(e=>{const t=e.target,o=t.value,n=t.name;l[n]=o,r.default.save("contactFormData",l)})),a.addEventListener("submit",(e=>{e.preventDefault();e.target.reset(),r.default.remove("contactFormData")}));
//# sourceMappingURL=03-feedback.991c45c8.js.map
