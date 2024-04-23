let feedback = document.querySelector('.feedback')
let menuBtnFeedback = document.querySelector('.menu__button--chat')
let navBtnFeedback = document.querySelector('.nav__button--chat')
let btnFeedbackClose = feedback.querySelector('.feedback__button--close')

menuBtnFeedback.addEventListener('click', function () {
  feedback.classList.toggle('feedback--active')
})
navBtnFeedback.addEventListener('click', function () {
  feedback.classList.toggle('feedback--active')
})
btnFeedbackClose.addEventListener('click', function () {
  feedback.classList.remove('feedback--active')
})

document.addEventListener('click', function (event) {
  if (
    !feedback.contains(event.target) &&
    !menuBtnFeedback.contains(event.target) &&
    !navBtnFeedback.contains(event.target)
  ) {
    feedback.classList.remove('feedback--active')
  }
})
