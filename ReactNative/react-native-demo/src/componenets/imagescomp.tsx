import { View, Text, Image } from "react-native";
import React from "react";

const Imagescomp = () => {
  return (
    <View>
      <Text>Exploring images</Text>
      <Image
        source={require("../assets/k.jpg")}
        style={{ width: 200, height: 200 }}
      />
      {/* using images that we dont hav locally images with */}
      <Image
        source={{
          uri: "https://images.pexels.com/photos/27219452/pexels-photo-27219452/free-photo-of-woman-in-white-dress-lying-down-on-couch.jpeg",
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default Imagescomp;
