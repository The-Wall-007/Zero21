import {iTypographyTheme} from '../Models/iTheme';
import Normalize from './mixins';

const FontNames = {
  Dongle: 'Dongle-Bold',
  Nunito: 'Nunito-Regular',
};

const typography: iTypographyTheme = {
  Dongle: {
    Reg: {
      fontFamily: FontNames.Dongle,
      fontSize: Normalize(18),
    },
  },
  Nunito: {
    Reg: {
      fontFamily: FontNames.Nunito,
      fontSize: Normalize(9),
    },
  },
};

export default typography;
