let menu = document.querySelector('.menu')
let btnBurger = document.querySelector('.nav__button--burger')
let btnClose = menu.querySelector('.menu__button--close')

btnBurger.addEventListener('click', function () {
  menu.classList.add('menu--active')
})
btnClose.addEventListener('click', function () {
  menu.classList.remove('menu--active')
})

document.addEventListener('click', function (event) {
  if (!menu.contains(event.target) && !btnBurger.contains(event.target)) {
    menu.classList.remove('menu--active')
  }
})
