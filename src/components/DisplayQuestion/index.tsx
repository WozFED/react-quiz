import QuizIsEnded from "../QuizIsEnded";
import Answer from "../Answer";
import InputAnswer from "../InputAnswer";
import HeaderNavi from "../HeaderNavi";
import DragAnswer from "../DragAnswer";
import { Display } from "./interface";


const DisplayQuestion = (props: Display) => {
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
            <p className="question">{props.question[props.index].quest}</p>

            {props.question[props.index].type === "closed" ? (
              <Answer {...props} />
            ) : props.question[props.index].type === "drag" ? (
              <DragAnswer {...props} />
            ) : props.question[props.index].type === "input" ? (
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
