const headerEvent = () => {
  const view = `
        <section class="header">
          <span class="flaticon-list icons"></span>
          <img class="header__logo" src="../assets/logoWhite.png" alt="phySport logo">
          <a href="#/timeline"><span class="flaticon-close icons"></span></a>
        </section>
      `;
  const container = document.createElement('div');
  container.innerHTML = view;
  return container;
};

export default headerEvent;
