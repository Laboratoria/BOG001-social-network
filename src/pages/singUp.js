export default () => {
  const view = `
<section class='singUp'>
    <div class='singUp__title'>
        <h1>
            Registrate
        </h1>
    </div>
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
        <h2> 
            <a href='#/...'>G</a>
        </h2>
    </div>
</section>`; return view;
};
