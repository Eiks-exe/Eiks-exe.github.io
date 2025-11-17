import "./index.scss";
interface HomeHeaderProps {
  title?: string;
  subtitle?: string;
}

export const HomeHeader = ({
  title = "Andy Morellon",
  subtitle,
}: HomeHeaderProps) => {
  return (
    <div className="homeHeaderContainer">
      <div className="title-container">
                <h1 className="title">{title}</h1>
               <h2 className="subtitle">{subtitle}</h2>
      </div>
      <div className="nav-container">
        <a href="/about" className="nav-links">
          about
        </a>
      </div>
    </div>
  );
};
