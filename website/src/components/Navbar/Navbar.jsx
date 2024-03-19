import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <nav className="nav-container">
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/svg/logoSegguroC.svg" alt="" />
          </Link>
        </div>
        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <img src="/svg/menu.svg" alt="menu" />
        </div>
        <ul className={["navbar-links", menuOpen ? "open" : ""].join(" ")}>
          <li className="nav-link">
            <NavLink to="/" className="navbar-link">
              Inicio
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/nosotros" className="navbar-link">
              Nosotros
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/servicios" className="navbar-link">
              Servicios
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/cursos" className="navbar-link">
              Cursos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
