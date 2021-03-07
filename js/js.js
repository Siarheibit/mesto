import { initialCards } from './cards.js';
let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let newName = document.querySelector(".popup__text_name_value");
let newJob = document.querySelector(".popup__text_job_value");
let title = document.querySelector(".profile__title");
let subTitle = document.querySelector(".profile__subtitle");
let buttonClose = document.querySelector(".popup__button-close");
let popup__form = document.querySelector(".popup__form");
//переменные 2 часть
const elements = document.querySelector('.elements');
const templateElement = document.querySelector('.template');
let addButton = document.querySelector(".profile__add-button");
let popupAdd = document.querySelector(".popup_add");
let popup__form_add = document.querySelector(".popup__form_add");
let buttonCloseAdd = document.querySelector(".close_add");

function openPopup() {
  popup.classList.add("popup_opened");
  newName.value = title.textContent;
  newJob.value = subTitle.textContent;
}

function close() {
  popup.classList.remove("popup_opened");
}

function rename(event) {
  title.textContent = newName.value;
  subTitle.textContent = newJob.value;
  close();
  event.preventDefault();
}

popup__form.addEventListener("submit", rename);
buttonClose.addEventListener("click", close);
editButton.addEventListener("click", openPopup);

///вторая часть работы

//клон ноды из template. изменение значений текс и src
function createDom(item) {
  const newItem = templateElement.content.cloneNode(true);
  const nameElement = newItem.querySelector('.elements__text');
  const imgElement = newItem.querySelector('.elements__img');
  nameElement.textContent = item.name;
  imgElement.src = item.link;
  return newItem;
}

//Добавление карточек при открытии страницы
function renderList() {
  const result = initialCards.map(createDom);
  elements.append(...result);
}
renderList();

//открытие попап +
function openPopupAdd() {
  popupAdd.classList.add("popup_opened");
}

//закрытие попап +
function closeAdd() {
  popupAdd.classList.remove('popup_opened');
}

//input для новой карточки
function addTaskForm(event) {
  event.preventDefault();
  const inputPlace = popup__form_add.querySelector(".popup__text_place");
  const inputLink = popup__form_add.querySelector(".popup__text_link");
  const placeValue = inputPlace.value;
  const linkValue = inputLink.value;
  const newCard = createDom({ name: placeValue, link: linkValue }); //создали переменную в которой карта с переданными данными
  elements.prepend(newCard);   // добавили карту в ДОМ
  inputPlace.value = ''; //обнулили значения в полях инпут
  inputLink.value = '';
  closeAdd();
}

popup__form_add.addEventListener('submit', addTaskForm);
addButton.addEventListener('click', openPopupAdd);
buttonCloseAdd.addEventListener("click", closeAdd);










