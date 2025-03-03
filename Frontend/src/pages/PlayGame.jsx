
import { Link } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/HangMan/HangMan";

function PlayGame({ word, guessedLetters, handleLetterClick, hint, looser, output, step }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white ">
      {/* Hint Section */}
      {hint && (
        <div className="w-full max-w-3xl text-4xl font-extrabold text-yellow-300 text-center">
          <span>Hint: {hint}</span>
        </div>
      )}

      {/* Game Word and Letter Buttons */}
      {word && (
        <>
          <div className="flex flex-row justify-center items-center space-x-3">
            <Maskedtext text={word} guessedLetters={guessedLetters} />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <LetterButtons text={word} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
          </div>

         
        </>
      )}

      {/* Hangman Image */}
      <HangMan className="flex flex-wrap justify-center gap-4 mx-4
       mt-4" step={step} />

      {/* Game Win or Lose Message Below */}
      {(output || looser) && (
        <div className="text-4xl font-extrabold text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-600  rounded-2xl shadow-lg animate-pulse text-center mt-2">
          {output || looser}
          <br />
          <Link to="/" className="text-blue-200 hover:underline">
            Start New GAME
          </Link>
        </div>
      )}

<Link
            to="/"
            className="mt-4 text-blue-500 hover:text-blue-300 font-bold underline"
          >
            Home
          </Link>


    </div>
  );
}

export default PlayGame;
