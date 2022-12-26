let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let angleIncrement = (30 * Math.PI) / 180
let startX = canvas.width / 2
let startY = canvas.height / 2
let height = (canvas.height * 7) / 24

let thickness = 5
let maxDepth = 8
let count = 0
let branchPropagation = 5
