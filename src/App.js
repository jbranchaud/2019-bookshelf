import React, { useState } from 'react';
import './App.css';

import behindTheBeautifulForevers from "./images/book-photos/behind-the-beautiful-forevers.jpeg";
import homegoing from "./images/book-photos/homegoing.jpeg";
import theCityAndTheCity from "./images/book-photos/the-city-and-the-city.jpeg";
import rework from "./images/book-photos/rework.jpeg";

const cx = (...classnames) => {
  return classnames.map(item => {
    if(typeof item === "string") {
      return item;
    }
    if(typeof item === "object") {
      return Object.keys(item).map(key => {
        return item[key] ? key : void 0;
      }).join(" ");
    }
    return void 0;
  }).join(" ")
}

const books = [
  {
    title: "Behind the beautiful forevers",
    photo: behindTheBeautifulForevers,
    author: "Katherine Boo",
    genres: ["Biography", "Creative nonfiction"],
  },
  {
    title: "Homegoing",
    photo: homegoing,
    author: "Yaa Gyasi",
    genres: ["Novel", "Historical Fiction"],
  },
  {
    title: "The City & the City",
    photo: theCityAndTheCity,
    author: "China Miéville",
    genres: ["Science Fiction", "Mystery", "Weird Fiction"],
  },
  {
    title: "Rework",
    photo: rework,
    author: "David Heinemeier Hansson and Jason Fried",
    genres: ["Self-help"],
  }
]

function BookPhoto({ photo, title, author, genres = [] }) {
  const [facingFront, setFacingFront] = useState(true);
  const toggleCardFace = () => setFacingFront(prev => !prev);

  return (
    <div className="scene" onClick={toggleCardFace}>
      <div className={cx("card", { "is-flipped": !facingFront })}>
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
          <div className="book-info">
            <p className="book-title">{title}</p>
            <p className="book-author">{author}</p>
            <div className="genres">
                {genres.map(genre => (
                  <span key={genre} className="genre-pill">{genre}</span>
                ))}
                </div>
          </div>
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
        {books.map(({ title, photo, author, genres }) => {
          return (
            <BookPhoto key={title} photo={photo} title={title} author={author} genres={genres} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
