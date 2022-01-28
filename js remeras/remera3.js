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

//CARROUSEL REMERA 3
let arrayImgRemera3 = ["/imagenes/remera 3 frontal.png", "/imagenes/remera 3 trasera.png"],
    contadorRemera3 = 0;
 
function carrouselRemera3(contenedorRemera3) {
    contenedorRemera3.addEventListener("click",(e)=>{
        let atrasRemera3 =contenedorRemera3.querySelector(".retroceder"),
            adelanteRemera3 = contenedorRemera3.querySelector(".adelantar"),
            imgRemera3 = contenedorRemera3.querySelector(".img"),
            tgtRemera3 = e.target;

        if (tgtRemera3 == atrasRemera3) {
            if (contadorRemera3 > 0) {
                imgRemera3.src = arrayImgRemera3[contadorRemera3 - 1];
                contadorRemera3--;
            }else{
                imgRemera3.src = arrayImgRemera3[arrayImgRemera3.length - 1] ;
                contadorRemera3 = arrayImgRemera3.length - 1;
            }
        }else if(tgtRemera3 == adelanteRemera3){
            if (contadorRemera3 < arrayImgRemera3.length - 1) {
                imgRemera3.src = arrayImgRemera3[contadorRemera3 + 1] ;
                contadorRemera3++;
            }else{
                imgRemera3.src = arrayImgRemera3[0] ;
                contadorRemera3 = 0;
            }
        }1
    })
};
    let contenedorRemera3 = document.querySelector(".carrouselRemera3");
    carrouselRemera3(contenedorRemera3);

//FIN CARROUSEL REMERA 3


//CARRITO
let butonAgregar = document.querySelector(".buttonAgregar"),
    cantidad = document.querySelector(".input");

    butonAgregar.addEventListener("click",()=>{
        // <div class="contadorCarrito">0</div>
        
        let contadorCarrito = document.querySelector(".contadorCarrito"),
            agregar = document.querySelector(".agregar"),
            fracaso = document.querySelector(".fracaso"),
            a = contadorCarrito.textContent,
            b = parseInt(a);
            
        if(cantidad.value > 0 && cantidad.value <= 99){
            
            if (a.length>0) {
                contadorCarrito.innerHTML=`${parseInt(a) + parseInt(cantidad.value)}`;
                fracaso.innerHTML="";
                agregar.innerHTML=`<div class="exito">¡Buena eleccion! puedes terminar la compra ingresando al carrito</div>`;
                contadorCarrito.style.backgroundColor="rgb(0, 165, 96)";
            }
            else{
                contadorCarrito.innerHTML=`${cantidad.value}`;
                fracaso.innerHTML="";
                agregar.innerHTML=`<div class="exito">¡Buena eleccion! puedes terminar la compra ingresando al carrito</div>`;
                contadorCarrito.style.backgroundColor="rgb(0, 165, 96)";
            }
        }
        else if(cantidad.value >99){
            fracaso.innerHTML=`Solo cantidad menor a 99`;
        }
        else{
            
            fracaso.innerHTML=`Por favor ingrese una cantidad correcta`;

      };
      // CARRITO



// FIN CARRITO
      
    });
    let contadorCarrito = document.querySelector(".contadorCarrito");

    let  cantidadRemera1 = parseInt(localStorage.getItem("remera1")),
cantidadRemera2 = parseInt(localStorage.getItem("remera2")),
cantidadRemera3 = parseInt(localStorage.getItem("remera3"));


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
};

if (isNaN(cantidadRemera1) && isNaN(cantidadRemera3) && isNaN(cantidadRemera3)) {
    contadorCarrito.innerHTML=``;
    contadorCarrito.style.backgroundColor="";
}

    
let buttonAgregarRemera3 = document.getElementById("buttonAgregarRemera3");
      buttonAgregarRemera3.addEventListener("click", ()=>{
          if(cantidad.value > 0 && cantidad.value <100){
           localStorage.setItem("remera3", cantidad.value);
          }
      });

//FIN CARRITO

let x = localStorage.getItem("remera3"),
    agregar = document.querySelector(".agregar");

if (x.length>0) {
    agregar.innerHTML=`<div class="exito">¡Buena eleccion! puedes terminar la compra ingresando al carrito</div>`;
}