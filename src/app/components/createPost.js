import {
    signOffSesion,
    getPost
} from "./firebase.js"

const db = firebase.firestore();

export function createPost() {
    const $createPost = document.createElement("div");
    $createPost.classList.add("contenedor-form");
    $createPost.id = ("postForm");
    $createPost.innerHTML = `
            <div class="cotenSignOff">
            <span class="signOff" id="cerrarSesion">
            Cerrar Sesión
            </span>
            </div>
            <form>
                <div class="writePost">            
                 <h2
                 id="userName"
                 class="writingPost"></h2>
                </div>

            <div class="writePost"> 
                <textarea  id="postDescription"
                class="writingPost">
                </textarea>
            </div>
            <button class="linkIngresar" id="savePost">
                Guardar
            </button>
            </form>
            <div class="writePost" id="paintpostDescription"> 
                
            </div>`;

    //crear un id con lista de post dentro del html

    // const postForm = $createPost.id;
    


    const saveStorePost = (postDescription) =>
        db.collection("posts").doc().set({ //en plural posts por que es una coleccion de posts
            postDescription

        })


    const datosTraidos =  function () { 
        
        getPost()
        .then(respuesta => respuesta.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(JSON.stringify(doc.data().postDescription));
          const paintpostDescription = document.getElementById("paintpostDescription");
          //const savePost = document.getElementById("savePost");
          //savePost.addEventListener("click", () =>{
            paintpostDescription.innerHTML += `<div class = "contenedor-form">
            ${printName()}
            ${doc.data().postDescription}       
            </div>`
            deletePost()
          })
                             
       // }))
      

        )}
    datosTraidos();

    function deletePost(){
        const postForm = document.getElementById("postForm");
        //postForm.reset();
    }

    deletePost();

    $createPost.addEventListener("submit", async (e) => {
        e.preventDefault();

        const postDescription = document.getElementById("postDescription").value;
        console.log(postDescription)

        await saveStorePost(postDescription);

                 

    })

    return $createPost;
}

export const printName = () => {
    const userName = localStorage.getItem("userName");
    console.log(userName)

    document.getElementById("userName").innerHTML = userName;
}

export function cerrar() {
    const cerrarSesion = document.getElementById("cerrarSesion");
    cerrarSesion.addEventListener("click", function () {
        signOffSesion();
        console.log("😂")
    })
}


