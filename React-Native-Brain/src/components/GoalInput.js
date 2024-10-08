import { useState } from "react";
import {
  TextInput,
  Button,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler(enteredGoalText) {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={""} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChange={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.endAddGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  textInput: {
    borderWith: 1,
    borderColor: "black",
    width: "80%",
    marginRight: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
});
