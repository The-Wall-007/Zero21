import {StyleSheet} from 'react-native';

import {Fonts} from '@/Theme';
import Normalize from '@/Theme/mixins';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    height: Normalize(50),
    width: Normalize(222),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Normalize(30),
  },

  buttonLabel: {
    ...Fonts.Nunito.Reg,
    color: '#ffffff',
    fontWeight: '700',
    lineHeight: Normalize(20),
    fontSize: Normalize(16),
  },
});

export default styles;
