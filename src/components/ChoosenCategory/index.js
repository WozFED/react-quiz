import { Link } from "react-router-dom";

const ChosenCategory = (props) => {


  return (
    <div className={`introduction__wrapper`}>
      <h1>Quiz</h1>

      <div className={`shadow-responsive ${props.classProp}`}>
        <p>WYBRANA KATEGORIA:</p>
      </div>
      <img className="first" alt='obrazek' src={props.image}></img>
      <p className="text-decoration">{props.title}</p>

      <Link to={`/${props.classProp}/one`}style ={{textDecoration: 'none'}}>
        <button className={`button-start ${props.classProp} first`}>
          <p>Rozpocznij</p>
          <div className = {`arrow ${props.classProp}`}></div>
        </button>
      </Link>
    </div>
  );
};

export default ChosenCategory;
