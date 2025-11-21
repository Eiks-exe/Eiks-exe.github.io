import { useLayoutContext } from "../../contexts/LayoutContext";
import "./index.scss";
interface HomeHeaderProps {
  title?: string;
  subtitle?: string;
}

export const HomeHeader = ({
  title = "Andy Morellon",
  subtitle,
}: HomeHeaderProps) => {
  const {dispatchView} = useLayoutContext()
  return (
    <div className="homeHeaderContainer">
      <div className="title-container" onClick={()=> dispatchView({type:"set_view", payload: "home"})}>
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
      </div>
      <div className="nav-container">
        <div className="nav-links" onClick={() => dispatchView({type:"set_view", payload: "about"})}>
          about
        </div>
      </div>
    </div>
  );
};
