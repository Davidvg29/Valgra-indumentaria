// REMERA 1
let locStgeRem1 = localStorage.getItem("remera1");
     
if (locStgeRem1) {
    let productosRemera1 = document.getElementById("productosRemera1");
    productosRemera1.innerHTML+=`<div class="contenedorCaracteristicas" id="contenedorCaracteristicasRemera1">
    <div class="productoCaracteristicas" id="productoCaracteristicasRemera1">Remera THE BEST ONE</div>
    <div class="productoTalle" id="productoTalleRemera1">
        <select class="select" id="selectRemera1">
            <option value="" class="optionTalle" id="">?</option>
            <option value="S" class="optionTalle" id="optionTalleRemera1">S</option>
            <option value="M" class="optionTalle" id="optionTalleRemera1">M</option>
            <option value="L" class="optionTalle" id="optionTalleRemera1">L</option>
            <option value="XL" class="optionTalle" id="optionTalleRemera1">XL</option>
            <option value="XXL" class="optionTalle" id="optionTalleRemera1">XXL</option>
        </select>
    </div>
    <div class="productoCantidad" id="productoCantidadRemera1">
    <div class="menos menos1">-</div>
    <input type="number" class="inputCantidad" id="inputCantidadRemera1" value="${locStgeRem1}" min="1" max="200" readonly>
    <div class="mas mas1">+</div>
    
    </div>
</div>
<div class="eliminar" id="eliminarRemera1">eliminar</div>`;
    let eliminar = document.getElementById("eliminarRemera1");
        eliminar.addEventListener("click",()=>{
            localStorage.removeItem("remera1");
            productosRemera1.innerHTML="";
        })

}

// FIN REMERA 1

// REMERA 2
let locStgeRem2 = localStorage.getItem("remera2");
     
if (locStgeRem2) {
    let productosRemera2 = document.getElementById("productosRemera2");
    productosRemera2.innerHTML+=`<div class="contenedorCaracteristicas" id="contenedorCaracteristicasRemera2">
    <div class="productoCaracteristicas" id="productoCaracteristicasRemera2">Remera THE BEST TWO</div>
    <div class="productoTalle" id="productoTalleRemera2">
        <select class="select" id="selectRemera2">
            <option value="" class="optionTalle" id="">?</option>
            <option value="S" class="optionTalle" id="optionTalleRemera2">S</option>
            <option value="M" class="optionTalle" id="optionTalleRemera2">M</option>
            <option value="L" class="optionTalle" id="optionTalleRemera2">L</option>
            <option value="XL" class="optionTalle" id="optionTalleRemera2">XL</option>
            <option value="XXL" class="optionTalle" id="optionTalleRemera2">XXL</option>
        </select>
    </div>
    <div class="productoCantidad" id="productoCantidadRemera2">
    <div class="menos menos2">-</div>
    <input type="number" class="inputCantidad" id="inputCantidadRemera2" value="${locStgeRem2}" min="1" max="200" readonly>
    <div class="mas mas2">+</div>
    </div>
</div>
<div class="eliminar" id="eliminarRemera2">eliminar</div>`;
    let eliminar = document.getElementById("eliminarRemera2");
        eliminar.addEventListener("click",()=>{
            localStorage.removeItem("remera2");
            productosRemera2.innerHTML="";
        })

}

// FIN REMERA 2

// REMERA 3
let locStgeRem3 = localStorage.getItem("remera3");
     
if (locStgeRem3) {
    let productosRemera3 = document.getElementById("productosRemera3");
    productosRemera3.innerHTML+=`<div class="contenedorCaracteristicas" id="contenedorCaracteristicasRemera3">
    <div class="productoCaracteristicas" id="productoCaracteristicasRemera3">Remera MIRADA EN ALTO</div>
    <div class="productoTalle" id="productoTalleRemera3">
        <select class="select" id="selectRemera3">
            <option value="" class="optionTalle" id="">?</option>
            <option value="S" class="optionTalle" id="optionTalleRemera3">S</option>
            <option value="M" class="optionTalle" id="optionTalleRemera3">M</option>
            <option value="L" class="optionTalle" id="optionTalleRemera3">L</option>
            <option value="XL" class="optionTalle" id="optionTalleRemera3">XL</option>
            <option value="XXL" class="optionTalle" id="optionTalleRemera3">XXL</option>
        </select>
    </div>
    <div class="productoCantidad" id="productoCantidadRemera3">
    <div class="menos menos3">-</div>
    <input type="number" class="inputCantidad" id="inputCantidadRemera3" value="${locStgeRem3}" min="1" max="200" readonly>
    <div class="mas mas3">+</div>
    </div>
</div>
<div class="eliminar" id="eliminarRemera3">eliminar</div>`;
    let eliminar = document.getElementById("eliminarRemera3");
        eliminar.addEventListener("click",()=>{
            localStorage.removeItem("remera3");
            productosRemera3.innerHTML="";
        })

}

