function stopCurrentPlay(className, currentBtn) {
  document.querySelectorAll('.' + className).forEach(function (activePlayBtn) {
      if (activePlayBtn != currentBtn) {
        activePlayBtn.classList.remove(className);
      }
  });
}

function addEventListenerForPlayBtns(className) {
  document.querySelectorAll('.' + className).forEach(function (playBtn) {
    playBtn.addEventListener('click', function () {
      stopCurrentPlay(className + '--active', playBtn);
      playBtn.classList.toggle(className + '--active');
    });
  });
}

/*Добавляем обработчики на кнопок "играть" в заголовке */
  addEventListenerForPlayBtns('header__play-btn');

/*Добавляем обработчики на кнопок "играть" в секции "Подкасты" */
  addEventListenerForPlayBtns('podcasts__play-btn');

  /*Добавляем обработчики на кнопок "играть" в секции "Плэйлисты" */
  addEventListenerForPlayBtns('playlists__article');

  document.querySelectorAll('.playlists__article').forEach(function (playBtn) {
      playBtn.addEventListener('keydown', function(event) {
        if (event.code == 'Enter') {
          stopCurrentPlay('playlists__article--active', playBtn);
          playBtn.classList.toggle('playlists__article--active');
        }
      });
  });

  /* добавляем обработчик на кнопку "Что в эфире" */
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
