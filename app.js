let currentScreen = "home";

if (typeof currentLanguage === "undefined") {
  currentLanguage = localStorage.getItem("alakhe_language") || "en";
}

/* =========================
   APP RENDERING
========================= */
function renderApp() {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <div class="app-container">
      <div class="top-bar">
        <div class="brand-mini">Alakhe App</div>

        <div class="lang-box">
          <label for="langSelect">${typeof t === "function" ? t("selectLanguage") : "Language"}</label>
          <select id="langSelect" onchange="setLanguage(this.value)">
            <option value="en" ${currentLanguage === "en" ? "selected" : ""}>English</option>
            <option value="xh" ${currentLanguage === "xh" ? "selected" : ""}>isiXhosa</option>
          </select>
        </div>
      </div>

      <div id="screen-container">
        ${renderScreen()}
      </div>

      <div class="bottom-nav">
        <button onclick="navigate('home')">Home</button>
        <button onclick="navigate('dashboard')">Dashboard</button>
        <button onclick="navigate('profile')">Profile</button>
        <button onclick="navigate('marks')">Marks</button>
        <button onclick="navigate('progress')">Progress</button>
        <button onclick="navigate('mission')">Mission</button>
      </div>
    </div>
  `;
}


function renderScreen() {
  switch (currentScreen) {
    case "home":
      return renderHomeScreen();
    case "dashboard":
      return renderDashboardScreen();
    case "bursaries":
      return renderBursariesScreen();
    case "register":
      return renderRegisterScreen();
    case "profile":
      return renderProfileScreen();
    case "marks":
      return renderMarksScreen();
    case "progress":
      return renderProgressScreen();
    case "quiz":
      return renderQuizScreen();
    case "career":
      return renderCareerScreen();
    case "business":
      return renderBusinessScreen();
    case "support":
      return renderSupportScreen();
    case "mission":
      return renderMissionScreen();
    case "cv":
      return renderCVScreen();
    case "parent":
      return renderParentScreen();
    default:
      return "<p>Screen not found</p>";
  }
}

function navigate(screen) {
  currentScreen = screen;
  renderApp();

  if (screen === "progress" && typeof drawProgressChart === "function") {
    setTimeout(() => {
      drawProgressChart();
    }, 100);
  }

  if (screen === "profile" && typeof autoSuggestProfileCareers === "function") {
    setTimeout(() => {
      autoSuggestProfileCareers();
    }, 100);
  }
}


/* =========================
   SAVE FUNCTIONS
========================= */
function saveRegister() {
  const register = {
    firstName: document.getElementById("firstName")?.value || "",
    lastName: document.getElementById("lastName")?.value || "",
    age: document.getElementById("age")?.value || "",
    grade: document.getElementById("registerGrade")?.value || "",
    school: document.getElementById("school")?.value || "",
    location: document.getElementById("location")?.value || "",
    districtProvince: document.getElementById("districtProvince")?.value || "",
    gender: document.getElementById("gender")?.value || "",
    phoneNumber: document.getElementById("phoneNumber")?.value || "",
    emailAddress: document.getElementById("emailAddress")?.value || "",
    guardianName: document.getElementById("guardianName")?.value || "",
    guardianPhone: document.getElementById("guardianPhone")?.value || ""
  };

  if (
    !register.firstName ||
    !register.lastName ||
    !register.age ||
    !register.grade ||
    !register.school ||
    !register.location ||
    !register.districtProvince ||
    !register.gender ||
    !register.phoneNumber ||
    !register.emailAddress ||
    !register.guardianName ||
    !register.guardianPhone
  ) {
    alert("Please complete all registration fields");
    return;
  }

  localStorage.setItem("alakhe_register", JSON.stringify(register));
  if (typeof saveHistory === "function") saveHistory("register", register);

  awardXP(20, "Registration completed");
checkAndUnlockBadges();
alert("Registration saved successfully!");
navigate("profile");

}

function saveProfile() {
  const profile = {
    interest: document.getElementById("interest")?.value || "",
    subject: document.getElementById("subject")?.value || "",
    goal: document.getElementById("goal")?.value || "",
    chosenCareer: document.getElementById("chosenCareer")?.value || ""
  };

  if (!profile.interest || !profile.subject || !profile.goal || !profile.chosenCareer) {
    alert("Please complete all profile fields");
    return;
  }

  localStorage.setItem("alakhe_profile", JSON.stringify(profile));
  if (typeof saveHistory === "function") saveHistory("profile", profile);

  awardXP(25, "Profile completed");
checkAndUnlockBadges();
alert("Profile saved successfully!");
navigate("marks");
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

  awardXP(25, "Profile completed");
checkAndUnlockBadges();
alert("Profile saved successfully!");
navigate("marks");
}

function saveQuizAnswers() {
  const quiz = {
    future: document.getElementById("quizFuture")?.value || "",
    environment: document.getElementById("quizEnvironment")?.value || "",
    path: document.getElementById("quizPath")?.value || ""
  };

  if (!quiz.future || !quiz.environment || !quiz.path) {
    alert(typeof t === "function" ? t("alertCompleteQuiz") : "Please answer all quiz questions");
    return;
  }

  localStorage.setItem("alakhe_quiz", JSON.stringify(quiz));
  if (typeof saveHistory === "function") saveHistory("quiz", quiz);

  alert(typeof t === "function" ? t("alertQuizSaved") : "Quiz saved successfully!");
  navigate("career");
}

function saveChosenCareer(careerName) {
  const profile = JSON.parse(localStorage.getItem("alakhe_profile")) || {};
  profile.chosenCareer = careerName;

  localStorage.setItem("alakhe_profile", JSON.stringify(profile));
  if (typeof saveHistory === "function") saveHistory("chosenCareer", { chosenCareer: careerName });

  awardXP(20, "Career goal selected");
checkAndUnlockBadges();
alert(`${careerName} saved as your focus career 🎯`);
navigate("mission");

}

/* =========================
   MISSION HELPERS
========================= */
function getMissionGuidance(profile, marks) {
  if (!profile.interest) {
    return "Complete your profile so we can guide you properly.";
  }

  if (profile.interest === "Technology" && Number(marks.math || 0) >= 60) {
    return "You are showing potential for technology careers.";
  }

  if (
    profile.interest === "Health" &&
    Number(marks.science || 0) >= 50 &&
    Number(marks.english || 0) >= 50
  ) {
    return "You may be suited for health-related pathways. Keep improving your science and communication subjects.";
  }

  if (profile.interest === "Farming & Agriculture" && Number(marks.agri || 0) >= 50) {
    return "You are showing a strong direction toward agriculture and farming-related careers or businesses.";
  }

  if (profile.interest === "Business") {
    return "Your profile shows a possible business path. Build confidence in planning, communication, and money-related subjects.";
  }

  return "Keep improving your marks and exploring your options.";
}

function getMissionNextSteps(profile, marks) {
  const steps = [];

  if (Number(marks.math || 0) > 0 && Number(marks.math || 0) < 50) {
    steps.push("Improve Mathematics");
  }

  if (Number(marks.science || 0) > 0 && Number(marks.science || 0) < 50) {
    steps.push("Improve Science");
  }

  if (Number(marks.english || 0) > 0 && Number(marks.english || 0) < 50) {
    steps.push("Improve English");
  }

  if (profile.interest === "Farming & Agriculture") {
    steps.push("Explore farming business ideas");
  }

  if (profile.goal === "Business") {
    steps.push("Start thinking about a small business idea you can test early.");
  }

  if (profile.goal === "Both") {
    steps.push("Explore how a career can also help you build a business in the future.");
  }

  if (!steps.length) {
    steps.push("You are on the right track. Keep going.");
  }

  return steps;
}

/* =========================
   SUPPORT ENGINE
========================= */
function getSupportPlan() {
  const marks = JSON.parse(localStorage.getItem("alakhe_marks")) || {};
  const profile = JSON.parse(localStorage.getItem("alakhe_profile")) || {};

  const support = [];

  const checks = [
    {
      subject: "Mathematics",
      value: Number(marks.math || 0),
      weakBelow: 50,
      message: "Mathematics is important for technology, engineering, accounting, and many science-based careers.",
      tip: "Practice weekly, ask for support from teachers, and revise basic concepts often."
    },
    {
      subject: "Science",
      value: Number(marks.science || 0),
      weakBelow: 50,
      message: "Science supports careers in health, engineering, technology, and agriculture.",
      tip: "Focus on understanding key concepts, practical examples, and regular revision."
    },
    {
      subject: "English",
      value: Number(marks.english || 0),
      weakBelow: 50,
      message: "English is important for applications, communication, interviews, CV writing, and almost every career.",
      tip: "Read more often, improve writing, and ask for feedback on language work."
    },
    {
      subject: "Agricultural Science",
      value: Number(marks.agri || 0),
      weakBelow: 50,
      message: "Agricultural Science is important for farming, food production, and agriculture-based careers.",
      tip: "Study practical agriculture concepts and connect school work to real farming activities."
    }
  ];

  checks.forEach((item) => {
    if (item.value > 0 && item.value < item.weakBelow) {
      support.push({
        subject: item.subject,
        status: "Needs Improvement",
        message: item.message,
        tip: item.tip,
        level: "warning"
      });
    }
  });

  if (profile.interest === "Technology" && Number(marks.math || 0) < 50) {
    support.push({
      subject: "Technology Path",
      status: "Watch Mathematics",
      message: "You are interested in Technology, but Mathematics needs improvement for stronger tech career options.",
      tip: "Keep exploring tech, but work hard on Mathematics to unlock more opportunities.",
      level: "danger"
    });
  }

  if (profile.interest === "Health" && Number(marks.science || 0) < 50) {
    support.push({
      subject: "Health Path",
      status: "Watch Science",
      message: "You are interested in Health, but Science needs improvement for many health-related careers.",
      tip: "Focus on science support while also exploring related health pathways.",
      level: "danger"
    });
  }

  if (profile.interest === "Farming & Agriculture" && Number(marks.agri || 0) < 50) {
    support.push({
      subject: "Agriculture Path",
      status: "Watch Agricultural Science",
      message: "You are interested in Agriculture, but Agricultural Science needs attention for stronger readiness.",
      tip: "Strengthen Agricultural Science and also learn through practical farming exposure.",
      level: "danger"
    });
  }

  if (profile.goal === "Business") {
    support.push({
      subject: "Business Goal",
      status: "Build Business Skills",
      message: "Your goal includes business, so communication, planning, and confidence with money matter.",
      tip: "Keep improving English and numerical thinking while exploring small business ideas.",
      level: "good"
    });
  }

  return support;
}

/* =========================
   SMART ADVICE ENGINE
========================= */
function getSubjectTrend(current, previous) {
  const curr = Number(current || 0);
  const prev = Number(previous || 0);

  if (!prev && curr) return "new";
  if (curr - prev >= 5) return "improving";
  if (prev - curr >= 5) return "declining";
  return "stable";
}

function getSmartAdvice() {
  const history = typeof getHistory === "function" ? getHistory().filter(item => item.type === "marks") : [];
  const profile = JSON.parse(localStorage.getItem("alakhe_profile")) || {};

  if (history.length < 2) {
    return ["Keep saving your marks over time so the app can track your improvement."];
  }

  const latest = history[history.length - 1].data;
  const previous = history[history.length - 2].data;

  const advice = [];

  const mathTrend = getSubjectTrend(latest.math || latest.mathematics, previous.math || previous.mathematics);
  const scienceTrend = getSubjectTrend(latest.science, previous.science);
  const englishTrend = getSubjectTrend(latest.english, previous.english);
  const agriTrend = getSubjectTrend(latest.agri || latest.agriculturalScience, previous.agri || previous.agriculturalScience);

  if (mathTrend === "improving") {
    advice.push("Great improvement in Mathematics. Keep pushing because it opens more career options.");
  } else if (mathTrend === "declining") {
    advice.push("Mathematics is declining. Give it more attention because it matters for many careers.");
  }

  if (scienceTrend === "improving") {
    advice.push("Science is improving well. This supports technical, health, and agriculture-related careers.");
  } else if (scienceTrend === "declining") {
    advice.push("Science is dropping. Revise key concepts and ask for support where needed.");
  }

  if (englishTrend === "improving") {
    advice.push("English is improving. This is important for applications, communication, and nearly every career.");
  } else if (englishTrend === "declining") {
    advice.push("English needs attention. It is important for CVs, interviews, and career readiness.");
  }

  if (agriTrend === "improving") {
    advice.push("Agricultural Science is improving. This is strong for farming and agriculture pathways.");
  } else if (agriTrend === "declining") {
    advice.push("Agricultural Science is dropping. Spend more time on practical and theory understanding.");
  }

  if (profile.chosenCareer && typeof careerRequirements !== "undefined" && careerRequirements[profile.chosenCareer]) {
    const req = careerRequirements[profile.chosenCareer].recommendedMarks || {};
    const gaps = [];

    Object.entries(req).forEach(([subject, needed]) => {
      let currentMark = 0;

      if (subject === "Mathematics") currentMark = Number(latest.math || latest.mathematics || 0);
      if (subject === "Science") currentMark = Number(latest.science || 0);
      if (subject === "English") currentMark = Number(latest.english || 0);
      if (subject === "Life Sciences") currentMark = Number(latest.lifeSciences || 0);
      if (subject === "Accounting") currentMark = Number(latest.accounting || 0);
      if (subject === "Agricultural Science") currentMark = Number(latest.agri || latest.agriculturalScience || 0);

      if (currentMark < needed) {
        gaps.push(`${subject} (need ${needed}%, have ${currentMark}%)`);
      }
    });

    if (gaps.length === 0) {
      advice.push(`You are currently on track for your chosen career: ${profile.chosenCareer}.`);
    } else {
      advice.push(`For ${profile.chosenCareer}, focus on improving: ${gaps.join(", ")}.`);
    }
  }

  if (!advice.length) {
    advice.push("Your progress looks steady. Keep updating your marks so the app can guide you better.");
  }

  return advice;
}

/* =========================
   CAREER READINESS
========================= */
function getCareerReadiness(profile, marks) {
  if (
    !profile.chosenCareer ||
    typeof careerRequirements === "undefined" ||
    !careerRequirements[profile.chosenCareer]
  ) {
    return {
      percentage: 0,
      status: "No Career Selected",
      details: ["Select a career goal to track readiness."]
    };
  }

  const req = careerRequirements[profile.chosenCareer].recommendedMarks || {};
  const details = [];
  let totalSubjects = 0;
  let passedSubjects = 0;

  Object.entries(req).forEach(([subject, needed]) => {
    let currentMark = 0;

    if (subject === "Mathematics") currentMark = Number(marks.math || marks.mathematics || 0);
    if (subject === "Science") currentMark = Number(marks.science || 0);
    if (subject === "English") currentMark = Number(marks.english || 0);
    if (subject === "Life Sciences") currentMark = Number(marks.lifeSciences || 0);
    if (subject === "Accounting") currentMark = Number(marks.accounting || 0);
    if (subject === "Agricultural Science") currentMark = Number(marks.agri || marks.agriculturalScience || 0);

    totalSubjects += 1;

    if (currentMark >= needed) {
      passedSubjects += 1;
      details.push(`${subject}: On Track (${currentMark}% / need ${needed}%)`);
    } else {
      details.push(`${subject}: Needs Support (${currentMark}% / need ${needed}%)`);
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

/* =========================
   CV HELPERS
========================= */
function previewCV() {
  const register = JSON.parse(localStorage.getItem("alakhe_register")) || {};
  const cv = {
    objective: document.getElementById("cvObjective")?.value || "",
    skills: document.getElementById("cvSkills")?.value || "",
    activities: document.getElementById("cvActivities")?.value || "",
    achievements: document.getElementById("cvAchievements")?.value || ""
  };

  const preview = `
====== CURRICULUM VITAE ======

Name: ${register.firstName || ""} ${register.lastName || ""}
Phone: ${register.phoneNumber || ""}
Email: ${register.emailAddress || ""}
Location: ${register.location || ""}

Career Objective:
${cv.objective || ""}

Skills:
${cv.skills || ""}

Activities & Experience:
${cv.activities || ""}

Achievements:
${cv.achievements || ""}
  `;

  alert(preview);
}

function downloadCVasPDF() {
  const register = JSON.parse(localStorage.getItem("alakhe_register")) || {};
  const element = document.getElementById("cvPreviewArea");

  if (!element) {
    alert("CV preview area not found.");
    return;
  }

  const opt = {
    margin: 0.5,
    filename: `${register.firstName || "Learner"}_${register.lastName || "CV"}_CV.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
  };

  html2pdf().set(opt).from(element).save();
}

