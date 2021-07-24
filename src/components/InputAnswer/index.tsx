import { useEffect, useState } from "react";
import { InputProps } from "./interface";


const InputAnswer = (props: InputProps) =>  {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(()=>{
    setInputValue('')
  },[props.index])
  return (
    <div className="answer-input">
      <input
        className={`input-box ${props.classTest}`}
        type="text"
        disabled={props.disable}
        value={inputValue}
        onChange={(e) => handleChange(e)}
      ></input>
      <button
        className={`button-answer ${props.classProp} input`}
        onClick={() => props.handleInput(inputValue)}
      >
        <p>ZATWIERDŹ ODPOWIEDŹ</p>
      </button>
    </div>
  );
};

export default InputAnswer;
