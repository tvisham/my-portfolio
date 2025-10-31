import React, { useMemo, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Code2,
  Rocket,
  Briefcase,
  GraduationCap,
  Sparkles,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Minimal profile data used throughout the app. Add or update fields as needed.
const PROFILE = {
  name: "Tvisha Mishra",
  role: "High School Student & Aspiring Engineer",
  bio: "I build projects in software and robotics. Interested in ML, embedded systems, and web development.",
  location: "Seattle, WA",
  email: "tvisham@notrealemail.com",
  links: {
    github: "https://github.com/tvisham",
    linkedin: "https://www.linkedin.com/in/tvisham/",
  },
};

const PROJECTS = [
  {
    title: "Air Quality Analysis - NYC",
    blurb: "A comprehensive analysis of air quality trends in New York City.",
    tags: ["Python", "Pandas", "matplotlib", "seaborn", "geopandas"],
    img: "Air-Quality.png",
    fit: "cover",
    links: {
      live: "https://github.com/tvisham/Air-Quality-Data-Science",
      repo: "https://github.com/tvisham/Air-Quality-Data-Science",
    },
  },
  {
    title: "Golden Nest — Retirement Wizard",
    blurb: "A retirement planning app that helps you estimate how much you'll need to save for retirement.",
    tags: ["React", "TypeScript", "Redux", "Tailwind"],
    img: "Golden-Nest.png",
    fit: "cover",
    links: {
      live: "https://github.com/tvisham/golden-nest",
      repo: "https://github.com/tvisham/golden-nest",
    },
  },
  {
    title: "Gymnasium Rental Website",
    blurb: "A Gymnasium Rental Website designed to facilitate the booking and management of events.",
    tags: ["HTML", "CSS", "JavaScript"],
    img: "JHS Gymnasium.png",
    fit: "cover",
    links: {
      live: "https://github.com/tvisham/Gymnasium-Rental-Website",
      repo: "https://github.com/tvisham/Gymnasium-Rental-Website",
    },
  },
  {
    title: "not-due-yet",
    blurb: "An assignment tracker with class management, subtasks, priorities, and calendar view.",
    tags: ["HTML", "CSS", "JavaScript"],
    img: "not-due-yet.png",
    fit: "cover",
    links: {
      live: "https://github.com/tvisham/notdueyet",
      repo: "https://github.com/tvisham/notdueyet",
    },
  },
  {
    title: "Mario Game",
    blurb: "A fun and interactive Mario game built with Python",
    tags: ["Python", "Pygame", "pytmx"],
    img: "Mario.png",
    fit: "cover",
    links: {
      live: "https://github.com/tvisham/mario-in-python",
      repo: "https://github.com/tvisham/mario-in-python",
    },
  },
  {
    title: "Ask Me Anything",
    blurb: "A chat-bot with interactive front-end and back-end",
    tags: ["JavaScript", "React", "Node.js"],
    img: null,
    fit: "cover",
    links: {
      live: "https://github.com/tvisham/ask-me-anything",
      repo: "https://github.com/tvisham/ask-me-anything",
    },
  },
  {
    title: "ML Algorithm for a Vacuum Robot based on changes in environmental conditions and battery efficiency",
    blurb: "Research project applying ML to battery and environmental data.",
    tags: ["Machine Learning", "Azure", "Python", "Robotics"],
    img: null,
    details: [
      "Developed a machine learning algorithm using Azure Machine Learning and Python to detect changes in environmental conditions based on battery efficiency in vacuum robots.",
      "Analyzed correlations and identified patterns between fluctuations in battery performance and environmental factors such as temperature or terrain.",
      "Presented findings in a research paper, detailing the algorithm's potential applications and insights in robotics and environmental monitoring.",
    ],
    links: {
      live: "",
      repo: "",
    },
  },
];


const EXPERIENCE = [
  {
    org: "Boeing",
    title: "Engineering Intern",
    date: "Summer 2025",
    points: [
      "Applied mechanical and electrical engineering principles through hands-on work with industrial machinery.",
      "Used Boeing’s Problem Solving Model to improve manufacturing workflows and quality control.",
      "Gained exposure to industry best practices, including workflow optimization, safety standards, and collaborative engineering strategies.",
      "Delivered an independent capstone project and contributed to a team problem-solving challenge, integrating theoretical knowledge with practical solutions.",
    ],
  },
  {
    org: "Quadrant Technologies",
    title: "Software Engineering Intern",
    date: "Summer 2024",
    points: [
      "Designed and developed a restaurant billing & customer insights app with a team of 4, addressing post-COVID small business challenges.",
      "Coordinated a cross-functional development team and delivered a strategic pitch and live demo to company executives, showcasing an AI-powered chatbot designed to personalize customer experiences and drive post-pandemic business recovery.",
      "Utilized SQL for data manipulation and analysis to improve billing and insights functionality.",
      "Configured CI/CD pipelines in Azure DevOps and contributed to data engineering using SQL.",
      "Leveraged Generative AI and language models to enhance app functionality, billing insights, and user experience.",

    ],
  },
  {
    org: "Saffron",
    title: "Data Science Intern",
    date: "June 2024 - June 2025",
    points: [
      "Conducted comprehensive research and data analysis to support the development and optimization of AI models for the telecom industry.",
      "Executed data cleaning and preprocessing tasks using Python, ensuring high-quality, accurate datasets for model training.",
      "Mentored new interns, providing guidance in data science methodologies and industry practices.",
      "Applied advanced data science techniques to tackle complex, real-world challenges.",
    ],
  },
  {
    org: "Alongside Care",
    title: "Student Advisor",
    date: "May 2024 - June 2024",
    points: [
      "Advised on product features for a teen mental health app, recommending improvements to enhance engagement and cultural relevance.",
      "Collaborated with advisors and designers to refine AI chatbot conversations and brainstorm teen-focused app features.",
    ],
  },
];

const EDUCATION = [
  {
    school: "Henry Jackson High School",
    degree: "High School",
    date: "Class of 2026",
    points: ["GPA 3.995/4.0","AP Scholar with Distinction (2024 & 2025), AP Capstone Diploma"],
  },
  {
    school: "SAT",
    degree: "Score",
    date: "",
    points: ["SAT: 1560 (Math: 790; R&W: 770)"],
  },
  {
    school: "Cascadia Community College",
    degree: "Dual Enrollment",
    date: "Sep 2025 – Jun 2026",
    points: [
      "Relevant Coursework: Programming Data Structures, Web Authoring, Calculus 3, Structures & Algorithms",
    ],
  },
];

const ACTIVITIES = [
  {
    org: "FRC Robotics, \u201cJack in the Bot\u201d, Team 2910",
    role: "Manufacturing Lead & Pit Crew",
    place: "Jackson High School",
    date: "Sep. 2022 - Present",
    points: [
      "Contributed to the design and construction of a robot that won the FIRST Robotics World Championship out of 3,500 teams, plus multiple district and regional events.",
      "Oversaw the team pit during competitions, assisting with robot maintenance and presenting to judges and visitors.",
      "Gained proficiency in prototyping, CAD, fabrication, wiring, systems integration, and use of power tools.",
      "Created curriculum and mentored new students, fostering technical skills and teamwork.",
      "Active FIRST program participant for 8 years, strengthening teamwork, technical expertise, and problem-solving skills.",
    ],
  },
  {
    org: "Future Business Leaders of America, Jackson High School",
    role: "VP of Operations",
    date: "Sep. 2022 - Present",
    points: [
      "Competed in FBLA Entrepreneurship: 2nd at regionals and 4th at state; qualified for nationals.",
      "Oversaw fundraising, sponsorship acquisition, and budget creation to reduce member dues and conference costs.",
      "Managed club communications via Instagram and Remind app, increasing engagement.",
      "Implemented recruitment strategies increasing membership by 100% (200+ active students).",
    ],
  },
  {
    org: "DECA / HOWL Finance, Jackson High School",
    role: "Co-Founder & Leader",
    date: "Sep. 2022 - Present",
    points: [
      "Secured 2nd place in Washington State for a Financial Literacy Project, qualifying to compete at an international conference.",
      "Educated 400+ elementary and high school students on money management, covering earning, spending, saving, investing, credit, and risk.",
      "Organized workshops and social campaigns covering employment, insurance, and college prep.",
      "Initiated, contributed to the curriculum, and led discussions within the school district to establish a personal financial literacy course.",
      "Featured in FOX 13 to promote financial literacy: https://www.fox13seattle.com/news/teens-early-financial-literacy-debt.",
      "Organized interactive workshops and developed social media campaigns, gaining 20,000+ impressions.",
    ],
  },
  {
    org: "Girls Who Code, Jackson High School & Online",
    role: "Vice President",
    date: "June 2023 - Present",
    points: [
      "Mentored middle school students and peers in Java, Python, and Machine Learning.",
      "Mentored peers in coding and project development, fostering leadership, collaboration, and technical proficiency.",
      "Led planning and execution of workshops, industry field trips, speaker events, and hackathons, coordinating logistics and engaging participants across diverse STEM topics.",
      "Built connections with industry professionals to bring real-world insights into events and strengthen student learning experiences.",
    ],
  },
  {
    org: "Washington Aerospace Scholars, Museum of Flight",
    role: "Participant",
    date: "Nov. 2024 - Present",
    points: [
      "Completed lessons on aerospace design, flight technologies, and space exploration.",
      "Applied aerospace math and science through virtual labs and group projects.",
      "Collaborated with peers to solve real-world engineering challenges, strengthening problem-solving and teamwork skills in aerospace and STEM contexts.",
    ],
  },
  {
    org: "CodeBridge",
    role: "President",
    date: "Sep. 2024 - Present",
    points: [
      "Launched coding programs across four schools, expanding access to computer science education for grades 4–8.",
      "Recruited, trained, and supervised volunteer teams, ensuring smooth program delivery and consistent student support",
      "Developed and taught curricula in Java and Python, educating 150+ students in programming fundamentals and algorithmic thinking.",
      "Organized hands-on lessons, projects, and mentoring, fostering student interest in STEM and building long-term engagement in coding."
    ],
  },
  {
    org: "Stop Sexual Assault in Schools (Virtual SASH Club)",
    role: "Youth Leader",
    date: "March 2024 - Present",
    points: [
      "Founded an online platform (Virtual SASH Club—a Students Against Sexual Harassment Club), facilitating discussions for students globally on sexual assault, sexual harassment, and gender discrimination in educational settings",
      "Conducted in-depth research and developed detailed reports on crucial topics, ensuring the right to an equal education is not compromised by sexual misconduct, sexual assault, and gender discrimination in school.",
      "Produced videos, scripts, and graphics to raise awareness and research-backed reports to inform advocacyProduced engaging content, including videos, scripts, and graphics for social media to raise awareness about sexual assault.",
    ],
  },
];

const AWARDS = [
  {
    title: "First Robotics Competition, Team 2910 (2023-2025)",
    items: [
      "2025: Winner - World Championship; Winner - Newton Division; Winner - Sammamish & Auburn District Events",
      "2025 Awards: Autonomous Award (Sammamish, Auburn); Excellence in Engineering (World Championship)",
      "2024: Multiple district winners, Indiana Robotics Invitational, PNW Block Party, Chezy Champs; Newton Division finalist at Worlds",
      "2024 Awards: Quality Award (Glacier Peak); Innovation in Control (PNW District, World Championship Newton Division)",
      "2023: Multiple district wins and invitational wins",
      "2023 Awards: Excellence in Engineering; Industrial Design Awards; Autonomous Award",
    ],
  },
  {
    title: "DECA (2023-2025)",
    items: [
      "Financial Literacy Project: ICDC (International) competitor,2nd Place State; ",
      "Entrepreneurship: multiple regional placements and 2x state competitor",
    ],
  },
  {
    title: "Future Business Leaders of America (2023-2025)",
    items: [
      "Entrepreneurship: National Qualifier; 4th Place State; 2nd Place Regional",
      "Computer Problem Solving, UX Design, Data Analysis, Website Design: multiple regional/state placings",
      "UX Design: 2x 1st Place Regional, 8th Place State", 
      "Data Analysis: 2nd Place Regional, State Competitor", 
      "Website Design: 3rd Place Regional, State Competitor",
    ],
  },
];

// ---------- Helpers ----------
const fadeUp = {
  initial: { y: 24, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const Section = ({ id, title, icon, children }) => (
  <section id={id} className="scroll-mt-20 py-16">
    <motion.div {...fadeUp}>
      <div className="flex items-center gap-2 mb-8">
        {icon}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </motion.div>
  </section>
);

// ---------- Main Component ----------
export default function Portfolio() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const projectsRef = useRef(null);

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const q = query.toLowerCase();
      const matchesQuery = !q || [p.title, p.blurb, ...(p.tags || [])].join(" ").toLowerCase().includes(q);
      const matchesTag = !activeTag || p.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight flex items-center gap-2">
            <div className="size-8 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
            <span>{PROFILE.name}</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:opacity-80" href="#projects">Projects</a>
            <a className="hover:opacity-80" href="#experience">Experience</a>
            <a className="hover:opacity-80" href="#education">Education</a>
            <a className="hover:opacity-80" href="#leadership">Leadership</a>
            <a className="hover:opacity-80" href="#awards">Awards</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((s) => !s)}
              className="p-2 rounded-md bg-slate-800 hover:bg-slate-700"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {/* Mobile dropdown - small screens */}
        <div className={`md:hidden px-4 ${mobileOpen ? 'block' : 'hidden'}`}>
          <div className="mx-auto max-w-6xl py-2 flex flex-col gap-2">
            <a onClick={() => setMobileOpen(false)} className="block py-2 px-3 rounded-lg hover:bg-slate-900" href="#projects">Projects</a>
            <a onClick={() => setMobileOpen(false)} className="block py-2 px-3 rounded-lg hover:bg-slate-900" href="#experience">Experience</a>
            <a onClick={() => setMobileOpen(false)} className="block py-2 px-3 rounded-lg hover:bg-slate-900" href="#education">Education</a>
            <a onClick={() => setMobileOpen(false)} className="block py-2 px-3 rounded-lg hover:bg-slate-900" href="#leadership">Leadership</a>
            <a onClick={() => setMobileOpen(false)} className="block py-2 px-3 rounded-lg hover:bg-slate-900" href="#awards">Awards</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main id="home" className="mx-auto max-w-6xl px-4">
        <motion.section
          className="py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
            <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              {PROFILE.role}
            </h1>
            <p className="mt-4 text-slate-300 max-w-prose">
              {PROFILE.bio}
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-xl bg-[#181717] text-white shadow-lg hover:bg-[#24292f] hover:scale-105 transition-transform duration-200"
              >
                <Github className="mr-2 size-5" /> GitHub
              </a>
              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-xl bg-[#181717] text-white shadow-lg hover:bg-[#24292f] hover:scale-105 transition-transform duration-200"
              >
                <Linkedin className="mr-2 size-5" /> LinkedIn
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="size-4"/>{PROFILE.location}
            </div>
            </div>

          {/* Avatar / Accent Card */}
          <div className="relative">
            <motion.div
              className="rounded-3xl p-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="rounded-3xl bg-slate-900 p-8 h-full">
                <div className="aspect-[4/3] rounded-2xl grid place-content-center border border-slate-700">
                  <div className="text-center">
                    {/* Secret portfolio image - kept in public/images/Secrets and ignored by git */}
                    <img
                      src={encodeURI(`${import.meta.env.BASE_URL}images/Secrets/Portfolio.JPG`)}
                      alt="Private Portfolio"
                      className="mx-auto w-32 h-32 rounded-full object-cover mb-4"
                    />
                    <div className="text-lg font-semibold">{PROFILE.name}</div>
                    <div className="text-sm text-slate-400">{PROFILE.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects */}
        <Section id="projects" title="Projects" icon={<ExternalLink className="size-6"/>}>
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-6">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full md:w-80 px-4 py-2 rounded-xl border border-slate-700 bg-slate-900 text-slate-100"
            />
            <div className="flex flex-wrap gap-2">
              {["All", ...new Set(PROJECTS.flatMap(p => p.tags))].map((t) => (
                <Badge
                  key={t}
                  onClick={() => setActiveTag(t === "All" ? null : t)}
                  className={`cursor-pointer rounded-2xl ${activeTag === (t === "All" ? null : t) ? "ring-2 ring-indigo-500" : ""}`}
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          <div className="w-full -mx-4 px-4">
            {/* Mobile scroll controls + hint */}
            <div className="flex items-center justify-between mb-2 md:hidden">
              <div className="text-sm text-slate-400">Swipe to view more →</div>
              <div className="flex gap-2">
                <button
                  aria-label="Scroll left"
                  onClick={() => projectsRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
                  className="p-2 rounded-md bg-slate-800 hover:bg-slate-700"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  aria-label="Scroll right"
                  onClick={() => projectsRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
                  className="p-2 rounded-md bg-slate-800 hover:bg-slate-700"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div
              ref={projectsRef}
              className="overflow-x-auto w-full"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              <div className="flex gap-8 items-stretch snap-x snap-mandatory">
              {filtered.map((p) => (
                <div key={p.title} className="flex-shrink-0 w-[22rem] h-[32rem] snap-start">
                  <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 h-full flex flex-col transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1">
                    {/* Image Section */}
                    <div className="relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                      {p.img ? (
                        <div className="aspect-[16/10] relative">
                          <img
                            src={encodeURI(`${import.meta.env.BASE_URL}images/Secrets/${p.img}`)}
                            alt={p.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      ) : (
                        <div className="aspect-[16/10] flex items-center justify-center">
                          <div className="text-center text-slate-500">
                            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-slate-700/50 flex items-center justify-center">
                              <ExternalLink className="w-8 h-8" />
                            </div>
                            <p className="text-sm font-medium">Project Screenshot</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content Section - flex column, justify-between */}
                    <div className="flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 leading-tight">{p.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{p.blurb}</p>
                      </div>
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-4 justify-center">
                          {p.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex">
                          <a
                            href={p.links.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-[#181717] hover:bg-[#24292f] rounded-xl transition-colors duration-200"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience" icon={<Briefcase className="size-6"/>}>
          <div className="space-y-8">
            {EXPERIENCE.map((job) => (
              <div key={job.org} className="rounded-2xl border border-slate-700 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="font-semibold">{job.title} • {job.org}</div>
                  <div className="text-sm text-slate-400">{job.date}</div>
                </div>
                <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-300">
                  {job.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education" icon={<GraduationCap className="size-6"/>}>
          <div className="grid md:grid-cols-2 gap-8">
            {EDUCATION.map((e) => (
              <div key={e.school} className="rounded-2xl border border-slate-700 p-5">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{e.school}</div>
                  <div className="text-sm text-slate-400">{e.date}</div>
                </div>
                <div className="mt-1 text-sm">{e.degree}</div>
                {e.points?.length ? (
                  <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-300">
                    {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </Section>

        {/* Leadership */}
        <Section id="leadership" title="Leadership" icon={<Briefcase className="size-6"/>}>
          <div className="grid md:grid-cols-2 gap-6">
            {ACTIVITIES.map((l) => (
              <div key={l.org} className="rounded-2xl border border-slate-700 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{l.org}</div>
                    <div className="text-sm text-slate-400">{l.role} {l.place ? `• ${l.place}` : ''}</div>
                  </div>
                  <div className="text-sm text-slate-400">{l.date}</div>
                </div>
                <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-300">
                  {l.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Awards */}
        <Section id="awards" title="Awards" icon={<Sparkles className="size-6"/>}>
          <div className="grid md:grid-cols-2 gap-6">
            {AWARDS.map((a) => (
              <div key={a.title} className="rounded-2xl border border-slate-700 p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold">{a.title}</div>
                  </div>
                </div>
                <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-300">
                  {a.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Links Section */}
        <Section id="links" title="Links" icon={<ExternalLink className="size-6"/>}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image Card */}
            <div className="rounded-2xl border border-slate-700 p-5 h-[28rem] md:h-[24rem] flex flex-col">
              <div className="font-semibold mb-2">Robotics World Championship Winner</div>
              <p className="text-slate-300 mb-4"> Winner of World Championship : Jack in Bot (2910)</p>
              <div className="flex-1 rounded-lg overflow-hidden">
                <img src={encodeURI(`${import.meta.env.BASE_URL}images/Secrets/JHS.png`)} alt="JHS Robotics" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* FBLA Card */}
            <div className="rounded-2xl border border-slate-700 p-5 h-[28rem] md:h-[24rem] flex flex-col">
              <div className="font-semibold mb-2">FBLA</div>
              <p className="text-slate-300 mb-4">FBLA Winner Award.</p>
              <div className="flex-1 rounded-lg overflow-hidden">
                <a href={encodeURI(`${import.meta.env.BASE_URL}images/Secrets/FBLA.JPG`)} target="_blank" rel="noreferrer">
                  <img src={encodeURI(`${import.meta.env.BASE_URL}images/Secrets/FBLA.JPG`)} alt="FBLA" className="w-full h-full object-cover" />
                </a>
              </div>
            </div>

            {/* Video Card */}
            <div className="rounded-2xl border border-slate-700 p-5 h-[28rem] md:h-[24rem] flex flex-col">
              <div className="font-semibold mb-2">Video / Article</div>
              <p className="text-slate-300 mb-4">Coverage about teen financial literacy featured on Fox TV.</p>
              <div className="flex-1 rounded-lg overflow-hidden">
                <iframe
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  src="https://w3.mp.lura.live/player/3.12.16/v3/anvload.html?key=eyJtIjoiVEJELUVQRk9YIiwidiI6IjE2NTk0MTgiLCJ0cmFja1RpbWVQZXJpb2QiOjEsIndpZHRoIjoiMTAwJSIsImFudmFjayI6InA4UTZkVlBsbnBpTDNLbkh2WWlNTkR6YmlsT2c3bzRuIiwic2hhcmVMaW5rIjoiaHR0cHM6Ly93d3cuZm94MTNzZWF0dGxlLmNvbS9uZXdzL3RlZW5zLWVhcmx5LWZpbmFuY2lhbC1saXRlcmFjeS1kZWJ0IiwicGx1Z2lucyI6eyJjdXN0b21Db21zY29yZVBsdWdpbiI6eyJwdWJsaXNoZXJTZWNyZXQiOiJ3ZlVoOFByVFl2WWNHb1gwS3VIWDhnZlNKemFHdGxGMSIsImMzIjoiUTEzIEZPWCBOZXdzIiwiYzYiOiJGVFMiLCJjNCI6bnVsbCwic2V0R2VucmVOYW1lIjoiTmV3cyIsImFwcE5hbWUiOiJGT1ggMTMgU2VhdHRsZSBOZXdzIEFwcCIsInNjcmlwdCI6Imh0dHBzOi8vc3RhdGljLmZveHR2LmNvbS9zdGF0aWMvb3Jpb24vc2NyaXB0cy9jb3JlL3V0aWxzL2NvbXNjb3JlL05hdGl2ZUNvbXNjb3JlUGx1Z2luLmpzIiwic2RrIjoiaHR0cHM6Ly9zdGF0aWMuZm94dHYuY29tL3N0YXRpYy9vcmlvbi9zY3JpcHRzL2NvcmUvdXRpbHMvY29tc2NvcmUvY29tc2NvcmUuanMiLCJjbGllbnRJZCI6IjYwNDI5MDEiLCJuc19zdF9zdCI6IktDUFEiLCJ0aXRsZSI6IlRlYWNoaW5nIGZpbmFuY2lhbCBsaXRlcmFjeSB0byB0aGUgeW91dGgiLCJuc19zdF9jaSI6IjE2NTk0MTgifSwiZGZwIjp7ImNsaWVudFNpZGUiOnsiYWRUYWdVcmwiOiJodHRwczovL3B1YmFkcy5nLmRvdWJsZWNsaWNrLm5ldC9nYW1wYWQvYWRzP2l1PS82Mzc5MDU2NC9rY3BxX2ZveDEzJmRlc2NyaXB0aW9uX3VybD1bcGxhY2Vob2xkZXJdJmVudj12cCZpbXBsPXMmY29ycmVsYXRvcj0mdGZjZD0wJm5wYT0wJmdkZnBfcmVxPTEmb3V0cHV0PXZhc3Qmc3o9MTAwMXgxMDAxJnVudmlld2VkX3Bvc2l0aW9uX3N0YXJ0PTEmY21zaWQ9MjU0MTA0NiZ2aWQ9MTY1OTQxOCIsImtleVZhbHVlcyI6eyJzdHlwZSI6WyJuZXdzIl0sInB0eXBlIjoidmlkZW8tY2xpcCIsImMiOlsibmV3cyJdLCJkIjoid2ViIiwidXNfcHJpdmFjeSI6IjFZTk4ifX19LCJuYXRpdmVIZWFydGJlYXRQbHVnaW4iOnsic2NyaXB0IjoiaHR0cHM6Ly9zdGF0aWMuZm94dHYuY29tL3N0YXRpYy9vcmlvbi9zY3JpcHRzL2NvcmUvdXRpbHMvYWRvYmUvQ3VzdG9tSGVhcnRiZWF0UGx1Z2luLmpzIiwic2RrIjoiaHR0cHM6Ly9hc3NldHMuYWRvYmVkdG0uY29tLzBmNmJmOTA0YjYwOS82ZGRhYjVjMTc0ZTcvbGF1bmNoLWU4MDcxYTA3MTljMS5taW4uanMiLCJhZGRpdGlvbmFsUGFnZU1ldGEiOnsiZml4VmVyc2lvbiI6IjkuOS4yIn0sInBsYXllclVuaXF1ZUlkIjoicGxheWVyLWFkNjNjNjcwLWU5YWUtNDU0Ni1iNDVkLTUwNjdlNzZlYzBmZiJ9fSwiaHRtbDUiOnRydWUsImZvcm1hdCI6Im0zdTgiLCJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoyYVdRaU9pSXhOalU1TkRFNElpd2lhWE56SWpvaWNEaFJObVJXVUd4dWNHbE1NMHR1U0haWmFVMU9SSHBpYVd4UFp6ZHZORzRpTENKbGVIQWlPakUzTlRrM016UXdNaklzSW1saGRDSTZNVGMxT1Rjek1EUXlNbjAuQURaM3RmS1J5RnhuMnBUZVVDMkZaSTMtVjMxbDZCMkJ0SEpsWnNlRy1mQSJ9"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-4">
                <a href="https://www.fox13seattle.com/news/teens-early-financial-literacy-debt" target="_blank" rel="noreferrer">
                  <Button variant="outline">Open Video / Article</Button>
                </a>
              </div>
            </div>
            {/* Boeing Internship Card (match FBLA sizing, show full image) */}
            <div className="rounded-2xl border border-slate-700 p-5 h-[28rem] md:h-[24rem] flex flex-col">
              <div className="font-semibold mb-2">Boeing Internship</div>
              <p className="text-slate-300 mb-4">Photos from the Boeing internship with my pictures featuring on Internship Completion Pamphlet.</p>
              <div className="flex-1 rounded-lg overflow-hidden bg-slate-800 flex items-center justify-center p-2">
                <div className="flex w-full h-full gap-2">
                  <a href={encodeURI(`${import.meta.env.BASE_URL}images/Secrets/Boeing Img1.jpg`)} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center bg-slate-900 p-2">
                    <img src={encodeURI(`${import.meta.env.BASE_URL}images/Secrets/Boeing Img1.jpg`)} alt="Boeing Img1" className="max-w-full max-h-full object-contain" />
                  </a>
                  <a href={encodeURI(`${import.meta.env.BASE_URL}images/Secrets/Boeing Img2.jpg`)} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center bg-slate-900 p-2">
                    <img src={encodeURI(`${import.meta.env.BASE_URL}images/Secrets/Boeing Img2.jpg`)} alt="Boeing Img2" className="max-w-full max-h-full object-contain" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quadrant Internship Card (match FBLA sizing, show full image) */}
            <div className="rounded-2xl border border-slate-700 p-5 h-[28rem] md:h-[24rem] flex flex-col">
              <div className="font-semibold mb-2">Quadrant Internship</div>
              <p className="text-slate-300 mb-4">Certificate after completing Software Engineer Internship at Quadrant Technologies.</p>
              <div className="flex-1 rounded-lg overflow-hidden bg-slate-800 flex items-center justify-center">
                <a href={encodeURI(`${import.meta.env.BASE_URL}images/Secrets/Quadrant.jpg`)} target="_blank" rel="noreferrer" className="w-full h-full block">
                  <img src={encodeURI(`${import.meta.env.BASE_URL}images/Secrets/Quadrant.jpg`)} alt="Quadrant Certificate" className="max-w-full max-h-full object-contain mx-auto" />
                </a>
              </div>
            </div>

            {/* ICDC Card (full-size image) */}
            <div className="rounded-2xl border border-slate-700 p-5 h-[28rem] md:h-[24rem] flex flex-col">
              <div className="font-semibold mb-2">ICDC</div>
              <p className="text-slate-300 mb-4">Competing in Financial Literacy Project at DECA International Career Development (ICDC) .</p>
              <div className="flex-1 rounded-lg overflow-hidden">
                <div className="aspect-[16/10] relative">
                  <a href={encodeURI(`${import.meta.env.BASE_URL}images/Secrets/ICDC.jpeg`)} target="_blank" rel="noreferrer" className="absolute inset-0">
                    <img src={encodeURI(`${import.meta.env.BASE_URL}images/Secrets/ICDC.jpeg`)} alt="ICDC DECA" className="w-full h-full object-cover" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </Section>

  <footer className="py-8 text-center text-sm text-slate-500">
          <div className="flex justify-center gap-4 mb-3">
            <a className="hover:opacity-80" href={PROFILE.links.github} target="_blank" rel="noreferrer"><Github className="inline size-5"/></a>
            <a className="hover:opacity-80" href={PROFILE.links.linkedin} target="_blank" rel="noreferrer"><Linkedin className="inline size-5"/></a>
            <a className="hover:opacity-80" href={`mailto:${PROFILE.email}`}><Mail className="inline size-5"/></a>
          </div>
          <p>© {new Date().getFullYear()} {PROFILE.name}. Built with React and Tailwind.</p>
        </footer>
      </main>
    </div>
  );
}
