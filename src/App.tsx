import './App.css'
import { LayoutContextProvider } from './contexts/LayoutContext'
import { Layout } from './Components/Layout'

function App() {

  return (
    <LayoutContextProvider>
    <Layout>
        <div className="hero">
          <div className="left">
            <p className="bio">
              Enginneer at heart and artist in practice, 
              I chase mastery in everything I do. 
              That include building systems that combine technical depth with expressive visuals and 
              turning effort into work that feels both powerful and precise.
            </p>
          </div>

        </div>
    </Layout>
    </LayoutContextProvider>
  )
}

export default App
