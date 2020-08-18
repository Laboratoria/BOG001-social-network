
 const initialSession =()=>{
    const view = `
        <div class "initialSession">
            <img src="./src/images/logo.png" alt="logo" class="logo-adopt">
            <img src=".src/images/user.png" alt="user" class="user">
            <input type="text" class="user-placeholder">
            <img src=".src/images/password.png" alt="password" class="password">
        <div class="line-white-login"></div>
            <input type="text" class="password-placeholder">
            <a href="#" class"forgot-your-password">Forgot your password?</a>
            <button class="login">LOGIN</button>
            <a href="#" class="register">Register</a>
        <div class="line-white-register"></div>
        </div>
        `
}




 const loginButton=document.createElement('button')
 loginButton.type ='button';
 loginButton.innerText='LOGIN';
 loginButton.classList.add('loginButton');
 document.body.appendChild(loginButton);

 const registerButton=document.createElement('button')
 registerButton.type ='button';
 registerButton.innerText= 'Register';
 registerButton.classList.add('registerButton');

 document.body.appendChild(registerButton);

