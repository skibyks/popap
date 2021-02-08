"use strict";

$(document).ready(function () {
  $('.popup-link').magnificPopup({});
});
var nySwiper1 = new Swiper('.swiper1', {
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
  },
  observer: true,
  observeParents: true,
  observeSlideChildren: true
});
var mySwiper2 = new Swiper('.swiper2', {
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
  direction: 'vertical',
  observer: true,
  observeParents: true,
  observeSlideChildren: true
});
var cauter = document.querySelectorAll('.popup__btn');
var heesh = document.querySelectorAll('.point');
var sumPoinst;
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
    sumPoinst = arrayPoints(heesh);
    var suma = document.querySelector('.popap__sum');
    suma.innerHTML = sumPoinst;
  });
});

function arrayPoints(elem) {
  var g = [];

  for (var i = 0; i < elem.length; i++) {
    var poinst = +elem[i].innerHTML * 2300;
    g.push(poinst);
  }

  return arraySum(g);
}

function arraySum(array) {
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
} // calendar 


var date = new Date();
var dayPlay = [];

var calendarInit = function calendarInit() {
  date.setDate(1);
  var weecDays = document.querySelector('.caledar__days');
  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  var prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  var ferstDayIndex = date.getDay();
  var LastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  var nextDay = 7 - LastDayIndex;
  var month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  document.querySelector('.caledar__manth h1').innerHTML = "".concat(month[date.getMonth()], "  ").concat(date.getFullYear());
  var days = "";

  for (var x = ferstDayIndex; x > 1; x--) {
    days += "<div class='prev-data'>".concat(prevLastDay - x + 1, "</div>");
  }

  for (var i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      days += "<div class='all today'>".concat(i, "</div>");
    } else {
      days += "<div class='all'>".concat(i, "</div>");
    }
  }

  for (var j = 1; j <= nextDay; j++) {
    days += "<div class='next-day'>".concat(j, "</div>");
    weecDays.innerHTML = days;
  }

  var actives = document.querySelectorAll('.all');

  var _loop = function _loop(h) {
    actives[h].style.cursor = 'pointer';
    actives[h].addEventListener('click', function () {
      // let f = document.querySelectorAll('.active')
      // console.log(f);
      // if(f.length === 0){
      //     actives[h].classList.add('active');
      // } else {
      //     actives[h].classList.remove('active');
      // }
      actives[h].classList.toggle('active');

      for (var g = 0; g < document.querySelectorAll('.active').length; g++) {
        dayPlay.push(document.querySelectorAll('.active')[g]);
      } //    console.log(dayPlay);

    });
  };

  for (var h = 0; h < actives.length; h++) {
    _loop(h);
  }
};

document.querySelector('.caledar__nav_prev').addEventListener('click', function () {
  date.setMonth(date.getMonth() - 1);
  calendarInit();
});
document.querySelector('.caledar__nav_next').addEventListener('click', function () {
  date.setMonth(date.getMonth() + 1);
  calendarInit();
});
calendarInit(); // popup__time

document.querySelectorAll('.popup__time label').forEach(function (item) {
  item.addEventListener('click', function () {
    item.parentElement.querySelectorAll('input');

    for (var i = 0; i < item.parentElement.querySelectorAll('input').length; i++) {
      if (item.parentElement.querySelectorAll('input')[i].checked) {
        item.parentElement.querySelectorAll('input')[i].nextSibling.style.backgroundColor = 'black';
        item.parentElement.querySelectorAll('input')[i].nextSibling.style.color = 'white';
      } else {
        item.parentElement.querySelectorAll('input')[i].nextSibling.style.backgroundColor = 'white';
        item.parentElement.querySelectorAll('input')[i].nextSibling.style.color = 'black';
      }
    }
  }); // for( let k = 0; k < item.parentElement.querySelectorAll('input').length; k++ ){
  // 	let u =item.parentElement.querySelectorAll('input')[k];
  // 	console.log(u);
  // //  item.parentElement.querySelectorAll('input')[k].onchange = () => {
  // // 	 console.log(this.value);
  // //  }
  // }
  // 	console.log(this.parentElement.querySelector('input'));
  // 	// if(this.parentNode.)
  // 	// item.classList.toggle('active_time');
});