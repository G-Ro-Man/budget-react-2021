import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { AppContext } from "../../providers/context";
import { IntlAppProvider } from "../../providers/i18n";
import { getTheme } from "../../providers/themes/getTheme";
import App from "./app";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { state } = useContext(AppContext);

  return (
    <ThemeProvider theme={getTheme(state.themeName)}>
      <IntlAppProvider>
        <App />
      </IntlAppProvider>
    </ThemeProvider>
  );
};
