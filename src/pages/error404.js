const error404 = () => {
  const view = `
    <section class="error404">
      <div class="error404-img">
        <img src="../assets/img-error404.png" alt="">
      </div>
      <h1 class="error404-title">Opss! Error 404</h1>      
    </section>  
  `;
  const container = document.createElement('div');
  container.innerHTML = view;
  return container;
};

export default error404;
