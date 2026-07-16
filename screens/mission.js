function renderMissionScreen() {
  const register = JSON.parse(localStorage.getItem("alakhe_register")) || {};
  const profile = JSON.parse(localStorage.getItem("alakhe_profile")) || {};
  const marks = JSON.parse(localStorage.getItem("alakhe_marks")) || {};

  const guidance =
    typeof getMissionGuidance === "function"
      ? getMissionGuidance(profile, marks)
      : "Complete your profile and marks to unlock guidance.";

  const nextSteps =
    typeof getMissionNextSteps === "function"
      ? getMissionNextSteps(profile, marks)
      : ["Complete your profile and marks to unlock next steps."];

  const smartAdvice =
    typeof getSmartAdvice === "function"
      ? getSmartAdvice()
      : [];

  const readiness =
    typeof getCareerReadiness === "function"
      ? getCareerReadiness(profile, marks)
      : { percentage: 0, status: "Not available", details: [] };

  const dailyMission =
    typeof getDailyMission === "function"
      ? getDailyMission(profile, marks)
      : {
          title: "Take one future step today",
          action: "Complete your profile or improve one subject.",
          reason: "Small action builds progress."
        };

  const streak =
    typeof getMissionStreakData === "function"
      ? getMissionStreakData()
      : { currentStreak: 0, totalCompleted: 0, todayDone: false };

  const todayMission = nextSteps[0] || "Take one step toward your future today.";

  return `
    <section class="mission-screen">
      <h1>My Mission</h1>
      <p class="mission-sub">
        Your personal dashboard to help guide your future step by step.
      </p>

      <div class="streak-card">
        <h3>Today’s Mission</h3>
        <div class="streak-number">${streak.currentStreak}</div>
        <p><strong>Current streak</strong></p>
        <p><strong>${dailyMission.title}</strong></p>
        <p>${dailyMission.action}</p>
        <p style="margin-top:10px;"><strong>Why this matters:</strong> ${dailyMission.reason}</p>
        <p style="margin-top:10px;"><strong>Total completed mission days:</strong> ${streak.totalCompleted}</p>

        ${
          streak.todayDone
            ? `<div class="achievement-badge" style="margin-top:12px;">Mission completed today ✅</div>`
            : `<button class="secondary-btn" style="margin-top:14px;" onclick="completeDailyMission()">Mark Mission Done</button>`
        }
      </div>

      <div class="mission-grid" style="margin-top: 20px;">
        <div class="mission-card">
          <h3>Learner Summary</h3>
          <div class="achievement-badge">Future Builder</div>

          <p><strong>First Name:</strong> ${register.firstName || "Not captured"}</p>
          <p><strong>Surname:</strong> ${register.lastName || "Not captured"}</p>
          <p><strong>Age:</strong> ${register.age || "Not captured"}</p>
          <p><strong>Grade:</strong> ${register.grade || "Not captured"}</p>
          <p><strong>School:</strong> ${register.school || "Not captured"}</p>
          <p><strong>Location:</strong> ${register.location || "Not captured"}</p>
          <p><strong>District / Province:</strong> ${register.districtProvince || "Not captured"}</p>
          <p><strong>Gender:</strong> ${register.gender || "Not captured"}</p>
          <p><strong>Phone Number:</strong> ${register.phoneNumber || "Not captured"}</p>
          <p><strong>Email Address:</strong> ${register.emailAddress || "Not captured"}</p>
          <p><strong>Parent / Guardian Name:</strong> ${register.guardianName || "Not captured"}</p>
          <p><strong>Parent / Guardian Contact:</strong> ${register.guardianPhone || "Not captured"}</p>
          <p><strong>Interest:</strong> ${profile.interest || "Not captured"}</p>
          <p><strong>Strongest Subject:</strong> ${profile.subject || "Not captured"}</p>
          <p><strong>Goal:</strong> ${profile.goal || "Not captured"}</p>
          <p><strong>Chosen Career:</strong> ${profile.chosenCareer || "Not selected yet"}</p>
        </div>

        <div class="mission-card">
          <h3>My Guidance</h3>
          <div class="mission-badge">Personal Guidance</div>
          <p>${guidance}</p>

          <div class="highlight-panel" style="margin-top:16px;">
            <h4>Next Best Step</h4>
            <p>${todayMission}</p>
          </div>
        </div>
      </div>

      <div class="mission-grid" style="margin-top: 20px;">
        <div class="mission-card">
          <h3>My Marks Snapshot</h3>
          <p><strong>Mathematics:</strong> ${marks.math || "-"}</p>
          <p><strong>Science:</strong> ${marks.science || "-"}</p>
          <p><strong>English:</strong> ${marks.english || "-"}</p>
          <p><strong>Life Sciences:</strong> ${marks.lifeSciences || "-"}</p>
          <p><strong>Accounting:</strong> ${marks.accounting || "-"}</p>
          <p><strong>Agricultural Science:</strong> ${marks.agri || "-"}</p>
        </div>

        <div class="mission-card ${readiness.percentage >= 70 ? "glow-success" : ""}">
          <h3>Career Readiness Meter</h3>
          <div class="progress-chip">Career Readiness</div>
          <p><strong>Chosen Career:</strong> ${profile.chosenCareer || "Not selected yet"}</p>

          <div class="readiness-bar">
            <div class="readiness-fill" style="width: ${readiness.percentage}%;"></div>
          </div>

          <p><strong>${readiness.percentage}%</strong> — ${readiness.status}</p>

          <ul class="mission-list">
            ${readiness.details.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>

      <div class="mission-grid" style="margin-top: 20px;">
        <div class="mission-card">
          <h3>Recommended Next Steps</h3>
          <ul class="mission-list">
            ${nextSteps.map(step => `<li>${step}</li>`).join("")}
          </ul>
        </div>

        <div class="mission-card">
          <h3>Smart Advice</h3>
          ${
            smartAdvice.length
              ? `
                <ul class="mission-list">
                  ${smartAdvice.map(item => `<li>${item}</li>`).join("")}
                </ul>
              `
              : "<p>No smart advice yet. Save more marks to unlock deeper guidance.</p>"
          }
        </div>
      </div>
    </section>
  `;
}
