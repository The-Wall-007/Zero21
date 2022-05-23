import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

type props = {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
};

const Button = (props: props) => {
  const {label, onPress, disabled = false} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} onPress={onPress} disabled={disabled}>
        <LinearGradient
          colors={['#0079D4', '#00B3EB']}
          style={styles.buttonContainer}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
