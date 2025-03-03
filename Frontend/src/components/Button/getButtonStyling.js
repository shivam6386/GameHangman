

function getButtonStyling(styleType){
    if(styleType==="primary"){
        return "bg-sky-400";
    }
    else if(styleType==="secondary")
        return "bg-gray-500"
     else if(styleType==="success")
        return "bg-green-500"
      else if(styleType==="warning")
        return "bg-yellow-500"

}
export default getButtonStyling;
