import React, { useState } from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import './components/Var.css';
import Header from './components/Header.jsx';
import { Route } from 'react-router-dom';
import About from './components/About.jsx';
import Ciudad from './components/Ciudad.jsx';
import './App.css';


const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {

  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    //pero de momento agregaremos una ciudad por default para ver que funcione
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
    )
      .then(ciudad => ciudad.json())
      .then((ciudad) => {
        if (ciudad.main !== undefined) {
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }

      })
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));

  }

  function onFilter(ciudadId) {
    let ciudad = cities.find(c => c.id === parseInt(ciudadId));
    if (ciudad) {
      return ciudad;
    } else {
      return null;
    }
  }


  return (
    <div className="app">


      <Route
        path='/'
        component={Header}
      />


      <Route
        exact path='/'
        render={() => <Cards cities={cities}
          onClose={onClose}
        />}
      />

      <Route
        path='/about'
        component={About}
      />

      <Route
        exact path='/'
        render={() => <Nav onSearch={onSearch} />}
      />



      <Route
        exact path='/ciudad/:ciudadId'
        render={({ match }) => <Ciudad city={onFilter(match.params.ciudadId)} />}
      />





    </div>
  );




}

export default App;
