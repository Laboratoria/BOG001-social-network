const db = firebase.firestore();

export function createPost() {
    const $createPost = document.createElement("div");
    $createPost.classList.add("contenedor-form");
    $createPost.id = ("postForm");
    $createPost.innerHTML = `
            <form>
                <div class="writePost">            
                <label for="nameTitle"></label>
                <input
                 type="text"
                 id="nameTitle"
                 class="writingPost"
                 placeholder="Nombre" 
                 autofocus> <!--esto es para que cuando el usuario visite la pg el cursor este posicionado en el input-->
                </div>

            <div class="writePost"> 
                <textarea  id="postDescription"
                rows="6" class="writingPost"
                placeholder = "Post">
                </textarea>
            </div>
            <button class="linkIngresar" id="savePost">
                Guardar
            </button>
            </form>`;


    const postForm = $createPost.id;
        
    
    const saveStorePost = (nameTitle, postDescription) =>
        db.collection("posts").doc().set({ //en plural posts por que es una coleccion de posts
            nameTitle,
            postDescription
        })



    $createPost.addEventListener("submit", async (e) => {
        e.preventDefault();
        const nameTitle = document.getElementById("nameTitle").value;
        const postDescription = document.getElementById("postDescription").value

        await saveStorePost(nameTitle, postDescription);

        //postForm.reset(); 

        console.log("un logro mas")
    })





    return $createPost;
}