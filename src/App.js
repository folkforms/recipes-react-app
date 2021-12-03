import './App.css';
import recipes from './recipes';
import List from './components/List/List';
import Groups from './components/Groups/Groups';

function App() {
  return (
    <>
      <List recipes={recipes} />
      <Groups recipes={recipes} />
    </>
  );
}

export default App;
