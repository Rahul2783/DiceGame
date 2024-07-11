import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import PlayGame from './Components/PlayGame';




function App() {
  const[isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () =>{
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
     {isGameStarted ? <PlayGame /> : <Home toggle={toggleGamePlay} />}
    </>
  )
}

export default App
