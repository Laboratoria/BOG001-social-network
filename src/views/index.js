import { App,Form} from "../app/components/App.js";


const d = document,
  w = window;


//d.addEventListener("hashchange", App);




const Router = (route) => {
  //console.log("quierocambiar")
  switch (route) {
    case '#/':    
    return App
      
    case '#/login':       
    return Form

        
      

  }

}

w.addEventListener("hashchange", Form);
w.addEventListener("hashchange", Router);
d.addEventListener("DOMContentLoaded", App);
