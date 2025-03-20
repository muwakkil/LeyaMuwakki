const slides = document.querySelectorAll(".slide");
const caption = document.querySelector(".caption");
const captions = ["Caption 1", "Caption 2", "Caption 3", "Caption 4", "Caption 5", "Caption 6","Caption 7",]; // Add your image captions here
let slideIndex = 0;

function showSlide(index) {
  slides.forEach(slide => slide.style.display = "none");
  slides[index].style.display = "block";
  caption.textContent = captions[index]; // Update the caption
}

// Automatically change slide every 4 seconds
let autoSlide = setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}, 3000); // 5000ms = 4 seconds

// Stop auto-slideshow when user manually clicks the buttons
document.querySelector(".prev").addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
  clearInterval(autoSlide); // Stop auto slideshow when user clicks
  autoSlide = setInterval(() => { // Restart the auto slideshow
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }, 2000);
});

document.querySelector(".next").addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
  clearInterval(autoSlide); // Stop auto slideshow when user clicks
  autoSlide = setInterval(() => { // Restart the auto slideshow
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }, 2000);
});

showSlide(slideIndex); // Initialize first slide
