import { useLocation } from "react-router-dom";

function PlayGame(){

  const {state}=useLocation();
    return(
      <div>Playgame {state.wordSelected} </div>

    )
}

export default PlayGame;