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

<div id="contenedor-registro">
    <form class="registro" id="registro">
        <h2><strong>Registrese</strong></h2>
        <p id="text1">Complete este formulario para crear una cuenta.</p>
        <label for="email"><b>Correo Electronico :</b></label>
        <br>
        <input type="text" id="input-correo" class="registro-input" placeholder="ingresa correo" size="20" required>
        <br>
        <label for="psw"><b>Contraseña : </b></label>
        <br>
        <input type="password" id="input-psw1" class="registro-input" placeholder="***********" size="20" required>
        <br>
        <label for="psw-repeat"><b>Repite la Contraseña :</b></label>
        <br>
        <input type="password" id="input-psw2" class="registro-input" placeholder="***********" size="20" required>
        <p id="text2">Al crear una cuenta, acepta nuestros <a href="#" style="color:dodgerblue"><br>Terminos y condiciones de privacidad.</a></p>
        <button type="submit" class="registrarse">Registrate</button>    
        <button class= "startSession">Inicie sesión</button>
    </form>
</div>

<div class="inicioSession">
    <form id="Login" class="inicio-sesion">
        <p class="messageSign"></p>
        <button id="registry">Registrese</button>
        <input type="text" name="username" id="login-email" placeholder="Correo Electronico" required>
        <input type="password" id= "login-psw"name="password" placeholder="Contraseña" required>
        <input type="submit" class="login" value="Iniciar Sesión">
        <button class="google-btn"><a href="#">Iniciar sesión con Google+</a></button>
    </form>
</div>`
};

export default showLogin;