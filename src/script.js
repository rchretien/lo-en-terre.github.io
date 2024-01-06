// Initialize baguetteBox plugin
baguetteBox.run(".w3-row-padding", {
  animation: "fadeIn",
  noScrollbars: true,
  buttons: true,
  captions: true,
  fullScreen: false,
  preload: 2,
});

// Lazy load images for better performance
document.addEventListener("DOMContentLoaded", function () {
  const lazyLoadInstance = new LazyLoad({
    elements_selector: "img[data-src]", // Selector for lazy-loadable images
  });
});

// Initialize Slideout
var slideout = new Slideout({
  panel: document.getElementById("main"),
  menu: document.querySelector(".w3-sidebar"),
  padding: 0,
  tolerance: 70,
});

// Function to toggle menu visibility
function toggleMenu() {
  slideout.toggle();
}

// Event listener for the hamburger button
document.getElementById("hamburgerBtn").addEventListener("click", toggleMenu);

// Event listeners for Slideout actions
slideout.on("beforeopen", function () {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("hamburgerIcon").style.display = "none";
  document.getElementById("crossIcon").style.display = "block";
});

slideout.on("beforeclose", function () {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("hamburgerIcon").style.display = "block";
  document.getElementById("crossIcon").style.display = "none";
});

// Event listener for overlay click to close the menu
document.getElementById("overlay").addEventListener("click", function () {
  slideout.close();
});

// Additional event listeners for Slideout's translate effect
slideout.on("translate", function (translated) {
  document.getElementById("main").style.marginLeft = translated + "px";
});
