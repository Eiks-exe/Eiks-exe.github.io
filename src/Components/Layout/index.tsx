import type { ReactNode } from "react";
import "./layout.css"
import { useLayoutContext } from "../../contexts/LayoutContext";
import { HomeHeader } from "../HomeHeader";
interface LayoutProps {
  children?: ReactNode; 
}

export const Layout = ({children} : LayoutProps) => {
  const { theme, setTheme } = useLayoutContext()
  return (
    <div className={`Layout ${theme}`}>
      <div className="container">
        <HomeHeader subtitle='software engineer'/>
        {children}
      </div>
    </div> 
  )
}
