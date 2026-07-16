function renderParentScreen() {
  const register = JSON.parse(localStorage.getItem("alakhe_register")) || {};
  const profile = JSON.parse(localStorage.getItem("alakhe_profile")) || {};
  const marks = JSON.parse(localStorage.getItem("alakhe_marks")) || {};
  const marksHistory = JSON.parse(localStorage.getItem("alakhe_marks_history")) || [];

  const readiness =
    typeof getCareerReadiness === "function"
      ? getCareerReadiness(profile, marks)
      : { percentage: 0, status: "Not available", details: [] };

  const smartAdvice =
    typeof getSmartAdvice === "function"
      ? getSmartAdvice()
      : [];

  const dailyMission =
    typeof getDailyMission === "function"
      ? getDailyMission(profile, marks)
      : {
          title: "Take one future step today",
          action: "Complete profile or improve one subject.",
          reason: "Small action builds progress."
        };

  const streak =
    typeof getMissionStreakData === "function"
      ? getMissionStreakData()
      : { currentStreak: 0, totalCompleted: 0, todayDone: false };

  const parentAdvice = getParentSupportAdvice(profile, marks, readiness);

  return `
    <section class="parent-screen">
      <h1>Parent Dashboard</h1>
      <p class="parent-sub">
        A simple view to help parents or guardians support the learner’s growth and future direction.
      </p>

      <div class="mission-grid">
        <div class="mission-card">
          <h3>Learner Summary</h3>
          <p><strong>Name:</strong> ${register.firstName || "-"} ${register.lastName || ""}</p>
          <p><strong>Grade:</strong> ${register.grade || "-"}</p>
          <p><strong>School:</strong> ${register.school || "-"}</p>
          <p><strong>Location:</strong> ${register.location || "-"}</p>
          <p><strong>Interest Area:</strong> ${profile.interest || "-"}</p>
          <p><strong>Strongest Subject:</strong> ${profile.subject || "-"}</p>
          <p><strong>Goal:</strong> ${profile.goal || "-"}</p>
          <p><strong>Chosen Career:</strong> ${profile.chosenCareer || "Not selected yet"}</p>
        </div>

        <div class="mission-card">
          <h3>Career Readiness</h3>
          <p><strong>Status:</strong> ${readiness.status}</p>

          <div class="readiness-bar">
            <div class="readiness-fill" style="width: ${readiness.percentage}%;"></div>
          </div>

          <p><strong>${readiness.percentage}%</strong> readiness toward ${profile.chosenCareer || "future path"}.</p>

          <ul class="mission-list">
            ${readiness.details.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>

      <div class="mission-grid" style="margin-top:20px;">
        <div class="mission-card">
          <h3>Latest Marks</h3>
          <p><strong>Mathematics:</strong> ${marks.math || "-"}</p>
          <p><strong>Science:</strong> ${marks.science || "-"}</p>
          <p><strong>English:</strong> ${marks.english || "-"}</p>
          <p><strong>Life Sciences:</strong> ${marks.lifeSciences || "-"}</p>
          <p><strong>Accounting:</strong> ${marks.accounting || "-"}</p>
          <p><strong>Agricultural Science:</strong> ${marks.agri || "-"}</p>
        </div>

        <div class="mission-card">
          <h3>Mission & Discipline</h3>
          <p><strong>Today’s Mission:</strong> ${dailyMission.title}</p>
          <p>${dailyMission.action}</p>
          <p style="margin-top:10px;"><strong>Reason:</strong> ${dailyMission.reason}</p>
          <p style="margin-top:10px;"><strong>Current Streak:</strong> ${streak.currentStreak} day${streak.currentStreak === 1 ? "" : "s"}</p>
          <p><strong>Total Completed Mission Days:</strong> ${streak.totalCompleted}</p>
        </div>
      </div>

      <div class="mission-grid" style="margin-top:20px;">
        <div class="mission-card">
          <h3>Parent Support Advice</h3>
          <ul class="mission-list">
            ${parentAdvice.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>

        <div class="mission-card">
          <h3>Smart Guidance</h3>
          ${
            smartAdvice.length
              ? `<ul class="mission-list">
                  ${smartAdvice.map(item => `<li>${item}</li>`).join("")}
                </ul>`
              : `<p>No guidance available yet. Encourage the learner to save marks and complete profile details.</p>`
          }
        </div>
      </div>

      <div class="mission-card" style="margin-top:20px;">
        <h3>Progress Records</h3>
        ${
          marksHistory.length
            ? `
              <ul class="mission-list">
                ${marksHistory.map((entry, index) => `
                  <li>
                    <strong>Record ${index + 1}</strong> —
                    ${entry.period || "Period not set"} |
                    Math: ${entry.math || "-"} |
                    Science: ${entry.science || "-"} |
                    English: ${entry.english || "-"}
                  </li>
                `).join("")}
              </ul>
            `
            : `<p>No marks history saved yet.</p>`
        }
      </div>
        <div class="mission-card" style="margin-top:20px;">
  <h3>Parent Settings</h3>

  <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:10px;">
    <button class="secondary-btn" onclick="resetParentPin()">Reset Parent PIN</button>
    <button class="secondary-btn" onclick="exportAllData()">Download Backup</button>
    <button class="primary-btn" onclick="navigate('home')">Back to Home</button>
  </div>
</div>

    </section>
  `;
}

function getParentSupportAdvice(profile, marks, readiness) {
  const advice = [];

  if (Number(marks.math || 0) > 0 && Number(marks.math || 0) < 50) {
    advice.push("Support the learner with extra Mathematics practice, because it affects many career paths.");
  }

  if (Number(marks.english || 0) > 0 && Number(marks.english || 0) < 50) {
    advice.push("Encourage more reading and English practice, because communication matters in nearly every career.");
  }

  if (profile.chosenCareer) {
    advice.push(`The learner is currently focused on ${profile.chosenCareer}. Encourage them to stay consistent with subjects linked to this path.`);
  }

  if (readiness.percentage >= 70) {
    advice.push("The learner is showing good progress toward their chosen path. Encourage discipline and consistency.");
  } else if (readiness.percentage > 0) {
    advice.push("The learner has started building toward their goal, but still needs support in key subjects.");
  } else {
    advice.push("Help the learner choose a clear career direction so support can become more focused.");
  }

  advice.push("Talk regularly with the learner about what they are discovering, not only about marks.");
  advice.push("Encouragement at home can improve both confidence and consistency.");

  return advice;
}
