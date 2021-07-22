const ListItem = ({ section, picture, classProp, isItMe }) => {
  return (
    <div className={`${classProp}-navi`}>
      <div className = {`border ${classProp}`}>
        <img alt={"ikona kategorii"} src={picture}></img></div>
      
      <p>{section}</p>
    </div>
  );
};

export default ListItem;
