//esta pagina es la tercera vista, crear cuenta
import {createUser} from './firebase.js'

export function createAccountView() {  
    const $creatAccount = document.createElement("div");
    $creatAccount.classList.add("contenedor-form");
    $creatAccount.id = ("formcrearCta");
    $creatAccount.innerHTML = `
 

            <form method="POST" action="#" class="formulario">
                <label for="correoelec2">Correo Electrónico *</label>
                <input type="email" id="correoelec2" placeholder="correo@ejemplo.com" required>

                <br>
                <label for="contrasena2">Contraseña *</label>
                <input type="password" id="contrasena2" placeholder="********" maxlength="8" required>
                <br>
                <label for="repicontrasena">Repetir Contraseña *</label>
                <input type="password" id="repicontrasena" placeholder="********" maxlength="8" required>
                
                <label for = 'botonCrearUsuario'></label>
                <input class="linkIngresar" id ='botonCrearUsuario' type = "submit" value = "Crear Cuenta" >
            </form>
        
       
 `;
 
 
 $creatAccount.addEventListener("submit", crearCuentaFirebase);

  function crearCuentaFirebase(e){
       e.preventDefault();// esto me cancela el reinicio del formulario
       let mail = document.getElementById("correoelec2").value;
       let contrasena = document.getElementById("contrasena2").value;
       let verificacion = document.getElementById("repicontrasena").value;

       if (contrasena === verificacion){
        createUser(mail, contrasena);//cambiar a crear cuenta
        return createUser;
       }
       else{
           window.reload //aca se debe refrescar la pagina
       }
       console.log(mail, contrasena);        
       
       
   }
    console.log("creandocuenta 😛");
     //href="#/crearcuenta"'  
    
    return $creatAccount;

}
