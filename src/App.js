import React from 'react';
import './App.css';

import behindTheBeautifulForevers from "./images/book-photos/behind-the-beautiful-forevers.jpeg";
import homegoing from "./images/book-photos/homegoing.jpeg";
import theCityAndTheCity from "./images/book-photos/the-city-and-the-city.jpeg";
import rework from "./images/book-photos/rework.jpeg";

const books = [
  {
    title: "Behind the beautiful forevers",
    photo: behindTheBeautifulForevers,
    author: "Katherine Boo",
  },
  {
    title: "Homegoing",
    photo: homegoing,
    author: "Yaa Gyasi",
  },
  {
    title: "The City & the City",
    photo: theCityAndTheCity,
    author: "China Miéville"
  },
  {
    title: "Rework",
    photo: rework,
    author: "David Heinemeier Hansson and Jason Fried",
  }
]

function BookPhoto({ photo, title, author }) {
  return (
      <div className="scene">
        <div className="card">
          <div className="card-face book card-face-front">
            <div className="book-photo">
              <img src={photo} alt={title} />
            </div>
            <div className="book-info">
              <p className="book-title">{title}</p>
              <p className="book-author">{author}</p>
            </div>
          </div>
          <div className="card-face book card-face-back">
            <p>Here is the back</p>
          </div>
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
        {books.map(({ title, photo, author }) => {
          return (
            <BookPhoto key={title} photo={photo} title={title} author={author} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
