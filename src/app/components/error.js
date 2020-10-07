export function error (){
    const $error = document.createElement("img");
    $error.classList.add("contenedor-form");
    $error.id = ("formContacto");
    $error.innerHTML = `
    
        const $img = document.createElement("img");
        $img.alt = "página error";
        $img.src = "./app/assets/img/error404.png";
        $img.classList.add("error");
        
        return $img;         
        
             
    `;

    return $error;
}