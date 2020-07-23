const login = () => {
  const view = `
    <section class = "login">      
      <h3 class = "login__title"> Inicia sesion</h3>
      <form id = "loginForm" class = "form">
          <input type = "email" id = "loginEmail" class = "form__email" placeholder = "Email" autofocus>   
          <input type = "password" id = "loginPassword" class = "form__password" placeholder = "Password"> 
          <button href = "#/.." id = "loginButton" class = "form__button">
            Ingresar
          </button>
        </form>
      <h3 class = "login__text"> o inicia sesion con 
        <a href="#/..." id="" class = "button__google">G</a>
      </h3>
      <h3 class = "login__text"> ¿Nuevo usuario?
        <a href = "#/.." id="" class="">Registrate</a>
      </h3>
    </section>
  `;
  return view;
};

export default login;
