let animationId;
let x, y, dx = 30, dy = 30;

// Function to set the initial position of the image to the center
function centerImage() {
  const element = document.getElementById("meme");
  const maxX = window.innerWidth;
  const maxY = window.innerHeight;

  x = (maxX - element.offsetWidth) / 2;
  y = (maxY - element.offsetHeight) / 2;

  element.style.left = x + "px";
  element.style.top = y + "px";
}

function startA() {
  centerImage();  // Set initial position to center
  const element = document.getElementById("meme");
  element.classList.add("spin");
  animate();
}

function stopA() {
  const element = document.getElementById("meme");
  element.classList.remove("spin");
  cancelAnimationFrame(animationId);
  element.style.left = "50%"; /* fixes the images probem stoping in a random positon */
  element.style.top = "50%";
}

function animate() {
  const element = document.getElementById("meme");
  const maxX = window.innerWidth - element.offsetWidth;
  const maxY = window.innerHeight - element.offsetHeight;
  
  x += dx;
  y += dy;

  if (x < 0 || x > maxX) {
    dx = -dx;
  }
  
  if (y < 0 || y > maxY) {
    dy = -dy;
  }

  element.style.left = x + "px";
  element.style.top = y + "px";
  
  animationId = requestAnimationFrame(animate);
}

// Start in the center
window.addEventListener("load", centerImage);
