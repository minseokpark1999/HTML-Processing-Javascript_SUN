function drawSun(x, y, s, l, w) {
  fill(255, 0, 0);
  stroke(255,100,0,80);
  strokeWeight(w);
  for (var i=width/2-l; i<=width/2+l; i++) {
    stroke(255, 100, 0, 70);
    line(x, y, i, random(height/2-l, height/2+l));
  }
  ellipse(x, y, s, s);
}

function setup() {
  background(0);
  createCanvas(1000, 1000);
  drawSun(width/2, height/2, 300, 300, 5);
}

function draw() {
}
