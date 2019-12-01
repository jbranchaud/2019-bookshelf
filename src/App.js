import React from 'react';
import './App.css';

import behindTheBeautifulForevers from "./images/book-photos/behind-the-beautiful-forevers.jpeg";
import homegoing from "./images/book-photos/homegoing.jpeg";
import theCityAndTheCity from "./images/book-photos/the-city-and-the-city.jpeg";
import rework from "./images/book-photos/rework.jpeg";

const books = [
  {
    name: "Behind the beautiful forevers",
    photo: behindTheBeautifulForevers,
  },
  {
    name: "Homegoing",
    photo: homegoing
  },
  {
    name: "The City & the City",
    photo: theCityAndTheCity,
  },
  {
    name: "Rework",
    photo: rework,
  }
]

function BookPhoto({ photo, name }) {
  return (
    <div className="book">
      <div className="book-photo">
        <img src={photo} alt={name} />
      </div>
      <p>{name}</p>
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
        {books.map(({ name, photo }) => {
          return (
            <BookPhoto key={name} photo={photo} name={name} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
