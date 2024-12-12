import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
 function TextInputForm({inputType,handleFormSubmit,handleTextInputChange,handleShowHideCheck}){
    return(
        <form onSubmit={handleFormSubmit}>
          <div>

          <TextInput
        type={inputType}
        label={"Enter some text"}
          placeholder={"Enter some text here"}
     
          onChangeHandler={handleTextInputChange}
     />

          </div>
       
     <div>
        <Button 
        type="button"
        styleType="success" 
        text={inputType==="password"?"show":"Hide"}
        onClickHandler={handleShowHideCheck} 
     
     />

      
     </div>
    
    <Button 
      type="submit"
      styleType="primary"
      text="Submit"
     
      />
        </form>
    
      

   
    )
}
export default TextInputForm;