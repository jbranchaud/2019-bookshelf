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
    author: "Katherine Boo",
  },
  {
    name: "Homegoing",
    photo: homegoing,
    author: "Yaa Gyasi",
  },
  {
    name: "The City & the City",
    photo: theCityAndTheCity,
    author: "China Miéville"
  },
  {
    name: "Rework",
    photo: rework,
    author: "David Heinemeier Hansson and Jason Fried",
  }
]

function BookPhoto({ photo, name, author }) {
  return (
    <div className="book">
      <div className="book-photo">
        <img src={photo} alt={name} />
      </div>
      <div className="book-info">
        <p className="book-title">{name}</p>
        <p className="book-author">{author}</p>
      </div>
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
        {books.map(({ name, photo, author }) => {
          return (
            <BookPhoto key={name} photo={photo} name={name} author={author} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
