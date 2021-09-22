import React from 'react';
import SearchBar from './SearchBar';
import styles from './Nav.module.css';
// import logo from '../logoHenry.png'
import './Var.css';


export default function Nav({onSearch}) {
    // acá va tu código
    return (
     <nav className={styles.nav}>
        {/* <img nameClass={styles.img} src={logo} alt="Imagen" /> */}
        {/* <h3>Henry</h3> */}
        <SearchBar
          onSearch={onSearch}
        />
     </nav>
    )
  };