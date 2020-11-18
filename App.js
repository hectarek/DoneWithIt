import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableWithoutFeedback, Image, Button, Alert } from 'react-native';

export default function App() {

  const handlePress = () => { console.log("This text was pressed")}

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hello Hector!</Text>
      <TouchableWithoutFeedback onPress={() => console.log("Image was touched")}>
        <Image source={{ 
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"
          }} />
      </TouchableWithoutFeedback>
      <Button title="Click Me" onPress={() => Alert.alert("Title of Popup", "Button was Clicked", [
        {text: "Yes", onPress: () => console.log("Yes was pressed")},
        {text: "No", onPress: () => console.log("No was pressed.")}
      ])}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
