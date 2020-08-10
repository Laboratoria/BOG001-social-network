import { editEvent } from '../firebase/post';

const comment = (event, refresh) => {
  const view = `
  <h3 class="">Comentar a ${event.nombre}</h3>
  <textarea class="input__comment" maxlength="100" id="comment" cols="35" rows="3" required></textarea>
    <div>
    <button class="comment--btn" type="submit">Comentar</button>
    <button id="notComment" class="comment--btn" type="button">Cancelar</button>
    </div>
    `;
  const commentForm = document.createElement('form');
  commentForm.setAttribute('class', 'eventOptions');
  commentForm.innerHTML = view;

  const { displayName, uid } = JSON.parse(localStorage.getItem('session')).user;

  const createComment = async () => {
    const commentList = event.commentList || [];
    const commentValue = commentForm.querySelector('.input__comment').value;
    commentList.push({
      comment: commentValue,
      username: displayName,
      useId: uid,
    });
    await editEvent(event.eventId, { commentList });
  };

  commentForm.querySelector('#notComment').addEventListener('click', () => {
    commentForm.querySelector('.input__comment').value = '';
    commentForm.classList.toggle('hide');
  });

  commentForm.addEventListener('submit', (e) => {
    const commentInput = commentForm.querySelector('.input__comment');
    e.preventDefault();
    createComment();
    commentForm.classList.toggle('hide');
    refresh();
    commentInput.innerHTML = '';
  });

  return commentForm;
};

export default comment;
