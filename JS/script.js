// JavaScript

// Get the main image
var mainImage = document.getElementById('mainImage');

// Get all the small images
var smallImages = document.getElementById('smallImages').getElementsByTagName('img');

// Add a click event listener to each small image
for (var i = 0; i < smallImages.length; i++) {
  smallImages[i].addEventListener('click', function() {
    // Change the src of the main image to the src of the clicked image
    mainImage.src = this.src;
  });
}