import React from "react";
import technologia from "../../assets/technologia_ikona_.png";
import ChosenCategory from "../../components/ChoosenCategory";
import HeaderNavi from "../../components/HeaderNavi";

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
          
        </div>
      </div>
    </div>
  );
};

export default TechPage;
