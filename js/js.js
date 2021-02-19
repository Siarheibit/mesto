//  let heart = document.querySelectorAll('.elements__heart-image');
// for (let i = 0, length = heart.length; i < length; i++) {

// }
// heart.addEventListener('click', black);
//  function black() {
//    heart[i].src = "./images/heart-black.png";
//   }
//  console.log(heart.length);
//  function black() {
    //    heart[3].src = "./images/heart-black.png";
//   }
// console.log(qwer.getAttribute('placeholder'))

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



