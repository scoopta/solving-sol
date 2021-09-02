w=750;
h=550;
function setup() {
  createCanvas(w,h);
  strokeWeight(3.333);
  background(255);
  noLoop();
}

const NOL = 200; // number of lines
function draw() {
    c0 = color(206,229,208); // light green
    c1 = color(67,148,115); // dark green
    c2 = color(116,140,140); // slate
    c3 = color(116,76,68); // brown
    let c = [c0,c1,c2,c3];
    for (let i=0; i<NOL; i++) {
      for (let j=0; j<NOL; j++) {
        stroke(c[Math.floor(Math.random()*4)]);
        noFill();
        x1=w*Math.random(); //x
        y1=h*Math.random();
        w1=w*1.5;
        h1=h*0.99;
        if (j%2){start=PI+QUARTER_PI;stop=TWO_PI-QUARTER_PI;}
        else {start=QUARTER_PI;stop=PI-QUARTER_PI;}
        arc(x1,y1,w1,h1,start,stop);
    }
  }
}
