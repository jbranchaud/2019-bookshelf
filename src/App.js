import React, { useState } from 'react';
import './App.css';

import behindTheBeautifulForevers from "./images/book-photos/behind-the-beautiful-forevers.jpeg";
import homegoing from "./images/book-photos/homegoing.jpeg";
import theCityAndTheCity from "./images/book-photos/the-city-and-the-city.jpeg";
import rework from "./images/book-photos/rework.jpeg";
import theftByFinding from "./images/book-photos/theft-by-finding.jpeg";
import futureHomeOfTheLivingGod from "./images/book-photos/future-home-of-the-living-god.jpeg";
import deepWork from "./images/book-photos/deep-work.jpeg";
import theRoundHouse from "./images/book-photos/the-round-house.jpeg";
import secretsOfConsulting from "./images/book-photos/secrets-of-consulting.jpeg";
import oryxAndCrake from "./images/book-photos/oryx-and-crake.jpeg";
import fledgling from "./images/book-photos/fledgling.jpeg";
import bookOfRumi from "./images/book-photos/book-of-rumi.jpeg";
import moneyball from "./images/book-photos/moneyball.jpeg";
import loganSquare from "./images/book-photos/logan-square.jpeg";
import squirrelSeeksChipmunk from "./images/book-photos/squirrel-seeks-chipmunk.jpeg";
import liarsPoker from "./images/book-photos/liars-poker.jpeg";
import escapeFromFreedom from "./images/book-photos/escape-from-freedom.jpeg";
import readyPlayerOne from "./images/book-photos/ready-player-one.jpeg";
import theFifthSeason from "./images/book-photos/the-fifth-season.jpeg";
import strikingToSurvive from "./images/book-photos/striking-to-survive.jpeg";
import watchingBaseballSmarter from "./images/book-photos/watching-baseball-smarter.jpeg";
import calypso from "./images/book-photos/calypso.jpeg";
import theHobbit from "./images/book-photos/the-hobbit.jpeg";
import theObeliskGate from "./images/book-photos/the-obelisk-gate.jpeg";
import theStoneSky from "./images/book-photos/the-stone-sky.jpeg";
import parableOfTheSower from "./images/book-photos/parable-of-the-sower.jpeg";
import theGift from "./images/book-photos/the-gift.jpeg";
import dreyersEnglish from "./images/book-photos/dreyers-english.jpeg";
import flashBoys from "./images/book-photos/flash-boys.jpeg";
import southernInsurgency from "./images/book-photos/southern-insurgency.jpeg";
import theAntelopeWife from "./images/book-photos/the-antelope-wife.jpeg";
import badass from "./images/book-photos/badass.jpeg";

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
    publicationDate: "February 7, 2012",
    pageCount: 256,
  },
  {
    title: "Homegoing",
    photo: homegoing,
    author: "Yaa Gyasi",
    genres: ["Novel", "Historical Fiction"],
    publicationDate: "June 7, 2016",
    pageCount: 347,
  },
  {
    title: "The City & the City",
    photo: theCityAndTheCity,
    author: "China Miéville",
    genres: ["Science Fiction", "Mystery", "Weird Fiction"],
    publicationDate: "April 29, 2009",
    pageCount: 312,
  },
  {
    title: "Rework",
    photo: rework,
    author: "David Heinemeier Hansson and Jason Fried",
    genres: ["Self-help"],
    publicationDate: "March 9, 2010",
    pageCount: 279,
  },
  {
    title: "Theft by Finding: Diaries (1977–2002)",
    shortTitle: "Theft by Finding",
    photo: theftByFinding,
    author: "David Sedaris",
    genres: ["Humour", "Autobiography", "Diary"],
    publicationDate: "May 30, 2017",
    pageCount: 551,
  },
  {
    title: "Future Home of the Living God",
    photo: futureHomeOfTheLivingGod,
    author: "Louise Erdrich",
    genres: ["Novel", "Dystopian Fiction", "Political fiction"],
    publicationDate: "November 14, 2017",
    pageCount: 293,
  },
  {
    title: "Deep Work",
    photo: deepWork,
    author: "Cal Newport",
    genres: ["Self-help"],
    publicationDate: "January 5, 2016",
    pageCount: 250,
  },
  {
    title: "The Round House",
    photo: theRoundHouse,
    author: "Louise Erdrich",
    genres: ["Fiction", "Suspense"],
    publicationDate: "October 2, 2012",
    pageCount: 336,
  },
  {
    title: "The Secrets of Consulting: A Guide to Giving and Getting Advice Successfully",
    shortTitle: "The Secrets of Consulting",
    photo: secretsOfConsulting,
    author: "Gerald M. Weinberg",
    genres: ["Business"],
    publicationDate: "January 1, 1985",
    pageCount: 228,
  },
  {
    title: "Oryx and Crake",
    photo: oryxAndCrake,
    author: "Margaret Atwood",
    genres: ["Science Fiction", "Dystopian Fiction"],
    publicationDate: "March 30, 2004",
    pageCount: 389,
  },
  {
    title: "Fledgling",
    photo: fledgling,
    author: "Octavia E. Butler",
    genres: ["Novel", "Science Fiction", "Horror fiction"],
    publicationDate: "September 8, 2005",
    pageCount: 352,
  },
  {
    title: "The Book of Rumi: 105 Stories and Fables that Illumine, Delight, and Inform",
    shortTitle: "The Book of Rumi",
    photo: bookOfRumi,
    author: "Rumi, Mafi Maryam",
    genres: ["Poetry", "Short stories"],
    publicationDate: "November 1, 2018",
    pageCount: 206,
  },
  {
    title: "Moneyball: The Art of Winning an Unfair Game",
    shortTitle: "Moneyball",
    photo: moneyball,
    author: "Michael Lewis",
    genres: ["Non-fiction"],
    publicationDate: "March 17, 2004",
    pageCount: 288,
  },
  {
    title: "Logan Square (Images of America)",
    shortTitle: "Logan Square",
    photo: loganSquare,
    author: "Andrew Schneider, Ward Miller, Jacob Kaplan, and Daniel Pogorzelski",
    genres: ["Non-fiction"],
    publicationDate: "June 11, 2018",
    pageCount: 128,
  },
  {
    title: "Squirrel Seeks Chipmunk",
    photo: squirrelSeeksChipmunk,
    author: "David Sedaris",
    genres: ["Essay", "Fable", "Humour"],
    publicationDate: "September 28, 2010",
    pageCount: 112,
  },
  {
    title: "Liar's Poker",
    photo: liarsPoker,
    author: "Michael Lewis",
    genres: ["Biography"],
    publicationDate: "October 17, 1989",
    pageCount: 256,
  },
  {
    title: "Escape from Freedom",
    photo: escapeFromFreedom,
    author: "Erich Fromm",
    genres: ["Social Psychology"],
    publicationDate: "1941",
    pageCount: 257,
  },
  {
    title: "Ready Player One",
    photo: readyPlayerOne,
    author: "Ernest Cline",
    genres: ["Novel", "Science Fiction", "Dystopian Fiction"],
    publicationDate: "August 16, 2011",
    pageCount: 386,
  },
  {
    title: "The Fifth Season",
    photo: theFifthSeason,
    author: "N. K. Jemisin",
    genres: ["Novel", "Fantasy", "Dystopian Fiction"],
    publicationDate: "August 4, 2015",
    pageCount: 512,
  },
  {
    title: "Striking to Survive: Workers’ Resistance to Factory Relocations in China",
    shortTitle: "Striking to Survive",
    photo: strikingToSurvive,
    author: "Fan Shigang",
    genres: ["Non-fiction"],
    publicationDate: "May 1, 2018",
    pageCount: 200,
  },

  {
    title: "Watching Baseball Smarter: A Professional Fan's Guide for Beginners, Semi-Experts, and Deeply Serious Geeks",
    shortTitle: "Watching Baseball Smarter",
    photo: watchingBaseballSmarter,
    author: "Zack Hample",
    genres: ["Non-fiction", "Sports"],
    publicationDate: "March 27, 2007",
    pageCount: 272,
  },
  {
    title: "Calypso",
    photo: calypso,
    author: "David Sedaris",
    genres: ["Humour"],
    publicationDate: "May 29, 2018",
    pageCount: 261,
  },
  {
    title: "The Hobbit",
    photo: theHobbit,
    author: "J. R. R. Tolkien",
    genres: ["Novel", "Fantasy"],
    publicationDate: "September 21, 1937",
    pageCount: 310,
  },
  {
    title: "The Obelisk Gate",
    photo: theObeliskGate,
    author: "N. K. Jemisin",
    genres: ["Novel", "Fantasy", "Dystopian Fiction"],
    publicationDate: "August 16, 2016",
    pageCount: 433,
  },

  {
    title: "The Stone Sky",
    photo: theStoneSky,
    author: "N. K. Jemisin",
    genres: ["Novel", "Fantasy", "Dystopian Fiction"],
    publicationDate: "August 15, 2017",
    pageCount: 464,
  },
  {
    title: "Parable of the Sower",
    photo: parableOfTheSower,
    author: "Octavia E. Butler",
    genres: ["Novel", "Science Fiction", "Dystopian Fiction"],
    publicationDate: "1993",
    pageCount: 345,
  },
  {
    title: "The Gift",
    photo: theGift,
    author: "Hafiz and Daniel Ladinsky",
    genres: ["Poetry"],
    publicationDate: "August 1, 1999",
    pageCount: 333,
  },
  {
    title: "Dreyer's English",
    photo: dreyersEnglish,
    author: "Benjamin Dreyer",
    genres: ["Style guide"],
    publicationDate: "January 29, 2019",
    pageCount: 433,
  },

  {
    title: "Flash Boys: A Wall Street Revolt",
      shortTitle: "Flash Boys",
    photo: flashBoys,
    author: "Michael Lewis",
    genres: ["Non-fiction"],
    publicationDate: "March 31, 2014",
    pageCount: 288,
  },
  {
    title: "Southern Insurgency: The Coming of the Global Working Class",
    shortTitle: "Southern Insurgency",
    photo: southernInsurgency,
    author: "Immanuel Ness",
    genres: ["Non-fiction", "Politics"],
    publicationDate: "November 15, 2015",
    pageCount: 224,
  },
  {
    title: "The Antelope Wife",
    photo: theAntelopeWife,
    author: "Louise Erdrich",
    genres: ["Fiction", "Fantasy", "Magical Realism"],
    publicationDate: "October 1998",
    pageCount: 256,
  },
  {
    title: "Badass: Making Users Awesome",
    photo: badass,
    author: "Kathy Sierra",
    genres: ["Business", "Design"],
    publicationDate: "February 23, 2015",
    pageCount: 294,
  },
]

