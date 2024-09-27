export default function (){
    const menuDiv = document.createElement("div");

    const heading = document.createElement("h1");
    heading.innerHTML = "Menu: ";

    const subHeadingNonVeg = document.createElement("h3");
    subHeadingNonVeg.innerHTML = "Non Veg Menu: "

    const nonVegMenu = document.createElement("div");
    nonVegMenu.innerText = "1.Chicken Tikka\n2.Chicken Shawarma";

    const subHeadingVeg = document.createElement("h3");
    subHeadingVeg.innerHTML = "Veg Menu: "

    const vegMenu = document.createElement("div");
    vegMenu.innerText = "😂";

    menuDiv.appendChild(heading);
    menuDiv.appendChild(subHeadingNonVeg);
    menuDiv.appendChild(nonVegMenu);
    menuDiv.appendChild(subHeadingVeg);
    menuDiv.appendChild(vegMenu);


    return menuDiv;
}