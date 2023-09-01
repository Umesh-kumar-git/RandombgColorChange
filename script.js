const start = document.getElementById("start");
const stop = document.getElementById("stop");
4;

function RandomColor() {
  let value = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += value[Math.floor(Math.random() * 16)];
  }
  return color;
}

let interval;

function startColorChanging() {
  if (!interval) {
    interval = setInterval(ChangebgColor, 1000);
  }
  
}

function ChangebgColor() {
  document.body.style.backgroundColor = RandomColor();
}

function stopColorChanging() {
  clearInterval(interval);
  interval =null;
}

start.addEventListener("click", startColorChanging);
stop.addEventListener("click", stopColorChanging);
