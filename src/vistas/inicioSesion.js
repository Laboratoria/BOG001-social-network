const inicioSesion = () => {
    let elementContainer= document.getElementById('container');
elementContainer.innerHTML = `
<style>
body {
    background-image: url(img/faro.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
}
</style>
<div class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <form id="Login" class= "inicio-sesion">
        <h1>Iniciar Sesión</h1>
            <input type="text" name="username" id="login-email" placeholder="Correo Electronico" required>
            <input type="password" id= "login-psw"name="password" placeholder="Contraseña" required>
            <input type="submit" class="login" value="Iniciar Sesión">
            <button class="google-btn"><a href="">Iniciar sesión con Google+</a></button>
            <a href="#/Registro">Registrarse</a>
        </form>
    </div>
</div>
`;
}

export default inicioSesion;