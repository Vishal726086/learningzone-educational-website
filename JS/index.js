import { Tutorials } from "../Data/Tutorials.js";
import { References } from "../Data/References.js";
import { Exercises } from "../Data/Exercises.js";

/*******/
// Store Mobile Menu Content
let mobileTutorialContent = "";
let mobileReferencesContent = "";
let mobileExercisesContent = "";

// section mobile btn   (menu-btn-mobile - to minimize and maximize)
let MenuBtnMobileElement = document.getElementById("menu-btn-mobile");

let MenuBtnMobileElementOpenBoolean = false;

let MonileMenuNavElement = document.getElementById("mobile-menu-nav");

MenuBtnMobileElement.addEventListener("click", () => {
  if (MenuBtnMobileElementOpenBoolean) {
    // MonileMenuNavElement.style.display = "none"
    MonileMenuNavElement.classList.remove("mobile-menu-nav-hidden");
    MenuBtnMobileElementOpenBoolean = false;
  } else {
    // MonileMenuNavElement.style.display = "block"
    MonileMenuNavElement.classList.add("mobile-menu-nav-hidden");
    MenuBtnMobileElementOpenBoolean = true;
  }
});

// mobile-nav-close - cross button to close the mobile view container menu.
let MobileNavCloseElement = document.getElementById("mobile-nav-close");

MobileNavCloseElement.addEventListener("click", () => {
  // MonileMenuNavElement.style.display = "none"
  MonileMenuNavElement.classList.remove("mobile-menu-nav-hidden");
  MenuBtnMobileElementOpenBoolean = false;
});

//************tutorial-btn********************* */

const NestedNavigationContainer = document.getElementById(
  "nested-navigation-container_id"
);
let TutorialElement = document.getElementById("tutorial-btn");
const NestedNavigationCloseBtn = document.getElementById(
  "nested-navigation-close-Btn"
);

TutorialElement.addEventListener("click", toggleTutorial);
NestedNavigationCloseBtn.addEventListener("click", closeMenuContent);

// menu close X
function closeMenuContent() {
  NestedNavigationContainer.classList.toggle("nested_navigation_hidden");

  // tutorial
  TutorialElement.classList.remove("bg-black");
  TutorialElement.classList.remove("text-white");
  // reference
  referencesBtnElement.classList.remove("bg-black");
  referencesBtnElement.classList.remove("text-white");
  // exercise
  exerciseBtnElement.classList.remove("bg-black");
  exerciseBtnElement.classList.remove("text-white");
}

function toggleTutorial() {
  TutorialElement.classList.toggle("bg-black");
  TutorialElement.classList.toggle("text-white");
  NestedNavigationContainer.classList.remove("nested_navigation_hidden");

  tutorialMenuDisplayAll();
  // reference
  referencesBtnElement.classList.remove("bg-black");
  referencesBtnElement.classList.remove("text-white");
  // exercise
  exerciseBtnElement.classList.remove("bg-black");
  exerciseBtnElement.classList.remove("text-white");
}

/*********************** Tutorial Data *******************************/
// console.log(Tutorials);

/********** Tab=HTMLandCSS column, tAB2=Javascript column and so on..  ***************/
// menu id
let nestedNavigationContainerContentID = document.getElementById(
  "nested-navigation-container-contentID"
);
let nestedNavigationHeading = "";
let nestedNavigationTab1 = "";
let nestedNavigationTab2 = "";
let nestedNavigationTab3 = "";
let nestedNavigationTab4 = "";

// ************** mobile tutorial menu - (tutorial_menuLink_mobile) ******************
const tutorialMenuLinkMobileElement = document.getElementById(
  "tutorial_menuLink_mobile"
);
let TutorialMenuMobileElement = document.getElementById("Tutorial_menu_mobile");

tutorialMenuLinkMobileElement.addEventListener("click", () => {
  tutorialMenuDisplayAll();
  let tutorialMenuTab_Mobile = mobileTutorialContent;

  tutorialMenuLinkMobileElement.classList.toggle("mobile_menu_active");
  TutorialMenuMobileElement.classList.toggle("mobile_menuActive_tutorial");

  TutorialMenuMobileElement.innerHTML = tutorialMenuTab_Mobile;
});

// ************** mobile references menu - (references_menuLink_mobile) ******************

const referencesMenuLinkMobileElement = document.getElementById(
  "references_menuLink_mobile"
);
let referencesMenuMobileElement = document.getElementById(
  "references_menu_mobile"
);

