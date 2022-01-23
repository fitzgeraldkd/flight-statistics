import { useState } from 'react';
import rawAirlineStats from '../data/airlines.json';
// import './App.css';
import { processStatistics } from '../utils/databaseHelpers';

function App() {
  const [airlineStats, setAirlineStats] = useState(processStatistics(rawAirlineStats));
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
