const start = () => {
  const view = `
    <div class="start__container">
      <img src="./assets/logoWhite.png" alt="Logo phySport" class="start__logo">
      <h4 class="start__slogan">Find a game, win friends</h4>
    </div>
  `;
  const container = document.createElement('section');
  container.setAttribute('class', 'start');
  container.innerHTML = view;
  return container;
};

export default start;
