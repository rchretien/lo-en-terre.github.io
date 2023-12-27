function toggleMenu() {
    var navbar = document.getElementById("myNavbar");
    if (navbar.className.indexOf("open") == -1) {
      navbar.className += " open";
    } else {
      navbar.className = navbar.className.replace(" open", "");
    }
  }