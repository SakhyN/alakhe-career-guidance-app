/* =========================
   BURSARIES & FUNDING SCREEN
========================= */
let bursaryFilter = "";

const bursaryCategoryAliases = {
  "Agriculture": "Farming & Agriculture",
  "Business & Finance": "Business",
  "Creative Arts & Design": "Creative Arts",
  "Engineering": "Engineering & Technical Work",
  "Health & Medicine": "Health"
};

function normalizeBursaryCategory(category) {
  return bursaryCategoryAliases[category] || category || "";
}

function navigateToBursaries(category) {
  bursaryFilter = normalizeBursaryCategory(category);
  navigate("bursaries");
}

function filterBursaries(category) {
  bursaryFilter = category;
  renderApp();
}

function renderBursaryCard(b) {
  return `
    <div class="bursary-card">
      <div class="bursary-card-top">
        <h3>${b.name}</h3>
        <span class="bursary-type-tag">${b.type}</span>
      </div>

      ${b.provider ? `<p class="bursary-provider">${b.provider}</p>` : ""}

      <p>${b.summary}</p>

      <div class="bursary-section">
        <h4>Who Qualifies</h4>
        <ul class="mission-list">
          ${b.whoQualifies.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <div class="bursary-section">
        <h4>What It Covers</h4>
        <ul class="mission-list">
          ${b.covers.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <div class="bursary-section">
        <h4>How To Apply</h4>
        <p>${b.howToApply}</p>
        ${b.website ? `<a class="bursary-link" href="${b.website}" target="_blank" rel="noopener">${b.website.replace("https://", "")}</a>` : ""}
      </div>

      ${b.tip ? `<div class="bursary-tip"><strong>Good to know:</strong> ${b.tip}</div>` : ""}
    </div>
  `;
}

function renderBursariesScreen() {
  const profile = JSON.parse(localStorage.getItem("alakhe_profile")) || {};
  const allBursaries = typeof bursaries !== "undefined" ? bursaries : [];

  const generalBursaries = allBursaries.filter(b => b.isGeneral);

  const matchedBursaries = allBursaries.filter(b =>
    !b.isGeneral && (
      (profile.interest && b.tags && b.tags.includes(profile.interest)) ||
      (profile.goal && b.relevantGoals && b.relevantGoals.includes(profile.goal))
    )
  );

  const categories = [...new Set(allBursaries.flatMap(b => b.tags || []))].sort();

  const directoryList = bursaryFilter
    ? allBursaries.filter(b => !b.isGeneral && b.tags && b.tags.includes(bursaryFilter))
    : allBursaries.filter(b => !b.isGeneral);

  return `
    <section class="bursaries-screen">
      <h1>Bursaries &amp; Funding</h1>
      <p class="bursaries-sub">
        Real South African funding options to help pay for study or start a business. This list is a starting point — always confirm current dates and requirements on the official website before applying.
      </p>

      <div class="bursary-warning">
        ⚠️ Genuine bursaries never ask you to pay an upfront fee to "release" your funding. If anyone asks you to pay first, it is a scam.
      </div>

      <div class="mission-card" style="margin-top:18px;">
        <h3>Apply To This No Matter What</h3>
        ${generalBursaries.map(b => renderBursaryCard(b)).join("")}
      </div>

      ${
        matchedBursaries.length
          ? `
            <div class="mission-card" style="margin-top:20px;">
              <h3>Matched To Your Profile</h3>
              <p>Based on your interest in <strong>${profile.interest}</strong>${profile.goal ? ` and your goal of <strong>${profile.goal}</strong>` : ""}:</p>
              ${matchedBursaries.map(b => renderBursaryCard(b)).join("")}
            </div>
          `
          : `
            <div class="mission-card" style="margin-top:20px;">
              <h3>Matched To Your Profile</h3>
              <p>Complete your <a href="#" onclick="navigate('profile'); return false;">Profile</a> with your interest area so we can show you the most relevant funding options here.</p>
            </div>
          `
      }

      <div class="mission-card" style="margin-top:20px;">
        <h3>Full Directory</h3>
        <p>Browse all funding options by field.</p>

        <div class="bursary-filter-row">
          <button class="filter-chip ${bursaryFilter === "" ? "active" : ""}" onclick="filterBursaries('')">All</button>
          ${categories.map(cat => `
            <button class="filter-chip ${bursaryFilter === cat ? "active" : ""}" onclick="filterBursaries('${cat.replace(/'/g, "\\'")}')">${cat}</button>
          `).join("")}
        </div>

        ${directoryList.map(b => renderBursaryCard(b)).join("")}
      </div>
    </section>
  `;
}
