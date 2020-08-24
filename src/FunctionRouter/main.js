// Este es el punto de entrada de tu aplicacion
import { router } from '../FunctionRouter/routers.js'


window.addEventListener("load", () => {
    router(window.location.href = "#/home")
})

window.addEventListener("hashchange", () => {
    router(window.location.hash);
})



