
import { Link } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";

import HangMan from "../components/HangMan/HangMan";


function PlayGame({word,guessedLetters,handleLetterClick,hint,looser,output,step
}){
 
  /*const { wordList,word,hint } = useContext(wordContext);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step,setStep]=useState(0);
  let looser=null;
  function handleLetterClick(letter){
   if(word.toUpperCase().includes(letter)){
      console.log('Correct'); 
      }
   else{
       console.log('wrong');
       setStep(step+1);
   }
  setGuessedLetters([...guessedLetters, letter]);

  
  
}


if (step>6){
  looser="looser";
  console.log("YOU LOST")


}

  console.log(word);
  console.log("Guessed letter",hint);

     const [length,setLength]=useState(0);
     const [output, setOutput] = useState(null);

 useEffect(() => {
   const original = word;
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
   
 });*/



  return(
    <>
 

  

{hint}
  
   

    { word&&(

      <>
      <Maskedtext text={word} guessedLetters={guessedLetters} />
      
       <div>
            <LetterButtons text={word} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
       </div>
       <Link to="/">Home</Link>
       </>
    )}
   <HangMan  step={step}/>



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
 

    </>
      

    )
      
      
}

export default PlayGame;