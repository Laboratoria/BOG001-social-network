import { router } from '../FunctionRouter/routers.js';

export const createWellcomePage = () =>{
    const wellcome = `
        <header class="headerHome">
            <div class="containerLogo"><img src="./imagenes/kallpaLogo.svg" class="logo">
            </div>
            <nav class= "navHome"></nav>
        </header>
        <section>
            <div id="containerImage">
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
                <div><p><a href="" id= "linkRegistry">Registrarse</a></p></div>
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
                    <p id="alreadyRegistry"></p>
                </form>
                <div><p><a href="" id= "linkLogin">Iniciar sesión</a></p></div>
            </div>
        </section>
        <footer>
        <div class="contentFooter">
            <div class="logoFooter"><img src="./imagenes/logo-solo.png" alt="">
            </div>
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
        console.log(err);
        if (err.code === "auth/user-not-found"){
            dontRegistry.innerHTML = "Usuario no registrado, por favor regístrese";
        }
        if(err.code === "auth/wrong-password"){
            dontRegistry.innerHTML = "Contraseña incorrecta";
        }
    })
});
    

//Registrar usuario    
    
    const formRegistry = newDiv.querySelector("#formRegistry");

    formRegistry.addEventListener("submit", (e) => {e.preventDefault(); 

    const emailRegistry = newDiv.querySelector("#email-registry").value;
    const passwordRegistry = newDiv.querySelector("#password-registry").value;
    const alreadyRegistry = newDiv.querySelector("#alreadyRegistry");

    console.log(emailRegistry, passwordRegistry);

    auth.createUserWithEmailAndPassword(emailRegistry, passwordRegistry)
    .then(userCredential => { 
        console.log("registrado");
        window.location.href="#/publicaciones"
    })
    .catch (err => {
        console.log("ya registrado");
        alreadyRegistry.innerHTML = "Usuario registrado, por favor inicie sesión";
    })
});
    const linkRegistry = newDiv.querySelector("#linkRegistry");
    linkRegistry.addEventListener("click", (e) => {e.preventDefault();
        const containerLogUp = newDiv.querySelector(".containerLogUp");
        const containerLogIn = newDiv.querySelector(".containerLogIn");
        containerLogUp.style.display= "block";
        containerLogIn.style.display= "none";
    });

    const linkLogin = newDiv.querySelector("#linkLogin");
    linkLogin.addEventListener("click", (e) => {e.preventDefault();
        const containerLogUp = newDiv.querySelector(".containerLogUp");
        const containerLogIn = newDiv.querySelector(".containerLogIn");
        containerLogUp.style.display= "none";
        containerLogIn.style.display= "block";
    });

    return newDiv;

};




