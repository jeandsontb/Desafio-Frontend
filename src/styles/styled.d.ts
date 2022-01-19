import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        primary: string;
        primaryLigh: string;
        primaryOpacity: string;
        secondary: string;
        tertiary: string;
        background: string;
        background2: string;
        textMenuNormal: string;
        backgroundBlack: string;
        backgroundBlue: string;
        backgroundClean: string;
        buttonSecondaryText: string;
        textButton: string;
        textClean: string;
        textGray: string;
        textGrayStrong: string;
        grayRelative: string;
        textGrayLight: string;
        textGolden: string;
    },
    fonts: {
      lato: string;
      cormorant: string;
      plafair: string;
    }
  }
}