import { SelfDrawingSquare } from "../../Components/SelfDrawingSquare";
import { Projects } from "../../Components/Projects";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { LiaFileDownloadSolid } from "react-icons/lia";
import cv from "../../assets/CVMORELLONANDY.pdf"
import './Home.scss'
export const Home = ()=>{
return(
      <>
        <div className="container">
          <div className="hero x-grid">
          <div className="left">
            <div className="title">Full Stack Developper</div>
            <p className="bio">
              Enginneer at heart and artist in practice, I chase mastery in
              everything I do.
            </p>
            
            <div className={"buttons"}>
              <a
                href="mailto:a.morellon@outlook.com"
                className={"button"}
                target="_blank"
                rel="noreferrer"
              >
                <IoIosMail className="icons"/>
              </a>
              <a
                href="https://github.com/Eiks-exe"
                className={"button"}
                target="_blank"
                rel="noreferrer"
              >
                  <FaGithub className="icons"/>
              </a>
              <a
                href={cv}
                className={"button"}
                target="_blank"
                rel="noreferrer"
              >
                  <LiaFileDownloadSolid className="icons"/> My CV
              </a>
            </div>
          </div>
          <SelfDrawingSquare />
          </div>
        <Projects />
        </div>
      </>
)
}
