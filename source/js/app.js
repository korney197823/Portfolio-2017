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

var map;

var style = [
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#444444"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
      {
        "color": "#f2f2f2"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "all",
    "stylers": [
      {
        "saturation": -100
      },
      {
        "lightness": 45
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "all",
    "stylers": [
      {
        "color": "#61dac9"
      },
      {
        "visibility": "on"
      }
    ]
  }
];





function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 44.601255, lng: 38.041145},
    zoom: 18,
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    scrollwheel: false,
    styles: style
  });
}
// (function(window, document) {
//   'use strict';
//   let file = 'assets/img/sprite.svg', // путь к файлу спрайта на сервере
//     revision = 1;            // версия спрайта
//   if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;
//   let isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
//     request,
//     data,
//     insertIT = function() {
//       document.body.insertAdjacentHTML('afterbegin', data);
//     },
//     insert = function() {
//       if (document.body) insertIT();
//       else document.addEventListener('DOMContentLoaded', insertIT);
//     };
//   if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
//     data = localStorage.getItem('inlineSVGdata');
//     if (data) {
//       insert();
//       return true;
//     }
//   }
//   try {
//     request = new XMLHttpRequest();
//     request.open('GET', file, true);
//     request.onload = function() {
//       if (request.status >= 200 && request.status < 400) {
//         data = request.responseText;
//         insert();
//         if (isLocalStorage) {
//           localStorage.setItem('inlineSVGdata', data);
//           localStorage.setItem('inlineSVGrev', revision);
//         }
//       }
//     }
//     request.send();
//   } catch (e) {}
// }(window, document));