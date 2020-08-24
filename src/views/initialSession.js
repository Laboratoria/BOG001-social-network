const initialSession = () => {
  const view = `
<main>
  <header class="header">
    <img src=" ../images/logo.png" alt="logo" class="logo-adopt">
  </header>
  <section class="items-login">
    <img src="../images/user.png" alt="user" class="user">
    <img src="../images/password.png" alt="password" class="password">
     <form action="" class="form"> 
      <input type="text" class="user-placeholder" placeholder="User">
      <div class="line-white-login"></div>
      <input type="password" class="password-placeholder" placeholder="Password">
     </form> 
  </section>
  <a href="#" class"forgot-your-password">Forgot your password?</a>
  <a href="#/postAdoption">Login</a>
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

export default initialSession;