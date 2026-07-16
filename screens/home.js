function renderHomeScreen() {
  const register = JSON.parse(localStorage.getItem("alakhe_register")) || {};
  const profile = JSON.parse(localStorage.getItem("alakhe_profile")) || {};
  const marks = JSON.parse(localStorage.getItem("alakhe_marks")) || {};

  const learnerName = register.firstName || "Future Builder";
  const chosenCareer = profile.chosenCareer || t("common.notSelectedYet");

  const readiness =
    typeof getCareerReadiness === "function"
      ? getCareerReadiness(profile, marks)
      : { percentage: 0, status: t("common.notSelectedYet"), details: [] };

  const gameData =
    typeof getGamificationData === "function"
      ? getGamificationData()
      : { xp: 0, badges: [] };

  const levelInfo =
    typeof getLevelFromXP === "function"
      ? getLevelFromXP(gameData.xp)
      : { level: 1, name: "Starter" };

  return `
    <section class="home-screen home-premium">
      <div class="hero-premium-card">
        <div class="hero-chip">${t("home.badge")}</div>

        <div class="hero-app-title">${t("home.title")}</div>

        <h1>${currentLanguage === "xh" ? "Molo" : "Hi"}, ${learnerName}</h1>
        <p class="hero-premium-subtitle">${t("home.subtitle")}</p>

        <p class="hero-premium-text">
          ${t("home.text")}
        </p>

        <div class="premium-stats-grid">
          <div class="premium-stat-card">
            <div class="premium-stat-icon">💼</div>
            <div>
              <span class="premium-stat-label">${t("home.chosenCareer")}</span>
              <strong>${chosenCareer}</strong>
            </div>
          </div>

          <div class="premium-stat-card">
            <div class="premium-stat-icon">📍</div>
            <div>
              <span class="premium-stat-label">${t("home.readiness")}</span>
              <strong>${readiness.percentage}%</strong>
            </div>
          </div>

          <div class="premium-stat-card">
            <div class="premium-stat-icon">📊</div>
            <div>
              <span class="premium-stat-label">${t("home.status")}</span>
              <strong>${readiness.status}</strong>
            </div>
          </div>
        </div>

        <div class="premium-growth-card">
          <div class="premium-growth-left">
            <div class="premium-badge-circle">★</div>
            <div>
              <h3>${t("home.growthLevel")}</h3>
              <p><strong>Level ${levelInfo.level}:</strong> ${levelInfo.name}</p>
              <p><strong>XP:</strong> ${gameData.xp}</p>
            </div>
          </div>

          <div class="premium-growth-divider"></div>

          <div class="premium-growth-right">
            <p>Every small step matters.</p>
            <div class="badge-grid">
              ${
                gameData.badges.length
                  ? gameData.badges.map(badge => `<span class="achievement-badge">${badge}</span>`).join("")
                  : `<span class="achievement-badge">${t("common.noBadgesYet")}</span>`
              }
            </div>
          </div>
        </div>
      </div>

      <div class="premium-feature-grid">
        <div class="premium-feature-card">
          <div class="premium-feature-icon red">🔎</div>
          <div class="premium-feature-content">
            <h3>${t("home.careerExposure")}</h3>
            <p>${t("home.careerExposureText")}</p>
          </div>
          <button class="premium-arrow-btn" onclick="navigate('career')">›</button>
        </div>

        <div class="premium-feature-card">
          <div class="premium-feature-icon green">💡</div>
          <div class="premium-feature-content">
            <h3>${t("home.businessIdeas")}</h3>
            <p>${t("home.businessIdeasText")}</p>
          </div>
          <button class="premium-arrow-btn" onclick="navigate('business')">›</button>
        </div>

        <div class="premium-feature-card">
          <div class="premium-feature-icon blue">👤</div>
          <div class="premium-feature-content">
            <h3>${t("home.profileGuidance")}</h3>
            <p>${t("home.profileGuidanceText")}</p>
          </div>
          <button class="premium-arrow-btn" onclick="navigate('profile')">›</button>
        </div>

        <div class="premium-feature-card">
          <div class="premium-feature-icon orange">🎯</div>
          <div class="premium-feature-content">
            <h3>${t("home.myMission")}</h3>
            <p>${t("home.myMissionText")}</p>
          </div>
          <button class="premium-arrow-btn" onclick="navigate('mission')">›</button>
        </div>

        <div class="premium-feature-card">
          <div class="premium-feature-icon green">🎓</div>
          <div class="premium-feature-content">
            <h3>Bursaries &amp; Funding</h3>
            <p>Real South African bursaries and business funding matched to your interests.</p>
          </div>
          <button class="premium-arrow-btn" onclick="navigate('bursaries')">›</button>
        </div>
      </div>

      <div style="margin-top: 18px; display: flex; justify-content: center;">
        <button class="secondary-btn" onclick="openParentView()">${t("home.parentView")}</button>
      </div>
    </section>
  `;
}