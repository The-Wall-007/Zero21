import React, {useState} from 'react';
import {StyleProp, Text, TextInput, View, ViewStyle} from 'react-native';

import styles from './styles';

type Props = React.ComponentProps<typeof TextInput> & {
  label?: string;
  compulsory?: boolean;
  errorText?: string;
  isEditable?: boolean;
  style?: StyleProp<ViewStyle>;
};

const TextField: React.FC<Props> = props => {
  const {
    label,
    compulsory,
    errorText,
    value,
    style,
    onBlur,
    onFocus,
    isEditable,
    ...restOfProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  /**
   * This is for the border color, it has main 4 state, light, dark, error and isFocused
   * @returns color
   */
  const getBorderColor = () => {
    if (errorText) {
      return '#FF3159';
    } else {
      return '#B3CEE9';
    }
  };

  return (
    <View>
      {label && (
        <View style={styles.labelStyle}>
          <Text style={styles.txtLabel}>{label}</Text>
        </View>
      )}
      <TextInput
        testID={'textInput' + label}
        editable={isEditable}
        style={[
          styles.container,
          {
            borderColor: getBorderColor(),
          },
          style,
        ]}
        {...restOfProps}
        value={value}
        onBlur={event => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        onFocus={event => {
          setIsFocused(true);
          onFocus?.(event);
        }}
      />

      {!!errorText && (
        <Text style={[styles.errorText, {color: getBorderColor()}]}>
          {errorText}
        </Text>
      )}
    </View>
  );
};

export default TextField;
