export const publicationsPage = () =>{
    const viewPlublications = `
        <header class="headerWellcome">
            <div class="containerLogo">
                <img src="./imagenes/kallpaLogo.svg" class="logo">
            </div>
            <nav class= "navWellcome">
            <ul>
                <li><a href="#/publicaciones">Publicaciones</a></li>
                <li><a href="#/mispublicaciones">Mis Publicaciones</a></li>
                <li><a href="#/crearpublicacion">Crear Publicación</a></li>
                <li><a class = "close-sesion" href="#/cerrarSesion">Cerrar Sesión</a></li>
            </ul>
            </nav>
        </header>
        <main class="mainBaground">
            <div class="bagroundMountain"><h2>Publicaciones</h2>
            </div>
            <div><img src="./imagenes/fondo montaña.svg" alt=""></div>
        </main>
        <footer>
            <div class="contentFooter">
                <div><img src="./imagenes/logo-solo.png" alt="">
                </div>
                <div class="copyright">
                    <p>Contáctenos: e-mail:  usuarios@kallpa.com</p>
                    <p>© 2020 - kallpa.com</p>
                </div>     
            </div>
        </footer>
    `;
    const newDivTwo = document.createElement("div");
    newDivTwo.innerHTML = viewPlublications;

    const closeSesion = newDivTwo.querySelector(".close-sesion");
    closeSesion.addEventListener("click", (e) => {e.preventDefault();

    auth.signOut()
    .then( () => {         
        console.log("sesión cerrada");
        window.location.href="#/home"
    })
});
    return newDivTwo;
}