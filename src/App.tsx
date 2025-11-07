import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomeHeader } from './Components/HomeHeader'
import { LayoutContextProvider } from './contexts/LayoutContext'
import { Layout } from './Components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LayoutContextProvider>
    <Layout>
        <HomeHeader subtitle='software engineer'/>
    </Layout>
    </LayoutContextProvider>
  )
}

export default App
