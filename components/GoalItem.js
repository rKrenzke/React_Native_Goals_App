import { StyleSheet, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      style={styles.goalItem}
      android_ripple={{ color: "#23064a" }}
      onPress={props.onDeleteItem.bind(this, props.id)}
    >
      <Text style={styles.itemText}>{props.text}</Text>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  itemText: {
    padding: 8,
    color: "white",
  },
});
