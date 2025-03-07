import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
 function TextInputForm({inputType,handleFormSubmit,handleTextInputChange,handleShowHideCheck}){
    return(
        <form className="flex flex-col items-center justify-center min-h-screen space-y-4" 
        onSubmit={handleFormSubmit}>
          <div>

          <TextInput
         type={inputType}
         label={"Enter some text"}
          placeholder={"Enter some text here"}
     
          onChangeHandler={handleTextInputChange}
     />

          </div>
       
     <div className='className="flex space-x-4'>
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