referencesMenuLinkMobileElement.addEventListener("click", () => {
  referenceContent();
  let tutorialMenuTab_Mobile = mobileReferencesContent;

  referencesMenuLinkMobileElement.classList.toggle("mobile_menu_active");
  referencesMenuMobileElement.classList.toggle("mobile_menuActive_tutorial");

  referencesMenuMobileElement.innerHTML = tutorialMenuTab_Mobile;
});

// ************** mobile exercises menu - (exercises_menuLink_mobile) ******************

const exercisesMenuLinkMobileElement = document.getElementById(
  "exercises_menuLink_mobile"
);
let exercisesMenuMobileElement = document.getElementById(
  "exercises_menu_mobile"
);

exercisesMenuLinkMobileElement.addEventListener("click", () => {
  exercisesContent();
  let tutorialMenuTab_Mobile = mobileExercisesContent;

  exercisesMenuLinkMobileElement.classList.toggle("mobile_menu_active");
  exercisesMenuMobileElement.classList.toggle("mobile_menuActive_tutorial");

  exercisesMenuMobileElement.innerHTML = tutorialMenuTab_Mobile;
});

/************ TUTORIAL CONTENT ***************/

function tutorialMenuDisplayAll() {
  nestedNavigationHeading = "";
  nestedNavigationTab1 = "";
  nestedNavigationTab2 = "";
  nestedNavigationTab3 = "";
  nestedNavigationTab4 = "";

  /*****************************/
  // Heading
  nestedNavigationHeading = `<h1>${Tutorials.name}</h1>`;

  // Sub menu
  // Tab 1
  nestedNavigationTab1 = `<h2>${Tutorials.HTMLAndCSS.name}</h2>`;
  Tutorials.HTMLAndCSS.menu.forEach((el) => {
    nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`;
  });
  // Tab 2
  nestedNavigationTab2 = `<h2>${Tutorials.JavaScript.name}</h2>`;
  Tutorials.JavaScript.menu.forEach((el) => {
    nestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`;
  });
  nestedNavigationTab2 += `<h2>${Tutorials.WebBuilding.name}</h2>`;
  Tutorials.WebBuilding.menu.forEach((el) => {
    nestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`;
  });
  // Tab 3
  nestedNavigationTab3 = `<h2>${Tutorials.DataAnalytics.name}</h2>`;
  Tutorials.DataAnalytics.menu.forEach((el) => {
    nestedNavigationTab3 += `<a href="${el.link}">${el.title}</a>`;
  });
  // Tab 4
  nestedNavigationTab4 = `<h2>${Tutorials.Backend.name}</h2>`;
  Tutorials.Backend.menu.forEach((el) => {
    nestedNavigationTab4 += `<a href="${el.link}">${el.title}</a>`;
  });

  // Render all the menu
  nestedNavigationContainerContentID.innerHTML = `
${nestedNavigationHeading}
<div class="nested-navigation-container_content_data">
    <div class="nested-navigation_item">
        ${nestedNavigationTab1}
    </div>
    <div class="nested-navigation_item">
        ${nestedNavigationTab2}   
    </div>
    <div class="nested-navigation_item">
        ${nestedNavigationTab3}
    </div>
    <div class="nested-navigation_item">
        ${nestedNavigationTab4}
    </div>
</div>
`;
  mobileTutorialContent =
    nestedNavigationHeading +
    nestedNavigationTab1 +
    nestedNavigationTab2 +
    nestedNavigationTab3 +
    nestedNavigationTab4;

  nestedNavigationHeading = "";
  nestedNavigationTab1 = "";
  nestedNavigationTab2 = "";
  nestedNavigationTab3 = "";
  nestedNavigationTab4 = "";
}

// reference section javascript
console.log(References);
let referencesBtnElement = document.getElementById("references-btn");

referencesBtnElement.addEventListener("click", () => {
  referencesBtnElement.classList.toggle("bg-black");
  referencesBtnElement.classList.toggle("text-white");
  NestedNavigationContainer.classList.remove("nested_navigation_hidden");
  // tutorial
  TutorialElement.classList.remove("bg-black");
  TutorialElement.classList.remove("text-white");
  // exercise
  exerciseBtnElement.classList.remove("bg-black");
  exerciseBtnElement.classList.remove("text-white");

  referenceContent();
});

//******** REFERENCE CONTENT ************/
function referenceContent() {
  nestedNavigationHeading = "";
  nestedNavigationTab1 = "";
  nestedNavigationTab2 = "";
  nestedNavigationTab3 = "";
  nestedNavigationTab4 = "";

  // Heading
  nestedNavigationHeading += `<h1>${References.name}</h1>`;

  // Sub menu
  // Tab 1
  nestedNavigationTab1 += `<h2>${References.HTML.name}</h2>`;
  References.HTML.menu.forEach((el) => {
    nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`;
  });
  // Tab 2
  nestedNavigationTab2 += `<h2>${References.CSS.name}</h2>`;
  References.CSS.menu.forEach((el) => {
    nestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`;
  });
  // Tab 3
  nestedNavigationTab3 += `<h2>${References.JavaScript.name}</h2>`;
  References.JavaScript.menu.forEach((el) => {
    nestedNavigationTab3 += `<a href="${el.link}">${el.title}</a>`;
  });
  // Tab 4
  nestedNavigationTab4 += `<h2>${References.Backend.name}</h2>`;
  References.Backend.menu.forEach((el) => {
    nestedNavigationTab4 += `<a href="${el.link}">${el.title}</a>`;
  });

  // Render all the menu
  nestedNavigationContainerContentID.innerHTML = `
${nestedNavigationHeading}
<div class="nested-navigation-container_content_data">
    <div class="nested-navigation_item">
        ${nestedNavigationTab1}
    </div>
    <div class="nested-navigation_item">
        ${nestedNavigationTab2}   
    </div>
    <div class="nested-navigation_item">
        ${nestedNavigationTab3}
    </div>
    <div class="nested-navigation_item">
        ${nestedNavigationTab4}
    </div>
</div>
`;

  mobileReferencesContent =
    nestedNavigationHeading +
    nestedNavigationTab1 +
    nestedNavigationTab2 +
    nestedNavigationTab3 +
    nestedNavigationTab4;

  nestedNavigationHeading = "";
  nestedNavigationTab1 = "";
  nestedNavigationTab2 = "";
  nestedNavigationTab3 = "";
  nestedNavigationTab4 = "";
}

//******* excercise-btn *******/
let exerciseBtnElement = document.getElementById("exercise-btn");

exerciseBtnElement.addEventListener("click", () => {
  exerciseBtnElement.classList.toggle("bg-black");
  exerciseBtnElement.classList.toggle("text-white");
  NestedNavigationContainer.classList.remove("nested_navigation_hidden");
  // tutorial
  TutorialElement.classList.remove("bg-black");
  TutorialElement.classList.remove("text-white");
  // reference
  referencesBtnElement.classList.remove("bg-black");
  referencesBtnElement.classList.remove("text-white");

  exercisesContent();
});

/*********** EXERCISE CONTENT ************/
function exercisesContent() {
  nestedNavigationHeading = "";
  nestedNavigationTab1 = "";
  nestedNavigationTab2 = "";
  nestedNavigationTab3 = "";
  nestedNavigationTab4 = "";

  // Heading
  nestedNavigationHeading += `<h1>${Exercises.name}</h1>`;

  // Sub menu
  // Tab 1
  nestedNavigationTab1 += `<h2>${Exercises.HTMLandCSS.name}</h2>`;
  Exercises.HTMLandCSS.menu.forEach((el) => {
    nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`;
  });

  // Render all the menu
  nestedNavigationContainerContentID.innerHTML = `
${nestedNavigationHeading}
<div class="nested-navigation-container_content_data">
    <div class="nested-navigation_item">
        ${nestedNavigationTab1}
    </div>
</div>
`;
  mobileExercisesContent = nestedNavigationHeading + nestedNavigationTab1;

  nestedNavigationHeading = "";
  nestedNavigationTab1 = "";
}

