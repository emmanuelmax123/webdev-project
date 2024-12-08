import { View, Text, Image } from "react-native";
import React from "react";
import st from "../utils/style";

const Imagecomp = () => {
  return (
    <View>
      <Image source={require("../assets/k.jpg")} style={st.rounding} />
    </View>
  );
};

export default Imagecomp;
