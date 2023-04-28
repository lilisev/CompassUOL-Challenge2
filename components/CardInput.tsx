import React from 'react';
import { TextInput, StyleSheet, Image, View } from 'react-native';


import Colors from '../constants/colors';


type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  style?: object;
  error?: boolean;
  icon?: any;
};

const CardInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  style,
  error,
  icon,
}: InputProps) => {
  return (
    <View style={[styles.inputContainer, style, error && styles.inputError]}>
      <View style={styles.iconPlaceholder}>
      {icon && <Image source={icon} style={styles.inputIcon} />}
      <TextInput
        style={{flex: 1, paddingLeft: 10}}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
    </View>
  );
};


const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.colorInput,
    borderRadius: 30,
    marginBottom: 20,
    color: Colors.colorInputPlaceHolder,
    backgroundColor: Colors.colorInput
  },

  inputError: {
    color: Colors.error
  },

inputIcon: {
  paddingLeft: 20,
  tintColor: Colors.primary1
},

iconPlaceholder: {
  width: '90%',
  flexDirection: 'row',
  alignItems:'center'
}



});

export default CardInput;