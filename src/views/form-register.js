const register = () => {
  const view = `
    <div class= "register">
    <img src="../images/logo.png" alt="logo" class="logo-adopt">
    <img src="../images/home.png" alt="home" class="home-adopt">
    <input type= "text" class="names">
    <input type= "text" class="last-names">
    <input type= "text" class="email">
    <input type= "text" class="password">
    <button class="singup">Singup</button>
    <img src="../images/dog-adopt.png" alt="dog-adopt" class="dog-adopt">
`;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};

export default register;
