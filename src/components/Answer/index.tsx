interface AnswerT {
  answer: Array<string>;
  classProp: string;
  incorrect: Array<string>;
  active: string;
  correct: string;
  disabled: boolean;
  disable: boolean;
  handleClick: any;
}

const Answer = (props: AnswerT) => {
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
