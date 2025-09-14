import './index.css'
import Book from './Book'
import { useState, useEffect } from 'react'

function App() {
  const [bookData, setBookData] = useState(null);
  const [bookData2, setBookData2] = useState(null);

  // Fetch book data when component mounts
  useEffect(() => {
    // Async function to fetch first book
    const getFirstBook = async () => {
      try {
        // response is the promise object that get returned when we ask for the book data.
        // eventually, the object will update with either: the data we asked for, or an error.
        const response = await fetch('https://api.itbook.store/1.0/books/9781642002270');
        
        // bookData is the data is the data we are pulling off of the object, and then formatting with JSON
        const bookData = await response.json();
        console.log(JSON.stringify(bookData));
        
        setBookData(bookData);
      } catch (error) {
        console.log("the error is " + error);
      }
    };

    // Async function to fetch second book
    const getSecondBook = async () => {
      try {
        // response is the promise object that get returned when we ask for the book data.
        // eventually, the object will update with either: the data we asked for, or an error.
        const response = await fetch('https://api.itbook.store/1.0/books/9781484241844');
        
        // bookData is the data is the data we are pulling off of the object, and then formatting with JSON
        const bookData = await response.json();
        console.log(JSON.stringify(bookData));
        
        setBookData2(bookData);
      } catch (error) {
        console.log("the error is " + error);
      }
    };

    getFirstBook();
    getSecondBook();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1 className="header-title">Book Catalog</h1>
      </header>
      
      <main className="main-content">
        <div className="content">
          <button className="new">New</button>
          
          {bookData && (
            <Book 
              image={bookData.image}
              title={bookData.title}
              author={bookData.authors}
              url={bookData.url}
            />
          )}
          
          {bookData2 && (
            <Book 
              image={bookData2.image}
              title={bookData2.title}
              author={bookData2.authors}
              url={bookData2.url}
            />
          )}
        </div>
      </main>
      
      <footer className="footer">
        <p className="footer-text">© Richelle Margarette Tiongson, 2025</p>
      </footer>
    </div>
  );
}

export default App;
