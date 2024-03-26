import { Link, NavLink } from "react-router-dom";
import Logo from "/assets/logo.svg";
const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <a className="header__logo">
              <img src={Logo} />
            </a>
            <div className="button-mobile">
              <button>=</button>
            </div>
            <nav className="main-menu">
              <ul className="main-menu__list">
                <li className="main-menu__item">
                  <NavLink
                    to="/"
                    className="main-menu__link"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="main-menu__item">
                  <NavLink
                    to="/shop"
                    className="main-menu__link"
                  >
                    Shop
                  </NavLink>
                </li>
                <li className="main-menu__item">
                  <NavLink
                    to="/about"
                    className="main-menu__link"
                  >
                    About
                  </NavLink>
                </li>
                <li className="main-menu__item">
                  <NavLink
                    to="/contact"
                    className="main-menu__link"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="header-items">
              <div className="header-item-user">
                <Link to="/login">
                  <img src="/assets/icons/1.svg" />
                </Link>
              </div>
              <div className="header-item-user">
                <span>
                  <img src="/assets/icons/2.svg" />
                </span>
              </div>
              <div className="header-item-user">
                <span>
                  <img src="/assets/icons/3.svg" />
                </span>
              </div>
              <div className="header-item-user">
                <Link to="/cart">
                  <span>
                    <img src="/assets/icons/4.svg" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
