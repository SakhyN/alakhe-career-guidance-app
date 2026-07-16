function getLearnerMarks() {
  const raw = JSON.parse(localStorage.getItem("alakhe_marks")) || {};

  return {
    Mathematics: Number(raw.math || raw.mathematics || 0),
    Science: Number(raw.science || 0),
    English: Number(raw.english || 0),
    "Life Sciences": Number(raw.lifeSciences || 0),
    Accounting: Number(raw.accounting || 0),
    "Agricultural Science": Number(raw.agri || raw.agriculturalScience || 0),
    Languages: Number(raw.english || 0),
    "Life Orientation": 0
  };
}

function getMatchedCareers() {
  const profile = JSON.parse(localStorage.getItem("alakhe_profile")) || {};
  const quiz = JSON.parse(localStorage.getItem("alakhe_quiz")) || {};

  if (!profile.interest || !profile.subject || !quiz.future || !quiz.environment || !quiz.path) {
    return [];
  }

  const scored = careers.map((career) => {
    let score = 0;

    if (career.interests?.includes(profile.interest)) score += 3;
    if (career.subjects?.includes(profile.subject)) score += 3;
    if (career.futures?.includes(quiz.future)) score += 2;
    if (career.environments?.includes(quiz.environment)) score += 2;
    if (career.paths?.includes(quiz.path)) score += 2;

    return { ...career, score };
  });

  return scored
    .filter((career) => career.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);
}

function getMatchLabel(score) {
  if (score >= 9) return "Strong Match";
  if (score >= 6) return "Good Match";
  return "Possible Match";
}

function getRequirementStatus(career, learnerMarks) {
  const failedSubjects = [];

  Object.entries(career.recommendedPassRate || {}).forEach(([subject, needed]) => {
    const learnerMark = learnerMarks[subject] || 0;

    if (learnerMark < needed) {
      failedSubjects.push({
        subject,
        learnerMark,
        needed
      });
    }
  });

  if (failedSubjects.length === 0) {
    return {
      status: "Ready",
      details: "Your current marks meet this career's recommended subject levels.",
      gaps: []
    };
  }

  if (failedSubjects.length <= 2) {
    return {
      status: "Almost Ready",
      details: "You are close, but you still need to improve a few subjects.",
      gaps: failedSubjects
    };
  }

  return {
    status: "Needs Improvement",
    details: "You still need to improve several required subjects for this path.",
    gaps: failedSubjects
  };
}

function getCurrentMarksForCareerSearch() {
  const marks = JSON.parse(localStorage.getItem("alakhe_marks")) || {};

  return {
    Mathematics: Number(marks.math || marks.mathematics || 0),
    Science: Number(marks.science || 0),
    English: Number(marks.english || 0),
    "Life Sciences": Number(marks.lifeSciences || 0),
    Accounting: Number(marks.accounting || 0),
    "Agricultural Science": Number(marks.agri || marks.agriculturalScience || 0),
    "Life Orientation": 0
  };
}

function getCareerSearchReadiness(careerName) {
  const info = careerRequirements?.[careerName];
  const marks = getCurrentMarksForCareerSearch();

  if (!info) {
    return {
      percentage: 0,
      status: "No Data",
      details: ["No readiness data available for this career yet."]
    };
  }

  const details = [];
  let totalSubjects = 0;
  let passedSubjects = 0;

  Object.entries(info.recommendedMarks || {}).forEach(([subject, needed]) => {
    const current = Number(marks[subject] || 0);
    totalSubjects += 1;

    if (current >= needed) {
      passedSubjects += 1;
      details.push(`${subject}: On Track (${current}% / need ${needed}%)`);
    } else {
      details.push(`${subject}: Needs Support (${current}% / need ${needed}%)`);
    }
  });

  const percentage = totalSubjects ? Math.round((passedSubjects / totalSubjects) * 100) : 0;

  let status = "Needs Work";
  if (percentage === 100) status = "Ready";
  else if (percentage >= 70) status = "Almost Ready";
  else if (percentage >= 40) status = "In Progress";

  return {
    percentage,
    status,
    details
  };
}

function saveChosenCareer(careerName) {
  const profile = JSON.parse(localStorage.getItem("alakhe_profile")) || {};
  profile.chosenCareer = careerName;
  localStorage.setItem("alakhe_profile", JSON.stringify(profile));

  alert(`${careerName} saved as your focus career 🎯`);
  navigate("mission");
}

