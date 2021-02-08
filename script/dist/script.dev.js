"use strict";

var popupLinks = document.querySelectorAll('.popup-link');
var body = document.querySelector('body');
var lockPadding = document.querySelectorAll(".lock-padding");
var unlock = true;
var timeout = 800;

if (popupLinks.length > 0) {
  var _loop = function _loop(index) {
    var popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      var popupName = popupLink.getAttribute('href').replace('#', '');
      var curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  };

  for (var index = 0; index < popupLinks.length; index++) {
    _loop(index);
  }
}

var popupCloseIcon = document.querySelectorAll('.close-popup');

if (popupCloseIcon.length > 0) {
  var _loop2 = function _loop2(_index) {
    var el = popupCloseIcon[_index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  };

  for (var _index = 0; _index < popupCloseIcon.length; _index++) {
    _loop2(_index);
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    var popupActive = document.querySelector('.popup.open');

    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }

    curentPopup.classList.add('open');
    curentPopup.addEventListener("click", function (e) {// if (!e.target.closest('.popup__content')) {
      // 	popupClose(e.target.closest('.popup'));
      // }
    });
  }
}

function popupClose(popupActive) {
  var doUnlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (unlock) {
    popupActive.classList.remove('open');

    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function bodyLock() {
  var lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

  if (lockPadding.length > 0) {
    for (var _index2 = 0; _index2 < lockPadding.length; _index2++) {
      var el = lockPadding[_index2];
      el.style.paddingRight = lockPaddingValue;
    }
  }

  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (var _index3 = 0; _index3 < lockPadding.length; _index3++) {
        var el = lockPadding[_index3];
        el.style.paddingRight = '0px';
      }
    }

    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    var popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});

(function () {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }

      return null;
    };
  }
})();

(function () {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})();

new Swiper('.swiper1', {
  navigation: {
    nextEl: '.slider_next1',
    prevEl: '.slider_prev1'
  },
  pagination: {
    el: '.nav-slider_item',
    dynamicBullets: false,
    clickable: true
  },
  simulateTouch: false,
  slidesPerView: 1.8,
  watchhOwerflow: true,
  spaceBetween: 100,
  loop: true,
  mousewheel: {
    invert: false
  }
});
new Swiper('.swiper2', {
  navigation: {
    nextEl: '.slider_next2',
    prevEl: '.slider_prev2'
  },
  pagination: {
    el: '.nav-slider_item2',
    dynamicBullets: false,
    clickable: true
  },
  simulateTouch: false,
  slidesPerView: 1.8,
  watchhOwerflow: true,
  spaceBetween: 100,
  loop: false,
  mousewheel: {
    invert: false
  },
  direction: 'vertical'
});
var cauter = document.querySelectorAll('.popup__btn');
console.log(cauter);
cauter.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var count = this.dataset.caunt;
    var value = this.parentElement.querySelector('.point');
    var carrentValue = +value.innerHTML;
    var newValue;

    if (count === 'plus') {
      newValue = carrentValue + 1;
    } else {
      newValue = carrentValue - 1 > 0 ? carrentValue - 1 : 0;
    }

    value.innerHTML = newValue;
    var suma = document.querySelector('.popap__sum');
    var sum = +suma.innerHTML;
    sum.innerHTML = newValue * 2300;
    console.log();
  });
});