/*******************************************************
 * *****************************************************
 * JAVASCRIPT FOR NAVIGATION BUTTON *
 ********************************************************
 ********************************************************/

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  // if showMenu is not clicked...else
  if (!showMenu) {
    // adding classes
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");

    navItems.forEach(item => item.classList.add("show"));

    // Set menu States
    showMenu = true;
  } else {
    // adding classes
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");

    navItems.forEach(item => item.classList.remove("show"));

    // Set menu States
    showMenu = false;
  }
}

/*******************************************************
 * *****************************************************
 * JAVASCRIPT FOR MY WORK PAGE*
 *******************************************************
 ********************************************************/

/*******************************************************
 * *****************************************************
 * JAVASCRIPT FOR SHOWCASE EXPERIENCE IN ABOUT ME *
 *******************************************************
 ********************************************************/
var slideIndex = 1;
// Running the function here
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

// n is variable for slideIndex
function showSlides(n) {
  //getting an element
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  /* slides.length count the number of appearance of class 
   mySlides. In this case slides.length = 3 
   also dot.length = 3
   try out this page to understand more: 
   https://www.w3schools.com/jsref/prop_nodelist_length.asp
  */

  // if n > 3 then slideIndex goes back to 1
  if (n > slides.length) {
    slideIndex = 1;
  }
  // if slideIndex < 3, default slideIndex to 3
  if (n < 1) {
    slideIndex = slides.length;
  }

  // remove display for all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // styling for all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // show the responding display for image and dots
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
}
