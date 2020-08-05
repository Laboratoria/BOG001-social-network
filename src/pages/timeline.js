import { getEvents } from '../firebase/post';

function timeline(valor) {
  const listElement = document.createElement('li');
  listElement.innerHTML = `
    <h1>HOLAAAAAAAAA</H1>
    <p>${valor.lugar}</p>
    <p>${valor.descripcion}</p>`;
  console.log(valor);
  return listElement;
}
// console.log(timeline());

const exportData = async () => {
  const querySnapshot = await getEvents();
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    console.log(timeline(data));
  });
};

exportData();
export default timeline;

// console.log(exportData());
