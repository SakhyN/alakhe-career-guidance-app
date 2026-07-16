function renderProfileScreen() {
  const savedProfile = JSON.parse(localStorage.getItem("alakhe_profile")) || {};

  return `
    <section class="profile-screen">
      <h1>Profile</h1>
      <p class="profile-sub">
        Tell us about your interests, strongest subjects, and career direction.
      </p>

      <div class="form-card">
        <label>Interest Area</label>
        <select id="interest" onchange="autoSuggestProfileCareers()">
          <option value="">Select</option>
          <option value="Technology" ${savedProfile.interest === "Technology" ? "selected" : ""}>Technology</option>
          <option value="Health" ${savedProfile.interest === "Health" ? "selected" : ""}>Health</option>
          <option value="Business" ${savedProfile.interest === "Business" ? "selected" : ""}>Business</option>
          <option value="Education" ${savedProfile.interest === "Education" ? "selected" : ""}>Education</option>
          <option value="Creative Arts" ${savedProfile.interest === "Creative Arts" ? "selected" : ""}>Creative Arts</option>
          <option value="Farming & Agriculture" ${savedProfile.interest === "Farming & Agriculture" ? "selected" : ""}>Farming & Agriculture</option>
          <option value="Police / Law Enforcement" ${savedProfile.interest === "Police / Law Enforcement" ? "selected" : ""}>Police / Law Enforcement</option>
          <option value="Engineering & Technical Work" ${savedProfile.interest === "Engineering & Technical Work" ? "selected" : ""}>Engineering & Technical Work</option>
          <option value="Construction & Building" ${savedProfile.interest === "Construction & Building" ? "selected" : ""}>Construction & Building</option>
          <option value="Sports & Recreation" ${savedProfile.interest === "Sports & Recreation" ? "selected" : ""}>Sports & Recreation</option>
          <option value="Social Services & Community" ${savedProfile.interest === "Social Services & Community" ? "selected" : ""}>Social Services & Community</option>
          <option value="Hospitality & Tourism" ${savedProfile.interest === "Hospitality & Tourism" ? "selected" : ""}>Hospitality & Tourism</option>
          <option value="Environmental & Conservation" ${savedProfile.interest === "Environmental & Conservation" ? "selected" : ""}>Environmental & Conservation</option>
          <option value="Transportation & Logistics" ${savedProfile.interest === "Transportation & Logistics" ? "selected" : ""}>Transportation & Logistics</option>
        </select>

        <label>Strongest Subject</label>
        <select id="subject" onchange="autoSuggestProfileCareers()">
          <option value="">Select</option>
          <option value="Mathematics" ${savedProfile.subject === "Mathematics" ? "selected" : ""}>Mathematics</option>
          <option value="Science" ${savedProfile.subject === "Science" ? "selected" : ""}>Science</option>
          <option value="Physical Science" ${savedProfile.subject === "Physical Science" ? "selected" : ""}>Physical Science</option>
          <option value="Life Sciences" ${savedProfile.subject === "Life Sciences" ? "selected" : ""}>Life Sciences</option>
          <option value="English" ${savedProfile.subject === "English" ? "selected" : ""}>English</option>
          <option value="Languages" ${savedProfile.subject === "Languages" ? "selected" : ""}>Languages</option>
          <option value="Accounting" ${savedProfile.subject === "Accounting" ? "selected" : ""}>Accounting</option>
          <option value="Agricultural Science" ${savedProfile.subject === "Agricultural Science" ? "selected" : ""}>Agricultural Science</option>
          <option value="Computer Studies" ${savedProfile.subject === "Computer Studies" ? "selected" : ""}>Computer Studies</option>
          <option value="Geography" ${savedProfile.subject === "Geography" ? "selected" : ""}>Geography</option>
          <option value="History" ${savedProfile.subject === "History" ? "selected" : ""}>History</option>
          <option value="Drama & Performance" ${savedProfile.subject === "Drama & Performance" ? "selected" : ""}>Drama & Performance</option>
          <option value="Music" ${savedProfile.subject === "Music" ? "selected" : ""}>Music</option>
          <option value="Visual Arts" ${savedProfile.subject === "Visual Arts" ? "selected" : ""}>Visual Arts</option>
          <option value="Tourism" ${savedProfile.subject === "Tourism" ? "selected" : ""}>Tourism</option>
          <option value="Construction Studies" ${savedProfile.subject === "Construction Studies" ? "selected" : ""}>Construction Studies</option>
          <option value="Hospitality Studies" ${savedProfile.subject === "Hospitality Studies" ? "selected" : ""}>Hospitality Studies</option>
        </select>

        <label>Goal</label>
        <select id="goal" onchange="autoSuggestProfileCareers()">
          <option value="">Select</option>
          <option value="Career" ${savedProfile.goal === "Career" ? "selected" : ""}>Career</option>
          <option value="Business" ${savedProfile.goal === "Business" ? "selected" : ""}>Business</option>
          <option value="Both" ${savedProfile.goal === "Both" ? "selected" : ""}>Both</option>
        </select>

        <label>Chosen Career</label>
        <input
          type="text"
          id="profileCareerSearch"
          placeholder="Type a career like mechanic, police, farming, teacher..."
          value="${savedProfile.chosenCareer || ""}"
          oninput="runProfileCareerSearch()"
        />

        <div id="profileCareerResults" class="career-search-results"></div>
        <div id="profileAutoSuggestions" class="career-search-results"></div>

        <input type="hidden" id="chosenCareer" value="${savedProfile.chosenCareer || ""}" />

        <button class="primary-btn" onclick="saveProfile()">Save Profile</button>
      </div>
    </section>
  `;
}

