import { useLocation } from "react-router-dom";
import MaskedText from '../components/MaskedText/MaskedText'
function PlayGame(){

  const {state}=useLocation();


  
    return(
      <>
      
       <div>Playgame {state.wordSelected}</div>
       <MaskedText text={state.wordSelected} guessedLetters={['H','E']} />
      
      </>
    )
      
      
}

export default PlayGame;