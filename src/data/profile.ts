export const profile = {
  name: "MD. Sheam Nasemur Rahman",
  shortName: "Sheam Nasemur Rahman",
  initials: "SR",
  role: "Full-Stack Software Developer",
  tagline: "Full‑Stack Software Developer · CSE Graduate",
  summary:
    "Full‑Stack Software Developer and CSE Graduate with a results‑driven mindset and hands‑on experience building scalable web applications. Skilled in React, TypeScript, Node.js, Express, PostgreSQL, and MongoDB, with demonstrated success shipping production‑ready authentication systems and deploying to the cloud on Vercel.",
  location: "Bogura, Bangladesh",
  email: "sheam.rahman99@gmail.com",
  phone: "+880 1742-218274",
  phoneDigits: "8801742218274",
  linkedin: "https://linkedin.com/in/sheam-nasemur-rahman",
  github: "https://github.com/sheam274",
  whatsapp: "https://wa.me/8801742218274",
  portfolioUrl: "https://sheam-nasemur-rahman-portfolio.vercel.app",
  // Same-origin CV file served from /public. The download attribute is only
  // honored for same-origin URLs, and this path exists on any host (Vercel too).
  // Override with VITE_CV_URL to serve a different copy.
  cvUrl: (import.meta.env.VITE_CV_URL as string | undefined) ?? "/Sheam-Nasemur-Rahman-CV.pdf",
} as const;

export const skills = {
  "Programming Languages": ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "Java", "HTML5", "CSS3"],
  "Frontend Development": ["React", "TanStack Start", "Tailwind CSS", "RESTful API Integration", "Dynamic UI Architecture"],
  "Backend & Databases": ["Node.js", "Express.js", "PostgreSQL", "MongoDB (Atlas/Compass)", "Supabase Auth", "Firebase"],
  "Developer Tools & Cloud": ["Git", "GitHub", "Vercel", "Postman", "PythonAnywhere", "Docker (Basic)"],
  "Core CS Foundations": ["Database Schema Architecture", "OOP", "Data Structures & Algorithms"],
} as const;

export const education = [
  {
    school: "Pundra University of Science and Technology",
    degree: "BSc in Computer Science & Engineering",
    grade: "CGPA 3.41",
    period: "Graduated 2026",
    honors:
      "Awarded Distinction in 1st Semester · Active Hackathon Participant",
    coursework: [
      "Database Management Systems",
      "Software Engineering",
      "OOP",
      "Data Structures & Algorithms",
      "Computer Networks",
    ],
  },
];

export const experience = [
  {
    role: "Software Developer",
    company: "ICT HAX",
    period: "Mar 2026 — Present",
    location: "Bogura, Bangladesh",
    stack: ["React", "TypeScript", "TanStack Start", "Supabase", "PostgreSQL"],
    bullets: [
      "Architected and deployed production features for web applications using React, TypeScript, and TanStack Start.",
      "Integrated Supabase Authentication, managing secure user sessions for 50+ active beta users.",
      "Optimized PostgreSQL database query execution flows and schema relations, enhancing overall system responsiveness.",
      "Conducted API endpoint testing with Postman to ensure high data integrity across client‑server interactions.",
    ],
  },
];

export const certifications = [
  {
    title: "Web Development Professional Certification",
    issuer: "ICT HAX — Practical Full‑Stack Web Development Training",
    year: "Jun 2026 – Aug 2026",
  },
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Bengali", level: "Native" },
];