function BookPhoto({ photo, title, shortTitle, author, genres = [], publicationDate, pageCount }) {
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
            <p className="book-title">{shortTitle || title}</p>
            <p className="book-author">{author}</p>
          </div>
        </div>
        <div className="card-face book card-face-back">
          <img className="back-image" src={photo} alt={title} />
          <div className="book-info">
            <p className="book-title">{title}</p>
            <p className="book-author">{author}</p>
            <div className="genres">
              {genres.map(genre => (
                <span key={genre} className="genre-pill">{genre}</span>
              ))}
            </div>
            <p>Published: {publicationDate}</p>
            <p>Pages: {pageCount}</p>
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
        <div className="header-content">
          <h1 className="header-content-headline">Bookshelf</h1>
          <h3 className="header-content-tagline">2019 Edition</h3>
          <p className="header-description">Hey, I'm <a href="https://joshbranchaud.com">Josh Branchaud</a>. Here is what I read over the course of 2019.</p>
        </div>
      </header>
      <div className="books-container">
        {books.map(({ title, shortTitle, photo, author, genres, publicationDate, pageCount }) => {
          return (
            <BookPhoto key={title} shortTitle={shortTitle} photo={photo} title={title} author={author} genres={genres} publicationDate={publicationDate} pageCount={pageCount} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
