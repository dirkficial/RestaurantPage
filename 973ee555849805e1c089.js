import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');

function clearContent() {
    content.innerHTML = "";
}

homeBtn.addEventListener('click', () => {
    clearContent(); 
    loadHome();     
});

menuBtn.addEventListener('click', () => {
    clearContent();
    loadMenu();
});

aboutBtn.addEventListener('click', () => {
    clearContent();
    loadAbout();
})

loadHome();