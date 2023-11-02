import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

const Metric = (props) => {
    const { kgs, setKgs, Meters, setMeters, } = props;

    return (
        <View style={styles.container}>

            <KeyboardAvoidingView style={styles.inputContainer}>
                <TextInput 
                placeholder="Kilograms (kg)" 
                style={styles.input} 
                value={kgs}  
                placeholderTextColor="white" 
                onChangeText={(text) => setKgs(text)} />
                <TextInput 
                placeholder="Meters (m)" 
                style={styles.input} 
                value={Meters} 
                 placeholderTextColor="white"
                onChangeText={(text) => setMeters(text)} />
            </KeyboardAvoidingView>

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
        backgroundColor:'black',
        flex: 1
    },
    input: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 25,
        padding: 10,
        margin: 10,
        color: 'white'
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

export default Metric;
