var signinEmail=document.querySelector(".signinEmail")
var signinpassword=document.querySelector(".signinpassword")
var signinName=document.querySelector(".signinName")
var signinEmil=document.querySelector(".signinEmil")
var signinpaswrd=document.querySelector(".signinpasword")
var c = document.querySelector(".item");
var elementite = document.querySelector(".ite");
var elementsign = document.querySelector(".sign");
var elementlogin = document.querySelector(".login");
var currentState = localStorage.getItem("currentState");
var loginn=document.querySelector(".loginn")
var signup=document.querySelector(".signup")

var project=[];
if (currentState === "ite") {
    c.classList.replace("d-flex", "d-none");
    elementite.classList.replace("d-none", "d-flex");
} else {

    c.classList.replace("d-none", "d-flex");
    elementite.classList.replace("d-flex", "d-none");
}

loginn.addEventListener("click", function () {
    if (signinEmail.classList.contains("is-valid") &&
        signinpassword.classList.contains("is-valid")) {
        c.classList.replace("d-flex", "d-none");
        elementite.classList.replace("d-none", "d-flex");
        localStorage.setItem("currentState", "ite");

    
        var namme = "hello: " + signinName.value;
        var url = "ind.html?name=" + encodeURIComponent(namme);

      
        window.open(url, "_blank");
    } else {
        alert("is inputs is in-valid");
    }
});





elementsign.addEventListener("click", function () {
   
    c.classList.replace("d-flex", "d-none");
    elementite.classList.replace("d-none", "d-flex");

    localStorage.setItem("currentState", "ite");
});
    

elementlogin.addEventListener("click", function () {
if(signinName.classList.contains("is-valid")&&
signinEmil.classList.contains("is-valid")&&
signinpaswrd.classList.contains("is-valid")
){
   
    elementite.classList.replace("d-flex", "d-none");
    c.classList.replace("d-none", "d-flex");

    localStorage.setItem("currentState", "item");
  
}else{
    alert("is inputs is in-valid")
 }
});





function addeven(elemant){
    regex={
      floatingName:/^[A-Z][a-z]{2,10}$/,
      floatingEmail:/^[A-Z][a-z]{2,10}@gmail\.com$/,
      floatingPassword:/^[A-Z][a-z]{2,10}@[0-9]{2,10}$/,
      floatingEail:/^[A-Z][a-z]{2,10}@gmail\.com$/,
      floatingPssword:/^[A-Z][a-z]{2,10}@[0-9]{2,10}$/,
      floatingTextarea:/^ [\w]{3,}$/
    }
    var tes= regex[elemant.id].test(elemant.value)
    if(tes==true){
      elemant.classList.add("is-valid")
      elemant.classList.remove("is-invalid")
elemant.nextElementSibling.classList.add("d-none")
    }else{
      elemant.classList.add("is-invalid")
      elemant.classList.remove("is-valid")
      elemant.nextElementSibling.classList.remove("d-none") 
    }
    }

     signup.addEventListener("click",function(){
  if(signinName.classList.contains("is-valid")&&
signinEmil.classList.contains("is-valid")&&
signinpaswrd.classList.contains("is-valid")
){
   
        elementite.classList.replace("d-flex", "d-none");
        c.classList.replace("d-none", "d-flex");
    
        localStorage.setItem("currentState", "item");
   
}else{
   alert("is inputs is in-valid")
}

 })

 
