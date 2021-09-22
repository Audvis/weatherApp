import React, {useState} from 'react';
import styles from './Search.module.css';
import './Var.css';

export default function SearchBar({ onSearch }) {
  // acá va tu código

  const [city, setCity] = useState('');

  function insertarCiudad(e) {
    return(
      setCity(e.target.value)
      )
  }

  
  return (
    <form 
      className={styles.form}
      onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
      }}
    >
      <input
        type="text"
        name="busqueda"
        placeholder="City..."
        className={styles.entrada}
        onChange={insertarCiudad}
        value={city}
      />
      <input 
        type="submit"  
        className={styles.agregar}
        value="Add"
      />
     
    </form>
  )
};