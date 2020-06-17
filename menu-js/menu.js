const menuToggle = document.getElementById("menu-toggle");
const menuNav = document.getElementById("menu-nav");

const toggleMenu = () => {
    console.log("called toggleMenu")
    menuNav.classList.toggle("menu-toggle");
}

menuToggle.addEventListener("click", toggleMenu);


$('.js--scroll-to-memberships').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-memberships').offset().top}, 1000); 
    });
    
$('.js--scroll-to-help').click(function() {
        $('html, body').animate({scrollTop: $('.js--help-section').offset().top}, 1000); 
    });

$('.js--scroll-to-members').click(function() {
        $('html, body').animate({scrollTop: $('.js--members-section').offset().top}, 1000); 
    });

/* button */

//Get the button:
mybutton = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* slideshow */ 

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
        
 
    