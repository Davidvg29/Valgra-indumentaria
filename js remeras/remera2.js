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

//CARROUSEL REMERA 2
let arrayImgRemera2 = ["/imagenes/remera 2 frontal.png", "/imagenes/remera 2 trasera.png"],
    contadorRemera2 = 0;
 
function carrouselRemera2(contenedorRemera2) {
    contenedorRemera2.addEventListener("click",(e)=>{
        let atrasRemera2 =contenedorRemera2.querySelector(".retroceder"),
            adelanteRemera2 = contenedorRemera2.querySelector(".adelantar"),
            imgRemera2 = contenedorRemera2.querySelector(".img"),
            tgtRemera2 = e.target;

        if (tgtRemera2 == atrasRemera2) {
            if (contadorRemera2 > 0) {
                imgRemera2.src = arrayImgRemera2[contadorRemera2 - 1];
                contadorRemera2--;
            }else{
                imgRemera2.src = arrayImgRemera2[arrayImgRemera2.length - 1] ;
                contadorRemera2 = arrayImgRemera2.length - 1;
            }
        }else if(tgtRemera2 == adelanteRemera2){
            if (contadorRemera2 < arrayImgRemera2.length - 1) {
                imgRemera2.src = arrayImgRemera2[contadorRemera2 + 1] ;
                contadorRemera2++;
            }else{
                imgRemera2.src = arrayImgRemera2[0] ;
                contadorRemera2 = 0;
            }
        }1
    })
};
    let contenedorRemera2 = document.querySelector(".carrouselRemera2");
    carrouselRemera2(contenedorRemera2);

//FIN CARROUSEL REMERA 2


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

    
let buttonAgregarRemera2 = document.getElementById("buttonAgregarRemera2");
      buttonAgregarRemera2.addEventListener("click", ()=>{
          if(cantidad.value > 0 && cantidad.value <100){
           localStorage.setItem("remera2", cantidad.value);
          }
      });

//FIN CARRITO

let x = localStorage.getItem("remera2"),
    agregar = document.querySelector(".agregar");

if (x.length>0) {
    agregar.innerHTML=`<div class="exito">¡Buena eleccion! puedes terminar la compra ingresando al carrito</div>`;
}