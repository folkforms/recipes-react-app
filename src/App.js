import logo from "./logo.svg";
import "./App.css";
import recipes from "./recipes";

console.log(`Found ${recipes.length} recipes`);
recipes.forEach(r => console.log(r.recipe));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Found {recipes.length} recipes
        </a>
      </header>
    </div>
  );
}

export default App;
