function showQuestion() {
  document.querySelector('.heart-container').style.display = 'none';
  document.getElementById('question-section').style.display = 'block';
}

function checkAnswer(answer) {
  if (answer === 'hug') {
    document.getElementById('question-section').style.display = 'none';
    document.getElementById('gallery').style.display = 'block';
  } else {
    alert("Oops! Try again, my love 💕");
  }
}