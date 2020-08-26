const initialSession = () => {
  const view = `
  <main>
  <header class="header">
    <img src=" ../images/logo.png" alt="logo" class="logo-adopt">
  </header>
  <section class="items-login">
    <img src="../images/user.png" alt="user" class="user">
    <img src="../images/password.png" alt="password" class="password"></img>
</section>
    <form id="signup-form" >
      <input type="text" class="user-placeholder" id="signup-email" placeholder="Email">
      <div class="line-white-login"></div>
      <input type="password" class="password-placeholder" id="signup-password" placeholder="Password">
      <button type="submit" id="button-initial" >Login</button>
      </form>
      <a href="#" class"forgot-your-password" > Forgot your password ?</a >
  <a href="#/formRegister" class="register">Register</a>
  <img src="../images/gmail.png" alt="" class="Gmail">
    <div class="line-white-register"></div>
    <img src="../images/dogs-home.png" alt="dogs-home" class="dogs-home">
</div>
 
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};

export const añadirEventos = () => {
  const signupForm = document.querySelector('#signup-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const signupEmail = document.querySelector('#signup-email').value;
    const signupPassword = document.querySelector('#signup-password').value;
    console.log(signupEmail, signupPassword)
  })
}

export default initialSession;




