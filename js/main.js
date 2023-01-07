const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#navBtn');
const navBtnImg = document.querySelector('#navBtnImg');

navBtn.addEventListener('click', openMenu = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = ('img/icons/navClose.svg');
    } else {
        navBtnImg.src = ('img/icons/navOpen.svg');
    }
});


AOS.init();