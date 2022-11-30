//select form, form element, h4,and .feedback to update message
const form = document.querySelector("#message-form");
const lastMessage = document.querySelector("h4.message-content");
const formInput = form.elements["message"];
const feedback = document.querySelector(".feedback");

//when I submit the form input, the lastMessage should update. 

function updateForm(event) {
    event.preventDefault();
    formInput.value.trim() !== "" ?
        lastMessage.innerHTML = formInput.value : feedback.style.display = "inline-block";
    
        
}


form.addEventListener("submit", updateForm);





































/*(function() {
//Select the input element
const form = document.querySelector('#message-form')
//Set up Submit Button
form.addEventListener('submit', function(e){
    // prevent the form's default submission action
    e.preventDefault()
    //Get user's input from from
    const message = document.querySelector('#message')
    const feedback = document.querySelector('.feedback')
    const messageContent = document.querySelector('.message-content')

    if (message.value === ''){
        feedback.classList.add('show')
        setTimeout(function(){
        feedback.classList.remove('show')
        }, 2000)
    } else {
        //Change message content and clear the message input
        messageContent.textContent = message.value
        message.value = ''
    }
})
})()

*/

