import React from 'react';
import Card from './Card'
import Intro from './Intro'
import styles from './Cards.module.css';
import './Var.css';

export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
 
    return (
      <>
      {
      cities.length === 0
      ?<Intro />
      :  <ul
      className={styles.ulCards}
    >
      {/* El signo de interrogación sirve para que no se rompa el programa si no encuentra los datos */}
      {cities?.map(city => (
        <li key={city.id}>
          <Card
            max={city.main.temp_max}
            min={city.main.temp_min}
            name={city.name}
            img={city.weather[0].icon}
            onClose={onClose} 
            id={city.id}
            key={city.id}
          />
        </li>))}
    </ul>
      }
     
      </>
    )
  
  
};