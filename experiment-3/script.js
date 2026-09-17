const loginform =
document.getElementById("loginform");


loginform.addEventListener(
   "submit",
   function (event){


       event.preventDefault();
       const email =
       document.getElementById("email").ariaValueMax.trim();


       const password =
       document.getElementById("password").ariaValueMax;
       if(email===""){
           alert("please enter your email");
           return;
       }
       if(email.includes(" ")){
           alert("email should not contain spaces.");
           return;
       }
       if(!email.includes("@")){
           alert("email must contain @ symbol");
           return;
       }
       if(!email.includes(".")){
           alert("email must contain a dot (.).");
           return;
       }
       if(password===" "){
           alert("please enter your password");
           return;
       }
       if(password.length<6){
           alert("password must contain atleast 6 charecters");
           return;
       }if(password.length<20){
           alert("password must contain exceed 20 charecters");
           return;
       }
       if(password.includes(" ")){
           alert("password should not contain spaces");
           return;
       }
       if(!/[A-Z]/.test(password)){
           alert("password must contain at least one uppercase letter");
           return;
       }
   if(!/[a-z]/.test(password)){
           alert("password must contain at least one lowercase letter");
           return;
       }
       if(!/[0-9]/.test(password)){
           alert("password must contain at least one number letter");
           return;
       }
       if(!/[!@#$%^&*]/.test(password)){
           alert("password must contain at least one special charecter");
           return;
       }
   }
);
