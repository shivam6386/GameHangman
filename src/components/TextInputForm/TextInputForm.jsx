import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
 function TextInputForm({handleFormSubmit,handleTextInputChange}){
    return(
        <form onSubmit={handleFormSubmit}>
            <TextInput
     label={"Enter some text"}
     placeholder={"Enter some text here"}
     
     onChangeHandler={handleTextInputChange}
     />
     <div>
     <Button 
     styleType="success" 
     text="show/Hide"
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