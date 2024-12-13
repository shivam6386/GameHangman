import { useLocation } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText";

import LetterButtons from "../components/LetterButtons/LetterButtons";
 import { useState } from "react";

function PlayGame(){

  const {state}=useLocation();
  const [guessedLetters, setGuessedLetters] = useState([]);

  function handleLetterClick(letter){
    setGuessedLetters([...guessedLetters, letter]);
  }
  
    return(<>
   
    <Maskedtext text={state.wordSelected} guessedLetters={guessedLetters} />
    <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
    </>
      
    )
}

export default PlayGame;