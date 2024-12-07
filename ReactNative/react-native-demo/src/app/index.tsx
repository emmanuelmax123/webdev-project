import { View, Text } from "react-native";
import React from "react";
import Componet from "../componenets/Componet";
import Greet from "../componenets/Greet";
import Name from "../componenets/Name";
import Age from "../componenets/Age";
import Social from "../componenets/Social";
import Subjectname from "../componenets/Subjectname";
import Textcom from "../componenets/TextComponent";
import Viewcomponet from "../componenets/Viewcomponet";
import Buttoncomp from "../componenets/Buttoncomp";
import Imagescomp from "../componenets/imagescomp";
import Profilecomp from "../componenets/Profilecomp";
import DynamicContent from "../componenets/DynamicContent";
import DynamicContent2 from "../componenets/DynamicContent2";
import Inlinestyling from "../componenets/inlinestyling";
import Interalstyling from "../componenets/interalstyling";
import Externalstyle from "../componenets/Externalstyle";

const Hello = () => {
  return (
    <View>
      {/* <Greet />
      <Componet />;
      <Name />
      <Age />
      <Social />
      <Subjectname />
      <Textcom />
      <Viewcomponet />
      <Buttoncomp /> 
      <Imagescomp />
      <Profilecomp />
      <DynamicContent />
      <DynamicContent2 />*/}

      <Inlinestyling />
      <Interalstyling />
      <Externalstyle />
    </View>
  );
};

export default Hello;
