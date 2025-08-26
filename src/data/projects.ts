// Projects Portfolio - Edit this file to showcase your projects
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, user authentication, and admin dashboard.",
    longDescription: "This comprehensive e-commerce solution demonstrates my ability to build complex, scalable web applications. The platform includes advanced features like real-time inventory management, multi-vendor support, and analytics dashboard.",
    image: "/projects/ecommerce.svg", // Add project images to public/projects/
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma", "Tailwind CSS"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and checkout process",
      "Payment processing with Stripe",
      "Admin dashboard for inventory management",
      "Order tracking and management",
      "Responsive design for all devices"
    ],
    github: "https://github.com/yourusername/ecommerce-platform", // Update with actual repo
    live: "https://your-ecommerce-demo.vercel.app", // Update with actual demo
    status: "completed",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application inspired by Trello, built with React and Firebase. Features drag-and-drop functionality and real-time updates.",
    longDescription: "This project showcases my skills in building interactive, real-time applications. The app features a modern UI with smooth animations and supports team collaboration with live updates.",
    image: "/projects/taskmanager.svg",
    technologies: ["React", "Firebase", "Framer Motion", "React DnD", "Styled Components"],
    features: [
      "Drag and drop task management",
      "Real-time collaboration",
      "User authentication",
      "Board and list management",
      "File attachments",
      "Due dates and notifications",
      "Team member assignment"
    ],
    github: "https://github.com/yourusername/task-manager",
    live: "https://your-taskmanager-demo.vercel.app",
    status: "completed",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Weather Analytics Dashboard",
    description: "A comprehensive weather analytics dashboard with data visualization and forecasting. Built with React and integrates multiple weather APIs.",
    longDescription: "This project demonstrates my ability to work with external APIs and create meaningful data visualizations. The dashboard provides detailed weather insights with interactive charts and maps.",
    image: "/projects/weather.svg",
    technologies: ["React", "D3.js", "Chart.js", "OpenWeather API", "Material-UI"],
    features: [
      "Real-time weather data",
      "Interactive charts and graphs",
      "Location-based forecasting",
      "Historical data analysis",
      "Weather alerts and notifications",
      "Export data functionality",
      "Mobile-responsive design"
    ],
    github: "https://github.com/yourusername/weather-dashboard",
    live: "https://your-weather-demo.vercel.app",
    status: "completed",
    category: "Data Visualization"
  },
  {
    id: 4,
    title: "AI-Powered Blog Platform",
    description: "A modern blog platform with AI-assisted content creation features. Built with Next.js and integrates OpenAI API for content suggestions.",
    longDescription: "This innovative blog platform showcases my interest in AI integration. Writers can get AI assistance for content creation while maintaining full control over their articles.",
    image: "/projects/blog.svg",
    technologies: ["Next.js", "OpenAI API", "MDX", "Prisma", "NextAuth.js", "Tailwind CSS"],
    features: [
      "AI-powered content suggestions",
      "Rich text editor with MDX support",
      "User authentication and profiles",
      "Comment system with moderation",
      "SEO optimization",
      "Analytics dashboard",
      "Newsletter integration"
    ],
    github: "https://github.com/yourusername/ai-blog-platform",
    live: "https://your-blog-demo.vercel.app",
    status: "in-progress",
    category: "Full Stack"
  },
  {
    id: 5,
    title: "Mobile Fitness Tracker",
    description: "A React Native mobile app for fitness tracking with workout plans and progress monitoring. Features offline capability and data synchronization.",
    longDescription: "This mobile application demonstrates my cross-platform development skills. The app provides a comprehensive fitness tracking solution with intuitive UI and robust data management.",
    image: "/projects/fitness.svg",
    technologies: ["React Native", "Expo", "SQLite", "Redux", "Firebase", "React Navigation"],
    features: [
      "Workout plan creation",
      "Progress tracking and analytics",
      "Offline data storage",
      "Social sharing features",
      "Custom exercise database",
      "Goal setting and achievements",
      "Wearable device integration"
    ],
    github: "https://github.com/yourusername/fitness-tracker",
    live: "https://expo.dev/@yourusername/fitness-tracker", // Expo link
    status: "completed",
    category: "Mobile"
  }
]

// Project categories for filtering
export const projectCategories = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "Mobile",
  "Data Visualization",
  "AI/ML"
]
