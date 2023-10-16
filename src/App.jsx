import book from "./img/book.png";

// Components
import Dictionary from "./components/Dictionary";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="my-container">
        <header>
          <h1> Dictionary </h1>
          <img src={book} alt="book" width={150} className="mb-3" />
        </header>
        <Dictionary defaultKeyword="Dictionary" />
      </div>
      <footer>
        <small>Coded by Ana Guerreiro 👩🏽‍💻</small>
      </footer>
    </div>
  );
}

export default App;
