const classesToRemove = [
  'feedback-container-shown',
  'feedback-container-error',
  'feedback-container-success',
];

const hideFeedbackMessage = () => {
  const feedbackContainer = document.querySelector('.feedback-container');
  if (feedbackContainer) {
    feedbackContainer.querySelector('p').innerText = '';
    feedbackContainer.classList.remove(...classesToRemove);
  }
};

export const setFeedbackHidingHandler = () => {
  const feedbackContainer = document.querySelector('.feedback-container');
  if (feedbackContainer) {
    feedbackContainer.querySelector('button').addEventListener('click', hideFeedbackMessage);
  }
};
