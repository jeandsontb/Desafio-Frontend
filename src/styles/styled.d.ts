import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        primary: string;
        primaryOpacity: string;
        secondary: string;
        tertiary: string;
        background: string;
        background2: string;
        textMenuNormal: string;
        backgroundBlack: string;
        textButton: string;
        textClean: string;
    },
    fonts: {
      lato: string;
      cormorant: string;
      plafair: string;
    }
  }
}