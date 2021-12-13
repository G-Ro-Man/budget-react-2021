import { getFromStorage } from "../../utils/sessionStoreage";
import { LOCALES } from "../i18n";
import { THEMES } from "../themes/themeList";

const defaultContent = {
  currency: getFromStorage("currency") || "UAH",
  themeName: getFromStorage("themeName") || THEMES.BASIC,
  locale: getFromStorage("locale") || LOCALES.ENGLISH,
};

export default defaultContent;
