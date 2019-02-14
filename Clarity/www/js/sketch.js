let fullText;
let ad;

function preload() { 
    let url = 'https://api.adviceslip.com/advice';
    httpGet(url, 'json', false, function(response) { 
        fullText = response;
        ad = fullText.slip.advice;
    });
}

function setup() {
  var canvas = createCanvas(windowWidth-30, 200);
  canvas.parent('sketch-holder');

  background('#86c7ed');
  fill(255);
  textSize(20);
  textAlign(CENTER);
  text("?",(windowWidth-30)/2,76);
  frameRate(60);
}

function draw() {
  if (mouseIsPressed) {
    fill(255);
    rectMode(RADIUS);
    noStroke();
    ellipse(mouseX, mouseY, 35, 35, 3);
  } 
  fill('#86c7ed')
  textSize(24);
  text(ad,10,10,windowWidth-25,windowHeight-25);
}