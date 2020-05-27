import { drawArrow } from './utils';
import Dom from './dom';
class Draw {
  constructor(options) {
    const {
      container,
      lineColor = "#f00",
      lineWidth = "1",
      bgImg = "",
      arrowSize = 15,
      canvasBgColor = "#fff",
    } = options;
    if (!container) throw Error("No container element were found...");
    this.container = container;
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
    this.textareaEl = null;
    this.measureEl = null;
    this.textMeasure();
  }

  createCanvasEl(container) {
    const canvasEl = Dom.createEl('canvas', {
      styles: {
        height: `${container.clientHeight}px`,
        width: `${container.clientWidth}px`
      },
      attrs: {
        width: container.clientHeight,
        height: container.clientWidth
      }
    })
    Dom.appendChild(container, canvasEl)
    return canvasEl
  }

  init() {
    let originX, originY = null; // 鼠标的坐标 (屏幕坐标 + 容器偏移量)
    const {
      x: c_offsetLeft,
      y: c_offsetTop,
    } = this.canvas.getBoundingClientRect();
    this.clear();

    this.canvas.addEventListener("mousedown", (event) => {
      this.isDrawing = true;
      this.image.src = this.canvas.toDataURL("image/png");
      const { clientX, clientY } = event;
      // 鼠标按下时, canvas的初始坐标 (会随着move而变)
      originX = clientX - c_offsetLeft;
      originY = clientY - c_offsetTop;
      // 记录初始点下的坐标
      const ft_originX = originX;
      const ft_originY = originY;

      if (this.type === "arrow") {
        this.arrowPoints = [];
        this.arrowPoints.push({
          x: originX / this.canvasWidth,
          y: originY / this.canvasHeight,
        });
      }

      this.context.moveTo(originX, originY);
      this.context.lineWidth = this.lineWidth;
      this.context.strokeStyle = this.lineColor;
      this.context.fillStyle = this.lineColor;
      this.context.beginPath();

      // text start
      if (this.type === 'text') {
        this.type = null

        this.boxDom = Dom.createEl('div', { styles: {left: `${originX}px`, top: `${originY}px`}})
        Dom.addClass(this.boxDom, '__edb-textarea-box')

        this.textareaEl = Dom.createEl('textarea', { 
          styles: { color: this.lineColor }, 
          props: { placeholder: '请点击输入', autofocus: true }
        })
        Dom.addClass(this.textareaEl, '__edb-textarea')
        
        Dom.appendChild(this.boxDom, this.textareaEl)
        Dom.appendChild(this.container, this.boxDom)

        this.textareaEl.onblur = () => {
          this.type = null
          Dom.delAttr(this.textareaEl, 'autofocus')
          this.text(this.context, {
            text: this.textareaEl.value,
            position: {
              x: ft_originX,
              y: ft_originY
            }
          })
          Dom.removeChild(this.container, this.boxDom)
        }
        this.textareaEl.addEventListener('input', (e)=> {
          this.measureEl.innerHTML = e.target.value + ' ';
          this.textareaEl.style.width = this.measureEl.clientWidth + 'px';
          this.textareaEl.style.height = this.measureEl.clientHeight + 'px';
        })
      }
      // text end
    });

    this.canvas.addEventListener("mousemove", (event) => {
      if (this.isDrawing) {
        const { clientX, clientY } = event;

        // 鼠标移动时, canvas中的实时坐标
        const x = clientX - c_offsetLeft;
        const y = clientY - c_offsetTop;

        // 默认是鼠标刚按下的坐标.
        let newOriginX = originX,
          newOriginY = originY;

        // 计算 横/纵 坐标到初始点的距离
        let distanceX = Math.abs(x - originX);
        let distanceY = Math.abs(y - originY);

        // 让形状左上角的坐标永远大于右下角的坐标, 保证图形能正确绘制
        if (x < originX) newOriginX = x;
        if (y < originY) newOriginY = y;

        // (x, y) 为画布中的实时坐标. (originX / Y) 是鼠标点击时在画布上的坐标
        // (newOriginX / Y) 绘制形状(比如矩形)时, 左上角的坐标
        const mousePosition = {
          x,
          y,
          originX,
          originY,
          newOriginX,
          newOriginY,
          distanceX,
          distanceY,
        };
        let mousemoveEvent = this.handleMousemove();
        let currMousemoveEvent = mousemoveEvent[this.type];
        currMousemoveEvent && currMousemoveEvent(mousePosition);
      }
    });

    // 鼠标移出和松开鼠标时, 结束绘画
    this.canvas.addEventListener("mouseup", () => this.endOfDrawing());
    this.canvas.addEventListener("mouseleave", () => this.endOfDrawing());
  }

