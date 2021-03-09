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
let elements = document.querySelector('.elements');
let templateElement = document.querySelector('.template');
let addButton = document.querySelector(".profile__add-button");
let popupAdd = document.querySelector(".popup_add");
let popupFormAdd = document.querySelector(".popup__form_add");
let buttonCloseAdd = document.querySelector(".close__add");
let popupImage = document.querySelector(".popup_image");
let popupButtonCloseImg = document.querySelector('.popup__button-close_img');
let bigImage = document.querySelector('.popup__big-image');
const popupImgTitle = document.querySelector('.popup__image_title');

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

//функция удаления карточки
function deliteCard(event) {
  const target = event.target;
  const currentCard = target.closest('.elements__element');
  currentCard.remove();
};

//функция тёмного сердца
function switchHeart(event) {
  const target = event.target;
  target.classList.add('elements__heart-image_black');
}

//слушатель при создании новых карточек
function addCardListeners(card) {
  const deliteButton = card.querySelector('.popup_trash');
  const likeButton = card.querySelector('.elements__heart-image');
  const clickImage = card.querySelector('.elements__img');
  deliteButton.addEventListener('click', deliteCard);
  likeButton.addEventListener('click', switchHeart);
  clickImage.addEventListener('click', openImage);
};

//клон ноды из template. изменение значений текс, src, alt
function createDom(item) {
  const newItem = templateElement.content.cloneNode(true);
  const nameElement = newItem.querySelector('.elements__text');
  const imgElement = newItem.querySelector('.elements__img');
  const altElement = newItem.querySelector('.elements__img');
  nameElement.textContent = item.name;
  imgElement.src = item.link;
  altElement.alt = item.alt;

  return newItem;
}

//подключил функцию слушатель перед созданием новых карточек.
function conectListener(item) {
  const newCard = createDom(item);
  addCardListeners(newCard);
  return newCard;
};

//Добавление карточек при открытии страницы
function renderList() {
  const result = initialCards.map(conectListener);
  elements.append(...result);
};



//input для новой карточки
function addNewCard(event) {
  event.preventDefault();
  const inputPlace = popupFormAdd.querySelector(".popup__text_place");
  const inputLink = popupFormAdd.querySelector(".popup__text_link");
  const placeValue = inputPlace.value;
  const linkValue = inputLink.value;
  const altValue = inputPlace.value;
  const newCard = createDom({ name: placeValue, link: linkValue }); //создали переменную в которой карта с переданными данными
  addCardListeners(newCard);
  elements.prepend(newCard);   // добавили карту в ДОМ
  inputPlace.value = ''; //обнулили значения в полях инпут
  inputLink.value = '';
  closeAdd();
}

//функция открытия большой картинки
function openImage(event) {
  const target = event.target;
  const openImage = target.src;
  const openTitle = target.alt;
  bigImage.src = openImage;
  popupImgTitle.textContent = openTitle;
  openPopupImage();
}

//открытие попап +
function openPopupAdd() {
  popupAdd.classList.add("popup_opened");
}

//закрытие попап +
function closeAdd() {
  popupAdd.classList.remove('popup_opened');
}

function openPopupImage() {
  popupImage.classList.add('popup_opened');
}
//закрытие попап с фото
function closePopupImage() {
  popupImage.classList.remove('popup_opened');
}

popupButtonCloseImg.addEventListener("click", closePopupImage);
addButton.addEventListener('click', openPopupAdd);
buttonCloseAdd.addEventListener("click", closeAdd);
popupFormAdd.addEventListener('submit', addNewCard);

renderList();