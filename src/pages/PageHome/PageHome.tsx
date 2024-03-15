import React from 'react'
import AppNavbar from '../../components/AppNavbar/AppNavbar';
import AppCard from '../../components/AppCard/AppCard';
import './PageHome.scss';

const PageHome = () => {
  return (
    <div className='page-home'
      style={
        {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            color: 'white',
        }
    }>
      <AppNavbar/>
      <div className="home-content">
          <div className='aboutme'>
            <h1>
                About me
            </h1>
            <p>
              I'm 31k5. My journey is fueled by an insatiable quest to master the depths of knowledge and self, charting paths beyond conventional boundaries. With a blend of rigorous curiosity and a dedication to excellence, I seek not just to achieve but to expand what's possible. Here, you'll find a collection of my explorations and achievements, each a step toward transcending the ordinary and embracing the extraordinary.
            </p>
          </div>
          <div className="home-projects">
            <h1>My projects</h1>
            <div
            className='projects-container'
            style={{
              height: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}>
              <AppCard title="Silvia" 
                className='ac-1'
                style={{
                  gridColumn: '1 / 3',
                  gridRow: '1 / 3',
                  background: `linear-gradient(rgba(50, 150, 100, 0.5), rgba(0, 0, 0, 0.5))`,
                }}
              >
              <p>
                Silvia is a Discord bot that I've been working on for a while. It's designed to be a multi-purpose bot, with features ranging from moderation to fun commands. It's also open-source, so you can check out the code on GitHub.
              </p> 
              </AppCard>
              <AppCard title="Hive"
                className='ac-2'
                style={{
                  gridRow: '1/3',
                  background: `linear-gradient(rgba(180, 120, 0, 1), rgba(0, 0, 0, 1))`,
                } }
              >
              <p>
                Hive is web chat application that I've been working on. It's designed to be a simple, lightweight chat application you can use it to talk to me <a href="/">here.</a> also there' s a link to the source code on GitHub.
              </p>
              </AppCard>
              <AppCard title="IRIS"
                className='ac-3'
                style={{
                  gridColumn: '1/4',
                  background: `linear-gradient(rgba(180, 10, 200, 1), rgba(0, 0, 0, 1))`,
                }}
              >
              <p>
                IRIS is a personal assistant that I'm working on , so far it's still in development but you can check out the source code on GitHub.
              </p>
              </AppCard>
            </div>
          </div>

          <div className="home-social">
            <h1>My socials</h1>
            <div style={{
              display: 'flex',
              gap: '20px',
            }}>
              <ul>
                <li>
                  <a href="#">github</a> 
                </li>
                <li>
                  <a href="#">eiks_art@outlook.com</a> 
                </li>
                <li>
                  <a href="http://discordapp.com/users/234728680209776640">discord</a> Discord
                </li>
                <li>
                  or contact me on my webchat <a href="/">here.</a> 
                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}

export default PageHome; 