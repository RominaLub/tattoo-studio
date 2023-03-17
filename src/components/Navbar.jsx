import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css"
import hamburger from '../images/hamburger.png'

function NavBar() {
  const [showNav, setShowNav] = useState(false)

  const handleShowNavbar = () => {setShowNav(!showNav)}

    return (
        <nav className="navbar">
          <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={hamburger} alt="" className="menu-icon"/>
          </div>
          <div className={`nav-elements  ${showNav && 'active'}`}>
            <ul>
              <li> <NavLink to="/" className="navlink">Home</NavLink> </li>
              <li> <NavLink to="/" className="navlink">Leistungen</NavLink> </li>
              <li> <NavLink to="/gallery" className="navlink">Gallerie</NavLink> </li>
              <li> <NavLink to="/questions" className="navlink">Fragen & Antworten</NavLink> </li>
              <li> <NavLink to="/" className="navlink">Gutscheine & Aktionen</NavLink> </li>
              <li> <NavLink to="/contact" className="navlink">Kontakt</NavLink> </li>
            </ul>
          </div>
        </nav>
    )
}

export default NavBar;