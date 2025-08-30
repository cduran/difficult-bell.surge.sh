# Difficult Bell - Modern Web Solutions

[![Deploy to Surge.sh](https://github.com/cduran/difficult-bell.surge.sh/actions/workflows/deploy.yml/badge.svg)](https://github.com/cduran/difficult-bell.surge.sh/actions/workflows/deploy.yml)
[![Website](https://img.shields.io/website?url=https%3A//difficult-bell.surge.sh)](https://difficult-bell.surge.sh)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A beautiful, modern website built with the Lit framework and deployed on Surge.sh. This project showcases cutting-edge web development practices using Web Components, modern CSS, and optimal performance techniques.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional interface with smooth animations
- ⚡ **Lightning Fast**: Optimized performance with minimal bundle size
- 📱 **Mobile First**: Responsive design that works on all devices
- 🚀 **Modern Stack**: Built with Lit Framework, Vite, and ES6+ modules
- 🔧 **Developer Experience**: Hot reloading, fast builds, and great debugging

## 🛠️ Technology Stack

### Frontend
- **Lit Framework** - Modern web components framework
- **Web Components** - Native browser APIs for reusable components
- **ES6+ Modules** - Modern JavaScript features
- **CSS Grid & Flexbox** - Advanced layout techniques
- **CSS Custom Properties** - Dynamic theming system

### Build Tools
- **Vite** - Next generation frontend tooling
- **ESBuild** - Ultra-fast JavaScript bundler
- **Hot Module Replacement** - Instant development feedback
- **Tree Shaking** - Optimized bundle size

### Deployment
- **Surge.sh** - Simple, fast static hosting
- **CDN Distribution** - Global content delivery
- **HTTPS Enabled** - Secure by default
- **Custom Domains** - Professional branding

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/difficult-bell.surge.sh.git
   cd difficult-bell.surge.sh
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Surge.sh

1. **Install Surge globally (if not already installed)**
   ```bash
   npm install -g surge
   ```

2. **Deploy with a single command**
   ```bash
   npm run deploy
   ```

3. **Custom domain deployment**
   ```bash
   surge dist/ your-custom-domain.com
   ```

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy to surge
cd dist
surge
```

### 🤖 Automated Deployment with GitHub Actions

This project includes a GitHub Action that automatically deploys to Surge.sh when you push to the main branch.

#### Setup GitHub Actions Deployment

1. **Get your Surge token**
   ```bash
   # Login to surge (if not already logged in)
   surge login
   
   # Get your token
   surge token
   ```

2. **Add the token to GitHub Secrets**
   - Go to your GitHub repository
   - Navigate to `Settings` → `Secrets and variables` → `Actions`
   - Click `New repository secret`
   - Name: `SURGE_TOKEN`
   - Value: Your surge token from step 1
   - Click `Add secret`

3. **The workflow will automatically:**
   - ✅ Trigger on every push to main branch
   - ✅ Install dependencies
   - ✅ Build the project
   - ✅ Deploy to difficult-bell.surge.sh
   - ✅ Can also be triggered manually from GitHub Actions tab

#### Manual Workflow Trigger
You can also trigger the deployment manually:
- Go to the `Actions` tab in your GitHub repository
- Select the "Deploy to Surge.sh" workflow
- Click `Run workflow`

#### 🛠️ Deployment Helper Script
For easier local development and setup, use the included helper script:

```bash
# Make the script executable (first time only)
chmod +x scripts/deploy-helper.sh

# Run the helper script
./scripts/deploy-helper.sh
```

The script provides options to:
- ✅ Check/Install Surge CLI
- 🔑 Login to Surge.sh
- 🎫 Get your Surge token for GitHub Actions
- 🚀 Deploy locally
- 📊 Check deployment status

## 🎨 Customization

### Theming
The site uses CSS custom properties for easy theming. Modify the root variables in `index.html`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #f59e0b;
  --accent-color: #10b981;
  /* ... more variables */
}
```

### Components
All components are located in `src/components/` and built using Lit framework:

- `main-app.js` - Main application shell
- `hero-section.js` - Landing hero section
- `tech-stack.js` - Technology showcase
- `contact-section.js` - Contact form
- `footer-section.js` - Site footer

### Adding New Features
1. Create new Lit components in `src/components/`
2. Import them in `src/main.js`
3. Use them in your templates

## 📁 Project Structure

```
difficult-bell.surge.sh/
├── .github/
│   └── workflows/
│       ├── deploy.yml           # Basic GitHub Action
│       └── deploy-advanced.yml  # Advanced GitHub Action
├── src/
│   ├── components/
│   │   ├── main-app.js
│   │   ├── hero-section.js
│   │   ├── tech-stack.js
│   │   ├── contact-section.js
│   │   └── footer-section.js
│   └── main.js
├── scripts/
│   └── deploy-helper.sh    # Deployment helper script
├── dist/                   # Build output
├── index.html             # Main HTML file
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies and scripts
├── CNAME                  # Surge.sh domain configuration
└── README.md              # This file
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Build and deploy to Surge.sh

### Development Workflow

1. Make changes to components in `src/components/`
2. Save files - Vite will automatically reload
3. Test in development mode
4. Build and deploy when ready

## 🌐 Deployment Options

### Surge.sh (Recommended)
- Fast static hosting
- Custom domains
- HTTPS enabled
- Simple deployment

### Other Platforms
The built `dist/` folder can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

- 📧 Email: hello@difficult-bell.com
- 💬 Live Chat: Available on the website
- 🐛 Issues: Submit on GitHub

---

Built with ❤️ using Lit Framework • Deployed on Surge.sh
