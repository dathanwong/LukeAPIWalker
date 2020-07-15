import React, {useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Details from './Components/Details';

function App() {

  const [element, setElement] = useState({});

  return (
    <div className="App">
      <SearchBar setElement={setElement}/>
      <Details element={element}/>
    </div>
  );
}

export default App;
