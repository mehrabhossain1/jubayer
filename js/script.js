// JavaScript to handle banner slide transitions
document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  setInterval(() => {
    // Hide the current slide
    slides[currentSlide].classList.remove("active");

    // Move to the next slide
    currentSlide = (currentSlide + 1) % slides.length;

    // Show the next slide
    slides[currentSlide].classList.add("active");
  }, 3000); // Change slides every 3 seconds
});
