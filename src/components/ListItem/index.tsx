import { ListProps } from "./interface";

const ListItem = (props: ListProps) => {
  return (
    <div className={`${props.classProp}-navi`}>
      <div className = {`border ${props.classProp}`}>
        <img alt={"ikona kategorii"} src={props.picture}></img></div>
      
      <p>{props.section}</p>
    </div>
  );
};

export default ListItem;
