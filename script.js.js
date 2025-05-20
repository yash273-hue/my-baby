// 1. Slideshow
const images = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg',
  'images/img4.jpg',
  'images/img5.jpg',
  'images/img6.jpg',
  'images/img7.jpg',
  'images/img8.jpg',
  'images/img9.jpg',
  'images/img10.jpg'
];
let idx = 0;
const slideImg = document.getElementById('slide-img');
setInterval(() => {
  idx = (idx + 1) % images.length;
  slideImg.style.opacity = 0;
  setTimeout(() => {
    slideImg.src = images[idx];
    slideImg.style.opacity = 1;
  }, 1000);
}, 3000);

// 2. Butterflies Animation
const butterflyCanvas = document.getElementById('butterflies');
const bCtx = butterflyCanvas.getContext('2d');
function resizeCanvas() {
  butterflyCanvas.width = window.innerWidth;
  butterflyCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const butterflies = Array.from({length: 8}, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  dx: 1 + Math.random() * 1.5,
  dy: -0.5 + Math.random(),
  angle: Math.random() * Math.PI * 2
}));

function drawButterfly(x, y, angle) {
  bCtx.save();
  bCtx.translate(x, y);
  bCtx.rotate(angle);
  // Simple butterfly shape
  bCtx.beginPath();
  bCtx.moveTo(0, 0);
  bCtx.bezierCurveTo(-10, -20, -30, -20, -20, 0);
  bCtx.bezierCurveTo(-30, 20, -10, 20, 0, 0);
  bCtx.bezierCurveTo(10, -20, 30, -20, 20, 0);
  bCtx.bezierCurveTo(30, 20, 10, 20, 0, 0);
  bCtx.fillStyle = 'rgba(255, 182, 193, 0.7)';
  bCtx.fill();
  bCtx.restore();
}

function animateButterflies() {
  bCtx.clearRect(0, 0, butterflyCanvas.width, butterflyCanvas.height);
  butterflies.forEach(b => {
    drawButterfly(b.x, b.y, b.angle);
    b.x += Math.sin(b.angle) * 2 + b.dx;
    b.y += Math.cos(b.angle) * 1 + b.dy;
    b.angle += 0.02 * (Math.random() - 0.5);
    if (b.x > window.innerWidth) b.x = -30;
    if (b.y > window.innerHeight) b.y = 0;
    if (b.x < -30) b.x = window.innerWidth;
    if (b.y < 0) b.y = window.innerHeight;
  });
  requestAnimationFrame(animateButterflies);
}
animateButterflies();

// 3. Leaves Animation
const leavesCanvas = document.getElementById('leaves');
const lCtx = leavesCanvas.getContext('2d');
leavesCanvas.width = window.innerWidth;
leavesCanvas.height = window.innerHeight;
window.addEventListener('resize', () => {
  leavesCanvas.width = window.innerWidth;
  leavesCanvas.height = window.innerHeight;
});
const leaves = Array.from({length: 12}, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  dx: -0.5 + Math.random(),
  dy: 1 + Math.random() * 1.5,
  angle: Math.random() * Math.PI * 2
}));
function drawLeaf(x, y, angle) {
  lCtx.save();
  lCtx.translate(x, y);
  lCtx.rotate(angle);
  lCtx.beginPath();
  lCtx.ellipse(0, 0, 10, 4, 0, 0, 2 * Math.PI);
  lCtx.fillStyle = 'rgba(34,139,34,0.7)';
  lCtx.fill();
  lCtx.restore();
}
function animateLeaves() {
  lCtx.clearRect(0, 0, leavesCanvas.width, leavesCanvas.height);
  leaves.forEach(l => {
    drawLeaf(l.x, l.y, l.angle);
    l.x += l.dx;
    l.y += l.dy;
    l.angle += 0.01 * (Math.random() - 0.5);
    if (l.y > window.innerHeight) {
      l.y = -10;
      l.x = Math.random() * window.innerWidth;
    }
    if (l.x < 0) l.x = window.innerWidth;
    if (l.x > window.innerWidth) l.x = 0;
  });
  requestAnimationFrame(animateLeaves);
}
animateLeaves();

// 4. Hearts Animation
const heartsCanvas = document.getElementById('hearts');
const hCtx = heartsCanvas.getContext('2d');
heartsCanvas.width = window.innerWidth;
heartsCanvas.height = window.innerHeight;
window.addEventListener('resize', () => {
  heartsCanvas.width = window.innerWidth;
  heartsCanvas.height = window.innerHeight;
});
const hearts = Array.from({length: 20}, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * -window.innerHeight,
  size: 10 + Math.random() * 10,
  speed: 1 + Math.random() * 2
}));
function drawHeart(x, y, size) {
  hCtx.save();
  hCtx.translate(x, y);
  hCtx.beginPath();
  hCtx.moveTo(0, 0);
  hCtx.bezierCurveTo(0, -size/2, -size, -size/2, -size, 0);
  hCtx.bezierCurveTo(-size, size, 0, size, 0, size*1.5);
  hCtx.bezierCurveTo(0, size, size, size, size, 0);
  hCtx.bezierCurveTo(size, -size/2, 0, -size/2, 0, 0);
  hCtx.fillStyle = 'rgba(255,0,0,0.7)';
  hCtx.fill();
  hCtx.restore();
}
function animateHearts() {
  hCtx.clearRect(0, 0, heartsCanvas.width, heartsCanvas.height);
  hearts.forEach(heart => {
    drawHeart(heart.x, heart.y, heart.size);
    heart.y += heart.speed;
    if (heart.y > window.innerHeight + 20) {
      heart.y = -20;
      heart.x = Math.random() * window.innerWidth;
    }
  });
  requestAnimationFrame(animateHearts);
}
animateHearts();