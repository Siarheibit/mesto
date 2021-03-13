const editButton = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup_edit");
let newName = document.querySelector(".popup__text_name_value");
let newJob = document.querySelector(".popup__text_job_value");
let title = document.querySelector(".profile__title");
let subTitle = document.querySelector(".profile__subtitle");
let buttonCloseEdit = document.querySelector(".popup__button-close");
let popupFormEdit = document.querySelector(".popup__form_edit");
//переменные 2 часть
let elements = document.querySelector('.elements');
let templateElement = document.querySelector('.template');
let addButton = document.querySelector(".profile__add-button");
let popupAdd = document.querySelector(".popup_add");
let popupFormAdd = document.querySelector(".popup__form_add");
let buttonCloseAdd = document.querySelector(".popup__button-close_add");
let popupImage = document.querySelector(".popup_image");
let popupButtonCloseImg = document.querySelector('.popup__button-close_img');
let bigImage = document.querySelector('.popup__big-image');
const popupImgTitle = document.querySelector('.popup__block-title');
const inputPlace = popupFormAdd.querySelector(".popup__text_place");
const inputLink = popupFormAdd.querySelector(".popup__text_link");


function handleProfileFormSubmit(event) {
  event.preventDefault();
  title.textContent = newName.value;
  subTitle.textContent = newJob.value;
  closePopup(popupEdit);
}

///вторая часть работы

//функция удаления карточки
function deleteCard(event) {
  event.target.closest('.elements__element').remove();
};


//функция тёмного сердца
function switchHeart(event) {
  event.target.classList.toggle('elements__heart-image_black')
}

//слушатель при создании новых карточек
function addCardListeners(card) {
  const deliteButton = card.querySelector('.popup_trash');
  const likeButton = card.querySelector('.elements__heart-image');
  const clickImage = card.querySelector('.elements__img');
  deliteButton.addEventListener('click', deleteCard);
  likeButton.addEventListener('click', switchHeart);
  clickImage.addEventListener('click', openImage);
};

//клон ноды из template. изменение значений текс, src, alt
function getCard(item) {
  const newItem = templateElement.content.cloneNode(true);
  const nameElement = newItem.querySelector('.elements__text');
  const imgElement = newItem.querySelector('.elements__img');
  nameElement.textContent = item.name;
  imgElement.src = item.link;
  imgElement.alt = item.alt;
  return newItem;
}

//подключил функцию слушатель перед созданием новых карточек.
function renderCards(item) {
  const newCard = getCard(item);
  addCardListeners(newCard);
  return newCard;
};

//Добавление карточек при открытии страницы
function renderList() {
  const cards = initialCards.map(renderCards);
  elements.append(...cards);
};

//input для новой карточки
function addNewCard(event) {
  event.preventDefault();
  const placeValue = inputPlace.value;
  const linkValue = inputLink.value;
  const altValue = inputPlace.value;
  const newCard = renderCards({ name: placeValue, link: linkValue, alt: altValue }); //создали переменную в которой карта с переданными данными
  elements.prepend(newCard);   // добавили карту в ДОМ
  popupFormAdd.reset();
  closePopup(popupAdd);
}

//функция открытия большой картинки
function openImage(event) {
  const target = event.target;
  const openImage = target.src;
  const openTitle = target.alt;
  bigImage.src = openImage;
  bigImage.alt = openTitle;
  popupImgTitle.textContent = openTitle;
  openPopup(popupImage);
}

function openPopup(item) {
  item.classList.add('popup_opened');
}
function closePopup(item) {
  item.classList.remove('popup_opened');
}

function readName() {
  newName.value = title.textContent;
  newJob.value.value = subTitle.textContent;
  openPopup(popupEdit);
}

addButton.addEventListener('click', () => openPopup(popupAdd));
buttonCloseAdd.addEventListener('click', () => closePopup(popupAdd));
editButton.addEventListener('click', () => readName());
buttonCloseEdit.addEventListener("click", () => closePopup(popupEdit));
popupButtonCloseImg.addEventListener("click", () => closePopup(popupImage));
popupFormEdit.addEventListener('submit', handleProfileFormSubmit);
popupFormAdd.addEventListener('submit', addNewCard);

renderList();