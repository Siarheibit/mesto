let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
function openPopup() {
  popup.classList.add('popup_opened');
  console.log(popup.className);
}
editButton.addEventListener('click', openPopup); 

                                              //

let newName = document.querySelector('.popup__text_name'); 
let newJob = document.querySelector('.popup__text_job');
let buttonSave = document.querySelector('.popup__button-save');
let title = document.querySelector('.profile__title');
let subTitle = document.querySelector('.profile__subtitle');

function rename() {
  title.textContent = (newName.value);
  subTitle.textContent = (newJob.value);
  popup.classList.remove('popup_opened');
}
buttonSave.addEventListener('click', rename);



let heart = document.addEventListener("click", function (id) {
  let heartId = id.target.getAttribute('id');
  let object = document.getElementById(heartId);
  object.setAttribute('src', './images/heart-black.png');

});

let buttonClose = document.querySelector('.popup__button-close');

function close() {
  popup.classList.remove('popup_opened');
}

buttonClose.addEventListener('click', close);