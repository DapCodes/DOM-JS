const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;

function showSlide(i) {
    index = (i + slide.length) % slide.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

prev.addEventListener('click', () => {
    showSlide(index - 1);
});

next.addEventListener('click', () => {
    showSlide(index + 1);
});

// Optional: Auto-play
// setInterval(() => {
//     showSlide(index + 1);
// }, 3000);