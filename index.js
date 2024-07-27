
showAnswer();
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
const images = document.querySelectorAll('#image');
   let imageIndex = 0;
   let intevalId = null;

   //initializes browser
   document.addEventListener("DOMContentLoaded", initializeSlider());

//Triggers browers to display the initial image(pivot) selected.
function initializeSlider(){
   if(images.length>0){
      images[imageIndex].classList.remove('hidden');
      intervalId = setInterval();
   }
}

//Trigger the image in the interval to be selected and displayed.
 function showImage(index){
      //control images to reset not terminating cycle on each extreme.
      if(index >= images.length){
         imageIndex = 0;
      } else if (index < 0){
         imageIndex = images.length - 1;
      }

      images.forEach(image =>{
         image.classList.add('hidden');
      });
      images[imageIndex].classList.remove('hidden');
 }

//Triggers image change on click
function prevSlide(){
   imageIndex--;
   showImage(imageIndex);
}

function nextSlide(){  
   imageIndex++;
   showImage(imageIndex);
}

//FAQ accordion onClick Action
function showAnswer(){
let question = document.querySelectorAll('.question');
let chevron = document.querySelectorAll('#chevron');
//let answer = document.querySelectorAll('#response');


 /*  for (let i=0; i<faqItems.length; i++){
      question[i].addEventListener('click', () =>{
         
         //question[i].classList.toggle('active');

      //console.log(answer[i], chevron[i]);
       if(answer[i].classList.contains('hidden')){
            answer[i].classList.remove('hidden');
         } else {
            answer[i].classList.add('hidden');
         }
      });
   } */
  question.forEach(question =>{
   question.addEventListener('click', event=>{

      
      const activeQuestion = document.querySelector('.question.active');
      console.log(question);

      if(activeQuestion && activeQuestion!==question){
         activeQuestion.classList.toggle('active');
         activeQuestion.nextElementSibling.classList.add('hidden');
      }

      question.classList.toggle('active');
      const answer = question.nextElementSibling;

      if(question.classList.contains('active')){
         answer.classList.remove('hidden');
      } else {
         answer.classList.add('hidden');
      }

   });
  });
}

// Areas of operation infine carousel
