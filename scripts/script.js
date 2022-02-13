
const buttonEditOpener = document.querySelector('.profile__edit-button');
const buttonAddOpener = document.querySelector('.profile__add-button');
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add'); // Кнопка добавления
const nameInput = popupEditProfile.querySelector('#name'); //Имя профиля в форме
const jobInput = popupEditProfile.querySelector('#job'); //Описание профиля  в форме
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__describe'); // Описание профиля в разметке
const imageBig = document.querySelector ('#popup_image');
const buttonCloseEdit = popupEditProfile.querySelector('.popup__close-button');
const buttonCloseAdd = popupAddCard.querySelector('.popup__close-button');
const buttonCloseImage = imageBig.querySelector('.popup__close-button');
const template = document.querySelector('#gallery_cards').content;
const placesElement = document.querySelector('.places');
const trashButton = document.querySelector('.places__trash');
const cardNameInputValue = popupAddCard.querySelector('.popup__text_type_card-name');
const cardLinkInputValue = popupAddCard.querySelector('.popup__text_type_card-link');
const image = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__image-title')

function openPopup(namePopup) {
  namePopup.classList.add('popup_opened');
}

function closePopup(namePopup) {
  namePopup.classList.remove('popup_opened');
}

buttonEditOpener.addEventListener('click', function () {
  openPopup(popupEditProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
})

buttonCloseEdit.addEventListener('click', function () {
  closePopup(popupEditProfile);
});

buttonAddOpener.addEventListener('click', function () {
  openPopup(popupAddCard);
})
buttonCloseAdd.addEventListener('click', function () {
  closePopup(popupAddCard);
});

buttonCloseImage.addEventListener('click', function(){
  closePopup(imageBig)
});

function addEventListeners(el){
  el.querySelector('.places__trash').addEventListener('click', handleCardDelete);
  el.querySelector('.places__button').addEventListener('click', handleCardLike);
  // Единственное как понимаю можно было бы вызвать функцию с использованием bind для объекта функции CreateCard, если есть какие то другие варианты буду благодарен если опишите, на текущий момент вернул все как было в версии можно лучше
  //el.querySelector('.places__image').addEventListener('click', handleopenBigImage.bind(null, objectCard));
}

function handleCardFormSubmit (evt){
  evt.preventDefault();

  const inputvalues = {
    name: cardNameInputValue.value, link: cardLinkInputValue.value
  }
  placesElement.prepend(createCard(inputvalues));
  cardNameInputValue.value = '';
  cardLinkInputValue.value = '';
  closePopup(popupAddCard);
}

function createCard(objectCard){
  const copy = template.querySelector('.places__card').cloneNode(true);
  //Клонируем содержимое
  const imagePlaces = copy.querySelector('.places__image'); //Выбираем элемент
  const textPlaces = copy.querySelector('.places__text');
  textPlaces.textContent = objectCard.name; // Получем элемент из Массива c названием карточки
  const cardLink = objectCard.link;
  const cardName = objectCard.name;
  imagePlaces.src = cardLink;
  imagePlaces.alt = cardName;
  imagePlaces.addEventListener('click', function(){

    image.src = cardLink;
    image.alt = cardName;
    imageTitle.textContent = cardName;
    openPopup(imageBig);
    })
  addEventListeners(copy);
  return copy;
}


// Фунция с использованием объекта из CreateCard, ваш комментарий увы остался не понят до конца вернулось к версии можно лучше:(
// function handleopenBigImage(objectCard) {
//   const cardLink = objectCard.link;
//   const cardName = objectCard.name;

//   const image = document.querySelector('.popup__image')
//   const imageTitle = document.querySelector('.popup__image-title')

//   image.src = cardLink;
//   imageTitle.textContent = cardName;
//   image.alt = cardName;

//   openPopup(imageBig);
// }

function renderInitialCards() {
    initialCards.forEach(initCard => {
      const newcard = createCard (initCard)
      placesElement.appendChild(newcard);
    });
}
renderInitialCards();

function handleCardSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function handleCardDelete (evt){
  evt.target.closest('.places__card').remove();
}

function handleCardLike (evt){
  evt.target.classList.toggle('places__button_active');
}

popupEditProfile.addEventListener('submit', handleCardSubmit);
popupAddCard.addEventListener('submit', handleCardFormSubmit );

