import "../app/components/firebase.js"
import { App,Form, crearCuenta,/*registro*/ creatingPost} from "../app/components/App.js";
import {error} from "../app/components/error.js"
import {printName} from "../app/components/createPost.js"



const d = document,
  w = window;


//d.addEventListener("hashchange", App);




const Router = async() => {
  console.log(window.location.hash)
  switch (window.location.hash) {
    case '#/':    
    return App()
    break;
      
    case '#/login':       
    return Form()
    break;

    case '#/crearcuenta':  
    return crearCuenta();
    break;

    /*case '#/registro': 
    return registro()
    break;*/
      
    case '#/createPost': 
    await creatingPost();
    printName();
    break;

    case '#/error': 
    return error();
    break;

  }

}

w.addEventListener("hashchange", Router);
d.addEventListener("DOMContentLoaded", App);
