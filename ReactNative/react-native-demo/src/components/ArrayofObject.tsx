import { View, Text, FlatList } from "react-native";
import React from "react";

const ArrayofObject = () => {
  const locations = [
    { id: 1, name: "london" },
    { id: 2, name: "austrialia" },
    { id: 3, name: "paris" },
    { id: 4, name: "amsterdam" },
    { id: 5, name: "barcelona" },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={locations}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default ArrayofObject;
