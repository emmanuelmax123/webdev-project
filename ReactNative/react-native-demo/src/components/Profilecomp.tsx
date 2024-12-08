import { View, Text, Image, Button } from "react-native";
import React from "react";

const Profilecomp = () => {
  return (
    <View>
      <Image
        source={require("../assets/me.jpg")}
        style={{ width: 200, height: 200 }}
      />
      <Text style={{ fontWeight: "bold" }}>Sanyaolu Kolawole</Text>
      <Text>My name is Kolawole and i enjoy coding</Text>
      <Button title="Press Me" color="red" />
    </View>
  );
};

export default Profilecomp;
