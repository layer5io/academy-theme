/**
 * Local Quiz Evaluator — Dev Mode Only
 * A simple client-side quiz evaluator for local development.
 * This is NOT a replacement for the backend evaluator used in production.
 */

window.LocalQuizEvaluator = (function () {

  /**
   * Evaluates a single question against the submitted answer.
   * @param {Object} question - The question object from front matter
   * @param {string|string[]} submittedAnswer - The user's selected answer(s)
   * @returns {{ correct: boolean, marks: number }}
   */
  function evaluateQuestion(question, submittedAnswer) {
    const correctAnswers = Array.isArray(question.answer)
      ? question.answer.map(String)
      : [String(question.answer)];

    const submitted = Array.isArray(submittedAnswer)
      ? submittedAnswer.map(String)
      : [String(submittedAnswer)];

    const isCorrect =
      submitted.length === correctAnswers.length &&
      submitted.every((ans) => correctAnswers.includes(ans));

    return {
      correct: isCorrect,
      marks: isCorrect ? (question.marks || 0) : 0,
    };
  }

  /**
   * Evaluates a full quiz submission.
   * @param {Object[]} questions - Array of question objects
   * @param {Object} answers - Map of question id → submitted answer
   * @returns {{ totalMarks: number, obtainedMarks: number, passed: boolean, results: Object[] }}
   */
  function evaluateQuiz(questions, answers, passPercentage) {
    const threshold = passPercentage || 70;
    let totalMarks = 0;
    let obtainedMarks = 0;
    const results = [];

    questions.forEach((question) => {
      const mark = question.marks || 0;
      totalMarks += mark;

      const submitted = answers[question.id];
      if (submitted === undefined || submitted === null) {
        results.push({
          id: question.id,
          correct: false,
          marks: 0,
          submittedAnswer: null,
          correctAnswer: question.answer,
        });
        return;
      }

      const evaluation = evaluateQuestion(question, submitted);
      obtainedMarks += evaluation.marks;
      results.push({
        id: question.id,
        correct: evaluation.correct,
        marks: evaluation.marks,
        submittedAnswer: submitted,
        correctAnswer: question.answer,
      });
    });

    const percentage = totalMarks > 0 ? (obtainedMarks / totalMarks) * 100 : 0;

    return {
      totalMarks,
      obtainedMarks,
      passed: percentage >= threshold,
      percentage: Math.round(percentage),
      results,
    };
  }

  /**
   * Selects a random subset of questions from the full bank.
   * @param {Object[]} allQuestions
   * @param {number} count
   * @returns {Object[]}
   */
  function selectQuestions(allQuestions, count) {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  return {
    evaluateQuiz,
    evaluateQuestion,
    selectQuestions,
  };
})();