import React from "react";
import styles from "./Ciudad.module.css";
import Map from "./MapView";

export default function Ciudad({ city }) {
  console.log(city);
  let flag = city.sys.country.toLowerCase();
  let wid = 144;
  let hei = 108;
  if (city.name.toLowerCase() === "mexico") {
    flag = "mx";
  }

  const lat = city.coord.lat;
  const lon = city.coord.lon;

  return (
    <div className={styles.container}>
      <div className={styles.flag}>
        <img
          src={`https://flagcdn.com/${wid}x${hei}/${flag}.png`}
          width="{wid}"
          height="{hei}"
          alt="Sudáfrica"
        />
        <div className={styles.country}>{city.sys.country} </div>
      </div>

      <div className={styles.info}>
        <h2 className={styles.titulo}>{city.name}</h2> 
        <h3 className={styles.subTitulo}>General Weather</h3>
        <div className={styles.texto}>
          Temp <span className={styles.span}>:</span> {city.main.temp}{" "}
          <span className={styles.span}>º</span>C
        </div>
        <div className={styles.texto}>
          Weather <span className={styles.span}>:</span> {city.weather[0].main}
        </div>
        <div className={styles.texto}>
          Description <span className={styles.span}>:</span>{" "}
          {city.weather[0].description}
        </div>
        <div className={styles.texto}>
          Wind speed <span className={styles.span}>:</span> {city.wind.speed}{" "}
          km/h
        </div>
        <div className={styles.texto}>
          Clouds <span className={styles.span}>:</span> {city.clouds.all}
        </div>
        <div className={styles.texto}>
          Humidity <span className={styles.span}>:</span> {city.main.humidity}
        </div>
        <div className={styles.texto}>
          Pressure <span className={styles.span}>:</span> {city.main.pressure}
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
          alt="Imagen Clima"
          className={styles.icon}
        />
        <div className={styles.textoNew}>
          <div className={styles.texto}>
            Latitude <span className={styles.span}>:</span> {city.coord.lat}
            <span className={styles.span}>º</span>
          </div>
          <div className={styles.texto}>
            longitude <span className={styles.span}>:</span> {city.coord.lon}
            <span className={styles.span}>º</span>
          </div>
        </div>
      </div>

      <h3 className={styles.subTituloNew}>Location</h3>
      <Map lat={lat} lon={lon} name={city.name} />
    </div>
  );
}
