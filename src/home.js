import { router } from './routers.js';

export const createWellcomePage = () =>{
    const wellcome = 
        `<div>
        <header class="headerHome">
            <div class="socialNetworkLogo"><img src="./imagenes/kallpaLogo.svg">
            </div>
            <nav class= "navHome"></nav>
        </header>
        <main>
            <div id="textKallpa"><p>Kallpa te da la bienvenida, en ésta red social podrás encontrar 
            opciones de actividades extremas y al aire libre y podrás 
            compartir tus experiencias en nuestra comunidad.</p>
            </div>
            <div id="glamping"><img src="./imagenes/glampingFondoDesktop.png" class="glampingImagen">
            </div>
            <h1>Iniciar sesión</h1>
            <form id="formLogin" class= "formLogin">
                <label>Correo electrónico<input type="email">
                </label>
                <label>Contraseña<input type="password">
                </label>
                <button type="submit" id="btnLogin">Enviar</button>
                <p><a href="">Registrarse</a></p>
            </form>
            <h1>Registrarse</h1>
            <form id="formRegistry">  
                <label>Nombre completo<input type="text">       
                </label>
                <label>Correo electrónico<input type="email">
                </label>
                <label>Contraseña<input type="password">
                </label>
                <button type="submit" id=btnRegistry >Enviar</button>
            </form>
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
    const newDiv = document.createElement('div');
    newDiv.innerHTML = wellcome;
    const formLogin = newDiv.querySelector("#formLogin");
    formLogin.addEventListener("submit", (e) => {e.preventDefault(); window.location.href="#/publicaciones"});
    const formRegistry = newDiv.querySelector("#formRegistry");
    formRegistry.addEventListener("submit", (e) => {e.preventDefault(); window.location.href="#/publicaciones"});
    return newDiv;

};




