import React, { useState } from "react";
import { mockListResponse } from "../../../data/mockListResponse";

import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  // Initialize a state variable called data with the initial value
  // of the mockListResponse array, which is an array of objects that
  // contain the key-value pair of {name: string}:
  const [data, setData] = useState(mockListResponse);

  // Define the JSX that will be rendered when the component is
  // called. In this case, we'll render a FlatList component with
  // the data prop set to the state variable data. The renderItem
  // prop is a function that takes an object with two properties:
  // item and index. The item property is an object from the data
  // prop array, and the index property is the index of the item in
  // the array. The renderItem function returns a JSX element that
  // will be rendered for each item in the array. In this case, the
  // renderItem function returns a Text component with the name
  // property of the item object as its text content.
  return (
    <FlatList
      data={data}
      keyExtractor={(friend) => friend.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        // The renderItem function takes an object with two properties:
        // item and index. The item property is an object from the data
        // prop array, and the index property is the index of the item in
        // the array. For example, if the data prop is an array of objects
        // like [{name: "Friend1"}, {name: "Friend2"}], then the first
        // call to renderItem will have an item property of {name: "Friend1"}
        // and an index property of 0, and the second call to renderItem
        // will have an item property of {name: "Friend2"} and an index
        // property of 1.
        //
        // The renderItem function can return any JSX element it wants, but
        // the element must have a key prop that is a string or number that
        // uniquely identifies the element. In this case, we'll return a
        // Text component with the name property of the item object as its
        // text content. The key prop is automatically set to the index
        // property of the item object, which is a number that uniquely
        // identifies the element in the array. For example, if the data
        // prop is an array of objects like [{name: "Friend1"}, {name: "Friend2"}],
        // then the first call to renderItem will return a Text component
        // with the key prop set to 0 and the text content of "Friend1", and
        // the second call to renderItem will return a Text component with
        // the key prop set to 1 and the text content of "Friend2":
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
export default ListScreen;
