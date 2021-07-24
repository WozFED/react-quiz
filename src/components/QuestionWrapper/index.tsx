import { useState ,useCallback} from "react";
import { WrapperProps } from "./interface";

const QuestionWrapper = (props: WrapperProps) => {
  const question = props.question;
  const classProp = props.classProp;
  const isMe = props.isMe;
  const image = props.image;
  const title = props.title;
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [end, setEnd] = useState(true);
  const newIndex = index + 1;
  const answer = question[index].answer;
  const correct = question[index].correct;
  const incorrect = question[index].incorrect;
  const [disable, setDisable] = useState(false);
  const [active, setActive] = useState("");
  const [dragDisable, setDragDisable] = useState(false);
  const [classTest, setClassTest] = useState("");

  const addPoint = useCallback(() => {
    setScore(score + 1);
  }, [score]);

  const handleDrag = (value) => {
    if (JSON.stringify(value) === JSON.stringify(correct)) {
      addPoint();
      setClassTest("correct");
      setTimeout(() => {
        setIndex(newIndex);
      }, 2000);

      setDragDisable(true);
    } else {
      setClassTest("incorrect");
      setDragDisable(true);
      
    }setTimeout(() => {
        setIndex(newIndex);
        setClassTest("");
        setDragDisable(false);
      }, 2000);
  };

  const handleInput = (value) => {
    if (value === correct) {
      addPoint();
      setDisable(true);
      setClassTest("correct");
    }
    if (value !== correct) {
      setDisable(true);
      setClassTest("incorrect");
    }
    setTimeout(() => {
      setIndex(newIndex);
      setDisable(false);
      setClassTest("");
    }, 2000);
  };

  const handleClick = (el, index) => {
    if (el === incorrect[index]) {
      setActive(el);
    }
    if (el === correct) {
      setActive(el);
      addPoint();
      setDisable(true);
    }

    if (el !== correct) {
      setDisable(true);
    }
    setTimeout(() => {
      if (newIndex < question.length) setIndex(newIndex);
      setDisable(false);
      setActive("");

      if (newIndex >= question.length) {
        setEnd(false);
        setIndex(index);
      }
    }, 1000);
  };

  const repeatQuiz = () => {
    setEnd(true);
    setIndex(0);
    setScore(0);
  };

  const newProps = {
    score,
    index,
    question,
    handleClick,
    end,
    answer,
    repeatQuiz,
    addPoint,
    correct,
    active,
    disable,
    handleInput,
    handleDrag,
    classProp,
    classTest,
    incorrect,
    isMe,
    image,
    title,
    dragDisable,
  };
  return props.children({ ...newProps });
};

export default QuestionWrapper;
