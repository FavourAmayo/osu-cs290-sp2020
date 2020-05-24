var slideIndex = 1;
var carouselIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
    carouselIndex = 0;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//var carouselIndex = 0;
carousel();

function carousel() {
  var dots = document.getElementsByClassName("dot");
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  carouselIndex++;
  if (carouselIndex > x.length) {
    carouselIndex = 1;
    slideIndex = 1;
  }
  x[carouselIndex - 1].style.display = "block";
  dots[carouselIndex - 1].className += " active";
  setTimeout(carousel, 8000); // Change image every 8 seconds
}
