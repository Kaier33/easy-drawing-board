!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("core-js/modules/es.array.slice.js"),require("core-js/modules/es.array.concat.js"),require("core-js/modules/es.array.map.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.split.js"),require("core-js/modules/es.string.replace.js"),require("core-js/modules/es.array.includes.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.array.fill.js"),require("core-js/modules/es.parse-int.js"),require("core-js/modules/es.array.index-of.js"),require("core-js/modules/es.object.keys.js"),require("core-js/modules/es.array.splice.js")):"function"==typeof define&&define.amd?define(["core-js/modules/es.array.slice.js","core-js/modules/es.array.concat.js","core-js/modules/es.array.map.js","core-js/modules/es.regexp.exec.js","core-js/modules/es.string.split.js","core-js/modules/es.string.replace.js","core-js/modules/es.array.includes.js","core-js/modules/es.object.to-string.js","core-js/modules/es.promise.js","core-js/modules/es.array.fill.js","core-js/modules/es.parse-int.js","core-js/modules/es.array.index-of.js","core-js/modules/es.object.keys.js","core-js/modules/es.array.splice.js"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).EasyDrawingBoard=e()}(this,(function(){"use strict";function t(t,e,n,i,r,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(i,r)}function e(e){return function(){var n=this,i=arguments;return new Promise((function(r,o){var a=e.apply(n,i);function s(e){t(a,r,o,s,c,"next",e)}function c(e){t(a,r,o,s,c,"throw",e)}s(void 0)}))}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}('.__edb-textarea-box {\n  position: absolute;\n  z-index: 101;\n  width: auto;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  word-wrap: break-word;\n  word-break: break-all;\n  color: #aaa;\n  border: 1px dashed gray;\n}\n.__edb-textarea-box .__edb-textarea {\n  resize: none;\n  background: transparent;\n  border: none;\n  padding: 1px;\n  outline: none;\n  font-family: "PingFang SC", "Microsoft YaHei", "微软雅黑";\n  overflow: hidden;\n}\n.__edb-text-pre {\n  position: absolute;\n  z-index: 999;\n  top: 0;\n  left: -9999px;\n  min-width: 100px;\n  display: inline-block;\n  padding: 1px;\n  border: 1px solid red;\n  font-family: "PingFang SC", "Microsoft YaHei", "微软雅黑";\n}\n.__edb-eraser-hover {\n  cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEm0lEQVRYR62XbUxbVRjH/7cUxlrWQW9fBmNsDGROwG1B6C1my5ahERcTTSRMcXIH6NwSv6gxmckMaPywxCXGQTdfMpuMwdiLbI5Fs7HhNCIGlNCOwTbGW3kr76hbJkKPuRdb29tyewDvlyb3Pvf8fs9znnN6LoP/6So0a7QEYdVKKJZNE5fV2jB6nGZohiYoWEzxdii7H7J/b9QYZiKUYcrG8T4ApMTaMF4c7N0lC7yeFqOaDv3rfpYxEVmGBJFnnxrCqd4WKoklCfCbIyMRHjLhDRcEbFNDqBAFhEu+EosW2JNpNIS4ZpxZxgRkGRI9lW6ZHESlw4YDuaniPUuVXVZiUQJ5Jm1sKMM4pPDmyQFUOewiPD3ZKAo0tjplJRYsUJSxMn5GoeyUwn+bGMCZPl+4uyxyEgsSKHhSt8E1S9qlc9400Y9zfTd9Mpd2v5dEsbVhvMT9nFqAN0elgihs0syFJXe+v1UWLlcJKoF8ky6NYUiTNPNfxh2o7r9FBRckmlqHYTljAyH/rY6gArxJy4FhfpZm3jDmwIUBevivbcNiMyavMGK9OgoXB9pACLNPViA/U7+NcbluSOH1Y734ZqCNOvPm9hERvjHCgLy4TeKM1A53oM7Z1TKvQAHHZrmAq1L4T6M9uDTYTg1vuT0qwjeo9R64W+C6szOwAG/SPwvGdVkK/3G0G5cHb1PDbXfHYDltQ5LKH17rvBd4CvgM9nkoUC2F3xjpwrdDd6jhNzsEuB2Jy3V+mQtwgIjL0WcKeE63HSB1Uvj3I134bgHwW53jKKu0IyGclcDvodbZ4bM1BxW4PtyJK8671Jm3d02grNKG+GXB4UIv+Ajk5CAkamTNpemHD7KFKjBgcNXZQQ2/0zOJsgob1oZpZcvuvUt6BPJMWo06XHUhNjElzZS9W1P58dtinPcfi9zhoqN3EqUVdsSFRs1Xdp8t2GcrfiVNFx2uDvs6em1SSmHJlxFh4SrY669AkOAeX4V9L6bIHmw6+6ZEeGxIJHXmHoFCsz4RIcpz+tXrHuEPHVNptAYPzC2xdUsMCl54LKBEV//vKK2wYbVCCvdvuEADMEXbYuojdas27zl4dPnFzz6E6ZndSM182k9iR3osXn3uUZ8xegb/QOkpG6KZlfNlHvRcyOw1a98nhCnZmbtfHPxa1TG89M6RgBJPmePwcnaSGOcY+lOEG6FZNNyzCniOfQ/AR3MSDK5VWeaV2LV1HcybVuFouR0GsiLoOpdtHu9lmM+x7zLAYe9KFH1wAutT0v2mI0avBju9dLjfPsBz2rcA5oi7EvHJT/gICC+4G3NLZAxy18wdPGuH6RouYBNKb/Ic+yaAT3fmHoAg8sWhAvE3UCUy2TiolKH4d28P2nBUAkLQXo7dTwCLICFc0kqc/eQgaf6hxmsXpfsKohYQAnlO9xpAPndXwv1ytaWYNNaeZ0AUu6CYVYMgmeYTbL5mlD0R8RzLA/jKLVFz4rCrvqZcAQUyrPVjjcE6nOZ50DNhPqfLY0DKd+S84ao7e1wBzMZbGya7aQaniQkqMNcT2lwC5vTsA2XESZvzPs3AtDH/ANJxaF2ajW5TAAAAAElFTkSuQmCC") 0 32, auto;\n}\n');var o=function(t){var e,n=Object.prototype,i=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(t,e,n,i){var r=e&&e.prototype instanceof v?e:v,o=Object.create(r.prototype),a=new A(i||[]);return o._invoke=function(t,e,n){var i=h;return function(r,o){if(i===d)throw new Error("Generator is already running");if(i===f){if("throw"===r)throw o;return S()}for(n.method=r,n.arg=o;;){var a=n.delegate;if(a){var s=k(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=d;var c=u(t,e,n);if("normal"===c.type){if(i=n.done?f:l,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=f,n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var h="suspendedStart",l="suspendedYield",d="executing",f="completed",g={};function v(){}function p(){}function y(){}var x={};x[o]=function(){return this};var m=Object.getPrototypeOf,w=m&&m(m(H([])));w&&w!==n&&i.call(w,o)&&(x=w);var b=y.prototype=v.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function C(t,e){function n(r,o,a,s){var c=u(t[r],t,o);if("throw"!==c.type){var h=c.arg,l=h.value;return l&&"object"==typeof l&&i.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(l).then((function(t){h.value=t,a(h)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var r;this._invoke=function(t,i){function o(){return new e((function(e,r){n(t,i,e,r)}))}return r=r?r.then(o,o):o()}}function k(t,n){var i=t.iterator[n.method];if(i===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var r=u(i,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,g;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function H(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function n(){for(;++r<t.length;)if(i.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return p.prototype=b.constructor=y,y.constructor=p,y[s]=p.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},j(C.prototype),C.prototype[a]=function(){return this},t.AsyncIterator=C,t.async=function(e,n,i,r,o){void 0===o&&(o=Promise);var a=new C(c(e,n,i,r),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(b),b[s]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},t.values=H,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(i,r){return s.type="throw",s.arg=t,n.next=i,r&&(n.method="next",n.arg=e),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;L(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,i){return this.delegate={iterator:H(t),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=e),g}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=o}catch(t){Function("r","regeneratorRuntime = r")(o)}var a=function(){function t(){n(this,t)}return r(t,null,[{key:"createEl",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",e=arguments.length>1?arguments[1]:void 0,n=e.styles,i=void 0===n?{}:n,r=e.attrs,o=void 0===r?{}:r,a=e.props,s=void 0===a?{}:a,c=document.createElement(t);return Object.keys(i).map((function(t){c.style[t]=i[t]})),Object.keys(o).map((function(t){c.setAttribute(t,o[t])})),Object.keys(s).map((function(t){c[t]=s[t]})),c}},{key:"hasClass",value:function(t,e){return t.classList.contains(e)}},{key:"addClass",value:function(t,e){t.classList.add(e)}},{key:"removeClass",value:function(t,e){t.classList.remove(e)}},{key:"setAttr",value:function(t,e,n){t.setAttribute(e,n)}},{key:"delAttr",value:function(t,e){t.removeAttribute(e)}},{key:"appendChild",value:function(t,e){t.appendChild(e)}},{key:"removeChild",value:function(t,e){t.removeChild(e)}}]),t}();function s(t,e){var n=e.canvasWidth,i=e.canvasHeight,r=e.arrowSize;t.save(),t.beginPath(),t.moveTo(e.points[0].x*n,e.points[0].y*i);for(var o=function(t,e,n,i){var r=function(t,e,n){var i=Math.atan2(e.y-t.y,e.x-t.x),r=.6,o=.3,a=n/3*2,s={x:e.x-Math.round(n*Math.cos(i+r)),y:e.y-Math.round(n*Math.sin(i+r))},c={x:e.x-Math.round(n*Math.cos(i-r)),y:e.y-Math.round(n*Math.sin(i-r))},u={x:e.x-Math.round(a*Math.cos(i+o)),y:e.y-Math.round(a*Math.sin(i+o))};return[t,{x:e.x-Math.round(a*Math.cos(i-o)),y:e.y-Math.round(a*Math.sin(i-o))},c,e,s,u]}(n,e,i);!function(t,e){t.beginPath(),t.moveTo(e[0].x,e[0].y);for(var n=1;n<e.length;n++)t.lineTo(e[n].x,e[n].y);t.closePath(),t.fill()}(t,r)},a=1;a<e.points.length;a++)o(t,{x:e.points[a].x*n,y:e.points[a].y*i},{x:e.points[a-1].x*n,y:e.points[a-1].y*i},r);t.restore()}function c(t){return u.apply(this,arguments)}function u(){return(u=e(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var i=new Image;i.setAttribute("crossOrigin","anonymous"),i.onerror=n,i.onload=function(){return t(i)},i.src=e})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,n,i){return new Promise(function(){var r=e(regeneratorRuntime.mark((function e(r,o){var s,u,h,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.toDataURL("image/".concat(i)),u=a.createEl("canvas",{styles:{width:"".concat(t.width,"px"),height:"".concat(t.height,"px")},attrs:{width:t.width,height:t.height}}),h=u.getContext("2d"),e.next=5,c(n);case 5:return!(l=e.sent)&&o(),h.drawImage(l,0,0,t.width,t.height),e.next=10,c(s);case 10:!(d=e.sent)&&o(),h.drawImage(d,0,0,t.width,t.height),r(u.toDataURL("image/".concat(i)));case 14:case"end":return e.stop()}}),e)})));return function(t,e){return r.apply(this,arguments)}}())}function l(t,e,n,i){var r=t.getBoundingClientRect();return{x:(n-r.left-parseInt(e.paddingLeft)-parseInt(e.borderLeftWidth))*(t.width/parseInt(e.width)),y:(i-r.top-parseInt(e.paddingTop)-parseInt(e.borderTopWidth))*(t.height/parseInt(e.height))}}var d=function(){function t(){n(this,t),this._event={}}return r(t,[{key:"on",value:function(t,e){var n=this._event;t in n||(n[t]=[]),n[t].push(e)}},{key:"off",value:function(t,e){var n=this._event;if(t in n){e||(n[t]=[]);var i=n[t].indexOf(e);i>=0&&n[t].splice(i,1)}}},{key:"trigger",value:function(t,e){var n=this._event;if(n[t])for(var i=0;i<n[t].length;i++){n[t][i].call(this,e)}}},{key:"removeAllListeners",value:function(){this._event={}}}]),t}(),f=function(){function t(e){n(this,t);var i=e.container,r=e.bgImg,o=void 0===r?"":r,a=e.lineColor,s=void 0===a?"#f00":a,c=e.lineWidth,u=void 0===c?"1":c,h=e.arrowSize,l=void 0===h?15:h,f=e.eraserSize,g=void 0===f?10:f,v=e.canvasBgColor,p=void 0===v?"#fff":v,y=e.textFontSize,x=void 0===y?16:y,m=e.textLineHeight,w=void 0===m?20:m,b=e.textColor,j=void 0===b?"#f00":b,C=e.textareaPlaceholder,k=void 0===C?-1!==navigator.language.indexOf("zh")?"请点击输入":"Type here...":C,E=e.ratio,L=void 0===E?window.devicePixelRatio||1:E;if(!i)throw Error("No container element were found...");this.configuration={bgImg:o,ratio:L,lineColor:s,lineWidth:u*L,arrowSize:l*L,eraserSize:g*L,textFontSize:x*L,textLineHeight:w*L,textColor:j,canvasBgColor:p,textareaPlaceholder:k},this.container=this.createCanvasOuterBox(i),this.canvas=this.createCanvasEl(this.container,this),this.context=this.canvas.getContext("2d"),this.mode="pencil",this.canvasWidth=this.canvas.width,this.canvasHeight=this.canvas.height,this.originX=null,this.originY=null,this.arrowPoints=[],this.isDrawing=!1,this.image=new Image,this.textareaEl=null,this.measureEl=null,this.historyImage=new Image,this.undoQueue=[],this.redoQueue=[],this.firstDraw=null,this.evt=new d,this.init()}var i;return r(t,[{key:"createCanvasOuterBox",value:function(t){var e=a.createEl("div",{styles:{height:"".concat(t.clientHeight,"px"),width:"".concat(t.clientWidth,"px"),position:"relative",top:"0"}});return a.appendChild(t,e),e}},{key:"createCanvasEl",value:function(t,e){var n=a.createEl("canvas",{styles:{height:"".concat(t.clientHeight,"px"),width:"".concat(t.clientWidth,"px")},attrs:{width:t.clientWidth*e.configuration.ratio,height:t.clientHeight*e.configuration.ratio}});return a.appendChild(t,n),n}},{key:"init",value:function(){this.canvas_style=window.getComputedStyle(this.canvas),this.context.lineCap="round",this.clear(),this.setBackground(),this.createTextMeasure(),this.canvas.addEventListener("mousedown",this.mouseDown.bind(this)),this.canvas.addEventListener("mousemove",this.mouseMove.bind(this)),this.canvas.addEventListener("mouseup",this.endOfDrawing.bind(this)),this.canvas.addEventListener("mouseleave",this.endOfDrawing.bind(this))}},{key:"mouseDown",value:function(t){this.isDrawing=!0,this.image.src=this.canvas.toDataURL("image/png"),this.redoQueue.length=0;var e=t.clientX,n=t.clientY,i=l(this.canvas,this.canvas_style,e,n),r=i.x,o=i.y;this.originX=r,this.originY=o,this.ft_originX=this.originX,this.ft_originY=this.originY,this.context.moveTo(this.originX,this.originY),this.context.lineWidth=this.configuration.lineWidth,this.context.strokeStyle=this.configuration.lineColor,this.context.fillStyle=this.configuration.lineColor,this.context.beginPath(),"arrow"===this.mode&&this.saveArrowPoint({x:this.originX,y:this.originY}),"text"===this.mode&&this.createTextArea({x:this.ft_originX,y:this.ft_originY}),this.mode&&"text"!==this.mode&&this.evt.trigger("drawBegin",{x:r,y:o,clientX:e,clientY:n})}},{key:"mouseMove",value:function(t){if(this.isDrawing){var e=t.clientX,n=t.clientY,i=l(this.canvas,this.canvas_style,e,n),r=i.x,o=i.y,a=this.originX,s=this.originY,c=Math.abs(r-this.originX),u=Math.abs(o-this.originY);r<this.originX&&(a=r),o<this.originY&&(s=o);var h={x:r,y:o,originX:this.originY,originY:this.originY,newOriginX:a,newOriginY:s,distanceX:c,distanceY:u,ft_originX:this.ft_originX,ft_originY:this.ft_originY},d=this.handleMousemove()[this.mode];d&&d(h),this.mode&&"text"!==this.mode&&this.evt.trigger("drawing",{x:r,y:o,clientX:e,clientY:n})}}},{key:"reDraw",value:function(){this.context.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.context.drawImage(this.image,0,0),this.context.beginPath()}},{key:"endOfDrawing",value:function(t){if(this.isDrawing){var e=t.clientX,n=t.clientY,i=l(this.canvas,this.canvas_style,e,n),r=i.x,o=i.y;this.context.closePath(),this.isDrawing=!1,this.addHistory(),this.mode&&"text"!==this.mode&&this.evt.trigger("drawEnd",{x:r,y:o,clientX:e,clientY:n})}}},{key:"addHistory",value:function(){var t=this.canvas.toDataURL("image/png");this.undoQueue.push(t);var e=this.undoQueue.length;e>20&&(this.firstDraw=this.undoQueue[0],this.undoQueue=this.undoQueue.slice(-20,e))}},{key:"setBackground",value:function(){this.configuration.bgImg&&(this.context.globalCompositeOperation="destination-out",this.context.fillRect(0,0,this.canvasWidth,this.canvasHeight),this.canvas.style.background="url(".concat(this.configuration.bgImg,")"),this.canvas.style.backgroundSize="100% 100%",this.canvas.style.backgroundPosition="center",this.canvas.style.backgroundRepeat="no-repeat",this.context.globalCompositeOperation="source-over")}},{key:"handleMousemove",value:function(){var t=this;return{pencil:function(e){var n=e.x,i=e.y;t.context.lineTo(n,i),t.context.stroke()},straightLine:function(e){var n=e.x,i=e.y,r=e.ft_originX,o=e.ft_originY;t.reDraw(),t.context.moveTo(r,o),t.context.lineTo(n,i),t.context.stroke()},rect:function(e){var n=e.newOriginX,i=e.newOriginY,r=e.distanceX,o=e.distanceY;t.reDraw(),t.context.rect(n,i,r,o),t.context.stroke(),t.context.closePath()},circle:function(e){var n=e.newOriginX,i=e.newOriginY,r=e.distanceX,o=e.distanceY;t.reDraw();var a=Math.sqrt(r*r+o*o);t.context.arc(n+r,i+o,a,0,2*Math.PI),t.context.stroke()},arrow:function(e){var n=e.x,i=e.y;t.reDraw(),t.arrowPoints[1]={x:n/t.canvasWidth,y:i/t.canvasHeight},s(t.context,{points:t.arrowPoints,arrowSize:t.configuration.arrowSize,canvasWidth:t.canvasWidth,canvasHeight:t.canvasHeight})},eraser:function(e){var n=e.x,i=e.y;t.configuration.bgImg&&(t.context.globalCompositeOperation="destination-out"),t.context.strokeStyle=t.configuration.canvasBgColor,t.context.fillStyle=t.configuration.canvasBgColor,t.context.lineWidth=t.configuration.eraserSize,t.context.lineTo(n,i),t.context.stroke()},clear:function(){return t.clear()}}}},{key:"saveArrowPoint",value:function(t){this.arrowPoints=[],this.arrowPoints.push({x:t.x/this.canvasWidth,y:t.y/this.canvasHeight})}},{key:"createTextMeasure",value:function(){this.measureEl&&(a.removeChild(this.container,this.measureEl),this.measureEl=null),this.measureEl=a.createEl("pre",{styles:{fontSize:"".concat(this.configuration.textFontSize,"px"),lineHeight:"".concat(this.configuration.textLineHeight,"px"),color:this.configuration.textColor}}),a.addClass(this.measureEl,"__edb-text-pre"),a.appendChild(this.container,this.measureEl)}},{key:"drawText",value:function(t,e){e.font=e.font||'"PingFang SC","Microsoft YaHei","微软雅黑"';var n=e.text;t.save(),t.textBaseline="middle",t.font="".concat(e.textFontSize,"px/").concat(e.textLineHeight,"px ").concat(e.font),t.fillStyle=e.textColor,t.globalCompositeOperation="source-over",n.replace(/<br>/g,"\n").split(/\n/).map((function(n,i){t.fillText(n,e.position.x+2,e.position.y+i*e.textLineHeight+e.textLineHeight/2+2)})),t.restore()}},{key:"createTextArea",value:function(t){var e=this;this.mode=null,this.boxDom&&a.removeChild(this.container,this.boxDom),this.boxDom=a.createEl("div",{styles:{position:"absolute",left:"".concat(t.x/this.configuration.ratio,"px"),top:"".concat(t.y/this.configuration.ratio,"px"),lineHeight:"".concat(this.configuration.textLineHeight/this.configuration.ratio,"px"),fontSize:"".concat(this.configuration.textFontSize/this.configuration.ratio,"px")}}),a.addClass(this.boxDom,"__edb-textarea-box"),this.textareaEl=a.createEl("textarea",{styles:{color:this.configuration.textColor,lineHeight:"".concat(this.configuration.textLineHeight/this.configuration.ratio,"px"),fontSize:"".concat(this.configuration.textFontSize/this.configuration.ratio,"px")},props:{placeholder:this.configuration.textareaPlaceholder,autofocus:!0}}),a.addClass(this.textareaEl,"__edb-textarea"),a.appendChild(this.boxDom,this.textareaEl),a.appendChild(this.container,this.boxDom),setTimeout((function(){e.textareaEl.onblur=function(){e.mode=null,a.delAttr(e.textareaEl,"autofocus"),e.drawText(e.context,{text:e.textareaEl.value,textColor:e.configuration.textColor,textFontSize:e.configuration.textFontSize,textLineHeight:e.configuration.textLineHeight,position:t}),a.removeChild(e.container,e.boxDom),e.boxDom=null,e.textareaEl=null},e.textareaEl.addEventListener("input",(function(t){e.measureEl.innerHTML=t.target.value+" ",e.textareaEl.style.width=e.measureEl.clientWidth/e.configuration.ratio+"px",e.textareaEl.style.height=e.measureEl.clientHeight/e.configuration.ratio+"px"}))}),50)}},{key:"resetBgImg",value:function(){this.redoQueue.length=0,this.undoQueue.length=0,this.clear(!1),this.setBackground()}},{key:"config",value:function(t,e){switch(["lineWidth","arrowSize","eraserSize","textFontSize","textLineHeight"].includes(t)?this.configuration[t]=e*this.configuration.ratio:this.configuration[t]=e,t){case"canvasBgColor":this.clear(!1);break;case"bgImg":this.resetBgImg();break;case"textFontSize":case"textColor":case"textLineHeight":this.createTextMeasure()}}},{key:"setMode",value:function(t){this.context.globalCompositeOperation="source-over",this.context.strokeStyle=this.configuration.lineColor,this.context.fillStyle=this.configuration.lineColor,this.context.lineWidth=this.configuration.lineWidth,"eraser"===t?a.addClass(this.container,"__edb-eraser-hover"):a.removeClass(this.container,"__edb-eraser-hover"),this.mode=t}},{key:"undo",value:function(){var t=this,e=this.undoQueue.length;if(0!==e){if(1===e){if(!this.firstDraw)return this.redoQueue.push(this.undoQueue.pop()),void this.clear(!1);this.historyImage.src=this.firstDraw}else this.historyImage.src=this.undoQueue[e-2];this.historyImage.onload=function(){t.clear(!1),t.context.drawImage(t.historyImage,0,0),t.redoQueue.push(t.undoQueue.pop())}}}},{key:"redo",value:function(){var t=this;0!==this.redoQueue.length&&(this.undoQueue.push(this.redoQueue.pop()),this.historyImage.src=this.undoQueue[this.undoQueue.length-1],this.historyImage.onload=function(){t.clear(!1),t.context.drawImage(t.historyImage,0,0)})}},{key:"generateBase64",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"png";return new Promise(function(){var i=e(regeneratorRuntime.mark((function e(i){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.configuration.bgImg){e.next=7;break}return e.next=3,h(t.canvas,t.configuration.bgImg,n);case 3:r=e.sent,i(r),e.next=8;break;case 7:i(t.canvas.toDataURL("image/".concat(n)));case 8:case"end":return e.stop()}}),e)})));return function(t){return i.apply(this,arguments)}}())}},{key:"saveImg",value:(i=e(regeneratorRuntime.mark((function t(){var e,n,i=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=i.length>0&&void 0!==i[0]?i[0]:{type:"png",fileName:"canvas_image"},n=null,!this.configuration.bgImg){t.next=8;break}return t.next=5,h(this.canvas,this.configuration.bgImg,e.type);case 5:n=t.sent,t.next=9;break;case 8:n=this.canvas.toDataURL("image/".concat(e.type));case 9:a.createEl("a",{attrs:{href:n,download:"".concat(e.fileName,".").concat(e.type)}}).click();case 11:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"clear",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.context.fillStyle=this.configuration.canvasBgColor,this.context.fillRect(0,0,this.canvasWidth,this.canvasHeight),this.configuration.bgImg&&(this.context.globalCompositeOperation="destination-out",this.context.fillRect(0,0,this.canvasWidth,this.canvasHeight),this.context.globalCompositeOperation="source-over"),this.undoQueue.length&&t){var e=this.canvas.toDataURL("image/png");this.undoQueue.push(e)}}}]),t}();return f}));
