var Draggable;Draggable=function(){var t={521:function(t,e,n){var o,i,r;function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(463)],void 0===(r="function"==typeof(o=function(n,o){"use strict";function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=f(t);if(e){var i=f(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var d,h=function(t){i(n,t);var e=l(n);function n(t){var o,i=t.dialogId,r=t.elementThatCaptureTheClick,u=t.showButtonId,l=t.hideButtonId,c=t.centerElement,f=void 0!==c&&c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),s(a(o=e.call(this,{dialogId:i,elementThatCaptureTheClick:r,showButtonId:u,hideButtonId:l,centerElement:f})),"updateLastTouch",(function(t){o.lastTouchX=t.clientX,o.lastTouchY=t.clientY})),s(a(o),"updatePositionWhenHoldTouch",(function(t){if(1===t.touches.length){var e=t.touches[0],n=e.clientX-o.lastTouchX,i=e.clientY-o.lastTouchY;o.updatePosition(n,i),o.updateLastTouch(e)}})),s(a(o),"touch",(function(t){var e=t.touches[0];window.ontouchmove=o.updatePositionWhenHoldTouch,window.ontouchend=o.endTouch,o.updateLastTouch(e)})),s(a(o),"endTouch",(function(){window.ontouchmove=null,window.ontouchend=null})),o.lastTouchX=0,o.lastTouchY=0,o.elementThatCaptureTheClick.ontouchstart=o.touch,o}return n}((d=o,o=d&&d.__esModule?d:{default:d}).default);n.default=h,t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},463:function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(988)],void 0===(r="function"==typeof(o=function(n,o){"use strict";function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,i=!1,r=void 0;try{for(var u,l=t[Symbol.iterator]();!(o=(u=l.next()).done)&&(n.push(u.value),!e||n.length!==e);o=!0);}catch(t){i=!0,r=t}finally{try{o||null==l.return||l.return()}finally{if(i)throw r}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default=function t(e){var n=this,r=e.dialogId,l=e.elementThatCaptureTheClick,c=e.showButtonId,a=e.hideButtonId,f=e.centerElement;(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),u(this,"centerDialog",(function(){var t=i((0,o.getPositionTocenterElement)(n.dialog,window),2),e=t[0],r=t[1];n.top=e,n.left=r,n.updatePosition(0,0)})),u(this,"updatePosition",(function(t,e){n.top=n.top+e,n.left=n.left+t,n.dialog.style.top=String(n.top)+"px",n.dialog.style.left=String(n.left)+"px"})),u(this,"updatePositionWhenHoldClick",(function(t){n.updatePosition(t.movementX,t.movementY)})),u(this,"click",(function(t){window.onmousemove=n.updatePositionWhenHoldClick,window.onmouseup=n.endClick})),u(this,"endClick",(function(){window.onmousemove=null,window.onmouseup=null})),this.top=0,this.left=0,this.dialog=document.getElementById(r),this.elementThatCaptureTheClick=document.getElementById(l),f&&this.centerDialog(),this.elementThatCaptureTheClick.onmousedown=this.click,(0,o.addEventToHideAndShowDialog)(a,c,r)},t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},988:function(t,e){var n,o;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,void 0===(o="function"==typeof(n=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPositionTocenterElement=t.addEventToHideAndShowDialog=t.hideDialogWhenButtonIsActive=t.showDialogWhenButtonIsActive=t.hideDialog=t.calculatesTheValueOfAdimensionToCenterElementFromPercentage=t.calculatesTheTopValueOfAdimensionToCenterElement=t.calculatesTheLeftValueOfAdimensionToCenterElement=void 0;t.getPositionTocenterElement=function(t,o){var i=t.clientHeight,r=t.clientWidth,u=o.innerHeight,l=o.innerWidth;return[n(u,i),e(l,r)]};var e=function(t,e){return(t-e)/2};t.calculatesTheLeftValueOfAdimensionToCenterElement=e;var n=function(t,e){return(t-e)/2};t.calculatesTheTopValueOfAdimensionToCenterElement=n;t.calculatesTheValueOfAdimensionToCenterElementFromPercentage=function(t,e){return(t-e/100*t)/2};var o=function(t){document.getElementById(t).style.display="none"};t.hideDialog=o;var i=function(t,e){document.getElementById(t).onclick=function(){return function(t){document.getElementById(t).style.display=""}(e)}};t.showDialogWhenButtonIsActive=i;var r=function(t,e){document.getElementById(t).onclick=function(){return o(e)}};t.hideDialogWhenButtonIsActive=r;t.addEventToHideAndShowDialog=function(t,e,n){t&&r(t,n),e&&(o(n),i(e,n))}})?n.apply(e,[e]):n)||(t.exports=o)}},e={};return function n(o){if(e[o])return e[o].exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}(521)}();