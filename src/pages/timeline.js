const timeline = () => {
  const view = `
  <section class="timeline-container">
    <article class="event">
      <div>
        <div class="event__info">
          <div class="user">
            <img src="perfil usuario">
            <h2>Nombre de Usuario</h2>
          </div>
          <div class="sport">
            <img src="deporte">
            <span>HORA</span>
            <span>FECHA</span>
          </div>
        </div>
        <p>
          Lugar:
        </p>
        <p>
          Descripcion
        </p>
      </div>
      <div class="event__interaction">
        <div>
          <img src="asistire">
          <span>Asistire</span>
        </div>
        <div>
          <img src="comentario">
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
