import Link from "next/link";

export default function NavMenu({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) {
  return (
    <div className={`nav-menu ${isOpen ? "open" : ""}`}>
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
    </div>
  );
}
