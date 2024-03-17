import './HeroStyle.css'

const Hero = ({btn,tittle}) => {
  return (
    <div className="hero">
     <div className="info-hero">
     <button>{btn}</button>
     <h1>{tittle}</h1>
      </div>

    </div>
  )
}

export default Hero