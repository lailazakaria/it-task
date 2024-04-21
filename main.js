const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", function () {
  if (navLinks.style.display === "none") {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
});
