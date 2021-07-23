import React from "react";
import motoryzacja from "../../assets/motoryzacja_ikona.png";
import ChosenCategory from "../../components/ChoosenCategory";
import HeaderNavi from "../../components/HeaderNavi";

const MotoPage = (props) => {
  return (
    <div className="about moto">
      <div className="about__wrapper">
        <div className="introduction">
          <ChosenCategory
            title={"motoryzacja"}
            classProp={"moto"}
            image={motoryzacja}
          />
        </div>
        <div className="navigation">
          <HeaderNavi />
          
        </div>
      </div>
    </div>
  );
};

export default MotoPage;
