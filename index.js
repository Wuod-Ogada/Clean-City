const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

const containers = document.querySelector('#containers');
const contList = document.querySelector('contList');

const chevron = document.querySelector('#chevron');
const response = document.querySelector('#response');

burger.addEventListener('click',() => {
   if (menu.classList.contains('hidden')) {
		menu.classList.remove('hidden');
	 } else {
		menu.classList.add('hidden');
	 }
});

containers.addEventListener('click',() => {
	if(contList.classList.contains('hidden')){
		contList.classList.remove('hidden');
	} else {
		contList.classList.add('hidden');
	}
});

chevron.addEventListener('click',() => {
	if(response.classList.contains('hidden')) {
		response.classList.remove('hidden');
	} else {
		response.classList.add('hidden');
	}
})