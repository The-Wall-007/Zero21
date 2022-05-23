export interface iFont {
  fontFamily: string;
  fontSize: number;
  fontStyle?: 'normal' | 'italic';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  lineHeight?: number;
  letterSpacing?: number;
}

export interface iTypographyTheme {
  Dongle: {
    Reg: iFont;
  };
  Nunito: {
    Reg: iFont;
  };
}
