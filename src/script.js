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


