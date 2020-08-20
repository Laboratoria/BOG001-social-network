const showFirst = () => {
    let elementContainer= document.getElementById('container');
elementContainer.innerHTML =
`<header>
<nav class="topNav" id="inicio">
    <ul>
        <li><a href="#/"><span class="fas fa-home"></span>Inicio</a></li>
        <li><a href="#/publicaciones"><span class="far fa-images"></span>Publicaciones</a></li>
        <li><a href="#/perfil"><span class="far fa-user-circle"></span>Perfil</a></li>
        <li><a href="" onclick="closeSession()"><span class="far fa-times-circle"></span>Cerrar sesión</a></li>
    </ul>   
</nav>
</header>`
;
};

export default showFirst;