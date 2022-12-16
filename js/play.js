let classPlayNames=['header__play-btn','podcasts__play-btn','playlists__article'];

function stopCurrentPlay(className, currentBtn) {
  document.querySelectorAll('.' + className).forEach(function (activePlayBtn) {
      if (activePlayBtn != currentBtn) {
        activePlayBtn.classList.remove(className);
      }
  });
}

function listenerForPlayBtns(className, activeBtn) {
  /*выключаем все, что играет*/
  classPlayNames.forEach(function(classPlayName) {
    stopCurrentPlay(classPlayName + '--active', activeBtn);
  });

  if ( activeBtn.classList.contains(className + '--active') )
  {
    activeBtn.classList.remove(className + '--active');
    /*здесь длолжны быть функции для остановки воспроизведения */
  }
  else {
    activeBtn.classList.add(className + '--active');
    /*здесь длолжны быть функции для запуска воспроизведения */
  }
}

function addEventListenerForPlayBtns(className) {
  document.querySelectorAll('.' + className).forEach(function (playBtn) {
    playBtn.addEventListener('click', function () {
      listenerForPlayBtns(className, playBtn);
    });
  });
}

/*Добавляем обработчики для кнопок "играть" в заголовке */
  addEventListenerForPlayBtns('header__play-btn');

/*Добавляем обработчики для кнопок "играть" в секции "Подкасты" */
  addEventListenerForPlayBtns('podcasts__play-btn');

/*Добавляем обработчики для кнопок "играть" в секции "Плэйлисты" */
  addEventListenerForPlayBtns('playlists__article');

/*Добавляем обработчики для кнопок "играть" в секции "Плэйлисты" при управлении с клавиатуры */
  document.querySelectorAll('.playlists__article').forEach(function (playBtn) {
      playBtn.addEventListener('keydown', function(event) {
        if (event.code == 'Enter') {
          listenerForPlayBtns('playlists__article', playBtn);
        }
      });
  });

  /* добавляем обработчик на кнопку "Что в эфире" для открытия под меню с кнопками */
  let openPlayBtn = document.querySelector('.header__broadcast');
  let playConatiner = document.querySelector('.header__play-container');
  let headerBottom = document.querySelector('.header__bottom');

  openPlayBtn.addEventListener('click',
  function () {
    playConatiner.classList.toggle('header__play-container--opened');
    openPlayBtn.classList.toggle('header__broadcast--active');
    headerBottom.classList.toggle('header__bottom--opened');
  }
);
