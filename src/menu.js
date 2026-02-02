export default function loadMenu() {
    const content = document.getElementById("content");

    const headline = document.createElement("h1");
    headline.textContent = "Our Menu";

    const item1 = document.createElement("p");
    item1.textContent = "Hijikata (土方) Special - $20";

    const item2 = document.createElement("p");
    item2.textContent = "Gintoki (銀時) Special - $20";

    content.appendChild(headline);
    content.appendChild(item1);
    content.appendChild(item2);
}