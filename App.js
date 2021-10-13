import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState('Before');
  const [person, setPerson] = useState({ name: 'First', age: 30 });
  const [counter, setCounter] = useState(0)
  const clickUpdateHandler = ()=>{
    // setName('After');
    // setPerson({ name: 'Second', age: 40 })
    setCounter(counter + 1);
  }
  const clickDefaultHandler = ()=>{
    setName('Name');
    setPerson({ name: 'First', age: 30 })
    setCounter(0);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>{counter}</Text>
      <View style={styles.header}>
        <Text style={styles.boldText}>{name}</Text>
        <TextInput 
          style={styles.input}
          placeholder='Full Name'
          onChangeText={(value)=>{
            setName(value)
          }}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickUpdateHandler} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='default state' onPress={clickDefaultHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText:{
    fontWeight: 'bold',
  },
  body:{
    backgroundColor: 'yellow',
    padding: 20,
  }, 
  buttonContainer: {
    marginTop: 20,
  },
  input:{
    borderWidth: 1, 
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  } 
});
