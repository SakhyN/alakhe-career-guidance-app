function getTrend(current, previous) {
  const curr = Number(current || 0);
  const prev = Number(previous || 0);

  if (!prev && curr) return "New";
  if (curr - prev >= 5) return "Improving";
  if (prev - curr >= 5) return "Declining";
  return "Stable";
}

function renderProgressScreen() {
  const history = getHistory();
  const marksHistory = history.filter(item => item.type === "marks");
  const smartAdvice = typeof getSmartAdvice === "function" ? getSmartAdvice() : [];

  return `
    <section class="progress-screen">
      <h1>My Progress Journey</h1>
      <p class="progress-sub">
        Track your marks over time and see how you are improving.
      </p>

      <div class="mission-card">
        <h3>Progress Chart</h3>
        <canvas id="progressChart" height="120"></canvas>
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
            : "<p>No advice yet. Save at least two mark records to unlock smart advice.</p>"
        }
      </div>

      <div class="mission-card">
        <h3>Saved Mark Records</h3>
        ${
          marksHistory.length
            ? `
              <ul class="mission-list">
                ${marksHistory.map((entry, index) => `
                  <li>
                    <strong>Record ${index + 1}</strong> -
                    ${new Date(entry.date).toLocaleDateString()}
                  </li>
                `).join("")}
              </ul>
            `
            : "<p>No mark history yet. Save marks first to see progress.</p>"
        }
      </div>
    </section>
  `;
}

function drawProgressChart() {
  const canvas = document.getElementById("progressChart");
  if (!canvas) return;

  const history = getHistory();
  const marksHistory = history.filter(item => item.type === "marks");

  if (!marksHistory.length) return;

  const labels = marksHistory.map((entry, index) => `Record ${index + 1}`);

  const mathData = marksHistory.map(entry =>
    Number(entry.data.math || entry.data.mathematics || 0)
  );
  const scienceData = marksHistory.map(entry =>
    Number(entry.data.science || 0)
  );
  const englishData = marksHistory.map(entry =>
    Number(entry.data.english || 0)
  );
  const agriData = marksHistory.map(entry =>
    Number(entry.data.agri || entry.data.agriculturalScience || 0)
  );

  new Chart(canvas, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Mathematics",
          data: mathData,
          borderColor: "#d71920",
          backgroundColor: "rgba(215, 25, 32, 0.08)",
          tension: 0.3,
          fill: false
        },
        {
          label: "Science",
          data: scienceData,
          borderColor: "#0f9d58",
          backgroundColor: "rgba(15, 157, 88, 0.08)",
          tension: 0.3,
          fill: false
        },
        {
          label: "English",
          data: englishData,
          borderColor: "#1d4ed8",
          backgroundColor: "rgba(29, 78, 216, 0.08)",
          tension: 0.3,
          fill: false
        },
        {
          label: "Agricultural Science",
          data: agriData,
          borderColor: "#b45309",
          backgroundColor: "rgba(180, 83, 9, 0.08)",
          tension: 0.3,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}
