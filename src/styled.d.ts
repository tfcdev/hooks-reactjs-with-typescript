import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      mainBg: string;
      secondaryBg: string;

      /* Project */
      blue_50: string;
      blue_500: string;
      white_500: string;
    };
  }
}