function openCareerSearchDetail(careerName) {
  const resultsBox = document.getElementById("careerSearchResults");
  if (!resultsBox) return;

  const info = careerRequirements?.[careerName];
  const readiness = typeof getCareerSearchReadiness === "function"
    ? getCareerSearchReadiness(careerName)
    : { percentage: 0, status: "No Data", details: [] };

  if (!info) {
    resultsBox.innerHTML = `
      <div class="career-search-card detail-view">
        <button class="back-btn" onclick="runCareerSearch()">← Back to results</button>
        <h2>${careerName}</h2>
        <p>No full career story has been added for this career yet.</p>
        <div class="highlight-panel" style="margin-top:16px;">
          <h4>Still interested in this path?</h4>
          <p>You can still save it as your focus career while we add more guidance.</p>
        </div>
        <button class="primary-btn" style="margin-top:16px;" onclick="saveChosenCareer('${careerName.replace(/'/g, "\\'")}')">
          Set as My Career Goal
        </button>
      </div>
    `;
    return;
  }

  resultsBox.innerHTML = `
    <div class="career-search-card detail-view full-story-card">
      <button class="back-btn" onclick="runCareerSearch()">← Back to results</button>

      <div class="career-story-hero">
        <div>
          <div class="section-eyebrow">Career Story</div>
          <h2>${careerName}</h2>
          <p class="story-cluster"><strong>Career Family:</strong> ${info.cluster || "-"}</p>
        </div>
        <div class="story-status-badge">${readiness.status}</div>
      </div>

      <p class="story-description">${info.description || "-"}</p>

      <div class="career-story-grid">
        <div class="mission-card ${readiness.percentage >= 70 ? "glow-success" : ""}">
          <h3>Career Readiness</h3>
          <div class="progress-chip">Your Current Position</div>

          <div class="readiness-bar">
            <div class="readiness-fill" style="width: ${readiness.percentage}%;"></div>
          </div>

          <p><strong>${readiness.percentage}%</strong> — ${readiness.status}</p>

          <ul class="mission-list">
            ${readiness.details.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>

        <div class="mission-card">
          <h3>Why This Career Matters</h3>
          <div class="mission-badge">Purpose</div>
          <p>${info.whyItMatters || "-"}</p>
        </div>
      </div>

      <div class="career-story-grid">
        <div class="mission-card">
          <h3>What You Do</h3>
          <ul class="mission-list">
            ${(info.dailyWork || []).map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>

        <div class="mission-card">
          <h3>This Path May Suit You If...</h3>
          <ul class="mission-list">
            ${(info.personalityFit || []).map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>

      <div class="career-story-grid">
        <div class="mission-card">
          <h3>Subjects That Help</h3>
          <div class="search-career-tags">
            ${(info.subjectsNeeded || []).map(subject => `<span>${subject}</span>`).join("")}
          </div>
        </div>

        <div class="mission-card">
          <h3>Recommended Marks</h3>
          <ul class="mission-list">
            ${Object.entries(info.recommendedMarks || {}).map(([subject, mark]) => `<li><strong>${subject}</strong>: ${mark}%+</li>`).join("")}
          </ul>
        </div>
      </div>

      <div class="career-story-grid">
        <div class="mission-card">
          <h3>School Route</h3>
          <p>${info.schoolPath || "-"}</p>
        </div>

        <div class="mission-card">
          <h3>TVET / Skills Route</h3>
          <p>${info.tvetPath || "-"}</p>
        </div>
      </div>

      <div class="career-story-grid">
        <div class="mission-card">
          <h3>University / Advanced Study Route</h3>
          <p>${info.universityPath || "-"}</p>
        </div>

        <div class="mission-card">
          <h3>If Your Marks Are Low</h3>
          <p>${info.ifMarksAreLow || "-"}</p>
        </div>
      </div>

      <div class="career-story-grid">
        <div class="mission-card">
          <h3>Business Opportunity</h3>
          <p>${info.businessOption || "-"}</p>
        </div>

        <div class="mission-card">
          <h3>How To Start Early</h3>
          <ul class="mission-list">
            ${(info.starterActions || []).map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>

      <div class="mission-card">
        <h3>Related Careers</h3>
        <div class="search-career-tags">
          ${(info.relatedCareers || []).map(career => `
            <span onclick="openCareerSearchDetail('${career.replace(/'/g, "\\'")}')" class="click-tag">
              ${career}
            </span>
          `).join("")}
        </div>
      </div>

      <div class="career-story-actions">
        <button class="primary-btn" onclick="saveChosenCareer('${careerName.replace(/'/g, "\\'")}')">
          Set as My Career Goal
        </button>
        <button class="secondary-btn" onclick="navigate('mission')">
          Go to My Mission
        </button>
      </div>
    </div>
  `;
}

