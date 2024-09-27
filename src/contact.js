export default function (){
    const contactDiv = document.createElement("div");
    
    const heading = document.createElement("h1");
    heading.innerHTML = "Contact: ";

    const textDiv = document.createElement("div");
    textDiv.innerHTML = "don't"

    contactDiv.appendChild(heading);
    contactDiv.appendChild(textDiv);
    
    return contactDiv;
}