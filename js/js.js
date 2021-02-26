let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let newName = document.querySelector('.text_name');
let newJob = document.querySelector('.text_job');
let title = document.querySelector('.profile__title');
let subTitle = document.querySelector('.profile__subtitle');
let buttonClose = document.querySelector('.popup__button-close');

function openPopup() {
    popup.classList.add('popup_opened');
    newName.value = title.textContent;
    newJob.value = subTitle.textContent;
}

function close() {
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
buttonClose.addEventListener('click', close);

document.querySelector('.popup__form').addEventListener('submit', function (event) {
    title.textContent = (newName.value);
    subTitle.textContent = (newJob.value);
    close();
    event.preventDefault();
});