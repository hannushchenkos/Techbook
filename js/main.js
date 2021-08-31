/*const displayEl = document.querySelector(".book__display");
const titlePieceEl = document.querySelector('.title_piece');
const paragraphEl = document.querySelector('.book__paragraph')
//let scrollWidth = displayEl.offsetWidth - displayEl.clientWidth;

console.log(scrollWidth);


setTimeout(() => {
	displayEl.scrollBy(0, 100)
	console.log("Ready");
}, 1000);

console.log(displayEl.getBoundingClientRect());
console.log(titlePieceEl.getBoundingClientRect());
console.log(paragraphEl.getBoundingClientRect());
*/  

const wrapperEl = document.querySelector('.wrapper');
const headerEl = document.querySelector('.header');
const bodyEl = document.body;
const bookContainerEl = document.querySelector('.book__container')
const displayEl = document.querySelector(".book__display");
const footerEl = document.querySelector('.footer');
const aboutContainerEl = document.querySelector('.about__container')
const aboutEl = document.querySelector('.about__text');


function scrollStart(){
	displayEl.scrollTo({
		top: 0,
		left:0,
		behavior: 'smooth'
	});
}

function scrollUp(){
	displayEl.scrollBy(0, -20)
}

function scrollDown(){
	displayEl.scrollBy(0, 20)
}

function scrollEnd(){
	console.log(displayEl.getBoundingClientRect());
	displayEl.scrollTo(0, displayEl.getBoundingClientRect().height)
}

function scrollEnd(){
	displayEl.scrollTo({
		top: displayEl.getBoundingClientRect().height,
		left:0,
		behavior: 'smooth'
	});
}


function nightMode(){
	bodyEl.classList.toggle('body_darkmode');
	wrapperEl.classList.toggle('wrapper_darkmode');
	headerEl.classList.toggle('header_darkmode');
	bookContainerEl.classList.toggle('bookContainer_darkmode');
	displayEl.classList.toggle('display_darkmode');
	footerEl.classList.toggle('footer_darkmode');
	aboutContainerEl.classList.toggle('aboutContainer_darkmode');
	aboutEl.classList.toggle('aboutText_darkmode');
}
