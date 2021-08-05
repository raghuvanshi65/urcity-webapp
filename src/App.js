import React from 'react';
import Header from './Components/Header';
import Temperature from './Components/Temperature';
import './App.css';
import Precipitation from './Components/Precipitation';
import Wind from './Components/Astro';
import SearchContextProvider from './Contexts/SearchContextProvider';
import GeolocationContextProvider from './Contexts/GeolocationContextProvider';
import Astro from './Components/Astro';
import Pha from './Components/Pha';

function App() {
  return (
    <div className="App">
      <SearchContextProvider>
      <GeolocationContextProvider>
      <Header></Header>
      <Temperature></Temperature>
      <Pha></Pha>
      </GeolocationContextProvider>
      </SearchContextProvider>
    </div>
  );
}

export default App;
