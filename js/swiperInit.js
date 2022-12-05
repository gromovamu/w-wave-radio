let clientWidth = document.documentElement.clientWidth;

function calcCountSlides(windowWidth) {
  if ( windowWidth > 1200 ) return 4;
  if ( windowWidth > 1044 ) return 3;
  if ( ( windowWidth <= 576 ) && (windowWidth > 450 ) ) return 3;
  return 2;
}

function calcSpaceBetweenSlides(windowWidth) {
  return (windowWidth > 576) ? 30 : 20 ;
}

let countSlides = calcCountSlides(clientWidth);
let spaceBetweenSlides = calcSpaceBetweenSlides(clientWidth);


/* инициализация слайдера */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: countSlides,
  loop: false,
  spaceBetween: spaceBetweenSlides,

  // навигация
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
  });

  window.addEventListener('resize', function() {
    let current_clientWidth = document.documentElement.clientWidth;

    swiper.params.slidesPerView = calcCountSlides(current_clientWidth);

    swiper.params.spaceBetween = calcSpaceBetweenSlides(current_clientWidth);

  });
