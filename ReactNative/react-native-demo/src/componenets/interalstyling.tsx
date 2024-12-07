import { View, Text, StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  textstyle: {
    color: "crimson",
    fontSize: 30,
    backgroundColor: "yellow",
    margin: 20,
    padding: 20,
  },
});
const Interalstyling = () => {
  return (
    <View>
      <Text style={styles.textstyle}>Using interal styling</Text>
    </View>
  );
};

export default Interalstyling;
