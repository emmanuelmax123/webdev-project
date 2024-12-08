import { View, Text } from "react-native";
import React from "react";

const Inlinestyling = () => {
  return (
    <View style={{ margin: 20 }}>
      <View
        style={{
          backgroundColor: "red",
          width: 100,
          height: 100,
          marginBottom: 20,
        }}
      />
      <View style={{ backgroundColor: "green", width: 100, height: 100 }} />
    </View>
  );
};

export default Inlinestyling;
