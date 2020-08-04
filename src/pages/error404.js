const error404 = () => {
  const view = `
  <h1>
    Error 404
  </h1>
  `;

  const container = document.createElement('div');
  container.innerHTML = view;
  return container;
};

export default error404;
