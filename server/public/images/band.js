let slideIndex = 0;

function moveSlide(n) {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.member-box');
  const totalSlides = slides.length;
  const visibleSlides = 3; // Show 3 slides at a time
  const maxSlideIndex = totalSlides - visibleSlides;

  slideIndex += n;

  // Boundary check to loop back
  if (slideIndex < 0) {
    slideIndex = maxSlideIndex;
  } else if (slideIndex > maxSlideIndex) {
    slideIndex = 0;
  }

  slider.style.transform = `translateX(-${slideIndex * (100 / visibleSlides)}%)`;
}
