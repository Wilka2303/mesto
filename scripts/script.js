
let buttonOpener = document.querySelector('.profile__edit-button'); // Кнопка редактирования
let formSection = document.querySelector ('.form'); //Форма
let formElement = formSection.querySelector('.form__popup'); // Сам попап
let formEdit = formElement.querySelector('.form__edit');
let buttonClose = formElement.querySelector('.form__close-button');
let nameInput = formElement.querySelector ('#name'); //Имя профиля в форме
let jobInput = formElement.querySelector ('#job'); //Описание профиля  в форме
let name = document.querySelector('.profile__name');  // Имя профиля в разметке
let job = document.querySelector('.profile__describe'); // Описание профиля в разметке
let galery = document.querySelector ('.places');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

buttonOpener.addEventListener('click',function () {

  formSection.classList.add('form_opened');
  nameInput.setAttribute('value',name.textContent);
  jobInput.setAttribute('value',job.textContent);
  })
  buttonClose.addEventListener ('click', close);
  function close () {
    formSection.classList.remove('form_opened');
  }


initialCards.forEach (card=>{
  galery.insertAdjacentHTML("afterbegin", `<article class = "places__card"><img class = "places__image" src=${card.link}><div class = "places__title"><h2 class = "places__text">${card.name}</h2><button type = "button" class = places__button aria-label ="Поставить лайк"></button></div></article>`)
})
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    // Вставьте новые значения с помощью textContent
    name.textContent = this.name.value;
    job.textContent = this.job.value;
    close();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEdit.addEventListener('submit', formSubmitHandler);
