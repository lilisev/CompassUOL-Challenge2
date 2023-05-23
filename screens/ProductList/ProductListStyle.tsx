import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const stylesProductList = StyleSheet.create({
    container: {
      backgroundColor: Colors.colorBG,
      flex: 1,
      textAlign: "left",
      justifyContent: "center",
    },
  
    userWelcome: {
      height: 60,
      alignItems: "flex-start",
    },
  
    welcome: {
      color: "white"
    },
  
    userName: {
      textDecorationLine: "underline",
      color: Colors.primary1
    },
  
    scrollViewContainer: {
      flex: 2,
    },
  
    productContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      marginBottom: 10,
      flexWrap: "wrap"
    },
    product: {
      width: "48%",
      height: 150,
      backgroundColor: "#eee",
      borderRadius: 5,
      marginBottom: 10,
    },
  
    tabBar: {
      height: 60,
    },
  });

  export default stylesProductList;
