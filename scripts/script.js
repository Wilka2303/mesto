
const buttonEditOpener = document.querySelector('.profile__edit-button');
const buttonAddOpener = document.querySelector('.profile__add-button');
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add'); // Кнопка добавления
<<<<<<< HEAD
const nameInput = popupEditProfile.querySelector('#popup__profile'); //Имя профиля в форме
const jobInput = popupEditProfile.querySelector('#popup__job'); //Описание профиля  в форме
=======
const nameInput = popupEditProfile.querySelector('#name-input'); //Имя профиля в форме
const jobInput = popupEditProfile.querySelector('#job-input'); //Описание профиля  в форме
>>>>>>> f0659cdae8f18068ea2b10c6b9b55706fb163146
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__describe'); // Описание профиля в разметке
const imageBig = document.querySelector ('#popup_image');
const buttonCloseEdit = popupEditProfile.querySelector('.popup__close-button');
const buttonCloseAdd = popupAddCard.querySelector('.popup__close-button');
const buttonCloseImage = imageBig.querySelector('.popup__close-button');
const template = document.querySelector('#gallery_cards').content;
const placesElement = document.querySelector('.places');
const cardNameInputValue = popupAddCard.querySelector('.popup__text_type_card-name');
const cardLinkInputValue = popupAddCard.querySelector('.popup__text_type_card-link');
const image = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__image-title')

function setProfileFields() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

document.addEventListener('DOMContentLoaded', () => {
  renderInitialCards();
  setProfileFields();
})

function handleEscapeClick(evt) {
  if(evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened)
  }
}

function handlePopupOuterClick(evt) {
  const target = evt.target;

  if(target.classList.contains('popup')) {
    closePopup(target);
  }
}

function openPopup(namePopup) {
  namePopup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscapeClick);
  document.addEventListener('click', handlePopupOuterClick)
}

function closePopup(namePopup) {
  namePopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscapeClick);
  document.removeEventListener('click', handlePopupOuterClick);
}

buttonEditOpener.addEventListener('click', function () {
  openPopup(popupEditProfile);
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

function addEventListeners(el, objectCard){
  el.querySelector('.places__trash').addEventListener('click', handleCardDelete);
  el.querySelector('.places__button').addEventListener('click', handleCardLike);
  el.querySelector('.places__image').addEventListener('click', () => handleOpenBigImage(objectCard));
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const submitButton = evt.submitter;

  const inputvalues = {
    name: cardNameInputValue.value, link: cardLinkInputValue.value
  }
  placesElement.prepend(createCard(inputvalues));
  cardNameInputValue.value = '';
  cardLinkInputValue.value = '';

  submitButton.classList.add('popup__submit-button_disabled');
  submitButton.disabled = true;

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

  addEventListeners(copy, objectCard);

  return copy;
}


// Фунция с использованием объекта из CreateCard
function handleOpenBigImage(objectCard) {
  if (typeof objectCard !== 'undefined'){
  const cardLink = objectCard.link;
  const cardName = objectCard.name;
  image.src = cardLink;
  imageTitle.textContent = cardName;
  image.alt = cardName;

  openPopup(imageBig);
}
}

function renderInitialCards() {
    initialCards.forEach(initCard => {
      const newcard = createCard (initCard)
      placesElement.appendChild(newcard);
    });
}


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

<<<<<<< HEAD
=======

>>>>>>> f0659cdae8f18068ea2b10c6b9b55706fb163146
// Add to git


