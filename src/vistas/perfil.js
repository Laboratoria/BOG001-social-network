const profile = () => {
    let elementContainer= document.getElementById('container');
    elementContainer.innerHTML = 
    `<style>
        body {
            background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
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
    
    <div id="containerProfile">
    
    </div>`
}

export default profile;