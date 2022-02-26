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

function handleFormInput(input, errorClass, submitButtonSelector, inputErrorClass) {
  if(!input.validity.valid) {
    input.classList.add(inputErrorClass);
    setPopupTextContent(errorClass, input.validationMessage);
  } else {
    input.classList.remove(inputErrorClass);
    setPopupTextContent(errorClass, '');
  }
}

function enableValidation(options) {
  const formList = document.querySelectorAll(options.formSelector);

  formList.forEach((formElement) => {
    const [ inputSelectorFirst, inputSelectorSecond ] = formElement.querySelectorAll(options.inputSelector);

    const submitButtonSelector = formElement.querySelector(options.submitButtonSelector);

    const [ errorClassFirst, errorClassSecond ] = formElement.querySelectorAll(options.errorClass);

    handleFormSubmitButton(inputSelectorFirst, inputSelectorSecond, submitButtonSelector);

    formElement.addEventListener('input', (evt) => {

      handleFormSubmitButton(inputSelectorFirst, inputSelectorSecond, submitButtonSelector);

      handleFormInputs(evt, inputSelectorFirst, inputSelectorSecond, errorClassFirst, errorClassSecond, submitButtonSelector, options.inputErrorClass);
    })

    formElement.addEventListener('submit', () => {
      handleFormSubmitButton(inputSelectorFirst, inputSelectorSecond, submitButtonSelector);
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: '.popup__submit-button_disabled',
    inputErrorClass: 'popup__text_wrong',
    errorClass: '.popup__error'
  });
})

function handleFormInputs(evt, inputFirst, inputSecond, errorFirst, errorSecond, submitButtonSelector, inputErrorClass) {
  const target = evt.target;

  if(target === inputFirst) {
    handleFormInput(target, errorFirst, submitButtonSelector, inputErrorClass)
  }
  if(target === inputSecond) {
    handleFormInput(target, errorSecond, submitButtonSelector, inputErrorClass)
  }
}

function handleFormSubmitButton(inputFirst, inputSecond, submitButton) {
  if((inputFirst.validity.valid && inputSecond.validity.valid) && (inputFirst.value !== '' && inputSecond.value !== '')) {
    submitButton.classList.remove('popup__submit-button_disabled');
    submitButton.disabled = false;
  } else {
    submitButton.classList.add('popup__submit-button_disabled');
    submitButton.disabled = true;
  }
}
