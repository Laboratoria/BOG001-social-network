

import {router} from './router/index.routes'
//import { myFunction } from './lib/index.js';

window.addEventListener('hashchange', () =>{
    router(window.location.hash) //el windonw.location muetra la url
})