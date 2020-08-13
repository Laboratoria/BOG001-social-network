import { storage } from './init';

export const fileRegister = (file, fileName) => {
  const refStorage = storage.ref('images').child(fileName);
  const uploadTask = refStorage.put(file);

  uploadTask.on('state_changed', null,
    (error) => {
      console.log('Error al subir el archivo', error)
    },
    () => {
      console.log('subida')
    });
};

export const fileDownload = (fileName) => {
  const refStorage = storage.ref('images').child(fileName);
  refStorage.getDownloadURL().then((url) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = () => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  }).catch((error) => {
    console.log(error);
  });
};
