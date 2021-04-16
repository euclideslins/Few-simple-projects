const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showEror(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccsess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control sucess';
}


function isValidEmail(input) {
    const re = (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(re.test(input.value.trim())) {
        showSuccsess(input);
    } else {
        showEror(input, 'Email not Valid')
    }
}

function checkPassword(input1, input2) {

    if(input1.value !== input2.value) {
        showEror(input2, 'Passwords do Not Match')
    }
    else {
        showSuccsess(input2)
    }

}



function checkLenght(input, min, max) {
    if(input.value.length < min) {
        console.log('entrou');
        showEror(input ,`${getfieldName(input)} must be at least ${min}`)
    }
    else if(input.value.length > max) {
        showEror(input ,`${getfieldName(input)} must be less than ${max} characters`)
    }
    else {
        showSuccsess(input);
    }
}

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim()==='') {
            showEror(input,`The field ${getfieldName(input)} is required`);
        }else {
            showSuccsess(input)
        }
    })
}
function getfieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username,email, password, password2])
    checkLenght(username, 3, 3);
    checkLenght(password, 6, 24);
    isValidEmail(input);
    checkPassword(password, password2);
})