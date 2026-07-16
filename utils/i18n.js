let currentLanguage = localStorage.getItem("alakhe_language") || "en";

const translations = {
  en: {
    home: {
      badge: "Built for Grade 8 to 12 learners",
      title: "Alakhe App",
      subtitle: "Build your future step by step.",
      text: "Alakhe helps you discover careers, track progress, improve weak subjects, and move closer to the future you want.",
      chosenCareer: "Chosen Career",
      readiness: "Readiness",
      status: "Status",
      growthLevel: "Your Growth Level",
      noBadgesYet: "No badges yet",
      careerExposure: "Career Exposure",
      careerExposureText: "Explore careers you may have never heard about and understand what they involve.",
      businessIdeas: "Business Ideas",
      businessIdeasText: "Discover business paths and small startup ideas that match your strengths.",
      profileGuidance: "Profile Guidance",
      profileGuidanceText: "Get guidance based on your grade, interests, favourite subjects, and goals.",
      myMission: "My Mission",
      myMissionText: "Save paths you like and follow the next steps that fit your future journey.",
      parentView: "Parent View"
    },
    common: {
      appName: "Alakhe App",
      language: "Language",
      notSelectedYet: "Not selected yet",
      noBadgesYet: "No badges yet"
    },
    nav: {
      home: "Home",
      profile: "Profile",
      marks: "Marks",
      progress: "Progress",
      mission: "Mission"
    }
  },

  xh: {
    home: {
      badge: "Yenzelwe abafundi bakaGrade 8 ukuya kuGrade 12",
      title: "Alakhe App",
      subtitle: "Yakha ikamva lakho inyathelo ngenyathelo.",
      text: "Alakhe ikunceda ufumane amakhondo omsebenzi, ulandele inkqubela, uphucule izifundo ezibuthathaka, uze usondele kwikamva olifunayo.",
      chosenCareer: "Umsebenzi Okhethiweyo",
      readiness: "Ukulungela",
      status: "Ubume",
      growthLevel: "Inqanaba Lokukhula",
      noBadgesYet: "Akukho badge okwangoku",
      careerExposure: "Ukuboniswa Kwemisebenzi",
      careerExposureText: "Phonononga imisebenzi onokuba awuzange uve ngayo kwaye uqonde ukuba ibandakanya ntoni.",
      businessIdeas: "Izimvo Zamashishini",
      businessIdeasText: "Fumana iindlela zamashishini nezimvo zokuqalisa ezihambelana namandla akho.",
      profileGuidance: "Isikhokelo Sephrofayili",
      profileGuidanceText: "Fumana isikhokelo ngokwebakala lakho, umdla wakho, izifundo ozithandayo, neenjongo zakho.",
      myMission: "Uhambo Lwam",
      myMissionText: "Gcina iindlela ozithandayo kwaye ulandele amanyathelo alandelayo afanele ikamva lakho.",
      parentView: "Icandelo Labazali"
    },
    common: {
      appName: "Alakhe App",
      language: "Ulwimi",
      notSelectedYet: "Ayikakhethwa",
      noBadgesYet: "Akukho badge okwangoku"
    },
    nav: {
      home: "Ekhaya",
      profile: "Iprofayili",
      marks: "Amanqaku",
      progress: "Inkqubela",
      mission: "Uhambo"
    }
  }
};

function t(key) {
  const keys = key.split(".");
  let value = translations[currentLanguage];

  for (const k of keys) {
    value = value?.[k];
  }

  if (value !== undefined) return value;

  let fallback = translations.en;
  for (const k of keys) {
    fallback = fallback?.[k];
  }

  return fallback !== undefined ? fallback : key;
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("alakhe_language", lang);
  renderApp();
}
