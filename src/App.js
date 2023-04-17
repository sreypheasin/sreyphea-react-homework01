import './App.css';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <Products/>
        <Feedback/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
