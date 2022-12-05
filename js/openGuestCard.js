/* архив заполенных карточек */
let guestCards = [{
  name: "Ольга Мартынова",
  biography: "Российский искусствовед, арт-критик, куратор выставок,\
   дизайнер, кандидат культурологии. Арт-критик газеты «Коммерсантъ». \
   Ведёт активную блогерскую деятельность как куратор музея «Гараж», коим является с 2016 года.",
   imgUrl: "img/guests/guests-img1.jpg",
   imgUrl_dop: "img/guests/768/guests-img-768-1.jpg"
}];

let infoCard = document.querySelector('.guests__info-card');
let guestsName = document.querySelector('.guests__name');
let guestsBiography = document.querySelector('.guests__biography');
let guests__img =  document.querySelector('.guests__img');

/* подвесим обработчики на имена гостей */
document.querySelectorAll('.guests__item-name-btn').forEach(function (guestItem) {
  guestItem.addEventListener('click', function () {
    /* Заменим имя в карточке и добавим биографию*/
    let name = guestItem.textContent;
    let widthWin =  window.innerWidth;
    guestsName.textContent = name;
    guestCards.forEach(function (guest) {
      if (name.indexOf(guest.name, 0) != -1) {
        guestsBiography.textContent = guest.biography;

        if (widthWin<=1020 && widthWin>576) {
          if ( guest.imgUrl_dop) {
            guests__img.src =  guest.imgUrl_dop;
          }
        }
        else {
          if ( guest.imgUrl) {
            guests__img.src =  guest.imgUrl;
          }
        }
      }
      else {
        guestsBiography.textContent = "";
        guests__img.src =  "img/guests/guests-plug-img.jpg";
        if (widthWin<=1020 && widthWin>576) {
          guests__img.src =  "img/guests/768/guests-plug-img-768.jpg";
        }
        else {
          guests__img.src =  "img/guests/guests-plug-img.jpg";
        }
      }
    });

    /* откроем карточку с гостем */
    infoCard.classList.add('guests__info-card--visible');
    /* прокрутим страницу до карточки с гостем для разрешений меньше 1020 */
    if ( widthWin <= 1020 ) {
     infoCard.scrollIntoView({
      behavior: "smooth",
      block: "start"
     });

    }
  });
});

/* подвесим обработчик на закрытие аккардеона */
document.querySelectorAll('.guests__accordion-header').forEach(function (accordionHeader) {
  accordionHeader.addEventListener('click', function () {
    /* закроем карточку с гостем */
    infoCard.classList.remove('guests__info-card--visible');
  });
});
