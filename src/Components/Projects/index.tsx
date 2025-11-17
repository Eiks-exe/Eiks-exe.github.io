import styles from "./Projects.module.scss";
import silviaLogo from "../../assets/silvianna_logo.png";
import rrlogo from "../../assets/rainrush_logo.png";
import lsulogo from "../../assets/lsu-logo.jpg";
interface ProjectProps {
  title: string,
  tagline: string,
  points: string[],
  tech: string,
  demo?: string,
  github: string,
  layoutconfig?: 'row' | 'rev-row' | "col",
  color?:string,
  image?:string 
}
const projects : ProjectProps[] = [
  {
    title: "Discord Voice Channel Automation Bot (SilvianaBot)",
    tagline: "A Modular and 100% scalable TypeScript bot with multiple features. One of them automates voice-channel management on Discord. It watches specific “host” channels stored in SQLite, creates a personal voice channel when someone joins, and moves the user into it automatically.",
    points: [
      "Dynamic channel creation with automatic user transfer",
      "Persistent Configuration via SQLite",
      "In-Chat Control Panel",
    ],
    tech: "Typescript, Node.js, SQLite",
    demo: "/nodemoyet", // replace with demo link
    github: "https://github.com/Eiks-exe/SilvianaBotanica",
    color:"#5662f6",
    image:silviaLogo
  },
  {
    title: "Snapchat Automation",
    tagline: "Script that automates streak screenshots.",
    points: [
      "Used Puppeteer to simulate user actions on Snapchat web.",
      "Employed virtual webcam to stream VPS screen output.",
      "Reduced cognitive load while maintaining engagement.",
    ],
    tech: "Puppeteer, Node.js",
    demo: "/nodemoyet",
    github: "https://github.com/Eiks-exe/lazy-snap-user",
    color: "#F6C300",
    image: lsulogo
  },
  {
    title: "RainRush",
    tagline: "RainRush is a desktop app and backend system that logs and analyzes Risk of Rain 2 gameplay in real time. It integrates directly with the game through a custom mod and feeds run data into a Tauri-based client and a Node/Express API backed by MySQL.",
    points: [
      "In-game mod pulls run data (duration, survivor difficulty, win/loss ).",
      "Lightweight Tauri desktop app for viewing runs.",
      "Express.js backend + structured MySQL database.",
    ],
    tech: "HTML, SCSS, CSS transforms",
    demo: "/nodemoyet",
    github: "https://github.com/Eiks-exe/RainRushDesktop",
    color:"#0e4d7c",
    image:rrlogo
  },
];


export const Projects = () => (
  <section className={styles.projects}>
    <h2>Projects</h2>
    {projects.map((p)=>(
      <Project project={p} color={p.color} ></Project>
    ))}
  </section>
);

const Project = ({project, color }: { project: ProjectProps, color?: string} ) => {
  return (
    
    <div className={styles.project}>
      <div className={styles.description}>
        <h3>{project.title}</h3>
        <p className={styles.tagline}>
          {project.tagline}
          
        </p>
        <ul>{project.points.map((pt, j) => <li key={j}>{pt}</li>)}</ul>
        <p className={styles.tech}><strong>Tech:</strong> {project.tech}</p>
        <div className={styles.links}>
          <a href={project.github}>GitHub</a>
        </div>
      </div>
      <div className={styles.scene}>
        <div className={styles.card} style={{backgroundColor:color}}>
          {project.image && <img src={project.image} alt={project.title}/>}
          <div className={styles.techContainer}>  
          {project.tech.split(",").map((tech)=>(
            <div className={styles.techIcon}>{tech}</div>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}
