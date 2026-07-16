function generateSuggestedObjective(profile, topCareer) {
  if (!profile.interest && !topCareer) {
    return "I am a motivated learner who is building my future through education, personal growth, and career exploration.";
  }

  return `I am a motivated learner interested in ${profile.interest || "different fields"} and I am working towards becoming a ${topCareer || "professional in my chosen field"}. I am committed to developing my knowledge, skills, and readiness for future study, work, or business opportunities.`;
}

function generateSuggestedSkills(profile, quiz) {
  const skills = [];

  if (profile.interest === "Technology") {
    skills.push("Problem-solving", "Digital literacy", "Creativity");
  }

  if (profile.interest === "Health") {
    skills.push("Care for others", "Communication", "Responsibility");
  }

  if (profile.interest === "Business") {
    skills.push("Planning", "Communication", "Basic money awareness");
  }

  if (profile.interest === "Education") {
    skills.push("Leadership", "Communication", "Patience");
  }

  if (profile.interest === "Creative Arts") {
    skills.push("Creativity", "Visual thinking", "Communication");
  }

  if (profile.interest === "Farming & Agriculture") {
    skills.push("Practical skills", "Observation", "Work ethic");
  }

  if (quiz.future === "Helping people") skills.push("Empathy");
  if (quiz.future === "Using technology") skills.push("Technology confidence");
  if (quiz.future === "Running a business") skills.push("Initiative");

  return [...new Set(skills)].join(", ");
}

function renderCVScreen() {
  const register = JSON.parse(localStorage.getItem("alakhe_register")) || {};
  const profile = JSON.parse(localStorage.getItem("alakhe_profile")) || {};
  const marks = JSON.parse(localStorage.getItem("alakhe_marks")) || {};
  const quiz = JSON.parse(localStorage.getItem("alakhe_quiz")) || {};
  const cv = JSON.parse(localStorage.getItem("alakhe_cv")) || {};
  const matchedCareers = typeof getMatchedCareers === "function" ? getMatchedCareers() : [];

  const topCareer = matchedCareers.length ? matchedCareers[0].name : "Career Path";
  const suggestedObjective = generateSuggestedObjective(profile, topCareer);
  const suggestedSkills = generateSuggestedSkills(profile, quiz);

  const currentObjective = cv.objective || suggestedObjective;
  const currentSkills = cv.skills || suggestedSkills;
  const currentActivities = cv.activities || "";
  const currentAchievements = cv.achievements || "";

  return `
    <section class="cv-screen">
      <h1>My CV Builder</h1>
      <p class="cv-sub">Build your CV step by step as you grow.</p>

      <div class="cv-form-card">
        <h3>Edit CV Content</h3>

        <label>Career Objective</label>
        <textarea id="cvObjective" oninput="updateCVPreview()" placeholder="Write your career goal...">${currentObjective}</textarea>

        <label>Skills</label>
        <textarea id="cvSkills" oninput="updateCVPreview()" placeholder="Example: Communication, teamwork, computer skills">${currentSkills}</textarea>

        <label>Activities & Experience</label>
        <textarea id="cvActivities" oninput="updateCVPreview()" placeholder="Example: School projects, helping at home, volunteering, sports, clubs">${currentActivities}</textarea>

        <label>Achievements</label>
        <textarea id="cvAchievements" oninput="updateCVPreview()" placeholder="Example: Certificates, awards, school achievements">${currentAchievements}</textarea>

        <div class="cv-actions">
          <button class="primary-btn" onclick="saveCV()">Save CV</button>
          <button class="secondary-btn" onclick="previewCV()">Preview CV</button>
          <button class="primary-btn" onclick="downloadCVasPDF()">Download PDF</button>
        </div>
      </div>

      <div id="cvPreviewArea" class="cv-document">
        <div class="cv-doc-header">
          <h2>${register.firstName || ""} ${register.lastName || ""}</h2>
          <p>
            ${register.phoneNumber || ""}
            ${register.emailAddress ? " | " + register.emailAddress : ""}
          </p>
          <p>
            ${register.location || ""}
            ${register.districtProvince ? ", " + register.districtProvince : ""}
          </p>
        </div>

        <div class="cv-doc-section">
          <h3>Career Objective</h3>
          <p id="previewObjective">${currentObjective}</p>
        </div>

        <div class="cv-doc-section">
          <h3>Education</h3>
          <p><strong>School:</strong> ${register.school || "-"}</p>
          <p><strong>Grade:</strong> ${register.grade || "-"}</p>
        </div>

        <div class="cv-doc-section">
          <h3>Subjects</h3>
          <ul>
            <li>Mathematics: ${marks.math || "-"}</li>
            <li>Science: ${marks.science || "-"}</li>
            <li>English: ${marks.english || "-"}</li>
            <li>Life Sciences: ${marks.lifeSciences || "-"}</li>
            <li>Accounting: ${marks.accounting || "-"}</li>
            <li>Agricultural Science: ${marks.agri || "-"}</li>
          </ul>
        </div>

        <div class="cv-doc-section">
          <h3>Skills</h3>
          <p id="previewSkills">${currentSkills}</p>
        </div>

        <div class="cv-doc-section">
          <h3>Activities & Experience</h3>
          <p id="previewActivities">${currentActivities || "-"}</p>
        </div>

        <div class="cv-doc-section">
          <h3>Achievements</h3>
          <p id="previewAchievements">${currentAchievements || "-"}</p>
        </div>
      </div>
    </section>
  `;
}

