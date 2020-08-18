
const register = () => {
  const view = `
    <div class= "register">
    <img src="./src/images/logo.png" alt="logo" class="logo-adopt">
    <img src="./src/images/home.png" alt="home" class="home-adopt">
    <input type= "text" class="names">
    <input type= "text" class="last-names">
    <input type= "text" class="email">
    <input type= "text" class="password">
    <button class="singup">Singup</button>
    <img src="./src/images/dog-adopt.png" alt="dog-adopt" class="dog-adopt">
`;
  return register();
};

const signupFormButton = document.createElement("button");
signupFormButton.type = "button";
signupFormButton.innerText = "Sign Up";
signupFormButton.classList.add("signupFormButton");
document.body.appendChild(signupFormButton);