function runCareerSearch() {
  const input = document.getElementById("careerSearchInput");
  const resultsBox = document.getElementById("careerSearchResults");

  if (!input || !resultsBox) return;

  const query = input.value.trim().toLowerCase();

  if (!query) {
    resultsBox.innerHTML = "<p>Please type something to explore careers.</p>";
    return;
  }

  let matches = careerClusters.filter(item =>
    item.keyword.includes(query) || query.includes(item.keyword)
  );

  if (!matches.length) {
    matches = careerClusters.filter(item =>
      item.cluster.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  }

  if (!matches.length) {
    resultsBox.innerHTML = `
      <div class="career-search-card highlight-panel">
        <h4>We are still learning what "${query}" means 👇</h4>
        <p>Try simple words linked to work or interests, like:</p>

        <div class="search-career-tags">
          <span class="click-tag" onclick="document.getElementById('careerSearchInput').value='mechanic'; runCareerSearch();">mechanic</span>
          <span class="click-tag" onclick="document.getElementById('careerSearchInput').value='farming'; runCareerSearch();">farming</span>
          <span class="click-tag" onclick="document.getElementById('careerSearchInput').value='police'; runCareerSearch();">police</span>
          <span class="click-tag" onclick="document.getElementById('careerSearchInput').value='teacher'; runCareerSearch();">teacher</span>
          <span class="click-tag" onclick="document.getElementById('careerSearchInput').value='business'; runCareerSearch();">business</span>
          <span class="click-tag" onclick="document.getElementById('careerSearchInput').value='computer'; runCareerSearch();">computer</span>
        </div>
      </div>
    `;
    return;
  }

  resultsBox.innerHTML = matches.map(item => `
    <div class="career-search-card">
      <h4>${item.cluster}</h4>
      <p>${item.description}</p>

      <div class="search-career-tags">
        ${item.careers.map(career => `
          <span onclick="openCareerSearchDetail('${career.replace(/'/g, "\\'")}')" class="click-tag">
            ${career}
          </span>
        `).join("")}
      </div>
    </div>
  `).join("");
}


function renderCareerScreen() {
  const matchedCareers = getMatchedCareers();
  const learnerMarks = getLearnerMarks();

  return `
    <section class="career-screen">
      <h1>Matched Careers</h1>
      <p class="career-sub">
        Based on your profile, quiz, and marks, these career paths may suit you.
      </p>

      <div class="career-search-box">
        <h3>Explore Any Career</h3>
        <p>Type something like Police, Farming, Nurse, Computers, Business...</p>
        <div class="career-search-row">
          <input type="text" id="careerSearchInput" placeholder="Search careers..." />
          <button class="primary-btn" onclick="runCareerSearch()">Search</button>
        </div>
        <div id="careerSearchResults" class="career-search-results"></div>
      </div>

      <div class="career-grid">
        ${
          matchedCareers.length
            ? matchedCareers.map((career) => {
                const requirement = getRequirementStatus(career, learnerMarks);

                return `
                  <div class="career-card">
                    <div class="career-top">
                      <div>
                        <h3>${career.name}</h3>
                        <p class="career-category">${career.category}</p>
                      </div>
                      <span class="match-badge">${getMatchLabel(career.score)}</span>
                    </div>

                    <p>${career.description}</p>

                    <div class="career-requirements">
                      <h4>Required Subjects</h4>
                      <ul>
                        ${(career.subjects || []).map(subject => `<li>${subject}</li>`).join("")}
                      </ul>
                    </div>

                    <div class="career-requirements">
                      <h4>Helpful Subjects</h4>
                      <ul>
                        ${
                          career.helpfulSubjects && career.helpfulSubjects.length
                            ? career.helpfulSubjects.map(subject => `<li>${subject}</li>`).join("")
                            : "<li>No extra helpful subjects listed</li>"
                        }
                      </ul>
                    </div>

                    <div class="career-requirements">
                      <h4>Recommended Pass Rates</h4>
                      <ul>
                        ${Object.entries(career.recommendedPassRate || {}).map(([subject, pass]) => `<li>${subject}: ${pass}%+</li>`).join("")}
                      </ul>
                    </div>

                    <div class="career-status ${requirement.status.toLowerCase().replace(/\s+/g, "-")}">
                      <strong>${requirement.status}</strong>
                      <p>${requirement.details}</p>
                    </div>

                    ${
                      requirement.gaps.length
                        ? `
                          <div class="career-gap-box">
                            <h4>Subjects to Improve</h4>
                            <ul>
                              ${requirement.gaps.map(gap => `<li>${gap.subject}: you have ${gap.learnerMark}% and need ${gap.needed}%</li>`).join("")}
                            </ul>
                          </div>
                        `
                        : ""
                    }

                    <div class="career-alt-route">
                      <h4>Alternative Route</h4>
                      <p>${career.alternativeRoute || "-"}</p>
                    </div>

                    <button class="primary-btn" onclick="saveChosenCareer('${career.name.replace(/'/g, "\\'")}')">
                      Set as My Career Goal
                    </button>

                    <button class="secondary-btn" style="margin-top:10px;" onclick="navigateToBursaries('${(career.category || career.interests?.[0] || "").replace(/'/g, "\\'")}')">
                      See Funding For This Path
                    </button>
                  </div>
                `;
              }).join("")
            : `
              <div class="career-card">
                <h3>No matches yet</h3>
                <p>Please complete your profile, marks, and quiz first so we can suggest careers.</p>
              </div>
            `
        }
      </div>
    </section>
  `;
}