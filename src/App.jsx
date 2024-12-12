
import { Route, Routes } from 'react-router-dom'
import './App.css'

import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer'
import Home from './pages/Home'
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
    <Routes>
  
      <Route path='/start'      element={<StartGame/>} />
      < Route path='/play'  element={<PlayGame/>}/>
      <Route path='/'      element={<Home/>}/>
     
    </Routes>
    
     
    </> 
  )
}

export default App
