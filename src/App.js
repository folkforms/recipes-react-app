import './App.css';
import { useState } from 'react';
import recipes from './recipes-full';
import List from './components/List/List';
import Groups from './components/Groups/Groups';

function App() {

  const [pageNum, setPageNum] = useState(0);

  const createButton = (title, index) => (
    <button className="button" onClick={() => setPageNum(index)}>{title}</button>
  );

  const buttons = (
    <span>
      {createButton("List", 0)}
      {createButton("Groups", 1)}
      {createButton("Weekend", 2)}
    </span>
  );

  return (
    <div className="app">
      {pageNum == 0 ? <List recipes={recipes} buttons={buttons} /> : null}
      {pageNum == 1 ? <Groups recipes={recipes} buttons={buttons} /> : null}
      {pageNum == 2 ? <Groups recipes={recipes} showOnlyTheseTags={["cook-for-the-week", "weekend-lunch"]} buttons={buttons} /> : null}
    </div>
  );
}

export default App;
