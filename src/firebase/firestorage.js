//Function de firestorage
export const uploadImg = (file, uid) => {
    const refStorage = firebase.storage().ref(`imgsPosts/${uid}/${file.name}`)
    const task = refStorage.put(file)

/*task.on(
    'state_changed',
    snapshot => {
      const porcentaje = snapshot.bytesTransferred / snapshot.totalBytes * 100
    console.log(porcentaje)
    },
    err => {
    console.log(err)
    },*/

    () => {
    task.snapshot.ref
        .getDownloadURL()
        .then(url => {
        localStorage.setItem('imgNewPost', url)
        })
        .catch(err => {
        console.log('err')
        })
    })
}