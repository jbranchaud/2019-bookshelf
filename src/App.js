import React from 'react';
import './App.css';

import behindTheBeautifulForevers from "./images/book-photos/behind-the-beautiful-forevers.jpeg";
import homegoing from "./images/book-photos/homegoing.jpeg";
import theCityAndTheCity from "./images/book-photos/the-city-and-the-city.jpeg";
import rework from "./images/book-photos/rework.jpeg";

function BookPhoto({ photo, alt }) {
  return (
    <div className="book-photo">
      <img src={photo} alt={alt} />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Books - 2019</p>
      </header>
      <div className="books-container">
        <BookPhoto photo={behindTheBeautifulForevers} alt="Behind The Beautiful Forevers" />
        <BookPhoto photo={homegoing} alt="Homegoing" />
        <BookPhoto photo={theCityAndTheCity} alt="The City & the City" />
        <BookPhoto photo={rework} alt="Rework" />
      </div>
    </div>
  );
}

export default App;
