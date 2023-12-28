function toggleMenu() {
  var sidebar = document.getElementsByClassName("w3-sidebar")[0];
  var overlay = document.getElementById("overlay");
  var hamburgerIcon = document.getElementById("hamburgerIcon");
  var crossIcon = document.getElementById("crossIcon");

  // Toggle sidebar
  if (sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
      overlay.classList.remove("open");
      hamburgerIcon.style.display = "block";
      crossIcon.style.display = "none";
  } else {
      sidebar.classList.add("open");
      overlay.classList.add("open");
      hamburgerIcon.style.display = "none";
      crossIcon.style.display = "block";
  }
}

// Initialize baguetteBox plugin
baguetteBox.run('.w3-row-padding', {
  animation: 'fadeIn',
  noScrollbars: true,
  buttons: true,
  captions: true,
  fullScreen: false,
  preload: 2,
});


// Lazy load images for better performance
document.addEventListener("DOMContentLoaded", function() {
  const lazyLoadInstance = new LazyLoad({
      elements_selector: "img[data-src]", // Selector for lazy-loadable images
  });
});



