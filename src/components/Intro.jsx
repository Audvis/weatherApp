import React from "react";
import styles from './Intro.module.css';
import img from '../weatherWorld.jpg'

const Intro = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Weather </h1>
      <img src={img} alt="" className={styles.img}/>
    </div>
  );
};

export default Intro;
