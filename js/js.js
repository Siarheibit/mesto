let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let newName = document.querySelector('.popup__text_name');
let newJob = document.querySelector('.popup__text_job');
let buttonSave = document.querySelector('.popup__button-save');

let title = document.querySelector('.profile__title');
let subTitle = document.querySelector('.profile__subtitle');
let buttonClose = document.querySelector('.popup__button-close');

function openPopup() {
    popup.classList.add('popup_opened');
}

function close() {                              
    popup.classList.remove('popup_opened');
}


function rename() {
    title.textContent = (newName.value);
    subTitle.textContent = (newJob.value);
   close();
   event.preventDefault();
   }


editButton.addEventListener('click', openPopup);
buttonSave.addEventListener('click', rename);
buttonClose.addEventListener('click', close);