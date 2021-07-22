import React from "react";
import QuestionWrapper from "../QuestionWrapper";
import DisplayQuestion from "../DisplayQuestion";

const ShowTheQuests = (props) => {
  return (
    <div className={`about ${props.classProp}`}>
      <QuestionWrapper
        question={props.question}
        classProp={props.classProp}
        isMe={props.isMe}
        image={props.image}
        title={props.title}
      >
        {(props) => {
          return <DisplayQuestion {...props} />;
        }}
      </QuestionWrapper>
    </div>
  );
};

export default ShowTheQuests;
