function renderMarksScreen() {
  return `
    <section class="marks-screen">
      <h1>Marks</h1>
      <p class="marks-sub">
        Enter your marks for this term or semester so we can track your progress.
      </p>

      <div class="form-card">
        <label>Term / Semester</label>
        <select id="period">
          <option value="">Select Period</option>
          <option>Term 1</option>
          <option>Term 2</option>
          <option>Term 3</option>
          <option>Term 4</option>
          <option>Semester 1</option>
          <option>Semester 2</option>
        </select>

        <label>Mathematics</label>
        <input type="number" id="markMath" placeholder="Enter %" min="0" max="100" />

        <label>Science</label>
        <input type="number" id="markScience" placeholder="Enter %" min="0" max="100" />

        <label>English</label>
        <input type="number" id="markEnglish" placeholder="Enter %" min="0" max="100" />

        <label>Life Sciences</label>
        <input type="number" id="markLifeSciences" placeholder="Enter %" min="0" max="100" />

        <label>Accounting</label>
        <input type="number" id="markAccounting" placeholder="Enter %" min="0" max="100" />

        <label>Agricultural Science</label>
        <input type="number" id="markAgriculturalScience" placeholder="Enter %" min="0" max="100" />

        <button class="primary-btn" onclick="saveMarks()">
          Save Marks
        </button>
      </div>
    </section>
  `;
}

function saveMarks() {
  const register = JSON.parse(localStorage.getItem("alakhe_register")) || {};

  const marksEntry = {
    grade: register.grade || "",
    period: document.getElementById("period")?.value || "",
    math: document.getElementById("markMath")?.value || "",
    science: document.getElementById("markScience")?.value || "",
    english: document.getElementById("markEnglish")?.value || "",
    lifeSciences: document.getElementById("markLifeSciences")?.value || "",
    accounting: document.getElementById("markAccounting")?.value || "",
    agri: document.getElementById("markAgriculturalScience")?.value || "",
    capturedAt: new Date().toISOString()
  };

  if (!marksEntry.period) {
    alert("Please select term or semester");
    return;
  }

  const marksHistory = JSON.parse(localStorage.getItem("alakhe_marks_history")) || [];
  marksHistory.push(marksEntry);

  localStorage.setItem("alakhe_marks_history", JSON.stringify(marksHistory));
  localStorage.setItem("alakhe_marks", JSON.stringify(marksEntry));

  if (typeof saveHistory === "function") saveHistory("marks", marksEntry);

  alert("Marks saved successfully!");
  navigate("progress");
}