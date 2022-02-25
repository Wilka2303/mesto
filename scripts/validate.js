const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const showInputError = (formElement, inputElement, errorMessage) => {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector();
  // Остальной код такой же
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  // Находим элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // Остальной код такой же
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};


// Add to git

let popupForms = document.querySelectorAll('.popup__form');

popupForms.forEach((form) => {
  let popupInputs = form.querySelectorAll('.popup__input');
  let popupButton = form.querySelector('.popup__submit-button');

  handlePopupInputs(popupInputs, popupButton);
})

function handlePopupInputs(popupInputs, popupButton) {
  popupInputs.forEach(popupInput => handlePopupInput(popupInput, popupButton));
}

function validatePopupInput() {

}

function handlePopupInput(popupInput, popupButton) {
  let input = popupInput.querySelector('.popup__text');
  let popupError = popupInput.querySelector('.popup__error');


  input.addEventListener('input', function() {
    if(!this.validity.isValid) {
      this.classList.add('popup__text_wrong');
      setPopupTextContent(popupError, this.validationMessage);
      popupButton.disabled = true;
    } else {
      this.classList.remove('popup__text_wrong');
      setPopupTextContent(popupError, '');
      popupButton.disabled = false;
    }
  })
}

function setPopupTextContent(popupSpan, message) {
  popupSpan.textContent =  message;
}
