import { Text } from "react-native";
import { Slider } from "react-native-elements";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Slider thumbStyle={{
      height: 20,
      width: 20,
      backgroundColor: "blue"
    }} maximumValue={5} minimumValue={0} style={{
      left: 18,
      top: 35,
      position: "absolute",
      width: 150,
      height: 40
    }} value={3} step={0.2}></Slider><Text style={{
      left: 48,
      top: 180,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Lorem ipsum… </Text></View>;
};

export default Untitled1;