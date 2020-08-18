import { createWellcomePage } from './home.js';
import { publicationsPage } from './publications.js';
import { myPublicationsPage } from './mypublications.js';
import { createPublicationsPage } from './createpublications.js';
// aqui exportaras las funciones que necesites
let root = document.querySelector("#root");

export const router = (route) => {
  root.innerHTML= '';
  switch(route) {
    case '#/home': {
      return root.appendChild(createWellcomePage());
    }
    case '#/publicaciones':{
      return root.appendChild(publicationsPage());
    }
    case '#/mispublicaciones':{
      return root.appendChild(myPublicationsPage());
    }
    case '#/crearpublicacion':{
      return root.appendChild(createPublicationsPage());
    }
    
  };
};
