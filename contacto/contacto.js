let button = document.querySelector(".button");

button.addEventListener("click", (e)=>{
    e.preventDefault();
    let nombre = document.querySelector(".inputNombre"),
        email = document.querySelector(".inputEmail"),
        telefono = document.querySelector(".inputTelefono"),
        mensaje = document.querySelector(".textareaMensaje"),
        errorContacto = document.querySelector(".errorContacto");

        if (nombre.value.length < 3) {
            errorContacto.innerHTML="escriba un nombre correcto";
            nombre.style.borderBottom="1px solid red";

        }else{
            nombre.style.borderBottom="1px solid rgb(7, 161, 76)";
            errorContacto.innerHTML="";

            if (email.value.length < 5) {
                errorContacto.innerHTML="escriba un email correcto";
                email.style.borderBottom="1px solid red";
            }else if (email.value.length > 5) {
                if (email.value.indexOf("@") == -1) {
                    errorContacto.innerHTML="asegurate de escribir @ en email";
                    email.style.borderBottom="1px solid red";
                }else{
                    email.style.borderBottom="1px solid rgb(7, 161, 76)";
                    errorContacto.innerHTML="";

                    if (telefono.value.length < 5) {
                            errorContacto.innerHTML="asegurate de escribir un numero de telefono";
                            telefono.style.borderBottom="1px solid red";

                    }else if (telefono.value.length > 5 && isNaN(telefono.value)) {
                        
                            telefono.style.borderBottom="1px solid red";
                            errorContacto.innerHTML="asegurate de escribir un numero de telefono";
                        
                    }
                    else{
                        errorContacto.innerHTML="";
                        telefono.style.borderBottom="1px solid rgb(7, 161, 76)";

                        if (mensaje.value.length < 10) {
                            errorContacto.innerHTML="escribe un mensaje correctamente mayor a 10 caracteres";
                            mensaje.style.borderBottom="1px solid red";
                        }else{
                            mensaje.style.borderBottom="1px solid rgb(7, 161, 76)";
                            errorContacto.innerHTML="";
                            let contenedorMensajeExitoso = document.querySelector(".contenedorMensajeExitoso");
                            contenedorMensajeExitoso.innerHTML=`<div class="mensajeExitoso">
                            Mensaje enviado...<br>
                        <i class="fas fa-check tilde"></i> <br>
                         Nos contactaremos contigo a la brevedad
                        </div>`;
                            
                            nombre.innerHTML="";
                            email.innerHTML="";
                            telefono.innerHTML="";
                            mensaje.innerHTML="";
                        }
                    }
                }
            }
            
            
        };

       

})