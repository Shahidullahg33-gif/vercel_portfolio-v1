# 🚀 Modern Portfolio Website

A beautiful, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features a soothing arctic theme with smooth animations and mobile-first design.

![Portfolio Preview](public/og-image.jpg)

## ✨ Features

- 🎨 **Beautiful Arctic Theme** - Soothing color palette with ice and frost gradients
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Built with Next.js 14 for optimal loading speeds
- 🎭 **Smooth Animations** - Framer Motion for delightful user interactions
- 🔧 **Easy to Customize** - Modular component structure for easy editing
- 📊 **SEO Optimized** - Meta tags, Open Graph, and structured data
- 🌙 **Modern Design** - Clean, professional layout with attention to detail
- 💼 **Project Showcase** - Interactive project gallery with filtering
- 📝 **Contact Form** - Functional contact form with validation
- 🔗 **Social Integration** - Links to GitHub, LinkedIn, and other platforms

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Analytics**: Google Analytics (optional)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### 1. Personal Information

Edit \`src/data/personal.ts\` to update your personal details:

\`\`\`typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... more fields
}
\`\`\`

### 2. Skills & Technologies

Update \`src/data/skills.ts\` to showcase your skills:

\`\`\`typescript
export const skills = {
  technical: [
    {
      category: "Frontend",
      technologies: [
        { name: "React", level: 90, color: "#61DAFB" },
        // ... more skills
      ]
    }
  ]
}
\`\`\`

### 3. Projects Portfolio

Edit \`src/data/projects.ts\` to add your projects:

\`\`\`typescript
export const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    technologies: ["React", "Next.js"],
    // ... more project details
  }
]
\`\`\`

### 4. Work Experience

Update \`src/data/experience.ts\` with your professional background:

\`\`\`typescript
export const experience = [
  {
    title: "Your Position",
    company: "Company Name",
    period: "2022 - Present",
    // ... more details
  }
]
\`\`\`

### 5. Add Your Images

Place your images in the \`public\` folder:

- \`public/avatar.jpg\` - Your profile picture
- \`public/og-image.jpg\` - Open Graph image for social sharing
- \`public/projects/\` - Project screenshots
- \`public/resume.pdf\` - Your resume file

### 6. Update Colors (Optional)

Modify the color scheme in \`tailwind.config.js\`:

\`\`\`javascript
theme: {
  extend: {
    colors: {
      arctic: {
        // Custom color palette
      }
    }
  }
}
\`\`\`

## 📁 Project Structure

\`\`\`
portfolio/
├── public/                 # Static assets
│   ├── avatar.jpg         # Your profile image
│   ├── og-image.jpg       # Social sharing image
│   ├── resume.pdf         # Your resume
│   └── projects/          # Project screenshots
├── src/
│   ├── app/               # Next.js 13+ app directory
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   │   ├── sections/      # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/            # UI components
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   └── data/              # Data files (EDIT THESE!)
│       ├── personal.ts    # Personal information
│       ├── skills.ts      # Skills and technologies
│       ├── projects.ts    # Project portfolio
│       └── experience.ts  # Work experience & education
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies
\`\`\`

## 🎨 Customization Tips

### Color Scheme
The portfolio uses a soothing arctic theme. You can easily change colors by modifying the Tailwind config:

- **Arctic**: Cool grays for text and backgrounds
- **Ice**: Light blue for accents and CTAs
- **Frost**: Teal/cyan for secondary accents

### Animations
All animations are powered by Framer Motion. You can:
- Adjust animation durations in component files
- Change easing functions for different feels
- Add new animations by modifying the variants

### Mobile Optimization
The design is mobile-first with:
- Responsive grid layouts
- Touch-friendly navigation
- Optimized typography scales
- Efficient image loading

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Netlify

1. Build the project: \`npm run build\`
2. Deploy the \`.next\` folder to Netlify

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to:
- Railway
- DigitalOcean App Platform
- AWS Amplify
- Google Cloud Platform

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting

## 🔧 Development

### Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run start\` - Start production server
- \`npm run lint\` - Run ESLint
- \`npm run type-check\` - Run TypeScript compiler

### Adding New Sections

1. Create a new component in \`src/components/sections/\`
2. Add the component to \`src/app/page.tsx\`
3. Update navigation in \`src/components/Navigation.tsx\`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have any questions or need help customizing the portfolio:

1. Check the [Issues](https://github.com/yourusername/portfolio/issues) page
2. Create a new issue with your question
3. Email me at [your.email@example.com](mailto:your.email@example.com)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons
- [Vercel](https://vercel.com/) for seamless deployment

---

⭐ If you found this portfolio template helpful, please give it a star on GitHub!

Made with ❤️ and lots of ☕
