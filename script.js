let firstNameInput = document.querySelector('.firstName-input')
let lastNameInput = document.querySelector('.lastName-input')
let emailInput = document.querySelector('.email-input')
let passwordInput = document.querySelector('.password-input')
let firstNameText = document.querySelector('.firstName-text')
let lastNameText = document.querySelector('.lastName-text')
let emailText = document.querySelector('.email-text')
let passwordText = document.querySelector('.password-text')
let button = document.querySelector('button')
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function inputCheck(input,text,innerText){
    if(input.value == ''){
        input.classList.add('invalid')
        input.nextElementSibling.src = 'images/icon-error.png'
        text.innerText = innerText
    }else if(input.value.length < 3) {
        input.classList.add('invalid')
        input.nextElementSibling.src = 'images/icon-error.png'
        text.innerText = `${input.placeholder} need at least 3 character`
    }
    else{
        input.classList.remove('invalid')
        input.nextElementSibling.src = ''
        text.innerText = ''
    }
}

button.addEventListener('click',(e)=>{
    e.preventDefault()   

    //first name input
    inputCheck(firstNameInput,firstNameText,'First Name cannot be empty')
    
    //last name input
    inputCheck(lastNameInput,lastNameText,'Last Name cannot be empty')

    //email input
    if(emailInput.value.match(pattern)){
        emailText.innerText = ''
        emailInput.classList.remove('invalid')
        emailInput.nextElementSibling.src = ''
    }else{
        emailInput.classList.add('invalid')
        emailInput.nextElementSibling.src = 'images/icon-error.png'
        emailText.innerText = 'looks like this in not an email'
        if(emailInput.value == ''){
            emailText.innerText = 'email cannot be empty'
        }
    }

    //password input
    inputCheck(passwordInput,passwordText,'Password cannot be empty')
})