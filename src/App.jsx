import './App.css';
import { useState } from "react";
import countriesData from "./countries.json";
import Navbar from "./components/Navbar";
import CountriesList from './components/CountriesList';
import CountryDetails from "./components/CountryDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className='App'>
      <nav>
        <h1>LAB - WikiCountries</h1>
      </nav>
      
      <div className='container'>
        <div className='row'>
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:countryId" element={<CountryDetails countries={countries}/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
