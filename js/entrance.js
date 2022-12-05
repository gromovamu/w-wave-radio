let entranceBtn = document.querySelector('.header__entrance-btn');
let entranceForm= document.querySelector('.entrance');
let entranceFormCloseBtn= document.querySelector('.entrance__close-btn');

entranceBtn.addEventListener('click',
function () {
  entranceForm.classList.add('entrance--active');
  document.body.classList.add('stop_scroll');
}
);

entranceFormCloseBtn.addEventListener('click',
function () {
  entranceForm.classList.remove('entrance--active');
  document.body.classList.remove('stop_scroll');
}
);
