import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

interface CardLinkProps {
  text: string;
  onPress: () => void;
  style?: {};
}

const CardLink: React.FC<CardLinkProps> = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.footerCardLink}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  footerCardLink: {
    fontSize: 16,
    color: Colors.primary1,
    fontWeight: "bold",
  },
});

export default CardLink;
