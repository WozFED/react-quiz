import React from "react";
import kultura from "../../assets/kultura_ikona.png";
import ChosenCategory from "../../components/ChoosenCategory";
import HeaderNavi from "../../components/HeaderNavi";
import Navigation from "../../components/Navigation";

const CulturePage = (props) => {
  return (
    <div className="about culture">
      <div className="about__wrapper">
        <div className="introduction">
          <ChosenCategory
            title={"kultura"}
            classProp={"culture"}
            image={kultura}
          />
        </div>
        <div className="navigation">
          <HeaderNavi />
          
        </div>
      </div>
    </div>
  );
};

export default CulturePage;
