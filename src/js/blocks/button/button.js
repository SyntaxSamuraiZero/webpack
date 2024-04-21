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
