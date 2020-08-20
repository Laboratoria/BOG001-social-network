import { router } from '../FunctionRouter/routers.js';

export const createWellcomePage = () =>{
    const wellcome = 
        `
        <header class="headerHome">
            <div class="containerLogo"><img src="./imagenes/kallpaLogo.svg" class="logo">
            </div>
            <nav class= "navHome"></nav>
        </header>
        <section>
            <div id="containerImage">
                    <img src="./imagenes/glampingFondoDesktop.png" class="glampingImage">
                <div id="textKallpa">
                    <p>Kallpa te da la bienvenida, en ésta red social podrás encontrar 
                        opciones de actividades extremas y al aire libre y podrás 
                        compartir tus experiencias en nuestra comunidad.
                    </p>
                    
                </div>
            </div>
            <div  class="containerLogIn">
                <div><span>Iniciar sesión</span></div>
                <div class = "containerForm">
                    <form id="formLogin" class= "formLogin">
                        <label>Correo electrónico <input type="email" id="email-login" required>
                        </label>
                        <label>Contraseña<input type="password" id="password-login" minlength="6" required>
                        </label>
                        <button type="submit" id="btnLogin">Enviar</button>
                        <p id = "dont-registry"></p>
                    </form>
                </div>
                <div><p><a href="">Registrarse</a></p></div>
            </div>
            <div class="containerLogUp" >
                <h1>Registrarse</h1>
                <form id="formRegistry">  
                    <label>Nombre completo<input type="text" id="name-registry" required>       
                    </label>
                    <label>Correo electrónico<input type="email" id="email-registry" required>
                    </label>
                    <label>Contraseña<input type="password" id="password-registry" minlength="6" required>
                    </label>
                    <button type="submit" id=btnRegistry >Enviar</button>
                </form>
            </div>
        </section>
        <footer>
        <div class="contentFooter">
            <div class="logoFooter"><img src="./imagenes/logo-solo.png" alt=""></div>
            <div class="copyright">
                <p>Contáctenos: e-mail:  usuarios@kallpa.com</p>
                <p>© 2020 - kallpa.com</p> 
            </div>
        </div>
        </footer>
    `;

    const newDiv = document.createElement('div');
    newDiv.innerHTML = wellcome;

    // Loguear usuario

    const formLogin = newDiv.querySelector("#formLogin");
    
    formLogin.addEventListener("submit", (e) => {e.preventDefault(); 

    const emailLogin = newDiv.querySelector("#email-login").value;
    const passwordLogin = newDiv.querySelector("#password-login").value;
    const dontRegistry = newDiv.querySelector("#dont-registry");

    console.log(emailLogin, passwordLogin);

    auth.signInWithEmailAndPassword(emailLogin, passwordLogin)
    .then(userCredential => { 
        console.log("logueado");
        window.location.href="#/publicaciones"
    })
    .catch (err => {
        console.log("no registrado");
        dontRegistry.innerHTML = "Datos incorrectos o usuario no registrado";
    })
});

//Registrar usuario    
    
    const formRegistry = newDiv.querySelector("#formRegistry");

    formRegistry.addEventListener("submit", (e) => {e.preventDefault(); 

    const emailRegistry = newDiv.querySelector("#email-registry").value;
    const passwordRegistry = newDiv.querySelector("#password-registry").value;

    console.log(emailRegistry, passwordRegistry);

    auth.createUserWithEmailAndPassword(emailRegistry, passwordRegistry)
    .then(userCredential => { 
        console.log("registrado");
        window.location.href="#/publicaciones"
    })
});
    return newDiv;
};




