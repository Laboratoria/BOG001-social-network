//esta pagina es el index es decir la presentacion html la primera vista

export function Logo(){
    const $img = document.createElement("img");
    $img.alt = "Logo de New Style";
    $img.src = "./app/assets/img/logo-newStyle.png";
    $img.classList.add("logo");
    
    return $img;         
    
};

export function photosIndex(){
 const $photosIndex = document.createElement("img");
 $photosIndex.alt = "Foto modelos New Style";
 $photosIndex.src = "./app/assets/img/vista1.png";
 $photosIndex.classList.add("mainPhoto");

 return $photosIndex;

};

export function slogan(){
    const $h2 = document.createElement("h2");
    $h2.innerHTML = "Un espacio para consentirte, cuidarte y ser más bella";
    $h2.classList.add("slogan");

    return $h2;
}


export function login(){
    const $login = document.createElement("a"); //con A se esta creando el vinculo <a href
    $login.innerHTML = "Ingresar";
    $login.href = "#/login" ;
    $login.classList.add("linkIngresar");

    return $login;
}