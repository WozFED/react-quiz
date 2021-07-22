import { useHistory } from "react-router-dom";
import V from "../../assets/cofnij_x (1).svg";
import X from "../../assets/zamknij_x (1).svg";
import { Link } from "react-router-dom";

const HeaderNavi = () => {
  let history = useHistory();
  return (
    <div className="navigation__header">
      <ul className="navigation__list">
        <li onClick={history.goBack}>
          <img alt={"cofnij stronę"} src={V}></img>
        </li>
        <li>
          <Link to="/home">
            <img alt={"wróć do strony głównej"} src={X}></img>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNavi;
