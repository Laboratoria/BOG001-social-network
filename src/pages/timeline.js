import { getEvents } from '../firebase/post';

function timeline(valor) {
  const listElement = document.createElement('li');
  listElement.innerHTML = `
  <h1>HOLAAAAAAAAA</H1>
  <p>${valor}</p>
  <p>${valor}</p>`;
  console.log(valor);
  return listElement;
}

const exportData = async () => {
  const querySnapshot = await getEvents();
  querySnapshot.forEach((doc) => {
    const data = doc.data().lugar;
    timeline(data);
  });
};


// console.log(timeline());
exportData();

// console.log(exportData());

export default timeline;
