let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let body = document.querySelector("body");

let box1active = false;
let box2active = false;
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;

box1.addEventListener("click", box1clicked);
box2.addEventListener("click", box2clicked);
body.addEventListener("keydown", keypressed);

randomPosition();

function box1clicked() {
  box1active = true;
  box2active = false;
  box1.style.opacity = 1;
  box2.style.opacity = 0.7;
}

function box2clicked() {
  box2active = true;
  box1active = false;
  box2.style.opacity = 1;
  box1.style.opacity = 0.7;
}

function keypressed(event) {
  let code = event.keyCode;
  if (box1active == true) {
    moveBox(code, box1, x1, y1, 1);
  } else if (box2active == true) {
    moveBox(code, box2, x2, y2, 2);
  }
}

function moveBox(code, box, x, y, decider) {
  if (code == 37) {
    x--;
    if (check(x, y, decider)) return;
    box.style.left = x + "px";
  } else if (code == 38) {
    y--;
    if (check(x, y, decider)) return;
    box.style.top = y + "px";
  } else if (code == 39) {
    x++;
    if (check(x, y, decider)) return;
    box.style.left = x + "px";
  } else if (code == 40) {
    y++;
    if (check(x, y, decider)) return;
    box.style.top = y + "px";
  }

  if (decider == 1) {
    x1 = x;
    y1 = y;
  } else {
    x2 = x;
    y2 = y;
  }
}

function check(x0, y0, decider) {
  if (x0 < 0 || x0 > 500 || y0 < 0 || y0 > 500) return true;
  let xdiff = 0,
    ydiff = 0;
  if (decider == 1) {
    xdiff = x0 - x2;
    ydiff = y0 - y2;
  } else {
    xdiff = x0 - x1;
    ydiff = y0 - y1;
  }

  if (xdiff < 0) xdiff = -xdiff;
  if (ydiff < 0) ydiff = -ydiff;

  if (xdiff < 100 && ydiff < 100) return true;
  return false;
}

function randomPosition() {
  x1 = Math.floor(Math.random() * 500);
  y1 = Math.floor(Math.random() * 500);

  x2 = Math.floor(Math.random() * 500);
  y2 = Math.floor(Math.random() * 500);

  let xdiff = x2 - x1,
    ydiff = y2 - y1;
  if (xdiff < 0) xdiff = -xdiff;
  if (ydiff < 0) ydiff = -ydiff;

  while (xdiff < 100 && ydiff < 100) {
    x2 = Math.floor(Math.random() * 500);
    y2 = Math.floor(Math.random() * 500);
    xdiff = x2 - x1;
    ydiff = y2 - y1;
  }

  box1.style.left = x1 + "px";
  box1.style.top = y1 + "px";
  box2.style.left = x2 + "px";
  box2.style.top = y2 + "px";
}
