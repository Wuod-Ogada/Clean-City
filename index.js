const questions = document.querySelectorAll('#quiz')    
;

//Menu on click action
function openClose() {
   const menu = document.querySelector('#menu');

   if (menu.classList.contains('hidden'))
   {
      menu.classList.remove('hidden');
   } else {
      menu.classList.add('hidden');
   }
};

//Container list dropdown
/*function dropDown() {
	const list = document.querySelector('#container_list');

	if (list.classList.contains('hidden'))
	{
		 list.classList.remove('hidden')
	} else {
		 list.classList.add('hidden')
	}

}; */


//Container selection and testimonials slider
let index = 0;

show_container(index);

function show_container(i){
   index += i;

   let images = document.getElementsById("#image");

   for(i = 0;i < images.length;i++)
      images[i].classList.contains("hidden");

   if(index > images.length - 1){
      index = 0;
   }

   if(index < 0){
      index = images.length - 1;
   }
      

   images[index].classList.remove("hidden");
}

//FAQ accordion onClick Action



// Areas of operation infine carousel