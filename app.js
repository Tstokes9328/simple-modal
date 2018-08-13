//Get modal element
var modal = document.getElementById('simple-modal');
//Get open modal button
var openBtn = document.getElementById('modal-btn');
//Get close button
var closeBtn = document.getElementsByClassName('close-btn')[0];

//Listen for a click on open button
openBtn.addEventListener('click', openModal);
//Listen for click on close button
closeBtn.addEventListener('click', closeModal);
//Listen for click outside modal
window.addEventListener('click', clickOutside);


//Function to open modal
function openModal(){
    modal.style.display = 'block';
}

//Function to close modal
function closeModal(){
    modal.style.display = 'none';
}

//Function to close modal when clicked outside of modal
function clickOutside(event){
    if(event.target == modal){
        modal.style.display = 'none';
    }
}