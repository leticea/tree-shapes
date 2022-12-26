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

  let newHeight = (height * 8) / 12;
  let newThickness = (thickness * 2) / 3;
  let angleStart;

  if (branchPropagation % 2 == 0) {
    angleStart = angle - angleIncrement / 2 - (Math.trunc(branchPropagation / 2) - 1) * angleIncrement;

  } else {
    angleStart = angle - Math.trunc(branchPropagation / 2) * angleIncrement;
  }

  for (let i = 0; i < branchPropagation; i++) {
    drawBranch(
      endX, 
      endY, 
      newHeight, 
      newThickness, 
      angleStart + i * angleIncrement,
      depth + 1
    );
  }
};

