import { uploadImgPost } from '../firebase/firestorage.js'
import {  } from '../firebase/firestorage.js'

//topnav <iframe src="/src/topNav/topNav.html"></iframe>

const publications = () => {
    let elementContainer= document.getElementById('container');
    elementContainer.innerHTML = 
    `<style>
    body {
        background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
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
    
    <div class="container-form">
        <form id="form-post">
            <h1>Crear una publicación</h1>
            <input type="text" id="title-post" placeholder="Lugar recomendado..." autocomplete="off" autofocus>
            <textarea id="description" cols="36" rows="14" class="form-control" placeholder="Escribe aquí..." autocomplete="off"></textarea>
            <br>
            <input type="file" accept=".png, .jpg, .jpeg" name="subirArchivo" id="file"><br>   
            <meter min="10" max="100" low="30" high="75" value=""></meter>
            <br>
        <button type="submit" class="publicar">Publicar</button>
        </form>
    </div>
    <div id="containerPost">
    
    </div>`

    const btnUploadFile = document.querySelector("#file");
    
    btnUploadFile.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const user = firebase.auth().currentUser;
    uploadImgPost(file, user.uid);
    });
};

export default publications;