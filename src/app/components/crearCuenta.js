//esta pagina es la tercera vista, crear cuenta

export function createAccount(){
 const $creatAccount = document.createElement("div");
 $creatAccount.classList.add("contenedor-form");
 $creatAccount.id = ("formcrearCta");
 $creatAccount.innerHTML = `
 

            <form method="POST" action="#" class="formulario">
                <label for="correoelec">Correo Electrónico *</label>
                <input type="email" id="correoelec" placeholder="correo@ejemplo.com" required>

                <br>
                <label for="contrasena">Contraseña *</label>
                <input type="password" id="contrasena" placeholder="********" maxlength="8" required>
                <br>
                <label for="repicontrasena">Repetir Contraseña *</label>
                <input type="password" id="repicontrasena" placeholder="********" maxlength="8" required>
            </form>
        

        <a class="linkIngresar" href="#/crearcuenta">Crear Cuenta</a> 
 `;

    console.log("creandocuenta 😛");
  
    return $creatAccount;

}
