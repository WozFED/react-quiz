import React from "react";
import programowanie from "../../assets/programowanie_ikona.png";
import ChosenCategory from "../../components/ChoosenCategory";
import HeaderNavi from "../../components/HeaderNavi";

const CodingPage = (props) => {
  return (
    <div className="about coding">
      <div className="about__wrapper">
        <div className="introduction">
          <ChosenCategory
            title={"programowanie"}
            classProp={"coding"}
            image={programowanie}
          />
        </div>
        <div className="navigation">
          <HeaderNavi />
          
        </div>
      </div>
    </div>
  );
};

export default CodingPage;
