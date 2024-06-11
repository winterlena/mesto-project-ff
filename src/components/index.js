import '../pages/index.css'; // импорт главного файла стилей 

import {initialCards} from './initial-сards.js' 
import {createCard, cardDelete, likeCard} from './card.js'
import {openModal, closeModal} from './modal.js'

const placesList = document.querySelector('.places__list'); // контейнер для карточек

const modalProfile = document.querySelector('.popup_type_edit'); // считывание модального окна Профиль
const modalNewCard = document.querySelector('.popup_type_new-card'); // считывание модального окна Новая карточка

const buttonOpenModalProfile = document.querySelector('.profile__edit-button'); // кнопка открытия модального окна Профиль
const buttonOpenModalNewCard = document.querySelector('.profile__add-button'); //кнопка открытия модального окна Новая карточка

const btnClose = document.querySelectorAll('.popup__close'); // кнопка закрытия модальных окон

const formElement = modalProfile.querySelector('.popup__form'); // Находим форму ПРОФИЛЬ в DOM
const nameInput  = formElement.querySelector('.popup__input_type_name'); // Находим поля формы в DOM => Имя
const jobInput  = formElement.querySelector('.popup__input_type_description'); // // Находим поля формы в DOM => Занятие 

const formElementCard = modalNewCard.querySelector('.popup__form');
const imageName = formElementCard.querySelector('.popup__input_type_card-name'); // Находим поля формы в DOM => Имя карточки
const urlImage = formElementCard.querySelector('.popup__input_type_url'); // Находим поля формы в DOM => Ссылка на изображение

const openModalImageBig = document.querySelector('.popup_type_image');
const popupImage = openModalImageBig.querySelector('.popup__image');
const popupCaption = openModalImageBig.querySelector('.popup__caption');

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
btnClose.forEach((item) => {
    item.addEventListener("click", () => {
      const modalElement = item.closest(".popup");
      closeModal(modalElement);
    });
});

//функция обработчик отправки формы редактирования профиля
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
    // Получите значение полей jobInput и nameInput из свойства value
    const name = nameInput.value;
    const job = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');
    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = name;
    profileDescription.textContent = job;
    closeModal(modalProfile);
}

// Изменить данные при нажатии на кнопку "Сохранить"
formElement.addEventListener('submit', handleFormSubmit);

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
    openModal(openModalImageBig);
}