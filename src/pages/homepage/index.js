import { Link } from "react-router-dom";
import ListItem from "../../components/ListItem";
import { MenuItems } from "../../components/Menu/MenuItems";

const Homepage = (props) => {
  return (
    <div className="homepage">
      <div className="homepage__wrapper">
        <div className="homepage__header">
          <h1>Quiz</h1>
          <div className="shadow-home tech">
            <p>10 PYTAŃ / 5 KATEGORII</p>
          </div>
        </div>
        <div className="homepage__navigation">
          {MenuItems.map((item, index) => {
            return (
              <Link
                to={item.path}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <ListItem
                  classProp={"home"}
                  picture={item.picture}
                  section={item.section}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
