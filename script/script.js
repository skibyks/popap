const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			// if (!e.target.closest('.popup__content')) {
			// 	popupClose(e.target.closest('.popup'));
			// }
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
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
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
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
		const popupActive = document.querySelector('.popup.open');
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
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();




new Swiper('.swiper1',{
	navigation: {
		nextEl: '.slider_next1',
		prevEl: '.slider_prev1',
	  },
	  pagination: {
        el: '.nav-slider_item',
		dynamicBullets: false,
		clickable:true,
	  },
	  simulateTouch: false,
	  slidesPerView:1.8,
	  watchhOwerflow:true,
	  spaceBetween:100,
	  loop:true,
	  mousewheel: {
		invert: false,
	  },
});

new Swiper('.swiper2',{
	navigation: {
		nextEl: '.slider_next2',
		prevEl: '.slider_prev2',
	  },
	  pagination: {
        el: '.nav-slider_item2',
		dynamicBullets: false,
		clickable:true,
	  },
	  simulateTouch: false,
	  slidesPerView:1.8,
	  watchhOwerflow:true,
	  spaceBetween:100,
	  loop:false,
	  mousewheel: {
		invert: false,
	  },
	  direction: 'vertical',
});


 let cauter = document.querySelectorAll('.popup__btn');
 console.log(cauter);

 cauter.forEach(btn => {
	 btn.addEventListener('click', function() {
		 const count = this.dataset.caunt;
		 const value = this.parentElement.querySelector('.point');
		 const carrentValue = +value.innerHTML;
		 let newValue;

		 if(count === 'plus'){
			newValue = carrentValue + 1;
		 } else {
			newValue = carrentValue - 1 > 0 ?  carrentValue - 1 : 0;
		 }
		 value.innerHTML= newValue

		 const suma = document.querySelector('.popap__sum');
		 let sum = +suma.innerHTML;
		 sum.innerHTML = newValue * 2300;
		 console.log();
	 })
 })
