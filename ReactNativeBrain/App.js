import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./src/components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredtext);
  };
  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      },
    ]);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChange={goalInputHandler}
        />
        <Button title="Add Goal" onClick={addGoalHandler} />
      </View>
      <View>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => <GoalItem itemData={itemData} />}
          alwaysBounceVertical={false}
          keyExtracter={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: "space-between",
  },
  inputcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWith: 1,
    borderColor: "black",
    width: "80%",
    marginRight: 8,
  },
});
