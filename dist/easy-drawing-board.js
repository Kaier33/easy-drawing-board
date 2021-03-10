!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("core-js/modules/es.array.concat"),require("core-js/modules/es.array.map"),require("core-js/modules/es.array.slice"),require("core-js/modules/es.object.to-string"),require("core-js/modules/es.promise"),require("core-js/modules/es.regexp.exec"),require("core-js/modules/es.string.replace"),require("core-js/modules/es.string.split"),require("core-js/modules/es.array.fill"),require("core-js/modules/es.array.index-of"),require("core-js/modules/es.object.keys")):"function"==typeof define&&define.amd?define(["core-js/modules/es.array.concat","core-js/modules/es.array.map","core-js/modules/es.array.slice","core-js/modules/es.object.to-string","core-js/modules/es.promise","core-js/modules/es.regexp.exec","core-js/modules/es.string.replace","core-js/modules/es.string.split","core-js/modules/es.array.fill","core-js/modules/es.array.index-of","core-js/modules/es.object.keys"],e):(t=t||self).EasyDrawingBoard=e()}(this,(function(){"use strict";!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}('.__edb-textarea-box {\n  position: absolute;\n  z-index: 101;\n  width: auto;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  word-wrap: break-word;\n  word-break: break-all;\n  color: #aaa;\n  border: 1px dashed gray;\n}\n.__edb-textarea-box .__edb-textarea {\n  resize: none;\n  background: transparent;\n  border: none;\n  padding: 1px;\n  outline: none;\n  font-family: "PingFang SC", "Microsoft YaHei", "微软雅黑";\n  overflow: hidden;\n}\n.__edb-text-pre {\n  position: absolute;\n  z-index: 999;\n  top: 0;\n  left: -9999px;\n  min-width: 100px;\n  display: inline-block;\n  padding: 1px;\n  border: 1px solid red;\n  font-family: "PingFang SC", "Microsoft YaHei", "微软雅黑";\n}\n.__edb-eraser-hover {\n  cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEm0lEQVRYR62XbUxbVRjH/7cUxlrWQW9fBmNsDGROwG1B6C1my5ahERcTTSRMcXIH6NwSv6gxmckMaPywxCXGQTdfMpuMwdiLbI5Fs7HhNCIGlNCOwTbGW3kr76hbJkKPuRdb29tyewDvlyb3Pvf8fs9znnN6LoP/6So0a7QEYdVKKJZNE5fV2jB6nGZohiYoWEzxdii7H7J/b9QYZiKUYcrG8T4ApMTaMF4c7N0lC7yeFqOaDv3rfpYxEVmGBJFnnxrCqd4WKoklCfCbIyMRHjLhDRcEbFNDqBAFhEu+EosW2JNpNIS4ZpxZxgRkGRI9lW6ZHESlw4YDuaniPUuVXVZiUQJ5Jm1sKMM4pPDmyQFUOewiPD3ZKAo0tjplJRYsUJSxMn5GoeyUwn+bGMCZPl+4uyxyEgsSKHhSt8E1S9qlc9400Y9zfTd9Mpd2v5dEsbVhvMT9nFqAN0elgihs0syFJXe+v1UWLlcJKoF8ky6NYUiTNPNfxh2o7r9FBRckmlqHYTljAyH/rY6gArxJy4FhfpZm3jDmwIUBevivbcNiMyavMGK9OgoXB9pACLNPViA/U7+NcbluSOH1Y734ZqCNOvPm9hERvjHCgLy4TeKM1A53oM7Z1TKvQAHHZrmAq1L4T6M9uDTYTg1vuT0qwjeo9R64W+C6szOwAG/SPwvGdVkK/3G0G5cHb1PDbXfHYDltQ5LKH17rvBd4CvgM9nkoUC2F3xjpwrdDd6jhNzsEuB2Jy3V+mQtwgIjL0WcKeE63HSB1Uvj3I134bgHwW53jKKu0IyGclcDvodbZ4bM1BxW4PtyJK8671Jm3d02grNKG+GXB4UIv+Ajk5CAkamTNpemHD7KFKjBgcNXZQQ2/0zOJsgob1oZpZcvuvUt6BPJMWo06XHUhNjElzZS9W1P58dtinPcfi9zhoqN3EqUVdsSFRs1Xdp8t2GcrfiVNFx2uDvs6em1SSmHJlxFh4SrY669AkOAeX4V9L6bIHmw6+6ZEeGxIJHXmHoFCsz4RIcpz+tXrHuEPHVNptAYPzC2xdUsMCl54LKBEV//vKK2wYbVCCvdvuEADMEXbYuojdas27zl4dPnFzz6E6ZndSM182k9iR3osXn3uUZ8xegb/QOkpG6KZlfNlHvRcyOw1a98nhCnZmbtfHPxa1TG89M6RgBJPmePwcnaSGOcY+lOEG6FZNNyzCniOfQ/AR3MSDK5VWeaV2LV1HcybVuFouR0GsiLoOpdtHu9lmM+x7zLAYe9KFH1wAutT0v2mI0avBju9dLjfPsBz2rcA5oi7EvHJT/gICC+4G3NLZAxy18wdPGuH6RouYBNKb/Ic+yaAT3fmHoAg8sWhAvE3UCUy2TiolKH4d28P2nBUAkLQXo7dTwCLICFc0kqc/eQgaf6hxmsXpfsKohYQAnlO9xpAPndXwv1ytaWYNNaeZ0AUu6CYVYMgmeYTbL5mlD0R8RzLA/jKLVFz4rCrvqZcAQUyrPVjjcE6nOZ50DNhPqfLY0DKd+S84ao7e1wBzMZbGya7aQaniQkqMNcT2lwC5vTsA2XESZvzPs3AtDH/ANJxaF2ajW5TAAAAAElFTkSuQmCC") 0 32, auto;\n}\n');var t=function(t){var e=Object.prototype,n=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function s(t,e,n,i){var r=e&&e.prototype instanceof u?e:u,o=Object.create(r.prototype),a=new C(i||[]);return o._invoke=function(t,e,n){var i="suspendedStart";return function(r,o){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===r)throw o;return k()}for(n.method=r,n.arg=o;;){var a=n.delegate;if(a){var s=m(a,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var u=c(t,e,n);if("normal"===u.type){if(i=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(i="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),o}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var h={};function u(){}function l(){}function d(){}var f={};f[r]=function(){return this};var g=Object.getPrototypeOf,v=g&&g(g(E([])));v&&v!==e&&n.call(v,r)&&(f=v);var p=d.prototype=u.prototype=Object.create(f);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function x(t,e){var i;this._invoke=function(r,o){function a(){return new e((function(i,a){!function i(r,o,a,s){var h=c(t[r],t,o);if("throw"!==h.type){var u=h.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){i("next",t,a,s)}),(function(t){i("throw",t,a,s)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return i("throw",t,a,s)}))}s(h.arg)}(r,o,i,a)}))}return i=i?i.then(a,a):a()}}function m(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,m(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var i=c(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var r=i.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function E(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){for(;++i<t.length;)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return l.prototype=p.constructor=d,d.constructor=l,d[a]=l.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===l||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(p),t},t.awrap=function(t){return{__await:t}},y(x.prototype),x.prototype[o]=function(){return this},t.AsyncIterator=x,t.async=function(e,n,i,r,o){void 0===o&&(o=Promise);var a=new x(s(e,n,i,r),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(p),p[a]="Generator",p[r]=function(){return this},p.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},t.values=E,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(n,i){return a.type="throw",a.arg=t,e.next=n,i&&(e.method="next",e.arg=void 0),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),b(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;b(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}function e(t,e,n,i,r,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(i,r)}function n(t){return function(){var n=this,i=arguments;return new Promise((function(r,o){var a=t.apply(n,i);function s(t){e(a,r,o,s,c,"next",t)}function c(t){e(a,r,o,s,c,"throw",t)}s(void 0)}))}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}var a=function(){function t(){i(this,t)}return o(t,null,[{key:"createEl",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",e=arguments.length>1?arguments[1]:void 0,n=e.styles,i=void 0===n?{}:n,r=e.attrs,o=void 0===r?{}:r,a=e.props,s=void 0===a?{}:a,c=document.createElement(t);return Object.keys(i).map((function(t){c.style[t]=i[t]})),Object.keys(o).map((function(t){c.setAttribute(t,o[t])})),Object.keys(s).map((function(t){c[t]=s[t]})),c}},{key:"hasClass",value:function(t,e){return t.classList.contains(e)}},{key:"addClass",value:function(t,e){t.classList.add(e)}},{key:"removeClass",value:function(t,e){t.classList.remove(e)}},{key:"setAttr",value:function(t,e,n){t.setAttribute(e,n)}},{key:"delAttr",value:function(t,e){t.removeAttribute(e)}},{key:"appendChild",value:function(t,e){t.appendChild(e)}},{key:"removeChild",value:function(t,e){t.removeChild(e)}}]),t}();function s(t,e){var n=e.canvasWidth,i=e.canvasHeight,r=e.arrowSize;t.save(),t.beginPath(),t.moveTo(e.points[0].x*n,e.points[0].y*i);for(var o=function(t,e,n,i){!function(t,e){t.beginPath(),t.moveTo(e[0].x,e[0].y);for(var n=1;n<e.length;n++)t.lineTo(e[n].x,e[n].y);t.closePath(),t.fill()}(t,function(t,e,n){var i=Math.atan2(e.y-t.y,e.x-t.x),r=n/3*2,o={x:e.x-Math.round(n*Math.cos(i+.6)),y:e.y-Math.round(n*Math.sin(i+.6))},a={x:e.x-Math.round(n*Math.cos(i-.6)),y:e.y-Math.round(n*Math.sin(i-.6))},s={x:e.x-Math.round(r*Math.cos(i+.3)),y:e.y-Math.round(r*Math.sin(i+.3))};return[t,{x:e.x-Math.round(r*Math.cos(i-.3)),y:e.y-Math.round(r*Math.sin(i-.3))},a,e,o,s]}(n,e,i))},a=1;a<e.points.length;a++)o(t,{x:e.points[a].x*n,y:e.points[a].y*i},{x:e.points[a-1].x*n,y:e.points[a-1].y*i},r);t.restore()}function c(t){return h.apply(this,arguments)}function h(){return(h=n(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var i=new Image;i.setAttribute("crossOrigin","anonymous"),i.onerror=n,i.onload=function(){return t(i)},i.src=e})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t,e,i){return new Promise(function(){var r=n(regeneratorRuntime.mark((function n(r,o){var s,h,u,l,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=t.toDataURL("image/".concat(i)),h=a.createEl("canvas",{styles:{width:"".concat(t.width,"px"),height:"".concat(t.height,"px")},attrs:{width:t.width,height:t.height}}),u=h.getContext("2d"),n.next=5,c(e);case 5:return!(l=n.sent)&&o(),u.drawImage(l,0,0,t.width,t.height),n.next=10,c(s);case 10:!(d=n.sent)&&o(),u.drawImage(d,0,0,t.width,t.height),r(h.toDataURL("image/".concat(i)));case 14:case"end":return n.stop()}}),n)})));return function(t,e){return r.apply(this,arguments)}}())}function l(t,e,n,i){var r=t.getBoundingClientRect();return{x:(n-r.left-parseInt(e.paddingLeft)-parseInt(e.borderLeftWidth))*(t.width/parseInt(e.width)),y:(i-r.top-parseInt(e.paddingTop)-parseInt(e.borderTopWidth))*(t.height/parseInt(e.height))}}return function(){function t(e){i(this,t);var n=e.container,r=e.bgImg,o=void 0===r?"":r,a=e.lineColor,s=void 0===a?"#f00":a,c=e.lineWidth,h=void 0===c?"1":c,u=e.arrowSize,l=void 0===u?15:u,d=e.eraserSize,f=void 0===d?10:d,g=e.canvasBgColor,v=void 0===g?"#fff":g,p=e.textFontSize,y=void 0===p?16:p,x=e.textLineHeight,m=void 0===x?20:x,w=e.textColor,b=void 0===w?"#f00":w,C=e.textareaPlaceholder,E=void 0===C?-1!==navigator.language.indexOf("zh")?"请点击输入":"Type here...":C;if(!n)throw Error("No container element were found...");this.container=n,this.canvas=this.createCanvasEl(n),this.context=this.canvas.getContext("2d"),this.mode="pencil",this.canvasWidth=this.canvas.width,this.canvasHeight=this.canvas.height,this.originX=null,this.originY=null,this.configuration={lineColor:s,lineWidth:h,arrowSize:l,eraserSize:f,canvasBgColor:v,textFontSize:y,textLineHeight:m,textColor:b,bgImg:o,textareaPlaceholder:E},this.arrowPoints=[],this.isDrawing=!1,this.image=new Image,this.textareaEl=null,this.measureEl=null,this.historyImage=new Image,this.historyUrls=[],this.currentHistoryIndex=-1,this.init()}var e;return o(t,[{key:"createCanvasEl",value:function(t){var e=a.createEl("canvas",{styles:{height:"".concat(t.clientHeight,"px"),width:"".concat(t.clientWidth,"px")},attrs:{width:t.clientWidth,height:t.clientHeight}});return a.appendChild(t,e),e}},{key:"init",value:function(){var t=this;this.canvas_style=window.getComputedStyle(this.canvas),this.context.lineCap="round",this.clear(),this.setBackground(),this.createTextMeasure(),this.canvas.addEventListener("mousedown",this.mouseDown.bind(this)),this.canvas.addEventListener("mousemove",this.mouseMove.bind(this)),this.canvas.addEventListener("mouseup",(function(){return t.endOfDrawing()})),this.canvas.addEventListener("mouseleave",(function(){return t.endOfDrawing()}))}},{key:"mouseDown",value:function(t){this.isDrawing=!0,this.image.src=this.canvas.toDataURL("image/png");var e=t.clientX,n=t.clientY,i=l(this.canvas,this.canvas_style,e,n),r=i.x,o=i.y;this.originX=r,this.originY=o,this.ft_originX=this.originX,this.ft_originY=this.originY,this.context.moveTo(this.originX,this.originY),this.context.lineWidth=this.configuration.lineWidth,this.context.strokeStyle=this.configuration.lineColor,this.context.fillStyle=this.configuration.lineColor,this.context.beginPath(),"arrow"===this.mode&&this.saveArrowPoint({x:this.originX,y:this.originY}),"text"===this.mode&&this.createTextArea({x:this.ft_originX,y:this.ft_originY})}},{key:"mouseMove",value:function(t){if(this.isDrawing){var e=t.clientX,n=t.clientY,i=l(this.canvas,this.canvas_style,e,n),r=i.x,o=i.y,a=this.originX,s=this.originY,c=Math.abs(r-this.originX),h=Math.abs(o-this.originY);r<this.originX&&(a=r),o<this.originY&&(s=o);var u={x:r,y:o,originX:this.originY,originY:this.originY,newOriginX:a,newOriginY:s,distanceX:c,distanceY:h,ft_originX:this.ft_originX,ft_originY:this.ft_originY},d=this.handleMousemove()[this.mode];d&&d(u)}}},{key:"reDraw",value:function(){this.context.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.context.drawImage(this.image,0,0),this.context.beginPath()}},{key:"endOfDrawing",value:function(){this.isDrawing&&(this.context.closePath(),this.isDrawing=!1,this.addHistory())}},{key:"addHistory",value:function(){var t=this.canvas.toDataURL("image/png");this.historyUrls.push(t);var e=this.historyUrls.length;e>10&&(this.historyUrls=this.historyUrls.slice(-10,e)),this.currentHistoryIndex=this.historyUrls.length-1}},{key:"setBackground",value:function(){this.configuration.bgImg&&(this.context.globalCompositeOperation="destination-out",this.context.fillRect(0,0,this.canvasWidth,this.canvasHeight),this.canvas.style.background="url(".concat(this.configuration.bgImg,")"),this.canvas.style.backgroundSize="100% 100%",this.canvas.style.backgroundPosition="center",this.canvas.style.backgroundRepeat="no-repeat",this.context.globalCompositeOperation="source-over")}},{key:"handleMousemove",value:function(){var t=this;return{pencil:function(e){var n=e.x,i=e.y;t.context.lineTo(n,i),t.context.stroke()},straightLine:function(e){var n=e.x,i=e.y,r=e.ft_originX,o=e.ft_originY;t.reDraw(),t.context.moveTo(r,o),t.context.lineTo(n,i),t.context.stroke()},rect:function(e){var n=e.newOriginX,i=e.newOriginY,r=e.distanceX,o=e.distanceY;t.reDraw(),t.context.rect(n,i,r,o),t.context.stroke(),t.context.closePath()},circle:function(e){var n=e.newOriginX,i=e.newOriginY,r=e.distanceX,o=e.distanceY;t.reDraw();var a=Math.sqrt(r*r+o*o);t.context.arc(n+r,i+o,a,0,2*Math.PI),t.context.stroke()},arrow:function(e){var n=e.x,i=e.y;t.reDraw(),t.arrowPoints[1]={x:n/t.canvasWidth,y:i/t.canvasHeight},s(t.context,{points:t.arrowPoints,arrowSize:t.configuration.arrowSize,canvasWidth:t.canvasWidth,canvasHeight:t.canvasHeight})},eraser:function(e){var n=e.x,i=e.y;t.configuration.bgImg&&(t.context.globalCompositeOperation="destination-out"),t.context.strokeStyle=t.configuration.canvasBgColor,t.context.fillStyle=t.configuration.canvasBgColor,t.context.lineWidth=t.configuration.eraserSize,t.context.lineTo(n,i),t.context.stroke()},clear:function(){return t.clear()}}}},{key:"saveArrowPoint",value:function(t){this.arrowPoints=[],this.arrowPoints.push({x:t.x/this.canvasWidth,y:t.y/this.canvasHeight})}},{key:"createTextMeasure",value:function(){this.measureEl&&(a.removeChild(this.container,this.measureEl),this.measureEl=null),this.measureEl=a.createEl("pre",{styles:{fontSize:"".concat(this.configuration.textFontSize,"px"),lineHeight:"".concat(this.configuration.textLineHeight,"px"),color:this.configuration.textColor}}),a.addClass(this.measureEl,"__edb-text-pre"),a.appendChild(this.container,this.measureEl)}},{key:"drawText",value:function(t,e){var n=this;e.font=e.font||'"PingFang SC","Microsoft YaHei","微软雅黑"';var i=e.text;t.save(),t.textBaseline="middle",t.font="".concat(this.configuration.textFontSize,"px/").concat(this.configuration.textLineHeight,"px ").concat(e.font),t.fillStyle=this.configuration.textColor,t.globalCompositeOperation="source-over",i.replace(/<br>/g,"\n").split(/\n/).map((function(i,r){t.fillText(i,e.position.x+2,e.position.y+r*n.configuration.textLineHeight+n.configuration.textLineHeight/2+2)})),t.restore()}},{key:"createTextArea",value:function(t){var e=this;this.mode=null,this.boxDom&&a.removeChild(this.container,this.boxDom),this.boxDom=a.createEl("div",{styles:{left:"".concat(t.x,"px"),top:"".concat(t.y,"px"),lineHeight:"".concat(this.configuration.textLineHeight,"px"),fontSize:"".concat(this.configuration.textFontSize,"px")}}),a.addClass(this.boxDom,"__edb-textarea-box"),this.textareaEl=a.createEl("textarea",{styles:{lineHeight:"".concat(this.configuration.textLineHeight,"px"),color:this.configuration.textColor,fontSize:"".concat(this.configuration.textFontSize,"px")},props:{placeholder:this.configuration.textareaPlaceholder,autofocus:!0}}),a.addClass(this.textareaEl,"__edb-textarea"),a.appendChild(this.boxDom,this.textareaEl),a.appendChild(this.container,this.boxDom),this.textareaEl.onblur=function(){e.mode=null,a.delAttr(e.textareaEl,"autofocus"),e.drawText(e.context,{text:e.textareaEl.value,position:t}),a.removeChild(e.container,e.boxDom),e.boxDom=null},this.textareaEl.addEventListener("input",(function(t){e.measureEl.innerHTML=t.target.value+" ",e.textareaEl.style.width=e.measureEl.clientWidth+"px",e.textareaEl.style.height=e.measureEl.clientHeight+"px"}))}},{key:"resetBgImg",value:function(){this.historyUrls=[],this.currentHistoryIndex=-1,this.clear(),this.setBackground()}},{key:"config",value:function(t,e){this.configuration[t]=e,"canvasBgColor"===t&&this.clear(),"bgImg"===t&&this.resetBgImg(),("textFontSize"===t||"textColor"===t||"textLineHeight"===t)&&this.createTextMeasure()}},{key:"setMode",value:function(t){this.context.globalCompositeOperation="source-over",this.context.strokeStyle=this.configuration.lineColor,this.context.fillStyle=this.configuration.lineColor,this.context.lineWidth=this.configuration.lineWidth,"eraser"===t?a.addClass(this.container,"__edb-eraser-hover"):a.removeClass(this.container,"__edb-eraser-hover"),this.mode=t}},{key:"undo",value:function(){var t=this,e=this.currentHistoryIndex;if(e<0)this.currentHistoryIndex=-1;else{if(0===e)return this.clear(),this.historyUrls=[],void(this.currentHistoryIndex=-1);this.currentHistoryIndex-=1,this.historyImage.src=this.historyUrls[this.currentHistoryIndex],this.historyUrls.pop(),this.historyImage.onload=function(){t.clear(),t.context.drawImage(t.historyImage,0,0)}}}},{key:"generateBase64",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"png";return new Promise(function(){var i=n(regeneratorRuntime.mark((function n(i){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.configuration.bgImg){n.next=7;break}return n.next=3,u(t.canvas,t.configuration.bgImg,e);case 3:r=n.sent,i(r),n.next=8;break;case 7:i(t.canvas.toDataURL("image/".concat(e)));case 8:case"end":return n.stop()}}),n)})));return function(t){return i.apply(this,arguments)}}())}},{key:"saveImg",value:(e=n(regeneratorRuntime.mark((function t(){var e,n,i=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=i.length>0&&void 0!==i[0]?i[0]:{type:"png",fileName:"canvas_image"},n=null,!this.configuration.bgImg){t.next=8;break}return t.next=5,u(this.canvas,this.configuration.bgImg,e.type);case 5:n=t.sent,t.next=9;break;case 8:n=this.canvas.toDataURL("image/".concat(e.type));case 9:a.createEl("a",{attrs:{href:n,download:"".concat(e.fileName,".").concat(e.type)}}).click();case 11:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"clear",value:function(){this.context.fillStyle=this.configuration.canvasBgColor,this.context.fillRect(0,0,this.canvasWidth,this.canvasHeight),this.configuration.bgImg&&(this.context.globalCompositeOperation="destination-out",this.context.fillRect(0,0,this.canvasWidth,this.canvasHeight),this.context.globalCompositeOperation="source-over")}}]),t}()}));
