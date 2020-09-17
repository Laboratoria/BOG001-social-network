import primera from '../views/index.js'
const contenido = document.getElementById("root")
export const router

const router = (ruta) => {
switch(ruta){
    case '#/':{
       contenido.appendChild(primera());
    }
}
}