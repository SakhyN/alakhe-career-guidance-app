function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key, fallback = null) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : fallback;
}