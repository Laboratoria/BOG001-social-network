// Este es el punto de entrada de tu aplicacion
import { router } from './routers.js';

router(window.location.href = "#/home");
window.addEventListener("hashchange", () => {
    router(window.location.hash);
})



