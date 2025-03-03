
import Maskedtext from "../MaskedText/MaskedText";
import LetterButtons from "../LetterButtons/LetterButtons";

import HangMan from "../HangMan/HangMan";
import { Link } from "react-router";

function Multiplayer({stateWordSelected,output,handleLetterClick,guessedLetters,steps,looser}){


return(
        
     <div className="flex flex-col items-center justify-center h-screen bg-emerald-200">
        
      
        <div
        className="text-4xl font-bold text-center text-gray-800 mb-4">
        <Maskedtext text={stateWordSelected} guessedLetters={guessedLetters}/>
        </div>


        <div
        className="flex flex-wrap justify-center gap-2 mt-4"
        
        >
            <LetterButtons text={stateWordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
       </div>

     <HangMan  step={steps}/>


    
     {output && (
  <div className="text-4xl font-extrabold text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-4 rounded-2xl shadow-lg animate-pulse mt-4">
     {output} 👍
     <br/>
     <Link to="/start"> Start New GAME</Link>
  </div>
)}

{looser && (
  <div className="text-4xl font-extrabold text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-4 rounded-2xl shadow-lg animate-pulse mt-4">
     {looser} 
     <Link to="/start"> Start New GAME</Link>
  </div>
)}
 </div>)
}


export default Multiplayer