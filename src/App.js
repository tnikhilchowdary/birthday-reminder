import './App.css';
import Data from './Data';
import { useState } from 'react';
import List from './List';

function App() {
  const [people, setPeople] = useState(Data);

  return (
    <div className="App">
      <div className="container">
        <h2>{people.length} birthdays today</h2>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear all</button>
      </div>
    </div>
  );
}

export default App;
