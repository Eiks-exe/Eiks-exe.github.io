import "../Home/Home.scss"
import "../view.scss"
import { IoReturnUpBackOutline } from "react-icons/io5";
export const About = ()=>{
  return (
  <div className="container">
    
    <div className="aboutWrap">
    <h1 className="title">About me</h1>
      <p>
        I build tools and systems to answer my own questions and solve problems I care about. Most of my projects start with a personal need—whether it’s tracking performance in a game, experimenting with data pipelines, or exploring a new framework. From there, I design the full system: frontend, backend, and everything in between, always thinking about clarity, efficiency, and reliability.
      </p>
      <p>
        I enjoy understanding how things work at a deeper level, fixing what breaks, and iterating toward better solutions. That curiosity has led me to explore everything from desktop apps with Tauri to backend systems, and now toward lower-level languages like C++ and Rust.
      </p>
      <p>
        I’m not building for hype—I’m building to learn, to master, and to create tools that actually work for real needs. Each project is both a personal experiment and a step toward a broader goal: becoming the kind of engineer who can design, understand, and control complex systems end-to-end.
      </p>
    
    <div className="return button"><a href="/">
          <IoReturnUpBackOutline/>
        </a></div> 
      </div>
      
  </div>
  )
}
