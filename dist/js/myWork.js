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

    navItems.forEach((item) => item.classList.add("show"));

    // Set menu States
    showMenu = true;
  } else {
    // adding classes
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");

    navItems.forEach((item) => item.classList.remove("show"));

    // Set menu States
    showMenu = false;
  }
}

/*******************************************************
 * *****************************************************
 * JAVASCRIPT FOR MY WORK PAGE*
 * DECLARING OBJECTS, VARIABLES AND CLOSE BUTTON FUNCTION*
 *******************************************************
 ********************************************************/
class Project {
  constructor(
    images = [],
    imageAmount,
    projectName,
    projectBrief,
    projectDesc,
    projectURL
  ) {
    this.images = images;
    this.imageAmount = imageAmount;
    this.projectName = projectName;
    this.projectBrief = projectBrief;
    this.projectDesc = projectDesc;
    this.projectURL = projectURL;
  }

  getImageAmount() {
    return this.imageAmount;
  }

  getName() {
    return this.projectName;
  }

  getBrief() {
    return this.projectBrief;
  }

  getDesc() {
    return this.projectDesc;
  }

  getURL() {
    return this.projectURL;
  }
}

// Declaring images array
const SmartMirror = [
  "dist/img/SmartMirrorscreen1.png",
  "dist/img/SmartMirrorscreen2.png",
  "dist/img/SmartMirrorscreen3.png",
  "dist/img/SmartMirrorscreen4.png",
  "dist/img/SmartMirrorscreen5.png",
  "dist/img/SmartMirrorscreen6.png",
];

const PizzaOrder = [
  "dist/img/PizzaOrderscreen1.png",
  "dist/img/PizzaOrderscreen2.png",
  "dist/img/PizzaOrderscreen3.png",
  "dist/img/PizzaOrderscreen4.png",
];

const Portfolio = [
  "dist/img/portfolioscreen1.png",
  "dist/img/portfolioscreen2.png",
  "dist/img/portfolioscreen3.png",
  "dist/img/portfolioscreen4.png",
];

const Xdelivery = [
  "dist/img/Xdeliveryscreen1.png",
  "dist/img/Xdeliveryscreen2.png",
  "dist/img/Xdeliveryscreen3.png",
];

const Roof = [
  "dist/img/roof1.png",
  "dist/img/roof2.png",
  "dist/img/roof3.png",
  "dist/img/roof4.png",
  "dist/img/roof5.png",
  "dist/img/roof6.png",
];

const Account = [
  "dist/img/account1.png",
  "dist/img/account2.png",
  "dist/img/account3.png",
  "dist/img/account4.png",
  "dist/img/account5.png",
  "dist/img/account6.png",
];

// Declaring project array
var projects = [];
projects[0] = new Project(
  Roof,
  6,
  "New Roofing Website",
  "HTML5 / Bootstrap / PHP / MySQL",
  "Most of the designs here were made when I was freelancing for a Toronto based marketing company - Tho Dia Canada. My role was a Poster Designer and Content Creator about Immigration and mostly Studying Aboard in Canada.",
  "http://thenewroofing.ca/"
);

projects[1] = new Project(
  Portfolio,
  4,
  "Portfolio",
  "HTML / SASS / JavaScript",
  "Portfolio is a website project where I reviewed and sharpened my HTML5, SASS and JavaScript skills. This is where I introduce about myself, my work experience, projects, contacts and possibly my blogs in the future.",
  "index.html"
);

projects[2] = new Project(
  Xdelivery,
  3,
  "VietCan Xdelivery",
  "HTML / CSS / JavaScript",
  "Xdelivery is my freelance project for a VietNamese company based in Toronto. This project supposed to be a web page for company's delivery service. Unfortunately, the contract was terminated when the project is half-done.",
  "https://xdelivery.netlify.com/"
);

projects[3] = new Project(
  SmartMirror,
  6,
  "Smart Mirror",
  "Android Studio / Firebase / Java",
  "Smart Mirror is an android application. Smart Mirror is used to control a Smart Mirror microcontroller system via Firebase Real-time database. The application is developed with Android Studio and Java Programming language.",
  "https://github.com/Trung28899/SmartMirror4"
);

