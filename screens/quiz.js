function renderQuizScreen() {
  const profile = JSON.parse(localStorage.getItem("alakhe_profile")) || {};

  return `
    <section class="quiz-screen">
      <h1>Career Quiz</h1>
      <p class="quiz-sub">
        ${
          profile.grade && profile.interest
            ? `You are in ${profile.grade} and interested in ${profile.interest}. Let’s guide you further.`
            : `Answer these questions so we can guide you better.`
        }
      </p>

      <div class="form-card">
        <label>What kind of future excites you most?</label>
        <select id="quizFuture">
          <option value="">Select</option>
          <option>Helping people</option>
          <option>Building or fixing things</option>
          <option>Using technology</option>
          <option>Running a business</option>
          <option>Working with nature and food production</option>
          <option>Teaching and guiding others</option>
        </select>

        <label>What kind of work environment do you prefer?</label>
        <select id="quizEnvironment">
          <option value="">Select</option>
          <option>Office or professional setting</option>
          <option>Outdoor / field work</option>
          <option>Hospital or care setting</option>
          <option>School or training environment</option>
          <option>Workshop / practical work</option>
          <option>Online / digital work</option>
        </select>

        <label>What would you like to become?</label>
        <select id="quizPath">
          <option value="">Select</option>
          <option>Professional in a career</option>
          <option>Business owner</option>
          <option>Both career and business owner</option>
        </select>

        <button class="primary-btn" onclick="saveQuizAnswers()">
          Save Quiz Answers
        </button>
      </div>
    </section>
  `;
}