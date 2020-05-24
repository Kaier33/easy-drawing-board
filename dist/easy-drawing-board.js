(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.EasyDrawingBoard = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  // about arrow
  function getArrowPoint(beginPoint, endPoint, par) {
    var slopyAngle = Math.atan2(endPoint.y - beginPoint.y, endPoint.x - beginPoint.x);
    var angle = 0.6;
    var innerAngle = 0.3;
    var innerPar = par / 3 * 2;
    var point1 = {
      x: endPoint.x - Math.round(par * Math.cos(slopyAngle + angle)),
      y: endPoint.y - Math.round(par * Math.sin(slopyAngle + angle))
    };
    var point2 = {
      x: endPoint.x - Math.round(par * Math.cos(slopyAngle - angle)),
      y: endPoint.y - Math.round(par * Math.sin(slopyAngle - angle))
    };
    var point3 = {
      x: endPoint.x - Math.round(innerPar * Math.cos(slopyAngle + innerAngle)),
      y: endPoint.y - Math.round(innerPar * Math.sin(slopyAngle + innerAngle))
    };
    var point4 = {
      x: endPoint.x - Math.round(innerPar * Math.cos(slopyAngle - innerAngle)),
      y: endPoint.y - Math.round(innerPar * Math.sin(slopyAngle - innerAngle))
    };
    return [beginPoint, point4, point2, endPoint, point1, point3];
  }
  function drawArrow(ctx, options) {
    var canvasWidth = options.canvasWidth;
    var canvasHeight = options.canvasHeight;
    var arrowSize = options.arrowSize;
    ctx.save(); // ctx.globalCompositeOperation = 'source-over';

    ctx.beginPath();
    ctx.moveTo(options.points[0].x * canvasWidth, options.points[0].y * canvasHeight);

    var paintArrar = function paintArrar(ctx, polygonVertex) {
      ctx.beginPath();
      ctx.moveTo(polygonVertex[0].x, polygonVertex[0].y);

      for (var i = 1; i < polygonVertex.length; i++) {
        ctx.lineTo(polygonVertex[i].x, polygonVertex[i].y);
      }

      ctx.closePath();
      ctx.fill();
    };

    var drawArrow = function drawArrow(ctx, stopPoint, beginPoint, arrowSize) {
      var polygonVertex = getArrowPoint(beginPoint, stopPoint, arrowSize);
      paintArrar(ctx, polygonVertex);
    };

    for (var i = 1; i < options.points.length; i++) {
      drawArrow(ctx, {
        x: options.points[i].x * canvasWidth,
        y: options.points[i].y * canvasHeight
      }, {
        x: options.points[i - 1].x * canvasWidth,
        y: options.points[i - 1].y * canvasHeight
      }, arrowSize);
    }

    ctx.restore();
  }

  var Draw = /*#__PURE__*/function () {
    function Draw(options) {
      _classCallCheck(this, Draw);

      var container = options.container,
          _options$lineColor = options.lineColor,
          lineColor = _options$lineColor === void 0 ? "#f00" : _options$lineColor,
          _options$lineWidth = options.lineWidth,
          lineWidth = _options$lineWidth === void 0 ? "1" : _options$lineWidth,
          _options$bgImg = options.bgImg,
          bgImg = _options$bgImg === void 0 ? "" : _options$bgImg,
          _options$arrowSize = options.arrowSize,
          arrowSize = _options$arrowSize === void 0 ? 15 : _options$arrowSize,
          _options$canvasBgColo = options.canvasBgColor,
          canvasBgColor = _options$canvasBgColo === void 0 ? "#fff" : _options$canvasBgColo;

      if (!container) {
        throw Error("No container element were found...");
      }

      this.canvas = this.createCanvasEl(container);
      this.context = this.canvas.getContext("2d");
      this.type = "pencil";
      this.canvasWidth = this.canvas.width;
      this.canvasHeight = this.canvas.height;
      this.canvasBgColor = canvasBgColor;
      this.lineWidth = lineWidth;
      this.lineColor = lineColor;
      this.arrowSize = arrowSize;
      this.arrowPoints = [];
      this.isDrawing = false;
      this.image = new Image();
      this.bgImg = bgImg;
    }

    _createClass(Draw, [{
      key: "createCanvasEl",
      value: function createCanvasEl(container) {
        var canvasEl = document.createElement("canvas");
        canvasEl.style.height = "".concat(container.clientHeight, "px");
        canvasEl.style.width = "".concat(container.clientWidht, "px");
        canvasEl.height = container.clientHeight;
        canvasEl.width = container.clientWidth;
        container.appendChild(canvasEl);
        return canvasEl;
      }
    }, {
      key: "init",
      value: function init() {
        var _this = this;

        var originX,
            originY = null; // 鼠标的坐标 (屏幕坐标 + 容器偏移量)

        var _this$canvas$getBound = this.canvas.getBoundingClientRect(),
            c_offsetLeft = _this$canvas$getBound.x,
            c_offsetTop = _this$canvas$getBound.y;

        this.clear();
        this.drawBackground();
        this.canvas.addEventListener("mousedown", function (event) {
          _this.isDrawing = true;
          _this.image.src = _this.canvas.toDataURL("image/png");
          var clientX = event.clientX,
              clientY = event.clientY; // 鼠标按下时, canvas的初始坐标

          originX = clientX - c_offsetLeft;
          originY = clientY - c_offsetTop;

          if (_this.type === "arrow") {
            _this.arrowPoints = [];

            _this.arrowPoints.push({
              x: originX / _this.canvasWidth,
              y: originY / _this.canvasHeight
            });
          }

          _this.context.moveTo(originX, originY);

          _this.context.lineWidth = _this.lineWidth;
          _this.context.strokeStyle = _this.lineColor;
          _this.context.fillStyle = _this.lineColor;

          _this.context.beginPath();
        });
        this.canvas.addEventListener("mousemove", function (event) {
          if (_this.isDrawing) {
            var clientX = event.clientX,
                clientY = event.clientY; // 鼠标移动时, canvas中的实时坐标

            var x = clientX - c_offsetLeft;
            var y = clientY - c_offsetTop; // 默认是鼠标刚按下的坐标.

            var newOriginX = originX,
                newOriginY = originY; // 计算 横/纵 坐标到初始点的距离

            var distanceX = Math.abs(x - originX);
            var distanceY = Math.abs(y - originY); // 让形状左上角的坐标永远大于右下角的坐标, 保证图形能正确绘制

            if (x < originX) newOriginX = x;
            if (y < originY) newOriginY = y; // (x, y) 为画布中的实时坐标. (originX / Y) 是鼠标点击时在画布上的坐标
            // (newOriginX / Y) 绘制形状(比如矩形)时, 左上角的坐标

            var mousePosition = {
              x: x,
              y: y,
              originX: originX,
              originY: originY,
              newOriginX: newOriginX,
              newOriginY: newOriginY,
              distanceX: distanceX,
              distanceY: distanceY
            };

            var mousemoveEvent = _this.handleMousemove();

            var currMousemoveEvent = mousemoveEvent[_this.type];
            currMousemoveEvent && currMousemoveEvent(mousePosition);
          }
        }); // 鼠标移出和松开鼠标时, 结束绘画

        this.canvas.addEventListener("mouseup", function () {
          return _this.endOfDrawing();
        });
        this.canvas.addEventListener("mouseleave", function () {
          return _this.endOfDrawing();
        });
      } // 在绘制形状的过程中需要重新绘制，否则会画出移动过程中的图像

    }, {
      key: "reDraw",
      value: function reDraw() {
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.context.drawImage(this.image, 0, 0);
        this.context.beginPath();
      }
    }, {
      key: "endOfDrawing",
      value: function endOfDrawing() {
        if (this.isDrawing) {
          this.context.closePath();
          this.isDrawing = false;
        }
      }
    }, {
      key: "clear",
      value: function clear() {
        this.context.fillStyle = this.canvasBgColor;
        this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.drawBackground();
      }
    }, {
      key: "drawBackground",
      value: function drawBackground() {
        if (this.bgImg) {
          var that = this;
          var img = new Image();
          img.setAttribute("crossOrigin", "anonymous");
          img.src = this.bgImg;

          img.onload = function () {
            that.context.drawImage(this, 0, 0, that.canvasWidth, that.canvasHeight);
          };
        }
      }
    }, {
      key: "handleMousemove",
      value: function handleMousemove() {
        var _this2 = this;

        return {
          pencil: function pencil(mousePosition) {
            var x = mousePosition.x,
                y = mousePosition.y;

            _this2.context.lineTo(x, y);

            _this2.context.stroke();
          },
          straightLine: function straightLine(mousePosition) {
            var x = mousePosition.x,
                y = mousePosition.y,
                originX = mousePosition.originX,
                originY = mousePosition.originY;

            _this2.reDraw();

            _this2.context.moveTo(originX, originY);

            _this2.context.lineTo(x, y);

            _this2.context.stroke();
          },
          rect: function rect(mousePosition) {
            var newOriginX = mousePosition.newOriginX,
                newOriginY = mousePosition.newOriginY,
                distanceX = mousePosition.distanceX,
                distanceY = mousePosition.distanceY;

            _this2.reDraw();

            _this2.context.rect(newOriginX, newOriginY, distanceX, distanceY);

            _this2.context.stroke();

            _this2.context.closePath();
          },
          circle: function circle(mousePosition) {
            var newOriginX = mousePosition.newOriginX,
                newOriginY = mousePosition.newOriginY,
                distanceX = mousePosition.distanceX,
                distanceY = mousePosition.distanceY;

            _this2.reDraw(); // 根据狗股定理算出半径


            var r = Math.sqrt(distanceX * distanceX + distanceY * distanceY); // 确保鼠标在圆心位置(虽然只能保证左边)

            _this2.context.arc(newOriginX + distanceX, newOriginY + distanceY, r, 0, 2 * Math.PI);

            _this2.context.stroke();
          },
          arrow: function arrow(mousePosition) {
            var x = mousePosition.x,
                y = mousePosition.y;

            _this2.reDraw();

            _this2.arrowPoints[1] = {
              x: x / _this2.canvasWidth,
              y: y / _this2.canvasHeight
            };
            drawArrow(_this2.context, {
              points: _this2.arrowPoints,
              arrowSize: _this2.arrowSize,
              canvasWidth: _this2.canvasWidth,
              canvasHeight: _this2.canvasHeight
            });
          },
          clear: function clear() {
            return _this2.clear();
          }
        };
      }
    }, {
      key: "exportBase64",
      value: function exportBase64() {
        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "png";
        return this.canvas.toDataURL("image/".concat(type));
      }
    }, {
      key: "saveImg",
      value: function saveImg(_ref) {
        var _ref$type = _ref.type,
            type = _ref$type === void 0 ? "png" : _ref$type,
            _ref$fileName = _ref.fileName,
            fileName = _ref$fileName === void 0 ? "canvas_image" : _ref$fileName;
        var aEl = document.createElement("a");
        aEl.href = this.canvas.toDataURL("image/".concat(type));
        aEl.download = "".concat(fileName, ".").concat(type);
        aEl.click();
      } // Change the default setting
      // type, lineWidth, color, arrowSize, canvasBgColor

    }, {
      key: "config",
      value: function config(type, value) {
        this[type] = value;
        type === "canvasBgColor" && this.clear();
      }
    }]);

    return Draw;
  }();

  return Draw;

})));
