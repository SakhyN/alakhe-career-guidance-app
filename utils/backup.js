/* =========================
   BACKUP & RESTORE
   Exports all "alakhe_*" localStorage keys to a downloadable
   JSON file, and restores them from a previously exported file.
========================= */

function getAllAlakheData() {
  const data = {};

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith("alakhe_")) {
      try {
        data[key] = JSON.parse(localStorage.getItem(key));
      } catch (e) {
        data[key] = localStorage.getItem(key);
      }
    }
  }

  return data;
}

function exportAllData() {
  const data = getAllAlakheData();

  if (Object.keys(data).length === 0) {
    alert("There is no saved data yet to back up. Complete your profile first.");
    return;
  }

  const register = data.alakhe_register || {};
  const exportPayload = {
    app: "Alakhe App",
    exportedAt: new Date().toISOString(),
    learnerName: `${register.firstName || ""} ${register.lastName || ""}`.trim() || "Learner",
    data
  };

  const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const safeName = (exportPayload.learnerName || "Learner").replace(/[^a-zA-Z0-9]+/g, "_");
  const filename = `Alakhe_Backup_${safeName}_${new Date().toISOString().slice(0, 10)}.json`;

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  alert("Backup file downloaded. Keep it somewhere safe (email it to yourself or save it to a USB drive).");
}

function importAllDataFromFile(fileInputId) {
  const input = document.getElementById(fileInputId);
  if (!input || !input.files || !input.files[0]) {
    alert("Please choose a backup file first.");
    return;
  }

  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    try {
      const parsed = JSON.parse(event.target.result);
      const incomingData = parsed && parsed.data ? parsed.data : parsed;

      if (!incomingData || typeof incomingData !== "object") {
        alert("This does not look like a valid Alakhe backup file.");
        return;
      }

      const validKeys = Object.keys(incomingData).filter(key => key.startsWith("alakhe_"));

      if (!validKeys.length) {
        alert("This does not look like a valid Alakhe backup file.");
        return;
      }

      const confirmed = confirm(
        `This will replace your current saved data with the data from this backup (${validKeys.length} item(s)). Continue?`
      );
      if (!confirmed) return;

      validKeys.forEach(key => {
        const value = incomingData[key];
        localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
      });

      alert("Backup restored successfully. The app will now refresh your data.");
      input.value = "";
      navigate("dashboard");
    } catch (e) {
      alert("Could not read this file. Please make sure it is an unedited Alakhe backup file.");
    }
  };

  reader.readAsText(file);
}

function clearAllAlakheData() {
  const confirmed = confirm(
    "This will permanently delete all saved Alakhe data on this device (profile, marks, progress, badges). This cannot be undone. Continue?"
  );
  if (!confirmed) return;

  const doubleConfirmed = confirm("Are you absolutely sure? Consider exporting a backup first.");
  if (!doubleConfirmed) return;

  const keysToRemove = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith("alakhe_")) keysToRemove.push(key);
  }
  keysToRemove.forEach(key => localStorage.removeItem(key));

  alert("All saved data has been cleared.");
  navigate("home");
}
