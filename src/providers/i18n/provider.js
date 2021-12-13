import { useContext } from "react";
import { IntlProvider } from "react-intl";
import flatten from "flat";

import { AppContext } from "../context";

import { LOCALES } from "./constants";
import { messages } from "./messages";

export const IntlAppProvider = ({ children }) => {
  const { state } = useContext(AppContext);

  return (
    <IntlProvider
      messages={flatten(messages[state.locale])}
      locale={state.locale}
      defaultLocale={LOCALES.ENGLISH}
    >
      {children}
    </IntlProvider>
  );
};
