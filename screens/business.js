function renderBusinessScreen() {
  const profile = JSON.parse(localStorage.getItem("alakhe_profile")) || {};
  const ideas = typeof businessIdeas !== "undefined" ? businessIdeas : [];

  const filteredIdeas = profile.interest 
    ? ideas.filter(b => !b.relatedInterests || b.relatedInterests.includes(profile.interest))
    : ideas;

  return `
    <section class="business-screen">
      <h1>Business Ideas</h1>
      <p class="business-sub">Explore small businesses you can start based on your interests.</p>

      <div class="bursary-card" style="border-left-color: var(--secondary);">
        <h3>Need money to get started?</h3>
        <p>The NYDA Grant Programme offers young South Africans (18-35) non-repayable funding from R1,000 up to R250,000+ to start or grow a business, plus free mentorship and training.</p>
        <button class="secondary-btn" style="margin-top:10px;" onclick="navigateToBursaries('Business')">See Business Funding Options</button>
      </div>

      ${filteredIdeas.length ? `
        <div class="business-grid">
          ${filteredIdeas.map(b => `
            <div class="business-card">
              <h3>${b.name}</h3>
              <p><strong>About:</strong> ${b.description}</p>
              ${b.startupCost ? `<p><strong>Startup Cost:</strong> ${b.startupCost}</p>` : ""}
              ${b.skills ? `<p><strong>Key Skills:</strong> ${b.skills.join(", ")}</p>` : ""}
              ${b.potential ? `<p><strong>Potential:</strong> ${b.potential}</p>` : ""}
            </div>
          `).join("")}
        </div>
      ` : `
        <div class="mission-card">
          <p>Complete your profile to see tailored business ideas.</p>
        </div>
      `}
    </section>
  `;
}
