// Este es el punto de entrada de tu aplicacion

/*import { myFuntion } from './lib/index.js';

myfuntion();

import './styles.css'
console.log("Hola mundo");*/

import {router} from './src/router/index.routes'

window.addEventListener('hashchange', () => {
    router(window.location.hash)
})