export const createPost = () => {
    const formPost = document.querySelector("#form-post");
    
    let editStatus = false;
    let id = '';

const deletePost = id => firebase.firestore().collection("publications").doc(id).delete();
const getPublications = (id) => firebase.firestore().collection("publications").doc(id).get();
const updatePost = (id, updatePost) => firebase.firestore().collection("publications").doc(id).update(updatePost);


onGetPost((querySnapshot) => {
    const contenedor = document.getElementById('containerPost');
    contenedor.innerHTML = '';
    querySnapshot.forEach(doc => {
        const postId = doc.data();
        postId.id = doc.id;
        contenedor.innerHTML += 
        `<div class = "cardPost">
        <img src="${doc.data().userPhoto}" id="fotoP" style="max-width: 100%;">
        <h1 id="nombreP"> ${doc.data().userName}</h1>
        <h1 id="titleP">${doc.data().title}</h1>
        <p id="descriptionP">${doc.data().description}</p>
        <br>
        <img src="${doc.data().urlPost}" style="max-width: 100%;"> 
        <br>
        <p class="btn-like"> <i class="fas fa-heart" id="btn-like"></i></p>
        <p id="pLike"><span id="mostrar"></span> me gusta</p>
        <br>
        <button class="btn-edition" data-id="${postId.id}">Editar</button>
        <button class="btn-delete" data-id="${postId.id}">Eliminar</button>
        <p id="toDate">${doc.data().createdAt}</p>
        </div>`;
        
       
        like();

        /*  const likes = () => {
            let contador = 0;
            let btnLike = document.querySelector('#btn-like');
            btnLike.addEventListener('click', () => {
                console.log(btnLike);
                contador++;
                document.getElementById('mostrar').innerHTML = contador;
            })
        }
        likes();*/
    })
})

const btnsDelete = document.querySelectorAll('.btn-delete');
        btnsDelete.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                //console.log(e.target.dataset.id);
                await deletePost(e.target.dataset.id);
            })
        });
        
        const btnsEditions = document.querySelectorAll('.btn-edition');
        btnsEditions.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const doc = await getPublications(e.target.dataset.id);
                console.log(doc.data());
                formPost['title-post'].value = postId.title;
                formPost['description'].value = postId.description;

                const toPost = document.querySelector('.publicar');
                toPost.innerText = 'Actualizar';

                editStatus = true;
                id = doc.id;
            })
        });

formPost.addEventListener('submit', async (e) => {
    e.preventDefault();

    let title = document.getElementById('title-post');
    let description = document.getElementById('description');
    let urlPost = localStorage.getItem('imgNewPost');
    let createdAt = firebase.firestore.FieldValue.serverTimestamp();
    let userPhoto = localStorage.getItem('activeUserPhoto');
    let userName =  localStorage.getItem('activeUserName');
    const userId = auth.currentUser.uid;
    const data = doc.data();
    console.log(createdAt);

    if (!editStatus) {
        await savePublications(title.value, description.value, urlPost, createdAt, userPhoto, userName);
    } 
    else {
        await updatePost(id, {
            title: title.value,
            description: description.value,
        })
        
        editStatus = false;
        id = '';
        const toPost = document.querySelector('.publicar');
        toPost.innerText = 'Publicar';
    }
    
    formPost.reset();
    title.focus();
})
}

const savePublications = (title, description, urlPost, createdAt, userPhoto, userName) =>
        firebase.firestore().collection("publications").doc().set({
            title,
            description,
            urlPost,
            createdAt,
            userPhoto,
            userName,
        })
const onGetPost = (callback) => firebase.firestore().collection('publications').onSnapshot(callback);

export const like =  (id) => {
    
    let userId = firebase.auth().currentUser.uid;
    const btnLike = document.querySelectorAll('.btn-like');
    console.log(btnLike);
    btnLike.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log(e);
            
            firebase.database().ref('posts/' + id).once('value', (postRef) => {
                    const postLike = postRef.val();

                    const objRefLike = postLike.postWithLikes || [];

                    if (objRefLike.indexOf(userId) === -1) {
                        objRefLike.push(userId);
                        postLike.likeCount = objRefLike.length;
                    } else if (objRefLike.indexOf(userId) === 0) {
                        likeButton.disabled = false;
                    }

                    postLike.postWithLikes = objRefLike;
                    let updates = {};
                    updates['/posts/' + id] = postLike;
                    updates['/user-posts/' + userId + '/' + id] = postLike;
                    return firebase.database().ref().update(updates);
                }) 
        })
    }) 
}
