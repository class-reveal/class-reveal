import { useState, useEffect } from "react";
import "./Navbar.css";
// import { flushSync } from "react-dom";
// import { BeakerIcon } from "@heroicons/react/24/solid";

type NavbarProps = {
  variant?: string;
  collapsible: boolean;
  onClick?: () => void;
};

const Navbar = ({ collapsible, onClick, variant }: NavbarProps) => {
  const [isCollapsible, setIsCollapsible] = useState(collapsible);

  useEffect(() => {
    setIsCollapsible(collapsible);
  }, [collapsible]);

  return (
    <>
      {isCollapsible && (
        <div className="navbar-collapsible">
          <nav className="nav">
            <div className="left">
              <h2 className="nav-title">ClassReveal</h2>
            </div>
            <div className="right">
              <div onClick={onClick && (() => onClick())} className="collapse">
                <img className="menu-icon" src="/menu.svg" alt="menu" />
              </div>
            </div>
          </nav>

          <div className="expanded-nav">
            <a className="nav-link">Penn State</a>
            <a className="nav-link">Rutgers</a>
            <a className="nav-link">FAQ</a>
            <a className="nav-link">Log in</a>
          </div>
        </div>
      )}
      {!isCollapsible && (
        <div className="navbar">
          <nav className={`nav ${variant}`}>
            <div className="left">
              <h5 className="nav-title">ClassReveal</h5>
              <ul className="nav-list">
                <li>
                  <a>Penn State</a>
                </li>
                <li>
                  <a>Rutgers</a>
                </li>
              </ul>
            </div>
            <div className="right">
              <ul className="nav-list">
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Login</a>
                </li>
              </ul>
              <div onClick={onClick && (() => onClick())} className="collapse">
                <img className="menu-icon" src="/menu.svg" alt="menu" />
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
