import Navigation from "../Navigation";
import HeaderNavi from "../HeaderNavi";

const QuizIsEnded = (props) => {
  return (
    <div className="about__wrapper">
      <div className="introduction">
        <div className="introduction__wrapper">
          <h1>Quiz</h1>

          <img alt="obrazek" src={props.image}></img>

          <p className="title">{props.title}</p>

          <div className="introduction__score">
            <div className={`shadow-end ${props.classProp} `}>
              <p>TWÓJ WYNIK TO</p>
            </div>
            <div className={`score ${props.classProp} big`}>
              {props.score}/10
            </div>
          </div>
          <button
            className={`button-start ${props.classProp} end `}
            onClick={() => props.repeatQuiz()}
          >
            <p>POWTÓRZ QUIZ</p><div className = {`arrow ${props.classProp}`}></div>
          </button>
        </div>
      </div>
      <div className="navigation">
        <HeaderNavi />
        <Navigation
          classProp={props.classProp}
          naviTitle={"WYBIERZ INNĄ KATEGORIĘ"}
          isMe={props.isMe}
        />
      </div>
    </div>
  );
};

export default QuizIsEnded;
