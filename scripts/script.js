
let buttonopener = document.querySelector('.profile__edit-button');
// Находим форму в DOM
let formElement = document.querySelector('.form');
let buttonclose = document.querySelector('.form__close-button');

buttonopener.onclick = function () {
formElement.classList.add('form_opened');
}
  buttonclose.onclick = function () {
    formElement.classList.remove('form_opened');
  }
// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector ('#name');// Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector ('#job');// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    let inputs = document.querySelectorAll('input');// Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей
    let profile = document.querySelector ('.profile');
    let name = profile.querySelector('.profile__name');
    let job = profile.querySelector ('.profile__describe');
    // Вставьте новые значения с помощью textContent
    name.textContent = inputs[0].value;
    job.textContent = inputs[1].value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
