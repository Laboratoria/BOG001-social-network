const publications = () => {
    let elementContainer= document.getElementById('container');
elementContainer.innerHTML = `
<style>
body {
    background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
</style>
<header>
<nav class="topNav" id="inicio">
    <ul>
        <li><a href="#/"><span class="fas fa-home"></span>Inicio</a></li>
        <li><a href="#/publicaciones"><span class="far fa-images"></span>Publicaciones</a></li>
        <li><a href="#/perfil"><span class="far fa-user-circle"></span>Perfil</a></li>
    </ul>
    <ul class="btnCloseSession">
    <li><a href="" onclick="closeSession()"><span class="far fa-times-circle"></span>Cerrar sesión</a></li></li>
    </ul>   
</nav>
</header>
<h1>Crear una publicación</h1>
<form>

<textarea class="post" placeholder="Escribe aquí...">
</textarea>
<br>
<input type="file" name="subirArchivo">
<input type="submit" value="Enviar">

</form>`
};

export default publications;