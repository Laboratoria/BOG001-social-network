const Login = () => {
  const view = `
    <div class = "login">
      <img src = "LOGO" alt = "Logo phySport" class = "login__logo">
      <h3 class = "login__title>Inicia sesion</h3>
        <form id = "loginForm" class = "form">
          <input type = "email" id = "loginEmail" class = "form__email" placeholder = "Email" autofocus>   
          <input type = "password" id = "loginPassword" class = "form__password" placeholder = "Password"> 
          <button href = "#/.." id = "loginButton" class = "form__button">
            Ingresar
          </button>
        </form>
      <p class = "login__text"> o inicia sesion con 
        <button class = "button__google></button>
      </p>
      <p class = "login__text"> Nuevo usuario?
        <a href = "#/..">Registrate</a>
      </p>
    </div>
  `;
  return view;
};

export default Login;
