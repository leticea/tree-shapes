let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let angleIncrement = (30 * Math.PI) / 180;
let startX = canvas.width / 2;
let startY = canvas.height / 2;
let height = (canvas.height * 7) / 24;

let thickness = 5;
let maxDepth = 8;
let count = 0;
let branchPropagation = 5;

let drawLine = (x1, y1, x2, y2, thickness, color) => {
  context.lineWidth = thickness;
  context.strokeStyle = color;
  context.beginPath()
  context.moveTo(x1, y1)
  context.lineTo(x2, y2)
  context.closePath();
  context.stroke();
};

let drawBranch = (x, y, height, thickness, angle, depth) => {
  if (depth > maxDepth) return;
  let endX = x - height * Math.sin(angle);
  let endY = y - height * Math.cos(angle);

  drawLine(x, y, endX, endY, thickness, "black");
};

