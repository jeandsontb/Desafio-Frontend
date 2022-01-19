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
        textButton: string;
        textClean: string;
        textGray: string;
        grayRelative: string;
    },
    fonts: {
      lato: string;
      cormorant: string;
      plafair: string;
    }
  }
}