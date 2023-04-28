import { StyleSheet } from "react-native";
import Colors from "./colors";

const Style = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.colorBG
      },

      title: {
        color: Colors.primary1,
        fontSize: 32,
        fontWeight: 'bold',
        paddingTop: 0,
        paddingBottom: 150
      },

      input: {
        width: '90%',
        justifyContent: 'center',
        height: 50,
        borderWidth: 1,
        borderColor: Colors.colorInput,
        borderRadius: 30,
        marginBottom: 25,
        color: Colors.colorInputPlaceHolder,
        backgroundColor: Colors.colorInput
      },
      button: {
        width: '90%',
        height: 50,
        backgroundColor: Colors.primary1,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
      },
      cardContainer: {
        flexDirection: 'column',
        marginTop: 10
      },
      


});

export default Style;