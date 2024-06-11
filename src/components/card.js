// @todo: Функция создания карточки
export function createCard({name, link}, cardDelete, likeCard, showImage) {
    const cardTemplate = document.querySelector('#card-template').content;
    const itemCard = cardTemplate.querySelector('.places__item').cloneNode(true);
    itemCard.querySelector('.card__image').src = link;
    itemCard.querySelector('.card__title').textContent = name;
    itemCard.querySelector('.card__image').alt = name;
    itemCard.querySelector('.card__delete-button').addEventListener('click', cardDelete);
    itemCard.querySelector('.card__like-button').addEventListener('click', likeCard);
    itemCard.querySelector('.card__image').addEventListener('click', () => {showImage(link, name);});
    return itemCard;
}

// @todo: Функция удаления карточки
export function cardDelete(evt) {
    const cardDel = evt.target.closest('.card');
    cardDel.remove();
}

//функция лайка карточки
export function likeCard(evt) {
    evt.target.classList.toggle('card__like-button_is-active');
}