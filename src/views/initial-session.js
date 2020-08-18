const initialSession = () => {
  const view = `
            <div class="initialSession">
                <img src="./src/images/logo.png" alt="logo" class="logo-adopt">
                    <img src=".src/images/user.png" alt="user" class="user">
                        <input type= “text” class="user-paceholder">
                            <img src=".src/images/password.png" alt="password" class="password">
            <div class="line-white-login"></div>
                 <input type= “text” class="password-paceholder">
                       <a href="#" class="forgot-your-password">Forgot your password?</a>
                            <button class="login">LOGIN</button>
                                <a href="#" class="register">Register</a>
            <div class="line-white-register"></div>
                     <img src="./src/images/gmail.png" alt="gmail">
                          <img src="./src/images/dogs-home.png" alt="dogs-home">            
            </div>
    `;
  return initialSession();
};
export default initialSession;

/* const loginButton=document.createElement('button')
 loginButton.type ='button';
 loginButton.innerText='LOGIN';
 loginButton.classList.add('loginButton');
 document.body.appendChild(loginButton);
  
 const registerButton=document.createElement('button')
 registerButton.type ='button';
 registerButton.innerText= 'Register';
 registerButton.classList.add('registerButton');
 document.body.appendChild(registerButton); */
