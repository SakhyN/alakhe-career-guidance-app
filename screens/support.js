function renderSupportScreen() {
  const supportItems = getSupportPlan();

  return `
    <section class="support-screen">
      <h1>Support Plan</h1>
      <p class="support-sub">
        This section helps you understand what to improve and what to do next.
      </p>

      <div class="support-grid">
        ${
          supportItems.length
            ? supportItems.map(item => `
              <div class="support-card ${item.level}">
                <h3>${item.subject}</h3>
                <p><strong>Status:</strong> ${item.status}</p>
                <p>${item.message}</p>
                <div class="support-tip">
                  <strong>Next step:</strong>
                  <p>${item.tip}</p>
                </div>
              </div>
            `).join("")
            : `
              <div class="support-card good">
                <h3>You are doing well</h3>
                <p>Your marks do not show major risk right now.</p>
                <div class="support-tip">
                  <strong>Next step:</strong>
                  <p>Keep improving steadily and continue exploring careers and business ideas.</p>
                </div>
              </div>
            `
        }
      </div>
    </section>
  `;
}