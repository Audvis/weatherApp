import React from "react";
import styles from "./About.module.css";
import img from "../world.png";
import me from "../yo.jpg";

export default function About({ onSearch }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>About</h2>
      <div className={styles.subContainer}>
        <div>
          <h3 className={styles.title}>Weather App</h3>
          <p className={styles.text}>
            This App was made with REACT and CSS MODULE <br />
            and take the data of api weather, api flags and api maps.{" "}
          </p>
          <p className={styles.text}>
            The Weather App was created in the Henry's Bootcamp in July 2021.
          </p>
        </div>

        <img src={img} alt="" className={styles.img} />
      </div>

      <div className={styles.subContainerTwo}>
        <img src={me} alt="" className={styles.me} />
        <div>
             <h3 className={styles.title}>Me</h3>
        <p className={styles.text}>
        Musician, audiovisual creater  and now web developer.<br />
        I love create things like a songs and short videos and troublesshot.<br />
         Currently  I use the next tecnologies:<br /> 
         posgres, sequelice, node, react, redux, react-native, html and css.
        </p>
        </div>
      
      </div>
    </div>
  );
}
