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

    <div class="inicioSession">
    <img src="img/logoContainer.png" id="logoMarca">
        <form id="Login" class="inicio-sesion">
            
            <i id="emoji" class="far fa-user"></i>
            
            <input type="text" class="inputI" id="login-email" placeholder="Correo Electronico" required>
            <input type="password" class="inputI" id= "login-psw"name="password" placeholder="Contraseña" required>
            <input type="submit" class="login" value="Iniciar Sesión">
            <button class="google-btn"><a href="#">Iniciar sesión con Google+</a></button>
            <a id="registry">Registrese</a>
        </form>
    </div>

    <div id="contenedor-registro">
        <form class="registro" id="registro">
            <h2><strong>REGISTRO</strong></h2>
            <p id="text1">Complete este formulario para crear una cuenta.</p>
            <br>
            <input type="text" id="input-correo" class="registro-input" placeholder="Correo Electronico :" size="20" required>
            <br>
            <input type="password" id="input-psw1" class="registro-input" placeholder="Contraseña :" size="20" required>
            <br>
            <input type="password" id="input-psw2" class="registro-input" placeholder="***********" size="20" required>
            <p id="text2">Al crear una cuenta, acepta nuestros <a href="#" style="color:cyan"><br>Terminos y condiciones de privacidad.</a></p>
            <button type="submit" class="registrarse">Registrate</button>    
            <button class="startSession">Inicie sesión</button>
        </form>
    </div>`
};

export default showLogin;