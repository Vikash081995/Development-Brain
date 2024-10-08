import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ itemData, onDeletehandler, id }) => {
  return (
    <div>
      <View style={styles.goalItem}>
        <Pressable
          andriod_ripple={{ color: "#dddd" }}
          onPress={() => onDeletehandler(id)}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalText}>{itemData.item.text} </Text>
        </Pressable>
      </View>
    </div>
  );
};
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
