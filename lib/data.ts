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
  ]
}

export async function getCaseStudies() {
  return [
    {
      id: 1,
      title: "Blog 1.exe",
      description: "Still not here.exe",
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
      design: [""],
      tools: ["Git & GitHub", "AWS & Vercel", "VS Code", "Linear & Notion"],
    }, 
    experience: ["Empty here as of now"]
  }
}

