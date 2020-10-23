import {Logo, photosIndex,slogan, login} from "./Logo.js"
import {form} from "./Login.js";
import {createAccountView, } from "../components/crearCuenta.js"
//import {register} from "../components/registro.js"
import {error} from "./error.js"
import {createPost} from "./createPost.js"

export function App(){
    const d = document,
    $root = d.getElementById("root"),
    $sectionAll = d.createElement("section");
    $root.classList.add("cajaPrincipal");
    $sectionAll.id = "mainBox";


    $root.appendChild(Logo());
    $root.appendChild(photosIndex());
    $root.appendChild(slogan());
    $root.appendChild(login());  
  
}

export function Form(){
    const d = document,
    $root = d.getElementById("root");
    $root.innerHTML = "";

    $root.appendChild(Logo());
    $root.appendChild(slogan());
    $root.appendChild(form ());    
       
}

export function crearCuenta(){
    const d = document,
    $root = d.getElementById("root");
    $root.innerHTML = "";

    $root.appendChild(Logo());
    $root.appendChild(slogan());
    $root.appendChild(createAccountView()); 
    
}
/*export function registro(){
    const d = document,
    $root = d.getElementById("root");
    $root.innerHTML = "";

    $root.appendChild(Logo());
    $root.appendChild(slogan());
    $root.appendChild(register()); 
    
}*/

export function pag404(){
    const d= document,
    $root = d.getElementById("root");
    $root.innerHTML = "";
    $root.appendChild(error());
}

export async function creatingPost(){
    const d = document,
    $root = d.getElementById ("root");
    $root.innerHTML = " ";
    $root.appendChild(createPost());
    
}