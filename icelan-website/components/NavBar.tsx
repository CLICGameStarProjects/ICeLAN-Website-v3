import Link from "next/link";
import logo from "@public/logo-white.svg";
import MenuIcon from "./icons/MenuIcon";
import CloseIcon from "./icons/CloseIcon";

export default function NavBar({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) {
  var MenuSwitchIcon = isOpen ? CloseIcon : MenuIcon;
  var alt = isOpen ? "Close" : "Menu";

  return (
    <header className="nav-bar">
      <a href="/">
        <img src={logo.src} alt="ICeLAN Logo" className="logo" />
      </a>
      <nav className="nav-bar-links">
        <ul>
          <li>
            <Link href="/" onClick={toggleMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/infos" onClick={toggleMenu}>
              Infos
            </Link>
          </li>
          {/* <li>
          <Link href="" onClick={toggleMenu}>
            Inscriptions
          </Link>
        </li>
        <li>
          <Link href="" onClick={toggleMenu}>
            Staffing
          </Link>
        </li> */}
        </ul>
      </nav>
      <button
        aria-label="Toggle Menu"
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <MenuSwitchIcon />
      </button>
    </header>
  );
}
