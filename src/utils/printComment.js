const printComment = (event) => {
  const commentContainer = document.createElement('article');
  const comments = event.comment || [];

  comments.forEach((com) => {
    const commentTemplate = document.createElement('p');
    commentTemplate.setAttribute('class', 'flaticon-remove delete__comment');
    commentTemplate.innerText = `${com.username}: ${com.comment}`;
    commentContainer.insertAdjacentElement('beforeend', commentTemplate);
  });

  // document.querySelector('.delete__comment').addEventListener('click', () => {
  //   console.log('aqui deberia eliminar pero nos e me ocurre como');
  // });
  return commentContainer;
};

export default printComment;
