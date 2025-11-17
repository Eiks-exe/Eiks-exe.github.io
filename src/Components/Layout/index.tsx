import type { ReactNode } from "react";
import "./Layout.scss";
import { useLayoutContext } from "../../contexts/LayoutContext";
import { HomeHeader } from "../HomeHeader";
interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { theme, setTheme } = useLayoutContext();
  return (
    <div className={`Layout ${theme}`}>
        <HomeHeader/>
        {children}
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
    </div>
  );
};
