const hamburger = document.querySelector('.hamburger');
const main = document.querySelector('.navi');
const links = document.querySelector('.navi');

hamburger.addEventListener('click',() => {
    main.classList.toggle('open');
});