
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides');
  const slideElements = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;

  function showSlide(index) {
    if (index >= slideElements.length) currentIndex = 0;
    if (index < 0) currentIndex = slideElements.length - 1;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevButton.addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    currentIndex++;
    showSlide(currentIndex);
  }, 5000);

  showSlide(currentIndex);
});