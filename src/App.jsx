import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./components/ui/card";
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
} from "lucide-react";

const PROFILE = {
  name: "Tvisha Mishra",
  role: "High School Senior • Aspiring Innovator",
  location: "Bothell, WA",
  email: "tvisha0913@outlook.com",
  bio: `Curiosity-driven student passionate about turning complex questions into human-centered solutions.`,
  links: {
    github: "https://github.com/tvisham",
    linkedin: "https://www.linkedin.com/in/tvishamishra/",
    
  },
};

const PROJECTS = [
  {
    title: "Air Quality Analysis - NYC",
    blurb: "This project provides a comprehensive analysis of air quality trends in New York City.",
    tags: ["Python", "Pandas", "matplotlib", "seaborn", "geopandas"],
  img: "Air-Quality.png",
    fit: "cover",
    minW: "min-w-[18rem]",
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
  fit: "contain",
    links: {
      live: "https://github.com/tvisham/golden-nest",
      repo: "https://github.com/tvisham/golden-nest",
    },
  },
  {
    title: "Gymnasium Rental Website",
    blurb: "A Gymnasium Rental Website designed to facilitate the booking and management of events.",
    tags: ["HTML", "CSS", "JavaScript"],
  img: null,
    links: {
      live: "https://github.com/tvisham/Gymnasium-Rental-Website",
      repo: "https://github.com/tvisham/Gymnasium-Rental-Website",
    },
  },
  {
    title: "not-due-yet",
    blurb: "A assignment tracker with class management, subtasks, priorities, and calendar view.",
    tags: ["HTML", "CSS", "JavaScript"],
  img: "not-due-yet.png",
    links: {
      live: "https://github.com/tvisham/notdueyet",
      repo: "https://github.com/tvisham/notdueyet",
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
      "Configured CI/CD pipelines in Azure DevOps and contributed to data engineering using SQL. Implemented Generative AI and language models to enhance app functionality, billing insights, and user experience.",
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
    points: ["GPA 3.9/4.0", "Robotics, Hack Club, Math Team"],
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
      "Won 2nd Place in Washington State for Financial Literacy Project; competed internationally.",
      "Co-created and led a financial literacy initiative educating ~400 elementary students.",
      "Organized workshops and social campaigns covering employment, insurance, and college prep.",
    ],
  },
  {
    org: "Girls Who Code, Jackson High School & Online",
    role: "Vice President",
    date: "June 2023 - Present",
    points: [
      "Mentored middle school students and peers in Java, Python, and Machine Learning.",
      "Participated in Girls Who Code Summer Immersion Program (Python, Java, AI, Cybersecurity).",
    ],
  },
  {
    org: "Washington Aerospace Scholars, Museum of Flight",
    role: "Participant",
    date: "Nov. 2024 - Present",
    points: [
      "Completed lessons on aerospace design, flight technologies, and space exploration.",
      "Applied aerospace math and science through virtual labs and group projects.",
    ],
  },
  {
    org: "CodeBridge",
    role: "President",
    date: "Sep. 2024 - Present",
    points: [
      "Led efforts to establish clubs at four local elementary and middle schools to encourage girls to explore coding.",
      "Mentored students in Java, Python, and Machine Learning.",
    ],
  },
  {
    org: "Stop Sexual Assault in Schools (Virtual SASH Club)",
    role: "Youth Leader",
    date: "March 2024 - Present",
    points: [
      "Built an online platform facilitating global student discussions on sexual assault and gender discrimination in education.",
      "Produced videos, scripts, and graphics to raise awareness and research-backed reports to inform advocacy.",
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
      "Financial Literacy Project: 2nd Place State; ICDC (International) competitor",
      "Entrepreneurship: multiple regional placements and 2x state competitor",
    ],
  },
  {
    title: "Future Business Leaders of America (2023-2025)",
    items: [
      "Entrepreneurship: National Qualifier; 4th Place State; 2nd Place Regional",
      "Computer Problem Solving, UX Design, Data Analysis, Website Design: multiple regional/state placings",
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
  <section id={id} className="scroll-mt-24 py-28">
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
        </div>
      </header>

      {/* Hero */}
      <main id="home" className="mx-auto max-w-6xl px-4">
        <motion.section
          className="py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mb-4">
              <Sparkles className="size-3" /> Available for internships
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              {PROFILE.role}
            </h1>
            <p className="mt-4 text-slate-300 max-w-prose">
              {PROFILE.bio}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={PROFILE.links.github} target="_blank" rel="noreferrer">
                <Button variant="secondary" className="rounded-2xl"><Github className="mr-2 size-4"/>GitHub</Button>
              </a>
              <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
                <Button variant="secondary" className="rounded-2xl"><Linkedin className="mr-2 size-4"/>LinkedIn</Button>
              </a>
              <a href={`mailto:${PROFILE.email}`}>
                <Button className="rounded-2xl"><Mail className="mr-2 size-4"/>Email Me</Button>
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
                    <div className="mx-auto size-24 rounded-full bg-gradient-to-br from-indigo-500/80 to-purple-500/80 mb-4" />
                    <div className="text-lg font-semibold">{PROFILE.name}</div>
                    <div className="text-sm text-slate-400">{PROFILE.role}</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { label: "Frontend", Icon: Code2 },
                    { label: "Launch", Icon: Rocket },
                    { label: "Work", Icon: Briefcase },
                  ].map(({ label, Icon }) => (
                    <div key={label} className="rounded-xl border border-slate-700 p-3 text-center">
                      <Icon className="mx-auto mb-1 size-5" />
                      <div className="text-xs text-slate-400">{label}</div>
                    </div>
                  ))}
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

          <div className="overflow-x-auto w-full -mx-4 px-4">
            <div className="flex gap-6 items-stretch snap-x snap-mandatory">
              {filtered.map((p) => (
                <div key={p.title} className="flex-shrink-0 w-[20rem] snap-start h-[30rem] md:h-[26rem]">
                  <Card className="h-full w-full flex flex-col rounded-3xl overflow-hidden transition-shadow border-slate-700 group">
                <CardHeader className="mb-2 h-20">
                  <CardTitle className="flex items-center justify-between gap-3">
                    <span className="text-slate-900 dark:text-slate-100">{p.title}</span>
                  </CardTitle>
                  <CardDescription className="text-slate-700 dark:text-slate-300">{p.blurb}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <div className="relative mb-4 rounded-xl border border-slate-700 overflow-hidden flex-1">
                    {p.img ? (
                      <img
                        src={`${import.meta.env.BASE_URL}images/${p.img}`}
                        alt={p.title}
                        className={`w-full h-full ${p.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
                      />
                    ) : (
                      <div className="w-full h-full grid place-content-center text-xs text-slate-500">Add a screenshot here</div>
                    )}
                    {/* Hover overlay */}
                    <a href={p.links.repo} target="_blank" rel="noreferrer" className="absolute left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-3">
                      View Code
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="outline" className="rounded-2xl">{t}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mt-auto">
                      <a href={p.links.live} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="default" className="rounded-2xl">
                        <ExternalLink className="mr-2 size-4"/>Live
                      </Button>
                    </a>
                    <a href="https://www.fox13seattle.com/news/teens-early-financial-literacy-debt" target="_blank" rel="noreferrer">
                      <Button size="sm" variant="ghost" className="rounded-2xl">
                        <ExternalLink className="mr-2 size-4"/>Video
                      </Button>
                    </a>
                    <a href={p.links.repo} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="secondary" className="rounded-2xl">
                        <Github className="mr-2 size-4"/>Code
                      </Button>
                    </a>
                  </div>
                </CardContent>
                  </Card>
                </div>
              ))}
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
            {LEADERSHIP.map((l) => (
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
              <p className="text-slate-300 mb-4">Jackson High School team coverage.</p>
              <div className="flex-1 rounded-lg overflow-hidden">
                <img src={`${import.meta.env.BASE_URL}images/JHS.png`} alt="JHS Robotics" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Video Card */}
            <div className="rounded-2xl border border-slate-700 p-5 h-[28rem] md:h-[24rem] flex flex-col">
              <div className="font-semibold mb-2">Video / Article</div>
+              <p className="text-slate-300 mb-4">Coverage about teen financial literacy.</p>
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
          </div>
        </Section>
+
+
+        <footer className="py-12 text-center text-sm text-slate-500">
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
