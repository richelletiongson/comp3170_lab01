import './index.css'
import Book from './Book'
import { useState, useEffect } from 'react'

function App() {
  const [bookData, setBookData] = useState(null);
  const [bookData2, setBookData2] = useState(null);

  // Fetch book data when component mounts
  useEffect(() => {
    // Fetch first book
    fetch('https://api.itbook.store/1.0/books/9781642002270')
      .then(response => response.json())
      .then(data => setBookData(data))
      .catch(error => console.error('Error fetching first book:', error));

    // Fetch second book
    fetch('https://api.itbook.store/1.0/books/9781484241844')
      .then(response => response.json())
      .then(data => setBookData2(data))
      .catch(error => console.error('Error fetching second book:', error));
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
