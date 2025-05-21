function flipCard(card) {
  card.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
}

const canvas = document.getElementById('scratchCanvas');
const ctx = canvas.getContext('2d');
const img = document.querySelector('.hidden-image');

function resizeCanvas() {
  canvas.width = img.clientWidth;
  canvas.height = img.clientHeight;
  canvas.style.top = img.offsetTop + 'px';
  canvas.style.left = img.offsetLeft + 'px';
  ctx.fillStyle = '#c0c0c0';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('load', () => {
  resizeCanvas();
  initHearts();
});

let isDrawing = false;

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  draw(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    draw(e.offsetX, e.offsetY);
  }
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

function draw(x, y) {
  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2, false);
  ctx.fill();
}

function initHearts() {
  const container = document.querySelector('.hearts-container');
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 3 + Math.random() * 2 + 's';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 200);
}
