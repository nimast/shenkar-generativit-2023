function resizeCanvas() {
  canvas = document.getElementById("defaultCanvas0");
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
}
