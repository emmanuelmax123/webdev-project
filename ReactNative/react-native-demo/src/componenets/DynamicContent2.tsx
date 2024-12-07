import { View, Text } from "react-native";
import React from "react";
import { Button, Image } from "react-native";

const DynamicContent2 = () => {
  const CarPrice = "$200,000";
  const Img = "../assets/k.jpg";
  const Carname = "bmw";
  const Rating = 3.5;
  const Description = "the best car you cabn get";

  return (
    <View>
      <View style={{ width: 100, height: 100 }}>
        <Button title={CarPrice} color="black" />
      </View>
      <Image source={require(Img)} style={{ width: 200, height: 200 }} />
      <Text>{Carname}</Text>
      <Text>Rating: {Rating}</Text>
      <Text>{Description}</Text>
      <Button title="Add to chart" color="black" />
    </View>
  );
};

export default DynamicContent2;
