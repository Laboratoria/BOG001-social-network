const timeline = () => {
  const view = `
  <section class="timeline-container">
    <article class="event">
      <div>
        <div>
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
      <div>
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

  <section>
    <nav>
      <ul>
        <li>
          <a href="">
            <img src="imagen del deporte">
          </a>
        </li>
      </ul>
    </nav>
  </section>
  `;
  return view;
};

export default timeline;
