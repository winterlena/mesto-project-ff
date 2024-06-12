import '../pages/index.css'; // импорт главного файла стилей 

import {initialCards} from './initial-сards.js' 
import {createCard, cardDelete, likeCard} from './card.js'
import {openModal, closeModal} from './modal.js'

const placesList = document.querySelector('.places__list'); // контейнер для карточек

const modalProfile = document.querySelector('.popup_type_edit'); // считывание модального окна Профиль
const modalNewCard = document.querySelector('.popup_type_new-card'); // считывание модального окна Новая карточка

const buttonOpenModalProfile = document.querySelector('.profile__edit-button'); // кнопка открытия модального окна Профиль
const buttonOpenModalNewCard = document.querySelector('.profile__add-button'); //кнопка открытия модального окна Новая карточка

const buttonClosePopup = document.querySelectorAll('.popup__close'); // кнопка закрытия модальных окон

const formElementProfile = modalProfile.querySelector('.popup__form'); // Находим форму ПРОФИЛЬ в DOM
const nameInput  = formElementProfile.querySelector('.popup__input_type_name'); // Находим поля формы в DOM => Имя
const jobInput  = formElementProfile.querySelector('.popup__input_type_description'); // // Находим поля формы в DOM => Занятие 

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const formElementCard = modalNewCard.querySelector('.popup__form');
const imageName = formElementCard.querySelector('.popup__input_type_card-name'); // Находим поля формы в DOM => Имя карточки
const urlImage = formElementCard.querySelector('.popup__input_type_url'); // Находим поля формы в DOM => Ссылка на изображение

const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = popupTypeImage.querySelector('.popup__image');
const popupCaption = popupTypeImage.querySelector('.popup__caption');

// @todo: Вывести карточки на страницу
initialCards.forEach((card) => {
    const cardAdd = createCard(card, cardDelete, likeCard, showImage);
    placesList.append(cardAdd);
});

//обработчики события открытия попапов
buttonOpenModalProfile.addEventListener('click', () => {
    openModal(modalProfile);
});
buttonOpenModalNewCard.addEventListener('click', () => {
    openModal(modalNewCard);
});

// обработчик события закрытия попапов
buttonClosePopup.forEach((item) => {
    item.addEventListener("click", () => {
      const modalElement = item.closest(".popup");
      closeModal(modalElement);
    });
});

//функция обработчик отправки формы редактирования профиля
function handleFormSubmitProfile(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
    const name = nameInput.value;
    const job = jobInput.value;
    profileTitle.textContent = name;
    profileDescription.textContent = job;
    closeModal(modalProfile);
}

// Изменить данные при нажатии на кнопку "Сохранить"
formElementProfile.addEventListener('submit', handleFormSubmitProfile);

//функция обработчик отправки формы добавление карточки
function handleFormSubmitCard(evt) {
    evt.preventDefault();
    const newCard = {
        name: imageName.value,
        link: urlImage.value
    }
    placesList.prepend(createCard(newCard, cardDelete, likeCard, showImage));
    formElementCard.reset();
    closeModal(modalNewCard);
}

// Добавить карточку при нажатии на кнопку "Сохранить"
formElementCard.addEventListener('submit', handleFormSubmitCard);

function showImage(link, name) {
    popupImage.src = link;
    popupImage.alt = name;
    popupCaption.textContent = name;
    openModal(popupTypeImage);
}