const slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

nextBtn.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

// Auto slide every 6 seconds (optional)
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 6000);
