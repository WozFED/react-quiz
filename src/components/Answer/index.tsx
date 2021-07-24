
interface AnswerProps {
  answer: any;
  classProp: string;
  incorrect: Array<string>;
  active: string;
  correct: string;
  handleClick: any;
  disable: boolean;
}

const Answer = (props: AnswerProps) => {
  
  return props.answer.map((el, index) => {
    return (
      <button
        className={`button-answer ${props.classProp} 
                ${
                  props.incorrect[index] === el && props.active === el
                    ? "incorrect"
                    : null
                } 
                ${
                  props.correct === el && props.active === el ? "correct" : null
                } `}
        onClick={() => props.handleClick(el, index)}
        key={el}
        disabled={props.disable}
      >
        <p>{el}</p>
      </button>
    );
  });
};

export default Answer;
