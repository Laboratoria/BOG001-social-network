const start = () => {
  const view = `
    <section class = "start">
      <div class="start__container">
        <img src = "./assets/logoWhite.png" alt = "Logo phySport" class = "start__logo">
        <h4 class = "start__slogan">Find a game, win friends</h4>
      </div>
    </section>
  `;
  const container = document.createElement('div');
  container.innerHTML = view;
  return container;
};

export default start;
