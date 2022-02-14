import { ThemeProvider } from "@emotion/react";
import { addDecorator } from "@storybook/react";
import theme from "../configs/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator((storyFn)=> (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
))

// addDecorator(withThemes(ThemeProvider, [theme]));
