const canvas = document.getElementById("bgcanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.getElementById("header").offsetHeight + 150;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);


let stars = [];
for (let i = 0; i < 80; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 1 + 0.5
    });
}


function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);

        
        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(0, 150, 255, 0.8)";
        ctx.fillStyle = "#00baff";

        ctx.fill();

        
        star.y += star.speed;

        
        if (star.y > canvas.height) {
            star.y = -10;
            star.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(drawStars);
}

drawStars();


document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
      duration: 700,        
      easing: 'ease-out-cubic',
      once: true,           
      offset: 120           
    });
  });
