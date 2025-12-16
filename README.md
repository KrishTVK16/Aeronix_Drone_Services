# Aeronix Drone Services

🚁 **Professional Drone Services Platform** - A modern, fully responsive HTML/CSS/JavaScript application for aerial mapping, thermal inspection, and autonomous logistics services.

![Aeronix Banner](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JavaScript-blue) ![Status](https://img.shields.io/badge/Status-Production%20Ready-success)

## ✨ Features

- **Pure HTML/CSS/JavaScript** - No build process required, runs directly in browser
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **AI-Powered Chat Widget** - Google GenAI integration with "Nexus" AI assistant
- **Modern UI/UX** - Glassmorphism effects, smooth animations, gradient designs
- **Bootstrap 5** - Professional styling framework
- **Multiple Pages** - Home, Services, About, Contact, Technology, Blog, Careers, Privacy

## 📋 Prerequisites

- Modern web browser (Chrome, Firefox, Edge, Safari)
- Node.js (optional, for local development server)
- Google GenAI API Key (optional, for chat functionality)

## 🚀 Quick Start

### Option 1: Direct Browser Access
1. Clone the repository or download the files
2. Open `index.html` in your web browser
3. Navigate through the website

### Option 2: Local Development Server (Recommended)

```powershell
# Install dependencies (only @google/genai for chat)
npm install

# Start development server on port 8000
npm run dev

# Or just start without opening browser
npm start
```

The application will be available at `http://localhost:8000`

## 🔑 Configuring the AI Chat Widget

The chat widget requires a Google GenAI API key to function. Follow these steps:

### 1. Get Your API Key
Visit [Google AI Studio](https://aistudio.google.com/app/apikey) and create a new API key.

### 2. Configure the Application
Edit `config.js` and replace the placeholder with your actual API key:

```javascript
export const config = {
    GEMINI_API_KEY: 'your-actual-api-key-here',
    // ... other settings
};
```

### 3. Security Note
⚠️ **IMPORTANT**: The `config.js` file is already added to `.gitignore` to prevent accidentally committing your API key. Never share your API key publicly.

## 📁 Project Structure

```
aeronix-drone-services/
├── index.html          # Landing page with hero section
├── services.html       # Services overview
├── about.html          # About page
├── contact.html        # Contact form
├── technology.html     # Fleet and technology
├── blog.html           # Blog page
├── careers.html        # Careers page
├── privacy.html        # Privacy policy
├── app.js              # Main application JavaScript
├── db.js               # Database utilities (localStorage)
├── config.js           # API configuration (gitignored)
├── style.css           # Custom styles
├── package.json        # Dependencies
└── README.md           # This file
```

## 🎨 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, animations, gradients
- **JavaScript (ES6+)** - Modern JavaScript with modules
- **Bootstrap 5** - UI framework
- **Bootstrap Icons** - Icon library
- **Google Fonts (Inter)** - Typography
- **Google GenAI SDK** - AI chat functionality

## 🌐 Browser Compatibility

- ✅ Chrome/Edge (Chromium) 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Running Without API Key
The application works perfectly fine without an API key. The chat widget will display a message indicating that the API key is not configured, but all other functionality remains intact.

### Modifying Styles
Edit `style.css` to customize the appearance. The design uses CSS custom properties (variables) for easy theming:

```css
:root {
    --autonix-bg: #0b0f14;
    --autonix-blue: #3b82f6;
    --autonix-cyan: #38bdf8;
    /* ... more variables */
}
```

### Adding New Pages
1. Copy an existing HTML file as a template
2. Update the content while keeping the navbar and footer structure
3. Ensure `app.js` is loaded as a module: `<script type="module" src="app.js"></script>`

## 📦 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to Settings → Pages
3. Select your main branch
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Or connect your Git repository
3. No build command needed - it's a static site!

### Vercel
```bash
vercel --prod
```

### Any Static Host
Upload all files to your hosting provider. No special configuration needed!

## 🛠️ Troubleshooting

### Chat widget not working?
- Check if `config.js` has a valid API key
- Open browser console (F12) to see error messages
- Verify internet connection for Google GenAI API calls

### Seeing CORS errors?
- Use a local development server (not `file://` protocol)
- Run `npm run dev` or use Python's SimpleHTTPServer

### Styles not loading?
- Ensure `style.css` is in the same directory as HTML files
- Check browser console for 404 errors
- Clear browser cache (Ctrl+F5)

## 📝 License

MIT License - Feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## 📧 Contact

For questions or support, visit the contact page or reach out through the chat widget.

---

**Built with ❤️ for the drone industry** | [Live Demo](#) | [Documentation](#)
