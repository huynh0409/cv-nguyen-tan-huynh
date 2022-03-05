const knowMeBtn = document.querySelector('.header__content button');
const about = document.querySelector('.about');

knowMeBtn.addEventListener('click', () => {
    about.scrollIntoView({behavior: 'smooth', block: 'start'});
});

const hideInfoBtn = document.querySelector('.contact .hide-icon');
const infoBox = document.querySelector('.contact');

hideInfoBtn.addEventListener('click', () => {
    infoBox.classList.toggle('hide-info');    
});