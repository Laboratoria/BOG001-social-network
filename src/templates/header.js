const header = () => {
  const view = `
      <img class="header__logo" src="../assets/logoWhite.png" alt="phySport logo">
  `;
  const container = document.createElement('header');
  container.setAttribute('class', 'header');
  container.innerHTML = view;
  return container;
};

export default header;
