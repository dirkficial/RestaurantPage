export default function loadAbout() {
    const content = document.getElementById("content");

    const headline = document.createElement("h1"); 
    headline.textContent = "About Gintama (銀魂) Cafe";

    const aboutParagraph = document.createElement("p");
    aboutParagraph.textContent = "Our cafe introduces two iconic food that represents Gintoki and Hijikata.";

    content.appendChild(headline);
    content.appendChild(aboutParagraph);
}