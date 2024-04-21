import './utils/swiper'
import './blocks/button/button'

let btnReadMore = document.querySelector('.services__btn-read-more')
let text = document.querySelector('.services__container-text')
let btnSlide = document.querySelectorAll('.services__slide-menu-button')
let menu = document.querySelector('.menu')
let btnBurger = document.querySelector('.button-burger')
let btnClose = menu.querySelector('.menu__button--close')

btnReadMore.addEventListener('click', function () {
  text.classList.toggle('services__container-text--active')
})

btnBurger.addEventListener('click', function () {
  menu.classList.add('menu--active')
})
btnClose.addEventListener('click', function () {
  menu.classList.remove('menu--active')
})

btnSlide.forEach(function (button) {
  button.addEventListener('click', function () {
    btnSlide.forEach(function (btn) {
      btn.classList.remove('services__slide-menu-button--active')
    })
    button.classList.add('services__slide-menu-button--active')
  })
})
