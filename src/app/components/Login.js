// esta pagina es la segunda vista, formulario html


export function form (){
   const $form = document.createElement("div");
   $form.classList.add("contenedor-form");
   $form.id = ("formContacto");
   $form.innerHTML = `
   
            <div class="formulario">
                <h2>Iniciar Sesion</h2>
                <form action="#" method="POST">

                    <label for="usuario"></label>
                    <input type ="text"placeholder="Usuario" id = "usuario" required>

                    <label for="contrasena"></label>
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
       let usuario = document.getElementById("usuario").value;
       let contrasena = document.getElementById("contrasena").value;

       console.log(usuario, contrasena);        
       
      
   }

   

   /*$form.addEventListener("click", function(){
       document.getElementById("createAccLink")
   });*/ 
   
    return $form;
    
}
  
  
   
   

