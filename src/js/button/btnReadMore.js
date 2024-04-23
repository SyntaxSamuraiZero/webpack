let btnReadMore = document.querySelector('.services__btn-read-more')
let btnImg = btnReadMore.querySelector('.services__btn-read-more-img')
let btnText = btnReadMore.querySelector('.services__btn-read-more-text')
let text = document.querySelector('.services__container-text')

btnReadMore.addEventListener('click', function () {
  if (btnText.textContent === 'Читать далее') {
    btnImg.classList.add('services__btn-read-more-img--active')
    text.classList.add('services__container-text--active')
    btnText.textContent = 'Скрыть'
  } else {
    btnImg.classList.remove('services__btn-read-more-img--active')
    text.classList.remove('services__container-text--active')
    btnText.textContent = 'Читать далее'
  }
})

let btnReadMoreBrands = document.querySelector('.brands__btn-read-more')
let btnImgBrands = btnReadMoreBrands.querySelector('.brands__btn-read-more-img')
let btnTextBrands = btnReadMoreBrands.querySelector(
  '.brands__btn-read-more-text'
)
let containerBrands = document.querySelector('.brands__container')

btnReadMoreBrands.addEventListener('click', function () {
  if (btnTextBrands.textContent === 'Показать всё') {
    btnImgBrands.classList.add('brands__btn-read-more-img--active')
    containerBrands.classList.add('brands__container--active')
    btnTextBrands.textContent = 'Скрыть'
  } else {
    btnImgBrands.classList.remove('brands__btn-read-more-img--active')
    containerBrands.classList.remove('brands__container--active')
    btnTextBrands.textContent = 'Показать всё'
  }
})

let btnReadMoreTechnique = document.querySelector('.technique__btn-read-more')
let btnImgTechnique = btnReadMoreTechnique.querySelector(
  '.technique__btn-read-more-img'
)
let btnTextTechnique = btnReadMoreTechnique.querySelector(
  '.technique__btn-read-more-text'
)
let containerTechnique = document.querySelector('.technique__container')

btnReadMoreTechnique.addEventListener('click', function () {
  if (btnTextTechnique.textContent === 'Показать всё') {
    btnImgTechnique.classList.add('technique__btn-read-more-img--active')
    containerTechnique.classList.add('technique__container--active')
    btnTextTechnique.textContent = 'Скрыть'
  } else {
    btnImgTechnique.classList.remove('technique__btn-read-more-img--active')
    containerTechnique.classList.remove('technique__container--active')
    btnTextTechnique.textContent = 'Показать всё'
  }
})
