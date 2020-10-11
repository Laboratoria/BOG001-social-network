export function error (){
    const $error = document.createElement("img");
    $error.src = "./app/assets/img/error404.png";
    $error.classList.add("error");
    $error.id = ("formContacto");
  

    return $error;
}