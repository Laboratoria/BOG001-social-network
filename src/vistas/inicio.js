export default () => {
    const shows = `<h1>Bienvenidos</h1>
<p>Esta es nuestro inicio de proyecto</p>`
    const divElement = document.createElement('div');
    divElement.innerHTML = shows;
    return divElement;
};
