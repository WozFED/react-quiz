import historia from "../../assets/historia_ikona.png";
import ChosenCategory from "../../components/ChoosenCategory";
import HeaderNavi from "../../components/HeaderNavi";

const HistoryPage = () => {
  return (
    <div className="about history">
      <div className="about__wrapper ">
        <div className="introduction">
          <ChosenCategory
            title={"historia"}
            classProp={"history"}
            image={historia}
          />
        </div>
        <div className="navigation">
          <HeaderNavi />
          
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
