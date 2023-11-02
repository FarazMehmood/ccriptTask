import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        marginTop: "40%",
        color: 'white',
    },
    inputContainer: {
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 25,
        padding: 10,
        margin: 10
    },
    inputHalf: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 25,
        width: '48%',
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
        paddingVertical:10,
        paddingHorizontal: 120,
        margin: 10,
        borderRadius: 20,
        color: 'black',
        backgroundColor: 'green'
    },
    ButtonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop:'5%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',

    },
    leftButton: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    rightButton: {
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    button: {
       
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems:'center',
        textAlign:'center',
        color: 'black',
    },
    selectedButton: {
     paddingVertical:10,
       textAlign:'center',
        backgroundColor: 'green',
        color: 'black'
    },
    buttonText: {
        color: 'black',
    },
});