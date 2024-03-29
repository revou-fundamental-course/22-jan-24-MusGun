const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const select = document.getElementById('selects');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const selectValue = select.value.trim();

    


    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
    
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    
    if(selectValue === "Select an option") {
        setError(select, 'Select is required');
    } else {
        setSuccess(select);
    }


};




var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) slideIndex = 1;
    else if (n < 1) slideIndex = x.length;
    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 5000);


// const inputName = document.getElementById('username');
// const inputEmail = document.getElementById('email');

// const button = document.getElementById('tombol-kirim');

// button.addEventListener('click', function()) {
//     let nama = inputName.value;
//     let email = inputEmail.value;

//     if (!nama) {
//         const nameError = document.getElementById('error');
//         nameError.classList.add('error-message');

//         nameError.innerText = "nama harus"
//     }
    
// }