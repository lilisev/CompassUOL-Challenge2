import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import Style from "../constants/style";
import Colors from "../constants/colors";
import Button from "../components/CardButton";
import CardInput from "../components/CardInput";
import CardLink from "../components/CardLink";

const SignUp = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  let [acceptedTermsError, setAcceptedTermsError] = useState<string>("");

  const validateFields = () => {
    let isValid = true;

    if (!email) {
      setEmailError("Please enter a valid email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!username) {
      setUsernameError("Please enter your username");
      isValid = false;
    } else {
      setUsernameError("");
    }
    if (!password) {
      setPasswordError("Please enter a valid password");
      isValid = false;
    } else {
      setPasswordError("");
    }
    if (!acceptedTerms) {
      setAcceptedTermsError("Please accept the Terms");
      isValid = false;
    } else {
      setAcceptedTermsError = "";
    }

    return isValid;
  };

  const handleCreateAccount = () => {
    if (validateFields() && acceptedTerms) {
      navigation.navigate("CreateAccount");
    }
  };

  const handleCheckbox = (value: boolean) => {
    setAcceptedTerms(value);
    setAcceptedTermsError(value ? "" : "Please accept the Terms");
  };

  const handleSignIn = () => {
      navigation.navigate("Welcome");
  };

  return (
    <View style={Style.container}>
      <Text style={Style.title}>SIGN UP</Text>
      <View style={Style.inputContainer}>
        <View style={Style.cardContainer}>
          <CardInput
            placeholder="Your Email"
            value={email}
            onChangeText={setEmail}
            error={!!emailError}
            icon={require("../assets/images/mail.png")}
            style={[
              { marginBottom: 10 },
              passwordError ? { borderColor: "red" } : null,
            ]}
          />
          {emailError ? (
            <Text style={styles.errorMessage}>{emailError}</Text>
          ) : null}
        </View>
        <View style={Style.cardContainer}>
          <CardInput
            placeholder="Your Username"
            value={username}
            onChangeText={setUsername}
            error={!!usernameError}
            icon={require("../assets/images/user.png")}
            style={[
              { marginBottom: 10 },
              passwordError ? { borderColor: "red" } : null,
            ]}
          />
          {usernameError ? (
            <Text style={styles.errorMessage}>{usernameError}</Text>
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
            style={[
              { marginBottom: 10 },
              passwordError ? { borderColor: "red" } : null,
            ]}
          />
          {passwordError ? (
            <Text style={[styles.errorMessage, { marginTop: 0 }]}>
              {passwordError}
            </Text>
          ) : null}
        </View>
        <View style={Style.cardContainer}>
          <View style={Style.checkboxContainer}>
            <TouchableOpacity onPress={() => handleCheckbox(!acceptedTerms)}>
              <View
                style={[
                  Style.checkbox,
                  acceptedTermsError && styles.checkboxError,
                ]}
              >
                {acceptedTerms ? (
                  <MaterialIcons name="check" size={20} color="black" />
                ) : null}
              </View>
            </TouchableOpacity>
            <Text style={Style.checkboxLabel}>
              Agree To{" "}
              <Text style={styles.termsLink}>Terms and Conditions</Text>
            </Text>
          </View>

          {acceptedTermsError ? (
            <Text style={styles.errorMessage}>{acceptedTermsError}</Text>
          ) : null}
        </View>

        <Button
          text="CREATE ACCOUNT"
          onPress={handleCreateAccount}
          style={Style.button}
        />
      </View>
      <View style={Style.footer}>
        <Text style={Style.footerText}>Already have an account? </Text>
        <CardLink
          text="Sign In"
          onPress={handleSignIn}
          style={Style.footerLink}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  errorMessage: {
    color: Colors.error,
    paddingLeft: 15,
  },

  termsLink: {
    color: Colors.primary,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },

  checkboxError: {
    borderColor: Colors.error,
  },

  linkText: {
    padding: 10,
    color: "white",
  },

  footerLink: {
    color: Colors.primary1,
    padding: 5,
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