function saveCV() {
  const cv = {
    objective: document.getElementById("cvObjective")?.value || "",
    skills: document.getElementById("cvSkills")?.value || "",
    activities: document.getElementById("cvActivities")?.value || "",
    achievements: document.getElementById("cvAchievements")?.value || ""
  };

  localStorage.setItem("alakhe_cv", JSON.stringify(cv));
  alert("CV saved successfully!");
}

function updateCVPreview() {
  const objective = document.getElementById("cvObjective")?.value || "-";
  const skills = document.getElementById("cvSkills")?.value || "-";
  const activities = document.getElementById("cvActivities")?.value || "-";
  const achievements = document.getElementById("cvAchievements")?.value || "-";

  const previewObjective = document.getElementById("previewObjective");
  const previewSkills = document.getElementById("previewSkills");
  const previewActivities = document.getElementById("previewActivities");
  const previewAchievements = document.getElementById("previewAchievements");

  if (previewObjective) previewObjective.textContent = objective;
  if (previewSkills) previewSkills.textContent = skills;
  if (previewActivities) previewActivities.textContent = activities;
  if (previewAchievements) previewAchievements.textContent = achievements;
}

function getDailyMission(profile, marks) {
  const tasks = [];
  const weakMath = Number(marks.math || 0) > 0 && Number(marks.math || 0) < 50;
  const weakScience = Number(marks.science || 0) > 0 && Number(marks.science || 0) < 50;
  const weakEnglish = Number(marks.english || 0) > 0 && Number(marks.english || 0) < 50;
  const weakAgri = Number(marks.agri || 0) > 0 && Number(marks.agri || 0) < 50;

  if (profile.chosenCareer) {
    tasks.push({
      title: `Learn more about ${profile.chosenCareer}`,
      action: `Read about what a ${profile.chosenCareer} does and how people start in this field.`,
      reason: "Understanding the real path helps you choose with confidence."
    });
  }

  if (weakMath) {
    tasks.push({
      title: "Revise one Mathematics topic",
      action: "Spend 20 minutes revising one Maths topic you struggled with.",
      reason: "Mathematics opens many career paths and improves problem-solving."
    });
  }

  if (weakScience) {
    tasks.push({
      title: "Revise one Science concept",
      action: "Review one Science topic and write down the key idea in your own words.",
      reason: "Science supports health, technical, and agriculture careers."
    });
  }

  if (weakEnglish) {
    tasks.push({
      title: "Strengthen English today",
      action: "Read one passage and write 5 clear sentences in English.",
      reason: "English matters for applications, communication, CVs, and interviews."
    });
  }

  if (weakAgri) {
    tasks.push({
      title: "Improve Agricultural Science",
      action: "Review one agriculture topic and connect it to real farming life around you.",
      reason: "Agriculture knowledge supports both farming jobs and business ideas."
    });
  }

  if (profile.goal === "Business") {
    tasks.push({
      title: "Think like a business builder",
      action: "Write one small business idea based on something people need in your area.",
      reason: "Business starts by solving real problems for real people."
    });
  }

  if (profile.goal === "Both") {
    tasks.push({
      title: "Link career and business",
      action: "Think of one way your future career could also become a business one day.",
      reason: "A skill can grow into both work and entrepreneurship."
    });
  }

  if (profile.interest === "Farming & Agriculture") {
    tasks.push({
      title: "Observe agriculture around you",
      action: "Notice one farming activity or product in your area and think how it makes money.",
      reason: "Real exposure helps you see how agriculture works in everyday life."
    });
  }

  if (profile.interest === "Technology") {
    tasks.push({
      title: "Build digital confidence",
      action: "Learn one new thing about websites, apps, or computers today.",
      reason: "Technology grows through small daily learning."
    });
  }

  if (!tasks.length) {
    tasks.push({
      title: "Take one future step today",
      action: "Complete your profile, explore one career, or improve one subject.",
      reason: "Small consistent action builds a strong future."
    });
  }

  return tasks[0];
}

