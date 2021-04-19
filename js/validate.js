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