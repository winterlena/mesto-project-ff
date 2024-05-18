const placesList = document.querySelector('.places__list'); // контейнер для карточек

// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки
function createCard(item) {
    const cardTemplate = document.querySelector('#card-template').content;
    const itemCard = cardTemplate.querySelector('.places__item').cloneNode(true);
    itemCard.querySelector('.card__image').src = item.link;
    itemCard.querySelector('.card__title').textContent = item.name;
    itemCard.querySelector('.card__delete-button').addEventListener('click', cardDelete);
    placesList.append(itemCard);
    return itemCard;
} 

// @todo: Функция удаления карточки
function cardDelete(evt) {
    const cardDel = evt.target.closest('.card');
    cardDel.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(createCard);