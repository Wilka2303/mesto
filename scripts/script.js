
let buttonEditOpener = document.querySelector('.profile__edit-button');
let buttonAddOpener = document.querySelector('.profile__add-button'); // Кнопка редактирования
let formSection = document.querySelector('.form'); //Форма
let formElement = formSection.querySelector('.form__popup'); // Сам попап
let formEdit = formElement.querySelector('.form__edit');
let nameInput = formElement.querySelector('#name'); //Имя профиля в форме
let jobInput = formElement.querySelector('#job'); //Описание профиля  в форме
let name = document.querySelector('.profile__name');  // Имя профиля в разметке
let job = document.querySelector('.profile__describe'); // Описание профиля в разметке
let editForm = document.querySelector('#form_edit');
let addForm = document.querySelector('#form_add');
let buttonCloseEdit = editForm.querySelector('.form__close-button');
let buttonCloseAdd = addForm.querySelector('.form__close-button');
let templ = document.querySelector('#gallery_cards').content;
const placesElement = document.querySelector('.places');
const trash = document.querySelector('#trash');
let inputCard = this.name_card.value;
let inputLink = this.link.value;

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

function popupopenner(name_popup) {
  name_popup.classList.add('form_opened');
}


function closer_popup(name_popup) {
  name_popup.classList.remove('form_opened');
}

buttonEditOpener.addEventListener('click', function () {
  popupopenner(editForm);
  nameInput.setAttribute('value', name.textContent);
  jobInput.setAttribute('value', job.textContent);
})
buttonCloseEdit.addEventListener('click', function () {
  closer_popup(editForm);
});

buttonAddOpener.addEventListener('click', function () {
  popupopenner(addForm);
})
buttonCloseAdd.addEventListener('click', function () {
  closer_popup(addForm);
});

function gallery() {
  placesElement.innerHTML = '';
  for (let i = 0; i < initialCards.length; i++) {
    //  let a = document.querySelector ('.new_one');
 //   document.getElementsByClassName("places_card").id = i;
    let data = initialCards[i]; //Объявляем массив
    const copy = templ.querySelector('.places__card').cloneNode(true); //Клонируем содержимое
    let image_places = copy.querySelector('.places__image'); //Выбираем элемент
    let text_places = copy.querySelector('.places__text'); // Выбираем элемент
    text_places.textContent = data.name; // Получем элемент из Массива c названием карточки
    image_places.src = data.link; // Получаем элемент с названием каточки
    placesElement.appendChild(copy);

  }
}

/*for (let button of document.querySelectorAll("places__button")) {
  button.addEventListener("click", function () {
    this.classList.toggle("places__button:active");
  this.parentNode.classList.toggle('places__button')});
}
gallery();*/
function deleteButtons (evt){
  
}

function inputes (inp1, inp2){
  inp1.textContent = inp2.value;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  inputes(name,this.name);
  inputes(job,this.job);
  closer_popup(editForm);
}

function Construct(names, links) {
  this.name = names;
  this.link = links;
}

function formAddHandler(evt){
  evt.preventDefault();
 // console.log({name: this.name_card.value , link: this.link.value});
  initialCards.unshift ({name: name_card.value, link: link.value});
//  console.log ({name: name_card.value, link: link.src})
  gallery();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEdit.addEventListener('submit', formSubmitHandler);
addForm.addEventListener('submit', formAddHandler);
