import QuizIsEnded from "../QuizIsEnded";
import Answer from "../Answer";
import InputAnswer from "../InputAnswer";
import HeaderNavi from "../HeaderNavi";
import DragAnswer from "../DragAnswer";

const DisplayQuestion = (props) => {
  return props.end ? (
    <div className={`about__wrapper`}>
      <div className="introduction">
        <div className="introduction__wrapper">
          <h1>Quiz</h1>
          <div className="introduction__header">
            <div className={`shadow ${props.classProp}`}>
              <p>WYBIERZ PRAWIDŁOWĄ ODPOWIEDŹ</p>
            </div>
            <div className={`score ${props.classProp}`}>{props.index + 1}/10</div>
          </div>

          <div className="answer">
            <p className="question">{props.category[props.index].quest}</p>

            {props.category[props.index].type === "closed" ? (
              <Answer {...props} />
            ) : props.category[props.index].type === "drag" ? (
              <DragAnswer {...props} />
            ) : props.category[props.index].type === "input" ? (
              <InputAnswer {...props} />
            ) : null}
          </div>
        </div>
      </div>
      <div className="navigation">
        <HeaderNavi />
      </div>
    </div>
  ) : (
    <QuizIsEnded
      classProp={props.classProp}
      score={props.score}
      repeatQuiz={props.repeatQuiz}
      isMe={props.isMe}
      image={props.image}
      title={props.title}
    />
  );
};

export default DisplayQuestion;
