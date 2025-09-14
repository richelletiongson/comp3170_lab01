
import './index.css'
import Book from './Book'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="header-title">Book Catalog</h1>
      </header>
      
      <main className="main-content">
        <button className="new"></button>
        <Book/>
        <Book/>
      </main>
      
      <footer className="footer">
        <p className="footer-text">© Richelle Margarette Tiongson, 2025</p>
      </footer>
    </div>
  )
}

export default App
