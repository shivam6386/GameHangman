import TextInputForm from "./TextInputForm";

function InputTextInputFormContainer(){
    
        function handleFormSubmit(event){
          event.preventDefault();
          console.log("for submitted");
        }
        function handleTextInputChange(event){
          console.log("Text input changed");
          console.log(event.target.value);
        }

return(
    <TextInputForm
    handleFormSubmit={handleFormSubmit}
    handleTextInputChange={handleTextInputChange}
    />
)

}
export default InputTextInputFormContainer;
