
const buttonEditOpener = document.querySelector('.profile__edit-button');
const buttonAddOpener = document.querySelector('.profile__add-button'); // Кнопка редактирования
const popupSection = document.querySelector('.popup'); //Форма
const popupElement = popupSection.querySelector('.popup__content'); // Сам попап
const nameInput = popupElement.querySelector('#name'); //Имя профиля в форме
const jobInput = popupElement.querySelector('#job'); //Описание профиля  в форме
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__describe'); // Описание профиля в разметке
const editForm = document.querySelector('.popup_type_edit');
const addForm = document.querySelector('.popup_type_add');
const imageBig = document.querySelector ('#popup_image');
const buttonCloseEdit = editForm.querySelector('.popup__close-button');
const buttonCloseAdd = addForm.querySelector('.popup__close-button');
const buttonCloseImage = imageBig.querySelector('.popup__close-button');
const template = document.querySelector('#gallery_cards').content;
const placesElement = document.querySelector('.places');
const trashButton = document.querySelector('.places__trash');


function openPopup(namePopup) {
  namePopup.classList.add('popup_opened');
}


function closePopup(namePopup) {
  namePopup.classList.remove('popup_opened');
}

buttonEditOpener.addEventListener('click', function () {
  openPopup(editForm);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
})
buttonCloseEdit.addEventListener('click', function () {
  closePopup(editForm);
});

buttonAddOpener.addEventListener('click', function () {
  openPopup(addForm);
})
buttonCloseAdd.addEventListener('click', function () {
  closePopup(addForm);
});

buttonCloseImage.addEventListener('click', function(){
  closePopup(imageBig)
});

function eventListener(el){
  el.querySelector('.places__trash').addEventListener('click',HandlecardDelete);
  el.querySelector('.places__button').addEventListener('click',HandlecardLike);
}
function HandlecardAdd(evt){
  evt.preventDefault();
  const obj = {
    name: name_card.value, link: link.value
  }
  const card= placesElement;
  const element = createCard(obj);
  card.prepend(element);
  closePopup(addForm);
}

function createCard(objectCards){
  //Клонируем содержимое
  const copy = template.querySelector('.places__card').cloneNode(true);
  const image_places = copy.querySelector('.places__image'); //Выбираем элемент
  const text_places = copy.querySelector('.places__text');
  text_places.textContent = objectCards.name; // Получем элемент из Массива c названием карточки
  const cardLink = objectCards.link;
  const cardName = objectCards.name;
  image_places.src = cardLink;
  image_places.alt = cardName;

  image_places.addEventListener('click', function(){
          const image = document.querySelector('.popup__image')
          image.src = cardLink;
          const imageTitle = document.querySelector('.popup__image-title')
          imageTitle.textContent = cardName;
          openPopup(imageBig);
          }
  )

  eventListener(copy);
  placesElement.appendChild(copy);
  return copy;
}


function renderInitialCards() {
    initialCards.forEach(createCard);

}
renderInitialCards();

function HandlecardSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(editForm);
}

function Construct(names, links) {
  this.name = names;
  this.link = links;
}



function HandlecardDelete (evt){
  evt.target.closest('.places__card').remove();
}

function HandlecardLike (evt){

  evt.target.classList.toggle('places__button_active');

}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

editForm.addEventListener('submit', HandlecardSubmit);
addForm.addEventListener('submit', HandlecardAdd);

