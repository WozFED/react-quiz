import { useState ,useCallback} from "react";

const QuestionWrapper = (props) => {
  const classProp = props.classProp;
  const isMe = props.isMe;
  const image = props.image;
  const category = props.question;
  const title = props.title;
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [end, setEnd] = useState(true);
  const newIndex = index + 1;
  const answer = category[index].answer;
  const correct = category[index].correct;
  const incorrect = category[index].incorrect;
  const [disable, setDisable] = useState(false);
  const [active, setActive] = useState();
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
      if (newIndex < category.length) setIndex(newIndex);
      setDisable(false);
      setActive("");

      if (newIndex >= category.length) {
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
    category,
    index,
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
