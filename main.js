const menuEmail = document.querySelector('.navbar-email');
const dekstopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    dekstopMenu.classList.toggle('inactive');
}