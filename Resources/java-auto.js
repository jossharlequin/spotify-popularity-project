let slideIndex = 0; // Initialize slide index to 0 for automatic slideshow

// Call the function to start the automatic slideshow
autoSlides();

// Function to start automatic slideshow
function autoSlides() {
  // Increment slide index
  slideIndex++;
  // Call the function to show the slides
  showSlides(slideIndex);
  // Set timeout to call this function again after 3 seconds
  setTimeout(autoSlides, 3000);
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1; } // Reset to first slide if n exceeds the number of slides
  if (n < 1) { slideIndex = slides.length; } // Go to last slide if n is less than 1
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // Remove "active" class from all dots
  }
  slides[slideIndex - 1].style.display = "block"; // Display the current slide
  dots[slideIndex - 1].className += " active"; // Add "active" class to the current dot
}