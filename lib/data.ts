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
  ];
}

export async function getBlogs() {
  return [
    {
      id: 1,
      title: "Blog1.exe",
      description: "Still not here.exe",
      duration: "1 second",
      category: "nothing",
    },
  ];
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
      design: [],
      tools: ["Git & GitHub", "AWS & Vercel", "VS Code", "Linear & Notion"],
    },
    experience: [],
  };
}
