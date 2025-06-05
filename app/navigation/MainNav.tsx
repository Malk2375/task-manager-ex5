// src/navigation/MainNav.tsx
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>
            Accueil
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
