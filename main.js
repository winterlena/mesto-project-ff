(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-17",headers:{authorization:"b8bb8fb9-a7a9-496b-835e-6cdad8bb4b15","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function n(){return fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){return t(e)}))}function r(){return fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return t(e)}))}function o(e,t,n,r,o){var c=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),u=c.querySelector(".card__image"),a=c.querySelector(".card__title"),i=c.querySelector(".card__like-counter");return u.src=e.link,u.alt=e.name,a.textContent=e.name,e.owner._id!=t?c.querySelector(".card__delete-button").remove():c.querySelector(".card__delete-button").addEventListener("click",(function(t){return n(t,e)})),c.querySelector(".card__like-button").addEventListener("click",(function(t){return r(t,e)})),e.likes.some((function(e){return e._id===t}))&&c.querySelector(".card__like-button").classList.add("card__like-button_is-active"),i.textContent=e.likes.length,u.addEventListener("click",(function(){o(e.link,e.name)})),c}function c(n,r){var o,c=n.target.closest(".card");(o=r._id,fetch("".concat(e.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))).then((function(){c.remove()})).catch((function(e){console.log("Ошибка, не выполенено: ".concat(e.status))}))}function u(n,r){var o;n.target.classList.contains("card__like-button_is-active")?(o=r._id,fetch("".concat(e.baseUrl,"/cards/likes/").concat(o),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))).then((function(e){n.target.classList.remove("card__like-button_is-active"),n.target.closest(".card").querySelector(".card__like-counter").textContent=e.likes.length})).catch((function(e){return console.log("Ошибка.....: ".concat(e))})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then((function(e){return t(e)}))}(r._id).then((function(e){n.target.classList.add("card__like-button_is-active"),n.target.closest(".card").querySelector(".card__like-counter").textContent=e.likes.length})).catch((function(e){return console.log("Ошибка.....: ".concat(e))}))}function a(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",l),document.addEventListener("mousedown",s)}function i(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",l),document.removeEventListener("mousedown",s)}function l(e){"Escape"===e.key&&i(document.querySelector(".popup_is-opened"))}function s(e){e.target.classList.contains("popup")&&i(document.querySelector(".popup_is-opened"))}function d(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}function p(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))}function f(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){d(e,n,t)})),p(n,r,t)}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var m=document.querySelector(".places__list"),y=document.querySelector(".popup_type_edit"),h=document.querySelector(".popup_type_new-card"),v=document.querySelector(".popup_type_avatar"),b=document.querySelector(".profile__edit-button"),S=document.querySelector(".profile__add-button"),q=document.querySelector(".profile__image"),g=document.querySelectorAll(".popup__close"),C=y.querySelector(".popup__form"),k=C.querySelector(".popup__input_type_name"),E=C.querySelector(".popup__input_type_description"),L=document.querySelector(".profile__title"),x=document.querySelector(".profile__description"),A=h.querySelector(".popup__form"),w=A.querySelector(".popup__input_type_card-name"),U=A.querySelector(".popup__input_type_url"),j=document.querySelector(".popup_type_image"),T=j.querySelector(".popup__image"),O=j.querySelector(".popup__caption"),P=v.querySelector(".popup__form"),B=P.querySelector(".popup__input_type_url_img"),D=document.querySelector(".profile__image"),I=(document.querySelector(".popup__button"),null),M={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function N(e,t){T.src=e,T.alt=t,O.textContent=t,a(j)}b.addEventListener("click",(function(){a(y),f(C,M),k.value=L.textContent,E.value=x.textContent})),S.addEventListener("click",(function(){a(h),f(A,M)})),q.addEventListener("click",(function(){a(v),f(P,M)})),g.forEach((function(e){e.addEventListener("click",(function(){i(e.closest(".popup"))}))})),P.addEventListener("submit",(function(n){var r;n.preventDefault(),n.submitter.textContent="Сохранение...",(r=B.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then((function(e){return t(e)}))).then((function(e){D.style.backgroundImage="url(".concat(e.avatar,")"),i(v)})).catch((function(e){console.error(e)})).finally((function(){n.submitter.textContent="Сохранить"})),P.reset()})),C.addEventListener("submit",(function(n){var r;n.preventDefault(),n.submitter.textContent="Сохранение...",(r={name:k.value,about:E.value},fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r.name,about:r.about})}).then((function(e){return t(e)}))).then((function(){L.textContent=k.value,x.textContent=E.value,C.reset(),i(y)})).catch((function(e){console.error(e)})).finally((function(){n.submitter.textContent="Сохранить"}))})),A.addEventListener("submit",(function(n){var r;n.preventDefault(),n.submitter.textContent="Создать",(r={name:w.value,link:U.value},fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:r.name,link:r.link})}).then((function(e){return t(e)}))).then((function(e){m.prepend(o(e,e.owner._id,c,u,N)),i(h)})).catch((function(e){console.error(e)})).finally((function(){n.submitter.textContent="Сохранить"})),A.reset()})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?d(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),p(n,r,t)}))}))}(t,e)}))}(M),n().then((function(e){console.log(e)})).catch((function(e){console.log(e)})),r().then((function(e){console.log(e)})).catch((function(e){console.log(e)})),Promise.all([n(),r()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,a=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(a.push(r.value),a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],i=r[1];I=a._id,L.textContent=a.name,x.textContent=a.about,D.style.backgroundImage="url(".concat(a.avatar,")"),i.forEach((function(e){var t=o(e,I,c,u,N);m.append(t)}))})).catch((function(e){return Promise.reject("Ошибка: ".concat(e.status))}))})();