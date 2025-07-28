document.addEventListener('DOMContentLoaded', function() {
  // Initialize quiz functionality once DOM is loaded
  
  function toggleHint(i) {
    document.getElementById(`hint${i}`).classList.toggle('show');
  }

  function getSelectedAnswers(i) {
    return [...document.querySelectorAll(`input[name="q${i}"]:checked`)].map(el => +el.value);
  }

  function submitAnswers() {
    const questions = document.querySelectorAll('.question');
    let score = 0,
        max   = 0;

    questions.forEach((q, i) => {
      const type   = q.dataset.type;
      const answer = q.dataset.answer;
      const pts    = +q.dataset.points;
      const sel    = getSelectedAnswers(i);

      max += pts;

      let correct = false;
      if (type === 'single') {
        correct = sel.length === 1 && sel[0] === +answer;
      } else if (type === 'multi') {
        const right = answer.split(',').map(Number).sort();
        const user  = sel.sort();
        correct = right.length === user.length && right.every((v, j) => v === user[j]);
      }

      q.classList.toggle('correct',   correct);
      q.classList.toggle('incorrect', !correct);

      const ansBox = document.getElementById(`answer${i}`);
      const res    = document.getElementById(`result${i}`);
      ansBox.classList.add('show');

      if (correct) {
        score += pts;
        res.innerHTML = `<span class="result-icon" style="color:#28a745;">✓</span> Correct! (+${pts} ${pts===1?'point':'points'})`;
      } else {
        res.innerHTML = `<span class="result-icon" style="color:#dc3545;">✗</span> Incorrect (0 points)`;
      }
    });

    const pct = Math.round(score / max * 100);
    document.getElementById('score').textContent       = score;
    document.getElementById('total').textContent       = max;
    document.getElementById('percentage').textContent  = pct;
    document.getElementById('scorePoints').textContent = score;
    document.getElementById('maxPoints').textContent   = max;

    const sd = document.getElementById('scoreDisplay');
    sd.style.display = 'block';
    sd.style.color   = pct >= 70 ? '#28a745' : pct >= 50 ? '#ffc107' : '#dc3545';
    sd.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function resetSelections() {
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(el => el.checked = false);
    document.querySelectorAll('.answer, .hint').forEach(el => el.classList.remove('show'));
    document.querySelectorAll('.question').forEach(q => q.classList.remove('correct', 'incorrect'));
    document.getElementById('scoreDisplay').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Set up event listeners
  document.querySelectorAll('.hint-button').forEach(button => {
    const questionId = button.getAttribute('onclick').match(/\d+/)[0];
    button.removeAttribute('onclick');
    button.addEventListener('click', () => toggleHint(questionId));
  });

  document.querySelector('.quiz-footer button:first-child').addEventListener('click', submitAnswers);
  document.querySelector('.quiz-footer .reset-btn').addEventListener('click', resetSelections);
});