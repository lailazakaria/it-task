const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", function () {
  if (navLinks.style.display === "none") {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
});
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slidee");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
document.addEventListener("DOMContentLoaded", function () {
  const indicators = document.querySelectorAll(".carousel-indicators li");
  const cards = document.querySelectorAll(".card-container .card");

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", function () {
      indicators.forEach((ind) => ind.classList.remove("active"));
      cards.forEach((card) => (card.style.display = "none"));
      this.classList.add("active");
      cards[index].style.display = "block";
    });
  });
});
