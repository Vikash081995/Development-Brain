import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredtext);
  };
  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
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
          renderItem={(itemData) => (
            <View>
              <Text>{goal} </Text>
            </View>
          )}
          alwaysBounceVertical={false}
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