function runProfileCareerSearch() {
  const input = document.getElementById("profileCareerSearch");
  const resultsBox = document.getElementById("profileCareerResults");
  const hiddenInput = document.getElementById("chosenCareer");

  if (!input || !resultsBox || !hiddenInput) return;

  const query = input.value.trim().toLowerCase();

  if (!query) {
    resultsBox.innerHTML = "";
    hiddenInput.value = "";
    return;
  }

  let matches = careerClusters.filter(item =>
    item.keyword.toLowerCase().includes(query) ||
    item.cluster.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query) ||
    item.careers.some(career => career.toLowerCase().includes(query))
  );

  if (!matches.length) {
    resultsBox.innerHTML = `
      <div class="career-search-card highlight-panel">
        <h4>No exact career found yet</h4>
        <p>Try simple words like mechanic, farming, police, teacher, business, computer.</p>
      </div>
    `;
    hiddenInput.value = "";
    return;
  }

  const allCareers = [...new Set(matches.flatMap(item => item.careers))];

  resultsBox.innerHTML = `
    <div class="career-search-card">
      <h4>Choose a career</h4>
      <div class="search-career-tags">
        ${allCareers.map(career => `
          <span class="click-tag" onclick="selectProfileCareer('${career.replace(/'/g, "\\'")}')">
            ${career}
          </span>
        `).join("")}
      </div>
    </div>
  `;
}

function selectProfileCareer(careerName) {
  const hiddenInput = document.getElementById("chosenCareer");
  const searchInput = document.getElementById("profileCareerSearch");
  const resultsBox = document.getElementById("profileCareerResults");

  if (hiddenInput) hiddenInput.value = careerName;
  if (searchInput) searchInput.value = careerName;

  if (resultsBox) {
    resultsBox.innerHTML = `
      <div class="career-search-card glow-success">
        <h4>Selected Career</h4>
        <p><strong>${careerName}</strong> has been selected as your current career direction.</p>
      </div>
    `;
  }
}

function autoSuggestProfileCareers() {
  const interest = document.getElementById("interest")?.value || "";
  const subject = document.getElementById("subject")?.value || "";
  const goal = document.getElementById("goal")?.value || "";
  const box = document.getElementById("profileAutoSuggestions");

  if (!box) return;

  if (!interest && !subject && !goal) {
    box.innerHTML = "";
    return;
  }

  let suggestions = [];

  if (typeof careers !== "undefined" && Array.isArray(careers)) {
    suggestions = careers
      .map(career => {
        let score = 0;

        if (career.interests?.includes(interest)) score += 3;
        if (career.subjects?.includes(subject)) score += 2;
        if (career.paths?.includes(goal)) score += 2;

        return { ...career, score };
      })
      .filter(career => career.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);
  }

  if (!suggestions.length) {
    box.innerHTML = `
      <div class="career-search-card highlight-panel">
        <h4>Suggested Careers For You</h4>
        <p>We are still learning your path. You can also type a career you are curious about above.</p>
      </div>
    `;
    return;
  }

  box.innerHTML = `
    <div class="career-search-card">
      <h4>Suggested Careers For You</h4>
      <p>Based on your interest, strongest subject, and goal:</p>
      <div class="search-career-tags">
        ${suggestions.map(career => `
          <span class="click-tag" onclick="selectProfileCareer('${career.name.replace(/'/g, "\\'")}')">
            ${career.name}
          </span>
        `).join("")}
      </div>
    </div>
  `;
}