const timeline = () => {
  const view = `
  <section class="timeline-container">
    <article class="event">
      <div class="event__info">
        <div class="event__upper--container">
          <div class="user">
            <img src="../assets/perfil.png">
            <h2>Nombre de Usuario</h2>
          </div>
          <div class="sport">
            <img src="../assets/balon.png">
            <span>HORA</span>
            <span>FECHA</span>
          </div>
        </div>
        <p><span class="event__subtitle">Lugar:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eaque ipsum non</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eaque ipsum non fugit aspernatur praesentium ab qui dolorem.</p>
      </div>
      <div class="event__interaction">
        <div>
          <span class="flaticon-strong icons"></span> 
          <span>Asistire</span>
        </div>
        <div>
          <span class="flaticon-speech-bubble icons"></span>
          <span>Comentar</span>
        </div>
      </div>
    </article>
  </section>
  `;
  const container = document.createElement('div');
  container.innerHTML = view;
  return container;
};

export default timeline;
