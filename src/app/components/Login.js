// esta pagina es la segunda vista, formulario html
import {autenticar} from "./firebase.js"

export function form (){
   const $form = document.createElement("div");
   $form.classList.add("contenedor-form");
   $form.id = ("formContacto");
   $form.innerHTML = `
   
            <div class="formulario">
                <h2>Iniciar Sesion</h2>
                <form action="#" method="POST">

                    <label for="correoelec">Correo Electrónico *</label>
                    <input type="email" id="correoelec" placeholder="correo@ejemplo.com" required>    

                    <label for="contrasena">Contraseña *</label>
                    <input type ="password" placeholder ="Contraseña" id = "contrasena" required>

                    <label for="in-sesion"></label>
                    <input type ="submit" id = "in-sesion" value="Iniciar Sesión">
                </form>
            </div>

            <div class="othersAccounts">

                <a href="#/crearcuenta" id= "createAccLink" >Crear Cuenta</a> <br>
                <a href="#/facebook" id= "linkFacebook" >Ingresar con Facebook</a><br>
                <a href="#/google" id= "linkGoogle" >Ingresar con Google</a><br>


            </div>
   `;
     

   $form.addEventListener("submit", guardarFormulario);

  function guardarFormulario(e){
       e.preventDefault();// esto me cancela el reinicio del formulario
       let mail = document.getElementById("correoelec").value;
       let contrasena = document.getElementById("contrasena").value;

       console.log(mail, contrasena);        
       
      console.log( autenticar(mail, contrasena))
       return autenticar;
       window.href=formulario;
   }

       //en este tengo que autenticar el usuario
    return $form;
    
}

  
  
   
   

