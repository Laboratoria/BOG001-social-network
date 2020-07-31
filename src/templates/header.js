const header = () => {
  const view = `
    <section class="header">
      <img class="header__logo" src="../assets/logoWhite.png" alt="phySport logo">
    </section>
  `;
  const container = document.createElement('div');
  container.innerHTML = view;
  return container;
};

export default header;
