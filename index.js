// MOSTRAR Y OCULTAR EL MENU EN ASIDE
let menu = document.querySelector(".imgMenu"),
    aside = document.getElementById("aside"),
    cruz = document.querySelector(".imgCruz");
    

menu.addEventListener("click", ()=>{
    ocultarMenu = menu.style.display="none";
    mostrarAside = aside.style.display="block";
    mostrarCruz = cruz.style.display="block";
    
    
});

cruz.addEventListener("click", ()=>{
    mostrarmenu = menu.style.display="block";
    ocultarAside = aside.style.display="none";
    ocultarCruz = cruz.style.display="none";
    
});
// FIN MOSTRAR Y OCULTAR EL MENU EN ASIDE


// CARRITO
let  cantidadRemera1 = parseInt(localStorage.getItem("remera1")),
     cantidadRemera2 = parseInt(localStorage.getItem("remera2")),
     cantidadRemera3 = parseInt(localStorage.getItem("remera3")),
     contadorCarrito = document.querySelector(".contadorCarrito");

     
     if (isNaN(cantidadRemera1)){
        contadorCarrito.innerHTML=`${cantidadRemera2 + cantidadRemera3}`;
        contadorCarrito.style.backgroundColor="rgb(0, 165, 96)";
     }
     else if (isNaN(cantidadRemera2)) {
        console.log(cantidadRemera1 + cantidadRemera3);
        contadorCarrito.innerHTML=`${cantidadRemera1 + cantidadRemera3}`;
        contadorCarrito.style.backgroundColor="rgb(0, 165, 96)";
     }
     else if (isNaN(cantidadRemera3)) {
        console.log(cantidadRemera1 + cantidadRemera2);
        contadorCarrito.innerHTML=`${cantidadRemera1 + cantidadRemera2}`;
        contadorCarrito.style.backgroundColor="rgb(0, 165, 96)";
     }
     else{
         console.log(cantidadRemera1+cantidadRemera2+cantidadRemera3);
         contadorCarrito.innerHTML=`${cantidadRemera1 + cantidadRemera2 + cantidadRemera3}`;
         contadorCarrito.style.backgroundColor="rgb(0, 165, 96)";
     };


    if (isNaN(cantidadRemera1) && isNaN(cantidadRemera2)) {
      console.log(cantidadRemera3);
      contadorCarrito.innerHTML=`${cantidadRemera3}`;
      contadorCarrito.style.backgroundColor="rgb(0, 165, 96)";
   }
   else if (isNaN(cantidadRemera3) && isNaN(cantidadRemera2)) {
      console.log(cantidadRemera1);
      contadorCarrito.innerHTML=`${cantidadRemera1}`;
      contadorCarrito.style.backgroundColor="rgb(0, 165, 96)";
   }
   else if (isNaN(cantidadRemera1) && isNaN(cantidadRemera3)) {
      console.log(cantidadRemera2);
      contadorCarrito.innerHTML=`${cantidadRemera2}`;
      contadorCarrito.style.backgroundColor="rgb(0, 165, 96)";
   }

   if (isNaN(cantidadRemera1) && isNaN(cantidadRemera3) && isNaN(cantidadRemera3)) {
      contadorCarrito.innerHTML=``;
      contadorCarrito.style.backgroundColor="";
  }

  
// FIN CARRITO