// FIN REMERA 3

let terminarCompra = document.querySelector(".terminarCompra");

terminarCompra.addEventListener("click", ()=>{
    let talle1 = document.getElementById("selectRemera1"),
        cantidad1 = document.getElementById("inputCantidadRemera1"),
        talle2 = document.getElementById("selectRemera2"),
        cantidad2 = document.getElementById("inputCantidadRemera2"),
        talle3 = document.getElementById("selectRemera3"),
        cantidad3 = document.getElementById("inputCantidadRemera3"),
        errorCompra = document.querySelector(".errorCompra");
        
        if (!locStgeRem1) {
            if(locStgeRem2 && locStgeRem3){
                if (talle2.value.length != "" && cantidad2.value > 0 &&
                talle3.value.length != "" && cantidad3.value > 0) {
                errorCompra.innerHTML="";
                let textoConfirmarRem2yRem3 = `Estas por comprar : 
                    ${cantidad2.value} Remera THE BEST TWO talle ${talle2.value}.<br>
                    ${cantidad3.value} Remera MIRADA EN ALTO talle ${talle3.value}.`,
                    contenedorConfirmarCompra = document.querySelector(".contenedorConfirmarCompra");
                    contenedorConfirmarCompra.style.display="flex";
                    contenedorConfirmarCompra.innerHTML=`<div class="confirmarCompra">
                    <p class="texto">${textoConfirmarRem2yRem3}</p>
                    <a href="https://wa.me/543813965671?text=Hola, quiero el producto remera *THE BEST TWO* y remera *MIRADA EN ALTO*"><button class="confirmar">confirmar</button></a>
                    <p class="volver">volver</p>
                </div>`;

                let volver = document.querySelector(".volver");
                        volver.addEventListener("click", ()=>{
                            contenedorConfirmarCompra.style.display="none";
                    })
                
                
            }
            else{
                errorCompra.innerHTML=`recuerda elegir talle y una cantidad mayor a cero`;
            };
            }
        }

        if (!locStgeRem2) {
            if(locStgeRem1 && locStgeRem3){
                if (talle1.value.length != "" && cantidad1.value > 0 &&
                talle3.value.length != "" && cantidad3.value > 0) {
                errorCompra.innerHTML="";
                
                let textoConfirmarRem1yRem3 = `Estas por comprar : 
                    ${cantidad1.value} Remera THE BEST ONE talle ${talle1.value}.<br>
                    ${cantidad3.value} Remera MIRADA EN ALTO talle ${talle3.value}.`,
                    contenedorConfirmarCompra = document.querySelector(".contenedorConfirmarCompra");
                    contenedorConfirmarCompra.style.display="flex";
                    contenedorConfirmarCompra.innerHTML=`<div class="confirmarCompra">
                    <p class="texto">${textoConfirmarRem1yRem3}</p>
                    <a href="https://wa.me/543813965671?text=Hola, quiero el producto remera *THE BEST ONE* y remera *MIRADA EN ALTO*"><button class="confirmar">confirmar</button></a>
                    <p class="volver">volver</p>
                </div>`;

                let volver = document.querySelector(".volver");
                        volver.addEventListener("click", ()=>{
                            contenedorConfirmarCompra.style.display="none";
                    })
                
            }
            else{
                errorCompra.innerHTML=`recuerda elegir talle y una cantidad mayor a cero`;
            };
            }
        }

        if (!locStgeRem3) {
            if(locStgeRem1 && locStgeRem2){
                if (talle1.value.length != "" && cantidad1.value > 0 &&
                talle2.value.length != "" && cantidad2.value > 0) {
                errorCompra.innerHTML="";

                let textoConfirmarRem1yRem2 = `Estas por comprar : 
                    ${cantidad1.value} Remera THE BEST ONE talle ${talle1.value}.<br>
                    ${cantidad2.value} Remera THE BEST TWO talle ${talle2.value}.`,
                    contenedorConfirmarCompra = document.querySelector(".contenedorConfirmarCompra");
                    contenedorConfirmarCompra.style.display="flex";
                    contenedorConfirmarCompra.innerHTML=`<div class="confirmarCompra">
                    <p class="texto">${textoConfirmarRem1yRem2}</p>
                    <a href="https://wa.me/543813965671?text=Hola, quiero el producto remera *THE BEST ONE* y remera *THE BEST TWO*"><button class="confirmar">confirmar</button></a>
                    <p class="volver">volver</p>
                </div>`;

                let volver = document.querySelector(".volver");
                        volver.addEventListener("click", ()=>{
                            contenedorConfirmarCompra.style.display="none";
                    })
                
            }
            else{
                errorCompra.innerHTML=`recuerda elegir talle y una cantidad mayor a cero`;
            };
            }
        }

        
        
        if (locStgeRem1  || locStgeRem2  || locStgeRem3) {
            if (locStgeRem1 && !locStgeRem2 && !locStgeRem3) {
                if (talle1.value.length != "" && cantidad1.value > 0) {
                    errorCompra.innerHTML="";

                    let textoConfirmarRem1 = `Estas por comprar : 
                    ${cantidad1.value} Remera THE BEST ONE talle ${talle1.value}`,
                    contenedorConfirmarCompra = document.querySelector(".contenedorConfirmarCompra");
                    contenedorConfirmarCompra.style.display="flex";
                    contenedorConfirmarCompra.innerHTML=`<div class="confirmarCompra">
                    <p class="texto">${textoConfirmarRem1}</p>
                    <a href="https://wa.me/543813965671?text=Hola, quiero el producto remera *THE BEST ONE*"><button class="confirmar">confirmar</button></a>
                    <p class="volver">volver</p>
                </div>`;

                let volver = document.querySelector(".volver");
                        volver.addEventListener("click", ()=>{
                            contenedorConfirmarCompra.style.display="none";
                    })
                }
                
                else{
                    errorCompra.innerHTML=`recuerda elegir talle y una cantidad mayor a cero`;
                };
            }
            else if (locStgeRem2 && !locStgeRem1 && !locStgeRem3) {
                if (talle2.value.length != "" && cantidad2.value > 0) {
                    errorCompra.innerHTML="";

                    let textoConfirmarRem2 = `Estas por comprar : 
                    ${cantidad2.value} Remera THE BEST TWO talle ${talle2.value}`,
                    contenedorConfirmarCompra = document.querySelector(".contenedorConfirmarCompra");
                    contenedorConfirmarCompra.style.display="flex";
                    contenedorConfirmarCompra.innerHTML=`<div class="confirmarCompra">
                    <p class="texto">${textoConfirmarRem2}</p>
                    <a href="https://wa.me/543813965671?text=Hola, quiero el producto remera *THE BEST TWO*"><button class="confirmar">confirmar</button></a>
                    <p class="volver">volver</p>
                </div>`;

                let volver = document.querySelector(".volver");
                        volver.addEventListener("click", ()=>{
                            contenedorConfirmarCompra.style.display="none";
                    })
                }
                
                else{
                    errorCompra.innerHTML=`recuerda elegir talle y una cantidad mayor a cero`;
                };
            }
            else if (locStgeRem3 && !locStgeRem2 && !locStgeRem1) {
                if (talle3.value.length != "" && cantidad3.value > 0) {
                    errorCompra.innerHTML="";

                    let textoConfirmarRem3 = `Estas por comprar : 
                    ${cantidad3.value} Remera MIRADA EN ALTO talle ${talle3.value}`,
                    contenedorConfirmarCompra = document.querySelector(".contenedorConfirmarCompra");
                    contenedorConfirmarCompra.style.display="flex";
                    contenedorConfirmarCompra.innerHTML=`<div class="confirmarCompra">
                    <p class="texto">${textoConfirmarRem3}</p>
                    <a href="https://wa.me/543813965671?text=Hola, quiero el producto remera *MIRADA EN ALTO*"><button class="confirmar">confirmar</button></a>
                    <p class="volver">volver</p>
                </div>`;

                let volver = document.querySelector(".volver");
                        volver.addEventListener("click", ()=>{
                            contenedorConfirmarCompra.style.display="none";
                    })
                }
                
                else{
                    errorCompra.innerHTML=`recuerda elegir talle y una cantidad mayor a cero`;
                };
            }
        }

        if (locStgeRem3 && locStgeRem2 && locStgeRem1) {
            if(locStgeRem1 && locStgeRem2 && locStgeRem3){
                if (talle1.value.length != "" && cantidad1.value > 0 &&
                    talle2.value.length != "" && cantidad2.value > 0 &&
                    talle3.value.length != "" && cantidad3.value > 0) {
                errorCompra.innerHTML="";

                let textoConfirmarRemeras = `Estas por comprar : 
                    ${cantidad1.value} Remera THE BEST ONE talle ${talle1.value}.<br>
                    ${cantidad2.value} Remera THE BEST TWO talle ${talle2.value}.<br>
                    ${cantidad3.value} Remera MIRADA EN ALTO talle ${talle3.value}.`,
                    contenedorConfirmarCompra = document.querySelector(".contenedorConfirmarCompra");
                    contenedorConfirmarCompra.style.display="flex";
                    contenedorConfirmarCompra.innerHTML=`<div class="confirmarCompra">
                    <p class="texto">${textoConfirmarRemeras}</p>
                    <a href="https://wa.me/543813965671?text=Hola, quiero el producto remera *THE BEST ONE*, remera *THE BEST TWO* y remera *MIRADA EN ALTO*"><button class="confirmar">confirmar</button></a>
                    <p class="volver">volver</p>
                </div>`;

                let volver = document.querySelector(".volver");
                        volver.addEventListener("click", ()=>{
                            contenedorConfirmarCompra.style.display="none";
                    })
                
            }
            else{
                errorCompra.innerHTML=`recuerda elegir talle y una cantidad mayor a cero`;
            };
            }
        }






       
 
});

