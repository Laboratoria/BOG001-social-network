const singUp = () => {
  const view = `
    <section class='singUp'>
      <h1 class='singUp__title'>
          Registrate
      </h1>      
      <form class='singUp__form'>
          <input id='' type='text' placeholder='username'>
          <input id='' type='email' placeholder='correo'>
          <input id='' type='text' placeholder='Ciudad'>
          <input id='' type='password' placeholder='contraseña'>
          <input id='' type='password' placeholder='verificar contraseña'>
          <button id='' type='submit'><a href='#/...'>Registrar</a></button>
      </form>
      <div class='singUp__google'>
          <h3>o registrate con</h3>
          <h3> 
              <a href='#/...'>G</a>
          </h3>
      </div>
    </section>`;
  return view;
};

export default singUp;
