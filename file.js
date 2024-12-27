/*let userName=document.getElementById("userName");
let password=document.getElementById("password");
let submitButton=document.getElementById("submitButton");
let errorMessage=document.getElementById("errorMessage");

const userNamePattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

let loginForm = document.getElementById("loginForm");

const passwordPattern= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

let error_message;
let welcomeBox=document.getElementById("welcomeBox")



loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    chekInputFilled();
    
   if(error_message){
    errorMessage.innerHTML=error_message 
   


   }
   else{
     password.setAttribute('aria-invalid', 'false');
     userName.setAttribute('aria-invalid', 'false');
     
     submitButton.innerHTML = `Loading... <i class="fa fa-spinner fa-spin"></i> `;
    setTimeout(() =>{
        
        let user=JSON.stringify(userName.value)
        localStorage.setItem("username",user);
        
        
        
        userName.value='';
        password.value='';
        window.location.href="welcom.html"
   
    },3000);

  


   }  
})
;


function chekInputFilled(){
    if(!userName.value ||!password.value){
  
        if(!userName.value ){
            userName.classList.add("input_border")
            userName.setAttribute('aria-invalid', 'true');
            
            error_message="username are required"
            

        }
        
        if(!password.value){
            password.classList.add("input_border")
            password.setAttribute('aria-invalid', 'true');
            error_message="password are required"

        }

    
      

    }
    if((userName.value &&password.value)){
       /* password.setAttribute('aria-invalid', 'false');
        userName.setAttribute('aria-invalid', 'false');
        rmvBorder();
        checkCorrectValue();
     
    }
};


let inputs = document.getElementsByTagName("input");

function rmvBorder(){
     
     Array.from(inputs).forEach(input => {
       
    input.classList.remove("input_border");
   
});
}
function checkCorrectValue(){
Array.from(inputs).forEach(input => {
    input.onchange(
    function (){
    
    rmvBorder();
    if (!userNamePattern.test(userName.value.trim())) {
        error_message = "Please enter a valid email!<br>";
        userName.setAttribute('aria-invalid', 'true');
    }
    if (!passwordPattern.test(password.value.trim())) {
        error_message = "Password must contain at least one letter, one digit, and one special character, and be at least 6 characters long.<br>"
        password.setAttribute('aria-invalid', 'true');
    }
   
}


)
})    };

checkCorrectValue();*/

let userName = document.getElementById("userName");
let password = document.getElementById("password");
let submitButton = document.getElementById("submitButton");
let errorMessage = document.getElementById("errorMessage");
let loginForm = document.getElementById("loginForm");

const userNamePattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
function cleanData(input){
    return DOMPurify.sanitize(input)

}
userName.value = cleanData(userName.value);
password.value = cleanData(password.value);
let error_message;


loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    error_message = "";
    checkInputFilled();

    if (error_message) {
        errorMessage.innerHTML = error_message; 
    } else {
        handleLogin();
    }
});


let inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    input.addEventListener("blur", function () {
        validateField(input);
    });
});

function checkInputFilled() {
    rmvBorder(); 

    if (!userName.value) {
        userName.classList.add("input_border");
        userName.setAttribute("aria-invalid", "true");
        error_message += "Username is required.<br>";
    }

    if (!password.value) {
        password.classList.add("input_border");
        password.setAttribute("aria-invalid", "true");
        error_message += "Password is required.<br>";
    }

    if (userName.value && password.value) {
        validateField(userName);
        validateField(password);
    }
}

function validateField(input) {
    rmvBorder(); 
    let inputId = input.id;

    if (inputId === "userName" && !userNamePattern.test(input.value.trim())) {
        error_message = "Please enter a valid email!<br>";
        userName.classList.add("input_border");
        userName.setAttribute("aria-invalid", "true");
    }

    if (inputId === "password" && !passwordPattern.test(input.value.trim())) {
        error_message += "Password must contain at least one letter, one digit, and one special character, and be at least 6 characters long.<br>";
        password.classList.add("input_border");
        password.setAttribute("aria-invalid", "true");
    }
}

function rmvBorder() {
    inputs.forEach(input => {
        input.classList.remove("input_border");
        input.setAttribute("aria-invalid", "false");
    });
}

function handleLogin() {
    password.setAttribute("aria-invalid", "false");
    userName.setAttribute("aria-invalid", "false");

    
    submitButton.innerHTML = `Loading... <i class="fa fa-spinner fa-spin"></i>`;


    setTimeout(() => {
        let user = JSON.stringify(userName.value);
        localStorage.setItem("username", user);

        
        userName.value = '';
        password.value = '';

        window.location.href = "welcom.html";
    }, 3000);
}

