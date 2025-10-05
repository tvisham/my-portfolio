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

// ---------- Replace these with your real details ----------
const PROFILE = {
  name: "Tvisha Mishra",
  role: "High School Senior • Aspiring ?",
  location: "Bothell, WA",
  email: "tvisha0913@outlook.com",
  bio: `Bio about me`,
  links: {
    github: "https://github.com/tvisham",
    linkedin: "https://www.linkedin.com/in/tvishamishra/",
  },
};

const PROJECTS = [
  {
    title: "Project Aurora",
    blurb: "AI-powered note search with semantic embeddings and offline sync.",
    tags: ["Next.js", "TypeScript", "Pinecone", "Tailwind"],
    img: null,
    links: {
      live: "https://example.com/aurora",
      repo: "https://github.com/yourhandle/aurora",
    },
  },
  {
    title: "NotDueYet",
    blurb: "A multi-feature assignment tracker with priorities, calendar view, and subtasks.",
    tags: ["Vanilla JS", "LocalStorage", "Modular Architecture"],
    img: null,
    links: {
      live: "https://example.com/notdueyet",
      repo: "https://github.com/yourhandle/notdueyet",
    },
  },
  {
    title: "CodeBridge Site",
    blurb: "Landing page and curriculum hub for a student-run coding club.",
    tags: ["React", "Vite", "Tailwind", "Netlify"],
    img: null,
    links: {
      live: "https://example.com/codebridge",
      repo: "https://github.com/yourhandle/codebridge",
    },
  },
];

const EXPERIENCE = [
  {
    org: "Boeing",
    title: "Engineering Intern",
    date: "Summer 2025",
    points: [
      "Built a platform for restaurants to manage insights and ordering.",
      "Collaborated with a team of six; shipped features to production.",
      "Reduced order processing time by 23% via queue optimization.",
    ],
  },
  {
    org: "Quadrant Technologies",
    title: "Software Engineering Intern",
    date: "Summer 2024",
    points: [
      "Designed and developed a restaurant billing and customer insights app to support small businesses post-COVID.",
      "Configured CI/CD pipelines in Azure DevOps to streamline workflows and automate deployments.",
      "Utilized SQL for data manipulation and analysis to improve billing and insights functionality.",
      "Implemented Generative AI and language models to enhance app features and user experience.",

    ],
  },
];

const EDUCATION = [
  {
    school: "Your High School / University",
    degree: "B.S. Computer Science & Electrical Engineering (expected)",
    date: "Class of 2029",
    points: ["GPA 3.9/4.0", "Robotics, Hack Club, Math Team"],
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((p) => (
              <Card key={p.title} className="rounded-3xl overflow-hidden hover:shadow-xl transition-shadow border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{p.title}</span>
                  </CardTitle>
                  <CardDescription className="text-slate-400">{p.blurb}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-xl border border-slate-700 grid place-content-center mb-4">
                    <span className="text-xs text-slate-500">Add a screenshot here</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="outline" className="rounded-2xl">{t}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <a href={p.links.live} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="default" className="rounded-2xl">
                        <ExternalLink className="mr-2 size-4"/>Live
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
            ))}
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

        <footer className="py-12 text-center text-sm text-slate-500">
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
