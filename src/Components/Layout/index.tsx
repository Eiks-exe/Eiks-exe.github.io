import type { ReactNode } from "react";
import "./layout.css"
import { useLayoutContext } from "../../contexts/LayoutContext";
interface LayoutProps {
  children?: ReactNode; 
}

export const Layout = ({children} : LayoutProps) => {
  const { theme, setTheme } = useLayoutContext()
  return (
    <div className={`Layout ${theme}`}>
      {children}
    </div> 
  )
}
