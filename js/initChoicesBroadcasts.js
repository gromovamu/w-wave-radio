const element = document.querySelector('.broadcasts__select');
const choices = new Choices(element, {
  shouldSort: false,
  searchEnabled: false,
  itemSelectText: "",
  position: 'bottom'
});
