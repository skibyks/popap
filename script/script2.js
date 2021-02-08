$(document).ready(function() {
	$('.popup-link').magnificPopup({});
  });

var nySwiper1 = new Swiper('.swiper1',{
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
	  observer:true,
	  observeParents:true,
	  observeSlideChildren:true,
});
var mySwiper2 = new Swiper('.swiper2',{
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
	  observer:true,
	  observeParents:true,
	  observeSlideChildren:true,
});	
 

 let cauter = document.querySelectorAll('.popup__btn');
 const heesh = document.querySelectorAll('.point');
 var sumPoinst;


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
		 sumPoinst = arrayPoints(heesh) 

		 const suma = document.querySelector('.popap__sum');
		
		 suma.innerHTML = sumPoinst;
	 })
 })

 function arrayPoints(elem){
	let g= [];
	for( let i = 0 ; i < elem.length; i++){
	let poinst = +elem[i].innerHTML * 2300
	g.push(poinst);
	}
	 return arraySum(g);
	}

function arraySum(array){
var sum = 0	;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
return sum
}


// calendar 
const date = new Date();

var dayPlay = [];

const calendarInit = () => {



date.setDate(1);
const weecDays = document.querySelector('.caledar__days');
const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();


const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();

const ferstDayIndex = date.getDay();
const LastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();

const nextDay = 7 - LastDayIndex;


const month =[
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];


document.querySelector('.caledar__manth h1').innerHTML =`${month[date.getMonth()]}  ${date.getFullYear()}`;


let days = "";

for ( let x = ferstDayIndex ; x > 1; x--){
    days += `<div class='prev-data'>${prevLastDay-x+1}</div>`   
}

 for ( let i = 1; i <= lastDay; i++ ){
     if( i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
        days += `<div class='all today'>${i}</div>`
     } else {
         days += `<div class='all'>${i}</div>`
     }
    
 }

 for ( let j = 1 ; j <= nextDay; j++){
    days += `<div class='next-day'>${j}</div>`
    weecDays.innerHTML = days
}  

let actives = document.querySelectorAll('.all');
for( let h = 0; h <actives.length; h++){
    actives[h].style.cursor= 'pointer'
    actives[h].addEventListener('click',() => {
       
        // let f = document.querySelectorAll('.active')
        // console.log(f);
        // if(f.length === 0){
        //     actives[h].classList.add('active');
            
        // } else {
        //     actives[h].classList.remove('active');
        // }
        
        actives[h].classList.toggle('active');
        
        for ( let g = 0; g <document.querySelectorAll('.active').length; g++ ){
            dayPlay.push(document.querySelectorAll('.active')[g]);
        }
    //    console.log(dayPlay);
    })
}


};

document.querySelector('.caledar__nav_prev').addEventListener('click',() => {
    date.setMonth(date.getMonth()-1);
    calendarInit();
});
document.querySelector('.caledar__nav_next').addEventListener('click',() => {
    date.setMonth(date.getMonth()+1);
    calendarInit();
});


calendarInit();


// popup__time

document.querySelectorAll('.popup__time label').forEach(item => {
	
	item.addEventListener('click', () => {
	item.parentElement.querySelectorAll('input');
	for ( let i = 0; i < item.parentElement.querySelectorAll('input').length; i++){
		if(item.parentElement.querySelectorAll('input')[i].checked){
			item.parentElement.querySelectorAll('input')[i].nextSibling.style.backgroundColor = 'black'
			item.parentElement.querySelectorAll('input')[i].nextSibling.style.color = 'white'
		} else {
			item.parentElement.querySelectorAll('input')[i].nextSibling.style.backgroundColor = 'white'
			item.parentElement.querySelectorAll('input')[i].nextSibling.style.color = 'black'
		}
	} 
		
	});

		// for( let k = 0; k < item.parentElement.querySelectorAll('input').length; k++ ){
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

