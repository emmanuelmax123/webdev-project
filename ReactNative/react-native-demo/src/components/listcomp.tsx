import { View, Text, FlatList } from "react-native";
import React from "react";

const ListData = () => {
  const fruits = ["apple", "orange", "pear"];
  return (
    <View>
      <FlatList
        data={fruits}
        //we are a dding a key to each item so we can identify them
        keyExtractor={(item) => item}
        // we destructure the item in the object
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
};

export default ListData;
