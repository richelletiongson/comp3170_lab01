import './index.css'
import Book from './Book'
import { useState, useEffect } from 'react'

function App() {
  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Async function to fetch book data from the API
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

  // Fetch book data when component mounts
  useEffect(() => {
    fetchBookData();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1 className="header-title">Book Catalog</h1>
      </header>
      
      <main className="main-content">
        <div className="content">
          <button className="new">New</button>
          
          {loading && <div>Loading book data...</div>}
          {error && <div>Error loading book: {error}</div>}
          
          {bookData && (
            <Book 
              image={bookData.image}
              title={bookData.title}
              author={bookData.authors}
              url={bookData.url}
            />
          )}
          
          <Book src="" author=""/>
        </div>
      </main>
      
      <footer className="footer">
        <p className="footer-text">© Richelle Margarette Tiongson, 2025</p>
      </footer>
    </div>
  );
}

export default App;
