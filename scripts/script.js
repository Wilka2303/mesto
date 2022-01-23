
let buttonOpener = document.querySelector('.profile__edit-button');
// Находим форму в DOM
let formSection = document.querySelector ('.form');
let formElement = formSection.querySelector('.form__container');
let buttonClose = formElement.querySelector('.form__close-button');
let buttonSave = formElement.querySelector ('.form__submit-button');
buttonOpener.addEventListener('click',function () {
  formSection.classList.add('form_opened');
  })
  buttonClose.addEventListener ('click', close);
  function close () {
    formSection.classList.remove('form_opened');
  }
// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
// let nameInput = formElement.querySelector ('#name');// Воспользуйтесь инструментом .querySelector()
// let jobInput = formElement.querySelector ('#job');// Воспользуйтесь инструментом .querySelector()

//let inputs = document.querySelectorAll('input');// Получите значение полей jobInput и nameInput из свойства value

// Выберите элементы, куда должны быть вставлены значения полей
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__describe');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    // Вставьте новые значения с помощью textContent
    console.log(this.name);
    name.textContent = this.name.value;
    job.textContent = this.job.value;
    close();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
