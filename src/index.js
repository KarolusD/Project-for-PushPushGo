require("./styles/index.scss");
import smoothScroll from './scripts/smooth-scroll';


function $(id) {
    return document.getElementById(id);
}

function getElementY(query) {
    return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top - header.clientHeight;
}

const aboutUs = $('about-us-btn');
const whyUs = $('why-us-btn');

const header = document.querySelector('.site-header');

aboutUs.addEventListener('click', () => {
    smoothScroll(getElementY('.section02'), 400);
});

whyUs.addEventListener('click', () => {
    smoothScroll(getElementY('.section03'), 400);
});


