import React, { useEffect } from 'react';
import { useDataContext } from '../../ContextApi/DataContext';

import { StyleSheet, View, TextInput, Text } from 'react-native';

const Imperial = (props) => {
  const { pounds, setPounds, feet, setFeet, inches, setInches } = props;
  const { userData } = useDataContext();
  console.log('userData', userData);
  


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Pounds (lbs)"
        style={styles.input}
        value={pounds}
        placeholderTextColor="white"
        onChangeText={(text) => setPounds(text)}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: '6%' }}>
        <TextInput
          placeholder="Feet (ft)"
          style={styles.inputHalf}
          value={feet}
          placeholderTextColor="white"
          onChangeText={(text) => setFeet(text)}
        />
        <TextInput
          placeholder="Inches (inch)"
          style={styles.inputHalf}
          value={inches}
          placeholderTextColor="white"
          onChangeText={(text) => setInches(text)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        width: '100%',
    },
    inputContainer: {
        width: '100%',
        backgroundColor:'black',
    },
    input: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 25,
        padding: 10,
        margin: 10,
        color: 'white'
    },
    inputHalf: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 25,
        width: '48%',
        color: 'white',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 30,
        margin: 10,
        color: 'black',
    },
    buttons: {
        padding: 30,
        margin: 10,
        borderRadius: 20,
        color: 'black',
        backgroundColor: 'green'
    },
    ButtonView: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        alignContent: 'center',
        justifyContent: 'center'
    },
    selectedButton: {
        padding: 20,
        margin: 10,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'green'
    },
    leftButton: {
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
    },
    rightButton: {
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    },
});

export default Imperial;
