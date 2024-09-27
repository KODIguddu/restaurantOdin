export default function (){
    const homeDiv = document.createElement("div");
    homeDiv.className = "home";

    const heading = document.createElement("h1");
    heading.innerHTML = "Welcome to our restaurent";

    const subHeadingMission = document.createElement("h3");
    subHeadingMission.innerHTML = "Our Mission: "

    const missionText = document.createElement("div");
    missionText.innerText = "We aim to provide high quality food which are hand picked by killua!";



    homeDiv.appendChild(heading);
    homeDiv.appendChild(subHeadingMission);
    homeDiv.appendChild(missionText);

    return homeDiv;
}