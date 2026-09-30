import './Header.css';
import { Link } from "react-router-dom"

function Header() {
  
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="#" className="header__logo">
          <span className="header__logo-mark">OMDb</span>
          <span className="header__logo-sub">кинокаталог</span>
        </Link>

        <nav className="header__nav">
          <NavLink
    to="/"
    end
    className={({ isActive }) =>
        isActive
            ? "header__nav-link header__nav-link--active"
            : "header__nav-link"
    }
>
    Главная
</NavLink>
          <Link to="#" className="header__nav-link">
            Избранное
          </Link>
          <Link to="/about" className="header__nav-link">О проекте</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
