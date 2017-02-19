(function() {
  'use strict';

  let btnAuth = document.querySelector('.btn--authorize');
  let cardWraper = document.querySelector('.card__wrap');
  let btnMain = document.querySelector('.btn--main');
  
  btnAuth.addEventListener('click', cardFlipped);
  btnMain.addEventListener('click', cardReturnFlipped);

  function cardFlipped() {
    cardWraper.style.transform='rotateY(180deg)';
  }
  function cardReturnFlipped() {
    cardWraper.style.transform='rotateY(0deg)'
  }
  
  
})();
(function(window, document) {
  'use strict';
  let file = 'assets/img/sprite.svg', // путь к файлу спрайта на сервере
    revision = 1;            // версия спрайта
  if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;
  let isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
    request,
    data,
    insertIT = function() {
      document.body.insertAdjacentHTML('afterbegin', data);
    },
    insert = function() {
      if (document.body) insertIT();
      else document.addEventListener('DOMContentLoaded', insertIT);
    };
  if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
    data = localStorage.getItem('inlineSVGdata');
    if (data) {
      insert();
      return true;
    }
  }
  try {
    request = new XMLHttpRequest();
    request.open('GET', file, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        data = request.responseText;
        insert();
        if (isLocalStorage) {
          localStorage.setItem('inlineSVGdata', data);
          localStorage.setItem('inlineSVGrev', revision);
        }
      }
    }
    request.send();
  } catch (e) {}
}(window, document));