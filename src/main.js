// Este es el punto de entrada de tu aplicacion

import initialSession from "./views/initial-session.js";
import formRegister from "./views/form-register.js";
import postAdoption from "./views/post-adoption.js";
import adopt from "./views/adopt.js";
import error404 from "./views/error404.js";
//import { router } from "./routes";

const routes = {
  "/": initialSession,
  "/:id": formRegister,
  "/:id": postAdoption,
  "/:id": adopt,
  "/:id": error404,
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  /* header.innerHTML = await header(); */
};
window.addEventListener("load", router);
