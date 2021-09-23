import { useEffect, useState } from "react";
import Characters from "./components/Characters";
import Header from "./components/Header";
import "./assets/styles/App.scss";
import "./assets/styles/Header.css";

function App() {
  const [character, setCharacter] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacter(data.results));
  }, []);
  return (
    <div className="app">
      <Header title="Rick and Morty" />
      <div className="background">
        <input
          type="text"
          placeholder="Search of a character"
          className="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Characters character={character} search={search} />
      </div>
    </div>
  );
}

export default App;
