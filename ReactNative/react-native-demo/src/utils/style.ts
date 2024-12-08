import { StyleSheet } from "react-native";

const st = StyleSheet.create({
  textstyle: {
    color: "white",
    fontSize: 30,
    backgroundColor: "teal",
    margin: 20,
    padding: 20,
  },
  shadoweffect: {
    padding: 30,
    width: "80%",
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rounding: {
    borderRadius: 100,
    width: 100,
    height: 100,
  },
});

export default st;
