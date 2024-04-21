let swiperBrands = null
let swiperTechnique = null
let swiperPrices = null

const isMobile = () => window.innerWidth < 768

function initSwiper(swiper, containerSelector, paginationSelector) {
  if (isMobile() && !swiper) {
    return new Swiper(containerSelector, {
      pagination: {
        el: paginationSelector,
        clickable: true
      },
      spaceBetween: 16,
      grabCursor: true,
      mousewheel: {
        sensitivity: 1
      }
    })
  } else if (!isMobile() && swiper) {
    swiper.destroy()
    return null
  }
  return swiper
}

function updateSwipers() {
  swiperBrands = initSwiper(
    swiperBrands,
    '.brands__container',
    '.brands__pagination'
  )
  swiperTechnique = initSwiper(
    swiperTechnique,
    '.technique__container',
    '.technique__pagination'
  )
  swiperPrices = initSwiper(
    swiperPrices,
    '.prices__container',
    '.prices__pagination'
  )
}

window.addEventListener('load', updateSwipers)
window.addEventListener('resize', updateSwipers)
