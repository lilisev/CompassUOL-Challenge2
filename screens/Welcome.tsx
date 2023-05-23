import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Style from "../constants/style";
import Colors from "../constants/colors";
import CardButton from "../components/CardButton";
import CardLink from "../components/CardLink";
import CardInput from "../components/CardInput";

const Welcome = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const validateFields = () => {
    let isValid = true;

    if (!email) {
      setEmailError("Please enter a valid email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Please enter a valid password");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleLogin = () => {
    if (validateFields()) {
      navigation.navigate("ProductList");
    }
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={Style.container}>
        <Text style={Style.title}>WELCOME</Text>
      <View style={Style.inputContainer}>
        <View style={Style.cardContainer}>
          <CardInput
            placeholder="Your Email"
            value={email}
            onChangeText={setEmail}
            error={!!emailError}
            icon={require("../assets/images/mail.png")}
          />
          {emailError ? (
            <Text style={styles.errorMessage}>{emailError}</Text>
          ) : null}
        </View>
        <View style={Style.cardContainer}>
          <CardInput
            placeholder="Your Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            error={!!passwordError}
            icon={require("../assets/images/lock.png")}
          />
          {passwordError ? (
            <Text style={styles.errorMessage}>{passwordError}</Text>
          ) : null}
        </View>
        <CardButton text="LOGIN" onPress={handleLogin} style={Style.button} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <CardLink
          text="Sign Up"
          onPress={handleSignUp}
          style={Style.footerLink}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  

  errorMessage: {
    color: Colors.error,
    marginBottom: 10,
    paddingLeft: 15,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    bottom: 5,
    borderTopWidth: 1,
    borderTopColor: Colors.primary1,
  },

  footerText: {
    fontSize: 16,
    color: "white",
  },
});

export default Welcome;
