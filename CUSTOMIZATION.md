# 🎨 Portfolio Customization Guide

## Quick Start Checklist

### 1. Personal Information (REQUIRED)
Update `src/data/personal.ts`:
- [ ] Change name from "Shahid Ullah" to your name
- [ ] Update title/position
- [ ] Add your email address
- [ ] Add your phone number
- [ ] Update your location
- [ ] Add your social media links (GitHub, LinkedIn, etc.)
- [ ] Update bio and hero description

### 2. Skills & Technologies
Edit `src/data/skills.ts`:
- [ ] Update technical skills with your expertise
- [ ] Adjust skill levels (1-100)
- [ ] Modify skill categories (Frontend, Backend, etc.)
- [ ] Update soft skills list
- [ ] Add technologies you're currently learning

### 3. Projects Portfolio
Customize `src/data/projects.ts`:
- [ ] Replace with your actual projects
- [ ] Update project titles and descriptions
- [ ] Add your GitHub repository links
- [ ] Update live demo URLs
- [ ] Replace project images (see images section below)
- [ ] Update technology stacks

### 4. Experience & Education
Modify `src/data/experience.ts`:
- [ ] Add your work experience
- [ ] Update education background
- [ ] Add certifications
- [ ] Update company names and dates
- [ ] Add achievements and responsibilities

### 5. Images & Assets
Replace files in `public/` folder:
- [ ] `avatar.svg` → Your profile photo (JPG/PNG, 400x400px)
- [ ] `og-image.svg` → Social sharing image (1200x630px)
- [ ] `resume.pdf` → Your latest resume
- [ ] `projects/` → Your project screenshots

### 6. Branding & Colors (OPTIONAL)
Customize the theme in `tailwind.config.js`:
- [ ] Update color scheme (arctic/ice/frost colors)
- [ ] Modify font families
- [ ] Adjust animation timings

## File Structure for Easy Editing

```
📂 Key Files to Edit:
├── 📄 src/data/personal.ts     ← Your personal info
├── 📄 src/data/skills.ts       ← Your skills
├── 📄 src/data/projects.ts     ← Your projects
├── 📄 src/data/experience.ts   ← Your experience
└── 📂 public/                  ← Your images & resume
```

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Check code quality

## Deployment to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically!

## Need Help?

- Check README.md for detailed instructions
- All components are in `src/components/`
- Data files are in `src/data/`
- Styles are in `src/app/globals.css` and Tailwind config

## Color Scheme

The portfolio uses a soothing arctic theme:
- **Arctic**: Cool grays for text and backgrounds
- **Ice**: Light blues for accents and buttons  
- **Frost**: Teals for secondary elements

You can customize these colors in `tailwind.config.js`.

---

🚀 Ready to make it yours? Start with the data files!
