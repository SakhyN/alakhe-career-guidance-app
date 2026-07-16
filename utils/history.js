function saveHistory(type, data) {
  const history = JSON.parse(localStorage.getItem("alakhe_history")) || [];

  history.push({
    type,
    data,
    date: new Date().toISOString()
  });

  localStorage.setItem("alakhe_history", JSON.stringify(history));
}

function getHistory() {
  return JSON.parse(localStorage.getItem("alakhe_history")) || [];
}