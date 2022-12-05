let loadPodcastsBtn = document.querySelector('.podcasts__more-btn');
let initCardCount =  (window.innerWidth <= 576)? 4 : 8;
let addCardStatus = false;
let addCardCount = 4;

/* здесь используется window.innerWidth потому что он возвращает ширину экрана с полосой прокрутки,
 так условие совпадает с медиазапросом @media (max-width: 576px)*/

 //console.log("podcastsLoader: initCardCount = " + initCardCount);

function cardsCountInit(visibleCardCount) {
  document.querySelectorAll('.podcasts__item').forEach(function (podcastsItem, item) {

    if ( item < visibleCardCount ) {
      podcastsItem.classList.remove('podcasts__item--hidden');

    }
    else {
      podcastsItem.classList.add('podcasts__item--hidden');
    }
  });
}

/* Инициализируем внешний вид списка подкастов в соответсвии с шириной экрана */
cardsCountInit(initCardCount);


/* добавляем обработчик для изменения размера экрана
 в зависимости от размера будут скрыватся лищние карточки,
 но только в том случае если не были раскрыты дополнительные,
 если были, ничего не делаем */

window.addEventListener('resize', function() {
  newInitCardCount =  (window.innerWidth <= 576)? 4 : 8;

  if ((!addCardStatus) && (newInitCardCount!=initCardCount)) {
    initCardCount = newInitCardCount;
    cardsCountInit(initCardCount);
  }

});


//добавляем обработчик для кнопки загрузки подкастов (открывает заданное количество скрытых подкастов)
loadPodcastsBtn.addEventListener('click',
  function () {
    document.querySelectorAll('.podcasts__item--hidden').forEach(function (hiddenBlock, item) {
      if (item < addCardCount)
      {
          hiddenBlock.classList.remove('podcasts__item--hidden');
      }
    });
  }
);

