
import Maskedtext from "../MaskedText/MaskedText";
import LetterButtons from "../LetterButtons/LetterButtons";

import HangMan from "../HangMan/HangMan";
import { Link } from "react-router";

function Multiplayer({stateWordSelected,output,handleLetterClick,guessedLetters,steps,looser}){
  /*  const {state}=useLocation();
    console.log(state);
    let looser=null

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step,setStep]=useState(0);
    const [length,setLength]=useState(0);
    const [output, setOutput] = useState(null);


   
    
      function handleLetterClick(letter){
        if(state.wordSelected.toUpperCase().includes(letter)){
           console.log('Correct'); 
           
          
        }
        else{
            console.log('wrong');
            setStep(step+1);
        }
       
       
        setGuessedLetters([...guessedLetters, letter]);
        setLength(length+1);

        }



      if (step>6){
        looser="looser";
        console.log("YOU LOST")
        
    }   
useEffect(() => {
  const original = state.wordSelected;
  const toUpperCaseword = original.toUpperCase();
  const originalwords = new Set(toUpperCaseword);
  console.log("original words", originalwords);

  const guessedLett = new Set(
    guessedLetters.filter(letter => originalwords.has(letter))
  );
  console.log("filtered guessedLett", guessedLett);

  const areEqual = guessedLett.size === originalwords.size;
  console.log("Are these equal", areEqual);
  if(areEqual){
    setOutput("🎉 Winner! 🎉");
  }
  console.log("output",output);
  
}, [guessedLetters, state.wordSelected]);
*/

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