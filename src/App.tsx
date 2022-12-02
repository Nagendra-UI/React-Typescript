import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Loader from './components/loader';
import Board from './containers/Board';

function App() {
  const [counter, setCounter] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {isLoading && <Loader />}
        {!isLoading && <Board />}
      </header>
    </div>
  );
}

export default App;
