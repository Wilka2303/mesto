
const buttonEditOpener = document.querySelector('.profile__edit-button');
const buttonAddOpener = document.querySelector('.profile__add-button'); // Кнопка редактирования
const formSection = document.querySelector('.form'); //Форма
const formElement = formSection.querySelector('.form__popup'); // Сам попап
const formEdit = formElement.querySelector('.form__edit');
let nameInput = formElement.querySelector('#name'); //Имя профиля в форме
let jobInput = formElement.querySelector('#job'); //Описание профиля  в форме
const name = document.querySelector('.profile__name');  // Имя профиля в разметке
const job = document.querySelector('.profile__describe'); // Описание профиля в разметке
const editForm = document.querySelector('#form_edit');
const addForm = document.querySelector('#form_add');
const imageBig = document.querySelector ('#form_image');
const buttonCloseEdit = editForm.querySelector('.form__close-button');
const buttonCloseAdd = addForm.querySelector('.form__close-button');
const buttonCloseImage = imageBig.querySelector('.form__close-button');
let templ = document.querySelector('#gallery_cards').content;
let placesElement = document.querySelector('.places');

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

function openPopup(name_popup) {
  name_popup.classList.add('form_opened');
}


function closePopup(name_popup) {
  name_popup.classList.remove('form_opened');
}

buttonEditOpener.addEventListener('click', function () {
  openPopup(editForm);
  nameInput.setAttribute('value', name.textContent);
  jobInput.setAttribute('value', job.textContent);
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




function gallery() {
  placesElement.innerHTML = '';
  for (let i = 0; i < initialCards.length; i++) {
    let data = initialCards[i]; //Объявляем массив
    const copy = templ.querySelector('.places__card').cloneNode(true); //Клонируем содержимое
    let image_places = copy.querySelector('.places__image'); //Выбираем элемент
    let text_places = copy.querySelector('.places__text'); // Выбираем элемент
    text_places.textContent = data.name; // Получем элемент из Массива c названием карточки
    image_places.src = data.link;
    image_places.alt = data.name;// Получаем элемент с названием каточки
    placesElement.appendChild(copy);
    const trashButton = copy.querySelector('.places__trash');
    trashButton.addEventListener('click', function(){
      initialCards.splice(data, 1);
      console.log(placesElement)
      placesElement.removeChild(copy);
      console.log(initialCards)

    });
    const like = copy.querySelector('.places__button');
    like.addEventListener('click', function() {
      like.classList.toggle('places__button_active');
    })
      image_places.addEventListener('click', function(){
      let image = document.querySelector('.form__image')
      image.src = data.link;
      let imageTitle = document.querySelector('.form__image-title')
      imageTitle.textContent = data.name;
      openPopup(imageBig);
      }
    );
  }
}

gallery();

function inputes (inp1, inp2){
  inp1.textContent = inp2.value;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  inputes(name,this.name);
  inputes(job,this.job);
  closePopup(editForm);
}

function Construct(names, links) {
  this.name = names;
  this.link = links;
}

function formAddHandler(evt){
  evt.preventDefault();
  initialCards.unshift ({name: name_card.value, link: link.value});
  console.log(initialCards);
  gallery();
  closePopup(addForm);
}


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEdit.addEventListener('submit', formSubmitHandler);
addForm.addEventListener('submit', formAddHandler);
