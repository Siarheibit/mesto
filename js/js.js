let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let newName = document.querySelector(".popup__text_name_value");
let newJob = document.querySelector(".popup__text_job_value");
let title = document.querySelector(".profile__title");
let subTitle = document.querySelector(".profile__subtitle");
let buttonClose = document.querySelector(".popup__button-close");
let popup__form = document.querySelector(".popup__form");

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
