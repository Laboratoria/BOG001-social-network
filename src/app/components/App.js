import {Logo, photosIndex,slogan, login} from "./Logo.js"
import {form} from "./Login.js";

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
    
    
    
    console.log("hola mundo");


}

export function Form(){
    const d = document,
    $root = d.getElementById("root");


    $root.appendChild(form ());
    
}