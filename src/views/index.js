import "../app/components/firebase.js"
import { App,Form, crearCuenta,/*registro*/ creatingPost} from "../app/components/App.js";
import {error} from "../app/components/error.js"
import {printName} from "../app/components/createPost.js"
import {alertCreateAccount} from "../app/components/crearCuenta.js"



const d = document,
  w = window;


//d.addEventListener("hashchange", App);




const Router = async() => {
  console.log(window.location.hash)
  switch (window.location.hash) {
    case '':    
    case '#/':    
    return App();
       
    case '#/login':       
    return Form();
    
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
    break;

    case '#/error': 
    return error();
    

  }

}

w.addEventListener("hashchange", Router);
d.addEventListener("DOMContentLoaded", Router);
