export const createPublicationsPage = () =>{
    const viewCreatePlublications = `
        <header class="headerWellcome">
            <div>
            <img src="./imagenes/kallpaLogo.svg">
            </div>
            <nav>
            <ul>
                <li><a href="#/publicaciones">Publicaciones</a></li>
                <li><a href="#/mispublicaciones">Mis Publicaciones</a></li>
                <li><a href="#/crearpublicacion">Crear Publicación</a></li>
                <li><a class = "close-sesion" href="#/cerrarSesion">Cerrar Sesión</a></li>
            </ul>
            </nav>
        </header>
        <main>
            <div><h2>Crear Publicaciones</h2>
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
    const newDivFour = document.createElement("div");
    newDivFour.innerHTML = viewCreatePlublications;

    const closeSesion = newDivFour.querySelector(".close-sesion");
    closeSesion.addEventListener("click", (e) => {e.preventDefault();

    auth.signOut()
    .then( () => { 
        console.log("sesión cerrada");
        window.location.href="#/home"
    })
});
    return newDivFour;
}