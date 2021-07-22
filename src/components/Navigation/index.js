import { Link } from "react-router-dom";
import { MenuItems } from "../Menu/MenuItems";
import ListItem from "../ListItem";

const Navigation = (props) => {
  const oneElementOut = (el, index, array) => {
    return el.title !== props.isMe;
  };

  return (
    <div className="navigation__categories">
      <p>{props.naviTitle}</p>
      <ul>
        {MenuItems.filter(oneElementOut).map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path} style={{ textDecoration: "none" }}>
                <ListItem
                  classProp={props.classProp}
                  picture={item.picture}
                  section={item.section}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
