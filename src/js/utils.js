import Dom from "./dom";

// about arrow
export function getArrowPoint(beginPoint, endPoint, par) {
  const slopyAngle = Math.atan2(
    endPoint.y - beginPoint.y,
    endPoint.x - beginPoint.x
  );
  const angle = 0.6;
  const innerAngle = 0.3;
  const innerPar = (par / 3) * 2;
  const point1 = {
    x: endPoint.x - Math.round(par * Math.cos(slopyAngle + angle)),
    y: endPoint.y - Math.round(par * Math.sin(slopyAngle + angle)),
  };
  const point2 = {
    x: endPoint.x - Math.round(par * Math.cos(slopyAngle - angle)),
    y: endPoint.y - Math.round(par * Math.sin(slopyAngle - angle)),
  };
  const point3 = {
    x: endPoint.x - Math.round(innerPar * Math.cos(slopyAngle + innerAngle)),
    y: endPoint.y - Math.round(innerPar * Math.sin(slopyAngle + innerAngle)),
  };
  const point4 = {
    x: endPoint.x - Math.round(innerPar * Math.cos(slopyAngle - innerAngle)),
    y: endPoint.y - Math.round(innerPar * Math.sin(slopyAngle - innerAngle)),
  };
  return [beginPoint, point4, point2, endPoint, point1, point3];
}

export function drawArrow(ctx, options) {
  const canvasWidth = options.canvasWidth;
  const canvasHeight = options.canvasHeight;
  const arrowSize = options.arrowSize;
  ctx.save();
  // ctx.globalCompositeOperation = 'source-over';
  ctx.beginPath();
  ctx.moveTo(
    options.points[0].x * canvasWidth,
    options.points[0].y * canvasHeight
  );
  const paintArrar = (ctx, polygonVertex) => {
    ctx.beginPath();
    ctx.moveTo(polygonVertex[0].x, polygonVertex[0].y);
    for (let i = 1; i < polygonVertex.length; i++) {
      ctx.lineTo(polygonVertex[i].x, polygonVertex[i].y);
    }
    ctx.closePath();
    ctx.fill();
  };
  const drawArrow = (ctx, stopPoint, beginPoint, arrowSize) => {
    const polygonVertex = getArrowPoint(beginPoint, stopPoint, arrowSize);
    paintArrar(ctx, polygonVertex);
  };
  for (let i = 1; i < options.points.length; i++) {
    drawArrow(
      ctx,
      {
        x: options.points[i].x * canvasWidth,
        y: options.points[i].y * canvasHeight,
      },
      {
        x: options.points[i - 1].x * canvasWidth,
        y: options.points[i - 1].y * canvasHeight,
      },
      arrowSize
    );
  }
  ctx.restore();
}

export async function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.setAttribute("crossOrigin", "anonymous");
    img.onerror = reject;
    img.onload = () => resolve(img);
    img.src = src;
  });
}

// 对于有背景图的, 先画背景图, 再覆盖上 笔迹. 不然生成的数据只有笔迹, toDataURL生成的数据不包含背景图
export function getBase64Data(canvas, bgImg, type) {
  return new Promise(async (resolve, reject) => {
    const painting = canvas.toDataURL(`image/${type}`);
    const _canvasEl = Dom.createEl("canvas", {
      styles: {
        width: `${canvas.width}px`,
        height: `${canvas.height}px`,
      },
      attrs: { width: canvas.width, height: canvas.height },
    });
    const _context = _canvasEl.getContext("2d");
    const bgImgEl = await loadImg(bgImg);
    !bgImgEl && reject();
    _context.drawImage(bgImgEl, 0, 0, canvas.width, canvas.height);
    const paintEl = await loadImg(painting);
    !paintEl && reject();
    _context.drawImage(paintEl, 0, 0, canvas.width, canvas.height);
    resolve(_canvasEl.toDataURL(`image/${type}`));
  });
}

export function windowToCanvas(canvas, canvas_styles, x, y) {
  const cbox = canvas.getBoundingClientRect();
  return {
      x: (x - cbox.left - parseInt(canvas_styles.paddingLeft) - parseInt(canvas_styles.borderLeftWidth))
          * (canvas.width / parseInt(canvas_styles.width)),
      y: (y - cbox.top - parseInt(canvas_styles.paddingTop) - parseInt(canvas_styles.borderTopWidth))
          * (canvas.height / parseInt(canvas_styles.height))
  };
}

// detect language
export function detectLanguage() {
  return navigator.language.indexOf('zh') !== -1 ? '请点击输入' : 'Type here...'
}