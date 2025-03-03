import Multiplayer from "./MultiPlayer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function MultiPlayerContainer(){
    
    const {state}=useLocation();
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
        looser="YOU LOST";
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

    
    
    
    return(<>


    <Multiplayer  stateWordSelected={state.wordSelected} guessedLetters={guessedLetters} handleLetterClick={handleLetterClick} looser={looser} output={output} steps={step}/>
    </>)
}

export default MultiPlayerContainer;