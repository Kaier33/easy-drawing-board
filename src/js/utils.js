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
    const polygonVertex = getArrowPoint(
      beginPoint,
      stopPoint,
      arrowSize
    );
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
