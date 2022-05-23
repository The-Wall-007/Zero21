import {StyleSheet} from 'react-native';

import {Fonts} from '@/Theme';
import Normalize from '@/Theme/mixins';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backArrowContainer: {
    marginTop: Normalize(16),
    marginLeft: Normalize(16),
    marginBottom: Normalize(8),
  },
  backArrowStyle: {
    height: Normalize(16),
    width: Normalize(11),
  },

  pageTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtPageTitle: {
    ...Fonts.Dongle.Reg,
    fontSize: Normalize(48),
    color: '#0C3F72',
  },

  textFiledContainer: {
    marginTop: Normalize(23),
    marginHorizontal: Normalize(16),
  },
  textFiledStyle: {
    backgroundColor: '#ffffff',
  },

  nextButtonContainer: {
    marginTop: Normalize(50),
  },

  linkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: Normalize(16),
  },
  txtStyle: {
    ...Fonts.Nunito.Reg,
    fontSize: Normalize(14),
  },
  txtMsgColor: {
    color: '#0C3F72',
  },
  txtLinkStyle: {
    color: '#018AD9',
    textDecorationLine: 'underline',
  },
});

export default styles;
