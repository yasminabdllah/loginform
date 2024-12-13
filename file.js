let userName=document.getElementById("userName");
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
    setTimeout(() =>{
        
        let user=JSON.stringify(userName.value)
         localStorage.setItem("username",user);
        
        
        
        userName.value='';
        password.value='';
        window.location.href="welcom.html"
   
    },3000);
    submitButton.innerHTML = `<i class="fa fa-spinner fa-spin"></i> Loading...`;


   }
    
  
        
    
})



function chekInputFilled(){
    if(!userName.value ||!password.value){
  
        if(!userName.value ){
            userName.classList.add("input_border")
            
            error_message="username are required"
            

        }
        
        else if(!password.value){
            password.classList.add("input_border")
            
            error_message="password are required"

        }

    
      

    }
    if((userName.value &&password.value)){
      
        checkCorrectValue();
    }
    

        
    
  
   
   
}




function rmvBorder(){
     let inputs = document.getElementsByTagName("input");
     Array.from(inputs).forEach(input => {
    input.classList.remove("input_border");
   
});
}


function checkCorrectValue(){
    
    rmvBorder();

    if (!userNamePattern.test(userName.value.trim())) {
        error_message = "Please enter a valid email!<br>";
    }
    if (!passwordPattern.test(password.value.trim())) {
        error_message = "Password must contain at least one letter, one digit, and one special character, and be at least 6 characters long.<br>";
    }
   
};

/*function checkIfdisabeled(){
    if(submitButton.disabled){
        submitButton.style.backgroundColor="gray";
    }
    else{
        submitButton.style.backgroundColor="green";

    }
}*/
