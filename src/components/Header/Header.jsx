import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext'
import './Header.css'


function Header() {
  //create a variable for darkmode
  //const darkMode = false;

  //create state for darkmode
  //const [darkMode, setDarkMode] = React.useState(false)

  //now change to global state
  //NOTE { } NOT []
  const {darkMode, setDarkMode} = useContext(ThemeContext)

  return (
    <div className={darkMode?"header-container header-dark":"header-container"}>
        <div>
            <Link to="/" style={{marginRight: "10px"}}>Home</Link>
            <Link to="/about" style={{marginRight: "10px"}}>About</Link>
            <Link to="/episodes">Episodes</Link>
        </div>
        <div>
            <button className={darkMode?"theme-button theme-button-dark":"theme-button"}
            onClick={()=>setDarkMode(!darkMode)}
            >
              {
                darkMode? "Light Mode":"Dark Mode"
              }
              
            </button>
        </div>
    </div>
  )
}

export default Header