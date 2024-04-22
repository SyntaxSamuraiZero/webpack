import './utils/swiper'
import './blocks/button/button'

let btnReadMore = document.querySelector('.services__btn-read-more')
let text = document.querySelector('.services__container-text')
let menu = document.querySelector('.menu')
let btnBurger = document.querySelector('.nav__button--burger')
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

let call = document.querySelector('.call')
let menuBtnCall = document.querySelector('.menu__button--call')
let headerBtnCall = document.querySelector('.nav__button--call')
let btnCallClose = call.querySelector('.call__button--close')

menuBtnCall.addEventListener('click', function () {
  call.classList.toggle('call--active')
})
headerBtnCall.addEventListener('click', function () {
  call.classList.toggle('call--active')
})
btnCallClose.addEventListener('click', function () {
  call.classList.remove('call--active')
})

let feedback = document.querySelector('.feedback')
let menuBtnFeedback = document.querySelector('.services__button--repair')
let headerBtnFeedback = document.querySelector('.nav__button--repair')
let btnFeedbackClose = feedback.querySelector('.feedback__button--close')

menuBtnFeedback.addEventListener('click', function () {
  feedback.classList.toggle('feedback--active')
})
headerBtnFeedback.addEventListener('click', function () {
  feedback.classList.toggle('feedback--active')
})
btnFeedbackClose.addEventListener('click', function () {
  feedback.classList.remove('feedback--active')
})
