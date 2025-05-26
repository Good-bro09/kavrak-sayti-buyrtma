<script>
  const feedbackForm = document.getElementById('feedback-form');
  const feedbacks = document.getElementById('feedbacks');

  feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    const div = document.createElement('div');
    div.className = 'feedback-item';
    div.innerHTML = <strong>${name}</strong>: ${comment};
    feedbacks.prepend(div);

    feedbackForm.reset();
  });
</script>