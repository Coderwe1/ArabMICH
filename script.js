let slideIndex = 0; // Start with the first visible slide
let slidesToShow = 1; // Number of slides to show at a time
const slides = document.getElementsByClassName("infoSnip");

function updateSlidesToShow() {
  const containerWidth = document.getElementById("premList").clientWidth;

  // Adjust slidesToShow based on the container width
  if (containerWidth >= 1290) slidesToShow = 4; // Wide screens show 4 slides
  else if (containerWidth >= 990) slidesToShow = 3; // Medium screens show 3 slides
  else if (containerWidth >= 685) slidesToShow = 2; // Smaller screens show 2 slides
  else slidesToShow = 1; // Very small screens show 1 slide

  showSlides();
}

// Next/previous controls
function plusSlides(n) {
  // Adjust the index for looping behavior
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlides();
}

function showSlides() {
  const totalSlides = slides.length;

  // Hide all slides initially
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = "none";
  }

  // Show the calculated set of slides based on slidesToShow
  for (let i = 0; i < slidesToShow; i++) {
    const currentIndex = (slideIndex + i) % totalSlides; // Loop through slides
    slides[currentIndex].style.display = "block";
  }
}

// Initialize and set up a resize listener to adjust slides dynamically
updateSlidesToShow();
window.addEventListener("resize", updateSlidesToShow);

// Event listeners for buttons
document.getElementById("prev").addEventListener("click", () => plusSlides(-1));
document.getElementById("next").addEventListener("click", () => plusSlides(1));
