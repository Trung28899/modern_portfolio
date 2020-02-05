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
class Project{
    constructor(images = [], projectName, projectBrief, projectDesc, projectURL){
        this.images = images;
        this.projectName = projectName; 
        this.projectBrief = projectBrief; 
        this.projectDesc = projectDesc; 
        this.projectURL = projectURL; 
    }

    getName(){
        return this.projectName; 
    }

    getBrief(){
        return this.projectBrief; 
    }

    getDesc(){
        return this.projectDesc
    }

    getURL(){
        return this.projectURL; 
    }
}

var projects = []; 
projects[0] = new Project(["img1","img2","img3"], "Smart Mirror", "Android Studio / Firebase / Java", "Smart Mirror is an android application. Smart Mirror is used to control a Smart Mirror microcontroller system via Firebase Real-time database. The application is developed with Android Studio and Java Programming language.", "none");
projects[1] = new Project(["img1","img2","img3"], "Pizza Application", "Android Studio / XML / Java", "Pizza Order is an android application. Using Pizza Order, customers can choose their favorite pizza with delicious topping quick and easily. The application is developed with Android Studio and Java programming language.", "none");
projects[2] = new Project(["img1","img2","img3"], "Portfolio", "HTML / SASS / JavaScript", "This is the project where we do xyz", "none");
projects[3] = new Project(["img1","img2","img3"], "VietCan", "HTML / CSS / JavaScript", "This is the project where we do xyz", "none");
projects[4] = new Project(["img1","img2","img3"], "Desgined Posters", "Adobe Photoshop / Canvas", "This is the project where we do xyz", "none");

const viewWorkBtn = document.querySelectorAll(".btn-light");
const backgroundView = document.querySelector(".background"); 
const contentView = document.querySelector(".content"); 
const closeBtn = document.querySelector(".close-button"); 
const proName = document.getElementById("proName");
const proBrief = document.getElementById("proBrief"); 
const proDescription = document.getElementById("proDescription");

closeBtn.addEventListener("click", closeWork);
for(var counter = 0; counter < viewWorkBtn.length; counter++){
  viewWorkBtn[counter].addEventListener("click", viewWork);
}

let count = 0; 
function viewWork(){
  proName.innerHTML = projects[0].getName(); 
  proBrief.innerHTML = projects[0].getBrief(); 
  proDescription.innerHTML = projects[1].getDesc();

  backgroundView.classList.add("show");
  contentView.classList.add("show");
  console.log("clicked " + count + " Times"); 
  count++;  
}

function closeWork(){
  contentView.classList.add("close"); 
  backgroundView.classList.remove("show");
  contentView.classList.remove("show");
}

