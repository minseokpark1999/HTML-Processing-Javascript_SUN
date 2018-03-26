function setup() {
  background(0);
  size(640, 640);
  fill(255,0,0);
  ellipse(20,20,200,200);
  stroke(255,100,0,80);
  for (int a=0; a<width; a=a+10) {
    strokeWeight(1);
    stroke(255,80);
    line(width,a,a,0);
    }
  for(int i=0; i<=width/2; i++) {
    stroke(255,100,0,80);
    line(0,0,i,random(height/2));
  }
  for(int j=height/2+50; j<=height; j++){
    stroke(0,0,150);
      line(0,j,random(width),j);
  }
   for(int k=0; k<=width; k=k+100){
    fill(0,150,0);
    stroke(0);
    triangle(k,height/2,k-50,height/2+80,k+50,height/2+80);
  }
   for(int m=height/2+20; m<=height-270; m++){
    stroke(255,100);
      line(0,m,random(width),m);
  }
}

function draw() {
  for (int l=0; l<=width; l=l+30) {
    fill(125);
    stroke(0);
    ellipse(l,height/2+80,20,20);
  }
  
  noStroke();
  fill(255,255,0,random(255));
  ellipse(random(width), random(height/2), random(7), random(7));
}

void keyPressed() {
  background(0);
}