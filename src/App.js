import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Million from './MillionTreeChallanges/Million';
import School from './School/School';

function App() {
  return (
    <div className="App">
      <School />

      <Million />

    </div>
  );
}

export default App;
