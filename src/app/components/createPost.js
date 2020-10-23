const db = firebase.firestore();

export function createPost() {
    const $createPost = document.createElement("div");
    $createPost.classList.add("contenedor-form");
    $createPost.id = ("postForm");
    $createPost.innerHTML = `
            <form>
                <div class="writePost">            
                 <H2
                 id="userName"
                 class="writingPost"> </H2>
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
        
              
        const postDescription = document.getElementById("postDescription").value

        await saveStorePost(userName, postDescription);

        //postForm.reset(); 

        console.log("un logro mas")
    })


    return $createPost;
}

export const printName = () => {
 const userName = localStorage.getItem("userName");
console.log(userName)
          
document.getElementById("userName").innerHTML = userName;
}