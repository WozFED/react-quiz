import React from "react";
import historia from "../../assets/historia_ikona.png";
import ChosenCategory from "../../components/ChoosenCategory";
import HeaderNavi from "../../components/HeaderNavi";
import Navigation from "../../components/Navigation";
const HistoryPage = (props) => {
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
          <Navigation
            classProp={"history"}
            naviTitle={"WYBIERZ KATEGORIĘ"}
            isMe={"HISTORIA"}
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
