export const form = function(id) {
  const feedbackForm = document.getElementById(id);

  feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();

    feedbackForm.reset();
  }
  );
};
