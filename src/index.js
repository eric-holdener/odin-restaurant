import homePage from "./home";
import contactPage from "./contact";
import menuPage from "./menu";

let content = document.getElementById("content");
let homeButton = document.getElementById("home");
let menuButton = document.getElementById("menu");
let contactButton = document.getElementById("contact");

homeButton.addEventListener("click", function() {
  if (content.firstChild) {
    content.firstChild.remove();
  };

  content.appendChild(homePage());
});

menuButton.addEventListener("click", function() {
  if (content.firstChild) {
    content.firstChild.remove();
  };

  content.appendChild(menuPage());
});

contactButton.addEventListener("click", function() {
  if (content.firstChild) {
    content.firstChild.remove();
  };
  
  content.appendChild(contactPage());
});

content.appendChild(homePage());