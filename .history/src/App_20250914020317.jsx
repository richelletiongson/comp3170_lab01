import './index.css'
import Book from './Book'
import { useState, useEffect } from 'react'

function App() {
  const [bookData, setBookData] = useState(null);
  const [bookData2, setBookData2] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [error, setError] = useState(null);
  const [error2, setError2] = useState(null);

  // Async function to fetch first book data from the API
  const fetchBookData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.itbook.store/1.0/books/9781642002270');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setBookData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching book data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Async function to fetch second book data from the API
  const fetchBookData2 = async () => {
    try {
      setLoading2(true);
      const response = await fetch('https://api.itbook.store/1.0/books/9781484241844');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setBookData2(data);
      setError2(null);
    } catch (err) {
      setError2(err.message);
      console.error('Error fetching second book data:', err);
    } finally {
      setLoading2(false);
    }
  };

  // Fetch book data when component mounts
  useEffect(() => {
    fetchBookData();
    fetchBookData2();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1 className="header-title">Book Catalog</h1>
      </header>
      
      <main className="main-content">
        <div className="content">
          <button className="new">New</button>
          
          {loading && <div>Loading first book...</div>}
          {error && <div>Error loading first book: {error}</div>}
          
          {bookData && (
            <Book 
              image={bookData.image}
              title={bookData.title}
              author={bookData.authors}
              url={bookData.url}
            />
          )}
          
          {loading2 && <div>Loading second book...</div>}
          {error2 && <div>Error loading second book: {error2}</div>}
          
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
