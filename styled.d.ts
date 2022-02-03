import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      border: string;
      textPrimary: string;
      textSecondary: string;
    };
  }
}
