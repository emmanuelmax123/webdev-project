import { View, Text } from "react-native";
import React from "react";

const DynamicContent = () => {
  const username = "Kolex440";
  const multiply = (a: number, b: number) => a + b;
  return (
    <View>
      <Text>My name is {username}</Text>
      <Text>2 + 2 = {multiply(2, 2)}</Text>
    </View>
  );
};

export default DynamicContent;
