import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";



const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

interface ChoiceProps {
  dragDisable: boolean;
  index: number;
  classProp: string;
  correct: string;
  choice: string;
}
const Choice = (props: ChoiceProps) => {
  return (
    <Draggable
      isDragDisabled={props.dragDisable}
      draggableId={"a" + props.index}
      index={props.index}
    >
      {(provided) => (
        <div
          className={`button-drag ${props.classProp}
        ${props.correct}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p>{props.choice}</p>
        </div>
      )}
    </Draggable>
  );
};

const ItemPick = React.memo(function ItemPick<any>({
  choices,
  classProp,
  dragDisable,
  correct
}) {
  return choices.map((choice, index) => (
    <Choice
      correct={correct}
      dragDisable={dragDisable}
      classProp={classProp}
      choice={choice}
      index={index}
      key={index}
    />
  ));
});
interface DragProps {
  answer: any;
  index: number;
  classProp: string;
  dragDisable: boolean;
  handleDrag: any;
  choice: string;
  correct: string;
  
}

const DragAnswer = (props: DragProps) => {
  const [choices, setChoices] = useState<any>([]);
  
  useEffect(() => {
    setChoices(props.answer);
  }, [props.index, props.answer]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }
    const newChoices = reorder(
      choices,
      result.source.index,
      result.destination.index
    );
    
    setChoices(newChoices);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="drag">
        <Droppable droppableId="list">
          {(provided) => (
            <div
              className="drag__element"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <ItemPick
              correct = {props.correct}
                classProp={props.classProp}
                choices={choices}
                dragDisable={props.dragDisable}
              />
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <button
          className={`button-drag ${props.classProp} check`}
          onClick={() => props.handleDrag(choices)}
        >
          Sprawdź
        </button>
      </div>
    </DragDropContext>
  );
};

export default DragAnswer;
