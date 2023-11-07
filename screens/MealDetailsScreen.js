import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

const MealDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <Subtitle title="Ingredients" />
      <List data={selectedMeal.ingredients} />

      <Subtitle title="Steps" />
      <List data={selectedMeal.steps} />
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
    padding: 4,
  },
});
