import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';


import Style from '../constants/style';
import Colors from '../constants/colors';
import Button from '../components/CardButton';
import CardLink from '../components/CardLink';
import CardInput from '../components/CardInput';


const SignUp = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');
  const [usernameError, setUsernameError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  let [acceptedTermsError, setAcceptedTermsError] = useState<string>('');



  const validateFields = () => {
    let isValid = true;
    
    if (!email) {
      setEmailError('Please enter a valid email');
      isValid = false;
    } else {
      setEmailError('');
    }
    
    if (!username) {
      setUsernameError('Please enter your username');
      isValid = false;
    } else {
      setUsernameError('');
    }
    if (!password) {
      setPasswordError('Please enter a valid password');
      isValid = false;
    } else {
      setPasswordError('');
    }
    if (!acceptedTerms) {
      setAcceptedTermsError('Please accept the Terms');
      isValid = false;
    } else {
      setAcceptedTermsError = ('');
    }
  
    return isValid;
    
  };

  const handleCreateAccount = () => {
    if (validateFields() && acceptedTerms) {
      navigation.navigate('CreateAccount');
    }
  };

  const handleCheckbox = (value: boolean) => {
    setAcceptedTerms(value);
    setAcceptedTermsError(value ? '' : 'Please accept the Terms');
  };


  return (
    <View style={Style.container}>
      <Text style={Style.title}>SIGN UP</Text>
      <View style={Style.cardContainer}>        
      <CardInput
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          error={!!emailError}
          icon={require('../assets/images/mail.png')}
        />
        {emailError ? <Text style={styles.errorMessage}>{emailError}</Text> : null}
        </View>
        <View style={Style.cardContainer}>      
    <CardInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        error={!!usernameError}
        icon={require('../assets/images/user.png')}
    />
    {usernameError ? <Text style={styles.errorMessage}>{usernameError}</Text> : null}
    </View>
    <View style={Style.cardContainer}>      
    <CardInput
        placeholder="Your Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        error={!!passwordError}
        icon={require('../assets/images/lock.png')}
    />
    {passwordError ? <Text style={[styles.errorMessage, { marginTop: 0 }]}>{passwordError}</Text> : null}
    </View>
    <View style={styles.cardContainer}>
    <View style={styles.checkboxContainer}>
  <TouchableOpacity onPress={() => handleCheckbox(!acceptedTerms)}>
    <View style={[styles.checkbox, acceptedTermsError && styles.checkboxError]}>
      {acceptedTerms ? (
        <MaterialIcons 
          name="check" 
          size={20} 
          color="black" 
        />
      ) : null}
    </View>
      </TouchableOpacity>
        <Text style={styles.checkboxLabel}>
          Agree To <Text style={styles.termsLink}>Terms and Conditions</Text>
        </Text>
        </View>
        </View>
    {acceptedTermsError ? 
      <Text 
          style={styles.errorMessage}>{acceptedTermsError}</Text> : null}
          <Button text="CREATE ACCOUNT" onPress={handleCreateAccount} style={Style.button} />
      <View style={styles.footer}>
        <Text 
          style={styles.footerText}>Already have an account? </Text> 
        <CardLink 
          text="Sign In" 
          onPress={() => navigation.navigate('Welcome')} 
          style={styles.footerLink} />
          </View>
    </View>
  );
  };

 export default SignUp;
  
const styles = StyleSheet.create({
  errorMessage: {
    color: Colors.error,
    marginBottom: 10,
    paddingLeft: 15
  },

  cardContainer: {
    flexDirection: 'column',
    marginTop: 10,
  },
  
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    //justifyContent: '',
    //alignItems: 'center',
    backgroundColor: 'white',
    marginRight: 10,
    color: 'black'
  },
  checkboxError: {
    borderColor: Colors.error,
  },
  checkboxLabel: {
    color: 'white',
    fontWeight: 'bold',

  },
  termsLink: {
    color: Colors.primary,
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },

    linkContainer: {
    alignSelf: 'center',
    marginTop: 20,
    },
    linkText: {
      padding: 10,
      color: 'white',
      },

  footer: {
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
    fontWeight: 'bold'
  }
});
