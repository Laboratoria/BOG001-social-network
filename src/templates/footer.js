const footerTemplate = () => {
  const view = `
    <div class="footerInfo">
      <p>Derechos reservados, hecho con amor 💙</p>
      <p>© Physport 2020</p>
    </div>
  `;
  const container = document.createElement('footer');
  container.setAttribute('class', 'footer');
  container.innerHTML = view;

  return container;
};
export default footerTemplate;
