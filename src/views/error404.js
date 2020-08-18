const error404 = () => {
  const view = `
    <div class="server-error">
        <img src="./src/images/image-error" alt="error404" class="image-error">
        <h1 class="error404">
          The Page You Requestd Could Not Be Found
        </h1>
    </div>
    `;
  return error404();
};
export default error404;
