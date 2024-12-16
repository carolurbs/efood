import { HeroBar } from './styles'
import heroBackground from '../../assets/hero.png'
import logo from '../../assets/logo.svg'

const Hero = () => (
  <HeroBar style={{ backgroundImage: `url(${heroBackground})` }}>
    <div className="container">
      <ul>
        <li>
          <a href="#">
            <img src={logo} alt="Efood" />
          </a>
        </li>
        <li>Viva experiências gastronômicas no conforto da sua casa</li>
      </ul>
    </div>
  </HeroBar>
)
export default Hero
