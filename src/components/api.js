// Конфиг с токеном и названием группы
const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-17',
    headers: {
        authorization: 'b8bb8fb9-a7a9-496b-835e-6cdad8bb4b15',
        'Content-Type': 'application/json'
    }
}

// Запрос проверки результата ответа
function handleResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

// Запрос загрузки информации о пользователе с сервера
export function getProfileInfo() {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers})
        .then(res => handleResponse(res))
} 

// Запрос карточек с сервера
export function getInitialCards() {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers})
        .then(res => handleResponse(res))
} 

// Запрос обновления информации о пользователе
export function updateProfileInfo(profile) {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: profile.name,
            about: profile.about
        }),
    })
    .then(res => handleResponse(res))
}

// Запрос добавления новой карточки
export function addCard(card) {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: card.name,
            link: card.link
        }),
    })
    .then(res => handleResponse(res))
}

// Запрос удаления карточки, добавленной владельцем сайта
export function deleteMyCard(cardId) {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers})
        .then(res => handleResponse(res))
}

// Запрос добавления лайка
export function addLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: config.headers})
        .then(res => handleResponse(res))
}

// Запрос снятия лайка
export function deleteLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers})
        .then(res => handleResponse(res))
}

// Запрос на изменение аватарки
export function newAvatar(link) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: link,
        })
    })
        .then(res => handleResponse(res))
}