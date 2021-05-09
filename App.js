import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, SafeAreaView, Button,Alert,Image,TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import styles from './styles';

export default function App() {
  let result = 1;
  let onCklickText = ()=>{
      console.log(' ok text pressed');
  };
  const handleOkButton = ()=>{
      console.log("Ok");
  };
  const handleCnacelButton = ()=>{
    console.log("Cancel");
  };
  const handleButtonPress = ()=>{
      Alert.alert("Result:",'Button Pressed',[{text:'Ok',onPress:handleOkButton}
      ,{text:"Cancel",onPress:handleCnacelButton}]);
  };
  const handleAnothButt = (text)=>{
    console.log(Number(text)+Number(result));
  }
  const handleAnothPress = ()=>{
    Alert.prompt("Another result","Enter value",handleAnothButt);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} onPress={onCklickText}>Hello Slava!!! {'\n'}I'm looking for you </Text>
      <Button color="red" title="Click Me" onPress={handleButtonPress}/>
      <Button color="green" title="Another button" onPress={handleAnothPress}/>
      <Image source={require("./assets/favicon.png")}/>
      {/* <TouchableHighlight onPress={onCklickText}>
      <Image source={
        {
          width:200,
          height:150,
          uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Desktop_computer_clipart_-_Yellow_theme.svg/1200px-Desktop_computer_clipart_-_Yellow_theme.svg.png"
        }
      }/>
      </TouchableHighlight> */}
      <TouchableWithoutFeedback onPress={onCklickText}>
      <Image source={
        {
          width:200,
          height:150,
          uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Desktop_computer_clipart_-_Yellow_theme.svg/1200px-Desktop_computer_clipart_-_Yellow_theme.svg.png"
        }
      }/>
      </TouchableWithoutFeedback> 
      <StatusBar style="auto" />      
    </SafeAreaView>
  );
}

