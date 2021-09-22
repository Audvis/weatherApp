import React from 'react';
import styles from './Card.module.css';
import './Var.css';
import { Link } from 'react-router-dom';



export default function Card({ max, min, name, img, onClose, id}) {
  // acá va tu código

  return (

    <div className={styles.card}>
      <button
        className={styles.x}
        onClick={() => onClose(id)}
      >X</button>

     
      <h2 className={styles.tituloCard}>{name}</h2>
      

      <div className={styles.container}>
        <p className={styles.subTitulosMin}>Min <span className={styles.min}>{min}°</span> </p>
        <p className={styles.subTitulosMax}>Max <span className={styles.max}>{max}°</span> </p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Imagen Clima" className={styles.img} />
   
     <Link to={`/ciudad/${id}`} >
     <button className={styles.btn}>More Info</button>
      </Link>
    </div>

  )
};