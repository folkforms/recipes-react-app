import "./App.css";
import recipes from "./recipes";
import List from "./components/List";

function App() {
  return (
    <List recipes={recipes} />
  );
}

export default App;
