export async function getProjects() {
  return [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Nothing exceptional here, ignore.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      liveUrl: "https://portfolio-website-neon.vercel.app/",
      githubUrl: "https://github.com/thecahintosh/portfolio-website",
    },
    {
      id: 2,
      title: "Summarizo",
      description: "A lightweight, real-time news article summarizer that uses a fine-tuned NLP model",
      technologies: ["Huggingface Transformers", "Newspaper3k", "Flask", "HTML + CSS + JavaScript"],
      liveUrl: "https://github.com/thecahintosh/Summarizo",
      githubUrl: "https://github.com/thecahintosh/Summarizo",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A creative portfolio showcasing design and development skills",
      technologies: ["Next.js", "Framer Motion", "Tailwind", "MDX"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
  ]
}

export async function getCaseStudies() {
  return [
    {
      id: 1,
      title: "Redesigning User Onboarding Flow",
      description: "How we increased user activation by 40% through strategic UX improvements",
      duration: "3 months",
      category: "UX Design",
      challenge: "Users were dropping off during the onboarding process, with only 35% completing registration.",
      solution: "Simplified the flow to 3 steps, added progress indicators, and implemented smart defaults.",
      result: "Increased completion rate to 75% and reduced support tickets by 60%.",
    },
    {
      id: 2,
      title: "Performance Optimization Project",
      description: "Reducing load times and improving Core Web Vitals for better user experience",
      duration: "2 months",
      category: "Development",
      challenge: "Website was loading slowly with poor Core Web Vitals scores affecting SEO rankings.",
      solution: "Implemented code splitting, image optimization, and caching strategies.",
      result: "Reduced load time by 65% and improved Lighthouse score from 45 to 95.",
    },
  ]
}

export async function getAboutData() {
  return {
    name: "Shivansh Singh",
    bio: "Trying to do my thing in the world.",
    skills: {
      development: [
        "JavaScript/TypeScript",
        "React & Next.js",
        "Rust",
        "Python & Libraries",
        "CPP",
      ],
      design: ["UI/UX Design", "Figma & Sketch", "Design Systems", "Prototyping", "User Research"],
      tools: ["Git & GitHub", "Docker", "AWS & Vercel", "VS Code", "Linear & Notion"],
    },
    experience: [
      {
        role: "Senior Full-Stack Developer",
        company: "Tech Startup Inc.",
        period: "2022 - Present",
        description: "Leading development of core platform features and mentoring junior developers.",
      },
      {
        role: "Frontend Developer",
        company: "Digital Agency Co.",
        period: "2020 - 2022",
        description: "Built responsive web applications for various clients using React and modern tools.",
      },
      {
        role: "Junior Developer",
        company: "Local Web Studio",
        period: "2019 - 2020",
        description: "Started my career building websites and learning the fundamentals of web development.",
      },
    ],
  }
}
