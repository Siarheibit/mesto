const editButton = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup_edit");
const newName = document.querySelector(".popup__text_name_value");
const newJob = document.querySelector(".popup__text_job_value");
const title = document.querySelector(".profile__title");
const subTitle = document.querySelector(".profile__subtitle");
const buttonCloseEdit = document.querySelector(".popup__button-close");
const popupFormEdit = document.querySelector(".popup__form_edit");
//переменные 2 часть
const elements = document.querySelector('.elements');
const templateElement = document.querySelector('.template');
const addButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_add");
const popupFormAdd = document.querySelector(".popup__form_add");
const buttonCloseAdd = document.querySelector(".popup__button-close_add");
const popupImage = document.querySelector(".popup_image");
const popupButtonCloseImg = document.querySelector('.popup__button-close_img');
const bigImage = document.querySelector('.popup__big-image');
const popupImgTitle = document.querySelector('.popup__block-title');
const inputPlace = popupFormAdd.querySelector(".popup__text_place");
const inputLink = popupFormAdd.querySelector(".popup__text_link");
/////////////////////////////////////////////////////////

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
    elements.prepend(newCard); // добавили карту в ДОМ
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
////////////////////////////////////////////




//////////////////////////
addButton.addEventListener('click', () => openPopup(popupAdd));
buttonCloseAdd.addEventListener('click', () => closePopup(popupAdd));
editButton.addEventListener('click', () => readName());
buttonCloseEdit.addEventListener("click", () => closePopup(popupEdit));
popupButtonCloseImg.addEventListener("click", () => closePopup(popupImage));
popupFormEdit.addEventListener('submit', handleProfileFormSubmit);
popupFormAdd.addEventListener('submit', addNewCard);

renderList();
//////////////////////////

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__text_error_visible');

};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove('popup__text_error_visible');

};



const checkInputValidity = (formElement, inputElement) => {
    const isInputelementValid = !inputElement.validity.valid;

    if (isInputelementValid) {
        const errorMessage = inputElement.validationMessage;

        showInputError(formElement, inputElement, errorMessage);

    } else {
        hideInputError(formElement, inputElement);
    }
};

const toggleButtonState = (inputList, buttonElement) => {
    const hasNotValidInput = inputList.some(
        (inputElement) => !inputElement.validity.valid
    );

    if (hasNotValidInput) {
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add('popup__button-save_invalid');
    } else {
        buttonElement.removeAttribute('disabled', false);
        buttonElement.classList.remove('popup__button-save_invalid');
    }
};

const setEventListeners = (formElement) => {
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    const inputList = Array.from(formElement.querySelectorAll(".popup__text"));
    const buttonElement = formElement.querySelector(".popup__button-save");

    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', (event) => {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
    toggleButtonState(inputList, buttonElement);
};


const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach(setEventListeners);
};



enableValidation();