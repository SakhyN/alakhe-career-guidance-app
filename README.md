# Alakhe — AI Career Guidance App for South African Learners

> Bilingual (English/isiXhosa) career guidance web app for Grade 8–10 South African learners — AI career matching, bursary finder and subject-career mapping.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![AI](https://img.shields.io/badge/AI-Claude_API-orange?style=flat)
![isiXhosa](https://img.shields.io/badge/Language-isiXhosa%20%2F%20English-green?style=flat)
![Education](https://img.shields.io/badge/Sector-Education-blue?style=flat)

## 📋 Overview
Alakhe ("to build" in isiXhosa) is a career guidance platform designed specifically for South African high school learners. It uses AI to match learners to careers based on their subjects and interests, provides real bursary data for SA universities, and supports isiXhosa translation throughout.

## ✨ Features
- 🤖 AI career matching via Anthropic Claude API
- 🌍 Full isiXhosa/English bilingual support
- 📚 8 South African career profiles with real salary data
- 🎓 11 verified South African bursary programmes
- 📊 Subject-to-career pathway mapping (NSC subjects)
- 💾 Persistent learner profile and progress tracking
- 📤 Data export/import backup system
- 🔍 Bursary and funding finder

## 🛠 Tech Stack
| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| AI | Anthropic Claude API |
| Storage | localStorage (persistent profiles) |
| Testing | Node.js test harness (38 checks) |

## 📁 Project Structure
```
├── index.html              # Landing / onboarding
├── dashboard.html          # Learner dashboard
├── careers.html            # Career explorer
├── bursaries.html          # SA bursary finder
├── profile.html            # Learner profile
└── screens/
    ├── dashboard.js        # Dashboard logic
    ├── careers.js          # Career matching
    ├── bursaries.js        # Bursary data (11 programmes)
    └── ai-match.js         # Claude API integration
```

## 🎓 Bursary Programmes Included
NSFAS · Funza Lushaka (Teaching) · SETA Bursaries · Old Mutual · Standard Bank · Absa · FirstRand · Anglo American · De Beers · Government Bursaries · University Merit Awards

## 📦 Installation
```bash
git clone https://github.com/SakhyN/alakhe-career-guidance-app.git
cd alakhe-career-guidance-app
# Open index.html — works without API key in demo mode
# Add Claude API key for live AI matching
```

## 🎯 Impact
Addresses the gap in career guidance for Eastern Cape learners who lack access to professional career counsellors.

## 📄 License
MIT © 2026 Sakumzi Ngqobe — SakhySisa IT Solutions
