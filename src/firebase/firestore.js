const formPost = document.querySelector("#form-post");

    let editStatus = false;
    let id = '';

    export const savePublications = (title, description, urlPost, createdAt, photo, name) =>
        firebase.firestore().collection("publications").doc().set({
            title,
            description,
            urlPost,
            createdAt,
            photo,
            name,
        })

    export const onGetPost = async (callback) => firebase.firestore().collection('publications').onSnapshot(callback);
    const deletePost = id => firebase.firestore().collection("publications").doc(id).delete();
    const getPublications = (id) => firebase.firestore().collection("publications").doc(id).get();
    const updatePost = (id, updatePost) => firebase.firestore().collection("publications").doc(id).update(updatePost);
    /* const startLikes =  firebase.firestore().collection("publications").doc(`${Math.random()}`);
    const storyLikes = firebase.firestore().collection("publications").doc('start');
    const batch = firebase.firestore().batch(); */


    onGetPost ((querySnapshot) => {
        const contenedor = document.getElementById('containerPost');
        contenedor.innerHTML = '';
        querySnapshot.forEach(doc => {
            const postId = doc.data();
            postId.id = doc.id;
            contenedor.innerHTML +=
        `<div class = "cardPost">
        <img src="${doc.data().photo}" id="fotoP" style="max-width: 100%;">
        <h1 id="nombreP">${doc.data().name}</h1>
        <h1 id="titleP">${doc.data().title}</h1>
        <p id="descriptionP">${doc.data().description}</p>
        <img src="${doc.data().urlPost}" style="max-width: 100%;"> 
        <br>
        <i class="fas fa-heart btn-like"></i>
        <p id="pLike"><span id="mostrar"></span> me gusta</p>
        <br>
        <button class="btn-edition" data-id="${postId.id}">Editar</button>
        <button class="btn-delete" data-id="${postId.id}">Eliminar</button>
        <p>${doc.data().createdAt}</p>
        </div>`;

            const btnsDelete = document.querySelectorAll('.btn-delete');
            btnsDelete.forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    //console.log(e.target.dataset.id);
                    await deletePost(e.target.dataset.id);
                })
            });

        })
    })

export const edit = () => {
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
        let photo = localStorage.getItem('activeUserPhoto');
        let name = localStorage.getItem('activeUserName');
        let createdAt = firebase.firestore.FieldValue.serverTimestamp();
        //console.log(createdAt);

        if (!editStatus) {
            await savePublications(title.value, description.value, urlPost, createdAt, photo, name);
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

export const like = async (id) => {
    
    let userId = firebase.auth().currentUser.uid;
    const btnLike = document.querySelectorAll('.btn-like');
    console.log(btnLike);
    btnLike.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log(e);
            firebase.database().ref('posts/' + id)
                .on('value', (postRef) => {
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

/* const increment = firebase.firestore.FieldValue.increment(1);
storyLikes.update({count: increment});
const decrement = firebase.firestore.FieldValue.increment(-1);
storyLikes.update({count: decrement});
batch.set(storyRef, { title: 'New Story!' });
batch.set(statsRef, { storyCount: increment }, { merge: true });
batch.commit(); */