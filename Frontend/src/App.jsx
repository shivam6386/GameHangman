
import { Route, Routes } from 'react-router-dom'
import './App.css'

import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'

import Home from './pages/Home'
import { wordContext } from './context/WordContext.js'
import { useState } from 'react'

import MultiPlayerContainer from './components/MultiPlayer/MultiPlayerContainer.jsx'
import PlayGameContainer from './pages/PlayGameContainer.jsx'

function App() {
    const [wordList,setWordList]=useState([]);
    const[word,setWord]=useState('');
    const[hint,setHint]=useState('');
1
  return (
    <>
   
     <wordContext.Provider value={{wordList,setWordList,word,setWord,
     hint,setHint

     }}>

      <Routes>   
  
      <Route path='/start'      element={<StartGame/>} />
      < Route path='/PlayGameContainer'  element={<PlayGameContainer/>}/>
      <Route path='/MultiplayerContainer' element={<MultiPlayerContainer/>} />

      <Route path='/'      element={<Home/>}/>



     

      

    </Routes>
    </wordContext.Provider>
    
     
    </> 
  )
}

export default App
