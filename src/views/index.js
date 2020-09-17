const primera = () => {
  const vistauno =  `
<section class="cajaPrincipal" id="mainBox">
         <img class="logo" src="img/logo-newStyle.png" alt="logo-newStyle">
        
        
          <img class="mainPhoto" src="img/vista1.png" alt="foto modelos">
      
        
            <h2 class="slogan">Un espacio para consentirte, cuidarte y ser más bella</h2>

            <a href="#/login" class="linkIngresar">Ingresar</a>
        
    </section>`;
    
    const divElement = document.createElement('div')
    divElement.innerHTML = primera;
    return divElement;
}
export {primera};
