import { editEvent } from '../firebase/post';
import printComment from './printComment';

const comment = (event) => {
  const view = `
    <form class="eventOptions" id="form__comment">
      <h3 class="">Comentar a ${event.nombre}</h3>
      <textarea class="input__comment" maxlength="100" id="comment" cols="35" rows="3" required></textarea>
      <div>
        <button class="comment--btn" type="submit">Comentar</button>
        <button id="notComment" class="comment--btn" type="button">Cancelar</button>
      </div>
    </form>`;
  const commentForm = document.createElement('div');
  commentForm.innerHTML = view;

  const createComment = () => {
    const commentList = event.comment || [];
    const commentValue = commentForm.querySelector('.input__comment').value;
    const { displayName, uid } = JSON.parse(localStorage.getItem('session')).user;
    commentList.push({
      comment: commentValue,
      username: displayName,
      useId: uid,
    });
    editEvent(event.eventId, { commentList });
  };

  commentForm.querySelector('#notComment').addEventListener('click', () => {
    commentForm.querySelector('.input__comment').value = '';
    commentForm.querySelector('#form__comment').classList.toggle('hide');
    printComment(event);
  });

  commentForm.querySelector('#form__comment').addEventListener('submit', (e) => {
    e.preventDefault();
    createComment();
    commentForm.querySelector('#form__comment').classList.toggle('hide');
    printComment(event);
    commentForm.querySelector('.input__comment').value = '';
  });

  return commentForm;
};

export default comment;