let precio = document.querySelector(".precio"),
    precioTotal = precio,
    numero = precioTotal.textContent,
    cant1 = document.getElementById("inputCantidadRemera1"),
    cant2 = document.getElementById("inputCantidadRemera2"),
    cant3 = document.getElementById("inputCantidadRemera3");
    
    if (cant1 == null) {
        let cant1 = 0;
        if (cant2 && cant3) {
            precio.innerHTML=` ${cant1*5000 + cant2.value*5500 + cant3.value*6000}`;
        }
        
    }else if (cant1 && cant2==null && cant3==null) {
        precio.innerHTML=` ${cant1.value*5000}`;
        
        
    }

     if (cant2 == null) {
        let cant2 = 0;
        if (cant1 && cant3) {
            precio.innerHTML=` ${cant1.value*5000 + cant2*5000 + cant3.value*6000}`;
        }
        
    }else if (cant1==null && cant2 && cant3==null) {
        precio.innerHTML=` ${cant2.value*5500}`;
        
    }

    if (cant3 == null) {
        let cant3 = 0;
        if (cant1 && cant2) {
            precio.innerHTML=` ${cant1.value*5000 + cant2.value*5500 + cant3*6000}`;
            
        }
        
    }else if (cant1==null && cant2==null && cant3) {
        precio.innerHTML=`${cant3.value*6000}`;
        
    }

    if(cant1 && cant2 && cant3) {
        precio.innerHTML=` ${cant1.value*5000 + cant2.value*5500 + cant3.value*6000}`;
        
    };


    //sumar con + y -
    function sumarRestar() {
        if (cant1) {
            let menos1 = document.querySelector(".menos1"),
        mas1 = document.querySelector(".mas1");

        menos1.addEventListener("click", ()=>{
            if (cant1.value > 0) {
                precio.innerHTML=`${parseInt(precio.textContent) - 5000}`;
                cant1.value=`${parseInt(cant1.value) - 1}`;
            }
            else if (cant1.value <= 0) {
                precio.innerHTML=`${parseInt(precio.textContent)}`;
                cant1.value=`${parseInt(cant1.value)}`;
            }
            
        })

        mas1.addEventListener("click", ()=>{
            precio.innerHTML=`${parseInt(precio.textContent) + 5000}`;
            cant1.value=`${parseInt(cant1.value) + 1}`
        })
        }


        if (cant2) {
            let menos2 = document.querySelector(".menos2"),
            mas2 = document.querySelector(".mas2");
        
        menos2.addEventListener("click", ()=>{
            if (cant2.value > 0) {
                precio.innerHTML=`${parseInt(precio.textContent) - 5500}`;
                cant2.value=`${parseInt(cant2.value) - 1}`;
            }
            else if (cant2.value <= 0) {
                precio.innerHTML=`${parseInt(precio.textContent)}`;
                cant2.value=`${parseInt(cant2.value)}`;
            }
        })

        mas2.addEventListener("click", ()=>{
            precio.innerHTML=`${parseInt(precio.textContent) + 5500}`;
            cant2.value=`${parseInt(cant2.value) + 1}`;
        })
        }


        if (cant3) {
            let menos3 = document.querySelector(".menos3"),
            mas3 = document.querySelector(".mas3");

        menos3.addEventListener("click", ()=>{
            if (cant3.value > 0) {
                precio.innerHTML=`${parseInt(precio.textContent) - 6000}`;
                cant3.value=`${parseInt(cant3.value) - 1}`;
            }
            else if (cant3.value <= 0) {
                precio.innerHTML=`${parseInt(precio.textContent)}`;
                cant3.value=`${parseInt(cant3.value)}`;
            }
        })

        mas3.addEventListener("click", ()=>{
            precio.innerHTML=`${parseInt(precio.textContent) + 6000}`;
            cant3.value=`${parseInt(cant3.value) + 1}`
        })
        }
    }
    sumarRestar();
    //fin sumar con + y -
    
    
    








 



