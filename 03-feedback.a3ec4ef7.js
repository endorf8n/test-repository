!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("6Sco9"),a=document.querySelector(".feedback-form"),i={};!function(){var e=r.default.load("contactFormData");if(void 0!==e)for(var t in console.log(e),e)a.elements[t].value=e[t]}();a.addEventListener("change",(function(e){var t=e.target,n=t.value,o=t.name;i[o]=n,r.default.save("contactFormData",i)})),a.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),r.default.remove("contactFormData")}))}();
//# sourceMappingURL=03-feedback.a3ec4ef7.js.map
