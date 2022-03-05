import { ThemeProvider } from "@emotion/react";
import { addDecorator } from "@storybook/react";
import theme from "../configs/theme";
import store from '../configs/Store';
import { Provider } from "react-redux";
import { RouterContext } from "next/dist/shared/lib/router-context";

// export const decorators = [withNextRouter()]
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

addDecorator((storyFn)=> (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
    {storyFn()}
    </Provider>
  </ThemeProvider>
))

// addDecorator(withThemes(ThemeProvider, [theme]));
