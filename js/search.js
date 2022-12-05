let searchBtn = document.querySelector('.header__search-btn');
let searchContainer = document.querySelector('.header__search-container');


//добавляем обработчик для кнопки раскрытия бургер меню
searchBtn.addEventListener('click',
  function () {
    searchBtn.classList.toggle('header__search-btn--active');
    searchContainer.classList.toggle('header__search-container--active');
  }
);

