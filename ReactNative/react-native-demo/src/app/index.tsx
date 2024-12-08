import { View, Text } from "react-native";
import React from "react";
import Componet from "../components/Componet";
import Greet from "../components/Greet";
import Name from "../components/Name";
import Age from "../components/Age";
import Social from "../components/Social";
import Subjectname from "../components/Subjectname";
import Textcom from "../components/TextComponent";
import Viewcomponet from "../components/Viewcomponet";
import Buttoncomp from "../components/Buttoncomp";
import Imagescomp from "../components/imagescomp";
import Profilecomp from "../components/Profilecomp";
import DynamicContent from "../components/DynamicContent";
import DynamicContent2 from "../components/DynamicContent2";
import Inlinestyling from "../components/inlinestyling";
import Interalstyling from "../components/interalstyling";
import Externalstyle from "../components/Externalstyle";

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
