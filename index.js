

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


//Container selection and testimonials slider
/*
let index = 0;

show_container(index);

function show_container(i){
   index += i;

   let images = document.querySelectorAll("#image");

   for(let i=0; i<images.length; i++)
      images[i].classList.contains("hidden");

   if(index > images.length - 1){
      index = 0;
   }

   if(index < 0){
      index = images.length - 1;
   }
      

   images[index].classList.remove("hidden");
}
*/
//FAQ accordion onClick Action
let question = document.querySelectorAll('.question');


   for (let i=0; i<faqItems.length; i++){
      question[i].addEventListener('click', () =>{
         let chevron = document.querySelectorAll('#chevron');
         let answer = document.querySelectorAll('#response');
      console.log(answer[i], chevron[i]);
         if(answer[i].classList.contains('hidden')){
            answer[i].classList.remove('hidden');
         } else {
            answer[i].classList.add('hidden');
         }
      });
   }


// Areas of operation infine carousel
