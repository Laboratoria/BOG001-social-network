const profile = () => {
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
<header>
        <div class="topNav" id="inicio">
            <ul>
                <li><a href="#/Home"><span class="fas fa-home"></span> Inicio</a></li>
                <li><a href="#/Publicaciones"><span class="far fa-images"></span>Publicaciones</a></li>
                <li><a href="#/Perfil"><span class="far fa-user-circle"></span>Perfil</a></li>
                <li id="cerrar"><a href="#/Cerrar" onclick="closeSesion()"><span class="far fa-times-circle"></span>Cerrar sesión</a></li>
            </ul>   
        </div>
    </header>
`}
export default profile;