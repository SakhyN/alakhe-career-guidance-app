/* =========================
   DASHBOARD SCREEN
   Funding snapshot + quick links + backup & restore.
   (Detailed personal guidance lives on the Mission screen -
   this screen focuses on funding and keeping your data safe.)
========================= */
function renderDashboardScreen() {
  const profile = JSON.parse(localStorage.getItem("alakhe_profile")) || {};
  const allBursaries = typeof bursaries !== "undefined" ? bursaries : [];

  const topMatches = allBursaries.filter(b =>
    !b.isGeneral && (
      (profile.interest && b.tags && b.tags.includes(profile.interest)) ||
      (profile.goal && b.relevantGoals && b.relevantGoals.includes(profile.goal))
    )
  ).slice(0, 2);

  return `
    <section class="dashboard-screen">
      <h1>My Dashboard</h1>
      <p class="dashboard-sub">
        Quick links, your top funding matches, and keeping your data backed up.
      </p>

      <div class="mission-grid">
        <div class="mission-card">
          <h3>Quick Links</h3>
          <div class="dashboard-links-grid">
            <button class="secondary-btn" onclick="navigate('career')">Explore Careers</button>
            <button class="secondary-btn" onclick="navigate('business')">Business Ideas</button>
            <button class="secondary-btn" onclick="navigate('mission')">My Mission</button>
            <button class="secondary-btn" onclick="navigate('progress')">My Progress</button>
          </div>
        </div>

        <div class="mission-card">
          <h3>Funding Snapshot</h3>
          ${
            topMatches.length
              ? `
                <p>Top matches based on your profile:</p>
                <ul class="mission-list">
                  ${topMatches.map(b => `<li><strong>${b.name}</strong> — ${b.type}</li>`).join("")}
                </ul>
              `
              : `<p>Complete your profile's interest area to see personalised funding matches here.</p>`
          }
          <button class="primary-btn" style="margin-top:10px;" onclick="navigate('bursaries')">See Full Funding Directory</button>
        </div>
      </div>

      <div class="mission-card" style="margin-top:20px;">
        <h3>Backup &amp; Restore Your Data</h3>
        <p>
          Everything you've saved (profile, marks, badges, progress) lives only on this device's browser.
          If you clear your browser, switch devices, or use a shared school computer, that data can disappear.
          Download a backup so you can restore it later.
        </p>

        <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:14px;">
          <button class="primary-btn" onclick="exportAllData()">Download My Backup</button>
        </div>

        <div style="margin-top:18px;">
          <label for="backupFileInput" style="display:block; margin-bottom:8px; font-weight:600;">Restore from a backup file</label>
          <input type="file" id="backupFileInput" accept="application/json" style="margin-bottom:10px;" />
          <div>
            <button class="secondary-btn" onclick="importAllDataFromFile('backupFileInput')">Restore From Backup</button>
          </div>
        </div>

        <details class="dashboard-danger-zone">
          <summary>Danger zone</summary>
          <p>Permanently clear all saved Alakhe data from this device. Consider downloading a backup first.</p>
          <button class="danger-btn" onclick="clearAllAlakheData()">Clear All My Data</button>
        </details>
      </div>
    </section>
  `;
}
