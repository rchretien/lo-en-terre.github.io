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

// Initialize Slideout
var slideout = new Slideout({
  'panel': document.getElementById('main'),
  'menu': document.querySelector('.w3-sidebar'),
  'padding': 250, // Adjust to the width of your sidebar
  'tolerance': 70
});

// Toggle Slideout and update icons
function toggleMenu() {
  slideout.toggle();
}

document.getElementById('hamburgerBtn').addEventListener('click', toggleMenu);

document.getElementById('overlay').addEventListener('click', function() {
  slideout.close();
});

slideout.on('translate', function(translated) {
  document.getElementById('main').style.marginLeft = translated + 'px';
});

slideout.on('beforeopen', function() {
  document.getElementById("overlay").style.display = 'block';
  document.getElementById("hamburgerIcon").style.display = 'none';
  document.getElementById("crossIcon").style.display = 'block';
}).on('beforeclose', function() {
  document.getElementById("overlay").style.display = 'none';
  document.getElementById("hamburgerIcon").style.display = 'block';
  document.getElementById("crossIcon").style.display = 'none';
});