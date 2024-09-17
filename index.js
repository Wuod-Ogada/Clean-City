showAnswer();

function openClose() {
   const menu = document.querySelector('#menu');
   menu.classList.toggle('hidden');
 }
 
 document.querySelector('.sign-in-button').addEventListener('click', () => {
   document.querySelector('.sign-in-popup').classList.remove('hidden');
 });
 
 document.querySelector('.sign-in-closer').addEventListener('click', () => {
   document.querySelector('.sign-in-popup').classList.add('hidden');
 });
 
const switchtoregitration = document.querySelector('.switch-to-signUp');
const registrationForm = document.getElementById('registration-form');
const signinForm = document.getElementById('sign-in-form');
const switchToSignIn = document.querySelector('.switch-to-signIn');

switchtoregitration.addEventListener('click', () => {
   registrationForm.classList.toggle('hidden');
   signinForm.classList.add('hidden');
});

switchToSignIn.addEventListener('click', () => {
   signinForm.classList.remove('hidden');
   registrationForm.classList.toggle('hidden');
});
 


 function orderFormPopup() {
   const requests = document.querySelectorAll('.placeOrder');
   const orderForm = document.querySelector('.orderForm');
   const closeform = document.querySelector('.close-order-form');
 
   requests.forEach(request => {
      request.addEventListener('click', () => {
         console.log('place order');
         const activePlaceOrder = document.querySelector('.placeOrder.active');
 
         if (activePlaceOrder && activePlaceOrder !== request) {
            activePlaceOrder.classList.remove('active');
            orderForm.classList.add('hidden');
         }
 
         request.classList.toggle('active');
         if (request.classList.contains('active')) {
            orderForm.classList.remove('hidden');
         }
      });
   });
 
   closeform.addEventListener('click', () => {
      orderForm.classList.add('hidden');
   });
 }
 
 orderFormPopup();

 const containerModel = document.querySelector('.container-options');
let displayprice = '';

   function updatePrice() { 
      const amount = containerModel.value;
      document.querySelector('.price').innerHTML = amount;
      updatePrice();
   }

//Modal algorithm
/*function requestNotification() {
   const openButton = document.querySelector('[data-open-modal]');
   const closeButton = document.querySelector('[data-close-modal]');
   const modal = document.querySelector('[data-modal]');
   const confirmButton = document.querySelector(".approveRequest");

   let modalHTML;

   modalHTML += `<dialog data-modal>
				<div>
					<img src="" alt="">
				</div>
				<h3>Dear Esteemed Customer</h3>
				<p>This is to confirm that your oder has been placed and it is currently being processed. Thank you for choosing US!</p>
				<div>
					<button data-close-modal>Close</button>
					<button class="confirm">Approve</button>
				</div>
			</dialog>`;

   document.querySelector(".modal").innerHTML = modalHTML;

openButton.addEventListener('click', () => {
   modal.showModal()
})

closeButton.addEventListener('click', () => {
   modal.close();
})
}*/


//Container selection and testimonials slider

   const images = document.querySelectorAll('#image');
   let imageIndex = 0;
   let intervalId = null;

   //initializes browser
   document.addEventListener("DOMContentLoaded", initializeSlider());

//Triggers browers to display the initial image(pivot) selected.
function initializeSlider(){
   if(images.length>0){
      images[imageIndex].classList.remove('hidden');
      //intervalId = setInterval();
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

  question.forEach(question =>{
   question.addEventListener('click', () => {

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

// creating orders
document.addEventListener('DOMContentLoaded', newOrder());

function newOrder() {
   const orderList = [];

function createOrder() {
   const fNameInput = document.querySelector('.first-name');
   const sNameInput = document.querySelector('.second-name');
   const telephoneInput = document.querySelector('.receiver-contact');
   const locationInput = document.querySelector('.delivery-location');
   const clientAddressInput = document.querySelector('.client-address');

   const newOrder = {
      firstName: fNameInput.value,
      secondName: sNameInput.value,
      contact: telephoneInput.value,
      clientAddress: clientAddressInput.value,
      deliveryLocation: locationInput.value
   };

   // Clear the form fields
   fNameInput.value = '';
   sNameInput.value = '';
   telephoneInput.value = '';
   clientAddressInput.value = '';
   locationInput.value = '';

   orderList.push(newOrder);
   console.log(orderList);
}

document.querySelector('.submit-order').addEventListener('click', createOrder); // Ensure there's a .submit-order button

} 


//Feedback slider
const feedbackCarousel = document.querySelector('.feedback-container');
const arrowBtns = document.querySelectorAll('.feedback-btn');
const firstfeedbackCard = feedbackCarousel.querySelector('.feedback').offsetWidth;


arrowBtns.forEach(btn =>{
   btn.addEventListener("click", () => {
      console.log(btn.id);
      feedbackCarousel.scrollLeft += btn.id === "left" ? - firstfeedbackCard : firstfeedbackCard;
   });
});


let isDragging = false, startX, startScrollLeft;

const dragStart = (e) => {
   isDragging = true;
   feedbackCarousel.classList.add('dragging');
   //Records Initial position of cursor and scroll position of the carousel
   startX = e.pageX;
   startScrollLeft = feedbackCarousel.scrollLeft;
}

const dragging = (e) => {
   if(!isDragging) return;

   //Update the carousel's scroll position according to cursor movement
  feedbackCarousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
   isDragging = false;
   feedbackCarousel.classList.remove('dragging');
}


feedbackCarousel.addEventListener('mousedown', dragStart);
feedbackCarousel.addEventListener('mousemove', dragging);
feedbackCarousel.addEventListener('mouseup', dragStop);