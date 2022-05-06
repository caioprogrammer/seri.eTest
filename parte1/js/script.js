const openMenu = document.querySelector('.ver-mais-mobile');
const closeMenu = document.querySelector('.close-menu')

const menuMobile = document.querySelector('.header__nav--mobile');

openMenu.addEventListener('click', () => {  
  menuMobile.classList.add('active')
})

closeMenu.addEventListener('click', () => {  
  menuMobile.classList.remove('active')
})