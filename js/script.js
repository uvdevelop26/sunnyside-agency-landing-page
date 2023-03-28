//MOBILE TOGGLE MENU

const navbar = document.querySelector('.navbar-header');
const btnToggleMenu = navbar.querySelector('.btn-nemu-togle');
const menuItems = navbar.querySelector('.menu-items');


btnToggleMenu.addEventListener('click', () => {
    menuItems.classList.toggle('display-menu');
});

