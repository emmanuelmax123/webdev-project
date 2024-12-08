import { View, Text, Button, Pressable } from "react-native";
import React from "react";

const Buttoncomp = () => {
  return (
    <View>
      <Text>Button componets</Text>
      <Button title="learn More" color="red" />
      <Text>Alternative way to creata a button</Text>
      <Button title="Read More" color="Blue" disabled></Button>
      <Text>Click Event handler</Text>
      <Button
        title="Read More"
        color="green"
        onPress={() => {
          console.log("Preesed on console");
        }}
      />
      <Text>Warning Event handler</Text>
      <Button
        title="Alert"
        color="black"
        onPress={() => alert("warning btn pressed")}
      />

      {/*
      onPress: Function that is called when a componet is pressed (required)
      onPressIn: Function that is called whwen the press gesture starts
      onPressOut: Fuction that is called when the press gesture ends(or is cancelled)
      onLongPress: Fuction that is called when a long press is detected
      */}

      <Pressable onPress={() => console.log("pressed")}>
        <Text style={{ color: "teal" }}>Press Me</Text>
      </Pressable>

      <Pressable onPressIn={() => console.log("pressed In")}>
        <Text style={{ color: "orange" }}>Press Me</Text>
      </Pressable>

      <Pressable onPressOut={() => console.log("pressed Out")}>
        <Text style={{ color: "magenta" }}>Press Me</Text>
      </Pressable>

      <Pressable onLongPress={() => console.log("pressed Long")}>
        <Text style={{ color: "crimson" }}>Press Me for longer</Text>
      </Pressable>
    </View>
  );
};

export default Buttoncomp;
