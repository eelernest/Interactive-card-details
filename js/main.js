let bgimg = document.getElementById("bgimg");
var formulario = document.getElementById("forms");
var nameform = document.getElementById("name");
var cardName = document.getElementById("cardName");
let number = document.getElementById("number");
let cardNumber = document.getElementById("cardNumber");
let mm = document.getElementById("mm");
let cardMM = document.getElementById("cardMM");
let yy = document.getElementById("yy");
let cardYY = document.getElementById("cardYY");
let cvc = document.getElementById("cvc");
let cardCVC = document.getElementById("cardCVC");
let button = document.getElementById("button");

if(window.screen.width>992 && window.screen.width<1300){
bgimg.classList.add("col-lg-12");
bgimg.classList.remove("col-lg-5");
}else if(window.screen.width>1300){
  bgimg.classList.add("col-lg-5");
  bgimg.classList.remove("col-lg-12");
}
//Cambia el nombre
nameform.addEventListener("input",()=>{
  let regExp = /[0-9]/g;
  if(regExp.test(nameform.value)=== true || nameform.value===""){
    cardName.innerHTML=("Nombre ejemplo")
  }
  else{
    cardName.innerHTML=(nameform.value);
  }

});
//Cambia el numero
number.addEventListener("input",()=>{
  let regExp = /[A-z]/g;
  if(regExp.test(number.value)=== false){

    let count = number.value;
    if (count.length === 0){
      cardNumber.innerHTML = ("0000 0000 0000 0000");
    }else if(count.length > 16 ){
      cardNumber.innerHTML = ("0000 0000 0000 0000");
    }else{
      console.log("LISTO")
      cardNumber.innerHTML=(count).replace(/([0-9]{4})/g,"$1 ");
    }
  }
});
//Cambia el mes
mm.addEventListener("input",()=>{
  if(mm === "" || mm.value.length === 0){
    cardMM.innerHTML = ("00");
  }else if(mm.value.length >2){
    cardMM.innerHTML=(mm.value.substr(0,2));
  }
  else if (mm.value.length<2){
    cardMM.innerHTML= ("0"+mm.value);
  }else{
    cardMM.innerHTML= (mm.value);
  }
});
//Cambia el año
yy.addEventListener("input",()=>{
  if(yy === "" || yy.value.length === 0){
    cardYY.innerHTML = ("00");
  }else if(yy.value.length >2){
    cardYY.innerHTML=(yy.value.substr(0,2));
  }
  else if (yy.value.length<2){
    cardYY.innerHTML= ("0"+yy.value);
  }else{
    cardYY.innerHTML= (yy.value);
  }
});
//Cambia cvc
cvc.addEventListener("input",()=>{
  if(cvc === "" || cvc.value.length === 0){
    cardCVC.innerHTML = ("000");
  }else if(cvc.value.length >3){
    cardCVC.innerHTML=(cvc.value.substr(0,3));
  }
  else if (cvc.value.length<2){
    cardCVC.innerHTML= ("00"+cvc.value);
  }else if (cvc.value.length<3){
    cardCVC.innerHTML= ("0"+cvc.value);
  }else{
    cardCVC.innerHTML= (cvc.value);
  }
});



(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else if (form.checkValidity()){
            event.preventDefault()

            console.log("validado");

            swal("Listo!", "Todo en Orden!", "success");

        }
        
        form.classList.add('was-validated')
      }, false)
      
    })
  })()