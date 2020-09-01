import { uploadImgPost } from '../firebase/firestorage.js' 

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
    <nav class="topNav" id="inicio">
        <ul>
            <li><a href="#/Home"><span class="fas fa-home"></span>Inicio</a></li>
            <li><a href="#/Publicaciones"><span class="far fa-images"></span>Publicaciones</a></li>
            <li><a href="#/Perfil"><span class="far fa-user-circle"></span>Perfil</a></li>
        </ul>
        <ul class="btnCloseSession">
            <li><span class="far fa-times-circle"></span>Cerrar sesión</li>
        </ul>   
    </nav>
    </header>
    
    <div class="container">
    <form id="form-post">
    <h1>Crear una publicación</h1>
    <input type="text" id="title-post" placeholder="Lugar recomendado..." autocomplete="off" autofocus>
    <textarea id="description" cols="40" rows="14" class="form-control" placeholder="Escribe aquí..." autocomplete="off"></textarea>
    <br>
    <input type="file" accept=".png, .jpg, .jpeg" name="subirArchivo" id="file">
    <button type="submit" class="publicar">Guardar</button>
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