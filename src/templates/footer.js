const footerTemplate = () => {
  const view = `
  <footer class="footer">
    <div class="footerInfo">
      <p>Derechos reservados, hecho con amor 💙</p>
      <p>© Physport 2020</p>
    </div>
  </footer>
  `;
  const container = document.createElement('div');
  container.innerHTML = view;
  return container;
};
export default footerTemplate;
