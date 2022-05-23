import {StyleSheet} from 'react-native';

import {Fonts} from '@/Theme';
import Normalize from '@/Theme/mixins';

const styles = StyleSheet.create({
  labelStyle: {
    marginVertical: Normalize(5),
  },
  txtLabel: {
    ...Fonts.Nunito.Reg,
    color: '#0C3F72',
    fontWeight: '400',
    lineHeight: Normalize(20),
    fontSize: Normalize(15),
  },

  container: {
    height: Normalize(40),
    borderRadius: Normalize(10),
    borderWidth: Normalize(1),
    padding: Normalize(10),
  },

  errorText: {
    ...Fonts.Nunito.Reg,
    fontWeight: '600',
    fontSize: Normalize(13),
  },
});

export default styles;
