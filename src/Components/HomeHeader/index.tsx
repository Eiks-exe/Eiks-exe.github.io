import "./index.css"
interface HomeHeaderProps {
  title?: string
  subtitle?: string
} 

export const HomeHeader = ({title = "Andy Morellon,", subtitle}: HomeHeaderProps) => {
  return (
    <div className="homeHeaderContainer">
      <div className="title-container">
        <h1 className="title">
          {title}
        </h1>
        <h2 className="subtitle">
          {subtitle}
        </h2>
      </div>
      <div className="nav-container">
        <a href="" className="nav-links">about</a>
        <a href="" className="nav-links nav-btn">contact</a>
      </div>
    </div>
  )
}
