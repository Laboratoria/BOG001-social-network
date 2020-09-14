const showFirst = () => {
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
                <li id="cerrar"><a href="#/Cerrar"><span class="far fa-times-circle"></span>Cerrar sesión</a></li>
            </ul>   
        </div>
    </header>

    <div class="container-VInicio">
    <img src="img/logoHeader.png" id="header">
        <section id="info">
            <h1 id="tituloI">¿Cómo podrías sacarle provecho a esta red social?</h1>
            <p id="texto-inicio">Por medio de <strong>“InstaTravel”</strong> podrás hacer parte de una comunidad compuesta por amantes de la aventura que aman viajar, hacer turismo y lo mejor: Compartir sus experiencias y recomendaciones, lo que le permitirá elegir la mejor opción para sus próximas vacaciones, basadas en sugerencias de hoteles, actividades, gastronomía, y sitios mas representativos del lugar con su respectivo precio.</p>
        </section>
        <img src="img/colombiaturismo.jpg" id="inicio">
    </div>`
};

export default showFirst;