/**************************** Navbar JavaScript Codes Ended ********************************/

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/

// ******************** JavaScript Codes for Main Page Contents *****************************/

// Second Page Right Section -> create HTML editor.
const htmlCode = `<! DOCTYPE html>
  <html>
  <title>Html Tutorials</title>
  <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p> 

  </body>
  </html>
  `;
let htmlCodeElement = (document.getElementById("htmlCode").innerText =
  htmlCode);
// ______________________________________________________________________________

// Third Page Right Section -> Create CSS editor.
const cssCode = `body {
    background-color: lightblue;
  }

  h1 {
    color: white;
    text-align: center;
  }

  p {
  font-family: verdana;
  }`;
let cssCodeElement = (document.getElementById("cssCode").innerText = cssCode);
//  ______________________________________________________________________________

// Fourth Page Right Section -> Create JavaScript editor.
const jsCode = `<button onclick="myFunction()">Click Me!</button>
 <script>
  function myFunction() {
   let x = document.getElementById("demo");
   x.style.fontSize = "25px";
   x.style.color = "red";
  }
 </script>`;
let jsCodeElement = (document.getElementById("jsCode").innerText = jsCode);
//  ______________________________________________________________________________

// Fifth Page Right Section -> Create Python editor.
const pythonCode = `if 5 > 2:
print("Five is greater than two!")`;
let pythonCodeElement = (document.getElementById("pythonCode").innerText =
  pythonCode);
