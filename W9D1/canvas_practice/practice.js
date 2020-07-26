document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("mycanvas");
  canvasEl.width = 500;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "brown";
  ctx.fillRect(0, 0, 500, 500);

  ctx.beginPath();
  ctx.arc(150, 100, 50, 0, 2 * Math.PI, false);
  ctx.strokeStyle = "teal";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = "hazel";
  ctx.fill();
});
