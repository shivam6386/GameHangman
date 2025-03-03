import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import { Link } from 'react-router-dom';
 function TextInputForm({inputType,handleFormSubmit,handleTextInputChange,handleShowHideCheck}){
    return(
      <div>
        
       

        <form className="flex flex-col items-center justify-center min-h-screen space-y-4" 
        onSubmit={handleFormSubmit}>
          <div>


          <h1 className="text-4xl font-bold  text-white ">
          Enter some text
        </h1>

          <TextInput 
         type={inputType}
        
          placeholder={"Enter some text here"}
     
          onChangeHandler={handleTextInputChange}
     />

          </div>
       
     <div className='flex space-x-4'>
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
    <Link
          to="/"
          className="block text-center text-white  text-4xl font-bold underline mt-8 underline"
        >
          Home
        </Link>

        </form>
    
        </div>

   
    )
}
export default TextInputForm;