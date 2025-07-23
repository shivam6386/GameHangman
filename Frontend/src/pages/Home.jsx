import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect } from 'react';
import {useContext } from "react";
import { wordContext } from '../context/WordContext.js'


function Home (){

   
    
      const {setWordList,setWord,setHint} = useContext(wordContext)
    async function fetchWords(){
        const response= await fetch("http://localhost:3000/words")
        const data=await response.json()
        //console.log(data);
        setWordList([...data]);
        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(data[randomIndex]);

        setWord(data[randomIndex].wordValue);
        setHint(data[randomIndex].hint);
     
     }

    useEffect(()=>{
      fetchWords();
        
    },[]);

                
                
     return(
        <>
        <div className="flex items-center justify-center h-screen"
        style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/blue-paper-background_921860-12975.jpg?w=1060')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
          
     

       <div className="m-2">
       <Link to= "/Start" >
       <Button 
       text="Multiplayer Game"
       styleType="warning">
        </Button>
       </Link>
       </div>
       </div>
       
       
        </>
     )

     
}
export default Home;