import book from "./img/book.png";

// Components
import Dictionary from "./components/dictionary";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1> Dictionary </h1>
          <img src={book} alt="book" width={200} />
        </header>
        <Dictionary />
      </div>
      <footer>
        <small>Coded by Ana Guerreiro 👩🏽‍💻</small>
      </footer>
    </div>
  );
}

export default App;
