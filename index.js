console.log("JS do BotFlow carregado");


document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

//header que muda a scroll
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

const whatsapp = document.querySelector('.whatsapp-float');

//botao que surge 
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    whatsapp.classList.add('show');
  } else {
    whatsapp.classList.remove('show');
  }
});

//animacao da entrada
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

//feedback click whats
document.querySelectorAll('a[href*="wa.me"]').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.innerText = 'Abrindo WhatsApp...';
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const whatsapp = document.querySelector(".whatsapp-float");

  if (!whatsapp) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      whatsapp.classList.add("show");
    } else {
      whatsapp.classList.remove("show");
    }
  });
});

const canvas = document.getElementById("code-canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const characters = "01{}[]<>/\\|=+-_#@$%";
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function draw() {
  ctx.fillStyle = "rgba(30, 79, 216, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ffcc";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );

    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 50);


