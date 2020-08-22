const showLogin = () => {
    let elementContainer= document.getElementById('container');
elementContainer.innerHTML =
`<style>
body {
    background-image: url(img/faro.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
}
</style>
<form class="registro" id="registro">
    <h2>Usuarios Registrados</h2>
    <button id="btninicio-sesion">Iniciar Sesión</button>
    <h2><strong>Registrese</strong></h2>
    <p class="fas fa-exclamation-triangle" id='errorMessage'></p>
    <p>Complete este formulario para crear una cuenta</p>
    <label for="email"><b>Correo Electronico :</b></label><br>
    <input type="text" id="input-correo" class="registro-input" placeholder="ingresa correo" size="20" required>
    <label for="psw"><b>Contraseña : </b></label><br>
    <input type="password" id="input-psw1" class="registro-input" placeholder="***********" size="20" required>
    <label for="psw-repeat"><b>Repite la Contraseña :</b></label>
    <input type="password" id="input-psw2" class="registro-input" placeholder="***********" size="20" required>
    <p>Al crear una cuenta, acepta nuestros <a href="#" style="color:dodgerblue"><br>Terminos y condiciones de privacidad</a>.</p>
    <div class="btnRegistro">
        <button type="button" class="cancelarbtn">Cancelar</button>
        <button type="submit" class="registrarse">Registrate</button>
    </div>    
</form>

<div class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <form id="Login" class= "inicio-sesion">
            <p class="messageSing"></p>
            <input type="text" name="username" id="login-email" placeholder="Correo Electronico" required>
            <input type="password" id= "login-psw"name="password" placeholder="Contraseña" required>
            <input type="submit" class="login" value="Iniciar Sesión">
            <button class="google-btn"><a href="#">Iniciar sesión con Google+</a></button>
        </form>
    </div>
</div>`

};

export default showLogin;