function completeDailyMission() {
  const completed = getMissionCompletionDates();
  const today = getTodayDateString();

  if (!completed.includes(today)) {
    completed.push(today);
    completed.sort();
    localStorage.setItem("alakhe_daily_mission_done", JSON.stringify(completed));

    awardXP(20, "Mission completed");
  }

  checkAndUnlockBadges();
  renderApp();
}

function getMissionCompletionDates() {
  return JSON.parse(localStorage.getItem("alakhe_daily_mission_done")) || [];
}

function getTodayDateString() {
  return new Date().toISOString().slice(0, 10);
}

function getMissionStreakData() {
  const dates = getMissionCompletionDates().slice().sort();

  if (!dates.length) {
    return {
      currentStreak: 0,
      totalCompleted: 0,
      todayDone: false
    };
  }

  const today = getTodayDateString();
  const todayDone = dates.includes(today);

  let currentStreak = 0;

  const dateSet = new Set(dates);
  const cursor = new Date();

  if (!todayDone) {
    cursor.setDate(cursor.getDate() - 1);
  }

  while (true) {
    const key = cursor.toISOString().slice(0, 10);
    if (dateSet.has(key)) {
      currentStreak += 1;
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }

  return {
    currentStreak,
    totalCompleted: dates.length,
    todayDone
  };
}

function getStreakMessage(streakCount) {
  if (streakCount >= 30) return "You are building serious discipline.";
  if (streakCount >= 14) return "Two weeks strong. Keep going.";
  if (streakCount >= 7) return "One week streak. That is powerful.";
  if (streakCount >= 3) return "You are building momentum.";
  if (streakCount >= 1) return "Good start. Show up again tomorrow.";
  return "Start your streak today.";
}

function openParentView() {
  const savedPin = localStorage.getItem("alakhe_parent_pin");

  if (!savedPin) {
    const newPin = prompt("Create a 4-digit Parent PIN:");
    if (!newPin) return;

    if (!/^\d{4}$/.test(newPin)) {
      alert("Parent PIN must be exactly 4 digits.");
      return;
    }

    localStorage.setItem("alakhe_parent_pin", newPin);
    alert("Parent PIN created successfully.");
    navigate("parent");
    return;
  }

  const enteredPin = prompt("Enter Parent PIN:");
  if (!enteredPin) return;

  if (enteredPin === savedPin) {
    navigate("parent");
  } else {
    alert("Incorrect Parent PIN.");
  }
}

function resetParentPin() {
  const savedPin = localStorage.getItem("alakhe_parent_pin");

  if (!savedPin) {
    alert("No Parent PIN has been created yet.");
    return;
  }

  const enteredPin = prompt("Enter current Parent PIN:");
  if (!enteredPin) return;

  if (enteredPin !== savedPin) {
    alert("Incorrect Parent PIN.");
    return;
  }

  const newPin = prompt("Enter new 4-digit Parent PIN:");
  if (!newPin) return;

  if (!/^\d{4}$/.test(newPin)) {
    alert("Parent PIN must be exactly 4 digits.");
    return;
  }

  localStorage.setItem("alakhe_parent_pin", newPin);
  alert("Parent PIN updated successfully.");
}

function getGamificationData() {
  return JSON.parse(localStorage.getItem("alakhe_gamification")) || {
    xp: 0,
    badges: []
  };
}

function saveGamificationData(data) {
  localStorage.setItem("alakhe_gamification", JSON.stringify(data));
}

function awardXP(amount, reason = "") {
  const data = getGamificationData();
  data.xp += amount;
  saveGamificationData(data);

  if (reason) {
    alert(`+${amount} XP earned! ${reason}`);
  } else {
    alert(`+${amount} XP earned!`);
  }

  renderApp();
}

function getLevelFromXP(xp) {
  if (xp >= 1000) return { level: 5, name: "Future Leader" };
  if (xp >= 700) return { level: 4, name: "Path Builder" };
  if (xp >= 400) return { level: 3, name: "Career Explorer" };
  if (xp >= 200) return { level: 2, name: "Focused Learner" };
  return { level: 1, name: "Starter" };
}

function unlockBadge(badgeName) {
  const data = getGamificationData();

  if (!data.badges.includes(badgeName)) {
    data.badges.push(badgeName);
    saveGamificationData(data);
    alert(`🏅 Badge unlocked: ${badgeName}`);
  }
}

function checkAndUnlockBadges() {
  const register = JSON.parse(localStorage.getItem("alakhe_register")) || {};
  const profile = JSON.parse(localStorage.getItem("alakhe_profile")) || {};
  const marksHistory = JSON.parse(localStorage.getItem("alakhe_marks_history")) || [];
  const streak = typeof getMissionStreakData === "function"
    ? getMissionStreakData()
    : { currentStreak: 0 };

  if (register.firstName) unlockBadge("Registered");
  if (profile.chosenCareer) unlockBadge("Career Chosen");
  if (marksHistory.length >= 1) unlockBadge("First Marks Saved");
  if (marksHistory.length >= 3) unlockBadge("Progress Tracker");
  if (streak.currentStreak >= 3) unlockBadge("3 Day Streak");
  if (streak.currentStreak >= 7) unlockBadge("7 Day Streak");
}

function getRewardMessage(levelName, streakCount) {
  if (streakCount >= 7) return "You are building serious momentum.";
  if (levelName === "Future Leader") return "You are leading your future with discipline.";
  if (levelName === "Path Builder") return "You are becoming more focused every day.";
  if (levelName === "Career Explorer") return "You are learning who you can become.";
  return "Every small step matters.";
}




/* =========================
   APP START
========================= */
document.addEventListener("DOMContentLoaded", () => {
  renderApp();

  if (currentScreen === "progress" && typeof drawProgressChart === "function") {
    setTimeout(() => {
      drawProgressChart();
    }, 100);
  }

  if (currentScreen === "profile" && typeof autoSuggestProfileCareers === "function") {
    setTimeout(() => {
      autoSuggestProfileCareers();
    }, 100);
  }
});

