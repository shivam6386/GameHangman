import { Link } from "react-router-dom";
import InputTextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";

function StartGame() {
  return (
    <div className="h-full flex items-center justify-center bg-blue-900 text-black">
      <div className="bg-blue-700  rounded-xl shadow-lg w-full max-w-md">
        
        <InputTextInputFormContainer />
        
      </div>
    </div>
  );
}

export default StartGame;
