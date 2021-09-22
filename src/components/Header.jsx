import React from 'react';
// import logo from './logoHenry.png'
import './Var.css';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';


function Header() {
  return (
    <nav className={styles.header}>
      <Link to='/'>
        <span className={styles.titulo}>
          Weather App
        </span>
      </Link>
      <Link to='/about'>
        <span className={styles.link}>About</span>
      </Link>
        
    </nav>
  );
};

export default Header;