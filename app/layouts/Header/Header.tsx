// src/layouts/Header/Header.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={styles.navItem}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/tasks" className={styles.navItem}>
              Tâches
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
