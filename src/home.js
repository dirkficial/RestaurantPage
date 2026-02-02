import gintamaImage from '../gintama-food.jpg';

export default function loadHome() {
    const content = document.getElementById("content");

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Gintama (銀魂) Restaurant!";

    const text = document.createElement("p");
    text.textContent = "Gintama, a.k.a 銀魂, is an anime in Japan with the meaning of 'Silver Soul'.";

    const backgroundImage = document.createElement("img");
    backgroundImage.src = gintamaImage;

    content.appendChild(headline);
    content.appendChild(text);
    content.appendChild(backgroundImage);
}
