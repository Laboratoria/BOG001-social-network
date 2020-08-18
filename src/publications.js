export const publicationsPage = () =>{
    const viewPlublications = `
        <header class="headerWellcome">
            <div>
            <img src="./imagenes/kallpaLogo.svg">
            </div>
            <nav>
            <ul>
                <li><a href="#/publicaciones">Publicaciones</a></li>
                <li><a href="#/mispublicaciones">Mis Publicaciones</a></li>
                <li><a href="#/crearpublicacion">Crear Publicación</a></li>
                <li><a href="#/cerrarSesion">Cerrar Sesión</a></li>
            </ul>
            </nav>
        </header>
        <main>
            <div><h2>Publicaciones</h2>
            </div>
            <div><img src="./imagenes/fondo montaña.svg" alt=""></div>
        </main>
        <footer>
            <div class="contentFooter">
            <div><img src="./imagenes/logo-solo.png" alt=""></div>
            <div class="copyright">
                <p>Contáctenos: e-mail:  usuarios@kallpa.com</p>
                <p>© 2020 - kallpa.com</p> 
            </div>
            <div>
                <img src="./imagenes/facebook.png" alt="">
                <img src="./imagenes/instagram.png" alt="">
                <img src="./imagenes/twitter.png" alt="">
            </div>
            </div>
        </footer>
    `;
    const newDivTwo = document.createElement("div");
    newDivTwo.innerHTML = viewPlublications;
    return newDivTwo;
}