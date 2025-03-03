import { useState } from "react";
import { wordContext } from "../context/WordContext";
import { useContext } from "react";
import { useEffect } from "react";
import PlayGame from "./PlayGame";


function playGameContainer(){


 const { wordList,word,hint } = useContext(wordContext);
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
  looser=" You Lost";
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
   
 });




    return(<>
    <PlayGame word={word}
      guessedLetters={guessedLetters}
      handleLetterClick={handleLetterClick} 
      hint={hint} 
      looser={looser}
      output={output}
      step={step}
     />
    
    </>
)
}


export default playGameContainer