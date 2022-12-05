let burgerBtn = document.querySelector('.header__burger-btn');
let navTopMenu= document.querySelector('.header__nav-top');
let navBottomMenu= document.querySelector('.header__nav-bottom');

function closeBurgerMenu() {
  burgerBtn.classList.remove('header__burger-btn--active');
  navTopMenu.classList.remove('header__nav-top--active');
  if (window.innerWidth<=760) {
    navBottomMenu.classList.remove('header__nav-bottom--active');
  }
}

//добавляем обработчик для поавного перехода по ссылкам

document.querySelectorAll('a[href^=\'#\']').forEach(function (link)  {
  let href = link.getAttribute("href");

  if ( href && ( href != '#') ) {
    //вешаем обработчики только на не пустые на внутренние ссылки
    link.addEventListener('click', function (event) {
        event.preventDefault(); // отмена действия браузера по умолчанию
        let id = this.getAttribute("href");
        let elem = document.querySelector(id);
        if( elem ) {
          elem.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    }
});

//добавляем обработчик для кнопки раскрытия бургер меню
burgerBtn.addEventListener('click',
  function () {
    burgerBtn.classList.toggle('header__burger-btn--active');
    navTopMenu.classList.toggle('header__nav-top--active');
    if (window.innerWidth<=760) {
      navBottomMenu.classList.toggle('header__nav-bottom--active');
    }
  }
);

document.querySelectorAll('.header-nav-top-link').forEach(function (menuLink) {
  menuLink.addEventListener('click', function () {
    closeBurgerMenu();
  });
});


document.querySelectorAll('.header__nav-bottom-item').forEach(function (menuLink) {
  menuLink.addEventListener('click', function () {
    closeBurgerMenu();
  });
});



