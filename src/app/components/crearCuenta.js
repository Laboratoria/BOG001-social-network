//esta pagina es la tercera vista, crear cuenta
import { createUser} from './firebase.js'

export function createAccountView() {
    const $creatAccount = document.createElement("div");
    $creatAccount.classList.add("contenedor-form");
    $creatAccount.id = ("formcrearCta");
    $creatAccount.innerHTML = `
 

            <form method="POST" action="#" class="formulario">

                    <label for="userRegistration">Usuario * </label>
                    <input type="text" id="userRegistration" placeholder="Usuario" required>

                    <label for="correoelec2">Correo Electrónico *</label>
                    <input type="email" id="correoelec2" placeholder="Email" required>

                    <label for="contrasena2">Contraseña *</label>
                    <input type="password" id="contrasena" placeholder="********" maxlength="8" required>

                    <label for="nameRegistration">Nombre *</label>
                    <input type="name" id="nameRegistration" placeholder="Nombre" required>

                    <label for="lastnameRegistration">Apellidos *</label>
                    <input type="lastName" id="lastnameRegistration" placeholder="Apellidos" required>

                    <label for="birthDate">Fecha de nacimiento *</label>
                    <input type="date" id="birthDate" placeholder="Fecha de nacimiento" required>
                    
                    <label for = 'botonCrearUsuario'></label>
                     <input class="linkIngresar" id ='botonCrearUsuario' type = "submit" value = "Crear Cuenta" >
            </form>                    
             
 `;


    $creatAccount.addEventListener("submit", crearCuentaFirebase);


    function crearCuentaFirebase(e) {
        e.preventDefault(); // esto me cancela el reinicio del formulario
        const userRegistration = document.getElementById("userRegistration").value;
        const mail = document.getElementById("correoelec2").value;
        const contrasena = document.getElementById("contrasena").value;
        const nameRegistration = document.getElementById("nameRegistration").value;
        const lastnameRegistration = document.getElementById("lastnameRegistration").value;

        localStorage.setItem("userName", userRegistration);        

        console.log(userRegistration)
        console.log(mail)
        console.log(contrasena)
        console.log(nameRegistration)
        console.log(lastnameRegistration)
        //console.log(userName)

      
            createUser(mail, contrasena); 
            return createUser;
      
            //window.reload //aca se debe refrescar la pagina
        


    }
    //console.log("creandocuenta 😛");
      
    //window.location.hash = "#/post"
    return $creatAccount;

}