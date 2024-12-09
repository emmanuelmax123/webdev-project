import { View, Text, FlatList } from "react-native";
import React from "react";

const ListData = () => {
  const fruits = ["apple", "orange", "pear"];
  return (
    <View>
      <FlatList
        data={fruits}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
};

export default ListData;
