let input, button, greeting;
let rectWidth;

let circles = [];

function setup() {
  // create canvas
  createCanvas(windowWidth, windowHeight);
 noStroke();
  // background(230);
  rectWidth = width / 4;

  input = createInput();
  input.position(20, 65); // location of textbox

  button = createButton('Enter'); // the 'Enter' button 
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'What is your name?');
  greeting.position(20, 5); // greeting on top of the textbox

  textAlign(CENTER);
  textSize(50);
}

function draw(){
  for (let i = 0; i < circles.length; i ++) { // the circles that pop up
    let circle = circles[i];
    fill(circle.color);
    ellipse(circle.x, circle.y, circle.size, circle.size);
  }
}

function greet() { // the greeting that comes up when you enter your name
  const name = input.value();
  greeting.html('Hello ' + name + '!');
  input.value('');

  for (let i = 0; i < 200; i++) {
    text(name, 0, 0);
  }
}

function keyPressed() { // the colour rectangles that pop up when key's are pressed
  let keyIndex = -1;
  if (key >= 'a' && key <= 'z') { // only works when pressing keys 'a' to 'z'
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }
  if (keyIndex === -1) {
    // If it's not a letter key, clear the screen
    background(230);
  } else {
    // It's a letter key, fill a rectangle
    randFill_r = Math.floor(Math.random() * 255 + 1); // randomly pop up across the screen
    randFill_g = Math.floor(Math.random() * 255 + 1);
    randFill_b = Math.floor(Math.random() * 255 + 1);
    fill(randFill_r, randFill_g, randFill_b);
    let x = map(keyIndex, 0, 25, 0, width - rectWidth);
    rect(x, 0, rectWidth, height); // size of rectangles
  }
}

function mouseClicked() { // when mouse is clicked circles appear
  let circle = {
    x: mouseX,
    y: mouseY,
    size: 50,
    color: color(random(255), random(255), random(255)) // random colour circles
  };
  circles.push(circle);
}