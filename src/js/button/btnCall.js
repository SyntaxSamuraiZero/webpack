let call = document.querySelector('.call')
let menuBtnCall = document.querySelector('.menu__button--call')
let navBtnCall = document.querySelector('.nav__button--call')
let btnCallClose = call.querySelector('.call__button--close')

menuBtnCall.addEventListener('click', function () {
  call.classList.toggle('call--active')
})
navBtnCall.addEventListener('click', function () {
  call.classList.toggle('call--active')
})
btnCallClose.addEventListener('click', function () {
  call.classList.remove('call--active')
})

document.addEventListener('click', function (event) {
  if (
    !call.contains(event.target) &&
    !menuBtnCall.contains(event.target) &&
    !navBtnCall.contains(event.target)
  ) {
    call.classList.remove('call--active')
  }
})
