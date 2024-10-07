import { StyleSheet, View, Text } from "react-native";

const GoalItem = ({ itemData }) => {
  return (
    <div>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text} </Text>
      </View>
    </div>
  );
};
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
