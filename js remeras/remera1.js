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


//CARROUSEL REMERA 1
let arrayImgRemera1 = ["/imagenes/remera 1 frontal.png", "/imagenes/remera 1 trasera.png"],
    contadorRemera1 = 0;
 
function carrouselRemera1(contenedorRemera1) {
    contenedorRemera1.addEventListener("click",(e)=>{
        let atrasRemera1 =contenedorRemera1.querySelector(".retroceder"),
            adelanteRemera1 = contenedorRemera1.querySelector(".adelantar"),
            imgRemera1 = contenedorRemera1.querySelector(".img"),
            tgtRemera1 = e.target;

        if (tgtRemera1 == atrasRemera1) {
            if (contadorRemera1 > 0) {
                imgRemera1.src = arrayImgRemera1[contadorRemera1 - 1];
                contadorRemera1--;
            }else{
                imgRemera1.src = arrayImgRemera1[arrayImgRemera1.length - 1] ;
                contadorRemera1 = arrayImgRemera1.length - 1;
            }
        }else if(tgtRemera1 == adelanteRemera1){
            if (contadorRemera1 < arrayImgRemera1.length - 1) {
                imgRemera1.src = arrayImgRemera1[contadorRemera1 + 1] ;
                contadorRemera1++;
            }else{
                imgRemera1.src = arrayImgRemera1[0] ;
                contadorRemera1 = 0;
            }
        }

    })
};
    let contenedorRemera1 = document.querySelector(".carrouselRemera1");
    carrouselRemera1(contenedorRemera1);

//FIN CARROUSEL REMERA 1


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

    
let buttonAgregarRemera1 = document.getElementById("buttonAgregarRemera1");
      buttonAgregarRemera1.addEventListener("click", ()=>{
          if(cantidad.value > 0 && cantidad.value <100){
           localStorage.setItem("remera1", cantidad.value);
          }
      });

//FIN CARRITO

let x = localStorage.getItem("remera1"),
    agregar = document.querySelector(".agregar");

if (x.length>0) {
    agregar.innerHTML=`<div class="exito">¡Buena eleccion! puedes terminar la compra ingresando al carrito</div>`;
}