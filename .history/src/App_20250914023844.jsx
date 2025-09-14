import './index.css'
import Book from './Book'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="header-title">Book Catalog</h1>
      </header>
      
      <main className="main-content">
        <div className="content">
          <button className="new">New</button>
          
          <Book 
            image="https://api.itbook.store/1.0/books/9781642002270"
            title=""
            author=""
            url=""
          />
          
          <Book 
            image="https://api.itbook.store/1.0/books/9781484241844"
            title=""
            author=""
            url=""
          />
        </div>
      </main>
      
      <footer className="footer">
        <p className="footer-text">© Richelle Margarette Tiongson, 2025</p>
      </footer>
    </div>
  );
}

export default App;
