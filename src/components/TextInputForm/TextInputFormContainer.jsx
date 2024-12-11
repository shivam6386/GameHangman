import { useState } from "react";
import TextInputForm from "./TextInputForm";

function InputTextInputFormContainer(){

       const[inputType,setInputType]=useState("password");

        function handleFormSubmit(event){
          event.preventDefault();
          console.log("for submitted");
        }
        function handleTextInputChange(event){
          console.log("Text input changed");
          console.log(event.target.value);
        }
        function handleShowHideCheck(){
          console.log("text input changed")
          if(inputType==="password"){
            setInputType("text")
          }
          else{
            setInputType("password")
          }
           
        }
         

return(
    <TextInputForm
    inputType={inputType}
    handleFormSubmit={handleFormSubmit}
    handleTextInputChange={handleTextInputChange}
    handleShowHideCheck={handleShowHideCheck}
    />
)

}
export default InputTextInputFormContainer;