projects[4] = new Project(
  Account,
  6,
  "Account and Password App",
  "Android Studio / XML / Java",
  "Most of the designs here were made when I was freelancing for a Toronto based marketing company - Tho Dia Canada. My role was a Poster Designer and Content Creator about Immigration and mostly Studying Aboard in Canada.",
  "https://github.com/Trung28899/AccountAndPassApp"
);

projects[5] = new Project(
  PizzaOrder,
  4,
  "Pizza Application",
  "Android Studio / XML / Java",
  "Pizza Order is an android application. Using Pizza Order, customers can choose their favorite pizza with delicious topping quick and easily. The application is developed with Android Studio and Java programming language.",
  "https://github.com/Trung28899/PizzaOrder"
);

const viewWorkBtn = document.querySelectorAll(".btn-light");
const backgroundView = document.querySelector(".background");
const contentView = document.querySelector(".content");
const closeBtn = document.querySelector(".close-button");
const proName = document.getElementById("proName");
const proBrief = document.getElementById("proBrief");
const proDescription = document.getElementById("proDescription");
const ViewSite = document.querySelector(".btnView");
const imageShow = document.querySelectorAll(".myImg");
const slideShowCarousel = document.querySelector(".carousel-inner");
var moreThanThree = false;
var para = [];
var paraImg = [];
var count = 0;

closeBtn.addEventListener("click", closeWork);
ViewSite.addEventListener("click", viewSiteFunc);

// Function is called in html
function passProjects(number) {
  var textGit = "<i class='fas fa-angle-double-right'></i> VIEW GITHUB";
  var textSite = "<i class='fas fa-angle-double-right'></i> VIEW SITE";

  proName.innerHTML = projects[number].getName();
  proBrief.innerHTML = projects[number].getBrief();
  proDescription.innerHTML = projects[number].getDesc();
  imageShow[0].src = projects[number].images[0];
  imageShow[1].src = projects[number].images[1];
  imageShow[2].src = projects[number].images[2];

  if (projects[number].imageAmount > 3) {
    moreThanThree = true;
    var counter = 0;
    for (var i = 3; i < projects[number].imageAmount; i++) {
      paraImg[counter] = document.createElement("img");
      para[counter] = document.createElement("div");
      para[counter].classList.add("carousel-item");
      paraImg[counter].classList.add("d-block");
      paraImg[counter].classList.add("w-100");
      paraImg[counter].classList.add("myImg");
      paraImg[counter].src = projects[number].images[i];

      slideShowCarousel
        .appendChild(para[counter])
        .appendChild(paraImg[counter]);
      counter++;
    }
  }

  if (number == 0 || number == 1 || number == 5) {
    ViewSite.innerHTML = textGit;
    //ViewSite.style.width = "12%";
  } else {
    ViewSite.innerHTML = textSite;
    //ViewSite.style.width = "10%";
  }

  contentView.classList.remove("close");
  backgroundView.classList.add("show");
  contentView.classList.add("show");
}

function closeWork() {
  contentView.classList.add("close");
  backgroundView.classList.remove("show");
  contentView.classList.remove("show");
  var arrayLength = para.length;
  count++;

  if (moreThanThree) {
    for (var i = 0; i < arrayLength; i++) {
      var index = arrayLength - 1 - i;
      console.log(para[index]);
      slideShowCarousel.removeChild(para[index]);
      // have to remove the index for further usage of para array
      para.pop();
      console.log(para[index]);
    }
    moreThanThree = false;
  }

  if (count > 2) {
    window.location.href = "work.html";
  }

  //console.log(slideShowCarousel);
  //console.log(arrayLength);
}

function viewSiteFunc() {
  // Getting What object is passed
  var objectIndex;
  var URL;
  for (var i = 0; i < projects.length; i++) {
    if (proName.innerHTML == projects[i].getName()) {
      objectIndex = i;
    }
  }

  URL = projects[objectIndex].getURL();
  ViewSite.href = URL;
}
