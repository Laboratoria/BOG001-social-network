import "../app/components/firebase.js"
import { App,Form, crearCuenta,registro } from "../app/components/App.js";




const d = document,
  w = window;


//d.addEventListener("hashchange", App);




const Router = () => {
  console.log(window.location.hash)
  switch (window.location.hash) {
    case '#/':    
    return App()
    break;
      
    case '#/login':       
    return Form()
    break;

    case '#/crearcuenta':  
    return crearCuenta()
    break;

    case '#/registro': 
    return registro()
    break;
      

  }

}

w.addEventListener("hashchange", Router);
d.addEventListener("DOMContentLoaded", App);
