//Pages
import homeDiv from "./home.js";
import menuDiv from "./menu.js";
import contactDiv from "./contact.js";

//Images
import logoIconImage from "./logo.jpg"

//Style
import "./style.css"

// Make Root Website
const contentDiv = (function(){
    //Create and Add Skeleton Elements
    const header = document.createElement("header");
    const nav = document.createElement("nav");

    const logo = document.createElement("div");
    logo.className = "logo"
    const logoIcon = document.createElement("img");
    logoIcon.src =  logoIconImage;
    const logoText = document.createElement("div");
    logoText.innerHTML = "KilCusine - Assasin's Kitchen";
    logo.appendChild(logoIcon);
    logo.appendChild(logoText);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList = "buttonsContainer";

    const homeButton = document.createElement("button");
    homeButton.innerText = "Home";
    homeButton.addEventListener("click", ()=>renderComponent(homeDiv));

    const menuButton = document.createElement("button");
    menuButton.innerHTML = "Menu";
    menuButton.addEventListener("click", ()=> renderComponent(menuDiv));

    const contactButton = document.createElement("button");
    contactButton.innerHTML = "Contact"
    contactButton.addEventListener("click", ()=> renderComponent(contactDiv));

    buttonsContainer.appendChild(homeButton);
    buttonsContainer.appendChild(menuButton);
    buttonsContainer.appendChild(contactButton);

    nav.appendChild(logo);
    nav.appendChild(buttonsContainer);

    header.appendChild(nav);
    document.body.appendChild(header);

    // Content Div
    const contentDiv = document.createElement("div");
    contentDiv.id = "content";
    document.body.appendChild(contentDiv);

    return contentDiv;
})()



function renderComponent(createComponent){
    // Clear Content Div
    contentDiv.innerHTML = "";
    
    const newComponent = createComponent();
    contentDiv.appendChild(newComponent);
}

// Load Home By Default
(function(){renderComponent(homeDiv)})()