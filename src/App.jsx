
import './App.css'

import TextInputForm from './components/TextInputForm/TextInputForm'
import InputTextInputFormContainer from './components/TextInputForm/TextInputFormContainer'
function App() {
  

  return (
    <>
    {/*<Button text="click1" type="button" onclickhandler={()=>console.log("clicked")}/>
    <Button text="click2"  styleType="success"onclickhandler={()=>console.log("clicked")}/>
    <Button text="click3"  styleType="warning" onclickhandler={()=>console.log("clicked")}/>
     <TextInput
     label={"Enter some text"}
     placeholder={"Enter some text here"}
     value={""}
     onChangeHandler={(e)=>console.log(e.target.value)}
     />*/}
     <InputTextInputFormContainer/>
    
     
    </> 
  )
}

export default App
