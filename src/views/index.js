import "../app/components/firebase.js"
import { App,Form, crearCuenta,/*registro*/ creatingPost} from "../app/components/App.js";
import {error} from "../app/components/error.js"
import {printName} from "../app/components/createPost.js"
import {alertCreateAccount} from "../app/components/crearCuenta.js"
import {loginListener} from "../app/components/firebase.js"
import {guardarFormulario} from "../app/components/Login.js"
import {cerrar} from "../app/components/createPost.js"



const d = document,
  w = window;


//d.addEventListener("hashchange", App);




const Router = async() => {
  //console.log(window.location.hash)
  switch (window.location.hash) {
    case '':    
    case '#/':    
    return App();
       
    case '#/login':       
    await Form();
    guardarFormulario();
    break;
    
    case '#/crearcuenta':  
    await crearCuenta();
    alertCreateAccount();
    break;

    /*case '#/registro': 
    return registro()
    break;*/
      
    case '#/createPost': 
    await creatingPost();
    printName();
    cerrar()
    break;

    case '#/error': 
    return error();
    

  }

}

w.addEventListener("hashchange", Router);
d.addEventListener("DOMContentLoaded", Router);
loginListener();
