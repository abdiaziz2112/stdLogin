
let messageError =  document.querySelector("#messageError");
let message =  document.querySelector(".alert-info");
let username =  document.querySelector("#username");
let pass =  document.querySelector("#password");
let save =  document.querySelector("#save");


save.addEventListener("click", (e) =>{
  e.preventDefault();
  info();
//  clearInputs();

})

function info() {
  messageError.innerHTML = '<i class="fa fa-info" style="font-size:18px;"> still working...🥺</i>'
  message.classList.add("d-block")
   
}

function clearInputs() {
  username.value ="";
  pass.value = "";
 
}

