const login = () => {
  const view = `
    <section class = "login">
      <div class="login__container">
        <img src = "./assets/logoWhite.png" alt = "Logo phySport" class = "login__logo">
        <h3 class = "login__title"> Inicia sesión</h3>
      </div>
      <form id = "loginForm" class = "form">
        <input type = "email" id = "loginEmail" class = "form__email" placeholder = "Email" autofocus>   
        <input type = "password" id = "loginPassword" class = "form__password" placeholder = "Password"> 
        <button href = "#/.." id = "loginButton" class = "form__button">
          Ingresar
        </button>
      </form>    
      <h3 class = "login__text"> o inicia sesión con 
        <a href="#/..." id="" class = "login__google">G</a>
      </h3>     
      <h3 class = "login__text"> ¿Nuevo usuario?
        <a href = "#/.." id="" class="login__register">Registrate</a>
      </h3>    
    </section>
  `;
  return view;
};

export default login;
