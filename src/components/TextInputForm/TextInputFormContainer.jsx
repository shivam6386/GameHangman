import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function InputTextInputFormContainer(){

       const[inputType,setInputType]=useState("password");

       const[value,setValue]=useState("")

       const navigate =useNavigate();//useNavigate is a hook that returns a navigate function

        function handleFormSubmit(event){
          event.preventDefault();
          console.log("for submitted",value);
          if(value){
            // if we something in value tjan we want to go to the play page

          navigate("/play",{state:{wordSelected:value}});
          
          }

        }

         
        function handleTextInputChange(event){
          console.log("Text input changed");
          console.log(event.target.value);
          setValue(event.target.value)
        }
        function handleShowHideCheck(){
          console.log("show and hide")
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
);

}

export default InputTextInputFormContainer;
