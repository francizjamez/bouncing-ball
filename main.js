const ballDiv = document.querySelector(".ball");

let w = window.innerWidth;
let h = window.innerHeight;

let x = Math.random() * w;
let y = Math.random() * h;

let vectorX = Math.random() * 16 - 8;
let vectorY = Math.random() * 16 - 8;

const deflectFactor = 3;

setInterval(() => {
  const deflect = Math.random() * deflectFactor - deflectFactor / 2;

  x += vectorX;
  ballDiv.style.left = x + "px";
  if (x > w - 30) {
    vectorX += deflect;
    vectorX = Math.abs(vectorX) * -1;
  } else if (x < 0) {
    vectorX += deflect;
    vectorX = Math.abs(vectorX);
  }

  y += vectorY;
  ballDiv.style.top = y + "px";
  if (y > h - 30) {
    vectorY += deflect;
    vectorY = Math.abs(vectorY) * -1;
  } else if (y < 0) {
    vectorY += deflect;
    vectorY = Math.abs(vectorY);
  }
}, 10);
