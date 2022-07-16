import './App.css';
import { useState } from 'react';
import recipes from './recipes-full';
import List from './components/List/List';
import Groups from './components/Groups/Groups';

function App() {

  const [showList, setShowList] = useState(true);

  const createToggleButton = newValue => (
    <button className="button" onClick={() => setShowList(newValue)}>{showList ? "Show Groups" : "Show List"}</button>
  );

  return (
    <div className="app">
      {showList
        ? <List recipes={recipes} ToggleButton={createToggleButton(false)} />
        : <Groups recipes={recipes} ToggleButton={createToggleButton(true)} />
      }
    </div>
  );
}

export default App;