//  ______________________________________________________________________________

// Sixth Page Right Section -> Create SQL editor.
const sqlCode = `SELECT * FROM Customers
WHERE Country='Mexico';`;
let sqlCodeElement = (document.getElementById("sqlCode").innerText = sqlCode);
//  ______________________________________________________________________________

/***********************[ Closed JavaScript Codes for Main Page Contents. ]*****************/

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/

// ********************[ Starts JavaScript Code Editor Section. ]********************/

// code editor section
let ImageAnimationCodeEditor = document.getElementById(
  "animationCodeEditorPart"
);
let codeEditor_frontendElement = document.getElementById("codeEditor_frontend");
let codeEditor_backendElement = document.getElementById("codeEditor_backend");

// change frontend to backend
codeEditor_backendElement.addEventListener("click", () => {
  ImageAnimationCodeEditor.src = "https://www.w3schools.com/tryit/best2.gif";

  // change frontend button color
  codeEditor_frontendElement.classList.toggle("active");
  codeEditor_backendElement.classList.toggle("active");
});

// change backend to frontend
codeEditor_frontendElement.addEventListener("click", () => {
  ImageAnimationCodeEditor.src = "https://www.w3schools.com/codeeditor.gif";

  // change backend button color
  codeEditor_frontendElement.classList.toggle("active");
  codeEditor_backendElement.classList.toggle("active");
});
// ____________________________ Code Editor Section Closed _________________________________





// How To Section Part - make slide image
let howtosection_itemElement = document.querySelectorAll(".howtosection_item");
let imageSlidePreveElement = document.getElementById("imageSlidePreve");
let imageSlideNextElement = document.getElementById("imageSlideNext");
let slideImageCurrent = 0;
let imageSliderActive = document.querySelectorAll(".imageSliderActive");

let imageSliderActive1Element = document.getElementById("imageSliderActive1");
let imageSliderActive2Element = document.getElementById("imageSliderActive2");
let imageSliderActive3Element = document.getElementById("imageSliderActive3");

  // dot color auto slider
function activeImageSlideDot(value) {
  switch (value) {
    case 0:
      imageSliderActive1Element.classList.add("imageSliderActive");
      imageSliderActive2Element.classList.remove("imageSliderActive");
      imageSliderActive3Element.classList.remove("imageSliderActive");
      break;

    case -100:
      imageSliderActive1Element.classList.remove("imageSliderActive");
      imageSliderActive2Element.classList.add("imageSliderActive");
      imageSliderActive3Element.classList.remove("imageSliderActive");
      break;

    case -200:
      imageSliderActive1Element.classList.remove("imageSliderActive");
      imageSliderActive2Element.classList.remove("imageSliderActive");
      imageSliderActive3Element.classList.add("imageSliderActive");
      break;
  }
}

//  for next arrow button
imageSlideNextElement.addEventListener("click", nextSlideImage);

// for previous arrow button
imageSlidePreveElement.addEventListener("click", () => {
  if (slideImageCurrent < 0) {
    slideImageCurrent += 100;
  }
  howtosection_itemElement.forEach((el) => {
    el.style.transform = `translateX(${slideImageCurrent}%)`;
  });

  activeImageSlideDot(slideImageCurrent)
});

function nextSlideImage() {
  if (slideImageCurrent <= 0 && slideImageCurrent >= -100) {
    slideImageCurrent -= 100;
  }
  howtosection_itemElement.forEach((el) => {
    el.style.transform = `translateX(${slideImageCurrent}%)`;
  });

  activeImageSlideDot(slideImageCurrent)
}

function RenderAllImageAutomatic() {
  if (slideImageCurrent <= 0 && slideImageCurrent >= -100) {
    slideImageCurrent -= 100;
  } else {
    slideImageCurrent = 0;
  }
  howtosection_itemElement.forEach((el) => {
    el.style.transform = `translateX(${slideImageCurrent}%)`;
  });

  activeImageSlideDot(slideImageCurrent)

  console.log(slideImageCurrent);
}

setInterval(RenderAllImageAutomatic, 5000);

console.log(howtosection_itemElement);
// ______________________________ How To Section Part Closed __________________________________
