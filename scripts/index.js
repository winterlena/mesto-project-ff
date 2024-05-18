const placesList = document.querySelector('.places__list'); // контейнер для карточек

// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки
function createCard({name, link}, cardDelete) {
    const cardTemplate = document.querySelector('#card-template').content;
    const itemCard = cardTemplate.querySelector('.places__item').cloneNode(true);
    itemCard.querySelector('.card__image').src = link;
    itemCard.querySelector('.card__title').textContent = name;
    itemCard.querySelector('.card__title').alt = name;
    itemCard.querySelector('.card__delete-button').addEventListener('click', cardDelete);
    return itemCard;
} 

// @todo: Функция удаления карточки
function cardDelete(evt) {
    const cardDel = evt.target.closest('.card');
    cardDel.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((card) => {
    const cardAdd = createCard(card, cardDelete);
    placesList.append(cardAdd);
});