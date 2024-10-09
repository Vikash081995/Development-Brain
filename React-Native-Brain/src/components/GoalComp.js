import React from "react";
import { useState } from "react";
import GoalItem from "./GoalItem";
import GoalInput from "./GoalInput";
import { StatusBar } from "expo-status-bar";

const GoalComp = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      },
    ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button
          title="add new Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          isVisible={modalIsVisible}
          onAddGoal={addGoalHandler}
          endAddGoalHandler={endAddGoalHandler}
        />
        <View>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem
                itemData={itemData}
                onDeletehandler={deleteGoalHandler}
                id={itemData.item.id}
              />
            )}
            alwaysBounceVertical={false}
            keyExtracter={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
};

export default GoalComp;
