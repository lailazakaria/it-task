const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", function () {
  navLinks.style.display = "flex";
  closeIcon.style.display = "block";
  menuIcon.style.display = "none";
});

closeIcon.addEventListener("click", function () {
  navLinks.style.display = "none";
  closeIcon.style.display = "none";
  menuIcon.style.display = "block";
});

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("slidee");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 3000);
// }
var slideIndex = 1; // Start with the first slide
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slidee");
  var circles = document.getElementsByClassName("circle");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < circles.length; i++) {
    circles[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  circles[slideIndex - 1].classList.add("active");
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
