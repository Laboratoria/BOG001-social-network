const profile = () => {
    let elementContainer= document.getElementById('container');
elementContainer.innerHTML = `
<style>
body {
    background-image: url(img/faro.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
}
</style>
`
}
export default profile();