  // 在绘制形状的过程中需要重新绘制，否则会画出移动过程中的图像
  reDraw() {
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.context.drawImage(this.image, 0, 0);
    this.context.beginPath();
  }

  endOfDrawing() {
    if (this.isDrawing) {
      this.context.closePath();
      this.isDrawing = false;
    }
  }

  clear() {
    this.context.fillStyle = this.canvasBgColor;
    this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.drawBackground();
  }

  drawBackground() {
    if (this.bgImg) {
      const that = this;
      if (!this.bgImgDom) {
        this.bgImgDom = Dom.createEl('img', {
          attrs: { src: this.bgImg, crossOrigin: 'anonymous' },
          props: {
            onload: function() {
              that.context.drawImage(this, 0, 0, that.canvasWidth, that.canvasHeight);
            }
          }
        })
      } else {
        this.context.drawImage(this.bgImgDom, 0, 0, this.canvasWidth, this.canvasHeight);
      }
    }
  }

  handleMousemove() {
    return {
      pencil: (mousePosition) => {
        const { x, y } = mousePosition;
        this.context.lineTo(x, y);
        this.context.stroke();
      },
      straightLine: (mousePosition) => {
        let { x, y, originX, originY } = mousePosition;
        this.reDraw();

        this.context.moveTo(originX, originY);
        this.context.lineTo(x, y);
        this.context.stroke();
      },
      rect: (mousePosition) => {
        const { newOriginX, newOriginY, distanceX, distanceY } = mousePosition;
        this.reDraw();
        this.context.rect(newOriginX, newOriginY, distanceX, distanceY);
        this.context.stroke();
        this.context.closePath();
      },
      circle: (mousePosition) => {
        const { newOriginX, newOriginY, distanceX, distanceY } = mousePosition;
        this.reDraw();
        // 根据狗股定理算出半径
        const r = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        // 确保鼠标在圆心位置(虽然只能保证左边)
        this.context.arc(
          newOriginX + distanceX,
          newOriginY + distanceY,
          r,
          0,
          2 * Math.PI
        );
        this.context.stroke();
      },
      arrow: (mousePosition) => {
        const { x, y } = mousePosition;
        this.reDraw();
        this.arrowPoints[1] = {
          x: x / this.canvasWidth,
          y: y / this.canvasHeight,
        };
        drawArrow(this.context, {
          points: this.arrowPoints,
          arrowSize: this.arrowSize,
          canvasWidth: this.canvasWidth,
          canvasHeight: this.canvasHeight
        });
      },
      clear: () => this.clear(),
    };
  }

  exportBase64(type = "png") {
    return this.canvas.toDataURL(`image/${type}`);
  }

  saveImg(options = {type: 'png', fileName: 'canvas_image'}) {
    const aEl = Dom.createEl('a', { attrs: {
      href: this.canvas.toDataURL(`image/${options.type}`),
      download: `${options.fileName}.${options.type}`}
    });
    aEl.click();
  }

  // Change the default setting
  // type(pencil, straightLine, rect, circle, arrow), lineWidth, color, arrowSize, canvasBgColor
  config(type, value) {
    this[type] = value;
    type === "canvasBgColor" && this.clear();
  }

  textMeasure() {
    this.measureEl = Dom.createEl('pre', { styles: { fontSize: '16px', lineHeight: '20px' }});
    Dom.addClass(this.measureEl, '__edb-text-pre');
    Dom.appendChild(this.container, this.measureEl)
  }

  text(ctx, options) {
    options.size = options.size || 16;
    options.lineHeight = options.lineHeight || 20;
    options.font = options.font || '"PingFang SC","Microsoft YaHei","微软雅黑"';
    let string = options.text;
    ctx.save();
    ctx.textBaseline = 'middle';
    ctx.font = `${options.size}px/${options.lineHeight}px ${options.font}`;
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = options.color || '#f00';
    string.replace(/<br>/g, '\n').split(/\n/).map((value, index) => {
      ctx.fillText(value,
        options.position.x + 2,
        options.position.y + index * options.lineHeight + options.lineHeight / 2 + 2
      );
    });
    ctx.restore();
  }
}

export default Draw;

// todo:
// 创建dom的抽象 - ok
// 模糊问题.
// 撤回操作. (顶多10步)
// 橡皮檫.
// 事件抽象.
// ts重构.

// other config 有风险. 有一个对象包裹起来好一点
