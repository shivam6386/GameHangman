import getButtonStyling from "./getButtonStyling";

function Button ({text,onClickHandler,styleType="primary" ,type="submit"}){
    return(
        <button
        onClick={onClickHandler}
        type={type}
        className={`px-4 py-2  ${getButtonStyling(styleType) }`}
        >
            {text}
        </button>
    )
}


export default Button;