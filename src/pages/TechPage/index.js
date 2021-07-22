import React from "react";
import technologia from "../../assets/technologia_ikona_.png";
import ChosenCategory from "../../components/ChoosenCategory";
import HeaderNavi from "../../components/HeaderNavi";
import Navigation from "../../components/Navigation";

const TechPage = (props) => {
  return (
    <div className="about tech">
      <div className="about__wrapper">
        <div className="introduction">
          <ChosenCategory
            title={"technologia"}
            classProp={"tech"}
            image={technologia}
          />
        </div>
        <div className="navigation">
          <HeaderNavi />
          <Navigation
            classProp={"tech"}
            naviTitle={"WYBIERZ KATEGORIĘ"}
            isMe={"TECHNOLOGIA"}
          />
        </div>
      </div>
    </div>
  );
};

export default TechPage;
