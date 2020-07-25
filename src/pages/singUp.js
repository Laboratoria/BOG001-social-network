const singUp = () => {
  const view = `
  <section class='singUp'>
  <h1 class='singUp__title'>
      Registrate
  </h1>      
  <form class='singUp__form'>
      <input id='' type='text' placeholder='username'>
      <input id='' type='email' placeholder='correo'>
      <input id='' type='text' placeholder='ciudad'>
      <input id='' type='password' placeholder='contraseña'>
      <button id='' type='submit'>Registrar</button>
  </form>
  <div class='singUp__google'>
      <h3>o registrate con</h3>
      <a href='#/...'><img class="google-icon" src="./assets/seo-and-web.png" alt=""></a>
  </div>
</section>`;
  return view;
};

export default singUp;
