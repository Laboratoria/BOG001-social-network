const initTimeline = () => {
  const view = `
    <section class="error404">
      <div class="error404-img">
        <img src="../assets/barbell.png" alt="">
      </div>
      <div class="error404-img">
        <img src="../assets/team.png" alt="">
      </div>
      <div class="error404-img">
        <img src="../assets/sports-and-competition.png" alt="">
      </div>
      <div class="error404-img">
        <img src="../assets/soccer.png" alt="">
      </div>
      </section>
    <h1 class="error404-title">Agrega tu primer evento</h1>
    `;
  const container = document.createElement('div');
  container.innerHTML = view;
  return container;
};

export default initTimeline;
