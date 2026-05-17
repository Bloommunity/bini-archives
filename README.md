# BINI's Blooming Legacy Archive

A beautiful Nuxt 3 + Tailwind CSS website showcasing BINI group's achievements, discography, gallery, and goals.

## 🚀 Quick Start

### Prerequisites

- Node.js 16.11 or newer
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
bini-archives/
├── pages/              # Route pages
│   ├── index.vue       # Home page with hall of fame
│   ├── achievements.vue # Achievements timeline
│   ├── discography.vue # Albums and singles
│   ├── gallery.vue     # Photo galleries
│   └── goals.vue       # Goals and targets
├── components/         # Reusable Vue components
├── layouts/           # Layout templates
│   └── default.vue    # Navigation and footer
├── data/              # JSON data files
│   ├── 2022/
│   │   └── 06/
│   │       └── achievements.json
│   ├── 2023/
│   │   └── 06/
│   │       └── achievements.json
│   ├── 2024/
│   │   ├── 01/
│   │   │   └── achievements.json
│   │   └── 03/
│   │       └── achievements.json
│   ├── 2025/
│   │   └── 01/
│   │       └── achievements.json
│   ├── discography.json
│   ├── gallery.json
│   └── goals.json
├── utils/             # Utility functions
│   └── achievements.ts
├── assets/            # CSS and static files
│   └── css/
│       └── main.css
├── nuxt.config.ts     # Nuxt configuration
└── tailwind.config.ts # Tailwind configuration
```

## 📊 Data Organization

All record data is stored in JSON files organized by year and month:

- **Achievements**: `data/YYYY/MM/achievements.json`
- **Discography**: `data/discography.json`
- **Gallery**: `data/gallery.json`
- **Goals**: `data/goals.json`

Each achievement entry includes:

- `id`: Unique identifier
- `title`: Achievement title
- `description`: Short description
- `icon`: Emoji icon
- `date`: Achievement date (YYYY-MM-DD)
- `category`: Category (music, award, chart, etc.)
- `details`: Detailed information

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Data Loading**: Achievements loaded from JSON files by year/month
- **Achievement Timeline**: Browse achievements by year
- **Discography**: Albums and singles information
- **Gallery**: Photo gallery collections
- **Goals Tracking**: Progress bars for ongoing goals
- **Hall of Fame**: Featured achievements showcase

## 🛠️ Technologies

- **Nuxt 3**: Vue 3 framework with SSR support
- **Tailwind CSS**: Utility-first CSS framework
- **Vue 3**: Reactive JavaScript framework
- **TypeScript**: Type-safe JavaScript

## 📝 Adding New Data

To add new achievements:

1. Create a JSON file in `data/YYYY/MM/achievements.json`
2. Follow the structure of existing achievement files
3. The page will automatically load and display new data

Example:

```json
{
	"achievements": [
		{
			"id": 12,
			"title": "New Achievement",
			"description": "Achievement description",
			"icon": "🏆",
			"date": "2025-02-15",
			"category": "milestone",
			"details": "Detailed information about the achievement"
		}
	]
}
```

## 🚀 Deployment

The project can be deployed to Netlify, Vercel, or any static hosting:

```bash
# Generate static output
npm run generate

# Deploy the dist/ folder
```

## 📄 License

This project is for the BINI fan community.

## 🤝 Contributing

Feel free to add new achievements, gallery items, or improve the design!

---

**Created with ❤️ by BINI BLOOMS**
