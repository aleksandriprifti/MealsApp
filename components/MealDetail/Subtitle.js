import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Subtitle = ({ title }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{title}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 10,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
