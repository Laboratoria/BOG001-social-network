const menu = () => {
  const view = `
    <ul>
      <li>
        <img>
      </li>
    </ul>
  `;
  const container = document.createElement('nav');
  container.innerHTML = view;
  return container;
};

export default menu;
