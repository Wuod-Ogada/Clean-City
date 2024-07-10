const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

const chevron = document.querySelector('#chevron');
const response = document.querySelector('#response');

burger.addEventListener('click',() => {
   if (menu.classList.contains('hidden')) {
		menu.classList.remove('hidden');
	 } else {
		menu.classList.add('hidden');
	 }
});

chevron.addEventListener('click',() => {
	if(response.classList.contains('hidden')) {
		response.classList.remove('hidden');
	} else {
		response.classList.add('hidden');
	}
})