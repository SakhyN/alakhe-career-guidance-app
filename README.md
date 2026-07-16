# Alakhe App

A comprehensive career guidance and business education platform designed to help students explore career paths and develop business skills.

## Features

- **Career Exploration**: Browse and discover different career paths
- **Career Requirements**: Understand prerequisites and requirements for various careers
- **Quiz System**: Test knowledge and assess career interests
- **Progress Tracking**: Monitor learning progress and achievements
- **Multi-language Support**: Available in English and isiXhosa
- **User Profiles**: Create and manage user profiles
- **Business Education**: Learn about business fundamentals
- **CV Builder**: Generate professional CVs
- **Support System**: Access help and resources

## Project Structure

```
Alakhe App/
├── index.html          # Main HTML entry point
├── app.js              # Main application file
├── style.css           # Styling
├── data/               # Data files
│   ├── careers.js
│   ├── career_clusters.js
│   ├── career_requirements.js
│   └── business.js
├── screens/            # Screen/page components
│   ├── home.js
│   ├── register.js
│   ├── profile.js
│   ├── marks.js
│   ├── progress.js
│   ├── quiz.js
│   ├── career.js
│   ├── business.js
│   ├── support.js
│   ├── mission.js
│   └── cv.js
├── utils/              # Utility functions
│   ├── helpers.js
│   ├── storage.js
│   ├── i18n.js        # Internationalization
│   └── history.js
└── images/            # Image assets
```

## Getting Started

### Prerequisites

- Node.js (optional, for development server)
- Modern web browser

### Installation

1. Clone or download the project
2. Install dependencies (optional):
   ```bash
   npm install
   ```

### Running Locally

**Option 1: Using npm**
```bash
npm start
# or for live reload
npm run serve
```

**Option 2: Using Python** (if installed)
```bash
python -m http.server 8000
```

**Option 3: Direct file**
Open `index.html` directly in your browser

Then navigate to `http://localhost:8000` in your browser.

## Development

### Scripts

- `npm start` - Start development server on port 8000
- `npm run dev` - Same as start
- `npm run serve` - Start with live reload
- `npm run format` - Format code with Prettier

### Code Style

The project uses Prettier for code formatting. Run `npm run format` to auto-format your code.

## External Dependencies

The application uses the following CDN libraries:

- **html2pdf.js** - PDF generation for CV
- **Chart.js** - Data visualization for progress tracking

## Features in Detail

### Internationalization (i18n)
The app supports multiple languages. Language preferences are stored in localStorage.

### Local Storage
User data including profiles, marks, and progress are persisted using browser localStorage.

### Navigation
The app uses a client-side routing system with screen-based navigation.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT

## Contact & Support

For issues or feature requests, contact the support team through the in-app support feature.
