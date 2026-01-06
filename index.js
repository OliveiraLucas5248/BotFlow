console.log("JS carregado");


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


