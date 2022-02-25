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

function setPopupTextContent(popupSpan, message) {
  popupSpan.textContent =  message;
}

enableValidation({
  formSelector: '.popup_type_edit .popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: '.popup__submit-button_disabled',
  inputErrorClass: '.popup__text_wrong',
  errorClass: '.popup__error'
});

enableValidation({
  formSelector: '.popup_type_add .popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: '.popup__submit-button_disabled',
  inputErrorClass: '.popup__text_wrong',
  errorClass: '.popup__error'
});

function handleFormInput(input, errorClass) {
  if(!input.validity.valid) {
    input.classList.add('popup__text_wrong');
    setPopupTextContent(errorClass, input.validationMessage);
  } else {
    input.classList.remove('popup__text_wrong');
    setPopupTextContent(errorClass, '');
  }
}

function enableValidation(options) {
  const formSelector = document.querySelector(options.formSelector);

  const [ inputSelectorFirst, inputSelectorSecond ] = formSelector.querySelectorAll(options.inputSelector);

  const submitButtonSelector = formSelector.querySelector(options.submitButtonSelector);

  const [ errorClassFirst, errorClassSecond ] = formSelector.querySelectorAll(options.errorClass);

  formSelector.addEventListener('input', (evt) => {

    handleErrorMessage(inputSelectorFirst, inputSelectorSecond, submitButtonSelector);

    handleFormInputs(evt, inputSelectorFirst, inputSelectorSecond, errorClassFirst, errorClassSecond);
  })

  // inputSelectorFirst.addEventListener('input', () => handleFormInput(inputSelectorFirst, errorClassFirst));

  // inputSelectorSecond.addEventListener('input', () => handleFormInput(inputSelectorSecond, errorClassSecond));
}

function handleFormInputs(evt, inputFirst, inputSecond, errorFirst, errorSecond) {
  const target = evt.target;

  if(target === inputFirst) {
    handleFormInput(target, errorFirst)
  }
  if(target === inputSecond) {
    handleFormInput(target, errorSecond)
  }
}

function handleErrorMessage(inputFirst, inputSecond, submitButton) {
  if(inputFirst.validity.valid && inputSecond.validity.valid) {
    submitButton.classList.remove('popup__submit-button_disabled')
  } else {
    submitButton.classList.add('popup__submit-button_disabled')
  }
}
