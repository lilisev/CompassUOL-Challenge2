import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import Style from "../constants/style";

interface ButtonProps {
  text: string;
  onPress: () => void;
  style?: {};
}

const CardButton: React.FC<ButtonProps> = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity style={[Style.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default CardButton;
