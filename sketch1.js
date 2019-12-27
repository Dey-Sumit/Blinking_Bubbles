class Bubble {

  constructor(x, y) {
    this.rad = 25;
    //this.yLen = 1;
    this.x = x;
    this.y = y;

  }
  // fall() {
  //   if (this.y > height) {
  //     this.y = 0;
  //   }
  //   this.y += this.yLen;
  // }
  show() {
    let r, g, b, c;
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    c = color(r, g, b);
    fill(c);
    ellipse(this.x, this.y, this.rad);
  }
}

let bubbles = [];

function setup() {
  cnv = createCanvas(windowWidth, windowHeight).parent('sketch-holder');
  cnv.style('display', 'block');

  //cnv.mousePressed(draw);

  background(0);
  bubbles[0] = new Bubble();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


//function createBubble() {
//  bubbles[0] = new Bubble();
//}

function draw() {
  background(61, 61, 61);
  for (var i = 0; i < bubbles.length; i++) {
    //bubbles[i].fall();
    bubbles[i].show();
  }
  //stroke(255);
  if (mouseIsPressed) {
    // line(mouseX, mouseY, pmouseX, pmouseY);
    b = new Bubble(mouseX, mouseY);
    bubbles.push(b);

  }
}