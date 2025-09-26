# 🌟 Assylbek Oteubayev - AI/ML Engineer Portfolio

A modern, interactive 3D portfolio website showcasing my experience as an AI/ML Engineer from Kazakhstan.

## 🚀 Live Demo

**[View Portfolio](https://assylbek-creation.github.io/portfolio/)**

## 📋 About

This portfolio showcases my journey as an AI/ML Engineer, featuring:
- **Professional Experience**: Data Scientist at SLB (Schlumberger) and Research Assistant at Astana IT University
- **Technical Skills**: Python, PyTorch, TensorFlow, Computer Vision, NLP, MLOps
- **Projects**: Real AI/ML projects including DDR Analyzer and MP3 Converter System
- **Interactive 3D Experience**: Built with Three.js and React Three Fiber

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern React with hooks
- **Three.js** - 3D graphics and animations
- **React Three Fiber** - React renderer for Three.js
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

### 3D & Animation
- **@react-three/drei** - Useful helpers for React Three Fiber
- **@react-spring/three** - Spring-physics animations for 3D objects

### Communication
- **EmailJS** - Contact form email functionality

### Build Tools
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/assylbek-creation/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
   
   **⚠️ Important**: Never commit your `.env` file to Git! It contains sensitive API keys.

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🌐 Deployment

This portfolio is automatically deployed to GitHub Pages using the `gh-pages` package.

### Deploy to GitHub Pages

1. **Build and deploy**
   ```bash
   npm run deploy
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`

## 📧 Contact Form Setup

To enable the contact form:

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Set up email service (Gmail recommended)
3. Create email template
4. Add your credentials to `.env` file

## 🎨 Features

### Interactive 3D Island
- Rotating 3D island scene
- Flying bird and plane animations
- Interactive elements that respond to user input

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

### Professional Sections
- **Home**: Interactive 3D introduction
- **About**: Skills, experience, and background
- **Projects**: Real AI/ML projects with links
- **Contact**: Functional contact form with 3D fox animation

## 📁 Project Structure

```
src/
├── assets/           # Static assets (3D models, images, icons)
├── components/       # Reusable React components
├── constants/        # Configuration and data
├── hooks/           # Custom React hooks
├── models/          # 3D model components
├── pages/           # Main page components
└── App.jsx          # Main application component
```

## 🔧 Customization

To customize this portfolio for your own use:

1. Update personal information in `src/constants/index.js`
2. Replace 3D models in `src/assets/3d/`
3. Update images and icons in `src/assets/`
4. Modify color scheme in `tailwind.config.js`
5. Update contact form recipient in `src/pages/Contact.jsx`

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

*Note: 3D features require WebGL support*

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About the Developer

**Assylbek Oteubayev**
- 🎓 AI/ML Engineer from Kazakhstan
- 💼 Data Scientist at SLB (Schlumberger)
- 🔬 Research Assistant at Astana IT University
- 🌐 [LinkedIn](https://www.linkedin.com/in/assylbek-oteubayev-660018263/)
- 💻 [GitHub](https://github.com/assylbek-creation)

---

⭐ **If you like this portfolio, please give it a star!** ⭐