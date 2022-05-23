import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {TextField, Button} from '@/Components';
import BackArrow from '@/Assets/Images/BackArrow.svg';
import Normalize from '@/Theme/mixins';
import styles from './styles';

const SignUpPhoneValidation = () => {
  const [validationCode, setValidationCode] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation
  const validateCode = (_code: string) => {
    const isValid = _code === '1234';
    return isValid;
  };
  const isCodeValid = validateCode(validationCode);

  // Handling next button click
  const handleOnNext = () => {
    setIsSubmitted(true);
    if (isCodeValid) {
      Alert.alert('Valid', `Code matched!`);
    }
  };

  return (
    <LinearGradient colors={['#CEE8FF', '#F2F9FF']} style={styles.container}>
      {/* Back Arrow  */}
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.backArrowContainer}
        onPress={() => Alert.alert('Navigate', `Navigate to back!`)}>
        <BackArrow width={Normalize(11)} height={Normalize(16)} />
      </TouchableOpacity>

      {/* Title  */}
      <View style={styles.pageTitleContainer}>
        <Text style={styles.txtPageTitle}>Phone Validation</Text>
      </View>

      {/* Inputfield  */}
      <View style={styles.textFiledContainer}>
        <TextField
          label={'Please enter the validation code that we sent you'}
          value={validationCode}
          onChangeText={setValidationCode}
          style={styles.textFiledStyle}
          errorText={
            isSubmitted && !isCodeValid
              ? 'Invalid validation code, please try again :)'
              : ''
          }
          keyboardType={'numeric'}
        />
      </View>

      {/* Button  */}
      <View style={styles.nextButtonContainer}>
        <Button label="Next" onPress={handleOnNext} />
      </View>

      {/* Link  */}
      <View style={styles.linkContainer}>
        <Text style={[styles.txtStyle, styles.txtMsgColor]}>
          Didn’t get the code?{' '}
        </Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() =>
            Alert.alert('Resend code', `You'll get new code soon!`)
          }>
          <Text style={[styles.txtStyle, styles.txtLinkStyle]}>
            Resend Code
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default SignUpPhoneValidation;
