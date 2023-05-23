import { StyleSheet } from "react-native";
import Colors from "./colors";

const Style = StyleSheet.create ({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.colorBG,
    },

    title: {
      flex: 1,
      color: Colors.primary1,
      fontSize: 32,
      fontWeight: 'bold',
      paddingTop: 100,
    },

    inputContainer: {
      flex: 3,
      width: '105%',
     flexDirection: 'column',
     marginBottom: 20,
     alignItems: 'center', 
     paddingTop: 20,
    },

    input: {
      borderWidth: 1,
      borderColor: Colors.colorInput,
      borderRadius: 30,
      color: Colors.colorInputPlaceHolder,
      backgroundColor: Colors.colorInput,
    },

    inputError: {
      borderColor: Colors.error
    },

    button: {
      width: '85%',
      height: 50,
      backgroundColor: Colors.primary1,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10

    },

    buttonText: {
      color: Colors.primary,
      fontSize: 16,
    },

    cardContainer: {
      flexDirection: 'column',
      marginTop: 10

    },
    checkboxContainer: {
      flexDirection: 'row',
    },
    
    checkbox: {
      width: 20,
      height: 20,
      borderRadius: 5,
      borderWidth: 2,
      backgroundColor: Colors.primary,
      marginRight: 10,
      color: 'black', 
    },
    
    checkboxLabel: {
      color: 'white',
      fontWeight: 'bold',
    },

    footer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      width: '100%',
      flexDirection: 'row',
      position: 'absolute',
      bottom: 5,
      borderTopWidth: 1,
      borderTopColor: Colors.primary1,
    },

    
    footerText: {
      fontSize: 16,
      color: 'white',
    },
    footerLink: {
      color: Colors.primary1,
      padding: 5,
      fontSize: 16,
      fontWeight: 'bold',
    }

});
export default Style;
